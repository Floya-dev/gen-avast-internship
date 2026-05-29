import os
from docx import Document
from collections import Counter, defaultdict
import json
from pathlib import Path

class DocxMetadataAnalyzer:
    def __init__(self, root_folder):
        self.root_folder = root_folder
        self.metadata_stats = defaultdict(Counter)
        self.file_count = 0
        
    def extract_metadata(self, docx_path):
        """Extract all metadata from a .docx file"""
        try:
            doc = Document(docx_path)
            core_props = doc.core_properties
            
            metadata = {
                'author': core_props.author if core_props.author else 'BLANK',
                'category': core_props.category if core_props.category else 'BLANK',
                'comments': core_props.comments if core_props.comments else 'BLANK',
                'content_status': core_props.content_status if core_props.content_status else 'BLANK',
                'created': str(core_props.created) if core_props.created else 'BLANK',
                'identifier': core_props.identifier if core_props.identifier else 'BLANK',
                'keywords': core_props.keywords if core_props.keywords else 'BLANK',
                'language': core_props.language if core_props.language else 'BLANK',
                'last_modified_by': core_props.last_modified_by if core_props.last_modified_by else 'BLANK',
                'last_printed': str(core_props.last_printed) if core_props.last_printed else 'BLANK',
                'modified': str(core_props.modified) if core_props.modified else 'BLANK',
                'revision': str(core_props.revision) if core_props.revision else 'BLANK',
                'subject': core_props.subject if core_props.subject else 'BLANK',
                'title': core_props.title if core_props.title else 'BLANK',
                'version': core_props.version if core_props.version else 'BLANK',
            }
            
            return metadata
        except Exception as e:
            print(f"Error reading {docx_path}: {str(e)}")
            return None
    
    def analyze_folder(self):
        """Recursively analyze all .docx files in the folder"""
        print(f"Scanning folder: {self.root_folder}\n")
        
        for root, dirs, files in os.walk(self.root_folder):
            for file in files:
                if file.endswith('.docx') and not file.startswith('~$'):
                    file_path = os.path.join(root, file)
                    print(f"Processing: {file_path}")
                    
                    metadata = self.extract_metadata(file_path)
                    if metadata:
                        self.file_count += 1
                        for key, value in metadata.items():
                            # Count ALL values, including BLANK
                            self.metadata_stats[key][value] += 1
        
        print(f"\n✓ Processed {self.file_count} files")
    
    def print_results(self):
        """Print the analysis results"""
        print("\n" + "="*80)
        print("METADATA ANALYSIS RESULTS")
        print("="*80)
        print(f"Total files analyzed: {self.file_count}\n")
        
        for field, counter in sorted(self.metadata_stats.items()):
            print(f"\n{field.upper().replace('_', ' ')}:")
            print("-" * 40)
            
            if counter:
                # Sort by count (descending), but put BLANK at the end if you prefer
                sorted_items = sorted(counter.items(), key=lambda x: (-x[1], x[0] != 'BLANK'))
                
                for value, count in sorted_items:
                    percentage = (count / self.file_count * 100) if self.file_count > 0 else 0
                    print(f"  [{count:4d}x] ({percentage:5.1f}%) {value}")
            else:
                print("  (No data collected)")
    
    def print_summary(self):
        """Print a summary of blank vs filled fields"""
        print("\n" + "="*80)
        print("SUMMARY - BLANK vs FILLED FIELDS")
        print("="*80)
        
        summary = []
        for field, counter in sorted(self.metadata_stats.items()):
            blank_count = counter.get('BLANK', 0)
            filled_count = self.file_count - blank_count
            blank_pct = (blank_count / self.file_count * 100) if self.file_count > 0 else 0
            filled_pct = (filled_count / self.file_count * 100) if self.file_count > 0 else 0
            
            summary.append({
                'field': field,
                'blank': blank_count,
                'filled': filled_count,
                'blank_pct': blank_pct,
                'filled_pct': filled_pct
            })
        
        # Print header
        print(f"{'Field':<20} {'Filled':<15} {'Blank':<15} {'Fill Rate':<10}")
        print("-" * 80)
        
        # Sort by fill rate (descending)
        for item in sorted(summary, key=lambda x: -x['filled_pct']):
            print(f"{item['field']:<20} "
                  f"{item['filled']:4d} ({item['filled_pct']:5.1f}%)   "
                  f"{item['blank']:4d} ({item['blank_pct']:5.1f}%)   "
                  f"{'█' * int(item['filled_pct'] / 5)}")
    
    def export_to_json(self, output_file='metadata_analysis.json'):
        """Export results to JSON file"""
        results = {
            'total_files': self.file_count,
            'metadata_statistics': {
                field: dict(counter) for field, counter in self.metadata_stats.items()
            },
            'summary': {}
        }
        
        # Add summary statistics
        for field, counter in self.metadata_stats.items():
            blank_count = counter.get('BLANK', 0)
            filled_count = self.file_count - blank_count
            results['summary'][field] = {
                'blank_count': blank_count,
                'filled_count': filled_count,
                'blank_percentage': (blank_count / self.file_count * 100) if self.file_count > 0 else 0,
                'filled_percentage': (filled_count / self.file_count * 100) if self.file_count > 0 else 0
            }
        
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(results, f, indent=2, ensure_ascii=False)
        
        print(f"\n✓ Results exported to: {output_file}")
    
    def export_to_csv(self, output_file='metadata_analysis.csv'):
        """Export results to CSV file"""
        import csv
        
        with open(output_file, 'w', newline='', encoding='utf-8') as f:
            writer = csv.writer(f)
            writer.writerow(['Field', 'Value', 'Count', 'Percentage'])
            
            for field, counter in sorted(self.metadata_stats.items()):
                for value, count in sorted(counter.items(), key=lambda x: -x[1]):
                    percentage = (count / self.file_count * 100) if self.file_count > 0 else 0
                    writer.writerow([field, value, count, f"{percentage:.2f}%"])
        
        print(f"✓ Results exported to: {output_file}")
    
    def export_summary_to_csv(self, output_file='metadata_summary.csv'):
        """Export summary statistics to CSV file"""
        import csv
        
        with open(output_file, 'w', newline='', encoding='utf-8') as f:
            writer = csv.writer(f)
            writer.writerow(['Field', 'Filled_Count', 'Filled_Percentage', 'Blank_Count', 'Blank_Percentage'])
            
            for field, counter in sorted(self.metadata_stats.items()):
                blank_count = counter.get('BLANK', 0)
                filled_count = self.file_count - blank_count
                blank_pct = (blank_count / self.file_count * 100) if self.file_count > 0 else 0
                filled_pct = (filled_count / self.file_count * 100) if self.file_count > 0 else 0
                
                writer.writerow([field, filled_count, f"{filled_pct:.2f}%", blank_count, f"{blank_pct:.2f}%"])
        
        print(f"✓ Summary exported to: {output_file}")


def main():
    # Configuration
    print("="*80)
    print("DOCX METADATA ANALYZER - Including Empty Fields")
    print("="*80)
    
    FOLDER_PATH = input("\nEnter the folder path to analyze (or press Enter for current directory): ").strip()
    
    if not FOLDER_PATH:
        FOLDER_PATH = '.'
    
    if not os.path.exists(FOLDER_PATH):
        print(f"Error: Folder '{FOLDER_PATH}' does not exist!")
        return
    
    # Run analysis
    analyzer = DocxMetadataAnalyzer(FOLDER_PATH)
    analyzer.analyze_folder()
    
    if analyzer.file_count == 0:
        print("\nNo .docx files found in the specified folder!")
        return
    
    analyzer.print_results()
    analyzer.print_summary()
    
    # Export results
    print("\n" + "="*80)
    export_choice = input("\nExport results? (json/csv/both/no): ").strip().lower()
    
    if export_choice in ['json', 'both']:
        analyzer.export_to_json()
    
    if export_choice in ['csv', 'both']:
        analyzer.export_to_csv()
        analyzer.export_summary_to_csv()
    
    print("\n" + "="*80)
    print("Analysis complete!")
    print("="*80)


if __name__ == "__main__":
    main()
