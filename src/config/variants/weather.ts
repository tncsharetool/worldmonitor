// Weather variant - weather.worldmonitor.app
import type { PanelConfig, MapLayers } from '@/types';
import type { VariantConfig } from './base';

// Re-export base config
export * from './base';

// Weather-specific feeds
import type { Feed } from '@/types';

const rss = (url: string) => `/api/rss-proxy?url=${encodeURIComponent(url)}`;

export const FEEDS: Record<string, Feed[]> = {
  // Weather & Climate
  weather: [
    { name: 'NOAA Weather Alerts', url: rss('https://forecast.weather.gov/rssxml/') },
    { name: 'Weather Underground', url: rss('https://www.wunderground.com/rss/alerts') },
    { name: 'National Weather Service', url: rss('https://www.weather.gov/wrh/Climate') },
    { name: 'European Weather', url: rss('https://www.dwd.de/') },
    { name: 'Severe Weather', url: rss('https://news.google.com/rss/search?q=tornado+OR+hurricane+OR+"severe+weather"+when:3d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Climate & Environmental
  climate: [
    { name: 'Climate News Network', url: rss('https://climatenewsnetwork.net/feed/') },
    { name: 'Carbon Brief', url: rss('https://www.carbonbrief.org/feed') },
    { name: 'NASA Climate', url: rss('https://climate.nasa.gov/feed/') },
    { name: 'NOAA Climate', url: rss('https://www.noaa.gov/') },
    { name: 'National Geographic Climate', url: rss('https://www.nationalgeographic.com/environment/') },
  ],

  // Natural Disasters & Alerts
  disasters: [
    { name: 'USGS Earthquakes', url: rss('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson') },
    { name: 'Volcano News', url: rss('https://www.volcanodiscovery.com/news.html') },
    { name: 'Wildfire News', url: rss('https://news.google.com/rss/search?q=wildfire+OR+forest+fire+when:3d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Tsunami Alerts', url: rss('https://www.tsunami.gov/') },
    { name: 'Disaster News', url: rss('https://news.google.com/rss/search?q="natural+disaster"+OR+"extreme+weather"+when:3d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Air Quality & Pollution
  air_quality: [
    { name: 'EPA AirNow', url: rss('https://www.airnow.gov/') },
    { name: 'World Air Quality', url: rss('https://waqi.info/') },
    { name: 'Pollution News', url: rss('https://news.google.com/rss/search?q="air+pollution"+OR+"air+quality"+when:7d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Environmental News', url: rss('https://www.environmentalhealth.org/feed') },
  ],

  // Water & Flood News
  water: [
    { name: 'USGS Water', url: rss('https://waterdata.usgs.gov/nwis/rt') },
    { name: 'Flood News', url: rss('https://news.google.com/rss/search?q=flood+OR+flooding+when:3d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Ocean & Seas', url: rss('https://ocean.si.edu/') },
    { name: 'Coastal News', url: rss('https://news.google.com/rss/search?q=coastal+erosion+OR+"sea+level"+when:7d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Space Weather
  space: [
    { name: 'NOAA Space Weather', url: rss('https://www.swpc.noaa.gov/') },
    { name: 'Space Weather News', url: rss('https://spaceweather.com/swpod.html') },
    { name: 'Solar Activity', url: rss('https://news.google.com/rss/search?q="solar+flare"+OR+"solar+activity"+when:7d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Aurora Reports', url: rss('https://news.google.com/rss/search?q=aurora+borealis+OR+geomagnetic+when:7d&hl=en-US&gl=US&ceid=US:en') },
  ],
};

export const INTEL_SOURCES: any[] = [];

// Weather variant panels
export const DEFAULT_PANELS: Record<string, PanelConfig> = {
  'live-news': { name: 'Weather Alerts', enabled: true, priority: 1 },
  'news': { name: 'Climate News', enabled: true, priority: 2 },
  'weather': { name: 'Global Weather', enabled: true, priority: 3 },
  'insights': { name: 'Weather Insights', enabled: true, priority: 4 },
  'cascade': { name: 'Disaster Cascade', enabled: false },
  'monitor': { name: 'Alert Monitor', enabled: false },
  'market': { name: 'Commodity Impact', enabled: false },
  'economic': { name: 'Climate Economics', enabled: false },
  'gdelt': { name: 'Climate Events', enabled: false },
  'cii': { name: 'Infrastructure Impact', enabled: false },
  'strategic-risk': { name: 'Climate Risk', enabled: false },
  'strategic-posture': { name: 'Global Patterns', enabled: false },
  'macro-signals': { name: 'Climate Trends', enabled: false },
  'counter': { name: 'Event Counters', enabled: false },
  'ucdp-events': { name: 'Climate Conflicts', enabled: false },
  'displacement': { name: 'Climate Displacement', enabled: false },
  'climate': { name: 'Climate Data', enabled: true },
};

// Weather variant map layers
export const DEFAULT_MAP_LAYERS: MapLayers = {
  // Core weather layers
  weather: true,
  natural: true,
  earthquakes: true,
  weatherAlerts: true,
  naturalDisasters: true,
  fires: true,

  // Geopolitical disabled
  conflicts: false,
  hotspots: false,
  sanctions: false,
  protests: false,
  bases: false,
  nuclear: false,
  irradiators: false,
  military: false,

  // Infrastructure disabled
  ais: false,
  flights: false,
  cables: false,
  pipelines: false,
  outages: false,
  datacenters: false,

  // Other
  economic: false,
  waterways: false,
  cyberThreats: false,
  spaceports: false,
  minerals: false,
  ucdpEvents: false,
  displacement: false,
  climate: true,
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

// Mobile defaults for weather variant
export const MOBILE_DEFAULT_MAP_LAYERS: MapLayers = {
  // Keep only essential weather layers
  weather: true,
  natural: true,
  earthquakes: true,
  weatherAlerts: true,
  naturalDisasters: false,
  fires: false,
  climate: false,

  // Everything else off
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
  ucdpEvents: false,
  displacement: false,
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
  name: 'Weather',
  description: 'Real-time weather, climate data, and disaster alerts',
  panels: DEFAULT_PANELS,
  mapLayers: DEFAULT_MAP_LAYERS,
  mobileMapLayers: MOBILE_DEFAULT_MAP_LAYERS,
};
