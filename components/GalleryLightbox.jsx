import React, { useState } from 'react';

export default function GalleryLightbox({ items }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredItems = activeCategory === 'all' 
    ? items 
    : items.filter(it => it.category === activeCategory);

  const openLightbox = (idx) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);

  const prevPhoto = () => {
    setLightboxIndex(prev => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const nextPhoto = () => {
    setLightboxIndex(prev => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  const currentItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <div>
      <nav className="gallery-filter-tabs" aria-label="Gallery category filters">
        <button className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`} onClick={() => setActiveCategory('all')}>All Encounters</button>
        <button className={`filter-btn ${activeCategory === 'snorkeling' ? 'active' : ''}`} onClick={() => setActiveCategory('snorkeling')}>🐢 Turtle Snorkeling</button>
        <button className={`filter-btn ${activeCategory === 'whale' ? 'active' : ''}`} onClick={() => setActiveCategory('whale')}>🐋 Blue Whales</button>
        <button className={`filter-btn ${activeCategory === 'scuba' ? 'active' : ''}`} onClick={() => setActiveCategory('scuba')}>🫧 Scuba Diving</button>
        <button className={`filter-btn ${activeCategory === 'fishing' ? 'active' : ''}`} onClick={() => setActiveCategory('fishing')}>🎣 Sport Fishing</button>
        <button className={`filter-btn ${activeCategory === 'safari' ? 'active' : ''}`} onClick={() => setActiveCategory('safari')}>🚤 Boat Safari</button>
      </nav>

      <div className="gallery-grid">
        {filteredItems.map((item, idx) => (
          <div key={item.id} className="gallery-item" onClick={() => openLightbox(idx)}>
            <img src={item.image} alt={item.title} loading="lazy" />
            <div className="gallery-overlay">
              <div className="gallery-zoom-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                </svg>
              </div>
              <h4 className="gallery-caption-title">{item.title}</h4>
              <div className="gallery-caption-sub">
                📍 {item.location} • {item.depth}
              </div>
            </div>
          </div>
        ))}
      </div>

      {currentItem && (
        <div className="lightbox-modal active" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Close Lightbox">
              <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2.5" fill="none">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <button className="lightbox-nav lightbox-prev" onClick={prevPhoto} aria-label="Previous Photo">
              <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <img src={currentItem.image} alt={currentItem.title} className="lightbox-img" />
            <button className="lightbox-nav lightbox-next" onClick={nextPhoto} aria-label="Next Photo">
              <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
            <div className="lightbox-caption">
              <strong>{currentItem.title}</strong>
              <p style={{ fontSize: '0.85rem', color: '#22d3ee', marginTop: '0.25rem' }}>
                📍 {currentItem.location} • 🌊 {currentItem.depth}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
