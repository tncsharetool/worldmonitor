// Health Risk Monitor variant - health.worldmonitor.app
// Owner: Lucky (Health Risk & Disease Monitoring)
// Purpose: Global health threats, disease outbreaks, epidemiological monitoring
import type { PanelConfig, MapLayers } from '@/types';
import type { VariantConfig } from './base';

// Re-export base config
export * from './base';

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

// Health-specific FEEDS configuration
import type { Feed } from '@/types';

const rss = (url: string) => `/api/rss-proxy?url=${encodeURIComponent(url)}`;

export const FEEDS: Record<string, Feed[]> = {
  // Global Health News
  health: [
    { name: 'WHO News', url: rss('https://news.google.com/rss/search?q=site:who.int+news+when:3d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'CDC News', url: rss('https://tools.cdc.gov/podcasts/rss.aspx') },
    { name: 'ECDC Alerts', url: rss('https://news.google.com/rss/search?q=site:ecdc.europa.eu+alert+when:2d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Global Health News', url: rss('https://news.google.com/rss/search?q=("global+health"+OR+"public+health"+OR+"infectious+disease")+when:2d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Disease Outbreaks & Epidemiology
  outbreaks: [
    { name: 'Disease Outbreaks', url: rss('https://news.google.com/rss/search?q=(outbreak+OR+epidemic+OR+pandemic)+disease+when:1d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Infectious Diseases', url: rss('https://news.google.com/rss/search?q=("infectious+disease"+OR+"contagious"+OR+"communicable")+when:2d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'ProMED Alerts', url: rss('https://news.google.com/rss/search?q=site:promedmail.org+when:1d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Vaccine & Immunization
  vaccines: [
    { name: 'Vaccine News', url: rss('https://news.google.com/rss/search?q=(vaccine+OR+vaccination+OR+immunization)+when:3d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Vaccine Safety', url: rss('https://news.google.com/rss/search?q=("vaccine+safety"+OR+"adverse+effect")+when:3d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Travel Health & Advisories
  travelhealth: [
    { name: 'Travel Health Advisories', url: rss('https://news.google.com/rss/search?q=("travel+health"+OR+"health+advisory")+when:2d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'CDC Travelers Health', url: rss('https://news.google.com/rss/search?q=site:cdc.gov+travelers+health+when:3d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Yellow Fever & Malaria', url: rss('https://news.google.com/rss/search?q=("yellow+fever"+OR+malaria+OR+dengue)+alert+when:3d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Environmental Health
  environmental: [
    { name: 'Air Quality & Health', url: rss('https://news.google.com/rss/search?q=("air+quality"+OR+pollution)+health+impact+when:2d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Water Quality & Health', url: rss('https://news.google.com/rss/search?q=("water+quality"+OR+"water+contamination")+health+when:3d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Climate Health Impact', url: rss('https://news.google.com/rss/search?q=(climate+OR+heat+wave+OR+drought)+health+impact+when:3d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Mental Health & Wellness
  mentalhealth: [
    { name: 'Mental Health News', url: rss('https://news.google.com/rss/search?q=("mental+health"+OR+depression+OR+anxiety)+when:7d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Public Health Crisis', url: rss('https://news.google.com/rss/search?q=("public+health+crisis"+OR+"health+emergency")+when:3d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Epidemiological Research
  epidemiology: [
    { name: 'Disease Research', url: rss('https://news.google.com/rss/search?q=(epidemiology+OR+"disease+study"+OR+"transmission+research")+when:7d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Clinical Trials & Medicine', url: rss('https://news.google.com/rss/search?q=("clinical+trial"+OR+"drug+approval"+OR+medicine)+when:7d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Regional Health News
  regional: [
    { name: 'Africa Health News', url: rss('https://news.google.com/rss/search?q=(health+OR+disease+OR+outbreak)+Africa+when:3d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Asia Health News', url: rss('https://news.google.com/rss/search?q=(health+OR+epidemic)+(Asia+OR+India+OR+China)+when:3d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Americas Health News', url: rss('https://news.google.com/rss/search?q=(health+OR+outbreak)+(Americas+OR+Brazil)+when:3d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Nutrition & Food Safety
  food: [
    { name: 'Food Safety Alerts', url: rss('https://news.google.com/rss/search?q=("food+safety"+OR+"foodborne+illness"+OR+recall)+when:2d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Nutrition & Health', url: rss('https://news.google.com/rss/search?q=(nutrition+OR+"diet+health")+research+when:7d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Zoonotic & Emerging Diseases
  zoonotic: [
    { name: 'Zoonotic Diseases', url: rss('https://news.google.com/rss/search?q=("zoonotic+disease"+OR+"animal+to+human")+when:3d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Emerging Infectious Disease', url: rss('https://tools.cdc.gov/podcasts/rss.aspx') },
  ],
};

// Panel configuration for health monitoring
export const DEFAULT_PANELS: Record<string, PanelConfig> = {
  map: { name: 'Global Health Risk Map', enabled: true, priority: 1 },
  'health-alerts': { name: 'Global Health Alerts', enabled: true, priority: 1 },
  'outbreak-tracker': { name: 'Disease Outbreak Tracker', enabled: true, priority: 1 },
  'live-news': { name: 'Health & Disease News', enabled: true, priority: 1 },
  'country-health-score': { name: 'Country Health Risk Scores', enabled: true, priority: 1 },
  'travel-health': { name: 'Travel Health & Advisories', enabled: true, priority: 2 },
  'environmental-health': { name: 'Environmental Health Impacts', enabled: true, priority: 2 },
  vaccines: { name: 'Vaccine & Immunization News', enabled: true, priority: 2 },
  epidemiology: { name: 'Epidemiological Research', enabled: true, priority: 2 },
  'food-safety': { name: 'Food Safety Alerts', enabled: true, priority: 2 },
  monitors: { name: 'My Health Monitors', enabled: true, priority: 2 },
};

// Health-focused map layers
export const DEFAULT_MAP_LAYERS: MapLayers = {
  gpsJamming: false,
  conflicts: false,
  bases: false,
  cables: false,
  pipelines: false,
  hotspots: true, // health hotspots (disease clusters)
  ais: false,
  nuclear: false,
  irradiators: false,
  sanctions: false,
  weather: false,
  economic: false,
  waterways: false,
  outages: false,
  cyberThreats: false,
  datacenters: false,
  protests: false,
  flights: false,
  military: false,
  natural: true, // natural disasters affecting health
  spaceports: false,
  minerals: false,
  fires: true, // air quality impact from fires
  ucdpEvents: false,
  displacement: true, // displaced populations health risk
  climate: true, // climate health impacts
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
  travelDestinations: false,
  dayNight: false,
};

// Mobile defaults for health variant
export const MOBILE_DEFAULT_MAP_LAYERS: MapLayers = {
  ...DEFAULT_MAP_LAYERS,
  fires: false,
  climate: false,
  displacement: false,
};

export const VARIANT_CONFIG: VariantConfig = {
  name: 'health',
  description: 'Global Health Threats & Disease Monitoring',
  panels: DEFAULT_PANELS,
  mapLayers: DEFAULT_MAP_LAYERS,
  mobileMapLayers: MOBILE_DEFAULT_MAP_LAYERS,
};
