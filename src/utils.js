import * as geocoder from './geocoder';

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
    console.error(`IP Geolocation error: ${e}`);
    try {
      return await geolocate();
    } catch (e) {
      console.error(`HTML5 Geolocation error: ${e.message}`);
      alert(`Geolocation error: ${e.message}`);
      return { latitude: 0.0, longitude: 0.0 };
    }
  }
}

export async function geolocate() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((position) => {
      const [latitude, longitude] = [position.coords.latitude, position.coords.longitude].map(truncateFloat);
      resolve({ latitude, longitude });
    }, (err) => {
      reject(err);
    });
  });
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

export function getSearchParams() {
  const searchParams = new URLSearchParams(window.location.search);
  return Object.fromEntries(searchParams.entries());
}

export function parseDate(str) {
  const pieces = (str.includes('.') ? str.replace(/(\d{2})\.(\d{2})\.(\d{4})/, '$3-$2-$1') : str).split('-');
  const month = Number.parseInt(pieces[1]);
  const date = {
    year: Number.parseInt(pieces[0]),
    month: Number.isInteger(month) && month !== 0 ? month - 1 : null,
    date: Number.parseInt(pieces[2]),
  };
  if (pieces.length !== 3 || Object.values(date).some(v => !Number.isInteger(v))) {
    throw Error(`Cannot parse date: ${str}`);
  }
  return date;
}

export function parseTime(str) {
  const pieces = str.split(':');
  const time = {
    hour: Number.parseInt(pieces[0]),
    minute: Number.parseInt(pieces[1]),
  };
  if (pieces.length !== 2 || Object.values(time).some(v => !Number.isInteger(v))) {
    throw Error(`Cannot parse time: ${str}`);
  }
  return time;
}

export async function parsePlace(str) {
  let place = {};
  if (isCoordinates(str)) {
    const pieces = str.split(',');
    place = {
      latitude: parseFloat(pieces[0]),
      longitude: parseFloat(pieces[1]),
    };
    if (!hasNumericProps(place, ['latitude','longitude'])) {
      throw Error(`Cannot parse coordinates (lat,lng): ${str}`);
    }
    try {
      place = await geocoder.reverseGeocode(place);
    } catch (e) {
      console.error(`Cannot reverse-geocode place: ${str}`, e);
    }
  } else {
    place = await geocoder.geocode(str);
    if (!hasNumericProps(place, ['latitude','longitude'])) {
      throw Error(`Cannot geocode place: ${str}`);
    }
  }
  return place;
}

export function truncateFloat(value) {
  if (!Number.isFinite(value)) return value;
  return Number.parseFloat(value.toFixed(5));
}

export function hasNumericProps(obj, props) {
  return props.every(p => Number.isFinite(obj[p]));
}

export function isCoordinates(str) {
  return /^[ ,.\d]+$/.test(str);
}

export function isCosmogram(settings) {
  return settings.mode === 'cosmogram';
}

export function isTransit(settings) {
  return settings.type === 'transit';
}

export function displayLoader(display) {
  const spinnerOverlay = document.getElementById('spinner-overlay');
  const spinner = spinnerOverlay.querySelector('.spinner');
  const error = spinnerOverlay.querySelector('.error');
  if (display) {
    if (!error.classList.contains('hidden')) {
      error.classList.add('hidden');
    }
    spinner.classList.remove('hidden');
    spinnerOverlay.classList.remove('hidden');
  } else if (!display && !spinnerOverlay.classList.contains('hidden')) {
    spinnerOverlay.classList.add('hidden');
  }
}

export function displayErrorPage(message) {
  const spinnerOverlay = document.getElementById('spinner-overlay');
  const spinner = spinnerOverlay.querySelector('.spinner');
  const error = spinnerOverlay.querySelector('.error');
  error.querySelector('.message').textContent = message ?? '';
  error.classList.remove('hidden');
  if (spinnerOverlay.classList.contains('hidden')) {
    spinnerOverlay.classList.remove('hidden');
  }
  if (!spinner.classList.contains('hidden')) {
    spinner.classList.add('hidden');
  }
}

export function displayLoadingButton(button, isLoading) {
  button.disabled = isLoading;
  if (isLoading && !button.classList.contains('loading')) {
    button.classList.add('loading');
  } else if (!isLoading && button.classList.contains('loading')) {
    button.classList.remove('loading');
  }
}

export function disableControls(sections, value) {
  (Array.isArray(sections) ? sections : [sections]).forEach(section => {
    section.querySelectorAll('button,[name]').forEach(el => el.disabled = value);
  });
}

export function triggerEvent(element, eventName) {
  const event = new Event(eventName);
  element.dispatchEvent(event);
}

export function applyTheme(fgColor, bgColor) {
  const isLightColor = (hex) => {
    const c = hex.substring(1);
    const rgb = parseInt(c, 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >>  8) & 0xff;
    const b = (rgb >>  0) & 0xff;
    const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    return luma > 128;
  };
  document.documentElement.style.setProperty('--primary-fg-color', fgColor ?? '#263238');
  document.documentElement.style.setProperty('--lighter-fg-color', fgColor ?? '#90A4AE');
  document.documentElement.style.setProperty('--primary-bg-color', bgColor ?? '#FFFFFF');
  document.documentElement.style.colorScheme = fgColor === bgColor || isLightColor(bgColor) ? 'light' : 'dark';
}

export function withErrorHandling(f, handler = undefined) {
  return async (...args) => {
    try {
      await f(...args);
    } catch (e) {
      if (handler) handler(e);
      else {
        alert(e);
        displayLoader(false);
      }
      throw e;
    }
  };
}

export function debugLog(...args) {
  if (window.qacDebugLogging) console.debug(...args);
}