# George Girgis Portfolio

Personal portfolio for cybersecurity, network operations, automation, and analytics work.

Live site:

https://george-girgis.com

## Local Workflow

Most public-facing content is centralized under `src/data`.

- `src/data/profile.js`: name, summary, links, highlights, resume path
- `src/data/projects.js`: featured case studies
- `src/data/experience.js`: concise work timeline
- `src/data/skills.js`: grouped technical skills
- `media/early-technical-demo.mp4`: self-hosted demo video used by the native video player

After editing the data files, regenerate the homepage:

```powershell
node scripts\build-site.mjs
```

The generated page is `index.html`, which keeps the site compatible with GitHub Pages static hosting.
