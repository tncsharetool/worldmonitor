/**
 * Shared Type Definitions for Multi-Variant Architecture
 * 
 * This file extends base VariantConfig with extensible schema
 * allowing each variant to declare data sources and affiliate placements.
 * 
 * Use for:
 * - Type-safe variant configuration
 * - Affiliate management
 * - Data source declaration
 * - Extension hooks for future features
 */

import type { PanelConfig, MapLayers } from '@/types';

/**
 * Affiliate placement configuration
 * Allows non-invasive monetization across variants
 */
export interface AffiliateSlot {
  provider: 'Booking' | 'Expedia' | 'GetYourGuide' | 'Travelpayouts' | 'InsurancePartner' | 'VPN' | 'TravelCredit';
  position: 'hero-banner' | 'top-panel' | 'card-footer' | 'sidebar' | 'modal' | 'embedded';
  dataAttributes?: Record<string, string>;
}

/**
 * Data source requirement declaration
 * Helps team understand API dependencies per variant
 */
export interface DataSourceRequirement {
  name: string;
  endpoint: string;
  key?: string; // API key environment variable name
  optional: boolean;
  fallback?: string;
}

/**
 * Extension hook for future additions
 * Allows variants to declare additional features without schema changes
 */
export interface VariantExtension {
  name: string;
  enabled: boolean;
  config?: Record<string, unknown>;
}

/**
 * Enhanced VariantConfig with affiliate + data source metadata
 * Extends ./base.ts VariantConfig
 */
export interface VariantConfigExtended {
  // Core (from base)
  name: string;
  description: string;
  panels: Record<string, PanelConfig>;
  mapLayers: MapLayers;
  mobileMapLayers: MapLayers;

  // New: Data source tracking
  dataSources?: DataSourceRequirement[];

  // New: Affiliate placement (optional, non-invasive)
  affiliateSlots?: Record<string, AffiliateSlot>;

  // New: Future extensibility hooks
  extensions?: Record<string, VariantExtension>;

  // New: Suggested default locale/theme
  theme?: 'light' | 'dark' | 'auto';
  locale?: string;

  // New: SEO metadata
  seoTitle?: string;
  seoDescription?: string;
  socialImage?: string;
}

/**
 * Usage Example (in variants/travel.ts):
 * 
 * export const VARIANT_CONFIG: VariantConfigExtended = {
 *   name: 'travel',
 *   description: 'Travel Intelligence & Route Planning',
 *   panels: DEFAULT_PANELS,
 *   mapLayers: DEFAULT_MAP_LAYERS,
 *   mobileMapLayers: MOBILE_DEFAULT_MAP_LAYERS,
 * 
 *   // Declare data sources used by this variant
 *   dataSources: [
 *     { name: 'OpenSky', endpoint: 'https://opensky-network.org/api', key: 'OPENSKY_CLIENT_ID', optional: false },
 *     { name: 'Open-Meteo', endpoint: 'https://api.open-meteo.com', optional: false },
 *     { name: 'Travelpayouts', endpoint: 'https://api.travelpayouts.com', key: 'TRAVELPAYOUTS_API_KEY', optional: true },
 *   ],
 * 
 *   // Non-invasive affiliate placements
 *   affiliateSlots: {
 *     'flight-search': { provider: 'Travelpayouts', position: 'top-panel' },
 *     'hotel-booking': { provider: 'Booking', position: 'card-footer' },
 *     'tour-activity': { provider: 'GetYourGuide', position: 'embedded' },
 *     'travel-insurance': { provider: 'InsurancePartner', position: 'modal' },
 *   },
 * 
 *   // Future features (don't implement now; just declare)
 *   extensions: {
 *     'seasonal-pricing': { name: 'Seasonal Price Alerts', enabled: false },
 *     'visa-assistant': { name: 'Visa Requirements', enabled: false },
 *   },
 * 
 *   seoTitle: 'Travel Monitor | Route Planning & Safety Intelligence',
 *   seoDescription: 'Real-time travel intelligence, flight tracking, and destination safety assessment',
 * };
 */
