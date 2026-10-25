# Juan Carvajal — Portfolio

Personal portfolio built with Astro, TypeScript and Webcore UI.

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

## Content

- `src/pages/index.astro`: homepage and portfolio interactions.
- `src/pages/work/[id].astro`: project detail pages.
- `src/data/content.ts`: professional experience and project content.
- `public/`: static assets and shared theme files.

Keep `package-lock.json` committed so local and deployment builds install the same dependency versions.
