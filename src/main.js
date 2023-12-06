import "./assets/main.css";
import { plugin, defaultConfig } from "@formkit/vue";
import { createApp } from "vue";
import { createPinia } from "pinia";
import config from "../formkit.config";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(plugin, defaultConfig(config));

app.mount("#app");
