<template>
  <v-app :style="backgroundStyle">
    <v-app-bar app color="primary" dark v-if="!isMobile">
      <v-btn to="/" variant="text" class="logo-btn px-0 mx-1" height="auto">
        <v-img src="/icon256.png" alt="Logo - Voltar para Home" :width="40" :height="40" contain />
      </v-btn>
      <v-spacer></v-spacer>

      <v-btn text to="/">Home</v-btn>
      <v-btn text to="/contato">Contato</v-btn>
      <v-btn text to="/sobre">Sobre</v-btn>
      <v-btn icon @click="toggleTheme">
        <v-icon>{{ themeIcon }}</v-icon>
      </v-btn>
    </v-app-bar>

    <v-app-bar app color="primary" dark v-else>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <div>
        <v-img src="/icon256.png" alt="Profile"></v-img>
      </div> <v-spacer></v-spacer>
      <v-btn icon @click="toggleTheme">
        <v-icon>{{ themeIcon }}</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list>
        <v-list-item to="/">
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item to="/contato">
          <v-list-item-title>Contato</v-list-item-title>
        </v-list-item>
        <v-list-item to="/sobre">
          <v-list-item-title>Sobre</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>

    <v-footer app color="primary" dark>
      <span>&copy; 2023 My Portfolio</span>
    </v-footer>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      isDark: true,
      drawer: false,
      isMobile: false,
    };
  },
  computed: {
    themeIcon() {
      return this.isDark ? 'mdi-weather-sunny' : 'mdi-weather-night';
    },
    backgroundStyle() {
      return {
        background: this.isDark ? '#0B3D91' : '#E0E0E0',
        color: this.isDark ? '#FFFFFF' : '#000000',
      };
    },
  },
  methods: {
    toggleTheme() {
      this.isDark = !this.isDark;
      this.$vuetify.theme.dark = this.isDark;
    },
    checkScreenSize() {
      this.isMobile = window.innerWidth < 960;
    },
  },
  mounted() {
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkScreenSize);
  },
};
</script>