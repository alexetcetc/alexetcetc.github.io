/* ---------------------------------------------------------------
   The engine. You shouldn't need to edit this file.

   It picks one entry from each list in config.js and writes the
   result onto the page as CSS custom properties. The stylesheet
   never names a colour or font directly — it only reads these.
   --------------------------------------------------------------- */

const pick = (list) => list[Math.floor(Math.random() * list.length)];

function applyTheme() {
  const palette = pick(PALETTES);
  const type = pick(TYPEFACES);
  const background = pick(BACKGROUNDS);
  const root = document.documentElement;

  root.style.setProperty("--bg", palette.bg);
  root.style.setProperty("--text", palette.text);
  root.style.setProperty("--muted", palette.muted);
  root.style.setProperty("--accent", palette.accent);
  root.style.setProperty("--line", palette.line);

  root.style.setProperty("--font-display", type.display);
  root.style.setProperty("--font-body", type.body);
  root.style.setProperty("--tracking", type.tracking);

  root.style.setProperty("--bg-image", background.image);
  root.style.setProperty("--bg-size", background.size);

  /* Tell the browser whether this palette is light or dark, so
     scrollbars and form controls don't fight it. */
  root.style.colorScheme = isDark(palette.bg) ? "dark" : "light";

  for (const [slot, options] of Object.entries(WORDS)) {
    for (const el of document.querySelectorAll(`[data-word="${slot}"]`)) {
      el.textContent = pick(options);
    }
  }

  const stamp = document.querySelector("[data-stamp]");
  if (stamp) stamp.textContent = `${palette.name} · ${type.name} · ${background.name}`;
}

/* Relative luminance, sRGB. Below ~0.4 we call the background dark. */
function isDark(hex) {
  const n = parseInt(hex.slice(1), 16);
  const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((c) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b < 0.4;
}

applyTheme();

document.addEventListener("DOMContentLoaded", () => {
  const reroll = document.querySelector("[data-reroll]");
  if (reroll) reroll.addEventListener("click", applyTheme);
});
