/**
 * Formats a date into a localized string (e.g., "miércoles, 25 de marzo de 2026, 10:41 a. m.").
 */
function formatDate(dateValue) {
  if (!dateValue) return "Fecha no disponible";

  let date;
  // Handle timestamp (ms) or ISO string
  if (typeof dateValue === 'number' || (!isNaN(Number(dateValue)) && String(dateValue).length > 10)) {
    date = new Date(Number(dateValue));
  } else {
    date = new Date(String(dateValue).replace(' ', 'T'));
  }

  if (isNaN(date.getTime())) return "Fecha inválida";

  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  };

  return new Intl.DateTimeFormat('es-ES', options).format(date);
}

/**
 * Standardizes earthquake data from raw API response.
 * Follows the "Standard Level" requirement using consistent property names.
 */
export function formatEarthquakeData(data) {
  if (!Array.isArray(data)) return [];
  
  return data.map(item => ({
    Title: item.title || "Sismo Detectado",
    City: item.city || "Cerca de la ciudad",
    Subnational: item.subnational || "Zona cercana",
    Date: formatDate(item.date),
    Magnitude: (item.magnitude !== undefined && item.magnitude !== null) 
      ? (Math.round(parseFloat(item.magnitude) * 100) / 100).toString() 
      : "N/A",
    url: item.url || "#",
    locations: [
      parseFloat(item.latitude || 0),
      parseFloat(item.longitude || 0)
    ]
  }));
}

/**
 * Alias for formatEarthquakeData to maintain compatibility with existing services.
 */
export const sortObj = formatEarthquakeData;

/**
 * Generates the local URL for the seismic API.
 * Handles endpoint mapping and parameter cleaning.
 */
export const generateLocalUrl = (requirements, name) => {
  // const baseUrl = "http://localhost:8000/api";
  const baseUrl = "https://api-earthquake.onrender.com/api";
  let endpoint = "/earthquakes/";
  const params = new URLSearchParams();

  // Helper to ensure clean numeric inputs
  const clean = (val) => String(val || "").replace(/[^-.\d]/g, "").trim();

  const commonKeys = ['latitude', 'longitude', 'radius', 'count', 'magnitude'];

  if (name === "GenericRecent" || name === "RecentEarthquakes") {
    endpoint = "/recentEarthquakes/";
    if (name === "RecentEarthquakes") {
      commonKeys.forEach(key => {
        if (requirements[key] !== undefined && requirements[key] !== null) {
          params.append(key, clean(requirements[key]));
        }
      });
      if (requirements.units) {
        params.append("units", ["kilometers", "km"].includes(requirements.units) ? "km" : requirements.units);
      }
      if (requirements.interval) {
        params.append("interval", String(requirements.interval).trim());
      }
    }
  } else if (name === "LatestEarthquakeNearMe") {
    endpoint = "/recentEarthquakes/";
    params.append("count", "1");
    ['latitude', 'longitude'].forEach(key => {
      if (requirements[key] !== undefined && requirements[key] !== null) {
        params.append(key, clean(requirements[key]));
      }
    });
  } else if (name.startsWith("AllEarthquakes,")) {
    // Maps to: /api/feeds/{segment}/{magnitude}/
    // Each period defines its own path segment and magnitude threshold
    const periodMap = {
      "PastHour":  { segment: "past-hour",  magnitude: "m2.5" },
      "PastDay":   { segment: "past-day",   magnitude: "m4.5" },
      "Past7Days": { segment: "past-week",  magnitude: "m2.5" },
      "Past30Days":{ segment: "past-month", magnitude: "m2.5" },
    };
    const period    = name.split(",")[1];
    const config    = periodMap[period] || periodMap["PastDay"];
    endpoint = `/feeds/${config.segment}/${config.magnitude}/`;
    return { apiUrl: `${baseUrl}${endpoint}`, options: { method: 'GET' } };
  } else if (["LocalEarthquakes", "Earthquakes", "EarthquakesByDate"].includes(name)) {
    endpoint = "/earthquakes/";
    commonKeys.forEach(key => {
      if (requirements[key] !== undefined && requirements[key] !== null) {
        params.append(key, clean(requirements[key]));
      }
    });
  } else {
    return null;
  }

  const queryString = params.toString();
  const finalUrl = queryString ? `${baseUrl}${endpoint}?${queryString}` : `${baseUrl}${endpoint}`;
  
  return {
    apiUrl: finalUrl,
    options: { method: 'GET' }
  };
};
