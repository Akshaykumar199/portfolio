# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern and clean UI design
- 📱 Fully responsive layout
- 🌙 Dark mode support
- ⚡ Fast and optimized with Next.js
- 🎯 Smooth scrolling navigation
- 📄 All sections from resume integrated

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── Navbar.tsx       # Navigation component
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── Skills.tsx       # Skills section
│   ├── Education.tsx    # Education section
│   ├── Projects.tsx     # Projects section
│   └── Contact.tsx      # Contact section
├── data/
│   └── resume.ts        # Resume data
└── public/              # Static assets
```

## Customization

Edit the resume data in `data/resume.ts` to update your portfolio information.

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- React Icons
