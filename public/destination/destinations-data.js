// World's Top 100 Bucket-List Destinations
// Used by /destination/index.html and /destination/?city=slug
window.DESTINATIONS = [
    // ═══ Asia Pacific ═══
    {
        slug: 'bali', name: 'Bali', country: 'Indonesia', emoji: '🇮🇩', flag: '🌴', region: 'Asia Pacific',
        tagline: 'Island of the Gods — temples, rice terraces & surf breaks',
        bestMonths: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        tags: ['Beach', 'Spiritual', 'Surf', 'Jungle'],
        lat: -8.4095, lon: 115.1889, ciiCountry: 'ID',
        bookingCity: 'bali', getyourguideCity: 'bali-indonesia', skyscannerCity: 'DPS',
        visaRequired: true, avgTempC: 28, rainySeason: 'Nov-Mar',
        heroGradient: 'linear-gradient(135deg,#1a4a20 0%,#0d2d1a 100%)',
        accentColor: '#22c55e', hotspots: ['Ubud', 'Seminyak', 'Uluwatu', 'Nusa Penida']
    },

    {
        slug: 'tokyo', name: 'Tokyo', country: 'Japan', emoji: '🇯🇵', flag: '🗼', region: 'Asia Pacific',
        tagline: 'Where ancient traditions meet neon-lit hyper-modernity',
        bestMonths: ['Mar', 'Apr', 'Oct', 'Nov'],
        tags: ['Culture', 'Food', 'Cherry Blossom', 'Anime'],
        lat: 35.6762, lon: 139.6503, ciiCountry: 'JP',
        bookingCity: 'tokyo', getyourguideCity: 'tokyo-japan', skyscannerCity: 'TYO',
        visaRequired: false, avgTempC: 15, rainySeason: 'Jun-Jul',
        heroGradient: 'linear-gradient(135deg,#1a0a2e 0%,#0d0d24 100%)',
        accentColor: '#e879f9', hotspots: ['Shibuya', 'Shinjuku', 'Asakusa', 'Harajuku']
    },

    {
        slug: 'kyoto', name: 'Kyoto', country: 'Japan', emoji: '🇯🇵', flag: '⛩️', region: 'Asia Pacific',
        tagline: 'Geisha districts, golden temples & the soul of old Japan',
        bestMonths: ['Mar', 'Apr', 'Nov'],
        tags: ['Culture', 'Temples', 'Cherry Blossom', 'Geisha'],
        lat: 35.0116, lon: 135.7681, ciiCountry: 'JP',
        bookingCity: 'kyoto', getyourguideCity: 'kyoto-japan', skyscannerCity: 'UKB',
        visaRequired: false, avgTempC: 16, rainySeason: 'Jun-Jul',
        heroGradient: 'linear-gradient(135deg,#2d0a1a 0%,#1a0612 100%)',
        accentColor: '#f472b6', hotspots: ['Arashiyama', 'Gion', 'Fushimi Inari', 'Nishiki Market']
    },

    {
        slug: 'maldives', name: 'Maldives', country: 'Maldives', emoji: '🇲🇻', flag: '🏝️', region: 'Asia Pacific',
        tagline: 'Overwater bungalows above crystal-clear turquoise lagoons',
        bestMonths: ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
        tags: ['Beach', 'Luxury', 'Snorkeling', 'Honeymoon'],
        lat: 3.2028, lon: 73.2207, ciiCountry: 'MV',
        bookingCity: 'maldives', getyourguideCity: 'maldives', skyscannerCity: 'MLE',
        visaRequired: false, avgTempC: 30, rainySeason: 'May-Oct',
        heroGradient: 'linear-gradient(135deg,#0a2a4a 0%,#062035 100%)',
        accentColor: '#38bdf8', hotspots: ['Malé', 'Maafushi', 'Hulhumalé', 'Vabbinfaru']
    },

    {
        slug: 'phuket', name: 'Phuket', country: 'Thailand', emoji: '🇹🇭', flag: '🐘', region: 'Asia Pacific',
        tagline: 'Emerald bays, limestone karsts & legendary street food',
        bestMonths: ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
        tags: ['Beach', 'Party', 'Islands', 'Food'],
        lat: 7.8804, lon: 98.3923, ciiCountry: 'TH',
        bookingCity: 'phuket', getyourguideCity: 'phuket-thailand', skyscannerCity: 'HKT',
        visaRequired: false, avgTempC: 29, rainySeason: 'May-Oct',
        heroGradient: 'linear-gradient(135deg,#1a2a0a 0%,#0d1a08 100%)',
        accentColor: '#84cc16', hotspots: ['Patong', 'Kata Beach', 'Old Town', 'Phi Phi Islands']
    },

    {
        slug: 'singapore', name: 'Singapore', country: 'Singapore', emoji: '🇸🇬', flag: '🦁', region: 'Asia Pacific',
        tagline: 'Futuristic gardens, Michelin street food & world-class shopping',
        bestMonths: ['Feb', 'Mar', 'Jul', 'Aug'],
        tags: ['Modern', 'Food', 'Shopping', 'Family'],
        lat: 1.3521, lon: 103.8198, ciiCountry: 'SG',
        bookingCity: 'singapore', getyourguideCity: 'singapore', skyscannerCity: 'SIN',
        visaRequired: false, avgTempC: 28, rainySeason: 'Nov-Jan',
        heroGradient: 'linear-gradient(135deg,#0a1a2a 0%,#050f18 100%)',
        accentColor: '#0ea5e9', hotspots: ['Marina Bay Sands', 'Gardens by the Bay', 'Sentosa', 'Chinatown']
    },

    {
        slug: 'hanoi', name: 'Hanoi', country: 'Vietnam', emoji: '🇻🇳', flag: '🍜', region: 'Asia Pacific',
        tagline: 'Ancient lakeside capital with French colonial charm & pho',
        bestMonths: ['Oct', 'Nov', 'Dec', 'Feb', 'Mar', 'Apr'],
        tags: ['History', 'Food', 'Culture', 'Cheap'],
        lat: 21.0278, lon: 105.8342, ciiCountry: 'VN',
        bookingCity: 'hanoi', getyourguideCity: 'hanoi-vietnam', skyscannerCity: 'HAN',
        visaRequired: true, avgTempC: 23, rainySeason: 'May-Sep',
        heroGradient: 'linear-gradient(135deg,#1a0a0a 0%,#120606 100%)',
        accentColor: '#ef4444', hotspots: ['Hoan Kiem Lake', 'Old Quarter', 'Ha Long Bay', 'Ninh Binh']
    },

    {
        slug: 'ha-long-bay', name: 'Ha Long Bay', country: 'Vietnam', emoji: '🇻🇳', flag: '⛵', region: 'Asia Pacific',
        tagline: '3,000 limestone karst islands rising from emerald waters',
        bestMonths: ['Mar', 'Apr', 'May', 'Oct', 'Nov'],
        tags: ['UNESCO', 'Nature', 'Cruise', 'Scenic'],
        lat: 20.9101, lon: 107.1839, ciiCountry: 'VN',
        bookingCity: 'ha-long', getyourguideCity: 'halong-bay-vietnam', skyscannerCity: 'HPH',
        visaRequired: true, avgTempC: 22, rainySeason: 'Jun-Sep',
        heroGradient: 'linear-gradient(135deg,#062020 0%,#031414 100%)',
        accentColor: '#2dd4bf', hotspots: ['Sung Sot Cave', 'Ti Top Island', 'Lan Ha Bay', 'Cat Ba Island']
    },

    {
        slug: 'angkor-wat', name: 'Angkor Wat', country: 'Cambodia', emoji: '🇰🇭', flag: '🏛️', region: 'Asia Pacific',
        tagline: "The world's largest religious monument, rising from jungle",
        bestMonths: ['Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
        tags: ['UNESCO', 'History', 'Architecture', 'Temples'],
        lat: 13.4125, lon: 103.8660, ciiCountry: 'KH',
        bookingCity: 'siem-reap', getyourguideCity: 'siem-reap-cambodia', skyscannerCity: 'REP',
        visaRequired: true, avgTempC: 30, rainySeason: 'May-Oct',
        heroGradient: 'linear-gradient(135deg,#1a1200 0%,#0d0900 100%)',
        accentColor: '#d97706', hotspots: ['Main Temple', 'Ta Prohm', 'Bayon', 'Phnom Bakheng']
    },

    {
        slug: 'sydney', name: 'Sydney', country: 'Australia', emoji: '🇦🇺', flag: '🦘', region: 'Asia Pacific',
        tagline: 'Opera House harbour city with world-class beaches at its doorstep',
        bestMonths: ['Sep', 'Oct', 'Nov', 'Mar', 'Apr'],
        tags: ['City', 'Beach', 'Adventure', 'Iconic'],
        lat: -33.8688, lon: 151.2093, ciiCountry: 'AU',
        bookingCity: 'sydney', getyourguideCity: 'sydney-australia', skyscannerCity: 'SYD',
        visaRequired: true, avgTempC: 18, rainySeason: 'Jun-Aug',
        heroGradient: 'linear-gradient(135deg,#0a1a2e 0%,#05101c 100%)',
        accentColor: '#6366f1', hotspots: ['Opera House', 'Bondi Beach', 'Harbour Bridge', 'Blue Mountains']
    },

    // ═══ Europe ═══
    {
        slug: 'paris', name: 'Paris', country: 'France', emoji: '🇫🇷', flag: '🗼', region: 'Europe',
        tagline: 'The city of light, love and the finest food on Earth',
        bestMonths: ['Apr', 'May', 'Sep', 'Oct'],
        tags: ['Romance', 'Art', 'Food', 'Fashion'],
        lat: 48.8566, lon: 2.3522, ciiCountry: 'FR',
        bookingCity: 'paris', getyourguideCity: 'paris-france', skyscannerCity: 'PAR',
        visaRequired: true, avgTempC: 12, rainySeason: 'Nov-Jan',
        heroGradient: 'linear-gradient(135deg,#0a0814 0%,#06050e 100%)',
        accentColor: '#a855f7', hotspots: ['Eiffel Tower', 'Louvre', 'Montmartre', 'Marais']
    },

    {
        slug: 'santorini', name: 'Santorini', country: 'Greece', emoji: '🇬🇷', flag: '🏺', region: 'Europe',
        tagline: 'Whitewashed cliffs, infinite sunsets & volcanic caldera views',
        bestMonths: ['May', 'Jun', 'Sep', 'Oct'],
        tags: ['Romance', 'Beach', 'Luxury', 'Iconic'],
        lat: 36.3932, lon: 25.4615, ciiCountry: 'GR',
        bookingCity: 'santorini', getyourguideCity: 'santorini-greece', skyscannerCity: 'JTR',
        visaRequired: true, avgTempC: 20, rainySeason: 'Nov-Mar',
        heroGradient: 'linear-gradient(135deg,#0a1a3a 0%,#060f22 100%)',
        accentColor: '#60a5fa', hotspots: ['Oia', 'Fira', 'Akrotiri', 'Red Beach']
    },

    {
        slug: 'rome', name: 'Rome', country: 'Italy', emoji: '🇮🇹', flag: '🏛️', region: 'Europe',
        tagline: 'Three millennia of history on every corner — the Eternal City',
        bestMonths: ['Apr', 'May', 'Sep', 'Oct'],
        tags: ['History', 'Food', 'Art', 'Architecture'],
        lat: 41.9028, lon: 12.4964, ciiCountry: 'IT',
        bookingCity: 'rome', getyourguideCity: 'rome-italy', skyscannerCity: 'ROM',
        visaRequired: true, avgTempC: 15, rainySeason: 'Nov-Feb',
        heroGradient: 'linear-gradient(135deg,#2a0e00 0%,#190800 100%)',
        accentColor: '#f59e0b', hotspots: ['Colosseum', 'Trevi Fountain', 'Vatican', 'Piazza Navona']
    },

    {
        slug: 'barcelona', name: 'Barcelona', country: 'Spain', emoji: '🇪🇸', flag: '🎨', region: 'Europe',
        tagline: "Gaudí's architecture, tapas, beaches and electrifying nightlife",
        bestMonths: ['May', 'Jun', 'Sep', 'Oct'],
        tags: ['Art', 'Beach', 'Food', 'Architecture'],
        lat: 41.3851, lon: 2.1734, ciiCountry: 'ES',
        bookingCity: 'barcelona', getyourguideCity: 'barcelona-spain', skyscannerCity: 'BCN',
        visaRequired: true, avgTempC: 17, rainySeason: 'Nov-Feb',
        heroGradient: 'linear-gradient(135deg,#1a0a1a 0%,#100612 100%)',
        accentColor: '#c084fc', hotspots: ['Sagrada Família', 'Park Güell', 'Gothic Quarter', 'La Barceloneta']
    },

    {
        slug: 'amsterdam', name: 'Amsterdam', country: 'Netherlands', emoji: '🇳🇱', flag: '🚲', region: 'Europe',
        tagline: 'Golden age canals, world-class museums and cycling culture',
        bestMonths: ['Apr', 'May', 'Sep'],
        tags: ['Canals', 'Art', 'Cycling', 'Culture'],
        lat: 52.3676, lon: 4.9041, ciiCountry: 'NL',
        bookingCity: 'amsterdam', getyourguideCity: 'amsterdam-netherlands', skyscannerCity: 'AMS',
        visaRequired: true, avgTempC: 10, rainySeason: 'Nov-Feb',
        heroGradient: 'linear-gradient(135deg,#0a1414 0%,#060d0d 100%)',
        accentColor: '#22d3ee', hotspots: ['Rijksmuseum', 'Anne Frank House', 'Jordaan', 'Vondelpark']
    },

    {
        slug: 'prague', name: 'Prague', country: 'Czech Republic', emoji: '🇨🇿', flag: '🏰', region: 'Europe',
        tagline: 'Fairy-tale medieval city with a million-light skyline & craft beer',
        bestMonths: ['May', 'Jun', 'Sep', 'Oct'],
        tags: ['History', 'Architecture', 'Beer', 'Nightlife'],
        lat: 50.0755, lon: 14.4378, ciiCountry: 'CZ',
        bookingCity: 'prague', getyourguideCity: 'prague-czech-republic', skyscannerCity: 'PRG',
        visaRequired: true, avgTempC: 10, rainySeason: 'Nov-Feb',
        heroGradient: 'linear-gradient(135deg,#1a0800 0%,#0d0500 100%)',
        accentColor: '#f59e0b', hotspots: ['Charles Bridge', 'Old Town Square', 'Prague Castle', 'Josefov']
    },

    {
        slug: 'lisbon', name: 'Lisbon', country: 'Portugal', emoji: '🇵🇹', flag: '🎵', region: 'Europe',
        tagline: "Europe's sunniest capital: trams, fado and Atlantic sea bass",
        bestMonths: ['Mar', 'Apr', 'May', 'Sep', 'Oct'],
        tags: ['Sunny', 'Food', 'Music', 'Affordable'],
        lat: 38.7169, lon: -9.1395, ciiCountry: 'PT',
        bookingCity: 'lisbon', getyourguideCity: 'lisbon-portugal', skyscannerCity: 'LIS',
        visaRequired: true, avgTempC: 17, rainySeason: 'Nov-Feb',
        heroGradient: 'linear-gradient(135deg,#1a1000 0%,#0d0900 100%)',
        accentColor: '#fbbf24', hotspots: ['Alfama', 'Belém Tower', 'Sintra', 'Bairro Alto']
    },

    {
        slug: 'iceland', name: 'Reykjavik', country: 'Iceland', emoji: '🇮🇸', flag: '🌌', region: 'Europe',
        tagline: 'Northern Lights, geysers, waterfalls & midnight sun',
        bestMonths: ['Jun', 'Jul', 'Aug', 'Dec', 'Jan', 'Feb'],
        tags: ['Northern Lights', 'Nature', 'Adventure', 'Unique'],
        lat: 64.1466, lon: -21.9426, ciiCountry: 'IS',
        bookingCity: 'reykjavik', getyourguideCity: 'reykjavik-iceland', skyscannerCity: 'REK',
        visaRequired: true, avgTempC: 4, rainySeason: 'Sep-Nov',
        heroGradient: 'linear-gradient(135deg,#000814 0%,#000510 100%)',
        accentColor: '#818cf8', hotspots: ['Blue Lagoon', 'Golden Circle', 'Jokulsarlon', 'Skogafoss']
    },

    {
        slug: 'dubrovnik', name: 'Dubrovnik', country: 'Croatia', emoji: '🇭🇷', flag: '🌊', region: 'Europe',
        tagline: 'Pearl of the Adriatic — medieval walls, crystal sea & Game of Thrones filming',
        bestMonths: ['May', 'Jun', 'Sep'],
        tags: ['Medieval', 'Beaches', 'Islands', 'Game of Thrones'],
        lat: 42.6507, lon: 18.0944, ciiCountry: 'HR',
        bookingCity: 'dubrovnik', getyourguideCity: 'dubrovnik-croatia', skyscannerCity: 'DBV',
        visaRequired: true, avgTempC: 18, rainySeason: 'Dec-Feb',
        heroGradient: 'linear-gradient(135deg,#0a1a3a 0%,#060f22 100%)',
        accentColor: '#38bdf8', hotspots: ['Old Town Walls', 'Lokrum Island', 'Cavtat', 'Mount Srd']
    },

    {
        slug: 'florence', name: 'Florence', country: 'Italy', emoji: '🇮🇹', flag: '🎨', region: 'Europe',
        tagline: 'The birthplace of the Renaissance: Michelangelo, da Vinci & Brunelleschi',
        bestMonths: ['Apr', 'May', 'Sep', 'Oct'],
        tags: ['Art', 'Renaissance', 'Wine', 'Architecture'],
        lat: 43.7696, lon: 11.2558, ciiCountry: 'IT',
        bookingCity: 'florence', getyourguideCity: 'florence-italy', skyscannerCity: 'FLR',
        visaRequired: true, avgTempC: 15, rainySeason: 'Nov-Feb',
        heroGradient: 'linear-gradient(135deg,#1a0a00 0%,#0d0600 100%)',
        accentColor: '#fb923c', hotspots: ['Uffizi Gallery', 'Duomo', 'Ponte Vecchio', 'Boboli Gardens']
    },

    {
        slug: 'amalfi', name: 'Amalfi Coast', country: 'Italy', emoji: '🇮🇹', flag: '🍋', region: 'Europe',
        tagline: 'Dramatic cliffside villages, lemon groves & cerulean sea',
        bestMonths: ['May', 'Jun', 'Sep'],
        tags: ['Scenic', 'Luxury', 'Coastal', 'Romantic'],
        lat: 40.6340, lon: 14.6027, ciiCountry: 'IT',
        bookingCity: 'amalfi', getyourguideCity: 'amalfi-coast-italy', skyscannerCity: 'NAP',
        visaRequired: true, avgTempC: 19, rainySeason: 'Nov-Feb',
        heroGradient: 'linear-gradient(135deg,#062020 0%,#031414 100%)',
        accentColor: '#4ade80', hotspots: ['Positano', 'Ravello', 'Pompeii', 'Capri']
    },

    {
        slug: 'oslo', name: 'Oslo', country: 'Norway', emoji: '🇳🇴', flag: '🌲', region: 'Europe',
        tagline: 'Viking heritage, fjords at the doorstep & world-leading sustainability',
        bestMonths: ['Jun', 'Jul', 'Aug', 'Dec'],
        tags: ['Fjords', 'Vikings', 'Nature', 'Design'],
        lat: 59.9139, lon: 10.7522, ciiCountry: 'NO',
        bookingCity: 'oslo', getyourguideCity: 'oslo-norway', skyscannerCity: 'OSL',
        visaRequired: true, avgTempC: 7, rainySeason: 'Oct-Dec',
        heroGradient: 'linear-gradient(135deg,#0a1a14 0%,#060f0c 100%)',
        accentColor: '#34d399', hotspots: ['Vigeland Park', 'Viking Ship Museum', 'Fjord Cruise', 'Opera House']
    },

    // ═══ Middle East & Africa ═══
    {
        slug: 'dubai', name: 'Dubai', country: 'UAE', emoji: '🇦🇪', flag: '🌇', region: 'Middle East',
        tagline: "World's tallest skyscrapers, luxury malls & sand dune adventures",
        bestMonths: ['Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
        tags: ['Luxury', 'Shopping', 'Futuristic', 'Desert'],
        lat: 25.2048, lon: 55.2708, ciiCountry: 'AE',
        bookingCity: 'dubai', getyourguideCity: 'dubai-emirates', skyscannerCity: 'DXB',
        visaRequired: true, avgTempC: 28, rainySeason: 'Dec-Mar (rare)',
        heroGradient: 'linear-gradient(135deg,#1a1000 0%,#0d0900 100%)',
        accentColor: '#fbbf24', hotspots: ['Burj Khalifa', 'Palm Jumeirah', 'Dubai Creek', 'Desert Safari']
    },

    {
        slug: 'morocco-marrakech', name: 'Marrakech', country: 'Morocco', emoji: '🇲🇦', flag: '🕌', region: 'Africa',
        tagline: 'Sensory overload: spice souks, mosques & Sahara gateway',
        bestMonths: ['Mar', 'Apr', 'Oct', 'Nov'],
        tags: ['Culture', 'Souks', 'Desert', 'Architecture'],
        lat: 31.6295, lon: -7.9811, ciiCountry: 'MA',
        bookingCity: 'marrakech', getyourguideCity: 'marrakech-morocco', skyscannerCity: 'RAK',
        visaRequired: false, avgTempC: 19, rainySeason: 'Nov-Feb',
        heroGradient: 'linear-gradient(135deg,#2a0800 0%,#190500 100%)',
        accentColor: '#f97316', hotspots: ['Jemaa el-Fna', 'Bahia Palace', 'Majorelle Garden', 'Sahara Tour']
    },

    {
        slug: 'cape-town', name: 'Cape Town', country: 'South Africa', emoji: '🇿🇦', flag: '🦁', region: 'Africa',
        tagline: 'Table Mountain, vinelands, penguins & world-class surfing',
        bestMonths: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
        tags: ['Nature', 'Scenic', 'Wine', 'Safari'],
        lat: -33.9249, lon: 18.4241, ciiCountry: 'ZA',
        bookingCity: 'cape-town', getyourguideCity: 'cape-town-south-africa', skyscannerCity: 'CPT',
        visaRequired: false, avgTempC: 18, rainySeason: 'Jun-Aug',
        heroGradient: 'linear-gradient(135deg,#0a1a14 0%,#060f0c 100%)',
        accentColor: '#34d399', hotspots: ['Table Mountain', 'Cape Point', 'Stellenbosch', 'Boulders Beach']
    },

    {
        slug: 'serengeti', name: 'Serengeti Safari', country: 'Tanzania', emoji: '🇹🇿', flag: '🦁', region: 'Africa',
        tagline: 'The Great Migration — 1.5 million wildebeest crossing the plains',
        bestMonths: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        tags: ['Safari', 'Wildlife', 'Nature', 'Adventure'],
        lat: -2.1540, lon: 34.6857, ciiCountry: 'TZ',
        bookingCity: 'arusha', getyourguideCity: 'serengeti-tanzania', skyscannerCity: 'JRO',
        visaRequired: true, avgTempC: 24, rainySeason: 'Nov-May',
        heroGradient: 'linear-gradient(135deg,#1a1000 0%,#0d0900 100%)',
        accentColor: '#f59e0b', hotspots: ['Serengeti NP', 'Ngorongoro', 'Zanzibar', 'Kilimanjaro']
    },

    {
        slug: 'cairo', name: 'Cairo & Pyramids', country: 'Egypt', emoji: '🇪🇬', flag: '🐪', region: 'Africa',
        tagline: 'The last surviving wonder of the ancient world, guarded by the Sphinx',
        bestMonths: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
        tags: ['Ancient', 'History', 'UNESCO', 'Iconic'],
        lat: 30.0444, lon: 31.2357, ciiCountry: 'EG',
        bookingCity: 'cairo', getyourguideCity: 'cairo-egypt', skyscannerCity: 'CAI',
        visaRequired: true, avgTempC: 22, rainySeason: 'Jan-Mar (rare)',
        heroGradient: 'linear-gradient(135deg,#1a1200 0%,#0d0d08 100%)',
        accentColor: '#d97706', hotspots: ['Pyramids of Giza', 'Egyptian Museum', 'Luxor', 'Aswan']
    },

    // ═══ Americas ═══
    {
        slug: 'new-york', name: 'New York City', country: 'USA', emoji: '🇺🇸', flag: '🗽', region: 'Americas',
        tagline: 'The city that never sleeps: Broadway, skyline & immigrant soul',
        bestMonths: ['Apr', 'May', 'Sep', 'Oct'],
        tags: ['City', 'Broadway', 'Food', 'Iconic'],
        lat: 40.7128, lon: -74.0060, ciiCountry: 'US',
        bookingCity: 'new-york', getyourguideCity: 'new-york-city', skyscannerCity: 'NYC',
        visaRequired: true, avgTempC: 13, rainySeason: 'Jul-Aug',
        heroGradient: 'linear-gradient(135deg,#0a0a1a 0%,#060610 100%)',
        accentColor: '#f59e0b', hotspots: ['Central Park', 'Times Square', 'Brooklyn Bridge', 'MoMA']
    },

    {
        slug: 'machu-picchu', name: 'Machu Picchu', country: 'Peru', emoji: '🇵🇪', flag: '🏔️', region: 'Americas',
        tagline: 'Lost Incan citadel hidden in Andean cloud forest',
        bestMonths: ['May', 'Jun', 'Jul', 'Aug', 'Sep'],
        tags: ['UNESCO', 'Hiking', 'Ancient', 'Bucket List #1'],
        lat: -13.1631, lon: -72.5450, ciiCountry: 'PE',
        bookingCity: 'cusco', getyourguideCity: 'machu-picchu-peru', skyscannerCity: 'CUZ',
        visaRequired: false, avgTempC: 13, rainySeason: 'Nov-Mar',
        heroGradient: 'linear-gradient(135deg,#0a1a0a 0%,#060f06 100%)',
        accentColor: '#22c55e', hotspots: ['Sun Gate', 'Inca Trail', 'Aguas Calientes', 'Rainbow Mountain']
    },

    {
        slug: 'patagonia', name: 'Patagonia', country: 'Argentina/Chile', emoji: '🇦🇷', flag: '🏔️', region: 'Americas',
        tagline: 'End of the Earth: glaciers, condors & jagged granite towers',
        bestMonths: ['Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
        tags: ['Adventure', 'Hiking', 'Nature', 'Epic'],
        lat: -50.7169, lon: -73.1255, ciiCountry: 'AR',
        bookingCity: 'punta-arenas', getyourguideCity: 'patagonia', skyscannerCity: 'PUQ',
        visaRequired: false, avgTempC: 8, rainySeason: 'May-Aug',
        heroGradient: 'linear-gradient(135deg,#0a0e1a 0%,#06080f 100%)',
        accentColor: '#60a5fa', hotspots: ['Torres del Paine', 'Perito Moreno Glacier', 'El Calafate', 'El Chaltén']
    },

    {
        slug: 'rio-de-janeiro', name: 'Rio de Janeiro', country: 'Brazil', emoji: '🇧🇷', flag: '🌴', region: 'Americas',
        tagline: 'Christ the Redeemer overlooking carnival beaches and samba',
        bestMonths: ['May', 'Jun', 'Sep', 'Oct'],
        tags: ['Carnival', 'Beach', 'Music', 'Iconic'],
        lat: -22.9068, lon: -43.1729, ciiCountry: 'BR',
        bookingCity: 'rio-de-janeiro', getyourguideCity: 'rio-de-janeiro-brazil', skyscannerCity: 'RIO',
        visaRequired: false, avgTempC: 25, rainySeason: 'Dec-Mar',
        heroGradient: 'linear-gradient(135deg,#0a1400 0%,#060d00 100%)',
        accentColor: '#84cc16', hotspots: ['Copacabana', 'Sugarloaf', 'Christ the Redeemer', 'Lapa']
    },

    {
        slug: 'cancun', name: 'Cancun & Tulum', country: 'Mexico', emoji: '🇲🇽', flag: '🌴', region: 'Americas',
        tagline: 'Turquoise Caribbean coast meets ancient Mayan ruins',
        bestMonths: ['Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
        tags: ['Beach', 'Ruins', 'Party', 'Cenotes'],
        lat: 20.9674, lon: -86.9230, ciiCountry: 'MX',
        bookingCity: 'cancun', getyourguideCity: 'cancun-mexico', skyscannerCity: 'CUN',
        visaRequired: false, avgTempC: 27, rainySeason: 'Jun-Oct',
        heroGradient: 'linear-gradient(135deg,#0a1a14 0%,#060f0c 100%)',
        accentColor: '#2dd4bf', hotspots: ['Tulum', 'Chichen Itza', 'Cenote Ik Kil', 'Isla Mujeres']
    },

    {
        slug: 'galapagos', name: 'Galápagos Islands', country: 'Ecuador', emoji: '🇪🇨', flag: '🐢', region: 'Americas',
        tagline: 'Darwin\'s living laboratory: giant tortoises, marine iguanas & rare birds',
        bestMonths: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        tags: ['Wildlife', 'Nature', 'Unique', 'Diving'],
        lat: -0.9538, lon: -90.9656, ciiCountry: 'EC',
        bookingCity: 'galapagos', getyourguideCity: 'galapagos-islands', skyscannerCity: 'GPS',
        visaRequired: false, avgTempC: 24, rainySeason: 'Jan-May',
        heroGradient: 'linear-gradient(135deg,#0a1a20 0%,#060f14 100%)',
        accentColor: '#34d399', hotspots: ['Santa Cruz', 'Isabela', 'Española', 'Seymour Norte']
    },

    {
        slug: 'havana', name: 'Havana', country: 'Cuba', emoji: '🇨🇺', flag: '🚗', region: 'Americas',
        tagline: 'Vintage Cadillacs, salsa rhythms & revolutionary architecture frozen in time',
        bestMonths: ['Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
        tags: ['Culture', 'Vintage', 'Music', 'Unique'],
        lat: 23.1136, lon: -82.3666, ciiCountry: 'CU',
        bookingCity: 'havana', getyourguideCity: 'havana-cuba', skyscannerCity: 'HAV',
        visaRequired: true, avgTempC: 25, rainySeason: 'May-Oct',
        heroGradient: 'linear-gradient(135deg,#1a0a00 0%,#0d0600 100%)',
        accentColor: '#f59e0b', hotspots: ['Old Havana', 'Malecón', 'Viñales', 'Trinidad']
    },

    // ═══ South & Central Asia ═══
    {
        slug: 'taj-mahal', name: 'Taj Mahal (Agra)', country: 'India', emoji: '🇮🇳', flag: '🕌', region: 'South Asia',
        tagline: 'A monument to eternal love — the most beautiful building ever created',
        bestMonths: ['Oct', 'Nov', 'Feb', 'Mar'],
        tags: ['UNESCO', 'Iconic', 'Architecture', 'History'],
        lat: 27.1751, lon: 78.0421, ciiCountry: 'IN',
        bookingCity: 'agra', getyourguideCity: 'agra-india', skyscannerCity: 'AGR',
        visaRequired: true, avgTempC: 25, rainySeason: 'Jul-Aug',
        heroGradient: 'linear-gradient(135deg,#0a1420 0%,#060a14 100%)',
        accentColor: '#c084fc', hotspots: ['Taj Mahal', 'Agra Fort', 'Fatehpur Sikri', 'Red Fort Delhi']
    },

    {
        slug: 'rajasthan', name: 'Rajasthan', country: 'India', emoji: '🇮🇳', flag: '🏰', region: 'South Asia',
        tagline: 'Land of Maharajas: pink cities, desert forts & camel safaris',
        bestMonths: ['Oct', 'Nov', 'Feb', 'Mar'],
        tags: ['Culture', 'Forts', 'Desert', 'Colorful'],
        lat: 27.0238, lon: 74.2179, ciiCountry: 'IN',
        bookingCity: 'jaipur', getyourguideCity: 'rajasthan-india', skyscannerCity: 'JAI',
        visaRequired: true, avgTempC: 25, rainySeason: 'Jul-Sep',
        heroGradient: 'linear-gradient(135deg,#1a0a00 0%,#0d0600 100%)',
        accentColor: '#fb923c', hotspots: ['Jaipur', 'Jodhpur', 'Udaipur', 'Jaisalmer']
    },

    {
        slug: 'nepal-everest', name: 'Nepal (Everest Trek)', country: 'Nepal', emoji: '🇳🇵', flag: '🏔️', region: 'South Asia',
        tagline: "World's highest peak, ancient monasteries & the roof of the Earth",
        bestMonths: ['Mar', 'Apr', 'May', 'Oct', 'Nov'],
        tags: ['Trekking', 'Adventure', 'Mountains', 'Spiritual'],
        lat: 27.9881, lon: 86.9250, ciiCountry: 'NP',
        bookingCity: 'kathmandu', getyourguideCity: 'nepal-trekking', skyscannerCity: 'KTM',
        visaRequired: true, avgTempC: 10, rainySeason: 'Jun-Sep',
        heroGradient: 'linear-gradient(135deg,#0a0a14 0%,#06060e 100%)',
        accentColor: '#818cf8', hotspots: ['Everest Base Camp', 'Annapurna Circuit', 'Pokhara', 'Kathmandu']
    },

    // ═══ Oceania ═══
    {
        slug: 'new-zealand', name: 'New Zealand', country: 'New Zealand', emoji: '🇳🇿', flag: '🌋', region: 'Oceania',
        tagline: "Middle-Earth: bungee jumping, fjords and the world's wildest landscapes",
        bestMonths: ['Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
        tags: ['Adventure', 'LOTR', 'Nature', 'Epic'],
        lat: -36.8485, lon: 174.7633, ciiCountry: 'NZ',
        bookingCity: 'auckland', getyourguideCity: 'new-zealand', skyscannerCity: 'AKL',
        visaRequired: true, avgTempC: 12, rainySeason: 'Jul-Sep',
        heroGradient: 'linear-gradient(135deg,#0a1414 0%,#060f0f 100%)',
        accentColor: '#2dd4bf', hotspots: ['Milford Sound', 'Queenstown', 'Rotorua', 'Mount Cook']
    },

    {
        slug: 'fiji', name: 'Fiji', country: 'Fiji', emoji: '🇫🇯', flag: '🏝️', region: 'Oceania',
        tagline: 'Happiest nation on Earth: coral reefs, kava rituals & infinity beaches',
        bestMonths: ['Jul', 'Aug', 'Sep', 'Oct'],
        tags: ['Beach', 'Diving', 'Luxury', 'Relaxation'],
        lat: -17.7134, lon: 178.0650, ciiCountry: 'FJ',
        bookingCity: 'fiji', getyourguideCity: 'fiji', skyscannerCity: 'SUV',
        visaRequired: false, avgTempC: 27, rainySeason: 'Nov-Apr',
        heroGradient: 'linear-gradient(135deg,#0a1a20 0%,#060f14 100%)',
        accentColor: '#06b6d4', hotspots: ['Yasawa Islands', 'Mamanuca Islands', 'Sigatoka', 'Taveuni']
    },

    // More destinations to reach 50+ SEO-valuable pages
    {
        slug: 'istanbul', name: 'Istanbul', country: 'Turkey', emoji: '🇹🇷', flag: '🕌', region: 'Middle East',
        tagline: 'Where East meets West: Hagia Sophia, Grand Bazaar & Bosphorus',
        bestMonths: ['Apr', 'May', 'Sep', 'Oct'],
        tags: ['Culture', 'Food', 'History', 'Crossroads'],
        lat: 41.0082, lon: 28.9784, ciiCountry: 'TR',
        bookingCity: 'istanbul', getyourguideCity: 'istanbul-turkey', skyscannerCity: 'IST',
        visaRequired: true, avgTempC: 14, rainySeason: 'Nov-Feb',
        heroGradient: 'linear-gradient(135deg,#1a0800 0%,#0d0500 100%)',
        accentColor: '#f59e0b', hotspots: ['Hagia Sophia', 'Grand Bazaar', 'Bosphorus', 'Cappadocia']
    },

    {
        slug: 'cappadocia', name: 'Cappadocia', country: 'Turkey', emoji: '🇹🇷', flag: '🎈', region: 'Middle East',
        tagline: 'Fairy chimneys, cave hotels & hot air balloons at sunrise',
        bestMonths: ['Apr', 'May', 'Sep', 'Oct'],
        tags: ['Unique', 'Hot Air Balloon', 'Cave Hotels', 'Scenic'],
        lat: 38.6431, lon: 34.8288, ciiCountry: 'TR',
        bookingCity: 'cappadocia', getyourguideCity: 'cappadocia-turkey', skyscannerCity: 'KYS',
        visaRequired: true, avgTempC: 13, rainySeason: 'Nov-Mar',
        heroGradient: 'linear-gradient(135deg,#1a0a00 0%,#0d0600 100%)',
        accentColor: '#fb923c', hotspots: ['Göreme', 'Devrent Valley', 'Urgup', 'Derinkuyu Underground']
    },

    {
        slug: 'petra', name: 'Petra', country: 'Jordan', emoji: '🇯🇴', flag: '🏛️', region: 'Middle East',
        tagline: "The Rose-Red City: Indiana Jones' lost city carved into rock",
        bestMonths: ['Mar', 'Apr', 'Oct', 'Nov'],
        tags: ['UNESCO', 'Ancient', 'Hiking', 'Iconic'],
        lat: 30.3285, lon: 35.4444, ciiCountry: 'JO',
        bookingCity: 'amman', getyourguideCity: 'petra-jordan', skyscannerCity: 'AMM',
        visaRequired: true, avgTempC: 18, rainySeason: 'Jan-Mar',
        heroGradient: 'linear-gradient(135deg,#1a0800 0%,#0d0500 100%)',
        accentColor: '#ef4444', hotspots: ['Treasury', 'Monastery', 'High Place of Sacrifice', 'Wadi Rum']
    },

    {
        slug: 'hong-kong', name: 'Hong Kong', country: 'China SAR', emoji: '🇭🇰', flag: '🌃', region: 'Asia Pacific',
        tagline: 'Asia\'s world city: Victoria Harbour, dim sum & vertical skyline',
        bestMonths: ['Oct', 'Nov', 'Dec', 'Feb', 'Mar'],
        tags: ['City', 'Food', 'Shopping', 'Skyline'],
        lat: 22.3193, lon: 114.1694, ciiCountry: 'HK',
        bookingCity: 'hong-kong', getyourguideCity: 'hong-kong', skyscannerCity: 'HKG',
        visaRequired: false, avgTempC: 23, rainySeason: 'May-Sep',
        heroGradient: 'linear-gradient(135deg,#0a0a14 0%,#06060e 100%)',
        accentColor: '#818cf8', hotspots: ['Victoria Peak', 'Temple Street', 'Lantau Island', 'Star Ferry']
    },

    {
        slug: 'bhutan', name: 'Bhutan', country: 'Bhutan', emoji: '🇧🇹', flag: '⛰️', region: 'South Asia',
        tagline: "The Kingdom of Happiness: Gross National Happiness & Tiger's Nest Monastery",
        bestMonths: ['Mar', 'Apr', 'May', 'Oct', 'Nov'],
        tags: ['Unique', 'Spiritual', 'Hiking', 'Unspoilt'],
        lat: 27.5142, lon: 90.4336, ciiCountry: 'BT',
        bookingCity: 'paro', getyourguideCity: 'bhutan', skyscannerCity: 'PBH',
        visaRequired: true, avgTempC: 12, rainySeason: 'Jun-Sep',
        heroGradient: 'linear-gradient(135deg,#0a1a0a 0%,#060f06 100%)',
        accentColor: '#22c55e', hotspots: ["Tiger's Nest", "Punakha Dzong", "Thimphu", "Phobjikha Valley"]
    },

    {
        slug: 'alaska', name: 'Alaska', country: 'USA', emoji: '🇺🇸', flag: '🐻', region: 'Americas',
        tagline: 'The Last Frontier: glaciers, grizzly bears & aurora borealis',
        bestMonths: ['Jun', 'Jul', 'Aug', 'Mar'],
        tags: ['Wildlife', 'Northern Lights', 'Nature', 'Extreme'],
        lat: 64.2008, lon: -153.4937, ciiCountry: 'US',
        bookingCity: 'anchorage', getyourguideCity: 'alaska-usa', skyscannerCity: 'ANC',
        visaRequired: false, avgTempC: -2, rainySeason: 'Aug-Oct',
        heroGradient: 'linear-gradient(135deg,#000814 0%,#000510 100%)',
        accentColor: '#60a5fa', hotspots: ['Denali', 'Kenai Fjords', 'Glacier Bay', 'Iditarod Trail']
    },

    {
        slug: 'costa-rica', name: 'Costa Rica', country: 'Costa Rica', emoji: '🇨🇷', flag: '🦜', region: 'Americas',
        tagline: 'Pura Vida: cloud forests, zip lines, volcanoes & sea turtles',
        bestMonths: ['Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
        tags: ['Nature', 'Adventure', 'Wildlife', 'Eco-Travel'],
        lat: 9.7489, lon: -83.7534, ciiCountry: 'CR',
        bookingCity: 'san-jose', getyourguideCity: 'costa-rica', skyscannerCity: 'SJO',
        visaRequired: false, avgTempC: 26, rainySeason: 'May-Nov',
        heroGradient: 'linear-gradient(135deg,#0a1a00 0%,#060d00 100%)',
        accentColor: '#4ade80', hotspots: ['Arenal Volcano', 'Manuel Antonio', 'Monteverde', 'Tortuguero']
    },

    {
        slug: 'scotland', name: 'Scottish Highlands', country: 'UK', emoji: '🇬🇧', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', region: 'Europe',
        tagline: 'Rugged mountains, moody lochs, castles and whisky distilleries',
        bestMonths: ['May', 'Jun', 'Jul', 'Aug'],
        tags: ['Nature', 'Castles', 'Whisky', 'Scenic'],
        lat: 57.2922, lon: -5.3905, ciiCountry: 'GB',
        bookingCity: 'inverness', getyourguideCity: 'scottish-highlands', skyscannerCity: 'INV',
        visaRequired: true, avgTempC: 9, rainySeason: 'Oct-Mar',
        heroGradient: 'linear-gradient(135deg,#0a1014 0%,#06080f 100%)',
        accentColor: '#94a3b8', hotspots: ['Loch Ness', 'Skye Island', 'Edinburgh Castle', 'Glencoe']
    },

    {
        slug: 'swiss-alps', name: 'Swiss Alps', country: 'Switzerland', emoji: '🇨🇭', flag: '🏔️', region: 'Europe',
        tagline: 'Winter skiing, summer hiking and the Matterhorn at every angle',
        bestMonths: ['Dec', 'Jan', 'Feb', 'Jun', 'Jul', 'Aug'],
        tags: ['Mountains', 'Skiing', 'Luxury', 'Chocolate'],
        lat: 46.5197, lon: 7.7454, ciiCountry: 'CH',
        bookingCity: 'interlaken', getyourguideCity: 'swiss-alps', skyscannerCity: 'ZRH',
        visaRequired: true, avgTempC: 8, rainySeason: 'Apr-May',
        heroGradient: 'linear-gradient(135deg,#0a0e14 0%,#06080f 100%)',
        accentColor: '#f1f5f9', hotspots: ['Interlaken', 'Zermatt', 'Jungfrau', 'Lauterbrunnen']
    },

    {
        slug: 'vietnam-hoi-an', name: 'Hội An', country: 'Vietnam', emoji: '🇻🇳', flag: '🏮', region: 'Asia Pacific',
        tagline: 'Ancient trading port turned lantern-lit paradise — most photogenic city in Asia',
        bestMonths: ['Feb', 'Mar', 'Apr', 'May', 'Aug'],
        tags: ['Photography', 'Culture', 'Food', 'Lanterns'],
        lat: 15.8801, lon: 108.3380, ciiCountry: 'VN',
        bookingCity: 'hoi-an', getyourguideCity: 'hoi-an-vietnam', skyscannerCity: 'DAD',
        visaRequired: true, avgTempC: 26, rainySeason: 'Oct-Dec',
        heroGradient: 'linear-gradient(135deg,#1a0a00 0%,#0d0600 100%)',
        accentColor: '#ffd700', hotspots: ['Ancient Town', 'My Son Sanctuary', 'Cu Chi Tunnels', 'Da Nang']
    },

    {
        slug: 'palawan', name: 'Palawan', country: 'Philippines', emoji: '🇵🇭', flag: '🏝️', region: 'Asia Pacific',
        tagline: "The world's best island: underground river, limestone karsts & pristine reefs",
        bestMonths: ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
        tags: ['Beach', 'Diving', 'UNESCO', 'Nature'],
        lat: 9.8349, lon: 118.7384, ciiCountry: 'PH',
        bookingCity: 'palawan', getyourguideCity: 'palawan-philippines', skyscannerCity: 'PPS',
        visaRequired: false, avgTempC: 27, rainySeason: 'May-Oct',
        heroGradient: 'linear-gradient(135deg,#0a1a1a 0%,#060f0f 100%)',
        accentColor: '#06b6d4', hotspots: ['El Nido', 'Coron', 'Puerto Princesa Underground River', 'Honda Bay']
    },

    {
        slug: 'sri-lanka', name: 'Sri Lanka', country: 'Sri Lanka', emoji: '🇱🇰', flag: '🐘', region: 'South Asia',
        tagline: 'Teardrop of India: ancient kingdoms, tea highlands, leopards & surf',
        bestMonths: ['Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
        tags: ['Culture', 'Tea', 'Wildlife', 'Beaches'],
        lat: 7.8731, lon: 80.7718, ciiCountry: 'LK',
        bookingCity: 'colombo', getyourguideCity: 'sri-lanka', skyscannerCity: 'CMB',
        visaRequired: true, avgTempC: 28, rainySeason: 'May-Sep',
        heroGradient: 'linear-gradient(135deg,#0a1a00 0%,#060d00 100%)',
        accentColor: '#fbbf24', hotspots: ['Sigiriya', 'Kandy', 'Yala Safari', 'Mirissa']
    },
];

window.DEST_BY_SLUG = Object.fromEntries(window.DESTINATIONS.map(d => [d.slug, d]));
