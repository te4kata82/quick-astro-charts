import { isCosmogram } from "./utils";

let elements = {};

export function init() {
  const settingsEl = document.getElementById('settings');
  settingsEl.querySelectorAll('[data-prop]').forEach(el => {
    if (elements[el.dataset.prop]) {
      throw Error(`Duplicate element: ${el.dataset.prop}`);
    }
    elements[el.dataset.prop] = el;
  });
}

export function display({ horoscope }, options) {
  displayTime({ horoscope });
  elements.mode.textContent = options.settings.mode;
  elements.type.textContent = options.settings.type;
  const coord = [
    horoscope.origin.latitude,
    horoscope.origin.longitude,
  ].join(',');
  const place = options.origin.country || options.origin.city ? [
    options.origin.city,
    options.origin.country,
  ].join(', ') : '';
  elements.place.textContent = place || coord;
  elements.place.href = `https://google.com/maps?q=${coord}`;
  elements.zodiac.textContent = horoscope._zodiac;
  elements.houseSystem.parentElement.style.display = isCosmogram(options.settings) ?
    'none' : 'list-item';
  elements.houseSystem.textContent = horoscope._houseSystem;
}

export function displayTime({ horoscope }) {
  elements.time.textContent = horoscope.origin.localTimeFormatted.replace('T', ' ');
}