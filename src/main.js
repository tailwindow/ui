import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./index.css";

import Highlight from "@point-hub/vue-highlight";
import "highlight.js/styles/agate.css";
// Import Languages
import javascript from "highlight.js/lib/languages/javascript";
import html from "highlight.js/lib/languages/xml";

// if (isMobile)
import { isMobile } from "mobile-device-detect";

if (isMobile) {
  // Redirect to mobile site
  // window.location.replace(
  //   window.location.href.replace("https://", "https://m.")
  // );
} else {
  // Register Language
  Highlight.registerLanguage("html", html);
  Highlight.registerLanguage("javascript", javascript);

  createApp(App)
    .use(store)
    .use(router)
    .use(Highlight.plugin)
    .mount("#app");
}
