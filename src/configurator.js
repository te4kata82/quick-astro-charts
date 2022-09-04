import { disableControls, displayLoader, displayLoadingButton, getCurrentLocation, getCurrentOrigin, getCurrentTime, getSearchParams, parseDate, parsePlace, parseTime, triggerEvent } from "./utils";

const DEFAULT_SETTINGS = {
  houseSystem: "placidus",
  mode: "horoscope",
  type: "radix",
  zodiac: "tropical",
  stroke: "",
  bg: "",
  aspectsToAngulars: false,
};

let settingsEl, settingsButtonEl, onChange;

/**
 * Returns initialization settings/options with defaults from
 * an entries array and other sources
 * 
 * @param {array} entries string-keyed property pairs
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
 export async function getParameters(entries) {
  let origin = {}, transit = {};
  const settings = { ...DEFAULT_SETTINGS };
  for (const [k,v] of entries) {
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
    if (el.checked) triggerEvent(el, 'change');
    if (!(el.name in params)) return;
    if (el.type === 'radio') {
      if (el.value === params[el.name]) {
        el.checked = true;
        triggerEvent(el, 'change');
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
  const button = e.currentTarget;
  e.preventDefault();
  displayLoadingButton(button, true);
  const placeInput = button.parentElement.parentElement.querySelector('input.place');
  navigator.geolocation.getCurrentPosition((position) => {
    const coords = [position.coords.latitude, position.coords.longitude].join(',');
    placeInput.value = coords;
    displayLoadingButton(button, false);
  }, (err) => {
    console.error(err);
    alert(err.message);
    displayLoadingButton(button, false);
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

function onReset() {
  setTimeout(() => {
    settingsEl.querySelectorAll('[name]').forEach(el => {
      if (el.checked) triggerEvent(el, 'change');
    });
  }, 0);
}

function onModeChange(e) {
  disableControls(
    [
      settingsEl.querySelector('[name="houseSystem"]').parentElement,
      settingsEl.querySelector('[name="aspectsToAngulars"]').parentElement,
    ],
    e.target.value === 'cosmogram'
  );
}

function onTypeChange(e) {
  disableControls(
    settingsEl.querySelector('section.transit'),
    e.target.value !== 'transit'
  );
}

async function onSubmit(e) {
  e.preventDefault();
  displayLoader(true);
  const formData = new FormData(e.target);
  const paramsObj = formDataToParams(formData);
  const paramsEntries = Object.entries(paramsObj);
  const searchParams = new URLSearchParams(paramsObj);
  history.pushState(paramsEntries, '', `?${searchParams}`);
  onChange(await getParameters(paramsEntries));
  onClose();
}

async function onPopState(e) {
  displayLoader(true);
  onChange(await getParameters(e.state ?? []));
}

export function init(changeHandler) {
  onChange = changeHandler;
  settingsEl = document.getElementById('settings');
  settingsButtonEl = document.querySelector('button.settings');
  settingsButtonEl.addEventListener('click', onOpen);
  settingsEl.querySelector('form').addEventListener('submit', onSubmit);
  settingsEl.querySelector('button.close').addEventListener('click', onClose);
  settingsEl.querySelector('button.reset').addEventListener('click', onReset);
  settingsEl.querySelectorAll('button.geolocate').forEach(_ => _.addEventListener('click', onGeolocate));
  settingsEl.querySelectorAll('[name="mode"]').forEach(_ => _.addEventListener('change', onModeChange));
  settingsEl.querySelectorAll('[name="type"]').forEach(_ => _.addEventListener('change', onTypeChange));
  window.addEventListener('popstate', onPopState);
}
