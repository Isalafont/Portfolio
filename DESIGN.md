# Portfolio Isabelle - Design Spec

**Style:** Best of Adham (clean, pro, smart concept) + Best of Cassie (micro-interactions, playful)

**Date:** 2026-02-21  
**Stack:** Astro + TailwindCSS + GSAP light  
**Target:** Lighthouse 95+ performance, 100 accessibility

---

## 🎨 Color Palette

```css
/* Primary Colors */
--bg-primary: #FAFAFA;        /* Off-white background */
--text-primary: #1A202C;      /* Dark gray text */
--text-secondary: #4A5568;    /* Medium gray */

/* Accent Colors */
--accent-primary: #667EEA;    /* Indigo - tech/professional */
--accent-secondary: #F59E0B;  /* Amber - warmth */
--accent-success: #10B981;    /* Green - accessibility/success */
--accent-coral: #EC4899;      /* Pink - playful touches */

/* Dark Mode */
--bg-dark: #1A202C;
--text-dark: #F7FAFC;

/* Neutrals */
--gray-50: #F9FAFB;
--gray-100: #F3F4F6;
--gray-200: #E5E7EB;
--gray-800: #1F2937;
--gray-900: #111827;
```

---

## 🔤 Typography

**Fonts:**
```
Headings: Inter Variable (weight 600-800)
Body: Inter Variable (weight 400-500)
Code/Accent: JetBrains Mono (weight 400-500)
```

**Sizes:**
```
Hero: 48px (mobile) / 72px (desktop)
H2: 36px (mobile) / 48px (desktop)
H3: 24px / 32px
Body: 16px / 18px
Small: 14px / 16px
```

---

## 📐 Layout Structure

### Hero Section (Fullscreen)
```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│                                                            │
│                  Hi! Je suis Isabelle 👋                  │
│                     (wave animation)                       │
│                                                            │
│         Développeuse Rails • Expert Accessibilité         │
│                                                            │
│      Je construis des plateformes gouvernementales        │
│            accessibles qui font la différence             │
│                                                            │
│                                                            │
│         [ Voir mes projets ]    [ Me contacter ]          │
│              (hover lift)          (hover lift)           │
│                                                            │
│                        ↓                                   │
│                   (scroll bounce)                          │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

**Animations:**
- 👋 Wave on load (2s delay)
- Text fade-in staggered (0.1s between lines)
- Buttons subtle lift on hover
- Scroll indicator bounce infinite

---

### About Section
```
════════════════════════════════════════════════════════════

À PROPOS
────────

[Photo]      Développeuse Rails depuis 8 ans, obsédée par
             l'accessibilité web.

             Actuellement: Pole OPI (DINUM)
             Mission: Rendre le web gouvernemental accessible
                     à tous, parce que c'est un droit.

             Stack favori: Rails • PostgreSQL • Hotwire • RGAA

             Fun fact: Jeudi = jour accessibilité dédié 🎯

════════════════════════════════════════════════════════════
```

**Animations:**
- Photo subtle zoom on hover
- Text slide-in on scroll reveal
- Stack tags hover highlight

---

### Projects Section (Grid)
```
PROJETS
───────

┌─────────────────────────────┐  ┌──────────────────────────┐
│ 🏛️ DataPass                 │  │ 🏡 ImmoTracker           │
│ ─────────                   │  │ ──────────               │
│                             │  │                          │
│ Plateforme OpenSource DINUM │  │ "Tinder de l'immobilier" │
│ Habilitations APIs          │  │ Swipe UI mobile-first    │
│ restreintes                 │  │                          │
│                             │  │ En développement         │
│ Rails • PostgreSQL • Hotwire│  │ Rails • Mapbox           │
│                             │  │                          │
│     [ Case study → ]        │  │     [ En savoir + ]      │
│        (arrow slide)        │  │                          │
└─────────────────────────────┘  └──────────────────────────┘

┌─────────────────────────────┐  ┌──────────────────────────┐
│ ♿ Accessibilité             │  │ 🧩 Auth Type Builder     │
│ ──────────────              │  │ ────────────────         │
│                             │  │                          │
│ Audits RGAA • Consulting    │  │ Rails metaprogramming    │
│ Formation équipes           │  │ Dynamic class generation │
│                             │  │                          │
│ Disponible freelance        │  │ Shape-Up methodology     │
│                             │  │                          │
│     [ Services → ]          │  │     [ Technical → ]      │
└─────────────────────────────┘  └──────────────────────────┘
```

**Animations (Cassie-style):**
- Cards lift on hover (translateY -8px + shadow)
- Arrow slide right on hover
- Stagger reveal on scroll (0.1s delay between cards)
- Border gradient subtle pulse

---

### Blog Section (Optional)
```
ARTICLES RÉCENTS
────────────────

