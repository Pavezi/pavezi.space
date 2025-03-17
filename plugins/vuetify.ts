// plugins/vuetify.ts
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import "vuetify/styles";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    icons: {
      defaultSet: "mdi",
      aliases,
      sets: {
        mdi,
      },
    },
    theme: {
      defaultTheme: "spaceTheme",
      themes: {
        spaceTheme: {
          dark: true,
          colors: {
            background: "#0B3D91", 
            surface: "#1E1E2D", 
            primary: "#1E90FF", 
            secondary: "#8A2BE2",
            error: "#FF5252",
            info: "#2196F3",
            success: "#4CAF50",
            warning: "#FFC107",
          },
        },
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
