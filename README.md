# prithav — personal portfolio

A minimal, fast personal portfolio website. Inspired by [iad1tya.cyou](https://iad1tya.cyou/).

## stack

- Plain HTML, CSS, and vanilla JavaScript — no frameworks, no build step
- [`Inter`](https://fonts.google.com/specimen/Inter) + [`JetBrains Mono`](https://fonts.google.com/specimen/JetBrains+Mono) from Google Fonts

## structure

```
Simple Portfolio/
├── index.html      # Main page
├── style.css       # All styles + responsive rules
├── script.js       # Page logic, rendering, and easter egg
├── config.js       # ← edit your details here
├── resume.html     # Minimal resume page
└── avatar.jpg      # Profile picture
```

## customization

All personal details live in [`config.js`](./config.js). Edit that file to update:

- **Name & handle** — `name`, `handle`
- **Floating badge** — `floatingBadge.text` and `floatingBadge.emoji`
- **Rotating greetings** — `greetings` array
- **Bio** — `bio.lead`
- **Projects** — `projects` array (title, description, GitHub link, tags, status)
- **Skills** — `skills` array with proficiency levels (`proficient` / `learning` / `planned`)
- **Social links** — `socials` array

## running locally

Just open `index.html` in a browser. No server needed.

Or serve it with any static server:

```bash
# Python
python3 -m http.server 8080

# Node
npx serve .
```

## features

- 🌙 Dark / OLED / Light theme toggle (persisted to `localStorage`)
- 🚀 Animated floating speech bubble above avatar
- ✨ Rotating multilingual greetings
- 📁 Project cards with status badges and tech stack tags
- 🟢 Skill pills with proficiency level indicators
- 📱 Fully responsive — mobile, tablet, and desktop
- ♿ Respects `prefers-reduced-motion`

## easter egg

> Type **`nepal`** anywhere on the page, or enter the **Konami code** (`↑↑↓↓←→←→BA`) to find it. 🇳🇵

## license

MIT — do whatever you want with it.
