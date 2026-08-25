# Hundred Heroes Recruitment Tracker

A static, installable tracker for all 120 recruitable heroes in *Eiyuden Chronicle: Hundred Heroes* — recruitment order, place, requirement, and missable warnings. Progress is saved in the browser via `localStorage`.

## Publish it on GitHub Pages

1. **Create a new repository** on GitHub (e.g. `hundred-heroes-tracker`). Public repos get free Pages hosting; private repos need a paid plan for Pages.
2. **Add these files to the repo root** — either:
   - Web UI: open the repo → **Add file → Upload files** → drag in everything from this folder (keep the `css/`, `js/`, `icons/` subfolders intact) → **Commit changes**.
   - Or with git:
     ```bash
     git init
     git add .
     git commit -m "Add Hundred Heroes tracker"
     git branch -M main
     git remote add origin https://github.com/<your-username>/<repo-name>.git
     git push -u origin main
     ```
3. **Turn on Pages**: repo → **Settings → Pages** → under "Build and deployment", set **Source** to **Deploy from a branch**, **Branch** to `main` / `(root)` → **Save**.
4. Wait about a minute, then your app is live at:
   ```
   https://<your-username>.github.io/<repo-name>/
   ```
5. Open that URL on your phone and use **Add to Home Screen** (Chrome menu → Add to Home screen) to install it like a real app, with offline support via the included service worker.

## Files

- `index.html` — page shell
- `css/styles.css` — styling
- `js/app.js` — hero data + app logic
- `manifest.json` — PWA install config
- `sw.js` — service worker for offline caching
- `icons/` — app icons
