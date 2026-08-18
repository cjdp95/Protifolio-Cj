/* ============================================================
   CJ De Padua — Portfolio Scripts
   File: js/main.js
   ============================================================ */

/* ── CUSTOM CURSOR ─────────────────────────────────────────── */
const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top  = e.clientY + 'px';
});

// Grow cursor on interactive elements
const interactiveEls = document.querySelectorAll(
  'a, button, .proj-card, .cert-item, .stag, .info-item'
);
interactiveEls.forEach((el) => {
  el.addEventListener('mouseenter', () => cursor.classList.add('big'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('big'));
});

/* ── SCROLL PROGRESS BAR ───────────────────────────────────── */
const progressBar = document.getElementById('progress');

/* ── STICKY NAV ────────────────────────────────────────────── */
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  // Progress bar
  const scrolled = window.scrollY;
  const totalHeight = document.body.scrollHeight - window.innerHeight;
  const pct = (scrolled / totalHeight) * 100;
  progressBar.style.width = pct + '%';

  // Nav background on scroll
  nav.classList.toggle('scrolled', scrolled > 60);
});

/* ── SCROLL REVEAL ─────────────────────────────────────────── */
const revealElements = document.querySelectorAll(
  '.reveal, .reveal-left, .reveal-right'
);

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger sibling reveals for a cascading effect
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 90);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealElements.forEach((el) => revealObserver.observe(el));
