# Field Notes on a Shrinking World

A simple, static blog template for an anthropology final project on globalization.
Built with plain HTML, CSS, and JavaScript — no build tools, frameworks, or
installs required. Designed to be hosted free on GitHub Pages.

## What's in here

```
globalization-blog/
├── index.html          → Homepage (hero + table of contents)
├── about.html           → "About the Project" page
├── css/
│   └── style.css        → All styling. Colors/fonts are set once at the top.
├── js/
│   └── main.js           → Small extras: active nav highlight, reading progress bar
├── images/
│   └── placeholder.svg   → Swap this out for your real photos
└── pages/
    ├── chapter-01.html   → Fully annotated template — start here
    ├── chapter-02.html   → ...through chapter-12.html
    └── ...
```

That's 12 chapter pages + the homepage + the about page = **14 pages total**,
which covers the 10–15 page requirement. Add or remove chapters as needed
(see "Adding or removing a chapter" below).

## How to edit the content

1. Open `pages/chapter-01.html` first — it has comments explaining every
   section (paragraphs, images, pull quotes, callouts, footnotes).
2. Replace anything in `[square brackets]` with your real content.
3. Repeat for `chapter-02.html` through `chapter-12.html`. These are lighter
   versions of the same template — copy a block from chapter-01 into any of
   them if you want a pull quote, callout, or extra image there too.
4. Update `index.html`'s table of contents (the `.entry-row` blocks) so the
   titles and one-line summaries match what you actually wrote.
5. Update `about.html` with your real book title, author, and course info.

### Adding an image
1. Drop your image file into the `images/` folder (e.g. `images/market.jpg`).
2. In any chapter page, find a `<figure>` block and change:
   ```html
   <img src="../images/placeholder.svg" alt="Describe what the image shows">
   ```
   to:
   ```html
   <img src="../images/market.jpg" alt="A description of the actual photo">
   ```
3. Update the `<figcaption>` text below it with a real caption and citation.

The `alt` text matters — it's what screen readers announce, and it's good
practice for a school project. Always describe what's actually in the image.

### Adding a pull quote from the book
Copy this block into any chapter page where you want it:
```html
<blockquote>
  "The exact quote from the book."
  <cite>Author Last Name, <em>Book Title</em>, p. 42</cite>
</blockquote>
```

### Adding a callout (definition, side note, etc.)
```html
<div class="callout">
  <span class="callout__label">Key Term</span>
  Your definition or note text goes here.
</div>
```

## Adding or removing a chapter

**To add one:** copy `pages/chapter-12.html`, rename it (e.g. `chapter-13.html`),
update its title/content, fix the "Previous" and "Next" links at the bottom to
point to the right neighboring chapters, and add a new `.entry-row` to
`index.html`'s table of contents.

**To remove one:** delete the file, remove its `.entry-row` from
`index.html`, and re-point the "Previous"/"Next" links on the chapters that
used to point to it.

## Changing colors and fonts

Open `css/style.css` and look at the very top — the `:root` block. Every
color and font in the whole site is defined there once. For example:
```css
--rust: #B5562F;     /* accent color used for links, tags, eyebrows */
--indigo: #3B4A6B;   /* secondary accent */
--paper: #F7F4ED;    /* background color */
```
Change a value there and it updates everywhere it's used.

## Previewing locally

You don't need a server for this — just double-click `index.html` and it'll
open in your browser. If a link doesn't work when opened this way, you can
also right-click `index.html` → "Open with" → your browser, or use a tool
like the VS Code "Live Server" extension if you have it.

## Putting it on GitHub Pages

1. Create a new repository on GitHub (e.g. `globalization-blog`).
2. Upload all the files in this folder to that repository, keeping the same
   folder structure (`css/`, `js/`, `images/`, `pages/` all need to stay
   where they are relative to `index.html`).
3. In the repository, go to **Settings → Pages**.
4. Under "Build and deployment," set **Source** to "Deploy from a branch."
5. Set **Branch** to `main` (or whichever branch you uploaded to) and the
   folder to `/ (root)`.
6. Click **Save**. GitHub will give you a URL that looks like
   `https://yourusername.github.io/globalization-blog/` — it can take a
   minute or two to go live.
7. Send that URL to your professor.

## Notes

- Everything is plain HTML/CSS/JS — no `npm install`, no build step, no
  dependencies. Any browser can open these files directly.
- The site is responsive (works on phone-sized screens) and has visible
  keyboard focus outlines for accessibility.
- The animated line under the homepage headline is decorative. If you'd
  rather not have it, delete the `<div class="route-line-wrap">...</div>`
  block in `index.html`.
# anthBlogPost
