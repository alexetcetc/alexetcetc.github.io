/* ===============================================================
   EDIT THIS FILE.

   Everything the page picks at random lives here. Add, delete, or
   change anything below and reload — no other file needs touching.
   =============================================================== */


/* ---------------------------------------------------------------
   1. COLOURS

   One line = one complete look. The page picks a whole line, never
   a mix, so text always stays readable against its background.

   bg     page background
   text   main text
   muted  quieter text
   accent links and highlighted words
   line   borders and the grid/dot textures
   --------------------------------------------------------------- */

const PALETTES = [
  { name: "ember",  bg: "#fbfaf8", text: "#16150f", muted: "#5d5a4f", accent: "#b5551f", line: "#e5e1d8" },
  { name: "ink",    bg: "#12131a", text: "#eceaf3", muted: "#9b99a8", accent: "#8ea2ff", line: "#262836" },
  { name: "moss",   bg: "#f3f6f0", text: "#152014", muted: "#4f5c4c", accent: "#2f7d4f", line: "#dbe3d6" },
  { name: "oxide",  bg: "#191412", text: "#f3e9e2", muted: "#a9988e", accent: "#e8734a", line: "#2e2420" },
  { name: "cobalt", bg: "#f4f7fb", text: "#0e1726", muted: "#4c5b70", accent: "#1b55c4", line: "#d9e2ee" },
  { name: "bone",   bg: "#efe9dd", text: "#211d16", muted: "#5f584a", accent: "#7a4b8f", line: "#ded5c4" },
  { name: "signal", bg: "#0e0e0e", text: "#f5f5f5", muted: "#9a9a9a", accent: "#d8f651", line: "#242424" },
  { name: "tide",   bg: "#f0f7f7", text: "#0d1f21", muted: "#4a6266", accent: "#0f7f8c", line: "#d3e5e6" },
];


/* ---------------------------------------------------------------
   2. FONTS

   display   the big heading
   body      everything else
   tracking  letter spacing on the heading; more negative = tighter

   These are fonts already on the visitor's computer, so nothing has
   to download. To use a web font, add its <link> to index.html and
   then name it first in the list here.
   --------------------------------------------------------------- */

const TYPEFACES = [
  {
    name: "grotesk",
    display: 'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Inter, Helvetica, Arial, sans-serif',
    body: 'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Inter, Helvetica, Arial, sans-serif',
    tracking: "-0.03em",
  },
  {
    name: "old-style",
    display: '"Iowan Old Style", "Palatino Linotype", Palatino, Georgia, serif',
    body: '"Iowan Old Style", "Palatino Linotype", Palatino, Georgia, serif',
    tracking: "-0.01em",
  },
  {
    name: "terminal",
    display: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace',
    body: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace',
    tracking: "-0.02em",
  },
  {
    name: "mixed",
    display: '"Iowan Old Style", Palatino, Georgia, serif',
    body: 'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Helvetica, Arial, sans-serif',
    tracking: "-0.015em",
  },
];


/* ---------------------------------------------------------------
   3. BACKGROUNDS

   A texture drawn on top of the palette's background colour.

   image  any CSS background-image. var(--line) and var(--accent)
          refer to the palette chosen for this load, so a texture
          recolours itself to match.
   size   how big one tile of the pattern is.
   --------------------------------------------------------------- */

const BACKGROUNDS = [
  { name: "plain", image: "none", size: "auto" },
  {
    name: "grid",
    image:
      "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)",
    size: "32px 32px",
  },
  {
    name: "dots",
    image: "radial-gradient(var(--line) 1.2px, transparent 1.2px)",
    size: "22px 22px",
  },
  {
    name: "rules",
    image: "repeating-linear-gradient(0deg, var(--line) 0 1px, transparent 1px 40px)",
    size: "auto",
  },
  {
    name: "wash",
    image:
      "radial-gradient(120% 80% at 15% 0%, color-mix(in oklab, var(--accent) 14%, transparent) 0%, transparent 60%)",
    size: "auto",
  },
];


/* ---------------------------------------------------------------
   4. WORDS

   Each name below matches a data-word="..." in index.html, and one
   option from its list is picked per load.

   To add a new swappable word: add a list here, then wrap the word
   in index.html like <span data-word="yourname">fallback</span>.
   --------------------------------------------------------------- */

const WORDS = {
  greeting: ["hello", "hi", "oh — hi", "greetings", "well, hello"],
  noun: ["a person", "a human", "someone", "a whole guy", "an individual"],
  verb: ["builds", "makes", "assembles", "tinkers with", "ships"],
  object: ["software", "systems", "tools", "things that mostly work", "quiet machines"],
  closing: [
    "This is the whole site. That's the point.",
    "No feed. No follower count. No infinite scroll.",
    "Refresh for a different outfit.",
    "Deliberately small.",
  ],
};
