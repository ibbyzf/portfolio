# Ibrahim Feknous portfolio

Static portfolio hosted with GitHub Pages at https://ibbyzf.org.

## Update the website

1. Edit the files in VS Code, or use GitHub's file editor.
2. Upload changed files to the root of this repository and commit them.
3. Wait for the latest Pages deployment in Actions to show a green check.
4. Refresh the website with Ctrl + Shift + R.

## Files

- `index.html`: homepage text and layout.
- `about.html`: biography and education.
- `projects.html`: project list heading.
- `experience.html`: experience heading.
- `project.html`: project detail page shell.
- `content.js`: project descriptions, experience, skills, photo paths, and contact links.
- `styles.css`: colors, fonts, spacing, and responsive layouts.
- `app.js`: page rendering, theme switch, and image viewer.
- `portfolio-effects.js`: cursor ring and small circuit-line accent.
- `ibrahim-feknous-background.pdf`: document opened by Resume.
- `CNAME`: custom domain. Keep this file.

## Cursor and artwork

Each HTML page already loads:

```html
<script src="portfolio-effects.js" defer></script>
```

The file is self-contained. It adds a thin terracotta ring that expands over links, keeps the normal pointer, and hides during keyboard use and text entry. It disables the cursor effect on touch devices and for reduced-motion preferences. The circuit-line art is static, decorative, and only appears in the homepage portrait placeholder.

Remove the script line from each page to turn off both effects. Remove just the `.portrait-fallback` artwork block in the script if you want the cursor without the linework.

## Photos

Add images to `assets/images/` and set their paths in `content.js`.

```js
portrait: { src: "assets/images/portrait.jpg", alt: "Ibrahim Feknous", position: "50% 40%" },
```

Each project's `image` is its cover. Its `gallery` holds additional images:

```js
gallery: [{ src: "assets/images/board.jpg", alt: "PCB layout", caption: "Controller PCB." }]
```

## This update

Prepared from repository commit `8de3ae5`.

Simplified page headings and homepage text, removed slogans and em dashes, shortened the About copy, added the optional effects file, and corrected Resume and favicon links to match the files at the repository root. No project was removed.
