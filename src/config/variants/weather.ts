// Weather & Climate variant - weather.worldmonitor.app
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

// Weather-specific FEEDS configuration
import type { Feed } from '@/types';

const rss = (url: string) => `/api/rss-proxy?url=${encodeURIComponent(url)}`;

export const FEEDS: Record<string, Feed[]> = {
  // Weather & Meteorology News
  weather: [
    { name: 'National Weather Service', url: rss('https://forecast.weather.gov/product.php?site=LOT&issuedby=LOT&product=AFD&format=CI&version=1&glossary=0&highlight=off') },
    { name: 'Weather Underground', url: rss('https://news.google.com/rss/search?q=site:wunderground.com+weather+when:2d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'The Weather Channel', url: rss('https://news.google.com/rss/search?q=site:weather.com+forecast+OR+storm+when:1d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'NBC Weather', url: rss('https://news.google.com/rss/search?q="weather"+("forecast"+OR+"alert"+OR+"warning")+when:1d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Climate & Environment
  climate: [
    { name: 'Climate Change News', url: rss('https://news.google.com/rss/search?q=("climate+change"+OR+"global+warming"+OR+"climate+crisis")+when:2d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'NASA Climate Science', url: rss('https://news.google.com/rss/search?q=site:nasa.gov+("climate"+OR+"earth"+OR+"atmosphere")+when:7d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'NOAA Climate', url: rss('https://news.google.com/rss/search?q=site:noaa.gov+(climate+OR+"severe+weather"+OR+hurricane)+when:3d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Carbon Brief', url: rss('https://news.google.com/rss/search?q=site:carbonbrief.org+when:7d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Severe Weather Alerts
  alerts: [
    { name: 'Severe Weather Alerts', url: rss('https://news.google.com/rss/search?q=("severe+storm"+OR+"tornado"+OR+"flooding"+OR+"blizzard"+OR+"heat+wave")+alert+when:1d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Hurricane & Tropical', url: rss('https://news.google.com/rss/search?q=(hurricane+OR+typhoon+OR+cyclone)+alert+OR+warning+when:1d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Winter Weather', url: rss('https://news.google.com/rss/search?q=("winter+storm"+OR+blizzard+OR+ice+OR+snow)+alert+when:2d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Wildfire Alerts', url: rss('https://news.google.com/rss/search?q=(wildfire+OR+"forest+fire"+OR+"bushfire")+alert+warning+when:1d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Disaster & Natural Events
  disasters: [
    { name: 'Natural Disasters', url: rss('https://news.google.com/rss/search?q=(earthquake+OR+tsunami+OR+flood+OR+landslide+OR+avalanche)+when:1d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'USGS Earthquakes', url: rss('https://news.google.com/rss/search?q=site:usgs.gov+earthquake+when:1d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Flood News', url: rss('https://news.google.com/rss/search?q=(flood+OR+flooding+OR+"flash+flood"+OR+inundation)+when:2d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Atmospheric & Ocean Science
  atmosphere: [
    { name: 'Atmospheric Science', url: rss('https://news.google.com/rss/search?q=("atmospheric+science"+OR+"air+quality"+OR+ozone)+when:7d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Ocean & Sea Science', url: rss('https://news.google.com/rss/search?q=("ocean+temperature"+OR+"sea+level"+OR+"marine+heatwave")+when:7d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Monsoon & Seasonal', url: rss('https://news.google.com/rss/search?q=(monsoon+OR+"monsoon+season"+OR+"seasonal+pattern")+when:7d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Environmental News
  environment: [
    { name: 'Environmental News', url: rss('https://news.google.com/rss/search?q=("environmental+news"+OR+"ecosystem"+OR+"biodiversity")+when:3d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Conservation & Sustainability', url: rss('https://news.google.com/rss/search?q=(conservation+OR+sustainability+OR+"renewable+energy")+when:3d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Air & Water Quality', url: rss('https://news.google.com/rss/search?q=("air+quality"+OR+"water+quality"+OR+pollution)+index+when:3d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Global Weather News (Regional)
  regionalWeather: [
    { name: 'Asia Weather News', url: rss('https://news.google.com/rss/search?q=(weather+OR+climate)+("Asia"+OR+"India"+OR+"China"+OR+"Japan")+when:3d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Europe Weather', url: rss('https://news.google.com/rss/search?q=(weather+OR+climate)+("Europe"+OR+"UK"+OR+"Germany")+when:3d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Africa Weather', url: rss('https://news.google.com/rss/search?q=(weather+OR+drought+OR+flooding)+"Africa"+when:3d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Americas Weather', url: rss('https://news.google.com/rss/search?q=(weather+OR+climate)+("North+America"+OR+"South+America"+OR+Caribbean)+when:3d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Agricultural & Water Impact
  agricultural: [
    { name: 'Agricultural Weather', url: rss('https://news.google.com/rss/search?q=(agricultural+OR+crop+OR+farming)+weather+OR+drought+when:3d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Water Resources', url: rss('https://news.google.com/rss/search?q=("water+resources"+OR+"water+scarcity"+OR+drought)+when:3d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Wildfire & Drought', url: rss('https://news.google.com/rss/search?q=(wildfire+OR+drought)+impact+("agriculture"+OR+"water")+when:3d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Solar & Space Weather
  spaceweather: [
    { name: 'Solar Activity', url: rss('https://news.google.com/rss/search?q=("solar+activity"+OR+"solar+storm"+OR+"solar+flare")+when:3d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Space Weather Alerts', url: rss('https://news.google.com/rss/search?q=("space+weather"+OR+"geomagnetic+storm"+OR+aurora)+when:2d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Northern Lights & Aurora', url: rss('https://news.google.com/rss/search?q=(aurora+OR+"northern+lights"+OR+"aurora+borealis")+when:3d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Travel Weather Planning
  travelweather: [
    { name: 'Travel Weather Advisories', url: rss('https://news.google.com/rss/search?q=("travel"+weather+OR+"best+time+to+visit")+when:7d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Airport Weather Impacts', url: rss('https://news.google.com/rss/search?q=(airport+OR+flight+OR+airline)+(weather+OR+delay)+when:1d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Science & Research
  science: [
    { name: 'Climate Research', url: rss('https://news.google.com/rss/search?q=("climate+research"+OR+"climate+study")+when:7d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Meteorology Science', url: rss('https://news.google.com/rss/search?q=(meteorology+OR+"weather+science")+research+when:7d&hl=en-US&gl=US&ceid=US:en') },
  ],
};

// Panel configuration for weather/climate
export const DEFAULT_PANELS: Record<string, PanelConfig> = {
  map: { name: 'Global Weather & Climate Map', enabled: true, priority: 1 },
  weather: { name: 'Current Weather & Forecast', enabled: true, priority: 1 },
  climate: { name: 'Climate & Anomalies', enabled: true, priority: 1 },
  alerts: { name: 'Severe Weather Alerts', enabled: true, priority: 1 },
  'live-news': { name: 'Weather News', enabled: true, priority: 1 },
  disasters: { name: 'Natural Disasters', enabled: true, priority: 1 },
  atmosphere: { name: 'Atmospheric Science', enabled: true, priority: 2 },
  environment: { name: 'Environment & Sustainability', enabled: true, priority: 2 },
  agricultural: { name: 'Agricultural Weather Impact', enabled: true, priority: 2 },
  spaceweather: { name: 'Solar & Space Weather', enabled: true, priority: 2 },
  science: { name: 'Climate & Weather Research', enabled: true, priority: 2 },
  monitors: { name: 'My Monitors', enabled: true, priority: 2 },
};

// Weather-focused map layers
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
  natural: true,
  spaceports: false,
  minerals: false,
  fires: true,
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

// Mobile defaults for weather variant
export const MOBILE_DEFAULT_MAP_LAYERS: MapLayers = {
  ...DEFAULT_MAP_LAYERS,
  fires: false,
  climate: false,
  dayNight: false,
};

export const VARIANT_CONFIG: VariantConfig = {
  name: 'weather',
  description: 'Global Weather, Climate & Disaster Intelligence',
  panels: DEFAULT_PANELS,
  mapLayers: DEFAULT_MAP_LAYERS,
  mobileMapLayers: MOBILE_DEFAULT_MAP_LAYERS,
};
