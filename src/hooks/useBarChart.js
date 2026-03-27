import { useEffect, useRef } from 'react';

/**
 * useBarChart
 * Triggers bar-fill and value count-up animations when the chart
 * container enters the viewport.
 *
 * Returns a ref to attach to the chart wrapper element.
 */
export function useBarChart() {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    function animateCount(el, target, suffix, duration = 1400) {
      const isDecimal = !Number.isInteger(target);
      const start = performance.now();
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

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(container);

        container.querySelectorAll('[data-bar-width]').forEach((bar, i) => {
          setTimeout(() => {
            bar.style.width = bar.dataset.barWidth + '%';
          }, i * 180);
        });

        container.querySelectorAll('[data-count]').forEach((el, i) => {
          setTimeout(() => {
            const target = parseFloat(el.dataset.count);
            const suffix = el.dataset.suffix || '';
            animateCount(el, target, suffix, 1400);
          }, i * 180);
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return ref;
}
