"""Verify the immutable Hostinger snapshot, optionally including build output."""
import argparse
import hashlib
import json
from pathlib import Path

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('--build', action='store_true', help='Also verify dist/legacy')
args = parser.parse_args()
root = Path(__file__).resolve().parents[1]
manifest = json.loads((root / 'docs/migration/hostinger-manifest.json').read_text())
locations = [root / 'public/legacy']
if args.build:
    locations.append(root / 'dist/legacy')
for location in locations:
    expected = {entry['path'] for entry in manifest['files']}
    actual = {str(path.relative_to(location)) for path in location.rglob('*') if path.is_file()}
    if expected != actual:
        raise SystemExit(f'{location}: missing={expected-actual}, unexpected={actual-expected}')
    for entry in manifest['files']:
        path = location / entry['path']
        data = path.read_bytes()
        if len(data) != entry['size_bytes'] or hashlib.sha256(data).hexdigest() != entry['sha256']:
            raise SystemExit(f'Content mismatch: {path}')
    print(f'PASS: {len(expected)} files match size and SHA-256 in {location}')
