import { calculate } from "./processor";
import * as chart from "./chart";
import * as text from "./text";
import { getOptions, toggleSpinner } from "./utils";

import "./styles/base.css";
import "./styles/spinner.css";
import "./styles/chart.css";

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
})();
