import { calculate } from "./processor";
import * as chart from "./chart";
import * as text from "./text";
import { getCurrentTime, getOptions, toggleSpinner } from "./utils";

import "./styles/base.css";
import "./styles/spinner.css";
import "./styles/chart.css";

const UPDATE_INTERVAL = 1000;

function updateChart(options) {
  const result = calculate(options);
  text.displayTime(result, options);
  chart.draw(result.data, options.settings);
}

(async () => {
  const options = await getOptions(window.location.search);
  console.log("options:");
  console.dir(options);

  const result = calculate(options);

  console.log("result:");
  console.dir(result);

  text.init();
  text.display(result, options);

  chart.init(options.settings);

  chart.draw(result.data, options.settings);

  toggleSpinner();

  if (options.origin.isCurrentTime) {
    setInterval(() => updateChart({
      ...options,
      origin: {
        ...options.origin,
        ...getCurrentTime(),
      }
    }), UPDATE_INTERVAL);
  }
})();
