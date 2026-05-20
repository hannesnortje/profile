# profile

Personal CV and portfolio site for **Dr. Johannes A. Nortjé** — a single-page Vue 3 application showing a chronological timeline of work, training, and projects, with a synchronised Leaflet map and a sidebar of technical skills.

## Stack

- **Vue 3** + **Vite** + **TypeScript**
- **Vue Router** for the home / imprint routes
- **Pinia** for state
- **Tailwind CSS** for styling
- **Leaflet** via `@vue-leaflet/vue-leaflet` for the location map
- **Cypress** (e2e + component) and **Vitest** for testing

## Project layout

```
src/
  views/             HomeView, LegalView (imprint)
  layouts/           DefaultLayout — 3-column responsive shell
  components/        CVElements, LeafletMap, MetaInformation,
                     TechnicalToolbox, FooterElement, MyImprint, MapOverlay
  settings/          CV.ts (timeline data), toolbox.ts (skills),
                     metaInformation.ts (name/address/contact)
  interface/         shared TypeScript types
  router/            route definitions
```

Most content lives in `src/settings/` — edit those files to update the CV.

## Development

```sh
npm install
npm run dev        # vite dev server
npm run build      # type-check + production build to dist/
npm run preview    # serve the production build locally
npm run lint       # eslint --fix
npm run format     # prettier write
```

### Testing

```sh
npm run test:unit       # vitest
npm run test:e2e        # cypress against a production build
npm run test:e2e:dev    # cypress against the dev server
```

## Deployment

The site is deployed on **Vercel** and auto-redeploys on every push to `main`. No `vercel.json` is required — Vercel auto-detects Vite, runs `npm run build`, and serves `dist/`.

To check deploy status, open the project on https://vercel.com and look for `hannesnortje/profile`.
