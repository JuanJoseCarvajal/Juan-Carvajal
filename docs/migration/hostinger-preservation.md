# Hostinger content preservation — 2026-10-30

Source: https://juancarvajal.site/ (the existing site, before Git deployment).
Repository: JuanJoseCarvajal/Juan-Carvajal.

## Verified coverage

The authenticated Hostinger file inventory returned 103 entries: five directories,
95 content files, and three macOS `.DS_Store` files. All 95 content files are
preserved byte-for-byte in `public/legacy/` (43,004,164 bytes). Each downloaded
file's size matched the Hostinger inventory. SHA-256 checksums are recorded in
`hostinger-manifest.json`; source files and build output pass those checks.

This includes the original homepage, all seven complete case studies, all images,
logos, styles, scripts, and `img/WorkBench_Design_System.mp4`. Before this import,
29 files had no byte-identical copy under the repository's `src/` or `public/`.
Only `.DS_Store` metadata was excluded. No databases are assigned to this domain
according to Hostinger's database listing. This is a website document-root
snapshot, not a backup of the entire hosting account, email, DNS, or billing.

## Access after publication

- `/legacy/index.html`: complete original portfolio.
- `/legacy/<original-case-filename>.html`: complete original case studies.
- The modern homepage and each modern case link to their complete originals.
- The seven old root-level case-study HTML URLs redirect to the corresponding
  modern case, where the original is accessible.

The modern editorial summaries do not replace the complete source material.
Original HTML, CSS and JavaScript remain unmodified, including their original
external CDN, font and website references. These external services are listed in
`legacy-link-audit.json`; they are dependencies, not files stored at Hostinger.
No local file references in the eight original HTML pages are missing.

## Recheck before deployment

```sh
npm run build
python3 scripts/verify-hostinger-archive.py --build
```

The check requires exactly the manifest's 95 files and validates every size and
SHA-256 checksum in both the source snapshot and the built site. If the live site
changes before migration, capture and compare a new inventory before replacing it.

No Hostinger deployment or Git auto-deployment configuration was changed by this
preservation task. The production website remains the migration source.
