export interface TravelDestination {
    id: string;
    name: string;
    country: string;
    region: string;
    lat: number;
    lon: number;
    tags: string[];
    emoji: string;
    bestMonths: string;
    safetyLevel: 'safe' | 'caution' | 'reconsider';
}

export const TRAVEL_DESTINATIONS: TravelDestination[] = [
    { id: 'bali', name: 'Bali', country: 'Indonesia', region: 'Asia', lat: -8.4095, lon: 115.1889, tags: ['bucketlist', 'beaches', 'culture', 'nature'], emoji: '🌴', bestMonths: 'Apr-Oct', safetyLevel: 'safe' },
    { id: 'tokyo', name: 'Tokyo', country: 'Japan', region: 'Asia', lat: 35.6762, lon: 139.6503, tags: ['bucketlist', 'culture', 'food', 'city'], emoji: '🗼', bestMonths: 'Mar-May, Sep-Nov', safetyLevel: 'safe' },
    { id: 'paris', name: 'Paris', country: 'France', region: 'Europe', lat: 48.8566, lon: 2.3522, tags: ['bucketlist', 'romance', 'culture', 'food'], emoji: '🥐', bestMonths: 'Apr-Jun, Sep-Oct', safetyLevel: 'caution' },
    { id: 'new-york', name: 'New York City', country: 'USA', region: 'North America', lat: 40.7128, lon: -74.0060, tags: ['bucketlist', 'city', 'culture', 'food'], emoji: '🗽', bestMonths: 'Apr-Jun, Sep-Nov', safetyLevel: 'safe' },
    { id: 'rome', name: 'Rome', country: 'Italy', region: 'Europe', lat: 41.9028, lon: 12.4964, tags: ['bucketlist', 'history', 'food', 'culture'], emoji: '🏛️', bestMonths: 'Apr-Jun, Sep-Oct', safetyLevel: 'safe' },
    { id: 'london', name: 'London', country: 'UK', region: 'Europe', lat: 51.5074, lon: -0.1278, tags: ['bucketlist', 'history', 'city', 'culture'], emoji: '🎡', bestMonths: 'May-Sep', safetyLevel: 'safe' },
    { id: 'dubai', name: 'Dubai', country: 'UAE', region: 'Middle East', lat: 25.2048, lon: 55.2708, tags: ['bucketlist', 'luxury', 'city', 'shopping'], emoji: '🏙️', bestMonths: 'Nov-Mar', safetyLevel: 'safe' },
    { id: 'sydney', name: 'Sydney', country: 'Australia', region: 'Oceania', lat: -33.8688, lon: 151.2093, tags: ['bucketlist', 'beaches', 'city', 'nature'], emoji: '🦘', bestMonths: 'Sep-Nov, Mar-May', safetyLevel: 'safe' },
    { id: 'cape-town', name: 'Cape Town', country: 'South Africa', region: 'Africa', lat: -33.9249, lon: 18.4241, tags: ['bucketlist', 'nature', 'adventure', 'beaches'], emoji: '⛰️', bestMonths: 'Mar-May, Sep-Nov', safetyLevel: 'caution' },
    { id: 'rio', name: 'Rio de Janeiro', country: 'Brazil', region: 'South America', lat: -22.9068, lon: -43.1729, tags: ['bucketlist', 'beaches', 'culture', 'nature'], emoji: '🏖️', bestMonths: 'Dec-Mar', safetyLevel: 'caution' },
    { id: 'machu-picchu', name: 'Machu Picchu', country: 'Peru', region: 'South America', lat: -13.1631, lon: -72.5450, tags: ['bucketlist', 'history', 'adventure', 'nature'], emoji: '🦙', bestMonths: 'Apr-Oct', safetyLevel: 'safe' },
    { id: 'santorini', name: 'Santorini', country: 'Greece', region: 'Europe', lat: 36.3932, lon: 25.4615, tags: ['bucketlist', 'romance', 'beaches', 'views'], emoji: '🧿', bestMonths: 'May-Oct', safetyLevel: 'safe' },
    { id: 'maldives', name: 'Maldives', country: 'Maldives', region: 'Asia', lat: 3.2028, lon: 73.2207, tags: ['bucketlist', 'luxury', 'beaches', 'romance'], emoji: '🏝️', bestMonths: 'Nov-Apr', safetyLevel: 'safe' },
    { id: 'amalfi', name: 'Amalfi Coast', country: 'Italy', region: 'Europe', lat: 40.6333, lon: 14.6029, tags: ['bucketlist', 'views', 'food', 'romance'], emoji: '🍋', bestMonths: 'May-Sep', safetyLevel: 'safe' },
    { id: 'banff', name: 'Banff National Park', country: 'Canada', region: 'North America', lat: 51.1784, lon: -115.5708, tags: ['bucketlist', 'nature', 'adventure', 'mountains'], emoji: '🏔️', bestMonths: 'Jun-Aug', safetyLevel: 'safe' },
    { id: 'kyoto', name: 'Kyoto', country: 'Japan', region: 'Asia', lat: 35.0116, lon: 135.7681, tags: ['bucketlist', 'culture', 'history', 'nature'], emoji: '⛩️', bestMonths: 'Mar-May, Oct-Nov', safetyLevel: 'safe' },
    { id: 'queenstown', name: 'Queenstown', country: 'New Zealand', region: 'Oceania', lat: -45.0312, lon: 168.6626, tags: ['bucketlist', 'adventure', 'nature', 'mountains'], emoji: '❄️', bestMonths: 'Dec-Feb, Jun-Aug', safetyLevel: 'safe' },
    { id: 'iceland', name: 'Reykjavik/Iceland', country: 'Iceland', region: 'Europe', lat: 64.1466, lon: -21.9426, tags: ['bucketlist', 'nature', 'adventure', 'aurora'], emoji: '🌋', bestMonths: 'Jun-Aug', safetyLevel: 'safe' },
    { id: 'serengeti', name: 'Serengeti', country: 'Tanzania', region: 'Africa', lat: -2.3333, lon: 34.8333, tags: ['bucketlist', 'wildlife', 'adventure', 'nature'], emoji: '🦁', bestMonths: 'Jun-Oct', safetyLevel: 'safe' },
    { id: 'petra', name: 'Petra', country: 'Jordan', region: 'Middle East', lat: 30.3285, lon: 35.4444, tags: ['bucketlist', 'history', 'architecture', 'culture'], emoji: '🐪', bestMonths: 'Mar-May, Sep-Nov', safetyLevel: 'safe' }
];
