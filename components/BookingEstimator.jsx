import React, { useState, useMemo } from 'react';

const TOURS = [
  { id: 'turtle-snorkeling', title: '🐢 Turtle Point Snorkeling' },
  { id: 'whale-watching', title: '🐋 Blue Whale & Dolphin Safari' },
  { id: 'scuba-diving', title: '🫧 PADI Scuba Diving' },
  { id: 'deep-sea-fishing', title: '🎣 Deep Sea Sport Fishing' },
  { id: 'boat-safari', title: '🚤 Coastal Boat Safari & Sunset' }
];

const ADDONS = [
  { id: 'pickup', name: 'Hotel Transfer (Tuk-Tuk/Van)', label: 'Hotel Pick & Drop (Mirissa / Weligama area)' },
  { id: 'drone', name: 'Drone 4K Aerial Video', label: 'Drone 4K Aerial Video & Coastal Shoot' },
  { id: 'private', name: 'Private Boat Charter Upgrade', label: 'Upgrade to 100% Private Boat Charter' },
  { id: 'bbq', name: 'Seafood Beach BBQ', label: 'Fresh Grilled Seafood Beach BBQ Lunch' }
];

export default function BookingEstimator({ initialTour = 'turtle-snorkeling' }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [tourId, setTourId] = useState(initialTour);
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('07:30 AM (Calm Sea Snorkeling)');
  const [adults, setAdults] = useState(2);
  const [kids, setKids] = useState(0);
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [notes, setNotes] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const selectedTour = useMemo(() => {
    return TOURS.find(t => t.id === tourId) || TOURS[0];
  }, [tourId]);

  const toggleAddon = (id) => {
    setSelectedAddons(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const whatsappMessage = useMemo(() => {
    const addonNames = selectedAddons.map(id => ADDONS.find(a => a.id === id)?.name).filter(Boolean);
    const msg = `🌊 *NEW TOUR RESERVATION INQUIRY - MIRISSA BLUE WHALES & TURTLE SNORKELING* 🐢

*Guest Name:* ${name || 'Valued Guest'}
*Contact Phone/WhatsApp:* ${phone || 'Not specified'}
*Email:* ${email || 'Not specified'}

*Tour Selected:* ${selectedTour.title}
*Date of Tour:* ${date || 'Upcoming Date'}
*Preferred Time:* ${timeSlot}
*Guests:* ${adults} Adult(s), ${kids} Child(ren)
*Add-ons:* ${addonNames.length ? addonNames.join(', ') : 'None'}
*Special Requests:* ${notes || 'None'}

📍 *Location:* Mirissa, Sri Lanka.
Please confirm tour availability and your best rates!`;

    return `https://wa.me/94715278310?text=${encodeURIComponent(msg)}`;
  }, [name, phone, email, selectedTour, date, timeSlot, adults, kids, selectedAddons, notes]);

  return (
    <>
      <div className="booking-card">
        <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem', color: '#ffffff' }}>Quick Reservation Form</h2>
        <p style={{ color: '#94a3b8', fontSize: '0.92rem', marginBottom: '2rem' }}>
          Select your tour and preferences for an instant reservation request.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Full Name <span className="required">*</span></label>
              <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} placeholder="e.g. Liam Taylor" required />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} placeholder="liam@example.com" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>WhatsApp / Phone <span className="required">*</span></label>
              <input type="tel" className="form-control" value={phone} onChange={e => setPhone(e.target.value)} placeholder="+44 7911 123456" required />
            </div>
            <div className="form-group">
              <label>Select Tour Experience <span className="required">*</span></label>
              <select className="form-control" value={tourId} onChange={e => setTourId(e.target.value)}>
                {TOURS.map(t => (
                  <option key={t.id} value={t.id}>{t.title}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Tour Date <span className="required">*</span></label>
              <input type="date" className="form-control" value={date} onChange={e => setDate(e.target.value)} required />
            </div>
            <div className="form-group">
              <label>Preferred Departure Slot</label>
              <select className="form-control" value={timeSlot} onChange={e => setTimeSlot(e.target.value)}>
                <option value="06:30 AM (Whale / Fishing Slot)">06:30 AM (Whale / Fishing Slot)</option>
                <option value="07:30 AM (Calm Sea Snorkeling)">07:30 AM (Calm Sea Snorkeling)</option>
                <option value="10:30 AM (Mid-Morning Session)">10:30 AM (Mid-Morning Session)</option>
                <option value="02:30 PM (Afternoon Session)">02:30 PM (Afternoon Session)</option>
                <option value="03:30 PM (Sunset Cruise Slot)">03:30 PM (Sunset Cruise Slot)</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Adults (Age 11+)</label>
              <input type="number" className="form-control" min="1" max="25" value={adults} onChange={e => setAdults(Number(e.target.value))} />
            </div>
            <div className="form-group">
              <label>Children (Age 4-10)</label>
              <input type="number" className="form-control" min="0" max="10" value={kids} onChange={e => setKids(Number(e.target.value))} />
            </div>
          </div>

          <div className="addons-group">
            <div className="addons-title">Enhance Your Experience (Optional Add-ons)</div>
            {ADDONS.map(addon => (
              <div key={addon.id} className="addon-item">
                <label className="addon-label">
                  <input 
                    type="checkbox" 
                    checked={selectedAddons.includes(addon.id)}
                    onChange={() => toggleAddon(addon.id)}
                  />
                  <span>{addon.label}</span>
                </label>
                <span className="addon-badge" style={{ fontSize: '0.78rem', color: 'var(--color-cyan)', background: 'rgba(6, 182, 212, 0.1)', padding: '0.2rem 0.6rem', borderRadius: '6px' }}>Available</span>
              </div>
            ))}
          </div>

          {/* Reservation Summary Box */}
          <div className="booking-summary-box">
            <div className="booking-summary-icon">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>
            <div className="booking-summary-info">
              <h4>Reservation Summary</h4>
              <p>{selectedTour.title} • {adults} Adult(s){kids > 0 ? `, ${kids} Child(ren)` : ''}</p>
            </div>
          </div>

          <div className="form-group">
            <label>Hotel Name or Special Requests</label>
            <textarea className="form-control" value={notes} onChange={e => setNotes(e.target.value)} placeholder="Mention your hotel name in Mirissa for pickup or specific preferences..."></textarea>
          </div>

          <button type="submit" className="btn btn-whatsapp btn-lg" style={{ width: '100%' }}>
            Confirm Reservation on WhatsApp
          </button>
          <p style={{ textAlign: 'center', fontSize: '0.8rem', color: '#94a3b8', marginTop: '0.75rem' }}>
            🔒 Instant confirmation • Pay upon arrival at Mirissa Harbor (Cash or Card accepted)
          </p>
        </form>
      </div>

      {isModalOpen && (
        <div className="lightbox-modal active" onClick={() => setIsModalOpen(false)}>
          <div className="booking-card" style={{ maxWidth: '520px', textAlign: 'center', borderColor: 'rgba(6, 182, 212, 0.4)', boxShadow: '0 25px 60px rgba(0,0,0,0.8)' }} onClick={e => e.stopPropagation()}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.2)', border: '2px solid #10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: '#10b981' }}>
              <svg viewBox="0 0 24 24" width="36" height="36" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h3 style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '0.5rem' }}>Booking Request Ready!</h3>
            <p style={{ color: '#94a3b8', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
              Thank you, <strong>{name || 'Valued Guest'}</strong>. Your tour inquiry for <strong>{selectedTour.title}</strong> on <strong>{date || 'Upcoming Date'}</strong> is configured.
            </p>
            <div style={{ background: 'rgba(3, 13, 26, 0.6)', padding: '1rem', borderRadius: '12px', marginBottom: '1.75rem', textAlign: 'left', fontSize: '0.88rem', color: '#cbd5e1', border: '1px solid rgba(255,255,255,0.08)' }}>
              <p>⚡ <strong>Instant Confirmation via WhatsApp:</strong> Click below to connect with our Mirissa captains on WhatsApp with zero advance deposit required!</p>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={whatsappMessage} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-lg" style={{ flex: 1, minWidth: '200px' }}>
                Chat on WhatsApp
              </a>
              <button type="button" className="btn btn-secondary" onClick={() => setIsModalOpen(false)}>
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
