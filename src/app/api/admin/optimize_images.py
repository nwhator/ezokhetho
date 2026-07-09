import os
import sys
import json
from PIL import Image

src_root = "c:/Users/nwhat/ezokhetho/Ezokhetho-images/collections"
dest_dir = "c:/Users/nwhat/ezokhetho/public/images/ezokhetho"
os.makedirs(dest_dir, exist_ok=True)

# 9 collections definition
collections_map = [
    {
        "id": "sophiatown",
        "title": "Sophiatown '21",
        "path": "1. Sophiatown _21",
        "desc": "A nostalgic look at the vibrant musical, style and cultural hub of Sophiatown during its golden era, celebrating resilience and style."
    },
    {
        "id": "izimbokodo",
        "title": "Izimbokodo '22",
        "path": "2. izmibokodo _22",
        "desc": "Inspired by the courage and resilience of Black South African women, exploring femininity and traditional South African identity."
    },
    {
        "id": "khumbulekhaya",
        "title": "Khumbulekhaya '22",
        "path": "3. Khumbulekhaya _22",
        "desc": "A celebration of reconnecting with family, culture and heritage. Home is not a place — it is a feeling carried within."
    },
    {
        "id": "umkhathizwe",
        "title": "Umkhathizwe — The Horizon '23",
        "path": "4. Umkhathizwe - The Horizon _23 (Lagos Fashion Week)",
        "desc": "Debuted at Lagos Fashion Week. A futuristic exploration of African fashion reaching beyond boundaries into the global horizon."
    },
    {
        "id": "inganekwane",
        "title": "Inganekwane '23",
        "path": "5. Inganekwane_ inqina le nkukhu _23 (SAMW)",
        "desc": "Inspired by traditional folklore and childhood stories, combining playful proportions with rich woven heritage textiles."
    },
    {
        "id": "kwa-suka-sukela",
        "title": "Kwa-suka-sukela '24",
        "path": "6. Kwa-suka-sukela _24 (SAMW)",
        "desc": "A tribute to oral storytelling traditions, featuring bold silhouettes, structural details, and contemporary pattern work."
    },
    {
        "id": "ngithwale",
        "title": "Ngithwale — Carry Me '24",
        "path": "7. _Ngithwale_ - Carry Me _24 (SAFW)",
        "desc": "This collection honours mothers and the generations of women whose sacrifices, prayers and strength continue to carry us."
    },
    {
        "id": "zodwa",
        "title": "Zodwa '25",
        "path": "8. ZODWA _25/ZODWA - Lookbook",  # Use the ZODWA - Lookbook folder
        "desc": "Ezokhetho's signature collection celebrating modern tailoring, flowing drapes, and timeless structured designs."
    },
    {
        "id": "entathakusa",
        "title": "Entathakusa '26",
        "path": "9. Entathakusa _26/Entathakusa - SAMW-TWF", # Use the runway show
        "desc": "Celebrating the morning dawn, new beginnings, and the progression of contemporary South African design."
    }
]

# We will also add Designer images for the About section
designer_src = "c:/Users/nwhat/ezokhetho/Ezokhetho-images/collections/Designer"
about_src = "c:/Users/nwhat/ezokhetho/Ezokhetho-images/About Us Images"

def optimize_image(src_path, dest_filename, max_width=1200):
    try:
        with Image.open(src_path) as img:
            # Convert RGBA/P to RGB if saving as JPEG
            if img.mode != "RGB":
                img = img.convert("RGB")
            
            # Calculate resize
            width, height = img.size
            if width > max_width:
                ratio = max_width / float(width)
                new_height = int(float(height) * float(ratio))
                img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
            
            dest_path = os.path.join(dest_dir, dest_filename)
            img.save(dest_path, "JPEG", quality=82, optimize=True)
            print(f"Optimized: {dest_filename}")
            return f"/images/ezokhetho/{dest_filename}"
    except Exception as e:
        print(f"Failed to optimize {src_path}: {e}")
        return None

results = {}

# Process each collection
for c in collections_map:
    col_path = os.path.join(src_root, c["path"])
    if not os.path.exists(col_path):
        print(f"Directory not found: {col_path}")
        continue
    
    # Get all images recursively
    all_files = []
    for root, dirs, files in os.walk(col_path):
        for f in files:
            if f.lower().endswith(('.png', '.jpg', '.jpeg')):
                all_files.append(os.path.join(root, f))
    
    if not all_files:
        print(f"No images found for {c['title']}")
        continue
    
    # Pick up to 5 images for optimization
    selected_files = all_files[:5]
    optimized_urls = []
    for i, src_file in enumerate(selected_files):
        filename = f"{c['id']}_{i+1}.jpg"
        url = optimize_image(src_file, filename)
        if url:
            optimized_urls.append(url)
    
    results[c["id"]] = {
        "id": c["id"],
        "title": c["title"],
        "desc": c["desc"],
        "images": optimized_urls
    }

# Process Designer images
designer_images = []
if os.path.exists(designer_src):
    d_files = [os.path.join(designer_src, f) for f in os.listdir(designer_src) if f.lower().endswith(('.png', '.jpg', '.jpeg'))]
    for i, src_file in enumerate(d_files):
        filename = f"designer_{i+1}.jpg"
        url = optimize_image(src_file, filename, max_width=1000)
        if url:
            designer_images.append(url)

# Process About images
about_images = []
if os.path.exists(about_src):
    a_files = [os.path.join(about_src, f) for f in os.listdir(about_src) if f.lower().endswith(('.png', '.jpg', '.jpeg', '.webp'))]
    for i, src_file in enumerate(a_files):
        filename = f"about_{i+1}.jpg"
        url = optimize_image(src_file, filename, max_width=1000)
        if url:
            about_images.append(url)

# Save result mappings as a json file to be imported easily
summary = {
    "collections": results,
    "designer": designer_images,
    "about": about_images
}

with open("c:/Users/nwhat/ezokhetho/src/data/optimized_mappings.json", "w") as f:
    json.dump(summary, f, indent=2)

print("Mapping file saved successfully.")
