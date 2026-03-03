// Travel variant - travel.worldmonitor.app
import type { PanelConfig, MapLayers } from '@/types';
import type { VariantConfig } from './base';

// Re-export base config
export * from './base';

// Travel-specific exports
export * from '../travel-destinations';

// Re-export feeds infrastructure
export {
  SOURCE_TIERS,
  getSourceTier,
  SOURCE_TYPES,
  getSourceType,
  getSourcePropagandaRisk,
  type SourceRiskProfile,
  type SourceType,
} from '../feeds';

// Travel-specific FEEDS configuration
import type { Feed } from '@/types';

const rss = (url: string) => `/api/rss-proxy?url=${encodeURIComponent(url)}`;

export const FEEDS: Record<string, Feed[]> = {
  // Travel News & Destinations
  travel: [
    { name: 'Travel + Leisure', url: rss('https://www.travelandleisure.com/feed') },
    { name: 'Condé Nast Traveler', url: rss('https://www.cntraveler.com/feed/rss') },
    { name: 'National Geographic Travel', url: rss('https://news.google.com/rss/search?q=site:nationalgeographic.com+travel+when:7d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Travel Pulse', url: rss('https://news.google.com/rss/search?q=site:travelpulse.com+when:3d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Skift Travel', url: rss('https://skift.com/feed') },
    { name: 'Jetsetter', url: rss('https://news.google.com/rss/search?q=site:jetsetter.com+travel+when:7d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Flight & Airlines News
  flights: [
    { name: 'Airline News', url: rss('https://news.google.com/rss/search?q=(airline+OR+aircraft+OR+aviation)+news+when:1d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Flight Delays & Disruptions', url: rss('https://news.google.com/rss/search?q=(flight+OR+airline)+(delay+OR+cancellation+OR+disruption)+when:1d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Airport News', url: rss('https://news.google.com/rss/search?q=(airport+OR+aviation)+(closure+OR+expansion)+when:2d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Aviation Safety', url: rss('https://news.google.com/rss/search?q=(aviation+OR+flight)+safety+OR+incident+when:3d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Accommodations & Hotels
  accommodation: [
    { name: 'Hotel & Resort News', url: rss('https://news.google.com/rss/search?q=(hotel+OR+resort+OR+lodging)+news+when:3d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Airbnb & Rentals', url: rss('https://news.google.com/rss/search?q=(Airbnb+OR+"vacation+rental")+when:7d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Luxury Travel', url: rss('https://news.google.com/rss/search?q=(luxury+OR+resort)+travel+when:7d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Travel Safety & Advisories
  safety: [
    { name: 'Travel Safety Alerts', url: rss('https://news.google.com/rss/search?q=(travel+advisory+OR+"travel+warning")+when:1d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Civil Unrest & Protests', url: rss('https://news.google.com/rss/search?q=(protest+OR+"civil+unrest")+("travel+risk"+OR+"tourist")+when:1d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Visa & Health Travel', url: rss('https://news.google.com/rss/search?q=(visa+OR+"travel+health"+OR+vaccine)+when:3d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Destination Guides
  destinations: [
    { name: 'Asia Travel Guides', url: rss('https://news.google.com/rss/search?q=(Asia+OR+Japan+OR+Thailand)+travel+guide+when:7d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Europe Travel Guides', url: rss('https://news.google.com/rss/search?q=(Europe+OR+Paris+OR+Italy)+travel+guide+when:7d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Americas Travel Guides', url: rss('https://news.google.com/rss/search?q=(Americas+OR+Mexico)+travel+guide+when:7d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Adventure & Activities
  adventure: [
    { name: 'Adventure Travel', url: rss('https://news.google.com/rss/search?q=(hiking+OR+trekking+OR+diving)+adventure+when:7d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Wildlife & Safari', url: rss('https://news.google.com/rss/search?q=(safari+OR+wildlife)+travel+when:7d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Currency & Travel Deals
  deals: [
    { name: 'Travel Deals', url: rss('https://news.google.com/rss/search?q=("travel+deal"+OR+"flight+sale")+when:1d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Currency News', url: rss('https://news.google.com/rss/search?q=(currency+OR+"exchange+rate")+when:2d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Weather for Travelers
  weathertravel: [
    { name: 'Seasonal Travel Weather', url: rss('https://news.google.com/rss/search?q=("best+time+to+visit"+OR+"travel+season")+when:7d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Weather Alerts', url: rss('https://news.google.com/rss/search?q=(hurricane+OR+wildfire+OR+storm)+travel+when:2d&hl=en-US&gl=US&ceid=US:en') },
  ],
};

// Panel configuration for travel
export const DEFAULT_PANELS: Record<string, PanelConfig> = {
    'travel-sidebar': { name: 'Travel Planner', enabled: true, priority: 0 },
    map: { name: 'Travel Destinations Map', enabled: true, priority: 1 },
    'live-webcams': { name: 'Live Destination Cams', enabled: true, priority: 1 },
    'live-news': { name: 'Travel & Destination News', enabled: true, priority: 1 },
    flights: { name: 'Flight Delays & Airports', enabled: true, priority: 1 },
    'security-advisories': { name: 'Travel Safety & Advisories', enabled: true, priority: 1 },
    climate: { name: 'Destination Weather', enabled: true, priority: 1 },
    accommodation: { name: 'Hotels & Resorts', enabled: true, priority: 2 },
    'macro-signals': { name: 'Currency & Exchange Rates', enabled: true, priority: 2 },
    adventure: { name: 'Adventure & Activities', enabled: true, priority: 2 },
    deals: { name: 'Travel Deals & Discounts', enabled: true, priority: 2 },
    monitors: { name: 'My Travel Monitors', enabled: true, priority: 2 },
};

// Travel-focused map layers - ONLY show travel-relevant data
export const DEFAULT_MAP_LAYERS: MapLayers = {
    gpsJamming: false,
    conflicts: false, // ❌ OFF: Conflict Zones, Iran Attacks not relevant to travel
    bases: false,
    cables: false,
    pipelines: false,
    hotspots: false,
    ais: false,
    nuclear: false,
    irradiators: false,
    sanctions: false,
    weather: true, // ✅ Essential for travel planning
    economic: false,
    waterways: false,
    outages: false, // Internet outages not critical for travel UI
    cyberThreats: false,
    datacenters: false,
    protests: false, // ❌ OFF: Civil unrest can show on Security Advisories panel instead
    flights: true, // ✅ Flight tracking - core travel feature
    military: false,
    natural: true, // ✅ Natural disasters (storms, floods) - critical for safety
    spaceports: false,
    minerals: false,
    fires: true, // ✅ Wildfires impact travel routes & destinations
    ucdpEvents: false,
    displacement: false,
    climate: true, // ✅ Extreme weather warnings
    startupHubs: false,
    cloudRegions: false,
    accelerators: false,
    techHQs: false,
    techEvents: false,
    stockExchanges: false,
    financialCenters: false,
    centralBanks: false,
    commodityHubs: false,
    gulfInvestments: false,
    positiveEvents: false,
    kindness: false,
    happiness: false,
    speciesRecovery: false,
    renewableInstallations: false,
    tradeRoutes: false,
    iranAttacks: false,
    travelDestinations: true, // ✅ Travel destinations POIs
    dayNight: true, // ✅ Day/night indicator useful for travelers
};

// Mobile defaults for travel variant
export const MOBILE_DEFAULT_MAP_LAYERS: MapLayers = {
    ...DEFAULT_MAP_LAYERS,
    protests: false,
    fires: false,
    flights: false,
    climate: false,
    dayNight: false,
};

export const VARIANT_CONFIG: VariantConfig = {
    name: 'travel',
    description: 'Global Travel Intelligence & Weather',
    panels: DEFAULT_PANELS,
    mapLayers: DEFAULT_MAP_LAYERS,
    mobileMapLayers: MOBILE_DEFAULT_MAP_LAYERS,
};
