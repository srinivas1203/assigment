# Maison — Considered Interiors

Maison is a frontend-only interior design storefront concept with a quiet-luxury visual style: warm ivory surfaces, charcoal typography, muted brass accents, Cormorant Garamond headings, and Jost body text.

The site includes a Home page with editorial content, services, featured products, process steps, statistics, testimonials, and a call to action; and a Products page with a product catalogue, static category chips, and a visual search field. Product and page-section content is stored locally in JavaScript data files. There is no backend: the newsletter form is a UI demonstration and does not send or store addresses.

## Tech stack and libraries

- **React** — builds the site from reusable components and page-level compositions.
- **Vite** — provides the development server and production bundler.
- **React Router** (`react-router-dom`) — handles the Home and Products routes without full-page navigation.
- **GSAP** — drives entrance, reveal, counter, and decorative animations.
- **GSAP ScrollTrigger** — starts and scrubs animations in relation to scroll position.
- **Lenis** — provides smooth scrolling and synchronizes scroll updates with GSAP.
- **Lucide React** — supplies lightweight, consistent interface icons.
- **CSS** — defines the responsive layout, design tokens, hover states, and reduced-motion behavior without an additional component or styling framework.

## Project structure

```text
.
├── public/
│   └── assets/
│       └── images/          # Add the local product image files here
├── src/
│   ├── App.jsx              # Router and shared smooth-scroll setup
│   ├── main.jsx             # React entry point and stylesheet imports
│   ├── assets/              # Source-managed assets
│   ├── components/
│   │   ├── motion/          # GSAP, Lenis, and reusable motion components
│   │   └── ui/              # Shared UI pieces such as cards and containers
│   ├── data/                # Product, service, process, and value content
│   ├── hooks/               # Shared React hooks
│   ├── pages/               # Home and Products route components
│   └── styles/              # Global styles, motion styles, and CSS variables
├── index.html
├── package.json
└── vite.config.js
```

Product images in `src/data/products.js` are hosted on Unsplash and load from their image URLs. An internet connection is needed to display them.

## Local setup

### Requirements

- Node.js compatible with the installed Vite version
- npm

### Install and run

From the project directory:

```bash
npm install
npm run dev
```

Vite prints a local URL in the terminal, usually `http://localhost:5173`.

### Production build

```bash
npm run build
```

The deployable static site is generated in `dist/`. To serve that build locally:

```bash
npm run preview
```

Run the linter with:

```bash
npm run lint
```

## Animation approach

- **One scroll engine:** `SmoothScroll` creates a Lenis instance and advances it with the GSAP ticker. Lenis scroll events call `ScrollTrigger.update()`, keeping scroll-triggered effects aligned with the smoothed scroll position.
- **Reusable reveals:** `Reveal`, `TextReveal`, and `ParallaxImage` keep their animation setup near the element they animate. Text is split into word wrappers in React; no paid text-splitting plugin is used.
- **Scroll effects:** ScrollTrigger starts reveal and count-up animations when their elements enter the viewport. The process line uses `scrub` so its progress follows scrolling.
- **Lifecycle cleanup:** GSAP match-media contexts are reverted on component cleanup. The Lenis instance and ticker/listener callbacks are also removed and destroyed.
- **Reduced motion:** GSAP animations and smooth scrolling are only enabled when the user's preference is `no-preference`. CSS also removes or simplifies hover transitions for reduced-motion users.
- **Performance:** Animated visual properties are limited to transform and opacity where practical. Images use lazy loading below the fold and explicit dimensions to reduce layout shifts.

## Deploy to Vercel from GitHub

1. **Push the project to GitHub.**
   - Create a GitHub repository.
   - In a terminal opened at this project directory, initialize Git if needed and push the project. Replace the URL with your repository's HTTPS URL:

     ```bash
     git init -b main
     git add .
     git commit -m "Initial Maison interiors site"
     git remote add origin https://github.com/<username>/<repository>.git
     git push -u origin main
     ```

     If Git is already initialized, skip `git init -b main`. If an `origin` remote already exists, update it with `git remote set-url origin <repository-url>` instead of adding it again.
   - Make sure `package.json`, `package-lock.json`, `index.html`, `src/`, and `vite.config.js` are in the repository.
   - Do not commit `node_modules/` or local secrets.

2. **Import the repository into Vercel.**
   - Sign in to [Vercel](https://vercel.com/).
   - Select **Add New → Project**.
   - Connect GitHub if prompted, find the repository, and select **Import**.

3. **Configure the project.**
   - Select **Vite** as the Framework Preset if Vercel does not detect it automatically.
   - Set the Root Directory to the folder containing this project's `package.json` (the repository root if this project is at the top level).
   - Use `npm install` as the install command, `npm run build` as the build command, and `dist` as the output directory.
   - This frontend does not require environment variables or a backend service.

4. **Deploy.**
   - Select **Deploy** and wait for the build to complete.
   - Open the generated deployment URL and check both `/` and `/products`.
   - The project includes `vercel.json` to route client-side paths such as `/products` to the app entry point. Reload `/products` directly after deployment to verify the route fallback:

     ```json
     {
       "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
     }
     ```

5. **Use GitHub for future updates.**
   - Vercel creates preview deployments for new branches and pull requests.
   - Pushing to the connected production branch (commonly `main`) triggers a new production deployment.
   - Product image URLs are external Unsplash links, so the deployed site needs network access to load them.
