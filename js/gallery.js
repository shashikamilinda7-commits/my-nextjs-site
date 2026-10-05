/**
 * MIRISSA BLUE WHALES & TURTLE SNORKELING
 * Interactive Categorized Gallery & Lightbox Viewer
 * Location: Mirissa, Sri Lanka
 */

let currentImageIndex = 0;
let filteredGalleryItems = [...GALLERY_ITEMS];

document.addEventListener('DOMContentLoaded', () => {
  initGallery();
});

function initGallery() {
  const galleryGrid = document.getElementById('galleryGrid');
  const filterButtons = document.querySelectorAll('.filter-btn');

  if (!galleryGrid) return;

  // Render items based on active category
  function renderGallery(category = 'all') {
    if (category === 'all') {
      filteredGalleryItems = [...GALLERY_ITEMS];
    } else {
      filteredGalleryItems = GALLERY_ITEMS.filter(item => item.category === category);
    }

    galleryGrid.innerHTML = '';

    filteredGalleryItems.forEach((item, index) => {
      const card = document.createElement('div');
      card.className = 'gallery-item';
      card.setAttribute('data-category', item.category);
      card.innerHTML = `
        <img src="${item.image}" alt="${item.title}" loading="lazy">
        <div class="gallery-overlay">
          <div class="gallery-zoom-icon">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none">
              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
            </svg>
          </div>
          <h4 class="gallery-caption-title">${item.title}</h4>
          <div class="gallery-caption-sub">
            <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            ${item.location} • ${item.depth}
          </div>
        </div>
      `;

      card.addEventListener('click', () => {
        openLightbox(index);
      });

      galleryGrid.appendChild(card);
    });
  }

  // Filter click handlers
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');
      renderGallery(cat);
    });
  });

  // Initial load
  renderGallery('all');

  // Setup lightbox
  setupLightbox();
}

function setupLightbox() {
  let lightbox = document.getElementById('lightboxModal');
  if (!lightbox) {
    lightbox = document.createElement('div');
    lightbox.id = 'lightboxModal';
    lightbox.className = 'lightbox-modal';
    lightbox.innerHTML = `
      <div class="lightbox-content">
        <button class="lightbox-close" id="lightboxClose" aria-label="Close Lightbox">
          <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" fill="none">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <button class="lightbox-nav lightbox-prev" id="lightboxPrev" aria-label="Previous Photo">
          <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <img src="" alt="" class="lightbox-img" id="lightboxImg">
        <button class="lightbox-nav lightbox-next" id="lightboxNext" aria-label="Next Photo">
          <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
        <div class="lightbox-caption" id="lightboxCaption"></div>
      </div>
    `;
    document.body.appendChild(lightbox);
  }

  const closeBtn = document.getElementById('lightboxClose');
  const prevBtn = document.getElementById('lightboxPrev');
  const nextBtn = document.getElementById('lightboxNext');

  closeBtn?.addEventListener('click', closeLightbox);
  prevBtn?.addEventListener('click', () => changeLightboxPhoto(-1));
  nextBtn?.addEventListener('click', () => changeLightboxPhoto(1));

  // Click outside to close
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') changeLightboxPhoto(-1);
    if (e.key === 'ArrowRight') changeLightboxPhoto(1);
  });
}

function openLightbox(index) {
  const lightbox = document.getElementById('lightboxModal');
  if (!lightbox || !filteredGalleryItems[index]) return;

  currentImageIndex = index;
  updateLightboxContent();
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lightbox = document.getElementById('lightboxModal');
  if (lightbox) {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function changeLightboxPhoto(direction) {
  currentImageIndex += direction;
  if (currentImageIndex < 0) {
    currentImageIndex = filteredGalleryItems.length - 1;
  } else if (currentImageIndex >= filteredGalleryItems.length) {
    currentImageIndex = 0;
  }
  updateLightboxContent();
}

function updateLightboxContent() {
  const imgEl = document.getElementById('lightboxImg');
  const capEl = document.getElementById('lightboxCaption');
  const item = filteredGalleryItems[currentImageIndex];

  if (!item || !imgEl || !capEl) return;

  imgEl.src = item.image;
  imgEl.alt = item.title;
  capEl.innerHTML = `
    <strong>${item.title}</strong>
    <p style="font-size: 0.85rem; color: #22d3ee; margin-top: 0.25rem;">
      📍 ${item.location} &nbsp;|&nbsp; 🌊 ${item.depth}
    </p>
  `;
}
