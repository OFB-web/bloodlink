import React from 'react';

function CallToAction() {
  return (
    <section className="cta-section" id="roles">
      <div className="cta-inner reveal">

        <div className="section-label">Your Role</div>

        <h2 className="section-title">
          Use BloodLink as a<br /><span>Donor or Seeker</span>
        </h2>

        <p className="section-sub">
          BloodLink supports two types of users. Whether you want to save
          lives by donating or find blood in an emergency, the app is built
          for you — completely free.
        </p>

        <div className="roles-grid">

          {/* ── Seeker ── */}
          <div className="role-card reveal">
            <div className="role-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                aria-hidden="true">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
            <h3>Blood Seeker</h3>
            <p>
              Facing a medical emergency? Search the donor registry by blood
              group, view compatible profiles, and contact a donor directly
              via call or WhatsApp — no middleman, no waiting.
            </p>
            <div className="role-badge">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                <line x1="12" y1="18" x2="12.01" y2="18" />
              </svg>
              Available in the BloodLink App
            </div>
          </div>

          {/* ── Donor ── */}
          <div className="role-card reveal">
            <div className="role-icon role-icon--donor">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                aria-hidden="true">
                <path d="M12 2C12 2 5 10.5 5 15a7 7 0 0014 0C19 10.5 12 2 12 2z" />
              </svg>
            </div>
            <h3>Blood Donor</h3>
            <p>
              Register your blood group, location, and contact details.
              Toggle your availability at any time so seekers can find you
              exactly when you are ready and willing to help.
            </p>
            <div className="role-badge">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                <line x1="12" y1="18" x2="12.01" y2="18" />
              </svg>
              Available in the BloodLink App
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default CallToAction;
