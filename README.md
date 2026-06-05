# Personal Site | Sumiya Maya

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://github.com/sumiya113/Personal_Site)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-19.0-blue.svg)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38bdf8.svg)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646cff.svg)](https://vite.dev/)

A premium, interactive, and beautifully polished single-page personal portfolio designed for **Sumiya Maya**, a Full-Stack Software Engineer with 4+ years of professional experience. Fully optimized for production build pipelines, modern UI/UX principles, and instant deployment to GitHub Pages.

---

## 📌 Table of Contents

- [About the Project](#-about-the-project)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Local Installation & Setup](#-local-installation--setup)
- [Usage & Customization](#-usage--customization)
- [GitHub Pages Deployment Configuration](#-github-pages-deployment-configuration)
- [License](#-license)
- [Contact](#-contact)

---

## 📖 About the Project

This project serves as a highly performant and responsive branding card and landing folio tailored to showcase real-world development expertise. Designed to depart from typical generic grids, it offers a refined dark aesthetic paired with micro-interactions, custom scroll progress indicators, interactive history timelines, and category-by-category skill competency graphs. 

It tells a concise, coherent story suited for an intermediate-to-advanced Full-Stack Engineer—bridging robust frontend craftsmanship with clean API integration logic.

---

## ✨ Key Features

- 🎨 **Cosmic Minimalist Dark Aesthetic:** Beautiful eye-safe dark backdrop, featuring customized structural grids, soft borders, glowing states, and elegant visual hierarchy.
- 📱 **Fully Fluid & Responsive Design:** Crafted desktop-first with Tailwind CSS, scaling seamlessly from 4K absolute layouts to mobile touchscreen interfaces (following 44px touch-target standards).
- 🧬 **Interactive Animations:** Polished transition behaviors and entrance triggers developed via `motion` (Framer Motion).
- 📊 **Dynamic Skill Breakdown:** Competency progress visuals highlighting core areas across Frontend, Backend, Databases, Cloud Infrastructure, and AI/ML integrations.
- ⏳ **Chronological Career Timeline:** Detailed interactive resume displaying key items and product milestones at companies like Stripe and Linear.
- 🚀 **One-Command GH-Pages Deployment:** Out-of-the-box support for deploying directly to user landing paths (`https://sumiya113.github.io/Personal_Site/`) through preconfigured build steps.

---

## 🛠️ Tech Stack

- **Core Framework:** React 19 (Functional Hooks architecture)
- **Build System:** Vite 6 (Hyper-fast HMR and bundle optimizer)
- **Language:** TypeScript (Strict type-safeness and compiled interfaces)
- **Styling Utility:** Tailwind CSS 4 (Custom design tokens, fluid spacing)
- **Animation Framework:** Framer Motion / Motion
- **Icon Set:** Lucide React (Unified thin stroke iconography)
- **Deployment Assistant:** `gh-pages` package

---

## 📂 Project Structure

```bash
/
├── public/                 # Static assets & public resources
│   └── .nojekyll           # Bypasses Jekyll processing on GitHub Pages
├── src/
│   ├── components/         # Reusable structural widgets
│   │   ├── About.tsx       # Profile description section
│   │   ├── Certifications.tsx # Professional badges and certificates
│   │   ├── Experience.tsx  # Interactive career timeline
│   │   ├── Hero.tsx        # High-impact landing component
│   │   └── Projects.tsx    # Showcase of featured and secondary projects
│   ├── data.ts             # Central point of content & personal info state
│   ├── App.tsx             # Root layout wrapping sections and progress bars
│   ├── index.css           # Global Tailwind CSS configurations & custom theme
│   ├── main.tsx            # App entrypoint
│   └── types.ts            # Type/Interface model definitions
├── package.json            # Tool script tasks and dependencies
├── tsconfig.json           # Compiler rules for TypeScript
└── vite.config.ts          # Core Vite configurations (with dynamic base paths)
```

---

## 🚀 Local Installation & Setup

Ensure you have [Node.js](https://nodejs.org/) installed on your local machine.

### 1. Clone the Repository
```bash
git clone https://github.com/sumiya113/Personal_Site.git
cd Personal_Site
```

### 2. Install Packages
```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```
Navigate to `http://localhost:3000` (or the terminal-provided URI) to view the live preview locally.

### 4. Code Quality & Formatting
Run TypeScript compiler check:
```bash
npm run lint
```

---

## ✍️ Usage & Customization

All copy, contact credentials, links, stats, skills, experience events, and list items are decoupled from the render logic to make customization effortless.

To customize the portfolio with your own info:
1. Open up `/src/data.ts`.
2. Update the values inside:
   - `PERSONAL_INFO` (Your name, title, bio, mission statement, social handles, etc.)
   - `STATISTICS` (Quantifiable achievements counters)
   - `SKILLS` (Categorized list of tech stack items and experience scores)
   - `EXPERIENCE` (Roles, descriptions, achievements, and used skills list)
   - `PROJECTS` (Featured items, tech tags, and code assets)
3. Save the file and Vite will hot-reload your updates instantly.

---

## 🌐 GitHub Pages Deployment Configuration

This project is set up to publish directly to your custom repository on GitHub under the path `/Personal_Site/`.

### Deployment Script Config
Inside `package.json`, the deployment automation is configured:
```json
"scripts": {
  "predeploy": "vite build --base=/Personal_Site/",
  "deploy": "gh-pages -d dist"
}
```

### Deploying the App
To bundle the site and push it onto the `gh-pages` deployment branch, simply execute:
```bash
npm run deploy
```
This single command automatically compiles assets down to standard optimized static pages/scripts into `/dist` and updates your remote repository's hosting branch effortlessly.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🤝 Contact & Author

- **Sumiya Maya** - [GitHub Profile](https://github.com/sumiya113)
- **Project URL:** [https://github.com/sumiya113/Personal_Site](https://github.com/sumiya113/Personal_Site)
