// Styles
// import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import * as labs from "vuetify/labs/components";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import * as icons from "vuetify/iconsets/md";

const vuetify = createVuetify({
  components: {
    ...components,
    ...labs,
  },
  directives,
  icons: {
    defaultSet: "md",
    aliases: icons.aliases,
    sets: {
      md: icons.md,
    },
  },
});

export default vuetify;
