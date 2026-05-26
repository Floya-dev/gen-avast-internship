import re

def decode_erp():
    with open('index.html', 'r') as f:
        content = f.read()

    numbers = re.findall(r'erp\[\d+\]\s*=\s*(\d+);', content)
    
    em = ""
    for num_str in numbers:
        tmp = int(num_str)
        # Replicate the JS loop logic
        for i in range(3, -1, -1):
            char_code = (tmp // (256**i)) % 256
            if char_code > 0:
                em += chr(int(char_code))
                
    print("--- DECODED STRING (em) ---")
    print(em)
    
    with open('decoded_brain.js', 'w') as f:
        f.write(em)

decode_erp()