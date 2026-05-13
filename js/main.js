/**
 * main.js — Renan Leite Portfolio
 *
 * Responsabilidades:
 *  - Scroll reveal via IntersectionObserver
 *  - Animação de entrada do Hero
 *  - Highlight do link de nav ativo
 */

/* ─── SCROLL REVEAL ─── */

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach((el) => {
  revealObserver.observe(el);
});

/* ─── HERO: animação de entrada imediata ─── */

document.querySelectorAll('#hero .reveal').forEach((el, index) => {
  setTimeout(() => el.classList.add('visible'), 100 + index * 120);
});

/* ─── NAV: destaque da seção ativa no scroll ─── */

const sections   = document.querySelectorAll('section[id]');
const navItems   = document.querySelectorAll('.nav-links li');

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const activeId = entry.target.getAttribute('id');
        navItems.forEach((item) => {
          const link = item.querySelector('a');
          if (link && link.getAttribute('href') === `#${activeId}`) {
            item.style.color = 'var(--accent)';
          } else {
            item.style.color = '';
          }
        });
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach((section) => navObserver.observe(section));