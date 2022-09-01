import { isCosmogram, isTransit } from "./utils";

let elements = {};

function formatPlace(data, origin) {
  const coord = [
    data.horoscope.origin.latitude,
    data.horoscope.origin.longitude,
  ].join(',');
  const place = origin.country || origin.city ? [
    origin.city,
    origin.country,
  ].join(', ') : '';
  return {
    name: place || coord,
    link: `https://google.com/maps?q=${coord}`,
  };
}

export function init() {
  const paramsEl = document.getElementById('parameters');
  paramsEl.querySelectorAll('[data-prop]').forEach(el => {
    if (elements[el.dataset.prop]) {
      throw Error(`Duplicate element: ${el.dataset.prop}`);
    }
    elements[el.dataset.prop] = el;
  });
}

export function display(dataRadix, dataTransit, origin, transit, settings) {
  const { horoscope } = dataRadix;
  displayTime(dataRadix, dataTransit, settings);
  elements.mode.textContent = settings.mode;
  elements.type.textContent = settings.type;
  const originPlace = formatPlace(dataRadix, origin);
  elements.place.textContent = originPlace.name;
  elements.place.href = originPlace.link;
  if (isTransit(settings)) {
    const transitPlace = formatPlace(dataTransit, transit);
    elements.transitPlace.textContent = transitPlace.name;
    elements.transitPlace.href = transitPlace.link;
    elements.transitPlace.parentElement.style.display = 'list-item';
  } else {
    elements.transitPlace.parentElement.style.display = 'none';
  }
  elements.zodiac.textContent = horoscope._zodiac;
  elements.houseSystem.parentElement.style.display = isCosmogram(settings) ?
    'none' : 'list-item';
  elements.houseSystem.textContent = horoscope._houseSystem;
}

export function displayTime(dataRadix, dataTransit, settings) {
  elements.time.textContent = dataRadix.horoscope.origin.localTimeFormatted.replace('T', ' ');
  if (isTransit(settings)) {
    elements.transitTime.textContent = dataTransit.horoscope.origin.localTimeFormatted.replace('T', ' ');
    elements.transitTime.parentElement.style.display = 'list-item';
  } else {
    elements.transitTime.parentElement.style.display = 'none';
  }
}
