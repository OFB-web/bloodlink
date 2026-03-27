import React from 'react';

const STEPS = [
  {
    num: 1,
    title: 'Register as a Donor or Seeker',
    desc: 'Create a free profile in minutes. Donors provide their blood group, location, and contact details. Seekers describe what they need.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.8"
        strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    num: 2,
    title: 'Search or Get Matched',
    desc: 'Filter the donor directory by blood type and location. BloodLink surfaces the most compatible and available donors near you instantly.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.8"
        strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    num: 3,
    title: 'Connect Instantly & Save Lives',
    desc: 'Contact the donor directly via call or WhatsApp. No middleman, no delays. Every connection made through BloodLink is a potential life saved.',
    icon: (
      <svg viewBox="0 0 24 24" fill="var(--primary)" stroke="var(--primary)"
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
  },
];

function HowItWorks() {
  return (
    <section className="how" id="how">

      {/* Section header */}
      <div className="text-center">
        <div className="section-label">How It Works</div>
        <h2 className="section-title">Three Simple <span>Steps</span></h2>
        <p className="section-sub">
          BloodLink makes finding or registering as a blood donor straightforward and fast —
          designed for anyone, anywhere in The Gambia.
        </p>
      </div>

      {/* Steps */}
      <div className="steps" role="list">
        {STEPS.map(({ num, title, desc, icon }) => (
          <div className="step reveal" key={num} role="listitem">
            <div className="step-num" aria-hidden="true">{num}</div>
            <div className="step-icon">{icon}</div>
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        ))}
      </div>

    </section>
  );
}

export default HowItWorks;
