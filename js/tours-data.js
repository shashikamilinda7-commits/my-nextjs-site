/**
 * MIRISSA BLUE WHALES & TURTLE SNORKELING
 * Tour Offerings and Structured Data
 * Location: Mirissa, Sri Lanka
 */

const TOURS_DATA = [
  {
    id: "turtle-snorkeling",
    title: "Mirissa Turtle Point & Reef Snorkeling",
    category: "snorkeling",
    badge: "Most Popular",
    badgeType: "turtle",
    tagline: "Swim with gentle giant Green Sea Turtles in crystal clear lagoons",
    duration: "2.5 Hours",
    departure: "07:30 AM / 10:30 AM / 02:30 PM",
    groupSize: "Max 8 Guests (or Private)",
    difficulty: "Easy (Beginners Welcome)",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
    overview: "Experience the magic of snorkeling alongside wild Green Sea Turtles and Hawksbill turtles at Mirissa's famous Turtle Point and sheltered coral reefs. Guided by experienced local snorkel masters with high-grade Cressi gear and floatation support.",
    highlights: [
      "99% Guaranteed encounters with wild Green Sea Turtles",
      "Vibrant coral gardens teeming with parrotfish & angelfish",
      "Complimentary 4K underwater GoPro photos & videos",
      "Floatation jackets & life rings provided for non-swimmers",
      "Fresh Sri Lankan King Coconut & tropical fruits after dive"
    ],
    inclusions: [
      "Professional English-speaking certified snorkel guide",
      "Premium sanitized mask, snorkel, and fins",
      "USCG approved lifejackets & floatation vests",
      "Digital underwater GoPro photography package",
      "Chilled bottled water, fresh seasonal fruits & King Coconut",
      "Shower & locker facility at Mirissa Harbor base"
    ],
    exclusions: [
      "Hotel pickup/drop outside Mirissa area (available as add-on)",
      "Gratuities (optional)"
    ]
  },
  {
    id: "whale-watching",
    title: "Blue Whale & Dolphin Watching Safari",
    category: "whale",
    badge: "World Famous",
    badgeType: "whale",
    tagline: "Witness the largest creature on Earth in the deep waters of Southern Sri Lanka",
    duration: "4 - 5 Hours",
    departure: "06:30 AM (Morning Cruise)",
    groupSize: "Spacious Observation Boat",
    difficulty: "All Ages Welcome",
    image: "https://images.unsplash.com/photo-1568430462989-44163eb1752f?auto=format&fit=crop&w=1200&q=80",
    overview: "Mirissa is globally recognized as one of the best locations on Earth to spot the majestic Blue Whale, Sperm Whales, Fin Whales, and hundreds of acrobatic Spinner Dolphins. Our custom marine safari vessel provides top safety standards, spacious observation decks, and respectful ethical distances.",
    highlights: [
      "Over 95% Blue Whale sighting success rate during peak season",
      "Playful pods of hundreds of Spinner & Bottlenose Dolphins",
      "Experienced marine naturalist sharing facts & biology",
      "Twin-engine high-stability vessel with toilet & shaded cabin",
      "Free Motion-sickness prevention tablets provided"
    ],
    inclusions: [
      "Harbor entrance permit & passenger insurance",
      "Hot Ceylon tea/coffee & breakfast snack pack on board",
      "Fresh watermelon, pineapple & chilled bottled water",
      "Certified marine naturalist and experienced local skipper",
      "Complimentary seasickness motion bands",
      "Free second trip guarantee if no whales or dolphins sighted!"
    ],
    exclusions: [
      "Personal souvenirs & hotel transfers outside Mirissa"
    ]
  },
  {
    id: "scuba-diving",
    title: "PADI Scuba Diving & Reef Explorations",
    category: "scuba",
    badge: "PADI Certified",
    badgeType: "turtle",
    tagline: "Explore underwater pinnacles, vibrant coral reefs, and historic wrecks",
    duration: "3.5 Hours (2 Dives)",
    departure: "08:00 AM & 01:00 PM",
    groupSize: "Small Groups (Max 4 per Divemaster)",
    difficulty: "Discover Scuba (Beginners) to Advanced",
    image: "images/IMG-20250122-WA0090.jpg",
    overview: "Dive into the warm Indian Ocean around Mirissa's premier dive sites, including Parrot Rock Reef, Mirissa Coral Garden, Bridge Rock, and the Yala shipwreck. With visibility up to 25 meters, encounter Moray Eels, Stingrays, Lionfish, and stunning soft corals.",
    highlights: [
      "Discover Scuba Diving available for complete beginners (no license needed)",
      "Two tank boat dives for certified PADI / SSI / CMAS divers",
      "Explore rock formations, swim-throughs & macro marine life",
      "Strict 4:1 diver-to-instructor safety ratio",
      "Full dive insurance and oxygen unit on board"
    ],
    inclusions: [
      "Full Scubapro equipment (BCD, regulator, wetsuit, mask, fins)",
      "Two filled 12L aluminum tanks & weight belt",
      "PADI certified Divemaster & dive briefings",
      "Dedicated dive boat transport to dive sites",
      "Logbook verification & stamp",
      "Drinking water & refreshments on boat"
    ],
    exclusions: [
      "Full PADI Open Water Certification Course card (available upon request)"
    ]
  },
  {
    id: "deep-sea-fishing",
    title: "Deep Sea Big Game & Sport Fishing",
    category: "fishing",
    badge: "Adrenaline Adventure",
    badgeType: "gold",
    tagline: "Trolling & jigging for Yellowfin Tuna, Mahi-Mahi, Sailfish & Kingfish",
    duration: "4 Hours",
    departure: "06:00 AM (Sunrise) or 02:00 PM",
    groupSize: "Private Charter (Up to 4 anglers)",
    difficulty: "All Skill Levels",
    image: "images/IMG-20250122-WA0094.jpg",
    overview: "Mirissa's deep ocean drop-off begins just a few miles off the coastline, making it prime hunting territory for pelagic game fish. Hop aboard our specialized fishing boat equipped with GPS fish finders, outriggers, Shimano and Penn reels for an unforgettable deep sea expedition.",
    highlights: [
      "Target Yellowfin Tuna, Wahoo, Mahi-Mahi, Barracuda, and Sailfish",
      "Top-tier trolling rods, spinning gear, live bait & lures",
      "Professional local skipper with generational oceanic knowledge",
      "Keep your fresh catch – we can arrange beach restaurant BBQ preparation!",
      "Catch and release options supported for billfish conservation"
    ],
    inclusions: [
      "Private boat charter with captain and deckhand",
      "All heavy-duty rods, reels, tackle, and live bait",
      "Sonar GPS Fishfinder navigation",
      "Cold drinks, ice box, beers (upon request) and sandwiches",
      "Cleaning and filleting of your catch"
    ],
    exclusions: [
      "Restaurant cooking fees for your catch"
    ]
  },
  {
    id: "boat-safari",
    title: "Mirissa Coastal Boat Safari & Sunset Cruise",
    category: "safari",
    badge: "Relaxing & Scenic",
    badgeType: "whale",
    tagline: "Cruise the dramatic southern coastline, secluded bays, and Coconut Tree Hill",
    duration: "2.5 Hours",
    departure: "09:00 AM / 03:30 PM (Golden Hour Sunset)",
    groupSize: "Up to 10 Guests",
    difficulty: "Easy & Relaxing",
    image: "images/IMG-20250122-WA0056.jpg",
    overview: "Sail along Mirissa's world-famous scenic coastline, viewing Coconut Tree Hill, secret lagoons, and secluded sandy beaches from the sea. Stop at calm bays for a swim, listen to island music on the onboard sound system, and watch the breathtaking southern sunset illuminate the Indian Ocean.",
    highlights: [
      "Spectacular ocean perspective of Coconut Tree Hill & Mirissa Point",
      "Swim stops in tranquil crystal blue lagoons with life jackets",
      "Stunning golden hour sunset over the horizon",
      "Bluetooth sound system on board for your favorite soundtrack",
      "Chilled tropical fruit platter and King Coconuts"
    ],
    inclusions: [
      "Custom safari boat cruise with shaded canopy & cushioned seats",
      "Captain and safety crew",
      "Snorkeling masks for lagoon swimming stops",
      "Fresh tropical fruit platter and cold bottled drinks",
      "Bluetooth audio system access"
    ],
    exclusions: [
      "Alcoholic beverages (guests welcome to bring their own)"
    ]
  }
];

