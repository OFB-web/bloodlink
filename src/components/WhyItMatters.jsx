import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const FEATURES = [
  {
    title: 'Blood Group Search',
    desc: 'Instantly filter the donor registry by blood group. Find compatible donors with a single click during any emergency.',
    icon: (
      <svg className="feat-svg" viewBox="0 0 24 24" fill="none" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    title: 'Simple Donor Registration',
    desc: 'A clean, guided form lets anyone register as a blood donor in under two minutes. No technical expertise required.',
    icon: (
      <svg className="feat-svg" viewBox="0 0 24 24" fill="none" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <line x1="19" y1="8" x2="19" y2="14" />
        <line x1="22" y1="11" x2="16" y2="11" />
      </svg>
    ),
  },
  {
    title: 'Direct Donor Contact',
    desc: 'Donor profiles show contact details so patients can reach out directly via call or WhatsApp. No middleman, no waiting.',
    icon: (
      <svg className="feat-svg" viewBox="0 0 24 24" fill="none" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .82h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    title: 'Community Donor Network',
    desc: 'Every registered donor is part of a growing, life-saving community spanning the length and breadth of The Gambia.',
    icon: (
      <svg className="feat-svg" viewBox="0 0 24 24" fill="none" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    title: 'Mobile-First Design',
    desc: 'Fully optimised for smartphones, tablets, and desktops. Accessible from any device, anywhere, any time.',
    icon: (
      <svg className="feat-svg" viewBox="0 0 24 24" fill="none" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    title: 'Live Availability Status',
    desc: 'Donors update their status in real time so patients only see who is currently able and willing to help.',
    icon: (
      <svg className="feat-svg" viewBox="0 0 24 24" fill="none" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

function WhyItMatters() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      const isMobile = window.innerWidth <= 600;

      /* useGSAP scopes selector strings to sectionRef automatically */
      const header = sectionRef.current.querySelector('.text-center');
      const cards  = gsap.utils.toArray('.feat', sectionRef.current);

      /* ── Section header entrance ── */
      gsap.from(header, {
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: header,
          start: 'top 86%',
          toggleActions: 'play none none none',
        },
      });

      if (isMobile) {
        /* ── Mobile: staggered fade-up, no pin ── */
        gsap.set(cards, { opacity: 0, y: 28, scale: 0.96 });
        gsap.to(cards, {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.12,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current.querySelector('.features-grid'),
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        });
        return;
      }

      /* ── Desktop: pinned scroll timeline ── */
      gsap.set(cards, {
        opacity: 0,
        x: (i) => i % 2 === 0 ? 90 : -90,
        scale: 0.93,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: `+=${cards.length * 320 + 300}`,
          pin: true,
          scrub: 1.5,
          anticipatePin: 1,
        },
      });

      cards.forEach((card, i) => {
        /* Slide card in from its side + tint background */
        tl.to(
          card,
          {
            opacity: 1,
            x: 0,
            scale: 1,
            backgroundColor: 'rgba(220,53,69,0.06)',
            borderColor: 'rgba(220,53,69,0.24)',
            boxShadow: '0 8px 32px rgba(220,53,69,0.14)',
            duration: 0.55,
            ease: 'power2.out',
          },
          i,
        );

        /* Dim the previously active card */
        if (i > 0) {
          tl.to(
            cards[i - 1],
            {
              opacity: 0.42,
              scale: 0.97,
              backgroundColor: 'rgba(248,249,250,1)',
              borderColor: 'rgba(233,236,239,1)',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              duration: 0.4,
            },
            i,
          );
        }
      });
    },
    { scope: sectionRef },
  );

  return (
    <section className="features" id="features" ref={sectionRef}>

      {/* Section header */}
      <div className="text-center">
        <div className="section-label">Platform Features</div>
        <h2 className="section-title">
          Everything You Need,<br /><span>Nothing You Don't</span>
        </h2>
        <p className="section-sub">
          BloodLink is designed to be powerful yet simple, focused entirely on
          connecting donors with patients as fast as possible.
        </p>
      </div>

      {/* Feature cards grid */}
      <div className="features-grid" role="list">
        {FEATURES.map(({ title, desc, icon }) => (
          <div className="feat" key={title} role="listitem">
            <div className="feat-icon">{icon}</div>
            <div className="feat-body">
              <h4>{title}</h4>
              <p>{desc}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

export default WhyItMatters;
