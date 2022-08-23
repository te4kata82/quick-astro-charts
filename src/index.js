import { calculate } from "./processor";
import * as chart from "./chart";
import * as text from "./text";
import { getCurrentTime, getOptions, isTransit, toggleSpinner } from "./utils";

import "./styles/base.css";
import "./styles/spinner.css";
import "./styles/chart.css";

const UPDATE_INTERVAL = 1000;

(async () => {
  const { origin, transit, settings } = await getOptions(window.location.search);
  console.log("origin:");
  console.dir(origin);
  console.log("settings:");
  console.dir(settings);

  let dataRadix = calculate(origin, settings);
  console.log("dataRadix:");
  console.dir(dataRadix);

  let dataTransit;
  if (isTransit(settings)) {
    dataTransit = calculate(transit, settings);
  }

  text.init();
  text.display(dataRadix, dataTransit, origin, transit, settings);

  chart.init(settings);
  chart.draw(dataRadix, dataTransit, settings);

  toggleSpinner();

  function updateChart(currentTime) {
    if (isTransit(settings)) {
      dataTransit = calculate({ ...transit, ...currentTime }, settings);
    } else {
      dataRadix = calculate({ ...origin, ...currentTime }, settings); 
    }
    text.displayTime(dataRadix, dataTransit, settings);
    chart.draw(dataRadix, dataTransit, settings);
  }

  if (origin.isCurrentTime || (isTransit(settings) && transit.isCurrentTime)) {
    setInterval(() => updateChart(getCurrentTime(), settings), UPDATE_INTERVAL);
  }
})();
