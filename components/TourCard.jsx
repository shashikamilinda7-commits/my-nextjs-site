import React from 'react';

export default function TourCard({ tour }) {
  return (
    <div className="tour-card">
      <div className="tour-card-image">
        <img src={tour.image} alt={tour.title} loading="lazy" />
        <div className="tour-badge-floating">
          <span className={`badge badge-${tour.badgeType}`}>{tour.badge}</span>
        </div>
      </div>
      <div className="tour-card-content">
        <h3 className="tour-card-title">{tour.title}</h3>
        <p className="tour-card-desc">{tour.tagline}</p>
        <div className="tour-meta-row">
          <div className="tour-meta-item">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span>{tour.duration}</span>
          </div>
          <div className="tour-meta-item">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
            </svg>
            <span>{tour.groupSize}</span>
          </div>
        </div>
        <ul className="tour-features-list">
          {tour.highlights.slice(0, 3).map((item, index) => (
            <li key={index}>
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="tour-card-actions">
          <a href={`/services#${tour.id}`} className="btn btn-secondary btn-sm">Full Details</a>
          <a href={`/contact?tour=${tour.id}#booking`} className="btn btn-primary btn-sm">Book Tour</a>
        </div>
      </div>
    </div>
  );
}
