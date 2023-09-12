import { createApp } from "vue";
import "@fontsource/roboto";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.vue";

// import font awesome

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
