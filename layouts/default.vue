<template>
    <v-app :class="themeClass">
        <v-app-bar app>
            <v-app-bar-nav-icon @click="drawer = !drawer" />
            <v-btn icon to="/" class="mr-2">
                <v-img src="/icon256.png" alt="Home" max-height="40" max-width="40" contain />
            </v-btn>
            <v-toolbar-title>Meu Portfólio</v-toolbar-title>
            <v-spacer />
            <v-btn v-for="(item, index) in menuItems" :key="index" :to="item.to" text>
                {{ item.title }}
            </v-btn>
            <ThemeToggle />
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" temporary>
            <v-list>
                <v-list-item v-for="(item, index) in menuItems" :key="index" :to="item.to">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-main>
            <v-container>
                <slot />
            </v-container>
        </v-main>
    </v-app>
</template>

<script setup>
import { ref } from 'vue';
import { useTheme } from 'vuetify';
import ThemeToggle from '~/components/ThemeToggle.vue';

const theme = useTheme();
const themeClass = computed(() => (theme.global.current.value.dark ? 'night-theme' : 'day-theme'));

const drawer = ref(false);

const menuItems = [
    { title: 'Início', to: '/' },
    { title: 'Sobre', to: '/sobre' },
    { title: 'Serviços', to: '/servicos' },
    { title: 'Contato', to: '/contato' },
    { title: 'Trabalhe Conosco', to: '/trabalhe-conosco' },
];
</script>

<style scoped>
.v-app-bar {
    background-color: rgba(var(--v-theme-surface), 0.9);
}

.v-btn {
    text-transform: none;
}

.v-navigation-drawer {
    background-color: rgba(var(--v-theme-surface), 0.9);
}
</style>