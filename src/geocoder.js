const API_BASE = 'https://eu1.locationiq.com/v1';
const API_KEY = 'pk.3fb4053a2696ee189dfb741bbea64e67';

function buildUrl(method, params) {
  return `${API_BASE}/${method}?format=json&key=${API_KEY}&${new URLSearchParams(params)}`;
}

function addressDetailsToLocality(address) {
  return (address?.village || address?.town || address?.city_district) ?
    [address?.village || address?.town || address?.city_district, address?.city || address?.state || address?.region].filter(Boolean).join(', ') :
    (address?.city || address?.region || address?.state);
}

function formatCountry(address) {
  return address?.country_code?.toUpperCase();
}

export async function geocode(city) {
  const res = await fetch(buildUrl('search', { city, limit: 1, addressdetails: 1 }));
  const data = await res.json();
  return {
    latitude: parseFloat(data[0]?.lat),
    longitude: parseFloat(data[0]?.lon),
    city: addressDetailsToLocality(data[0]?.address),
    country: formatCountry(data[0]?.address),
  };
}

export async function reverseGeocode({ latitude, longitude }) {
  const res = await fetch(buildUrl('reverse', { lat: latitude, lon: longitude, addressdetails: 1 }));
  const data = await res.json();
  return {
    latitude,
    longitude,
    city: addressDetailsToLocality(data?.address),
    country: formatCountry(data?.address),
  };
}