import React from 'react';

function Footer() {
  return (
    <footer>
      {/* Logo */}
      <div className="footer-logo">
        <div className="drop" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M12 2C12 2 5 10.5 5 15a7 7 0 0014 0C19 10.5 12 2 12 2z" />
          </svg>
        </div>
        BloodLink
      </div>

      <div className="footer-div" role="separator" />

      <p>
        <strong>"Connecting Lives Through Blood Donation."</strong><br />
        BloodLink Blood Donor Finder System<br />
        Developed by <strong>Joshua C. Achebe</strong> <br />
        Bachelor of Science in Computer Science &middot; University of The Gambia<br />
        &copy; {new Date().getFullYear()} BloodLink. All rights reserved. ❤️
      </p>
    </footer>
  );
}

export default Footer;
