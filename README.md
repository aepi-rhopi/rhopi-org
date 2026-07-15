# rhopi.org

Source code for [rhopi.org](https://rhopi.org) — Rho Pi chapter of Alpha Epsilon Pi at RPI.

## How it works

- The site is a [React](https://react.dev) app built with [Vite](https://vite.dev).
- Hosting is **GitHub Pages**, free with this repo. There is no separate hosting account.
- Every push to the `main` branch automatically rebuilds and publishes the site
  (see `.github/workflows/deploy.yml`). Changes go live in about a minute.

## Editing the site

**Small text changes** can be made directly on github.com: open a file under `src/`,
click the pencil icon, edit, and commit to `main`. The site redeploys automatically.

**Local development:**

```bash
git clone https://github.com/almog-co/rhopi.git
cd rhopi
npm install
npm run dev      # local preview at http://localhost:5173
```

When you're happy, commit and push to `main` — that's the deploy.

```bash
npm run build    # optional: verify the production build passes before pushing
```

## Where things live

| Path | What it is |
|------|------------|
| `src/App.jsx` | The page content |
| `src/index.css` | Styles |
| `public/` | Static files copied as-is (images, `CNAME`) |
| `public/CNAME` | Binds the custom domain — **do not delete** |
| `.github/workflows/deploy.yml` | The auto-deploy pipeline |

## Domain

`rhopi.org` is registered at Namecheap. DNS points the apex domain at GitHub Pages'
A records and `www` at `almog-co.github.io`. The custom domain is configured in
repo Settings → Pages.
