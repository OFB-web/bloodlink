import React, { useState, useEffect, useCallback } from 'react';

const NAV_LINKS = [
  { label: 'About',       href: '#about'    },
  { label: 'How It Works',href: '#how'      },
  { label: 'Features',    href: '#features' },
  { label: 'Roles',       href: '#roles'    },
  { label: 'Impact',      href: '#impact'   },
];

/* ── Drop (blood drop icon) ── */
function Drop() {
  return (
    <div className="drop">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2C12 2 5 10.5 5 15a7 7 0 0014 0C19 10.5 12 2 12 2z" />
      </svg>
    </div>
  );
}

function Navbar() {
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [scrolled,  setScrolled]  = useState(false);
  const [navHidden, setNavHidden] = useState(false);

  /* ── Scroll behaviour: hide on down, show on up ── */
  useEffect(() => {
    let lastY = 0;
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 10);
        if (y > 80) {
          setNavHidden(y > lastY);
          if (y > lastY) setMenuOpen(false); // close menu on scroll-down
        } else {
          setNavHidden(false);
        }
        lastY = y;
        ticking = false;
      });
      ticking = true;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Lock body scroll when mobile menu is open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const navClass = [
    'navbar',
    scrolled  ? 'nav-scrolled' : '',
    navHidden ? 'nav-hidden'   : '',
  ].filter(Boolean).join(' ');

  return (
    <>
      <nav className={navClass} id="navbar">
        {/* Logo */}
        <a href="#home" className="nav-logo" onClick={closeMenu}>
          <Drop />
          BloodLink
        </a>

        {/* Desktop links */}
        <ul className="nav-links" role="list">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="nav-cta">
          <a href="#roles" className="btn btn-primary">Get Started</a>
        </div>

        {/* Hamburger (mobile) */}
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          id="hamburger"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
        {/* Backdrop */}
        <div className="mobile-menu-overlay" onClick={closeMenu} />

        {/* Slide-in panel */}
        <div className="mobile-menu-panel" role="dialog" aria-modal="true" aria-label="Navigation menu">
          <ul className="mobile-nav-links" role="list">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a href={href} className="mobile-link" onClick={closeMenu}>{label}</a>
              </li>
            ))}
          </ul>
          <div className="mobile-nav-cta">
            <a href="#roles" className="btn btn-primary btn-full" onClick={closeMenu}>Get Started</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
