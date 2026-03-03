// Travel/Weather variant - travel.worldmonitor.app
import type { PanelConfig, MapLayers } from '@/types';
import type { VariantConfig } from './base';

// Re-export base config
export * from './base';

// Travel-specific feeds
import type { Feed } from '@/types';

const rss = (url: string) => `/api/rss-proxy?url=${encodeURIComponent(url)}`;

export const FEEDS: Record<string, Feed[]> = {
  // Travel News & Advisories
  travel: [
    { name: 'Travel + Leisure', url: rss('https://www.travelandleisure.com/feed') },
    { name: 'Wanderlust', url: rss('https://www.wanderlust.co.uk/feeds/latest') },
    { name: 'The Points Guy', url: rss('https://thepointsguy.com/feed/') },
    { name: 'Skyscanner Travel Tips', url: rss('https://www.skyscanner.com/discover/') },
    { name: 'Travel Weekly', url: rss('https://www.travelweekly.com/rss/travel-news') },
  ],

  // Weather & Climate
  weather: [
    { name: 'Weather Underground News', url: rss('https://www.wunderground.com/rss/alerts') },
    { name: 'NOAA Weather', url: rss('https://forecast.weather.gov/rssxml/') },
    { name: 'Severe Weather News', url: rss('https://news.google.com/rss/search?q=severe+weather+OR+hurricane+OR+storm+when:3d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Climate News', url: rss('https://www.nationalgeographic.com/rss/') },
  ],

  // Travel Deals & Hotels
  deals: [
    { name: 'Secret Flying', url: rss('https://www.secretflying.com/feed/') },
    { name: 'Scott\'s Cheap Flights', url: rss('https://www.scottscheapflights.com/feed') },
    { name: 'Booking.com Deals', url: rss('https://www.booking.com/deals.html') },
    { name: 'Kayak Travel News', url: rss('https://kayak.com/news/') },
  ],

  // Safety & Advisories
  safety: [
    { name: 'US State Dept Travel Advisories', url: rss('https://travel.state.gov/rss/') },
    { name: 'IATA Travel Safety', url: rss('https://www.iata.org/en/iata-repository/publications/') },
    { name: 'Travel Insurance News', url: rss('https://news.google.com/rss/search?q="travel+insurance"+OR+"travel+advisory"+when:7d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Destination Guides
  guides: [
    { name: 'Condé Nast Traveler', url: rss('https://www.condenasttraveler.com/rss') },
    { name: 'Lonely Planet', url: rss('https://www.lonelyplanet.com/news/') },
    { name: 'Adventurous Kate', url: rss('https://www.adventurouskate.com/feed/') },
    { name: 'World Nomads', url: rss('https://www.worldnomads.com/travel-safety/') },
  ],
};

export const INTEL_SOURCES: any[] = [];

// Travel variant panels (simplified)
export const DEFAULT_PANELS: Record<string, PanelConfig> = {
  'live-news': { name: 'Live News', enabled: true, priority: 1 },
  'news': { name: 'Travel News', enabled: true, priority: 2 },
  'weather': { name: 'Weather Alerts', enabled: true, priority: 3 },
  'market': { name: 'Flight Prices', enabled: false },
  'insights': { name: 'Destination Insights', enabled: true },
  'monitor': { name: 'Trip Monitor', enabled: false },
  'cascade': { name: 'Risk Cascade', enabled: false },
  'cii': { name: 'Airport Status', enabled: true },
  'economic': { name: 'Economic Data', enabled: false },
  'gdelt': { name: 'Travel Trends', enabled: false },
  'strategic-risk': { name: 'Travel Risks', enabled: false },
  'strategic-posture': { name: 'Geopolitical Climate', enabled: false },
  'macro-signals': { name: 'Market Trends', enabled: false },
  'counter': { name: 'Travel Counters', enabled: false },
  'ucdp-events': { name: 'Conflict Map', enabled: false },
  'displacement': { name: 'Displacement', enabled: false },
  'climate': { name: 'Climate Impact', enabled: false },
};

// Travel variant map layers
export const DEFAULT_MAP_LAYERS: MapLayers = {
  // Core travel layers
  weather: true,
  natural: true,
  earthquakes: true,
  weatherAlerts: true,
  naturalDisasters: true,

  // Infrastructure & Safety
  airports: false, // Would need to add airports layer
  outages: false,
  cables: false,

  // Geopolitical context
  conflicts: false,
  hotspots: false,
  sanctions: false,
  protests: false,
  bases: false,
  nuclear: false,
  irradiators: false,
  military: false,

  // Infrastructure
  ais: false,
  flights: false,
  pipelines: false,
  datacenters: false,

  // Other
  economic: false,
  waterways: false,
  cyberThreats: false,
  spaceports: false,
  minerals: false,
  fires: false,
  ucdpEvents: false,
  displacement: false,
  climate: false,
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
  iranAttacks: false,
  gpsJamming: false,
  tradeRoutes: false,
  positiveEvents: false,
  kindness: false,
  happiness: false,
  speciesRecovery: false,
  renewableInstallations: false,
  dayNight: false,
};

// Mobile defaults for travel variant
export const MOBILE_DEFAULT_MAP_LAYERS: MapLayers = {
  // Core travel layers (mobile-optimized)
  weather: true,
  natural: true,
  earthquakes: true,
  weatherAlerts: true,
  naturalDisasters: false,

  // Everything else off on mobile to reduce load
  conflicts: false,
  hotspots: false,
  sanctions: false,
  protests: false,
  bases: false,
  nuclear: false,
  irradiators: false,
  military: false,
  ais: false,
  flights: false,
  cables: false,
  pipelines: false,
  outages: false,
  datacenters: false,
  economic: false,
  waterways: false,
  cyberThreats: false,
  spaceports: false,
  minerals: false,
  fires: false,
  ucdpEvents: false,
  displacement: false,
  climate: false,
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
  iranAttacks: false,
  gpsJamming: false,
  tradeRoutes: false,
  positiveEvents: false,
  kindness: false,
  happiness: false,
  speciesRecovery: false,
  renewableInstallations: false,
  dayNight: false,
};

export const VARIANT_CONFIG: VariantConfig = {
  name: 'Travel',
  description: 'Weather, destinations, and safe travel planning',
  panels: DEFAULT_PANELS,
  mapLayers: DEFAULT_MAP_LAYERS,
  mobileMapLayers: MOBILE_DEFAULT_MAP_LAYERS,
};
