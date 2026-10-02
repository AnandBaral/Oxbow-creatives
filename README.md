# Oxbow Creatives

TanStack Start site configured for GitHub Pages.

Live URL:
https://anandbaral.github.io/Oxbow-creatives/

## Repository structure

The application files must be at the repository root:

- `package.json`
- `vite.config.ts`
- `src/`
- `public/images/`
- `.github/workflows/deploy.yml`

Do not put these inside another `oxbow-site/` directory.

## Deployment

Push the repository to the `main` branch. GitHub Actions builds the
prerendered TanStack Start site and deploys `.output/public` to GitHub Pages.

The Vite base path is `/Oxbow-creatives/`, and public images are referenced
through `import.meta.env.BASE_URL`.
