import React from 'react';
import { useBarChart } from '../hooks/useBarChart.js';

const BARS = [
  { label: 'Search Speed', width: 95,  count: 95,  suffix: '%'     },
  { label: 'Mobile Ready', width: 100, count: 100, suffix: '%'     },
  { label: 'Free to Use',  width: 100, count: 100, suffix: '%', green: true },
  { label: 'Blood Types',  width: 100, count: 8,   suffix: ' types'},
];

const HIGHLIGHTS = [
  'BloodLink creates a centralised digital registry where voluntary donors can register and be found instantly by blood group and location.',
  'The platform is fully accessible on mobile and desktop — reaching donors and patients wherever they are.',
  'Built with modern web technologies, the system is fast, simple, and designed for people with varying levels of digital literacy.',
];

function AboutSection() {
  const chartRef = useBarChart();

  return (
    <section className="about" id="about">
      <div className="about-grid">

        {/* ── Left: cards + animated bar chart ── */}
        <div className="about-graphic reveal">

          {/* Problem card */}
          <div className="about-card">
            <div className="card-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2C12 2 5 10.5 5 15a7 7 0 0014 0C19 10.5 12 2 12 2z" />
              </svg>
            </div>
            <h4>Blood Shortage Crisis</h4>
            <p>
              Hospitals across The Gambia face critical shortages during
              emergencies, surgeries, and treatments.
            </p>
          </div>

          {/* Solution card */}
          <div className="about-card">
            <div className="card-icon" style={{ background: 'var(--success)' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h4>Digital Solution</h4>
            <p>
              BloodLink bridges the gap — a centralised platform connecting
              willing donors with those in need.
            </p>
          </div>

          {/* Animated bar chart */}
          <div className="about-stats-chart" ref={chartRef}>
            <div className="chart-title">Platform at a Glance</div>
            {BARS.map(({ label, width, count, suffix, green }) => (
              <div className="bar-row" key={label}>
                <div className="bar-label">{label}</div>
                <div className="bar-track">
                  <div
                    className={`bar-fill${green ? ' green' : ''}`}
                    data-bar-width={width}
                    style={{ width: 0 }}
                  />
                </div>
                <div
                  className={`bar-val${green ? ' green' : ''}`}
                  data-count={count}
                  data-suffix={suffix}
                >
                  0{suffix}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: text content ── */}
        <div className="about-text reveal">
          <div className="section-label">About BloodLink</div>
          <h2 className="section-title">
            A Platform Built<br />to <span>Save Lives</span>
          </h2>
          <p className="section-sub">
            Hospitals and patients in The Gambia often struggle to quickly locate
            blood donors during emergencies. Phone calls, personal networks, and
            family outreach are slow — and in emergencies, every minute counts.
          </p>

          <div className="about-highlights">
            {HIGHLIGHTS.map((text, i) => (
              <div className="highlight" key={i}>
                <div className="hl-dot" aria-hidden="true" />
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutSection;
