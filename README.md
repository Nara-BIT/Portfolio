# 🚀 Nara's Portfolio

<div align="center">

![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-0.166-000000?style=for-the-badge&logo=threedotjs&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.3-FF0050?style=for-the-badge&logo=framer&logoColor=white)

A modern, interactive, and visually stunning personal portfolio website built with React, Three.js, and Framer Motion featuring neon-dark aesthetics, 3D visuals, and GitHub API integration.

[🌐 Live Demo](#) · [📂 GitHub](https://github.com/Nara-BIT) · [🐛 Report Bug](https://github.com/Nara-BIT/nara-portfolio/issues)

</div>

---

## ✨ Features

- 🎨 **Dark Neon Theme** — Sleek dark UI with glowing cyan, purple, and pink accents
- 🌀 **3D Visuals** — Interactive 3D wireframe geometry using Three.js and React Three Fiber
- 🎭 **Smooth Animations** — Scroll-triggered animations and micro-interactions via Framer Motion
- 🖱️ **Custom Cursor** — Neon-styled cursor with hover effects (desktop only)
- ✨ **Particle Background** — Interactive particle canvas that responds to mouse movement
- 📦 **GitHub API Integration** — Auto-fetches and displays latest repositories
- ⌨️ **Typewriter Effect** — Animated role/tagline rotation in the hero section
- 📱 **Fully Responsive** — Optimized for mobile, tablet, and desktop screens
- 🔄 **Scroll Progress Bar** — Gradient progress indicator at the top
- 💎 **Glassmorphism** — Beautiful glass-effect cards and navigation
- ⚡ **Lightning Fast** — Built with Vite for instant HMR and optimized builds
- 🎆 **Loading Screen** — Animated orbital loader on initial visit

---

## 🏗️ Project Structure
nara-portfolio/

│

├── public/

│ └── vite.svg
│
├── src/
│ ├── components/
│ │ ├── Navbar.jsx # Fixed navigation with scroll progress
│ │ ├── Hero.jsx # Landing section with 3D scene
│ │ ├── About.jsx # Bio and quick facts
│ │ ├── Projects.jsx # GitHub repos auto-fetch display
│ │ ├── Skills.jsx # Tech stack with animated progress bars
│ │ ├── Aspirations.jsx # Career goals timeline
│ │ ├── Contact.jsx # Contact form and social links
│ │ ├── Footer.jsx # Footer with credits
│ │ ├── ParticleCanvas.jsx # Interactive particle background
│ │ ├── Scene3D.jsx # Three.js 3D wireframe shapes
│ │ ├── CustomCursor.jsx # Neon cursor effect
│ │ └── Loader.jsx # Animated loading screen
│ │
│ ├── hooks/
│ │ ├── useGithubRepos.js # GitHub API data fetching hook
│ │ └── useTypewriter.js # Typewriter animation hook
│ │
│ ├── App.jsx # Main app with layout and sections
│ ├── main.jsx # React entry point
│ └── index.css # Global styles, utilities, and scrollbar
│
├── index.html # HTML entry point
├── package.json # Dependencies and scripts
├── vite.config.js # Vite configuration
├── tailwind.config.js # Tailwind CSS theme and extensions
├── postcss.config.js # PostCSS configuration
└── README.md # This file

text


---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | React 18 |
| **Build Tool** | Vite 5 |
| **Styling** | Tailwind CSS 3.4 |
| **3D Graphics** | Three.js + React Three Fiber + Drei |
| **Animations** | Framer Motion 11 |
| **Icons** | React Icons |
| **API** | GitHub REST API |
| **Language** | JavaScript (ES6+) |

---

## ⚡ Quick Start

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Git](https://git-scm.com/)

---
