// Sports variant - sports.worldmonitor.app
import type { PanelConfig, MapLayers } from '@/types';
import type { VariantConfig } from './base';

// Re-export base config
export * from './base';

// Sports-specific feeds
import type { Feed } from '@/types';

const rss = (url: string) => `/api/rss-proxy?url=${encodeURIComponent(url)}`;

export const FEEDS: Record<string, Feed[]> = {
  // General Sports News
  sports: [
    { name: 'ESPN', url: rss('https://feeds.espn.com/espn/sports/') },
    { name: 'Sports Illustrated', url: rss('https://www.si.com/feed/') },
    { name: 'Bleacher Report', url: rss('https://bleacherreport.com/feed') },
    { name: 'The Athletic', url: rss('https://theathletic.com/feeds/') },
    { name: 'Sports News', url: rss('https://news.google.com/rss/search?q=sports+news+when:3d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Football (Soccer)
  soccer: [
    { name: 'Goal.com', url: rss('https://www.goal.com/en-us/feeds/news') },
    { name: 'ESPN FC', url: rss('https://feeds.espn.com/feeds/site/_/page/soccer') },
    { name: 'Sky Sports', url: rss('https://www.skysports.com/feeds/rss/football/') },
    { name: 'Football News', url: rss('https://news.google.com/rss/search?q=football+soccer+when:3d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Premier League', url: rss('https://www.premierleague.com/feeds/') },
  ],

  // American Football (NFL)
  nfl: [
    { name: 'NFL.com', url: rss('https://www.nfl.com/feeds/news.rss') },
    { name: 'ESPN NFL', url: rss('https://feeds.espn.com/feeds/site/_/page/nfl/') },
    { name: 'Pro Football Talk', url: rss('https://profootballtalk.nbcsports.com/feed/') },
    { name: 'NFL News', url: rss('https://news.google.com/rss/search?q=NFL+news+when:3d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Basketball (NBA/International)
  basketball: [
    { name: 'NBA.com', url: rss('https://www.nba.com/feed/') },
    { name: 'ESPN NBA', url: rss('https://feeds.espn.com/feeds/site/_/page/nba/') },
    { name: 'Sports Illustrated NBA', url: rss('https://www.si.com/nba/feed/') },
    { name: 'Basketball News', url: rss('https://news.google.com/rss/search?q=basketball+NBA+when:3d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'FIBA Basketball', url: rss('https://www.fiba.basketball/en') },
  ],

  // Baseball (MLB)
  baseball: [
    { name: 'MLB.com', url: rss('https://www.mlb.com/feeds/') },
    { name: 'ESPN MLB', url: rss('https://feeds.espn.com/feeds/site/_/page/mlb/') },
    { name: 'Baseball News', url: rss('https://news.google.com/rss/search?q=baseball+MLB+when:3d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'The Score', url: rss('https://www.thescore.com/feed/') },
  ],

  // Ice Hockey (NHL)
  hockey: [
    { name: 'NHL.com', url: rss('https://www.nhl.com/feeds/') },
    { name: 'ESPN NHL', url: rss('https://feeds.espn.com/feeds/site/_/page/nhl/') },
    { name: 'Hockey News', url: rss('https://news.google.com/rss/search?q=hockey+NHL+when:3d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Tennis
  tennis: [
    { name: 'ATP Tour', url: rss('https://www.atptour.com/footer/feeds') },
    { name: 'WTA Tennis', url: rss('https://www.wtatennis.com/feeds/') },
    { name: 'Tennis News', url: rss('https://news.google.com/rss/search?q=tennis+when:3d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Grand Slams', url: rss('https://news.google.com/rss/search?q="Grand+Slam"+tennis+when:7d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Golf
  golf: [
    { name: 'PGA Tour', url: rss('https://www.pgatour.com/feeds/') },
    { name: 'LPGA Golf', url: rss('https://www.lpga.com/feeds/') },
    { name: 'Golf News', url: rss('https://news.google.com/rss/search?q=golf+PGA+when:3d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Ryder Cup', url: rss('https://news.google.com/rss/search?q="Ryder+Cup"+OR+"golf+major"+when:7d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Olympics & International
  olympics: [
    { name: 'IOC News', url: rss('https://olympics.com/en/news/') },
    { name: 'Olympic News', url: rss('https://news.google.com/rss/search?q=olympics+when:7d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'World Championships', url: rss('https://news.google.com/rss/search?q="world+championship"+OR+"world+cup"+when:7d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Motorsports
  motorsports: [
    { name: 'F1 News', url: rss('https://www.formula1.com/en/latest.html') },
    { name: 'ESPN Motorsports', url: rss('https://feeds.espn.com/feeds/site/_/page/motorsport/') },
    { name: 'Motorsports News', url: rss('https://news.google.com/rss/search?q="Formula+1"+OR+racing+when:3d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Combat Sports (MMA/Boxing)
  combat: [
    { name: 'UFC News', url: rss('https://www.ufc.com/feeds/') },
    { name: 'Boxing News', url: rss('https://www.boxingnews24.com/feed/') },
    { name: 'MMA News', url: rss('https://news.google.com/rss/search?q=UFC+OR+MMA+OR+boxing+when:3d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Esports
  esports: [
    { name: 'ESPN Esports', url: rss('https://feeds.espn.com/feeds/site/_/page/esports/') },
    { name: 'Esports News', url: rss('https://www.esportsobserver.com/feed/') },
    { name: 'Competitive Gaming', url: rss('https://news.google.com/rss/search?q=esports+OR+"competitive+gaming"+when:3d&hl=en-US&gl=US&ceid=US:en') },
  ],
};

export const INTEL_SOURCES: any[] = [];

// Sports variant panels
export const DEFAULT_PANELS: Record<string, PanelConfig> = {
  'live-news': { name: 'Sports News', enabled: true, priority: 1 },
  'news': { name: 'Breaking Sports', enabled: true, priority: 2 },
  'market': { name: 'Sports Markets', enabled: true, priority: 3 },
  'insights': { name: 'Sports Analysis', enabled: true, priority: 4 },
  'monitor': { name: 'Game Monitor', enabled: false },
  'weather': { name: 'Game Weather', enabled: false },
  'economic': { name: 'Sports Economy', enabled: false },
  'cascade': { name: 'Event Cascade', enabled: false },
  'cii': { name: 'Venue Status', enabled: false },
  'strategic-risk': { name: 'Event Risk', enabled: false },
  'strategic-posture': { name: 'Season Overview', enabled: false },
  'macro-signals': { name: 'Trends', enabled: false },
  'counter': { name: 'Counters', enabled: false },
  'gdelt': { name: 'Global Sports Events', enabled: false },
  'ucdp-events': { name: 'Sports Conflicts', enabled: false },
  'displacement': { name: 'Athlete Movements', enabled: false },
  'climate': { name: 'Climate Impact', enabled: false },
};

// Sports variant map layers (minimal)
export const DEFAULT_MAP_LAYERS: MapLayers = {
  // Essentially disabled - map is not needed for sports variant
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

// Mobile defaults for sports variant
export const MOBILE_DEFAULT_MAP_LAYERS: MapLayers = {
  // All disabled on mobile
  weather: false,
  natural: false,
  earthquakes: false,
  weatherAlerts: false,
  naturalDisasters: false,
  fires: false,
  displacement: false,
  climate: false,
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
  name: 'Sports',
  description: 'Global sports news, scores, and event tracking',
  panels: DEFAULT_PANELS,
  mapLayers: DEFAULT_MAP_LAYERS,
  mobileMapLayers: MOBILE_DEFAULT_MAP_LAYERS,
};
