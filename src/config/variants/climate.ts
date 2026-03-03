// Climate & Weather variant - climate.worldmonitor.app
// Owner: Lucky (Climate & Weather focus)
// Purpose: Global weather monitoring, climate anomalies, extreme weather alerts
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

// Climate-specific FEEDS configuration
import type { Feed } from '@/types';

const rss = (url: string) => `/api/rss-proxy?url=${encodeURIComponent(url)}`;

export const FEEDS: Record<string, Feed[]> = {
  // Weather & Meteorology News
  weather: [
    { name: 'National Weather Service', url: rss('https://www.weather.gov/media/rssxml/obCollective.rss') },
    { name: 'NOAA Weather Alerts', url: rss('https://news.google.com/rss/search?q=site:weather.gov+alert+OR+warning+when:1d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'The Weather Channel', url: rss('https://news.google.com/rss/search?q=site:weather.com+("severe+weather"+OR+alert)+when:1d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Climate & Global Warming
  climate: [
    { name: 'NASA Climate Science', url: rss('https://news.google.com/rss/search?q=site:nasa.gov+("climate"+OR+"earth+science")+when:3d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'NOAA Climate', url: rss('https://news.google.com/rss/search?q=site:noaa.gov+climate+when:3d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Climate Change News', url: rss('https://news.google.com/rss/search?q=("climate+change"+OR+"global+warming"+OR+"climate+crisis")+when:2d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Carbon Brief', url: rss('https://news.google.com/rss/search?q=site:carbonbrief.org+when:7d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Severe Weather & Disasters
  severe: [
    { name: 'Severe Weather Alerts', url: rss('https://news.google.com/rss/search?q=("severe+storm"+OR+"tornado"+OR+"flooding"+OR+"blizzard")+when:1d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Hurricane & Tropical', url: rss('https://news.google.com/rss/search?q=(hurricane+OR+typhoon+OR+cyclone)+alert+when:1d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Earthquakes & Tsunamis', url: rss('https://news.google.com/rss/search?q=(earthquake+OR+tsunami)+when:1d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Wildfires & Drought
  fires: [
    { name: 'Wildfire Alerts', url: rss('https://news.google.com/rss/search?q=(wildfire+OR+"forest+fire"+OR+"bushfire")+when:1d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Drought Monitoring', url: rss('https://news.google.com/rss/search?q=(drought+OR+"water+scarcity")+when:3d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Atmospheric & Air Quality
  airquality: [
    { name: 'Air Quality News', url: rss('https://news.google.com/rss/search?q=("air+quality"+OR+pollution+OR+smog)+when:2d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'EPA Air Quality', url: rss('https://news.google.com/rss/search?q=site:epa.gov+"air+quality"+when:3d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Ocean & Sea Science
  ocean: [
    { name: 'Ocean Temperature', url: rss('https://news.google.com/rss/search?q=("ocean+temperature"+OR+"sea+surface"+OR+"marine+heatwave")+when:3d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Sea Level Rise', url: rss('https://news.google.com/rss/search?q=("sea+level"+rise+OR+"coastal+flooding")+when:3d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Climate Research & Science
  research: [
    { name: 'Climate Research', url: rss('https://news.google.com/rss/search?q=("climate+research"+OR+"climate+study")+when:7d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'IPCC & Reports', url: rss('https://news.google.com/rss/search?q=(IPCC+OR+"climate+report")+when:7d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Regional Climate News
  regional: [
    { name: 'Asia Climate News', url: rss('https://news.google.com/rss/search?q=(climate+OR+weather)+(Asia+OR+India+OR+China)+when:3d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Americas Climate', url: rss('https://news.google.com/rss/search?q=(climate+OR+weather)+(Americas+OR+Brazil)+when:3d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Africa Climate News', url: rss('https://news.google.com/rss/search?q=(drought+OR+flooding+OR+weather+OR+climate)+Africa+when:3d&hl=en-US&gl=US&ceid=US:en') },
  ],
};

// Panel configuration for climate
export const DEFAULT_PANELS: Record<string, PanelConfig> = {
  map: { name: 'Global Climate & Weather Map', enabled: true, priority: 1 },
  climate: { name: 'Climate Anomalies & Trends', enabled: true, priority: 1 },
  alerts: { name: 'Severe Weather Alerts', enabled: true, priority: 1 },
  'live-news': { name: 'Weather & Climate News', enabled: true, priority: 1 },
  'extremes-today': { name: "Today's Extreme Events", enabled: true, priority: 1 },
  'air-quality': { name: 'Global Air Quality', enabled: true, priority: 2 },
  fires: { name: 'Satellite Fire Detection', enabled: true, priority: 2 },
  'natural-disasters': { name: 'Natural Disasters', enabled: true, priority: 2 },
  ocean: { name: 'Ocean & Sea Conditions', enabled: true, priority: 2 },
  research: { name: 'Climate Research & Science', enabled: true, priority: 2 },
  monitors: { name: 'My Climate Monitors', enabled: true, priority: 2 },
};

// Climate-focused map layers
export const DEFAULT_MAP_LAYERS: MapLayers = {
  gpsJamming: false,
  conflicts: false,
  bases: false,
  cables: false,
  pipelines: false,
  hotspots: false,
  ais: false,
  nuclear: false,
  irradiators: false,
  sanctions: false,
  weather: true,
  economic: false,
  waterways: false,
  outages: false,
  cyberThreats: false,
  datacenters: false,
  protests: false,
  flights: false,
  military: false,
  natural: true, // earthquakes, floods, etc.
  spaceports: false,
  minerals: false,
  fires: true, // satellite fire detection
  ucdpEvents: false,
  displacement: false,
  climate: true, // climate anomalies
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
  dayNight: true,
};

// Mobile defaults for climate variant
export const MOBILE_DEFAULT_MAP_LAYERS: MapLayers = {
  ...DEFAULT_MAP_LAYERS,
  fires: false,
  climate: false,
  dayNight: false,
};

export const VARIANT_CONFIG: VariantConfig = {
  name: 'climate',
  description: 'Global Climate, Weather & Disaster Monitoring',
  panels: DEFAULT_PANELS,
  mapLayers: DEFAULT_MAP_LAYERS,
  mobileMapLayers: MOBILE_DEFAULT_MAP_LAYERS,
};
