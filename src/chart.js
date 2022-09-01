import "./../lib/astrochart";
import { isCosmogram, isTransit } from "./utils";

let chart;

const DEFAULT_SETTINGS = {
  STROKE_ONLY: false,
  SYMBOL_SCALE: 1,
  POINTS_TEXT_SIZE: 10,
  MARGIN: 40,
  SHIFT_IN_DEGREES: 180,
  COLOR_BACKGROUND: "#FFFFFF",
  POINTS_COLOR: "#263238",
  SIGNS_COLOR: "#263238",
  CIRCLE_COLOR: "#90A4AE",
  LINE_COLOR: "#90A4AE",
  CUSPS_FONT_COLOR: "#90A4AE",
  SYMBOL_AXIS_FONT_COLOR: "#90A4AE",
  COLOR_ARIES: "#EF5350",
  COLOR_TAURUS: "#66BB6A",
  COLOR_GEMINI: "#FFEE58",
  COLOR_CANCER: "#42A5F5",
  COLOR_LEO: "#EF5350",
  COLOR_VIRGO: "#66BB6A",
  COLOR_LIBRA: "#FFEE58",
  COLOR_SCORPIO: "#42A5F5",
  COLOR_SAGITTARIUS: "#EF5350",
  COLOR_CAPRICORN: "#66BB6A",
  COLOR_AQUARIUS: "#FFEE58",
  COLOR_PISCES: "#42A5F5",
  ASPECTS: {
    "conjunction": { "degree": 0, "orbit": 10, "color": "#2196F3" },
    "sextile": { "degree": 60, "orbit": 10, "color": "#00BCD4" },
    "square": { "degree": 90, "orbit": 10, "color": "#F44336" },
    "trine": { "degree": 120, "orbit": 10, "color": "#4CAF50" },
    "opposition": { "degree": 180, "orbit": 10, "color": "#FF9800" }
  }
};

function getChartSettings(settings) {
  return {
    ...DEFAULT_SETTINGS,
    ...(settings.stroke ?
        {
          STROKE_ONLY: true,
          CIRCLE_COLOR: settings.stroke,
          LINE_COLOR: settings.stroke,
          CUSPS_FONT_COLOR: settings.stroke,
          COLOR_BACKGROUND: 'transparent',
          POINTS_COLOR: settings.stroke,
          SIGNS_COLOR: settings.stroke,
          SYMBOL_AXIS_FONT_COLOR: settings.stroke,
        } : {}),
    ...(isCosmogram(settings) ?
        {
          SYMBOL_AXIS_FONT_COLOR: 'transparent',
          SHIFT_IN_DEGREES: 270,
        } : {}),
    ...(isTransit(settings) ?
        {
          MARGIN: 80,
          SYMBOL_SCALE: 0.8,
        } : {}),
  }
}

function areChartSettingsChanged(settings) {
  return Object.keys(settings).some(key => settings[key] !== astrology[key]);
}

export function init(chartSettings) {
  if (!chartSettings) return;

  const chartEl = document.getElementById('chart');
  if (chartEl.children.length > 0) chartEl.replaceChildren();

  chart = new astrology.Chart('chart', 600, 600, chartSettings);
  console.debug("astrology.Chart: %o", chart);
}

export function draw(dataRadix, dataTransit, settings) {
  const chartSettings = getChartSettings(settings);
  if (!chart || areChartSettingsChanged(chartSettings)) {
    init(chartSettings);
  }
  const radix = chart.radix(dataRadix);

  // Aspect calculation
  // default is planet to planet, but it is possible add some important points:
  if (settings.aspectsToAngulars && !isCosmogram(settings)) {
    radix.addPointsOfInterest({
      "As":[dataRadix.cusps[0]],
      "Ic":[dataRadix.cusps[3]],
      "Ds":[dataRadix.cusps[6]],
      "Mc":[dataRadix.cusps[9]],
    });
  }

  if (isTransit(settings)) {
    const transit = radix.transit(dataTransit);
    transit.aspects();
  } else {
    radix.aspects();
  }
}
