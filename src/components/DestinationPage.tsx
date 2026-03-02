import { useEffect, useState } from "react";
import { getWeatherByCity, getAirQuality } from "../services/weatherService";

// Top 20 destinations - dữ liệu tĩnh cho MVP
export const TOP_DESTINATIONS = [
  { id: "bali",       name: "Bali, Indonesia",   lat: -8.34,  lon: 115.09, img: "🏝️" },
  { id: "tokyo",      name: "Tokyo, Japan",       lat: 35.68,  lon: 139.69, img: "🗼" },
  { id: "paris",      name: "Paris, France",      lat: 48.85,  lon: 2.35,   img: "🗽" },
  { id: "bangkok",    name: "Bangkok, Thailand",  lat: 13.75,  lon: 100.52, img: "🛕" },
  { id: "dubai",      name: "Dubai, UAE",         lat: 25.20,  lon: 55.27,  img: "🏙️" },
  { id: "sydney",     name: "Sydney, Australia",  lat: -33.87, lon: 151.21, img: "🦘" },
  { id: "newyork",    name: "New York, USA",      lat: 40.71,  lon: -74.01, img: "🗽" },
  { id: "singapore",  name: "Singapore",          lat: 1.35,   lon: 103.82, img: "🌃" },
];

export default function DestinationPage({ destId }: { destId: string }) {
  const [weather, setWeather] = useState<any>(null);
  const [aqi, setAqi] = useState<any>(null);
  const dest = TOP_DESTINATIONS.find(d => d.id === destId);

  useEffect(() => {
    if (!dest) return;
    getWeatherByCity(dest.lat, dest.lon).then(setWeather);
    getAirQuality(dest.lat, dest.lon).then(setAqi);
  }, [destId]);

  if (!dest) return <div>Destination not found</div>;

  const bookingUrl = `https://www.booking.com/searchresults.html?ss=${dest.name}&aid=${import.meta.env.VITE_BOOKING_AFFILIATE_ID}`;
  const agodaUrl   = `https://www.agoda.com/search?city=${dest.name}`;

  return (
    <div className="destination-page">
      <h1>{dest.img} {dest.name} — Weather & Travel Guide</h1>

      {/* Weather Widget */}
      {weather && (
        <div className="weather-card">
          <h2>🌡️ Current Weather</h2>
          <p>Temperature: {weather.current?.temperature_2m}°C</p>
          <p>Wind: {weather.current?.wind_speed_10m} km/h</p>
          <p>Rain: {weather.current?.precipitation} mm</p>
        </div>
      )}

      {/* AQI Widget */}
      {aqi && (
        <div className="aqi-card">
          <h2>💨 Air Quality Index</h2>
          <p>AQI: {aqi.current?.us_aqi} — {aqi.current?.us_aqi < 50 ? "✅ Good" : aqi.current?.us_aqi < 100 ? "⚠️ Moderate" : "🔴 Unhealthy"}</p>
        </div>
      )}

      {/* AFFILIATE BUTTONS — Dòng tiền chính */}
      <div className="affiliate-section">
        <h2>🏨 Book Your Stay</h2>
        <a href={bookingUrl} target="_blank" rel="noopener noreferrer"
           className="btn-booking">
          Book on Booking.com →
        </a>
        <a href={agodaUrl} target="_blank" rel="noopener noreferrer"
           className="btn-agoda">
          Find deals on Agoda →
        </a>
        <a href="https://safetywing.com/?referenceID=YOUR_ID" target="_blank"
           className="btn-insurance">
          🛡️ Get Travel Insurance →
        </a>
      </div>
    </div>
  );
}
