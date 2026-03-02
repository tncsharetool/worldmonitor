// Weather Service - Open-Meteo (100% FREE, no API key)
export const getWeatherByCity = async (lat: number, lon: number) => {
  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}` +
    `&current=temperature_2m,wind_speed_10m,weather_code,precipitation` +
    `&daily=temperature_2m_max,temperature_2m_min,precipitation_sum` +
    `&timezone=auto&forecast_days=7`
  );
  return res.json();
};

// Earthquakes - USGS (FREE, no key)
export const getEarthquakes = async () => {
  const res = await fetch(
    `https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson`
  );
  return res.json();
};

// Natural Disasters - NASA EONET (FREE, no key)
export const getNaturalEvents = async () => {
  const res = await fetch(
    `https://eonet.gsfc.nasa.gov/api/v3/events?status=open&limit=50`
  );
  return res.json();
};

// Air Quality (FREE)
export const getAirQuality = async (lat: number, lon: number) => {
  const res = await fetch(
    `https://air-quality-api.open-meteo.com/v1/air-quality` +
    `?latitude=${lat}&longitude=${lon}&current=pm10,pm2_5,us_aqi`
  );
  return res.json();
};
