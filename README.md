# ThrottleScope — Polo GT TSI Carbon Black

> Content creation toolkit for the 2018 Volkswagen Polo GT TSI Carbon Black  
---

## Features

| Tool | What it does |
|---|---|
| Reel hook generator | 5 opening hooks across 6 vibes (aggressive, poetic, technical, story, challenge, nostalgia) |
| Caption + hashtag kit | Ready-to-post captions with curated hashtag sets |
| Reel script builder | 15s / 30s / 60s spoken scripts with cue markers |
| CLI tool (`polo-kit`) | Run any generator from your terminal |
| PWA | Install as an app on your phone for instant access |

---

## Web App

Open `index.html` in any browser — or serve it locally:

```bash
npx serve . -p 3000
```

---

## CLI Tool

### Install globally
```bash
npm install -g .
```

### Commands

```bash
# Print all specs
polo-kit specs
polo-kit specs --json

# Generate reel hooks
polo-kit hooks --vibe aggressive
polo-kit hooks --vibe poetic
polo-kit hooks --vibe technical
polo-kit hooks --vibe story
polo-kit hooks --vibe challenge

# Generate a caption
polo-kit caption --mood hype
polo-kit caption --mood chill
polo-kit caption --mood specs
polo-kit caption --mood rant

# Get hashtag sets
polo-kit hashtags --set core
polo-kit hashtags --set vw
polo-kit hashtags --set reach
polo-kit hashtags --set all --copy   # copies to clipboard
```

---

## PWA Install

When opening in Chrome/Edge on mobile, tap **"Add to home screen"** or use the install banner inside the app.

---

## Stack

- Vanilla HTML/CSS/JS (zero dependencies for the web app)
- Service Worker for offline PWA support
- Node.js CLI with no external dependencies

---

## Author

Built by [@throttlescope](https://instagram.com/throttlescope)  
GitHub: [github.com/hams1ka](https://github.com/hams1ka)
