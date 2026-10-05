import React, { useState, useEffect } from 'react';

export default function Navbar({ activePage = 'home' }) {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <a href="/" className="brand-logo">
            <div className="brand-logo-icon">
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M2 12c3.5-3 6.5 3 10 0s6.5 3 10 0"></path>
                <path d="M2 17c3.5-3 6.5 3 10 0s6.5 3 10 0"></path>
              </svg>
            </div>
            <div className="brand-logo-text">
              <span className="brand-logo-title">MIRISSA <span>BLUE WHALES</span></span>
              <span className="brand-logo-sub">& Turtle Snorkeling • Mirissa</span>
            </div>
          </a>

          <ul className="nav-menu">
            <li><a href="/" className={`nav-link ${activePage === 'home' ? 'active' : ''}`}>Home</a></li>
            <li><a href="/services" className={`nav-link ${activePage === 'services' ? 'active' : ''}`}>Services & Tours</a></li>
            <li><a href="/gallery" className={`nav-link ${activePage === 'gallery' ? 'active' : ''}`}>Gallery</a></li>
            <li><a href="/contact" className={`nav-link ${activePage === 'contact' ? 'active' : ''}`}>Contact & Book</a></li>
          </ul>

          <div className="nav-actions">
            <a href="/contact#booking" className="btn btn-primary btn-sm btn-header-hide">Book Adventure</a>
            <button className="mobile-toggle" onClick={() => setDrawerOpen(true)} aria-label="Open navigation menu">
              <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${drawerOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <span className="brand-logo-title">MIRISSA <span>OCEAN</span></span>
          <button className="drawer-close" onClick={() => setDrawerOpen(false)} aria-label="Close menu">
            <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <ul className="drawer-nav">
          <li><a href="/" className={`drawer-link ${activePage === 'home' ? 'active' : ''}`}>Home</a></li>
          <li><a href="/services" className={`drawer-link ${activePage === 'services' ? 'active' : ''}`}>Services & Tours</a></li>
          <li><a href="/gallery" className={`drawer-link ${activePage === 'gallery' ? 'active' : ''}`}>Photo Gallery</a></li>
          <li><a href="/contact" className={`drawer-link ${activePage === 'contact' ? 'active' : ''}`}>Contact & Bookings</a></li>
        </ul>
        <div className="drawer-footer">
          <a href="/contact#booking" className="btn btn-primary" style={{ width: '100%', marginBottom: '0.75rem' }}>Book a Tour Now</a>
          <a href="https://wa.me/94715278310" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{ width: '100%' }}>WhatsApp Chat</a>
        </div>
      </div>
      <div className={`drawer-overlay ${drawerOpen ? 'active' : ''}`} onClick={() => setDrawerOpen(false)}></div>
    </>
  );
}
