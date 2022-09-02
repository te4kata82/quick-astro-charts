# Quick Astro Charts

A webapp for quickly creating and displaying Western astrological charts. The chart is drawn immediately, if the time or place is not specified determines current time and place and updates every second automatically. Optimized for displaying on screens of any size and usage in digital signage. Uses only most established and verified astrology concepts.

The goal is to provide a lightweight, flexible and simple to use app for astrologiers which doesn't require any backend and works entirely in the browser without the need for constant internet connection.

## Features

* Fully responsive layout
* Works without page reload
* Uses minimum dependencies
* Support of Radix and Transit chart types
* All the settings are optional and kept in the URL
* Refined visual appearance and custom theme support
* Uses IP based Geolocation and HTML5 Geolocation API
* Uses [Moshier](http://www.moshier.net/) Ephemeris ES6 Re-implementation, inaccuracy < 1°, applicable at -3000 B.C.E - 3000 C.E.

## Settings

The following options can be modified by using the settings dialog:
* Mode:
  * Horoscope *(primary angles oriented, w/ houses)*
  * Cosmogram *(zodiac circle oriented, w/o houses)*
* Type:
  * Radix (Natal)
  * Transit *(interrelation of celestial bodies configurations at two different points of space and time)*
* Zodiac *(ecliptic coordinate system)*:
  * Tropical *(vernal equinox based, used by Western astrology)*
  * Sidereal *(fixed stars based, used by Vedic astrology)*
* House System:
  * Placidus *(default, not applicable for places beyond polar circles)*
  * Koch
  * Campanus
  * Whole Sign
  * Equal House
  * Regiomontanus
  * Topocentric
* Origin (Radix) *(current time and place by default)*:
  * Date
  * Time *(12:00 by default)*
  * Place *(Latitude and longitude: two float numbers with a dot separated by a comma)*
* Transit *(current time and place by default)*:
  * Date
  * Time *(12:00 by default)*
  * Place *(Latitude and longitude: two float numbers with a dot separated by a comma)*
* Auxiliary *(extra settings)*:
  * Background *(background color for custom two-color mode)*
  * Foreground *(foreground color for custom two-color mode)*
* Aspects To Primary Angles *(whether to draw aspects to AS/DS/MC/IC)*

## Sources

Uses **Circular Natal Horoscope JS** astrological calculations library by @0xStarcat, as well as the **AstroChart** SVG drawing library by @Kibo.

**See it live at** [https://ilyai.github.io/quick-astro-charts](https://ilyai.github.io/quick-astro-charts).
