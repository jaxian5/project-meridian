# Skibitech LLC

Independent product engineering studio site.

## GitHub Pages

The static site lives in [`docs/`](docs/index.html). GitHub Pages can serve it as-is.

1. Create a GitHub repository and push this project.
2. In the repo: **Settings → Pages**.
3. Source: **Deploy from a branch**.
4. Branch: `main` (or `master`), folder: **`/docs`**.
5. Save. The site will be at `https://YOURUSER.github.io/YOURREPO/`.

If the repo itself is `YOURUSER.github.io`, copy the contents of `docs/` to the repository root instead (GitHub looks for `index.html` there).

Do not upload `node_modules`. The Pages site is already built.

To rebuild the Pages folder after content changes:

```bash
npm run build
npm run pages
```
