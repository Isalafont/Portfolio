# Portfolio Isabelle

Portfolio personnel pour Isabelle, développeuse Rails et experte en accessibilité RGAA.

## 🎨 Design

**Style:** Best of Adham Dannaway (clean, smart concept) + Best of Cassie Evans (micro-interactions playful)

**Stack:**
- Astro v5.17.3 (SSG, islands architecture)
- TailwindCSS v4.1.0
- Vanilla CSS animations (wave, bounce, fade-in)
- No heavy JS frameworks

**Design Spec:** Voir `DESIGN.md` pour tous les détails (couleurs, typo, animations, etc.)

## 🚀 Dev Server

```bash
npm run dev          # Localhost only
npm run dev -- --host  # Network accessible (Docker)
```

**URLs:**
- Local: `http://localhost:4321/`
- Network (Docker): `http://172.18.0.2:4321/`

## 📦 Structure

```
src/
├── layouts/
│   └── Layout.astro          # Base layout (SEO, fonts, a11y)
├── components/
│   ├── Header.astro          # Navigation fixed
│   ├── Hero.astro            # Fullscreen hero avec wave 👋
│   ├── About.astro           # Bio + photo + stack
│   ├── Projects.astro        # Grid 4 projets
│   ├── ProjectCard.astro     # Card component
│   ├── Contact.astro         # Contact + CTA
│   └── Footer.astro          # Footer simple
├── pages/
│   └── index.astro           # Homepage (toutes sections)
└── styles/
    └── global.css            # Global styles + RGAA utilities
```

## ♿ Accessibilité RGAA

**Features:**
- ✅ Skip to content link (visible on focus)
- ✅ Focus visible sur tous éléments interactifs
- ✅ Contraste couleurs AAA/AA
- ✅ Reduced motion media query (désactive animations)
- ✅ Semantic HTML (headings hierarchy)
- ✅ ARIA labels où nécessaire
- ✅ Keyboard navigation (Tab order logique)

## 🎭 Animations

**CSS-only:**
- Wave emoji (2s delay, rotate keyframe)
- Scroll indicator bounce (infinite)
- Fade-in up stagger (sections/cards)
- Hover effects (lift + shadow)
- Arrow slide on hover

**No GSAP needed** (pour l'instant, CSS suffit)

## 🎯 Performance Targets

**Lighthouse:**
- Performance: 95+
- Accessibility: 100
- Best Practices: 95+
- SEO: 100

## 📝 Todo

- [ ] Remplacer placeholder photo About (actuellement lettre "I")
- [ ] Ajouter vraies URLs GitHub/LinkedIn/Email
- [ ] Créer pages case studies projets (optional)
- [ ] Ajouter section Blog (optional)
- [ ] Dark mode toggle (optional)
- [ ] Mobile menu implementation (hamburger fonctionnel)
- [ ] Tests Lighthouse
- [ ] Deploy Netlify/Vercel

## 📸 Screenshots

_(À ajouter après review visuelle)_

## 🛠️ Build & Deploy

```bash
npm run build    # Build static site → dist/
npm run preview  # Preview build local
```

**Deploy:**
- Netlify: Auto-deploy depuis repo Git
- Vercel: Idem
- GitHub Pages: Possible (voir Astro docs)

## 📄 License

MIT - Isabelle © 2026

---

**Status:** ✅ V1 Ready - Hero + About + Projects + Contact complets  
**Created:** 2026-02-21  
**Updated:** 2026-02-21
