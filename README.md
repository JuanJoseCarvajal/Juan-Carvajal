# Juan Carvajal — Portfolio

Personal portfolio built with Astro and TypeScript.

## Local development

Use Node.js 22 LTS and npm.

```sh
npm ci
npm run dev
```

## Production build

```sh
npm run build
npm run preview
```

Deploy the generated `dist/` directory with a static hosting provider. Dependencies, Astro caches and build output are generated locally and are not committed to Git.

The site generates Spanish and English pages. Contact prepares an email in the visitor’s mail app; it does not send email from a server. Legacy project URLs redirect to the corresponding new case studies.

## Content

- `src/components/Home.astro`: homepage and contact interactions.
- `src/data/projects.ts`: seven bilingual case studies.
- `src/data/i18n.ts`: Spanish and English interface copy.
- `src/pages/work/[id].astro`: project detail pages.
- `src/data/content.ts`: professional experience and project content.
- `public/`: static assets and shared theme files.

Keep `package-lock.json` committed so local and deployment builds install the same dependency versions.

## Hostinger content archive

The full original site is preserved in `public/legacy/`. See [the preservation report](docs/migration/hostinger-preservation.md) and run `python3 scripts/verify-hostinger-archive.py --build` after building to verify every archived file.
