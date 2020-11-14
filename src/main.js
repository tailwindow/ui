import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./assets/css/tailwind.css";

import Highlight from "./lib/highlight.js";
import "highlight.js/styles/agate.css";

createApp(App)
  .use(store)
  .use(router)
  .use(Highlight)
  .mount("#app");
