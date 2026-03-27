/* =========================================================
   BloodLink — script.js
   ========================================================= */

/* ══════════════════════════════
   HAMBURGER MENU
══════════════════════════════ */
const hamburger   = document.getElementById('hamburger');
const mobileMenu  = document.getElementById('mobileMenu');
const menuOverlay = document.getElementById('menuOverlay');
const mobileLinks = document.querySelectorAll('.mobile-link');

function openMenu() {
  hamburger.classList.add('open');
  mobileMenu.classList.add('open');
  document.body.style.overflow = 'hidden'; // prevent background scroll
}

function closeMenu() {
  hamburger.classList.remove('open');
  mobileMenu.classList.remove('open');
  document.body.style.overflow = '';
}

if (hamburger) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.contains('open') ? closeMenu() : openMenu();
  });
}

// Close when overlay (dark backdrop) is tapped
if (menuOverlay) {
  menuOverlay.addEventListener('click', closeMenu);
}

// Close when any nav link is tapped
mobileLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});


/* ══════════════════════════════
   HIDE NAV ON SCROLL DOWN
   SHOW NAV ON SCROLL UP
══════════════════════════════ */
const navbar = document.getElementById('navbar');
let lastScrollY = 0;
let ticking = false;

function handleNavScroll() {
  const currentScrollY = window.scrollY;

  // Add shadow once user scrolls past 10px
  if (currentScrollY > 10) {
    navbar.classList.add('nav-scrolled');
  } else {
    navbar.classList.remove('nav-scrolled');
  }

  // Hide nav when scrolling DOWN past 80px
  // Show nav when scrolling UP
  if (currentScrollY > 80) {
    if (currentScrollY > lastScrollY) {
      // Scrolling down → hide nav
      navbar.classList.add('nav-hidden');
      // Also close mobile menu if open
      closeMenu();
    } else {
      // Scrolling up → show nav
      navbar.classList.remove('nav-hidden');
    }
  } else {
    navbar.classList.remove('nav-hidden');
  }

  lastScrollY = currentScrollY;
  ticking = false;
}

window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(handleNavScroll);
    ticking = true;
  }
}, { passive: true });


/* ══════════════════════════════
   SCROLL REVEAL
══════════════════════════════ */
const reveals = document.querySelectorAll('.reveal');
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('in'), i * 80);
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach(el => revealObs.observe(el));


/* ══════════════════════════════
   COUNT-UP HELPER
══════════════════════════════ */
function animateCount(el, target, suffix, duration = 1600) {
  const start = performance.now();
  const isDecimal = !Number.isInteger(target);
  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const val = isDecimal
      ? (eased * target).toFixed(1)
      : Math.round(eased * target);
    el.textContent = val + suffix;
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}


/* ══════════════════════════════
   IMPACT COUNT-UPS
══════════════════════════════ */
const impactObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const el     = e.target;
      const target = parseFloat(el.dataset.target);
      const suffix = el.dataset.suffix || '';
      animateCount(el, target, suffix);
      impactObs.unobserve(el);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.impact-num[data-target]')
  .forEach(el => impactObs.observe(el));


/* ══════════════════════════════
   ABOUT BAR CHART ANIMATION
══════════════════════════════ */
const chartObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.bar-fill').forEach((bar, i) => {
        setTimeout(() => {
          bar.style.width = bar.dataset.width + '%';
        }, i * 180);
      });
      e.target.querySelectorAll('.bar-val[data-count]').forEach((val, i) => {
        setTimeout(() => {
          const target = parseFloat(val.dataset.count);
          const suffix = val.dataset.suffix || '';
          animateCount(val, target, suffix, 1400);
        }, i * 180);
      });
      chartObs.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });

const chart = document.getElementById('about-chart');
if (chart) chartObs.observe(chart);


/* ══════════════════════════════
   BLOOD TYPE SELECTOR (hero card)
══════════════════════════════ */
document.querySelectorAll('.bt').forEach(bt => {
  bt.addEventListener('click', () => {
    document.querySelectorAll('.bt').forEach(b => b.classList.remove('active'));
    bt.classList.add('active');
  });
});