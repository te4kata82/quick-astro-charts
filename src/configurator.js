import { getCurrentLocation, getCurrentOrigin, getCurrentTime, getSearchParams, parseDate, parsePlace, parseTime, toggleSpinner } from "./utils";

const DEFAULT_SETTINGS = {
  houseSystem: "placidus",
  mode: "horoscope",
  type: "radix",
  zodiac: "tropical",
  stroke: "",
  bg: "",
  aspectsToAngulars: false,
};

let settingsEl, settingsButtonEl;

/**
 * Returns initialization settings/options with defaults from URL
 * and other sources
 * 
 * @param {string} paramsString window.location.search
 * @returns {Promise} Promise of options with such format: {
 *  {object} origin = with keys: ['year','month','date','hour','minute','latitude','longitude'],
 *  {object} transit = with keys: ['tyear','tmonth','tdate','thour','tminute','tlatitude','tlongitude'],
 *    settings: {
 *      {string} mode = one of the following: ['horoscope','cosmogram']
 *      {string} type = one of the following: ['radix','transit']
 *      {string} houseSystem = one of the following: ['placidus', ...] // See processor.js
 *      {string} zodiac = one of the following: ['tropical','sidereal']
 *      {string} stroke = foreground hex color
 *      {string} bg = background hex color
 *      {boolean} aspectsToAngulars = whether to draw aspects to primary angles
 *    }
 *  }
 */
 export async function getParameters(paramsString) {
  const searchParams = new URLSearchParams(paramsString);
  let origin = {}, transit = {};
  const settings = { ...DEFAULT_SETTINGS };
  for (const [k,v] of searchParams) {
    switch (k) {
      case 'date': Object.assign(origin, parseDate(v)); break;
      case 'time': Object.assign(origin, parseTime(v)); break;
      case 'place': Object.assign(origin, parsePlace(v)); break;
      case 'tdate': Object.assign(transit, parseDate(v)); break;
      case 'ttime': Object.assign(transit, parseTime(v)); break;
      case 'tplace': Object.assign(transit, parsePlace(v)); break;
      default: {
        if (Object.keys(DEFAULT_SETTINGS).includes(k)) {
          settings[k] = v;
        } else {
          throw Error(`Unknown parameter: ${k}`);
        }
      }
    }
  }
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
      Object.assign(origin, { hour: 12, minute: 0 });
    }
  }
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
  return { origin, transit, settings };
}

function fillForm() {
  const params = getSearchParams();
  settingsEl.querySelectorAll('[name]').forEach(el => {
    if (!(el.name in params)) return;
    if (el.type === 'radio') {
      if (el.value === params[el.name]) {
        el.checked = true;
      }
    } else if (el.type === 'checkbox') {
      el.checked = !!params[el.name];
    } else {
      el.value = params[el.name];
    }
  });
}

function formDataToParams(formData) {
  const paramsObj = {};
  for (const [k,v] of formData.entries()) {
    if (!v || v === DEFAULT_SETTINGS[k]) continue;
    paramsObj[k] = v;
  }
  if (paramsObj.bg && paramsObj.bg === paramsObj.stroke) {
    delete paramsObj.bg;
    delete paramsObj.stroke;
  }
  return paramsObj;
}

function onGeolocate(e) {
  e.preventDefault();
  const placeEl = e.currentTarget.parentElement.querySelector('[name="place"]');
  navigator.geolocation.getCurrentPosition((position) => {
    const coords = [position.coords.latitude, position.coords.longitude].join(',');
    placeEl.value = coords;
  });
}

function onOpen(e) {
  fillForm();
  settingsEl.classList.remove('hidden');
  e.currentTarget.disabled = true;
}

function onClose() {
  settingsEl.classList.add('hidden');
  settingsButtonEl.disabled = false;
}

function onSubmit(e) {
  e.preventDefault();
  toggleSpinner();
  const formData = new FormData(e.target);
  const paramsObj = formDataToParams(formData);
  const searchParams = new URLSearchParams(paramsObj);
  // console.dir({ formData, paramsObj, searchParams: searchParams.toString() });
  window.location.search = searchParams.toString();
}

export function init() {
  settingsEl = document.getElementById('settings');
  settingsButtonEl = document.querySelector('button.settings');
  settingsButtonEl.addEventListener('click', onOpen);
  settingsEl.querySelector('form').addEventListener('submit', onSubmit);
  settingsEl.querySelector('button.close').addEventListener('click', onClose);
  settingsEl.querySelectorAll('button.geolocate').forEach(el => {
    el.addEventListener('click', onGeolocate);
  });
}