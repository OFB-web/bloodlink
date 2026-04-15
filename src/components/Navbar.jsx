import React, { useState, useEffect, useCallback, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

/* ── Navigation card definitions ── */
const NAV_CARDS = [
  {
    label: 'About',
    bg: 'var(--bg)',
    color: 'var(--text)',
    links: [
      { label: 'About BloodLink', href: '#about'  },
      { label: 'How It Works',    href: '#how'    },
    ],
  },
  {
    label: 'Platform',
    bg: 'var(--soft-red)',
    color: 'var(--primary)',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Roles',    href: '#roles'    },
    ],
  },
  {
    label: 'Impact',
    bg: 'var(--primary)',
    color: '#fff',
    links: [
      { label: 'Our Impact', href: '#impact' },
    ],
  },
];

/* ── Arrow icon (replaces react-icons GoArrowUpRight) ── */
function ArrowUpRight() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

/* ── Blood-drop logo mark ── */
function Drop() {
  return (
    <div className="drop" aria-hidden="true">
      <svg viewBox="0 0 24 24">
        <path d="M12 2C12 2 5 10.5 5 15a7 7 0 0014 0C19 10.5 12 2 12 2z" />
      </svg>
    </div>
  );
}

function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hidden,     setHidden]     = useState(false);

  const wrapperRef = useRef(null);
  const navRef     = useRef(null);
  const cardsRef   = useRef([]);
  const tlRef      = useRef(null);

  /* ── Hide nav on scroll-down, reveal on scroll-up ── */
  useEffect(() => {
    let lastY   = window.scrollY;
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (y > 80) {
          if (y > lastY) {
            setHidden(true);
            /* auto-close menu when hiding */
            if (tlRef.current && tlRef.current.progress() > 0) {
              tlRef.current.reverse();
              setIsExpanded(false);
            }
          } else {
            setHidden(false);
          }
        } else {
          setHidden(false);
        }
        lastY   = y;
        ticking = false;
      });
      ticking = true;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Close on outside click ── */
  useEffect(() => {
    if (!isExpanded) return;
    const handler = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        reverseClose();
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  // reverseClose is stable (useCallback), safe to omit from deps
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isExpanded]);

  /* ── GSAP timeline: collapse → expand ── */
  useGSAP(() => {
    const navEl = navRef.current;
    const cards = cardsRef.current.filter(Boolean);
    if (!navEl || !cards.length) return;

    /* Start at 60 px (top-bar only), cards invisible below fold */
    gsap.set(navEl, { height: 60, overflow: 'hidden' });
    gsap.set(cards, { y: 50, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    /* 1. Expand the nav shell to its natural height */
    tl.to(navEl, {
      height: 'auto',
      duration: 0.42,
      ease: 'power3.out',
    });

    /* 2. Stagger cards up from below */
    tl.to(cards, {
      y: 0,
      opacity: 1,
      duration: 0.35,
      ease: 'power3.out',
      stagger: 0.08,
    }, '-=0.18');

    tlRef.current = tl;

    return () => { tlRef.current = null; };
  }, { scope: wrapperRef, dependencies: [] });

  /* ── Helpers ── */
  const reverseClose = useCallback(() => {
    const tl = tlRef.current;
    if (!tl || tl.progress() === 0) return;
    tl.reverse();
    tl.eventCallback('onReverseComplete', () => {
      setIsExpanded(false);
      tl.eventCallback('onReverseComplete', null);
    });
  }, []);

  const toggleMenu = useCallback(() => {
    const tl = tlRef.current;
    if (!tl) return;
    if (!isExpanded) {
      setIsExpanded(true);
      tl.play();
    } else {
      reverseClose();
    }
  }, [isExpanded, reverseClose]);

  const handleLink = useCallback(() => {
    reverseClose();
  }, [reverseClose]);

  return (
    <div
      ref={wrapperRef}
      className={`card-nav-wrapper${hidden ? ' card-nav-wrapper--hidden' : ''}`}
    >
      <nav
        ref={navRef}
        className={`card-nav${isExpanded ? ' card-nav--open' : ''}`}
        aria-label="Main navigation"
      >
        {/* ── Top bar ── */}
        <div className="card-nav-top">
          <a href="#home" className="nav-logo" onClick={handleLink}>
            <Drop />
            BloodLink
          </a>

          {/* Desktop CTA */}
          <a href="#roles" className="btn btn-primary card-nav-cta" onClick={handleLink}>
            Get Started
          </a>

          {/* Hamburger — 2-bar style from the CardNav reference */}
          <button
            className={`card-nav-burger${isExpanded ? ' open' : ''}`}
            onClick={toggleMenu}
            aria-label={isExpanded ? 'Close menu' : 'Open menu'}
            aria-expanded={isExpanded}
            aria-controls="card-nav-content"
          >
            <span />
            <span />
          </button>
        </div>

        {/* ── Expandable card content ── */}
        <div
          id="card-nav-content"
          className="card-nav-content"
          style={{ pointerEvents: isExpanded ? 'auto' : 'none' }}
          aria-hidden={!isExpanded}
        >
          {NAV_CARDS.map((card, i) => (
            <div
              key={card.label}
              className="nav-card"
              ref={(el) => { cardsRef.current[i] = el; }}
              style={{ backgroundColor: card.bg, color: card.color }}
            >
              <div className="nav-card-label">{card.label}</div>
              <div className="nav-card-links">
                {card.links.map((lnk) => (
                  <a
                    key={lnk.href}
                    href={lnk.href}
                    className="nav-card-link"
                    onClick={handleLink}
                  >
                    <ArrowUpRight />
                    {lnk.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
