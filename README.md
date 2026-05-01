# Mohammed Belcaid — Curriculum Vitæ

A Swiss / typographic CV for **Mohammed Belcaid**, Senior Security Engineer. Print-first, monochrome ink on warm paper, single restrained red accent. Built with vanilla **HTML + CSS + a few lines of JS** — no framework, no build step, no animation library.

Aesthetic notes:

- 1970s annual-report layout: heavy section rules, numbered §-sections, two-column tabular grid (label-left / content-right)
- Set in **Inter Tight** with `font-variant-numeric: tabular-nums` for proper figure alignment
- Restrained palette: `#F4F1EA` paper · `#111` ink · `#C8102E` red accent (used only for section numbers, status dot, link hover)
- A4-aware `@page` print stylesheet — prints as a clean two-page resume
- No motion: page renders, sits still, reads. Scroll-spy on contents only.

---

## File structure

```
.
├── index.html      # semantic markup, masthead → contents → § 01–07 → colophon
├── style.css       # design system + print stylesheet
├── script.js       # footer year + contents scroll-spy (no animations)
├── .nojekyll       # disables Jekyll on GitHub Pages
└── README.md       # this file
```

External resources: Google Fonts (Inter Tight only). No CDN frameworks.

---

## Local preview

Open `index.html` directly in any modern browser, or:

```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

To print or save as PDF, use the browser's **Print** dialog → **Save as PDF**. The print stylesheet kicks in automatically (A4, 18 mm top/bottom margins, hidden contents/scroll-spy).

---

## Deploy to GitHub Pages

### 1. Create a new repository

1. Go to <https://github.com/new>.
2. Name it `cv` — or `<your-username>.github.io` for a clean root URL.
3. Visibility: **Public** (free Pages requires public).
4. Do **not** initialize with a README, .gitignore, or license.
5. Click **Create repository**.

### 2. Push the code

```bash
git init
git add .
git commit -m "Initial commit: CV"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

### 3. Enable GitHub Pages

Repo → **Settings** → **Pages** → **Source: Deploy from a branch** → branch `main` / folder `/ (root)` → **Save**. Live in ~30–60 seconds at:

```
https://<your-username>.github.io/<repo-name>/
```

### 4. (Optional) Custom domain

Repo → **Settings → Pages → Custom domain**, then add the matching DNS records:

| Type  | Host | Value                          |
| ----- | ---- | ------------------------------ |
| A     | @    | 185.199.108.153                |
| A     | @    | 185.199.109.153                |
| A     | @    | 185.199.110.153                |
| A     | @    | 185.199.111.153                |
| CNAME | www  | `<your-username>.github.io`    |

Tick **Enforce HTTPS** once the certificate is issued.

---

## GitHub CLI shortcut

```bash
gh repo create cv --public --source=. --remote=origin --push
gh api -X POST "repos/{owner}/cv/pages" \
  -f "source[branch]=main" -f "source[path]=/"
```

---

## Customization

| What                  | Where                                                    |
| --------------------- | -------------------------------------------------------- |
| Personal info / copy  | `index.html`                                             |
| Color tokens          | `:root` in `style.css` (`--paper`, `--ink`, `--accent`)  |
| Type pairing          | `body { font-family: ... }` in `style.css`               |
| Section column width  | `--col-aside` and `--col-gap` in `:root`                 |
| Print page size       | `@page { size: A4 }` in `style.css`                      |

Swap the accent (e.g. cobalt blue):

```css
:root { --accent: #1D4ED8; }
```

Swap the paper (pure white):

```css
:root { --paper: #FFFFFF; }
```

---

## License

© Mohammed Belcaid. CV content is the property of the owner. The HTML/CSS/JS scaffolding is free to reuse for your own CV.
