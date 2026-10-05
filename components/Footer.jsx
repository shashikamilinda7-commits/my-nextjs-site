import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <div className="brand-logo" style={{ marginBottom: '1rem' }}>
              <div className="brand-logo-icon">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 12c3.5-3 6.5 3 10 0s6.5 3 10 0"></path>
                  <path d="M2 17c3.5-3 6.5 3 10 0s6.5 3 10 0"></path>
                </svg>
              </div>
              <div className="brand-logo-text">
                <span className="brand-logo-title">MIRISSA <span>BLUE WHALES</span></span>
                <span className="brand-logo-sub">& Turtle Snorkeling</span>
              </div>
            </div>
            <p>
              The official premier ocean tour agency based in Mirissa Harbor, Sri Lanka. Providing unforgettable eco-friendly encounters with Blue Whales, Sea Turtles, and vibrant marine life.
            </p>
          </div>

          <div>
            <h4 className="footer-title">Our Tours</h4>
            <ul className="footer-links">
              <li><a href="/services#turtle-snorkeling">Turtle Point Snorkeling</a></li>
              <li><a href="/services#whale-watching">Blue Whale Safari</a></li>
              <li><a href="/services#scuba-diving">PADI Scuba Diving</a></li>
              <li><a href="/services#deep-sea-fishing">Deep Sea Sport Fishing</a></li>
              <li><a href="/services#boat-safari">Coastal Boat Safari</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/services">All Services</a></li>
              <li><a href="/gallery">Photo & Video Gallery</a></li>
              <li><a href="/contact">Contact & Location</a></li>
              <li><a href="/contact#booking">Online Reservation</a></li>
            </ul>
          </div>

          <div className="footer-newsletter">
            <h4 className="footer-title">Location</h4>
            <p>Mirissa, Sri Lanka</p>
            <p>
              <strong>Hotline:</strong> +94 71 527 8310<br />
              <strong>WhatsApp:</strong> +94 71 527 8310
            </p>
          </div>
        </div>

        {/* TRUST & CERTIFICATION BADGES */}
        <div className="footer-badges">
          <div className="footer-badge-card">
            <div className="footer-badge-icon">
              <svg viewBox="0 0 40 40" width="36" height="36" fill="none">
                <circle cx="20" cy="20" r="19" fill="#00AA6C" />
                <circle cx="13" cy="21" r="5.5" fill="#FFFFFF" />
                <circle cx="27" cy="21" r="5.5" fill="#FFFFFF" />
                <circle cx="13" cy="21" r="2.5" fill="#000000" />
                <circle cx="27" cy="21" r="2.5" fill="#000000" />
                <polygon points="20,20 18,25 22,25" fill="#FF5B00" />
                <path d="M9 14c3-3 7-3 11 0c4-3 8-3 11 0" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
            <div className="footer-badge-info">
              <strong>Tripadvisor</strong>
              <span>Recommended Marine Tours</span>
            </div>
          </div>

          <div className="footer-badge-card">
            <div className="footer-badge-icon">
              <svg viewBox="0 0 40 40" width="36" height="36" fill="none">
                <circle cx="20" cy="20" r="19" fill="#004F9F" />
                <ellipse cx="20" cy="20" rx="14" ry="14" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.4" />
                <ellipse cx="20" cy="20" rx="7" ry="14" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.4" />
                <line x1="6" y1="20" x2="34" y2="20" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.4" />
                <path d="M14 27 L18 13 L22 13 L26 27 Z" fill="#E31837" />
                <circle cx="20" cy="11" r="2.5" fill="#E31837" />
                <rect x="8" y="27" width="24" height="7" rx="2" fill="#E31837" />
                <text x="20" y="32.5" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="6" fill="#FFFFFF" textAnchor="middle" letterSpacing="1">PADI</text>
              </svg>
            </div>
            <div className="footer-badge-info">
              <strong>PADI Certified</strong>
              <span>Professional Dive Masters</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">
            &copy; 2026 Mirissa Blue Whales &amp; Turtle Snorkeling. All rights reserved.
          </div>
          <div className="footer-powered">
            Powered by <a href="https://technestcomputers.com/" target="_blank" rel="noopener noreferrer">Tech Nest Computers</a>
          </div>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms &amp; Cancellation</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