→ RGAA: Plus qu'une obligation légale
  Comment rendre le web vraiment accessible
  15 min • 2026-02-10

→ Rails Metaprogramming: Eigenclass
  Deep dive classes singleton Ruby
  10 min • 2026-02-05

        [ Tous les articles → ]
```

**Animations:**
- Hover: → slides right
- Read time badge highlight

---

### Contact Section
```
════════════════════════════════════════════════════════════

TRAVAILLONS ENSEMBLE
────────────────────

Disponible pour:
  ✓ Projets Rails complexes
  ✓ Audits accessibilité RGAA
  ✓ Consulting technique
  ✓ Formation équipes

Horaires: Lun-Jeu, 9h-17h15

╭──────────────────────────────╮
│  📧  isabelle@email.com      │
│  🐙  github.com/isa          │
│  💼  linkedin.com/in/isa     │
╰──────────────────────────────╯

     [ Envoyez-moi un message ]
        (hover lift + glow)

════════════════════════════════════════════════════════════
```

**Animations:**
- Contact links subtle underline expand
- Button glow on hover
- Email copy-to-clipboard on click

---

## 🎭 Micro-Interactions (Cassie-style)

### 1. Custom Cursor (Desktop Only)
```js
// Cursor trail (subtle circles)
// Disabled on reduced-motion
```

### 2. Scroll Progress Bar
```css
/* Top of page, thin line */
width: varies with scroll
background: gradient(accent-primary → accent-coral)
```

### 3. Section Reveal
```js
// Intersection Observer
// Fade + slide up on enter viewport
```

### 4. Hover Effects
```css
/* Cards */
transform: translateY(-8px);
box-shadow: 0 20px 40px rgba(0,0,0,0.12);
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

/* Buttons */
transform: translateY(-2px);
box-shadow: 0 8px 16px rgba(102, 126, 234, 0.3);
```

### 5. Wave Emoji
```js
// On load, after 2s
rotate: 0deg → 20deg → -10deg → 0deg
duration: 1.5s
ease: ease-in-out
```

---

## 📱 Responsive Breakpoints

```css
/* Mobile First */
sm: 640px   /* Tablet portrait */
md: 768px   /* Tablet landscape */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
```

**Mobile Changes:**
- Hero: Stack vertically, reduce font size
- Projects: 1 column grid
- Navigation: Hamburger menu
- Spacing: Reduce padding/margins

---

## ♿ Accessibility Checklist

**MUST-HAVE (RGAA Compliance):**
- [ ] Skip to content link (styled, not hidden)
- [ ] Focus visible on all interactive elements
- [ ] Color contrast AAA (text) / AA (interactive)
- [ ] Alt text on all images
- [ ] ARIA labels where needed
- [ ] Keyboard navigation (Tab order logical)
- [ ] Reduced motion media query
- [ ] Semantic HTML (headings hierarchy)
- [ ] Form labels associated
- [ ] Dark mode accessible contrast

---

## 🚀 Performance Targets

**Lighthouse Scores:**
- Performance: 95+
- Accessibility: 100
- Best Practices: 95+
- SEO: 100

**Core Web Vitals:**
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

**Optimizations:**
- Lazy load images (below fold)
- WebP/AVIF formats
- Preload critical fonts
- Inline critical CSS
- Defer non-critical JS

---

## 🎨 Animation Library

**CSS-only (Base):**
- Hover effects
- Transitions
- Keyframe animations (wave, bounce)

**GSAP (Hero only):**
- Stagger text reveal
- Scroll-triggered parallax (subtle)
- Timeline orchestration

**No Framer Motion** (overkill)

---

## 📦 Component Structure

```
src/
├── layouts/
│   └── Layout.astro (base layout)
├── components/
│   ├── Hero.astro
│   ├── About.astro
│   ├── Projects.astro
│   ├── ProjectCard.astro
│   ├── Blog.astro
│   ├── Contact.astro
│   ├── Header.astro
│   └── Footer.astro
├── pages/
│   ├── index.astro
│   ├── about.astro (optional)
│   └── blog/
│       └── [...slug].astro
└── styles/
    └── global.css
```

---

## 🎯 Smart Concept (Adham-inspired)

**Idea: "Build × Audit" Toggle?**

Option A: Homepage switch entre:
- **Build Mode:** Projets que tu construis (DataPass, ImmoTracker)
- **Audit Mode:** Services accessibilité

Option B: **Pas de gimmick** - just excellent clean design

**Recommendation:** Option B (clean) + personality via micro-interactions

Gimmick peut être "too much" - let quality speak for itself.

---

**Design Spec Ready!** 🎨✨
Ready to code when you are.
