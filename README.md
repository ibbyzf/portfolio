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
- `styles.css`: fonts, spacing, and responsive layouts.
- `color.css`: additional color accents, quote typography, and portrait treatment.
- `app.js`: page rendering, theme switch, and image viewer.
- `portfolio-effects.js`: orbit cursor, particle trail, click sparks, and portrait artwork.
- `ibrahim-feknous-resume.pdf`: current document opened by Resume.
- `CNAME`: custom domain. Keep this file.

## Cursor and artwork

Each HTML page already loads:

```html
<script src="portfolio-effects.js" defer></script>
```

The file is self-contained. The desktop cursor uses two rotating satellite rings, a short three-color trail, and click sparks. It restores the normal pointer during keyboard use, text editing, and image dialogs. Touch devices and reduced-motion preferences use the native pointer. The static portrait artwork stays behind any uploaded photograph.

Remove the script line from each page to turn off the cursor and artwork. Colors follow the `--accent`, `--teal`, and `--violet` variables in `color.css`.

## Photos

Add images to `assets/images/` and set their paths in `content.js`.

```js
portrait: { src: "assets/images/portrait.jpg", alt: "Ibrahim Feknous", position: "50% 40%" },
```

Each project's `image` is its cover. Its `gallery` holds additional images:

```js
gallery: [{ src: "assets/images/board.jpg", alt: "PCB layout", caption: "Controller PCB." }]
```

## Latest update

Added the requested homepage quote and attribution, removed punctuation from the initials, added teal and violet accents, and upgraded the cursor. Resume links now point to the newly supplied one-page PDF.
