import os
import re

directory = r"d:\ai\school_v1.2\src"

# Define our color mappings
replacements = {
    "sky-": "indigo-",
    "cyan-": "blue-",
    "emerald-": "purple-",
    "teal-": "fuchsia-",
    "violet-": "indigo-",
    "fuchsia-": "orange-",
    "amber-": "orange-",
    # Specific exceptions or multi-replacements can go here if needed
}

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    new_content = content
    for old_color, new_color in replacements.items():
        # Match word boundary before the color to avoid partial matches
        pattern = r'\b' + old_color + r'(\d+)'
        new_content = re.sub(pattern, new_color + r'\1', new_content)

    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated: {filepath}")

for root, dirs, files in os.walk(directory):
    for file in files:
        if file.endswith('.jsx') or file.endswith('.js'):
            process_file(os.path.join(root, file))

print("Bulk color replacement completed.")
