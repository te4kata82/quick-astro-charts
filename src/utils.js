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

export function getCurrentTime() {
  const now = new Date();
  return {
    year: now.getFullYear(),
    month: now.getMonth(), // 0 = January, 11 = December!
    date: now.getDate(),
    hour: now.getHours(),
    minute: now.getMinutes(),
    second: now.getSeconds(),
    isCurrentTime: true,
  };
}

export async function getCurrentOrigin() {
  return {
    ...getCurrentTime(),
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
  const ORIGIN_KEYS = ['year','month','date','hour','minute','latitude','longitude'];
  const TRANSIT_KEYS = ['tyear','tmonth','tdate','thour','tminute','tlatitude','tlongitude'];
  const SETTINGS_KEYS = ['mode','type','stroke','bg','houseSystem','zodiac'];
  const searchParams = new URLSearchParams(paramsString);
  let origin = {}, transit = {};
  const settings = { type: 'radix' };
  for (const [k,v] of searchParams) {
    if (ORIGIN_KEYS.includes(k)) {
      origin[k] = Number(v);
    }
    if (TRANSIT_KEYS.includes(k)) {
      transit[k.slice(1)] = Number(v);
    }
    if (SETTINGS_KEYS.includes(k)) {
      settings[k] = v;
    }
  }
  if (Object.keys(origin).length < ORIGIN_KEYS.length) {
    if (Object.keys(origin).length === 0) {
      origin = await getCurrentOrigin();
    } else {
      if (!origin.latitude && !origin.longitude) {
        Object.assign(origin, await getCurrentLocation());
      }
      if (!origin.year && !origin.month && !origin.date) {
        Object.assign(origin, getCurrentTime());
      }
      if (!origin.hour && !origin.minute) {
        if (!settings.mode) settings.mode = 'cosmogram';
        Object.assign(origin, { hour: 12, minute: 0 });
      }
    }
  }
  if (Object.keys(transit).length < TRANSIT_KEYS.length && settings.type === 'transit') {
    if (Object.keys(transit) === 0) {
      transit = await getCurrentOrigin();
    } else {
      if (!transit.latitude && !transit.longitude) {
        Object.assign(transit, await getCurrentLocation());
      }
      if (!transit.year && !transit.month && !transit.date) {
        Object.assign(transit, getCurrentTime());
      }
      if (!transit.hour && !transit.minute) {
        Object.assign(transit, { hour: 12, minute: 0 });
      }
    }
  }
  if (!settings.mode) settings.mode = 'horoscope';
  return { origin, transit, settings };
}

export function isCosmogram(settings) {
  return settings.mode === 'cosmogram';
}

export function isTransit(settings) {
  return settings.type === 'transit';
}

export function toggleSpinner() {
  const spinner = document.getElementsByClassName('spinner')[0];
  const container = document.getElementById('container');
  if (spinner.classList.contains('hidden')) {
    spinner.classList.remove('hidden');
    container.classList.add('hidden');
  } else {
    spinner.classList.add('hidden');
    container.classList.remove('hidden');
  }
}