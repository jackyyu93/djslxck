# DJ Slxck — Portfolio Site

Official site for [DJ Slxck](https://djslxck.com). Built with Astro, Tailwind, and deployed on Cloudflare Pages.

## Stack

- **Framework**: [Astro 5](https://astro.build) + TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Fonts**: Anton (display) + Inter (body) via `@fontsource`
- **Motion**: [Lenis](https://lenis.darkroom.engineering/) smooth scroll, Motion One, GSAP
- **Hosting**: [Cloudflare Pages](https://pages.cloudflare.com) (auto-deploy on push to `main`)
- **Domain**: Cloudflare Registrar
- **Forms**: [Web3Forms](https://web3forms.com) (wired in Phase 3)

## Development

### In GitHub Codespaces (recommended)

1. On the repo page, click **Code → Codespaces → Create codespace on main**
2. Wait for the devcontainer to build (~30s, runs `npm install` automatically)
3. In the Codespace terminal:
   ```bash
   npm run dev
   ```
4. Click the **Open in Browser** popup on port 4321 to preview

### Locally (optional)

```bash
git clone https://github.com/jackyyu/djslxck.git
cd djslxck
nvm use            # Node 20 LTS from .nvmrc
npm install
npm run dev        # http://localhost:4321
```

## Scripts

| Command         | Purpose                       |
| --------------- | ----------------------------- |
| `npm run dev`   | Start dev server on port 4321 |
| `npm run build` | Build production site to `dist/` |
| `npm run preview` | Preview the production build |

## Deploy

Auto-deploys to `djslxck.pages.dev` (and `djslxck.com` once DNS is wired) on every push to `main`.

Preview deploys run on every PR and branch push.

## Structure

```
src/
├── components/   # Reusable Astro components
├── layouts/      # Base page layout (nav, footer, meta, Lenis)
├── pages/        # File-based routes
│   ├── index.astro
│   ├── about.astro
│   ├── services/
│   ├── portfolio.astro
│   ├── gallery.astro
│   ├── reviews.astro
│   └── contact.astro
└── styles/
    └── global.css  # Tailwind layers + design tokens
```

## Design Tokens

| Token        | Value     | Use                |
| ------------ | --------- | ------------------ |
| `bg`         | `#0A0A0A` | Page background    |
| `surface`    | `#111111` | Card / panel       |
| `surface-2`  | `#1A1A1A` | Elevated panel     |
| `accent`     | `#FF006E` | Magenta accent     |
| `text`       | `#F5F5F5` | Primary text       |
| `muted`      | `#8A8A8A` | Secondary text     |
| `border`     | `#262626` | Hairline borders   |

## Roadmap

- [x] **Phase 0** — Scaffold + first deploy
- [ ] **Phase 1** — Full skeleton with placeholder content (this commit)
- [ ] **Phase 2** — Motion polish, perf tuning, SEO/OG images
- [ ] **Phase 3** — Wire Web3Forms + Cloudflare Turnstile for booking form
- [ ] **Phase 4** — Swap placeholders for real bio, photos, mix embeds, testimonials
- [ ] **Phase 5** — DNS cutover from `djslxck.pages.dev` → `djslxck.com`

## License

All content © DJ Slxck. Code structure available for reference.
