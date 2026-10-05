# 🌊 Mirissa Blue Whales & Turtle Snorkeling

A luxury, high-converting 4-page website for **Mirissa Blue Whales & Turtle Snorkeling**, based at **Mirissa Fisheries Harbour, Sri Lanka**.

Built with modern **HTML5, CSS3, JavaScript, Next.js, and React.js components**.

---

## 🌴 Business & Tour Offerings

1. **🐢 Turtle Point & Reef Snorkeling Tour** ($35 / person)
   - Encounter wild Green Sea Turtles & Hawksbills in crystal clear shallow lagoons.
   - Free 4K underwater GoPro photos & videos included.
   - Cressi sanitized masks, snorkels, fins & floatation jackets.

2. **🐋 Blue Whale & Dolphin Watching Safari** ($55 / person)
   - Daily morning departure into deep Southern Indian Ocean waters.
   - 95%+ Blue Whale sighting rate in season, plus spinner dolphins.
   - Hot Ceylon tea, breakfast snack box, and free 2nd trip guarantee if no whales sighted.

3. **🫧 PADI Scuba Diving & Reef Explorations** ($75 / person)
   - 2-tank boat dives for certified divers or Discover Scuba for beginners.
   - Sites: Parrot Rock, Coral Gardens, and Yala shipwreck.
   - PADI divemasters with strict 4:1 safety ratio.

4. **🎣 Deep Sea Big Game & Sport Fishing** ($90 / person)
   - Target Yellowfin Tuna, Mahi-Mahi, Sailfish, and Wahoo.
   - Shimano/Penn rods, sonar fishfinder, and catch BBQ preparation.

5. **🚤 Mirissa Coastal Boat Safari & Sunset Cruise** ($40 / person)
   - Scenic cruise past Coconut Tree Hill, Secret Beach cove, and Weligama Bay.
   - Tropical fruit platter, King Coconuts, and Bluetooth sound system.

---

## 📁 4-Page Structure

| Page | File | Key Features |
|------|------|--------------|
| **Home** | `index.html` | Hero ocean banner, quick booking bar, 5 featured tour cards, why choose us grid, live Mirissa weather ticker, guest reviews, and conservation pledge. |
| **Services** | `services.html` | In-depth breakdown of all 5 tours, itineraries, departure times, what's included/excluded, comparison matrix, and instant booking modal triggers. |
| **Gallery** | `gallery.html` | Categorized filter tabs (Snorkeling, Whales, Diving, Fishing, Boat Safari), interactive photo grid, and full-screen lightbox viewer. |
| **Contact** | `contact.html` | **Interactive Dynamic Price Estimator** (adults, kids discount, add-ons), 1-click WhatsApp booking generator, harbor location map & pier directions. |

---

## 🚀 How to Run the Website

### Option 1: Instant View (Zero Setup)
Simply open `index.html` in your browser (double-click on Windows or right-click > Open with Chrome/Edge). All styles, images, and interactive scripts run instantly without needing any build tools.

### Option 2: Local Python Server (Installed on your machine)
Open PowerShell in this folder and run:
```powershell
python -m http.server 3000
```
Then visit `http://localhost:3000` in your web browser.

### Option 3: Node.js & Next.js React Mode
When Node.js is installed:
```bash
npm install
npm run dev
```

---

## ⚙️ Customization Guide

- **Phone & WhatsApp Hotline**: Edit `WHATSAPP_NUMBER` and `BUSINESS_PHONE` in `js/booking.js`.
- **Tour Prices & Details**: Edit `TOURS_DATA` in `js/tours-data.js`.
- **Add-on Pricing**: Edit `BOOKING_ADDONS` in `js/tours-data.js`.
- **Colors & Ocean Theme**: Edit CSS variables in `css/style.css`.
