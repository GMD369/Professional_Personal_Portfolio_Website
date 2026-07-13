// Theme toggle (persisted)
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  root.setAttribute('data-theme', savedTheme);
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  root.setAttribute('data-theme', 'dark');
}

themeToggle?.addEventListener('click', () => {
  const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

// Mobile nav toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger?.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

navMenu?.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    hamburger?.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// Reveal-on-scroll animation
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
revealEls.forEach((el) => revealObserver.observe(el));

// Animate skill progress bars when visible
const progressFills = document.querySelectorAll('.progress-fill');
const progressObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target;
        target.style.width = target.dataset.level + '%';
        progressObserver.unobserve(target);
      }
    });
  },
  { threshold: 0.3 }
);
progressFills.forEach((el) => progressObserver.observe(el));

// Project filter (Projects page)
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    filterButtons.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;

    projectCards.forEach((card) => {
      const show = filter === 'all' || card.dataset.category === filter;
      card.style.display = show ? '' : 'none';
    });
  });
});

// Contact form (UI only) — prevent actual submission
const contactForm = document.getElementById('contactForm');
contactForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = contactForm.querySelector('button[type="submit"]');
  const originalText = btn.textContent;
  btn.textContent = 'Message Sent ✓';
  contactForm.reset();
  setTimeout(() => {
    btn.textContent = originalText;
  }, 2500);
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    navbar?.classList.add('scrolled');
  } else {
    navbar?.classList.remove('scrolled');
  }
});
