/**
 * MIRISSA BLUE WHALES & TURTLE SNORKELING
 * Global Main Application Script
 * Location: Mirissa, Sri Lanka
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileDrawer();
  initScrollTop();
  initFaqAccordion();
  initTourCards();
  initWeatherTicker();
  initQuickSearchBar();
  initHeroSlider();
});

/* Navbar sticky scroll effect */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

/* Mobile drawer menu */
function initMobileDrawer() {
  const mobileToggle = document.getElementById('mobileToggle');
  const drawer = document.getElementById('mobileDrawer');
  const overlay = document.getElementById('drawerOverlay');
  const closeBtn = document.getElementById('drawerClose');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  function openDrawer() {
    drawer?.classList.add('open');
    overlay?.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer?.classList.remove('open');
    overlay?.classList.remove('active');
    document.body.style.overflow = '';
  }

  mobileToggle?.addEventListener('click', openDrawer);
  closeBtn?.addEventListener('click', closeDrawer);
  overlay?.addEventListener('click', closeDrawer);
  drawerLinks.forEach(link => link.addEventListener('click', closeDrawer));
}

/* Scroll to top floating button */
function initScrollTop() {
  const scrollTopBtn = document.getElementById('floatTop');
  if (!scrollTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* FAQ Accordion Toggle */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn?.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      // Close all other items
      faqItems.forEach(i => i.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

/* Render Tour Cards dynamically if container exists */
function initTourCards() {
  const featuredContainer = document.getElementById('featuredToursGrid');
  if (featuredContainer && typeof TOURS_DATA !== 'undefined') {
    featuredContainer.innerHTML = '';
    
    TOURS_DATA.forEach(tour => {
      const card = document.createElement('div');
      card.className = 'tour-card';
      card.innerHTML = `
        <div class="tour-card-image">
          <img src="${tour.image}" alt="${tour.title}" loading="lazy">
          <div class="tour-badge-floating">
            <span class="badge badge-${tour.badgeType}">${tour.badge}</span>
          </div>
        </div>
        <div class="tour-card-content">
          <h3 class="tour-card-title">${tour.title}</h3>
          <p class="tour-card-desc">${tour.tagline}</p>
          <div class="tour-meta-row">
            <div class="tour-meta-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span>${tour.duration}</span>
            </div>
            <div class="tour-meta-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <span>${tour.groupSize}</span>
            </div>
          </div>
          <ul class="tour-features-list">
            ${tour.highlights.slice(0, 3).map(h => `
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>${h}</span>
              </li>
            `).join('')}
          </ul>
          <div class="tour-card-actions">
            <a href="services.html#${tour.id}" class="btn btn-secondary btn-sm">Full Details</a>
            <a href="contact.html?tour=${tour.id}#booking" class="btn btn-primary btn-sm">Book Tour</a>
          </div>
        </div>
      `;
      featuredContainer.appendChild(card);
    });
  }
}

/* Mirissa Marine Weather Conditions Live Ticker */
function initWeatherTicker() {
  const tempEl = document.getElementById('waterTemp');
  const visEl = document.getElementById('waterVis');
  const waveEl = document.getElementById('waveHeight');
  const whaleRateEl = document.getElementById('whaleRate');

  if (tempEl) tempEl.textContent = '28.5°C (Warm Tropical)';
  if (visEl) visEl.textContent = '22m+ (Crystal Clear)';
  if (waveEl) waveEl.textContent = '0.7m (Calm Swell)';
  if (whaleRateEl) whaleRateEl.textContent = '98% Sighting Index';
}

/* Quick Search / Availability Bar on Home Page */
function initQuickSearchBar() {
  const quickBtn = document.getElementById('quickCheckBtn');
  if (!quickBtn) return;

  quickBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const tourVal = document.getElementById('quickTourSelect')?.value || 'turtle-snorkeling';
    const dateVal = document.getElementById('quickDate')?.value || '';
    const guestsVal = document.getElementById('quickGuests')?.value || '2';

    let targetUrl = `contact.html?tour=${tourVal}`;
    if (dateVal) targetUrl += `&date=${encodeURIComponent(dateVal)}`;
    targetUrl += `&guests=${encodeURIComponent(guestsVal)}#booking`;

    window.location.href = targetUrl;
  });
}

/* Hero Section Background Slider */
function initHeroSlider() {
  const slider = document.getElementById('heroSlider');
  if (!slider) return;

  const slides = slider.querySelectorAll('.hero-slide');
  const dots = slider.querySelectorAll('.hero-dot');
  const prevBtn = slider.querySelector('.hero-prev');
  const nextBtn = slider.querySelector('.hero-next');

  if (!slides || slides.length === 0) return;

  let currentSlide = 0;
  let slideInterval = null;

  function showSlide(index) {
    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;
    currentSlide = index;

    slides.forEach((s, i) => {
      s.classList.toggle('active', i === currentSlide);
    });

    dots.forEach((d, i) => {
      d.classList.toggle('active', i === currentSlide);
    });
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  function startAutoPlay() {
    stopAutoPlay();
    slideInterval = setInterval(nextSlide, 5000);
  }

  function stopAutoPlay() {
    if (slideInterval) clearInterval(slideInterval);
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      startAutoPlay();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
      startAutoPlay();
    });
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showSlide(index);
      startAutoPlay();
    });
  });

  slider.addEventListener('mouseenter', stopAutoPlay);
  slider.addEventListener('mouseleave', startAutoPlay);

  // Initialize first slide and start rotation
  showSlide(0);
  startAutoPlay();
}
