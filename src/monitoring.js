import * as Sentry from "@sentry/browser";
import { BrowserTracing } from "@sentry/tracing";

const pkg = require("../package.json");

export function init() {
  if (location.hostname === 'localhost') {
    console.debug("Running locally, monitoring is disabled");
    return;
  }

  Sentry.init({
    dsn: "https://1f2458365cc84e28b4d4733c0e5c7034@o1399891.ingest.sentry.io/6727780",
    integrations: [new BrowserTracing()],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
    release: pkg.name + '@' + pkg.version,
  });
}