/**
 * Climate & Weather Feature Module
 * Owner: Lucky
 * 
 * This module provides weather and climate anomaly monitoring including:
 * - Real-time weather forecasts
 * - Climate anomaly detection
 * - Severe weather alerts
 * - Air quality monitoring
 * - Satellite fire detection
 * 
 * Public API (used by other variants):
 * - getWeatherForecast(lat, lon, days): Promise<WeatherData>
 * - getClimateAnomalies(region): Promise<ClimateAnomaly[]>
 * - getSevereWeatherAlerts(): Promise<WeatherAlert[]>
 * - getAirQuality(location): Promise<AirQualityData>
 */

export interface WeatherData {
  location: {
    latitude: number;
    longitude: number;
    name: string;
  };
  current: {
    temperature: number;
    feelsLike: number;
    humidity: number;
    windSpeed: number;
    windDirection: string;
    condition: string;
    precipitation: number;
    uvIndex: number;
    visibility: number;
  };
  forecast: {
    date: string;
    temperature: number;
    temperatureMin: number;
    temperatureMax: number;
    humidity: number;
    windSpeed: number;
    condition: string;
    precipitation: number;
    riskLevel: 'low' | 'medium' | 'high';
  }[];
  alerts: WeatherAlert[];
}

export interface WeatherAlert {
  id: string;
  type: 'severe-storm' | 'tornado' | 'flood' | 'heat-wave' | 'cold-snap' | 'hurricane' | 'wildfire';
  severity: 'warning' | 'watch' | 'advisory';
  issuedAt: string;
  expiresAt: string;
  description: string;
  affectedArea: {
    latitude: number;
    longitude: number;
    radiusKm: number;
  };
}

export interface ClimateAnomaly {
  id: string;
  type: 'temperature' | 'precipitation' | 'drought' | 'heatwave' | 'cold-snap';
  severity: 'minor' | 'moderate' | 'severe' | 'extreme';
  location: {
    latitude: number;
    longitude: number;
    region: string;
  };
  detectedAt: string;
  baselineDeviation: number; // standard deviations from 30-day baseline
  expectedDuration: string;
  impacts: string[];
}

export interface AirQualityData {
  location: {
    latitude: number;
    longitude: number;
    name: string;
  };
  aqi: number; // Air Quality Index (0-500)
  aqiCategory: 'good' | 'fair' | 'moderate' | 'poor' | 'very-poor';
  dominantPollutant: string;
  pollutants: {
    pm25: number;
    pm10: number;
    o3: number;
    no2: number;
    so2: number;
    co: number;
  };
  healthRecommendation: string;
  lastUpdated: string;
}

export interface SatelliteFire {
  id: string;
  latitude: number;
  longitude: number;
  confidence: number; // 0-1
  brightness: number;
  detectedAt: string;
  daynight: 'day' | 'night';
  instrument: 'viirs' | 'modis';
}

/**
 * TODO for Lucky:
 * 
 * 1. Implement getWeatherForecast():
 *    - Use Open-Meteo API (free, no key)
 *    - Return 7-14 day forecast
 *    - Include severe weather risk classification
 * 
 * 2. Implement getClimateAnomalies():
 *    - Use ERA5 climate data (already in codebase)
 *    - Calculate baseline deviation per region/season
 *    - Flag heatwaves, droughts, anomalous precipitation
 * 
 * 3. Implement getSevereWeatherAlerts():
 *    - Aggregate from NGA warnings + GDACS + NASA EONET
 *    - Parse RSS feeds for real-time alerts
 *    - Classify by impact type & region
 * 
 * 4. Implement getAirQuality():
 *    - Use OpenAQ API (free for non-commercial)
 *    - Return AQI + breakdown of pollutants
 *    - Health recommendations based on AQI
 * 
 * 5. Expose for other variants:
 *    - Victor's travel variant will call getWeatherForecast() + getAirQuality()
 *    - HealthRisk variant will use getClimateAnomalies() + getAirQuality()
 */
