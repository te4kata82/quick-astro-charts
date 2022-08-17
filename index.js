import { Origin, Horoscope } from "circular-natal-horoscope-js";
import "./lib/astrochart";

//////////
// Origin
//////////
// This class automatically derives the local timezone from latitude/longitude coordinates
// and calculates UTC time with respect to timezone and historical daylight savings time.
// Only works for C.E. date (> 0).
/////////
// * int year: value >= 0 C.E.
// * int month: (0 = january ...11 = december)
// * int date: (1...31)
// * int hours = local time - hours value (0...23)
// * int minute = local time - minute value (0...59)
// * float latitude = latitude in decimal format (-90.00...90.00)
// * float longitude = longitude in decimal format (-180.00...180.00)

// December 1st, 2020 - 430pm
const origin = new Origin({
  year: 2020,
  month: 11, // 0 = January, 11 = December!
  date: 1,
  hour: 16,
  minute: 30,
  latitude: 40.0,
  longitude: -70.0,
});

function getCurrentOrigin() {
  const now = new Date();
  return {
    year: now.getFullYear(),
    month: now.getMonth(), // 0 = January, 11 = December!
    date: now.getDate(),
    hour: now.getHours(),
    minute: now.getMinutes(),
    latitude: 41.732438,
    longitude: 44.7688134,
  };
}

//////////
// Horoscope
//////////
// This class contains horoscope chart calculations
/////////
// * Origin origin: instance of the Origin class
// * string houseSystem: one of the following: ['placidus', 'koch', 'campanus', 'whole-sign', 'equal-house', 'regiomontanus', 'topocentric'] - full list validated in self.HouseSystems
// * string zodiac: one of the following: ['sidereal', 'tropical'] - full list validated self.ZodiacSystems
// * array aspectPoints = an array containing all or none of the strings "bodies", "points", or "angles" to determine which starting points will be used in aspect generation
// * array aspectWithPoints = an array containing all or none of the strings "bodies", "points", or "angles" to determine ending points will be used in aspect generation
// * array aspectTypes = an array containing all or none of the following: "major", "minor", "conjunction", "opposition", etc to determine which aspects to calculate.
// * object customOrbs = an object with specific keys set to override the default orbs and set your own for aspect calculation.
// * string language = the language code (en, es, etc) which will return labels and results in a specific language, if configured.
//
// *NOTE: "bodies" = planets, "points" = lunar nodes / lilith, "angles" = ascendant / midheaven
// *NOTE: You can also pass in individual bodies, points, or angles into aspectPoints or aspectWithPoints
// * example: { aspectPoints: ["sun"], aspectWithPoints: ["moon"], aspectTypes: ["major", "quincunx"] }
// * will only calculate sun to moon major or quincunx aspects if they exist
// * All usable keys found in ./src/constant.js under BODIES, POINTS, ANGLES

const currentOrigin = getCurrentOrigin();
console.log("current origin:");
console.dir(currentOrigin);

const horoscope = new Horoscope({
  origin: new Origin(currentOrigin),
  houseSystem: "placidus",
  zodiac: "tropical",
  aspectPoints: ['bodies'/*, 'points', 'angles'*/],
  aspectWithPoints: ['bodies'/*, 'points', 'angles'*/],
  aspectTypes: ["major"],
  customOrbs: {},
  language: 'en'
});

console.log("horoscope:");
console.dir(horoscope);
console.log("astrology:");
console.dir(astrology);

const planets = Object.assign(
  {},
  ...horoscope.CelestialBodies.all.concat(horoscope.CelestialPoints.all)
      .filter(body => !['sirius','southnode'].includes(body.key))
      .map((body) => {
        const key = body.key === 'northnode' ?
          'NNode' :
          body.key.charAt(0).toUpperCase() + body.key.slice(1);
        return { [key]: [body.ChartPosition.Ecliptic.DecimalDegrees] };
      })
);
console.log("planets:");
console.dir(planets);

const cusps = horoscope.Houses.map((cusp) => {
  return cusp.ChartPosition.StartPosition.Ecliptic.DecimalDegrees;
});
console.log("cusps:");
console.dir(cusps);

const chart = new astrology.Chart('chart', 600, 600, {
  // SYMBOL_SCALE: 1.2,
  POINTS_TEXT_SIZE: 12,
  ASPECTS: {
    "conjunction": { "degree": 0, "orbit": 8, "color": "blue" },
    "sextile": { "degree": 60, "orbit": 6, "color": "cyan" },
    "square": { "degree": 90, "orbit": 7, "color": "red" },
    "trine": { "degree": 120, "orbit": 8, "color": "green" },
    "opposition": { "degree": 180, "orbit": 8, "color": "orange" }
  }
});
const radix = chart.radix({ planets, cusps, /*[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330]*/ });
// radix.addPointsOfInterest({ As: [asc], Mc: [mc], Ds: [desc], Ic: [ic] });
radix.aspects();