// Add-ons configuration for booking reservation
const BOOKING_ADDONS = [
  { id: "pickup", name: "Hotel Return Tuk-Tuk / Van Transfer (Mirissa & Weligama)" },
  { id: "drone", name: "Drone Aerial 4K Video & Photography" },
  { id: "private", name: "Upgrade to 100% Private Boat Charter" },
  { id: "bbq", name: "Fresh Seafood Beachside BBQ Lunch" }
];

// Gallery Images Data
const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Trophy Sailfish Catch on Mirissa Outer Reef",
    category: "fishing",
    image: "images/IMG-20250122-WA0094.jpg",
    location: "Mirissa Deep Sea Drop-off",
    depth: "Trolling at 15 Knots"
  },
  {
    id: 2,
    title: "Green Sea Turtle Gliding Over Coral",
    category: "snorkeling",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80",
    location: "Mirissa Turtle Point",
    depth: "Depth: 2.5 meters"
  },
  {
    id: 3,
    title: "International Guests on Mirissa Beach with Safari Boat",
    category: "safari",
    image: "images/IMG-20250122-WA0056.jpg",
    location: "Mirissa Sandy Cove",
    depth: "Beach Departure Base"
  },
  {
    id: 4,
    title: "Magnificent Blue Whale Tail Fluke",
    category: "whale",
    image: "https://images.unsplash.com/photo-1568430462989-44163eb1752f?auto=format&fit=crop&w=1000&q=80",
    location: "Offshore Mirissa Deep Trench",
    depth: "Surface Encounter"
  },
  {
    id: 5,
    title: "Reef Trolling Harvest in Turquoise Shallows",
    category: "fishing",
    image: "images/IMG-20250122-WA0085.jpg",
    location: "Mirissa Coastal Reef",
    depth: "Fresh Bonito & Tuna Catch"
  },
  {
    id: 6,
    title: "Voyagers on Shaded Safari Boat Cruising Mirissa Waters",
    category: "safari",
    image: "images/IMG-20250122-WA0049.jpg",
    location: "Mirissa Coastal Waters",
    depth: "Shaded Boat Safari"
  },
  {
    id: 7,
    title: "Giant Sailfish Trophy with Happy Angler",
    category: "fishing",
    image: "images/IMG-20250122-WA0097.jpg",
    location: "Mirissa Tour Center",
    depth: "10-Foot Pelagic Billfish"
  },
  {
    id: 8,
    title: "Sunny Coastal Landing with Captain & Angler",
    category: "safari",
    image: "images/IMG-20250122-WA0039.jpg",
    location: "Mirissa Coral Bay",
    depth: "Scenic Coastal Stop"
  },
  {
    id: 9,
    title: "Wild Spinner Dolphin Pod Swimming Along Vessel",
    category: "whale",
    image: "images/IMG-20250122-WA0062.jpg",
    location: "Southern Indian Ocean",
    depth: "Surface Pod Encounter"
  },
  {
    id: 10,
    title: "Golden Beach Catch Celebration with Safari Boat",
    category: "fishing",
    image: "images/IMG-20250122-WA0044.jpg",
    location: "Mirissa Secret Beach Coast",
    depth: "Wahoo & Pelagic Harvest"
  },
  {
    id: 11,
    title: "PADI Diving Center Vessel & Giant Ray Encounter",
    category: "scuba",
    image: "images/IMG-20250122-WA0090.jpg",
    location: "Mirissa Diving Center Pier",
    depth: "Offshore Dive Exploration"
  },
  {
    id: 12,
    title: "Angler & Skipper Celebrating Fresh Catch on Board",
    category: "fishing",
    image: "images/IMG-20250122-WA0076.jpg",
    location: "Mirissa Deep Sea Canyon",
    depth: "Mid-Ocean Trolling Action"
  },
  {
    id: 13,
    title: "Mirissa Deep Fishing & Safari Boat on Sand",
    category: "safari",
    image: "images/IMG-20250122-WA0052.jpg",
    location: "Mirissa Beach Harbor",
    depth: "Custom Safari Fleet"
  },
  {
    id: 14,
    title: "Walking Through Crystal Surf at Shallow Coral Lagoon",
    category: "snorkeling",
    image: "images/IMG-20250122-WA0082.jpg",
    location: "Mirissa Coral Shallows",
    depth: "Shallow Reef Area"
  },
  {
    id: 15,
    title: "Family Big Game Fishing Expedition",
    category: "fishing",
    image: "images/IMG-20250122-WA0071.jpg",
    location: "Mirissa Operations Base",
    depth: "Family Friendly Charter"
  },
  {
    id: 16,
    title: "High-Adrenaline Reel Action on Boat",
    category: "fishing",
    image: "images/IMG-20250122-WA0063.jpg",
    location: "Mirissa Deep Blue Trench",
    depth: "Big Game Trolling Fight"
  },
  {
    id: 17,
    title: "Black Horse Safari Boat Crew & Happy Guests",
    category: "safari",
    image: "images/IMG-20250122-WA0095.jpg",
    location: "Mirissa Beach Shore",
    depth: "Coastal Expedition Base"
  },
  {
    id: 18,
    title: "PADI Diver Exploring Mirissa Coral Formations",
    category: "scuba",
    image: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=1000&q=80",
    location: "Parrot Rock Reef, Mirissa",
    depth: "Depth: 14 meters"
  }
];
