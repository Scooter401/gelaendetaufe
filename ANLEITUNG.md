# Geländetaufe als Webseite (GitHub Pages) – für iPhone/iPad und Android

1. Auf github.com anmelden → oben rechts **+** → **New repository**.
   Name: `gelaendetaufe`, Sichtbarkeit **Public** (GitHub Pages ist im Gratis-Konto nur für öffentliche Repositories möglich), **Create repository**.
2. Im neuen Repository: **Add file → Upload files** → diese 5 Dateien hineinziehen:
   `index.html`, `manifest.webmanifest`, `sw.js`, `icon-192.png`, `icon-512.png` → **Commit changes**.
3. **Settings → Pages** → Source: **Deploy from a branch**, Branch: **main**, Ordner **/ (root)** → **Save**.
4. Nach 1–2 Minuten ist die App erreichbar unter `https://<dein-github-name>.github.io/gelaendetaufe/`.
5. iPhone: Link in Safari öffnen → Teilen-Symbol → **Zum Home-Bildschirm**.
   Android: Link in Chrome öffnen → Menü ⋮ → **App installieren** bzw. **Zum Startbildschirm hinzufügen**.

Hinweise
- Die Seite ist öffentlich erreichbar, enthält aber keine Einsatzdaten: Alle Geländetaufen bleiben nur auf dem jeweiligen Gerät gespeichert.
- Updates: neue `index.html` hochladen (gleicher Name), beim nächsten Öffnen mit Netz wird sie übernommen.
