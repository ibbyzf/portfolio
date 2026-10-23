# Updating your portfolio

Website: https://ibbyzf.org/
Repository: https://github.com/ibbyzf/portfolio

## Where to edit things

| What you want to change | File |
| --- | --- |
| Project names, descriptions, bullet points, tools, dates and status | `content.js` |
| Project cover photos and photo galleries | `content.js` |
| Homepage portrait and About page photos | `content.js` |
| Email and LinkedIn destinations | `content.js` |
| Work experience, leadership and skills | `content.js` |
| Homepage quote, introduction and name | `index.html` |
| About text and education | `about.html` |
| Base fonts, spacing and layout | `styles.css` |
| Accent colors, gradients and contact icon styles | `color.css` |
| Cursor and orbit artwork | `portfolio-effects.js` |
| Current resume PDF | `ibrahim-feknous-resume.pdf` |

`projects.html` is the project list template. `project.html` is the shared detail-page template. **The actual project descriptions are in `content.js`.** You do not need a separate HTML file for each project.

## 1. Upload your pictures

Use JPG, PNG or WebP. Use short lowercase filenames with hyphens and no spaces, such as:

- `portrait.jpg`
- `motor-controller.jpg`
- `motor-controller-testing.jpg`
- `solar-car.jpg`

Try to keep each photo under about 2 MB so the site loads quickly.

### If you use GitHub's website

1. Open your repository and navigate to `assets`, then `images`. That folder is now included.
2. Select **Add file > Upload files**.
3. Drag your photos into the upload area.
4. Select **Commit changes**.
5. Edit `content.js` using the examples below, then commit that edit too.

### If you use VS Code

1. Open your portfolio folder.
2. Put the photos in `assets/images/`.
3. Edit `content.js` using the examples below.
4. Save the files. Saving in VS Code updates your computer only. Upload the photos and updated `content.js` to GitHub, or commit and push if you have Git set up.

The path must match the uploaded filename exactly, including capitalization and extension. A photo called `portrait.JPG` does not match `portrait.jpg`.

## 2. Add your homepage portrait

Near the top of `content.js`, find `"portrait"`. Replace its settings with:

```js
"portrait": {
  "src": "assets/images/portrait.jpg",
  "alt": "Ibrahim Feknous",
  "position": "50% 40%"
},
```

This replaces the initials and artwork with your photograph. The image crops to fill the frame. Use `"50% 50%"` to center the crop, or `"50% 25%"` to show more of the top of the photo.

## 3. Add a project cover photo

In `content.js`, press **Ctrl + F** and search for the project's ID, such as `motor-controller`. In that same project object, change:

```js
"image": "assets/images/motor-controller.jpg",
"imageAlt": "Motor controller PCB",
"imagePosition": "center",
```

The same image appears in the project-list thumbnail and at the top of that project's detail page. Use `"top center"` for `imagePosition` if the crop hides something near the top.

## 4. Add extra photos to a project

In that project's object, replace `"gallery": []` with:

```js
"gallery": [
  {
    "src": "assets/images/motor-controller-testing.jpg",
    "alt": "Motor controller connected to test equipment",
    "caption": "Controller testing setup.",
    "position": "center"
  },
  {
    "src": "assets/images/motor-controller-layout.png",
    "alt": "Motor controller PCB layout",
    "caption": "PCB layout in Altium.",
    "position": "center"
  }
],
```

Upload every image you reference. Extra gallery photos appear on the project's detail page and open larger when clicked. You can use one photo or several; remove any example you are not using.

## 5. Edit project descriptions

Each item in `"projects"` has these fields:

| Field | Where it appears |
| --- | --- |
| `id` | The project's URL. Keep existing IDs unless you also update links. |
| `title` | Project name on the list and detail page |
| `summary` | Short description in the desktop project list |
| `overview` | Main paragraph on the project detail page |
| `details` | Bullet points under My Contribution |
| `tags` | Tools and focus beside the project description |
| `date` | Project dates |
| `status` | In development, completed, etc. |
| `label` | Small category label above the title |
| `note` | Short note below the bullet points |
| `image`, `imageAlt`, `imagePosition` | Cover photo and crop |
| `gallery` | Additional project photos |

For example:

```js
"summary": "A short description of the project.",
"overview": "Explain what you built and why.",
"details": [
  "Describe your first contribution.",
  "Describe your second contribution."
],
```

Keep the quotation marks, commas and brackets. Separate list items with commas; do not put a comma after the final item inside a list. Double quotation marks inside a sentence must be escaped as `\"`, or use single quotation marks in the sentence instead. Text is rendered as plain text, so do not add HTML such as `<br>` to `content.js`.

## 6. Add About page pictures

Near the top of `content.js`, replace `"aboutPhotos": []` with:

```js
"aboutPhotos": [
  {
    "src": "assets/images/workshop.jpg",
    "alt": "Working on electronics in the lab",
    "caption": "In the lab."
  }
],
```

## 7. Update the contact links or resume later

The LinkedIn and email image links read these settings in `content.js`:

```js
"email": "ibrahimfeknous1@gmail.com",
"linkedin": "https://www.linkedin.com/in/ibrahim-feknous/",
```

The email icon opens the visitor's email app. LinkedIn opens in a new tab. The icon image files are `assets/icons/email.svg` and `assets/icons/linkedin.svg`.

To update your resume, upload a replacement at the repository root using the same filename, `ibrahim-feknous-resume.pdf`. Keeping that filename preserves every Resume link.

## 8. Publish and check

1. Commit your changes to `main` in GitHub.
2. Open **Actions** and wait for the latest **pages build and deployment** run to finish successfully.
3. Open your site and press **Ctrl + Shift + R**. On your phone, try a private tab.
4. Check the edited project, its photos and the Resume link.

If a photo does not appear, first check its path, capitalization and extension. If project content disappears, check `content.js` for a missing comma, quote or bracket.

For immediate refresh after future edits, increase the version number on the changed asset's URL in **all five HTML files** (`index.html`, `about.html`, `projects.html`, `project.html`, `experience.html`). For example, change `content.js?v=4` to `content.js?v=5` after editing `content.js`. This prevents visitors from receiving an older cached copy. Apply the same idea to `app.js`, `color.css`, or `portfolio-effects.js` when you change those files.

## Photo fitting and current skills

The current site uses optimized WebP copies in `assets/images/`. Your supplied photos are assigned in `content.js`.

- `portrait`: homepage portrait.
- Each project's `image`: cover photo.
- Each project's `gallery`: additional images.
- Each leadership role's optional `image`: photo beside that role on Experience.
- `skillGroups`: programming languages, software and technical skills on About.

Use `"imageFit": "contain"` on a project or leadership role to show the entire image. Use `"imageFit": "cover"` to fill its frame with a crop. Gallery pictures use `"fit": "contain"` or `"fit": "cover"`. Project detail covers show the full image by default; project-list thumbnails use a crop unless you specify `imageFit`.

Edit the `items` list inside a `skillGroups` group to change its entries. The groups are displayed in the same order as the file, with programming languages and engineering software first.
