import React, { useEffect } from 'react';
import LandingPage from './screens/LandingPage.jsx';

function App() {
  // Global scroll-reveal: add `.in` to any `.reveal` element when it enters view
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('in'), i * 80);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return <LandingPage />;
}

export default App;
