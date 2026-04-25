# SPGAI 2026 — Workshop Website

Official website for the **Workshop on Secure and Private System Design for Generative and Agentic AI (SPGAI 2026)**, co-located with the 63rd IEEE/ACM Design Automation Conference (DAC), July 26, 2026, Long Beach, California, USA.

🌐 **Live Site**: [www.qlou.org/SPGAI/]

---

## About the Workshop

Generative and agentic AI are reshaping computing at every layer, from research and infrastructure to the design of the systems themselves. SPGAI 2026 is the first cross-layer forum at DAC dedicated to the secure and private deployment of generative and agentic AI systems. The workshop brings together leading researchers and industry practitioners to explore emerging challenges across three themes:

- **Theme 1** — Secure, Private, and Trustworthy AI and Agents
- **Theme 2** — Securing the Artifacts of AI and Agents
- **Theme 3** — Generative and Agentic AI for Security, Privacy, and Trustworthiness

---

## Tech Stack

- [Astro](https://astro.build/) — Static site framework
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS
- [React](https://react.dev/) — Interactive components
- [GitHub Pages](https://pages.github.com/) — Hosting
- [GitHub Actions](https://github.com/features/actions) — CI/CD deployment

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/mxzheng/DAC-26Workshop.git
cd DAC-26Workshop

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

### Build

```bash
npm run build
```

The static site will be generated in the `dist/` folder.

---

## Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions on every push to the `main` branch.

To deploy manually, trigger the workflow from the **Actions** tab in GitHub.

---
