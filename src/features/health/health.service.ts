/**
 * Health Risk Monitor Feature Module
 * Owner: Lucky
 * 
 * This module provides global health threat monitoring including:
 * - Disease outbreak detection
 * - Epidemiological risk scoring
 * - Travel health advisories
 * - Vaccine/immunization status
 * - Environmental health impacts
 * 
 * Public API (used by other variants):
 * - getCountryHealthScore(country): Promise<HealthRiskScore>
 * - getDiseaseOutbreaks(): Promise<Outbreak[]>
 * - getHealthAdvisory(country): Promise<HealthAdvisory>
 * - getVaccineStatus(country): Promise<VaccineInfo[]>
 * - getAirQualityHealth(location): Promise<HealthImpact> // calls climate service
 */

export interface HealthRiskScore {
  country: string;
  overallScore: number; // 0-100
  factors: {
    disease: number;
    malnutrition: number;
    waterSanitation: number;
    airQuality: number;
    healthcare: number;
    vaccination: number;
  };
  trend: 'improving' | 'stable' | 'deteriorating';
  lastUpdated: string;
}

export interface Outbreak {
  id: string;
  disease: string;
  location: {
    latitude: number;
    longitude: number;
    country: string;
    region: string;
  };
  confirmedCases: number;
  suspectedCases: number;
  deaths: number;
  startDate: string;
  reportedAt: string;
  status: 'ongoing' | 'controlled' | 'contained';
  source: string;
  severity: 'low' | 'moderate' | 'high' | 'critical';
}

export interface HealthAdvisory {
  country: string;
  vaccinesRecommended: string[];
  diseases: {
    name: string;
    risk: 'low' | 'moderate' | 'high';
    prevention: string;
  }[];
  travelHealthAlert?: {
    severity: 'advisory' | 'warning' | 'do-not-travel';
    reason: string;
  };
  malaria?: {
    presence: boolean;
    riskLevel: 'low' | 'moderate' | 'high';
    regions: string[];
    prevention: string;
  };
  dengue?: {
    presence: boolean;
    riskLevel: 'low' | 'moderate' | 'high';
    prevention: string;
  };
  yellowFever?: {
    presence: boolean;
    vaccineRequired: boolean;
  };
  lastUpdated: string;
  source: 'CDC' | 'WHO' | 'ECDC';
}

export interface VaccineInfo {
  country: string;
  disease: string;
  vaccineStatus: 'available' | 'limited' | 'unavailable';
  coverage: number; // percentage
  lastUpdated: string;
}

export interface HealthImpact {
  type: 'air-quality' | 'heatwave' | 'water-shortage' | 'flood';
  affectedPopulation: number;
  vulnerableGroups: string[];
  healthRecommendations: string[];
  severity: 'low' | 'moderate' | 'high' | 'critical';
}

/**
 * TODO for Lucky:
 * 
 * 1. Implement getCountryHealthScore():
 *    - Use WHO health indicators (HDI, life expectancy, etc.)
 *    - Aggregate disease outbreak data
 *    - Include vaccination rates
 *    - Factor in air quality from climate service
 *    - Calculate trend from historical data
 * 
 * 2. Implement getDiseaseOutbreaks():
 *    - Parse ProMED-mail alerts
 *    - Integrate WHO reports
 *    - Geo-locate and classify by severity
 *    - Track case counts & mortality
 * 
 * 3. Implement getHealthAdvisory():
 *    - Use CDC travel health notices
 *    - Parse government health advisories (UK FCDO, etc.)
 *    - Return vaccine recommendations
 *    - Include disease-specific prevention
 * 
 * 4. Implement getVaccineStatus():
 *    - Use WHO vaccine tracker
 *    - Return country-specific coverage
 *    - Include vaccine type & availability
 * 
 * 5. Integrate with climate service:
 *    - Call climate.getAirQuality() for health impact
 *    - Use climate anomalies to assess heatwave/flood health risks
 *    - Feed into overall health score
 * 
 * 6. Expose for other variants:
 *    - Victor's travel variant will call getHealthAdvisory() + getHealthImpact()
 *    - Conflict variants can call getCountryHealthScore() for CII boost
 */
