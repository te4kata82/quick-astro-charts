import { Origin, Horoscope } from "circular-natal-horoscope-js";

export function calculate(options) {
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
  const origin = new Origin(options.origin);

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

  const horoscope = new Horoscope({
    origin,
    houseSystem: options.settings.houseSystem ?? "placidus",
    zodiac: options.settings.zodiac ?? "tropical",
    aspectPoints: ['bodies'/*, 'points', 'angles'*/],
    aspectWithPoints: ['bodies'/*, 'points', 'angles'*/],
    aspectTypes: ["major"],
    customOrbs: {},
    language: 'en'
  });
  console.log("horoscope:");
  console.dir(horoscope);

  const planets = Object.assign(
    {},
    ...horoscope.CelestialBodies.all.concat(horoscope.CelestialPoints.all)
        .filter(body => !['sirius','southnode'].includes(body.key))
        .map((body) => {
          const key = body.key === 'northnode' ?
            'NNode' :
            body.key.charAt(0).toUpperCase() + body.key.slice(1);
          const speed = horoscope.Ephemeris[body.key]?.motion?.oneSecondMotionAmount;
          const value = [body.ChartPosition.Ecliptic.DecimalDegrees];
          if (speed !== undefined) value.push(speed);
          return { [key]: value };
        })
  );

  const cusps = horoscope.Houses.map((cusp) => {
    return cusp.ChartPosition.StartPosition.Ecliptic.DecimalDegrees;
  });

  return {
    horoscope,
    data: { planets, cusps },
  };
}
