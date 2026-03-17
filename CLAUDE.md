# CLAUDE.md — FamiliePraxis

## Projekt
FamiliePraxis er en webapp til familiebehandler Rikke — fokus på udsatte familier, traumatiske spor og systemisk familieterapi.

## Tech
- Vanilla JS SPA, ingen frameworks
- localStorage state persistence
- GitHub Pages: `https://github.com/nklasfff/FamiliePraxis.git`

## Filstruktur
```
index.html          — alle views som hidden sections
js/app.js           — app-logik, routing, rendering, IKONER SVG-bibliotek
js/data.js          — CIRKLER, TEMA_INDHOLD, OEVELSER, SAMMENHAENGE, TRAPPEN
css/style.css       — komplet styling med CSS custom properties
assets/             — statiske filer
```

## Konventioner
- SVG ikoner via IKONER-objekt i app.js (funktion-baserede, konfigurerbar størrelse)
- `stroke="currentColor"` på alle SVG'er for CSS farve-arv
- Tre perspektiver: privat, professionel, kommune
- Kommune mapper til professionel indhold via `contentPerspektiv()`
- Window-level scrolling med `window.scrollTo(0, 0)` i showView()
- 5-tab bundnav: Hjem, Trappen, Temaer, Øvelser, Lige nu

## Preview
```bash
npx http-server . -p 8090 -c-1
```

## Sprog
- App-indhold er på dansk
- Commit messages på dansk
- Kodekommentarer på dansk/engelsk
