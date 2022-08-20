/**
 * Detect current location with IP geolocation service
 * and use caching
 * 
 * @returns {object} lat,lng
 */
export async function getCurrentLocation() {
  function parseLocation(data) {
    const loc = data.loc.split(',');
    return {
      country: data.country,
      city: data.city ?? data.region,
      latitude: Number(loc[0]),
      longitude: Number(loc[1]),
    };
  }
  try {
    let ipInfo = {};
    if (sessionStorage.qacIpInfo) {
      ipInfo = JSON.parse(sessionStorage.qacIpInfo);
      return parseLocation(ipInfo);
    }
    const res = await fetch('https://ipinfo.io/?token=5f6d5f01c062a5', {
      headers: {
        'Accept': 'application/json',
      }
    });
    const json = await res.json();
    for (const p of ['city','region','country','loc','timezone']) {
      ipInfo[p] = json[p];
    }
    sessionStorage.qacIpInfo = JSON.stringify(ipInfo);
    return parseLocation(ipInfo);
  } catch (e) {
    alert(`Location autodetection error: ${e}`);
    throw e;
  }
}

export function getCurrentDate() {
  const now = new Date();
  return {
    year: now.getFullYear(),
    month: now.getMonth(), // 0 = January, 11 = December!
    date: now.getDate(),
    hour: now.getHours(),
    minute: now.getMinutes(),
    second: now.getSeconds(),
  };
}

export async function getCurrentOrigin() {
  return {
    ...getCurrentDate(),
    ...(await getCurrentLocation()),
  };
}

/**
 * Returns initialization settings/options with defaults from URL
 * and other sources
 * 
 * @param {string} paramsString window.location.search
 * @returns {Promise} Promise of options with such format: {
 *  {object} origin,  // See src/processor.js
 *    settings: {
 *      {string} mode = one of the following: ['horoscope','cosmogram']
 *      {string} type = one of the following: ['radix','transit']
 *    }
 *  }
 */
export async function getOptions(paramsString) {
  const searchParams = new URLSearchParams(paramsString);
  let origin = {};
  const settings = { type: 'radix' };
  for (const [k,v] of searchParams) {
    if (['year','month','date','hour','minute','latitude','longitude'].includes(k)) {
      origin[k] = Number(v);
    }
    if (['mode','stroke','bg','houseSystem','zodiac'].includes(k)) {
      settings[k] = v;
    }
  }
  if (Object.keys(origin).length === 0) {
    origin = await getCurrentOrigin();
  }
  if (!origin.latitude && !origin.longitude) {
    Object.assign(origin, await getCurrentLocation());
  }
  if (!origin.year && !origin.month && !origin.date) {
    Object.assign(origin, getCurrentDate());
  }
  if (!origin.hour && !origin.minute) {
    if (!settings.mode) settings.mode = 'cosmogram';
    Object.assign(origin, { hour: 12, minute: 0 });
  }
  if (!settings.mode) settings.mode = 'horoscope';
  return { origin, settings };
}

export function isCosmogram(settings) {
  return settings.mode === 'cosmogram';
}
