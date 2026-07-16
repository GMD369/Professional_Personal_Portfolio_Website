# Professional Personal Portfolio Website

A modern, fully responsive personal portfolio website built with **HTML5** and **CSS3** (plus vanilla JavaScript for interactivity) — no CSS frameworks or templates used. Built as **Task 1** of the Devixo Solutions Web Development Internship.

**Live pages:** Home · About · Skills · Education · Projects · Contact

---

## About the Project

This site showcases the profile, skills, education, and project portfolio of **Ghulam Mohiyu Ud Din**, a Full Stack AI Engineer. It's a static, six-page website designed to serve as a single, professional link that recruiters or collaborators can visit to see who the developer is, what they can build, and how to get in touch — while the site itself demonstrates hand-written HTML/CSS craftsmanship.

## Features

- **Responsive design** — fluid layouts with breakpoints at 960px, 720px, and 480px for desktop, tablet, and mobile
- **Sticky navigation bar** with a mobile hamburger menu
- **Hero section** with an animated profile avatar and call-to-action buttons
- **Skill cards** with animated proficiency bars (triggered on scroll)
- **Filterable project cards** (AI & SaaS / Web Apps / Desktop & Console) with hover-zoom thumbnails
- **Contact form** (UI only, no backend) with client-side interaction feedback
- **Footer** consistent across all pages
- **Smooth scrolling** and **hover animations** throughout
- **Professional color theme** driven entirely by CSS custom properties
- **Dark mode** (bonus) — toggled via a navbar button and persisted with `localStorage`

## Technologies Used

- HTML5
- CSS3 (Grid, Flexbox, Custom Properties)
- Vanilla JavaScript (ES6) — theme toggle, mobile nav, scroll-reveal animations (`IntersectionObserver`), skill bar animation, project filtering, form UI feedback
- [Google Fonts](https://fonts.google.com/) — Inter
- Inline SVG icons (GitHub, LinkedIn — no external icon libraries)

No CSS frameworks (e.g. Bootstrap) or pre-built templates were used — every layout, component, and animation was written from scratch.

## Project Structure

```
├── index.html          Home page
├── about.html           About + Experience timeline
├── skills.html          Skills & tools
├── education.html       Education & coursework
├── projects.html        Filterable project portfolio
├── contact.html         Contact info + form
├── style.css             Shared design system (variables, layout, responsive rules, dark mode)
├── script.js             Theme toggle, mobile nav, scroll reveal, progress bars, project filter, form UI
├── images/               Profile photo & project thumbnails
├── Screenshots/          Desktop screenshots of the site
├── ResponsiveScreenshots/  Mobile/tablet screenshots of the site
└── Task1_Report.pdf      Internship task report
```

## How to Run

This is a static site — no build step, no dependencies, no server required.

1. **Download or clone** this folder.
2. **Open `index.html` directly in any modern browser** (double-click it, or right-click → Open With → your browser).

That's it — every page links to the others via relative paths, and `style.css` / `script.js` load automatically.

### Optional: run via a local server

Opening `index.html` directly works fine, but if you prefer serving it locally (e.g. for consistent relative-path behavior):

```bash
# Using Python
python -m http.server 8000

# Using Node (npx)
npx serve .
```

Then visit `http://localhost:8000` in your browser.

### Deploying

Since this is a fully static site, it can be hosted for free on any static host, e.g.:
- **GitHub Pages** — push this repo and enable Pages on the `main` branch
- **Netlify** / **Vercel** — drag-and-drop the folder or connect the Git repo

## Customization

- **Colors/theme** — edit the CSS custom properties at the top of `style.css` (`:root` and `[data-theme="dark"]`)
- **Content** — edit the relevant `.html` file directly (each page is self-contained, plain HTML)
- **Projects** — add/edit cards in `projects.html`; use `data-category` (`ai`, `web`, or `console`) to control filtering
- **Images** — replace files in `images/` and update the corresponding `src` attributes

## Contact

- **Email:** ghulammohiyudin11@gmail.com
- **GitHub:** [github.com/GMD369](https://github.com/GMD369)
- **LinkedIn:** [linkedin.com/in/ghulam-mohiyu-ud-din](https://www.linkedin.com/in/ghulam-mohiyu-ud-din)
