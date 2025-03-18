import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import "vuetify/styles";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: "dayTheme",
      themes: {
        dayTheme: {
          dark: false,
          colors: {
            background: "#87CEEB", // Azul céu (topo)
            surface: "#FFFFFF", // Branco
            primary: "#1E90FF", // Azul céu
            secondary: "#FFD700", // Amarelo sol
            error: "#FF5252",
            info: "#2196F3",
            success: "#32CD32", // Verde grama
            warning: "#FFA500", // Laranja
            onBackground: "#000000", // Texto preto no fundo claro
            onSurface: "#000000", // Texto preto na superfície clara
          },
        },
        nightTheme: {
          dark: true,
          colors: {
            background: "#0B3D91", // Azul escuro (topo)
            surface: "#1E1E2D", // Preto
            primary: "#1E90FF", // Azul claro
            secondary: "#8A2BE2", // Roxo estrelado
            error: "#FF5252",
            info: "#2196F3",
            success: "#4CAF50",
            warning: "#FFC107",
            onBackground: "#FFFFFF", // Texto branco no fundo escuro
            onSurface: "#FFFFFF", // Texto branco na superfície escura
          },
        },
      },
    },
    icons: {
      defaultSet: "mdi",
      aliases,
      sets: {
        mdi,
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
