/**
 * MIRISSA BLUE WHALES & TURTLE SNORKELING
 * Interactive Booking & Real-time Price Estimator
 * Location: Mirissa, Sri Lanka
 */

// Business contact details
const BUSINESS_PHONE = "+94715278310"; // Mirissa Office Hotline (+94 71 527 8310)
const WHATSAPP_NUMBER = "94715278310"; // Format for WhatsApp link

document.addEventListener('DOMContentLoaded', () => {
  initBookingEstimator();
  initBookingModal();
});

function initBookingEstimator() {
  const form = document.getElementById('tourBookingForm');
  if (!form) return;

  const tourSelect = document.getElementById('bookTour');
  const adultsInput = document.getElementById('bookAdults');
  const kidsInput = document.getElementById('bookKids');
  const bookingSummaryText = document.getElementById('bookingSummaryText');
  const addonCheckboxes = document.querySelectorAll('.addon-checkbox');

  function updateSummary() {
    const selectedTourId = tourSelect ? tourSelect.value : (TOURS_DATA[0] ? TOURS_DATA[0].id : '');
    const tour = TOURS_DATA.find(t => t.id === selectedTourId) || TOURS_DATA[0];
    
    let adults = parseInt(adultsInput ? adultsInput.value : 1, 10);
    if (isNaN(adults) || adults < 1) adults = 1;

    let kids = parseInt(kidsInput ? kidsInput.value : 0, 10);
    if (isNaN(kids) || kids < 0) kids = 0;

    if (bookingSummaryText && tour) {
      bookingSummaryText.textContent = `${tour.title} • ${adults} Adult(s)${kids > 0 ? `, ${kids} Child(ren)` : ''}`;
    }

    return { tour, adults, kids };
  }

  // Event listeners
  if (tourSelect) tourSelect.addEventListener('change', updateSummary);
  if (adultsInput) adultsInput.addEventListener('input', updateSummary);
  if (kidsInput) kidsInput.addEventListener('input', updateSummary);
  addonCheckboxes.forEach(cb => cb.addEventListener('change', updateSummary));

  // Initial update
  updateSummary();

  // Form submit handler - connects to WhatsApp
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('bookName')?.value.trim() || 'Valued Guest';
    const email = document.getElementById('bookEmail')?.value.trim() || 'Not specified';
    const phone = document.getElementById('bookPhone')?.value.trim() || 'Not specified';
    const date = document.getElementById('bookDate')?.value || 'Upcoming Date';
    const timeSlot = document.getElementById('bookTimeSlot')?.value || 'Morning Slot';
    const notes = document.getElementById('bookNotes')?.value.trim() || 'None';

    const summary = updateSummary();

    // Collect selected addons
    const selectedAddons = [];
    addonCheckboxes.forEach(cb => {
      if (cb.checked) {
        selectedAddons.push(cb.getAttribute('data-name'));
      }
    });

    const addonsText = selectedAddons.length > 0 ? selectedAddons.join(', ') : 'None';

    // Format WhatsApp message without any prices
    const message = 
`🌊 *NEW TOUR RESERVATION INQUIRY - MIRISSA BLUE WHALES & TURTLE SNORKELING* 🐢

*Guest Name:* ${name}
*Contact Phone/WhatsApp:* ${phone}
*Email:* ${email}

*Tour Selected:* ${summary.tour.title}
*Date of Tour:* ${date}
*Preferred Time:* ${timeSlot}
*Guests:* ${summary.adults} Adult(s), ${summary.kids} Child(ren)
*Add-ons:* ${addonsText}
*Special Requests:* ${notes}

📍 *Location:* Mirissa, Sri Lanka.
Please confirm tour availability and your best rates!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Show nice confirmation modal
    showBookingConfirmationModal(name, summary.tour.title, date, whatsappUrl);
  });
}

function showBookingConfirmationModal(name, tourTitle, date, whatsappUrl) {
  let modal = document.getElementById('bookingConfirmModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'bookingConfirmModal';
    modal.className = 'lightbox-modal';
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="booking-card" style="max-width: 520px; text-align: center; border-color: rgba(6, 182, 212, 0.4); box-shadow: 0 25px 60px rgba(0,0,0,0.8);">
      <div style="width: 64px; height: 64px; border-radius: 50%; background: rgba(16, 185, 129, 0.2); border: 2px solid #10b981; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem; color: #10b981;">
        <svg viewBox="0 0 24 24" width="36" height="36" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <h3 style="font-size: 1.6rem; margin-bottom: 0.5rem; color: #ffffff;">Booking Request Ready!</h3>
      <p style="color: #94a3b8; font-size: 0.95rem; margin-bottom: 1.5rem;">
        Thank you, <strong>${name}</strong>. Your tour inquiry for <strong>${tourTitle}</strong> on <strong>${date}</strong> is configured.
      </p>
      <div style="background: rgba(3, 13, 26, 0.6); padding: 1rem; border-radius: 12px; margin-bottom: 1.75rem; text-align: left; font-size: 0.88rem; color: #cbd5e1; border: 1px solid rgba(255,255,255,0.08);">
        <p>⚡ <strong>Instant Confirmation via WhatsApp:</strong> Click below to connect with our Mirissa captains on WhatsApp with zero advance deposit required!</p>
      </div>
      <div style="display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap;">
        <a href="${whatsappUrl}" target="_blank" class="btn btn-whatsapp btn-lg" style="flex: 1; min-width: 200px;">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
          Chat on WhatsApp
        </a>
        <button type="button" class="btn btn-secondary" onclick="document.getElementById('bookingConfirmModal').classList.remove('active')">
          Close Window
        </button>
      </div>
    </div>
  `;

  modal.classList.add('active');
}

function initBookingModal() {
  // Global trigger for buttons with data-book-tour
  document.querySelectorAll('[data-book-tour]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const tourId = btn.getAttribute('data-book-tour');
      
      // If we are on contact page, scroll and set tour
      const tourSelect = document.getElementById('bookTour');
      if (tourSelect) {
        tourSelect.value = tourId;
        tourSelect.dispatchEvent(new Event('change'));
        document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
      } else {
        // If on another page, redirect to contact.html with tour query
        window.location.href = `contact.html?tour=${tourId}#booking`;
      }
    });
  });

  // Check URL query on page load
  const urlParams = new URLSearchParams(window.location.search);
  const selectedTourQuery = urlParams.get('tour');
  if (selectedTourQuery) {
    const tourSelect = document.getElementById('bookTour');
    if (tourSelect) {
      tourSelect.value = selectedTourQuery;
      tourSelect.dispatchEvent(new Event('change'));
    }
  }
}
