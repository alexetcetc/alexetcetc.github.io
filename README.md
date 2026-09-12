# alexetcetc.github.io

One page. No feed, no follower count, nothing to scroll.

Every visit, the page picks its own colours, fonts, background texture and
a few of its words at random.

## Changing what it picks from

Everything is in **`assets/config.js`**, in four labelled sections:

1. **Colours** — one line per complete look
2. **Fonts** — heading font, body font, letter spacing
3. **Backgrounds** — the texture over the background colour
4. **Words** — the phrases that swap out

Edit that file, save, reload. Nothing else needs touching.

To make a new word swappable, add a list to section 4 and wrap the word in
`index.html`:

```html
<span data-word="yourlistname">fallback text</span>
```

The fallback text is what someone sees if JavaScript is off.

## Files

```
index.html          the page
assets/config.js    everything you'd want to change
assets/theme.js     the engine — picks and applies; no need to edit
assets/style.css    layout; reads only from the chosen theme
```

## Seeing it locally

```sh
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Publishing

GitHub Pages serves this repo's `main` branch. Push to `main` and the site
is live at https://alexetcetc.github.io within a minute or so.
