// Health variant - health.worldmonitor.app
import type { PanelConfig, MapLayers } from '@/types';
import type { VariantConfig } from './base';

// Re-export base config
export * from './base';

// Health-specific feeds
import type { Feed } from '@/types';

const rss = (url: string) => `/api/rss-proxy?url=${encodeURIComponent(url)}`;

export const FEEDS: Record<string, Feed[]> = {
  // Health & Medical News
  health: [
    { name: 'Medical News Today', url: rss('https://www.medicalnewstoday.com/feed') },
    { name: 'Health News', url: rss('https://www.healthline.com/rss') },
    { name: 'CDC News', url: rss('https://www.cdc.gov/media/rss/') },
    { name: 'WHO News', url: rss('https://www.who.int/feeds/entity/mediacentre/news/en/rss.xml') },
    { name: 'Nature Medicine', url: rss('https://www.nature.com/nm/') },
  ],

  // Epidemiology & Disease
  epidemiology: [
    { name: 'ProMED-mail', url: rss('https://www.promedmail.org/rss/biosecurity') },
    { name: 'Outbreak News', url: rss('https://outbreaknewstoday.com/feed/') },
    { name: 'Disease Tracking', url: rss('https://news.google.com/rss/search?q=disease+outbreak+OR+epidemic+when:3d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Infectious Disease News', url: rss('https://www.infectious-disease-news.com/feed') },
    { name: 'Flu Tracking', url: rss('https://news.google.com/rss/search?q=influenza+OR+flu+outbreak+when:7d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Research & Science
  research: [
    { name: 'Science Daily (Health)', url: rss('https://www.sciencedaily.com/rss/health_medicine/') },
    { name: 'PubMed Central News', url: rss('https://www.ncbi.nlm.nih.gov/pmc/rss/') },
    { name: 'JAMA Medicine', url: rss('https://jamanetwork.com/journals/jama/pages/rss') },
    { name: 'Lancet News', url: rss('https://www.thelancet.com/lancet/latest/lancet-news.xml') },
    { name: 'Medical Research', url: rss('https://news.google.com/rss/search?q=medical+research+OR+clinical+trial+when:7d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Mental Health
  mental: [
    { name: 'Mental Health America', url: rss('https://www.mhanational.org/') },
    { name: 'Psychology Today', url: rss('https://www.psychologytoday.com/basics/') },
    { name: 'NAMI News', url: rss('https://www.nami.org/') },
    { name: 'Mental Health News', url: rss('https://news.google.com/rss/search?q="mental+health"+OR+depression+OR+anxiety+when:7d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Public Health Policy
  policy: [
    { name: 'Healthcare IT News', url: rss('https://www.healthcareitnews.com/feed') },
    { name: 'STAT News', url: rss('https://www.statnews.com/feed/') },
    { name: 'Health Affairs', url: rss('https://www.healthaffairs.org/') },
    { name: 'Health Policy News', url: rss('https://news.google.com/rss/search?q="health+policy"+OR+"public+health"+when:7d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Vaccines & Immunization
  vaccines: [
    { name: 'CDC Vaccines', url: rss('https://www.cdc.gov/vaccines/rss.html') },
    { name: 'WHO Vaccines', url: rss('https://www.who.int/news-room/fact-sheets/') },
    { name: 'Vaccination News', url: rss('https://news.google.com/rss/search?q=vaccine+OR+vaccination+when:7d&hl=en-US&gl=US&ceid=US:en') },
  ],
};

export const INTEL_SOURCES: any[] = [];

// Health variant panels
export const DEFAULT_PANELS: Record<string, PanelConfig> = {
  'live-news': { name: 'Health Alerts', enabled: true, priority: 1 },
  'news': { name: 'Health News', enabled: true, priority: 2 },
  'insights': { name: 'Health Insights', enabled: true, priority: 3 },
  'monitor': { name: 'Outbreak Monitor', enabled: false },
  'weather': { name: 'Environmental Health', enabled: false },
  'market': { name: 'Pharma Markets', enabled: false },
  'economic': { name: 'Healthcare Economy', enabled: false },
  'cascade': { name: 'Health Crisis Cascade', enabled: false },
  'cii': { name: 'Healthcare Infrastructure', enabled: false },
  'strategic-risk': { name: 'Health Risks', enabled: false },
  'strategic-posture': { name: 'Healthcare Preparedness', enabled: false },
  'macro-signals': { name: 'Health Trends', enabled: false },
  'counter': { name: 'Health Counters', enabled: false },
  'gdelt': { name: 'Global Health Events', enabled: false },
  'ucdp-events': { name: 'Conflict & Health', enabled: false },
  'displacement': { name: 'Refugee Health', enabled: false },
  'climate': { name: 'Climate Health Impact', enabled: false },
};

// Health variant map layers
export const DEFAULT_MAP_LAYERS: MapLayers = {
  // Minimal map - focus is on data panels
  weather: false,
  natural: false,
  earthquakes: false,
  weatherAlerts: false,
  naturalDisasters: false,
  fires: false,

  // Geopolitical disabled
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
  displacement: true,
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

// Mobile defaults for health variant
export const MOBILE_DEFAULT_MAP_LAYERS: MapLayers = {
  // Even more minimal on mobile
  weather: false,
  natural: false,
  earthquakes: false,
  weatherAlerts: false,
  naturalDisasters: false,
  fires: false,
  displacement: false,
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
  name: 'Health',
  description: 'Disease tracking, epidemiology, and public health',
  panels: DEFAULT_PANELS,
  mapLayers: DEFAULT_MAP_LAYERS,
  mobileMapLayers: MOBILE_DEFAULT_MAP_LAYERS,
};
