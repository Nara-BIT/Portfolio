# 🚀 Narasingh S Jadhav — Developer Portfolio

A modern, interactive, and visually stunning personal portfolio built with
React, Three.js, Framer Motion, and Tailwind CSS.

---

## ✨ Features

- 🎨 Dark theme with neon cyan accents
- 🌐 Interactive 3D globe that follows your mouse cursor
- ✨ Particle background with mouse interaction
- 🖱️ Custom animated cursor (desktop only)
- 💫 Smooth scroll-triggered animations
- 💻 Terminal-style hero introduction
- 📱 Fully responsive (mobile + tablet + desktop)
- 📊 LeetCode stats with animated counters
- 🏆 Achievements and hackathon highlights
- ✉️ Contact form with email integration

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| Framework | React 18 + Vite |
| Styling | Tailwind CSS 3.4 |
| Animations | Framer Motion 11 |
| 3D Graphics | Three.js + React Three Fiber + Drei |
| Icons | React Icons |
| Typing Effect | react-type-animation |
| Notifications | react-hot-toast |

---

## 📁 Project Structure

```
nara-portfolio/
├── public/
│   ├── favicon.svg
│   └── resume.pdf
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Aspirations.jsx
│   │   ├── CodingProfiles.jsx
│   │   ├── Contact.jsx
│   │   ├── CustomCursor.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Loader.jsx
│   │   ├── Navbar.jsx
│   │   ├── ParticleCanvas.jsx
│   │   ├── Projects.jsx
│   │   ├── Scene3D.jsx
│   │   ├── SectionHeading.jsx
│   │   ├── Skills.jsx
│   │   └── SocialSidebar.jsx
│   ├── data/
│   │   └── constants.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- npm 9 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/Nara-BIT/nara-portfolio.git

# Navigate into the project
cd nara-portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be running at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🌐 Deployment (Vercel — Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign up with GitHub
3. Click **Add New Project** and import `nara-portfolio`
4. Framework Preset will auto-detect as **Vite**
5. Click **Deploy**
6. Your site will be live at `your-project.vercel.app`

Every future `git push` will automatically redeploy.

---

## ⚙️ Customization Guide

| What to change | Where to edit |
|---|---|
| Personal info and skills | `src/data/constants.js` |
| Hero section text | `src/components/Hero.jsx` |
| About section text | `src/components/About.jsx` |
| Projects list | `src/data/constants.js` → `projects` array |
| LeetCode stats | `src/data/constants.js` → `leetcodeStats` |
| Codeforces handle | `src/data/constants.js` → `codeforcesStats` |
| Email address | `src/components/SocialSidebar.jsx` and `Contact.jsx` |
| Resume PDF | Replace `public/resume.pdf` with your file |
| Colors and fonts | `tailwind.config.js` |
| 3D globe behavior | `src/components/Scene3D.jsx` |

---

## 🔗 Links

- **Portfolio:** [Live Site](https://nara-portfolio.vercel.app)
- **GitHub:** [Nara-BIT](https://github.com/Nara-BIT)
- **LinkedIn:** [Narasingh S Jadhav](https://www.linkedin.com/in/narasingh-s-jadhav-0031a7245/)
- **LeetCode:** [BrawlyNara007](https://leetcode.com/u/BrawlyNara007/)
- **Codeforces:** [Nara_on_Run](https://codeforces.com/profile/Nara_on_Run)
- **Instagram:** [narasinghjadhav03](https://www.instagram.com/narasinghjadhav03/)

---

## 📄 License

This project is open source under the [MIT License](LICENSE).

---

<p align="center">
  Built with 💚 by <strong>Narasingh S Jadhav</strong>
</p>