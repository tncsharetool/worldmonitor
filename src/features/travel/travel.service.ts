/**
 * Travel Feature Module
 * Owner: Victor
 * 
 * This module provides all travel-related functionality including:
 * - Travel risk assessment for destinations
 * - Flight & hotel deal aggregation
 * - Travel safety advisories integration
 * - Route planning with weather
 * 
 * Public API:
 * - getTravelRiskScore(country: string): Promise<number>
 * - searchFlights(origin, destination, dates): Promise<FlightOffer[]>
 * - searchHotels(destination, dates): Promise<HotelOffer[]>
 * - getRouteWeather(origin, destination): Promise<WeatherForecast>
 * - getTravelAdvisory(country): Promise<Advisory>
 */

export interface FlightOffer {
  id: string;
  airline: string;
  departureTime: string;
  arrivalTime: string;
  duration: number; // minutes
  price: number;
  currency: string;
  bookingUrl: string;
  affiliate?: 'travelpayouts' | 'booking' | 'kayak';
}

export interface HotelOffer {
  id: string;
  name: string;
  location: string;
  checkInDate: string;
  checkOutDate: string;
  pricePerNight: number;
  currency: string;
  rating: number;
  reviewCount: number;
  bookingUrl: string;
  affiliate?: 'booking' | 'getyourguide' | 'expedia';
}

export interface WeatherForecast {
  location: string;
  latitude: number;
  longitude: number;
  forecast: {
    date: string;
    temperature: number;
    condition: string;
    humidity: number;
    windSpeed: number;
    riskLevel: 'low' | 'medium' | 'high';
  }[];
  alerts: {
    type: string;
    severity: 'warning' | 'alert' | 'watch';
    description: string;
  }[];
}

export interface Advisory {
  country: string;
  level: 'safe' | 'caution' | 'reconsider' | 'do-not-travel';
  source: string;
  updatedAt: string;
  summary: string;
  details: string;
}

export interface TravelRisk {
  country: string;
  score: number; // 0-100
  factors: {
    conflict: number;
    health: number;
    weather: number;
    infrastructure: number;
  };
  lastUpdated: string;
}

/** 
 * TODO for Victor:
 * 
 * 1. Implement getTravelRiskScore():
 *    - Aggregate conflict data from FULL variant
 *    - Add health risk from Lucky's health variant
 *    - Add weather warnings from climate/weather APIs
 *    - Add infrastructure outages
 * 
 * 2. Implement searchFlights() & searchHotels():
 *    - Use Travelpayouts API for flight search
 *    - Use GetYourGuide API for hotel & tours
 *    - Include Booking.com affiliate links
 * 
 * 3. Implement getRouteWeather():
 *    - Use Open-Meteo free API (no key needed)
 *    - Return 7-day forecast
 *    - Flag extreme weather
 * 
 * 4. Implement getTravelAdvisory():
 *    - Parse SecurityAdvisoriesPanel data
 *    - Map government advisories (US State, UK FCDO, etc.)
 */
