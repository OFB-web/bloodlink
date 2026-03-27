import React from 'react';

import Navbar       from '../components/Navbar.jsx';
import HeroSection  from '../components/HeroSection.jsx';
import AboutSection from '../components/AboutSection.jsx';
import HowItWorks   from '../components/HowItWorks.jsx';
import WhyItMatters from '../components/WhyItMatters.jsx';
import TrustSafety  from '../components/TrustSafety.jsx';
import CallToAction from '../components/CallToAction.jsx';
import Footer       from '../components/Footer.jsx';

/**
 * LandingPage
 *
 * Composes all sections into the full landing page.
 * Each section is an independent, reusable component.
 *
 * Section order:
 *   1. Navbar       — fixed navigation with mobile drawer
 *   2. HeroSection  — headline, CTAs, interactive blood-type card
 *   3. AboutSection — problem/solution cards + animated bar chart
 *   4. HowItWorks   — 3-step process
 *   5. WhyItMatters — 6 platform feature cards
 *   6. TrustSafety  — animated impact stats + trust callouts
 *   7. CallToAction — full-width CTA banner
 *   8. Footer       — logo, tagline, attribution
 */
function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <HowItWorks />
        <WhyItMatters />
        <TrustSafety />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}

export default LandingPage;
