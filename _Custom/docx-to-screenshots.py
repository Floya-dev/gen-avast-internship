import os
import subprocess
import shutil
import glob
from concurrent.futures import ThreadPoolExecutor

# --- CONFIGURATION ---
ROOT_DIR = "."             # Root of your hex folders
OUTPUT_DIR = "screenshots"  # Main screenshots directory
MAX_WORKERS = 4            # Number of parallel conversions

if not os.path.exists(OUTPUT_DIR):
    os.makedirs(OUTPUT_DIR)

def capture_screenshot(docx_path):
    filename = os.path.basename(docx_path)
    file_id = os.path.splitext(filename)[0]
    
    single_path = os.path.join(OUTPUT_DIR, f"{file_id}.png")
    folder_path = os.path.join(OUTPUT_DIR, file_id)
    
    if os.path.exists(single_path) or os.path.exists(folder_path):
        return f"⏭️ Skipped: {file_id}"
    
    temp_dir = f"/tmp/render_{file_id}"
    # Unique profile directory for this specific worker/file
    user_profile = f"/tmp/profile_{file_id}"
    
    try:
        os.makedirs(temp_dir, exist_ok=True)
        
        # 1. Convert DOCX to PDF 
        # Added -env:UserInstallation to prevent profile locking
        result = subprocess.run([
            "libreoffice", 
            f"-env:UserInstallation=file://{user_profile}", 
            "--headless", 
            "--convert-to", "pdf",
            "--outdir", temp_dir, 
            docx_path
        ], capture_output=True, text=True, timeout=60)
        
        # LibreOffice name output logic: it takes the base name and adds .pdf
        # We search for any .pdf in the temp folder to be safe
        pdf_files = glob.glob(os.path.join(temp_dir, "*.pdf"))
        
        if not pdf_files:
            return f"❌ PDF Failed: {file_id} | Error: {result.stderr[:100]}"
        
        pdf_path = pdf_files[0]
        
        # 2. Convert PDF to PNG
        subprocess.run([
            "pdftoppm", "-png", "-scale-to", "800",
            pdf_path, os.path.join(temp_dir, "p")
        ], check=True)
        
        # 3. Analyze and move
        generated_pages = sorted(glob.glob(os.path.join(temp_dir, "p-*.png")))
        num_pages = len(generated_pages)
        
        if num_pages == 1:
            shutil.move(generated_pages[0], single_path)
            status = f"📄 Single: {file_id}"
        elif num_pages > 1:
            os.makedirs(folder_path, exist_ok=True)
            for i, p_path in enumerate(generated_pages):
                shutil.move(p_path, os.path.join(folder_path, f"page_{i+1}.png"))
            status = f"📚 Multi ({num_pages}): {file_id}"
        else:
            return f"❌ Render Error: {file_id}"
            
        return f"✅ {status}"
    
    except subprocess.TimeoutExpired:
        return f"⏳ Timeout: {file_id}"
    except Exception as e:
        return f"❌ Error: {file_id} - {str(e)}"
    finally:
        # Cleanup both the temp render dir and the unique user profile
        if os.path.exists(temp_dir): shutil.rmtree(temp_dir)
        if os.path.exists(user_profile): shutil.rmtree(user_profile)

def main():
    all_files = []
    for root, _, files in os.walk(ROOT_DIR):
        for file in files:
            if file.lower().endswith(".docx"):
                all_files.append(os.path.join(root, file))

    total = len(all_files)
    print(f"📸 Starting screenshot capture for {total} files...")

    # Using a ThreadPool to speed up the process
    with ThreadPoolExecutor(max_workers=MAX_WORKERS) as executor:
        for i, result in enumerate(executor.map(capture_screenshot, all_files)):
            if (i + 1) % 10 == 0:
                print(f"[{i+1}/{total}] {result}")

if __name__ == "__main__":
    main()
