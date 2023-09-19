// Plugins
import vuetify from "./vuetify";
import router from "../router";
import store from "../store";
import i18n from "./i18n";

export function registerPlugins(app) {
  app.use(vuetify);
  app.use(router);
  app.use(store);
  app.use(i18n);
}