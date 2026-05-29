import os
import imagehash
from PIL import Image
import shutil
from collections import defaultdict

# --- CONFIG ---
IMAGE_DIR = "screenshots"
SORTED_DIR = "template_clusters"
THRESHOLD = 12  # Sensitivity: Higher number = more "different" images grouped together

if not os.path.exists(SORTED_DIR):
    os.makedirs(SORTED_DIR)

# Dictionary to store {hash: list_of_filenames}
clusters = []

print(f"🧐 Grouping 10k images into templates (Threshold: {THRESHOLD})...")

files = [f for f in os.listdir(IMAGE_DIR) if f.lower().endswith('.png')]

for img_name in files:
    path = os.path.join(IMAGE_DIR, img_name)
    try:
        # Generate hash
        current_hash = imagehash.dhash(Image.open(path))
        
        found_cluster = False
        for cluster in clusters:
            # Compare current image to the first image in each existing cluster
            distance = current_hash - cluster['hash']
            if distance <= THRESHOLD:
                cluster['files'].append(img_name)
                found_cluster = True
                break
        
        if not found_cluster:
            clusters.append({'hash': current_hash, 'files': [img_name]})
            
    except Exception as e:
        print(f"Error: {e}")

# Save the results
for i, cluster in enumerate(clusters):
    cluster_folder = os.path.join(SORTED_DIR, f"template_{i:03d}")
    os.makedirs(cluster_folder, exist_ok=True)
    for f in cluster['files']:
        shutil.copy(os.path.join(IMAGE_DIR, f), os.path.join(cluster_folder, f))

print(f"✨ Done! Identified {len(clusters)} unique templates.")
