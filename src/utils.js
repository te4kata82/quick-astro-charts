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

export function getSearchParams() {
  const searchParams = new URLSearchParams(window.location.search);
  return Object.fromEntries(searchParams.entries());
}

export function parseDate(str) {
  const pieces = str.split('-');
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

export function parsePlace(str) {
  const pieces = str.split(',');
  const place = {
    latitude: Number.parseFloat(pieces[0]),
    longitude: Number.parseFloat(pieces[1]),
  };
  if (pieces.length !== 2 || Object.values(place).some(v => !Number.isFinite(v))) {
    throw Error(`Cannot parse place: ${str}`);
  }
  return place;
}

export function isCosmogram(settings) {
  return settings.mode === 'cosmogram';
}

export function isTransit(settings) {
  return settings.type === 'transit';
}

export function displayLoader(display) {
  const spinner = document.getElementById('spinner-overlay');
  const hiddenNow = spinner.classList.contains('hidden');
  if (display && hiddenNow) {
    spinner.classList.remove('hidden');
  } else if (!display && !hiddenNow) {
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