import { calculate } from "./processor";
import * as chart from "./chart";
import { getOptions } from "./utils";

(async () => {
  const options = await getOptions(window.location.search);
  console.log("options:");
  console.dir(options);

  const result = calculate(options);

  console.log("result:");
  console.dir(result);

  chart.init(options.settings);

  chart.draw(result.data, options.settings);  
})();
