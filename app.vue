<template>
  <v-app :theme="isDark ? 'dark' : 'light'" :style="backgroundStyle">
    <v-app-bar app color="primary" dark v-if="!isMobile">
      <v-btn to="/" variant="text" class="logo-btn px-0 mx-1" height="auto">
        <v-img src="/icon256.png" alt="Logo - Voltar para Home" :width="40" :height="40" contain />
      </v-btn>
      <v-spacer></v-spacer>

      <v-btn text to="/">{{ $t('home') }}</v-btn>
      <v-btn text to="/contato">{{ $t('contato') }}</v-btn>
      <v-btn text to="/sobre">{{ $t('sobre') }}</v-btn>

      <v-btn icon @click="changeLanguage('pt')" :class="{ 'active-language': locale === 'pt' }">
        <v-icon>mdi-flag</v-icon>
      </v-btn>
      <v-btn icon @click="changeLanguage('en')" :class="{ 'active-language': locale === 'en' }">
        <v-icon>mdi-flag-outline</v-icon>
      </v-btn>

      <v-btn icon @click="toggleTheme">
        <v-icon>{{ themeIcon }}</v-icon>
      </v-btn>
    </v-app-bar>

    <v-app-bar app color="primary" dark v-else>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <div>
        <v-img src="/icon256.png" alt="Profile"></v-img>
      </div>
      <v-spacer></v-spacer>

      <v-btn icon @click="changeLanguage('pt')" :class="{ 'active-language': locale === 'pt' }">
        <v-icon>mdi-flag</v-icon>
      </v-btn>
      <v-btn icon @click="changeLanguage('en')" :class="{ 'active-language': locale === 'en' }">
        <v-icon>mdi-flag-outline</v-icon>
      </v-btn>

      <v-btn icon @click="toggleTheme">
        <v-icon>{{ themeIcon }}</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list>
        <v-list-item to="/">
          <v-list-item-title>{{ $t('home') }}</v-list-item-title>
        </v-list-item>
        <v-list-item to="/contato">
          <v-list-item-title>{{ $t('contato') }}</v-list-item-title>
        </v-list-item>
        <v-list-item to="/sobre">
          <v-list-item-title>{{ $t('sobre') }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>

    <v-footer app color="primary" dark>
      <span>&copy; 2025 Vinícius Pavezi</span>
    </v-footer>
  </v-app>
</template>
<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useTheme } from 'vuetify';

const { locale } = useI18n();
const theme = useTheme();

const isDark = ref(true);
const drawer = ref(false);
const isMobile = ref(false);

const changeLanguage = (lang: 'pt' | 'en') => {
  locale.value = lang;
  localStorage.setItem('userLang', lang);
};


const themeIcon = computed(() => isDark.value ? 'mdi-weather-sunny' : 'mdi-weather-night');

const backgroundStyle = computed(() => ({
  background: isDark.value ? '#0B3D91' : '#E0E0E0',
  color: isDark.value ? '#FFFFFF' : '#000000',
}));

const toggleTheme = () => {
  isDark.value = !isDark.value;
  theme.global.name.value = isDark.value ? 'dark' : 'light';
  localStorage.setItem('userTheme', isDark.value ? 'dark' : 'light');
};

const checkScreenSize = () => {
  isMobile.value = window.innerWidth < 960;
};

onMounted(() => {
  const savedLang = localStorage.getItem('userLang');
  if (savedLang && (savedLang === 'pt' || savedLang === 'en')) {
    locale.value = savedLang;
  }
  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);

  document.documentElement.setAttribute(
    'data-theme',
    isDark.value ? 'dark' : 'light'
  );
});
</script>
<style>
.active-language {
  border: 2px solid white !important;
  border-radius: 50%;
}
</style>