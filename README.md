# George Girgis Portfolio

Personal portfolio for cybersecurity, network operations, automation, and analytics work.

Live site:

https://george-girgis.com

## Stack

- Astro
- Tailwind CSS via the Vite plugin
- Centralized content in `src/data/*.js`

## Local Workflow

Most public-facing content is centralized under `src/data`.

- `src/data/profile.js`: name, summary, links, highlights, resume path
- `src/data/projects.js`: featured projects
- `src/data/experience.js`: concise work timeline
- `src/data/skills.js`: grouped technical skills
- `src/data/demo.js`: embedded demo video content and URLs

Start the Astro dev server:

```powershell
.\.tools\node-v24.15.0-win-x64\node.exe scripts\astro-cli.mjs dev --host 0.0.0.0 --port 4321
```

Create a production build:

```powershell
.\.tools\node-v24.15.0-win-x64\node.exe scripts\astro-cli.mjs build
```

## GitHub Pages

The Astro deployment workflow is in `.github/workflows/deploy.yml`.

To use the Astro build on your live domain, set the repository's Pages source to `GitHub Actions`.
