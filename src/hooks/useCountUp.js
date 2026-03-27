import { useEffect, useRef } from 'react';

/**
 * useCountUp
 * Attaches a count-up animation to a DOM ref when it enters the viewport.
 *
 * @param {number}  target   - Final number to count to
 * @param {string}  suffix   - Text appended after the number (e.g. '%', 'min', '+')
 * @param {number}  duration - Animation duration in ms (default 1600)
 */
export function useCountUp(target, suffix = '', duration = 1600) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(el);

        const isDecimal = !Number.isInteger(target);
        const start = performance.now();

        function step(now) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
          const val = isDecimal
            ? (eased * target).toFixed(1)
            : Math.round(eased * target);
          el.textContent = val + suffix;
          if (progress < 1) requestAnimationFrame(step);
        }

        requestAnimationFrame(step);
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, suffix, duration]);

  return ref;
}
