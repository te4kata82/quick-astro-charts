import "./../lib/astrochart";
import { isCosmogram } from "./utils";

let chart;

const DEFAULT_SETTINGS = {
  // SYMBOL_SCALE: 1.2,
  POINTS_TEXT_SIZE: 10,
  MARGIN: 40,
  CIRCLE_COLOR: "#CCC",
  LINE_COLOR: "#CCC",
  CUSPS_FONT_COLOR: "#CCC",
  COLOR_ARIES: "#EA4335",
  COLOR_TAURUS: "#34A853",
  COLOR_GEMINI: "#FBBC04",
  COLOR_CANCER: "#4285F4",
  COLOR_LEO: "#EA4335",
  COLOR_VIRGO: "#34A853",
  COLOR_LIBRA: "#FBBC04",
  COLOR_SCORPIO: "#4285F4",
  COLOR_SAGITTARIUS: "#EA4335",
  COLOR_CAPRICORN: "#34A853",
  COLOR_AQUARIUS: "#FBBC04",
  COLOR_PISCES: "#4285F4",
  ASPECTS: {
    "conjunction": { "degree": 0, "orbit": 10, "color": "blue" },
    "sextile": { "degree": 60, "orbit": 10, "color": "cyan" },
    "square": { "degree": 90, "orbit": 10, "color": "red" },
    "trine": { "degree": 120, "orbit": 10, "color": "green" },
    "opposition": { "degree": 180, "orbit": 10, "color": "orange" }
  }
};

const DEFAULT_CUSPS = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];

function getChartSettings(settings) {
  return {
    ...DEFAULT_SETTINGS,
    ...(isCosmogram(settings) ?
        {
          SYMBOL_AXIS_FONT_COLOR: 'transparent',
          SHIFT_IN_DEGREES: 270,
        } : {}),
    ...(settings.stroke ?
        {
          STROKE_ONLY: true,
          CIRCLE_COLOR: `#${settings.stroke}`,
          LINE_COLOR: `#${settings.stroke}`,
          CUSPS_FONT_COLOR: `#${settings.stroke}`,
          COLOR_BACKGROUND: 'transparent',
          POINTS_COLOR: `#${settings.stroke}`,
          SIGNS_COLOR: `#${settings.stroke}`,
          SYMBOL_AXIS_FONT_COLOR: `#${settings.stroke}`,
        } : {}),
  }
}

export function init(settings) {
  console.log("astrology:");
  console.dir(astrology);

  const chartSettings = getChartSettings(settings);
  chart = new astrology.Chart('chart', 600, 600, chartSettings);
  console.log("chart:");
  console.dir(chart);  
}

export function draw(data, settings) {
  if (!chart) throw Error("Chart not initialized");
  const radix = chart.radix({
    ...data,
    cusps: isCosmogram(settings) ? DEFAULT_CUSPS : data.cusps,
  });
  // radix.addPointsOfInterest({ As: [asc], Mc: [mc], Ds: [desc], Ic: [ic] });
  radix.aspects();

  console.log("radix:");
  console.dir(radix);

  if (settings.bg) {
    window.document.body.style.background = `#${settings.bg}`;
  }
}
