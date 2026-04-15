import React, { useState } from 'react';

const BLOOD_TYPES = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];

const STATS = [
  { num: '8+',   label: 'Blood Types'      },
  { num: '24/7', label: 'Always Available' },
  { num: 'Free', label: 'No Cost Ever'     },
];

function HeroSection() {
  const [activeBlood, setActiveBlood] = useState('A+');

  return (
    <section className="hero" id="home">

      {/* ── Left: copy + CTAs + stats ── */}
      <div className="hero-content">
        <div className="hero-badge">
          <div className="pulse" aria-hidden="true" />
          Live in The Gambia
        </div>

        <h1>
          Connecting Blood Donors<br />
          with Patients Who<br />
          <span>Need Them.</span>
        </h1>

        <p>
          BloodLink is a digital platform that helps people quickly find compatible
          blood donors during emergencies across The Gambia, saving time and saving lives.
        </p>

        <div className="hero-btns">
          <a href="#how" className="btn btn-primary btn-lg">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 8 12 12 14 14" />
            </svg>
            See How It Works
          </a>
          <a href="#roles" className="btn btn-outline btn-lg">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              aria-hidden="true">
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
            </svg>
            Explore Roles
          </a>
        </div>

        <div className="hero-stats" role="list">
          {STATS.map(({ num, label }) => (
            <div className="stat" key={label} role="listitem">
              <span className="stat-num">{num}</span>
              <span className="stat-label">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Right: visual card ── */}
      <div className="hero-visual" aria-hidden="true">
        <div className="hero-card">
          <div className="float-badge">The Gambia</div>

          <div className="big-drop">
            <svg viewBox="0 0 24 24">
              <path d="M12 2C12 2 5 10.5 5 15a7 7 0 0014 0C19 10.5 12 2 12 2z" />
            </svg>
          </div>

          <h3>Find a Donor Now</h3>
          <p>Search registered donors by blood group</p>

          {/* Interactive blood-type grid */}
          <div className="blood-types" role="group" aria-label="Blood type selector">
            {BLOOD_TYPES.map((bt) => (
              <button
                key={bt}
                className={`bt${activeBlood === bt ? ' active' : ''}`}
                onClick={() => setActiveBlood(bt)}
                aria-pressed={activeBlood === bt}
              >
                {bt}
              </button>
            ))}
          </div>

          {/* Sample donor pill */}
          <div className="donor-pill">
            <div className="donor-avatar">AK</div>
            <div className="donor-info">
              <strong>Amie Konteh &middot; O+</strong>
              <span>Banjul, The Gambia</span>
            </div>
            <span className="avail">&#9679; Available</span>
          </div>
        </div>
      </div>

    </section>
  );
}

export default HeroSection;
