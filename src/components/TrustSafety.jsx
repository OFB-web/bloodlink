import React from 'react';
import { useCountUp } from '../hooks/useCountUp.js';

/* ── Single impact stat card ── */
function ImpactCard({ target, suffix, title, desc, icon }) {
  const numRef = useCountUp(target, suffix);

  return (
    <div className="impact-card reveal">
      <div className="impact-icon-wrap" aria-hidden="true">{icon}</div>
      <div className="impact-num" ref={numRef} aria-label={`${target}${suffix}`}>
        0{suffix}
      </div>
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  );
}

const IMPACT_ITEMS = [
  {
    target: 3,
    suffix: 'min',
    title: 'Faster Emergency Response',
    desc: 'Reducing blood-search time from hours to minutes so critical surgeries can proceed without delays.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8"
        strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="13 17 18 12 13 7" />
        <polyline points="6 17 11 12 6 7" />
      </svg>
    ),
  },
  {
    target: 100,
    suffix: '%',
    title: 'Free for All Users',
    desc: 'No registration fees, no hidden costs. Every citizen of The Gambia can access and benefit from BloodLink.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8"
        strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    target: 8,
    suffix: '+',
    title: 'Blood Types Covered',
    desc: 'All eight blood groups are searchable. No patient is left without a potential match in our registry.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8"
        strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
];

/* ── Trust callouts (below the impact stats) ── */
const TRUST_ITEMS = [
  {
    label: 'Verified Donor Profiles',
    desc: 'Every donor completes an eligibility check before being listed, keeping the directory accurate and safe.',
  },
  {
    label: 'Medical Awareness',
    desc: 'Donors are guided through health criteria before registration, ensuring only eligible donors are shown.',
  },
  {
    label: 'Privacy First',
    desc: 'Donor contact details are only visible to verified seekers, protecting privacy while enabling access.',
  },
];

function TrustSafety() {
  return (
    <section className="impact" id="impact">

      {/* Section header */}
      <div className="text-center">
        <div className="section-label">Community Impact</div>
        <h2 className="section-title">
          Technology That<br /><span>Changes Lives</span>
        </h2>
        <p className="section-sub">
          BloodLink has real, measurable potential to transform emergency blood access
          across The Gambia and beyond.
        </p>
      </div>

      {/* Animated stat cards */}
      <div className="impact-grid" role="list">
        {IMPACT_ITEMS.map((item) => (
          <ImpactCard key={item.title} {...item} />
        ))}
      </div>

      {/* Trust & Safety callouts */}
      <div className="trust-grid">
        {TRUST_ITEMS.map(({ label, desc }) => (
          <div className="trust-item reveal" key={label}>
            <div className="trust-check" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <div>
              <h5>{label}</h5>
              <p>{desc}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

export default TrustSafety;
