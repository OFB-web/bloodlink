/* =========================================================
   BloodLink — script.js
   ========================================================= */

/* ── SCROLL REVEAL ── */
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


/* ── COUNT-UP HELPER ── */
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


/* ── IMPACT CARD COUNT-UPS ── */
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


/* ── ABOUT BAR CHART ANIMATION ── */
const chartObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {

      /* grow bars */
      e.target.querySelectorAll('.bar-fill').forEach((bar, i) => {
        setTimeout(() => {
          bar.style.width = bar.dataset.width + '%';
        }, i * 180);
      });

      /* count up bar values */
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


/* ── BLOOD TYPE SELECTOR ── */
document.querySelectorAll('.bt').forEach(bt => {
  bt.addEventListener('click', () => {
    document.querySelectorAll('.bt').forEach(b => b.classList.remove('active'));
    bt.classList.add('active');
  });
});
