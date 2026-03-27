import React from 'react';

function CallToAction() {
  return (
    <section className="cta-section" id="cta">
      <div className="cta-inner reveal">

        <div className="section-label">Get Involved</div>

        <h2 className="section-title">
          Your Blood Could<br />Save a <span>Life Today</span>
        </h2>

        <p className="section-sub">
          Whether you're looking for a donor or want to become one,
          BloodLink makes it simple, fast, and completely free.
        </p>

        <div className="cta-btns">
          {/* Primary: join as donor */}
          <a href="become-donor.html" className="btn btn-primary btn-lg">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 2C12 2 5 10.5 5 15a7 7 0 0014 0C19 10.5 12 2 12 2z" />
            </svg>
            Join as Donor
          </a>

          {/* Secondary: find blood */}
          <a href="find-donor.html" className="btn btn-outline btn-lg">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            Find Blood Now
          </a>
        </div>

      </div>
    </section>
  );
}

export default CallToAction;
