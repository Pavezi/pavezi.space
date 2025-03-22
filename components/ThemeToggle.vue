<template>
    <v-tooltip location="bottom">
        <template v-slot:activator="{ props }">
            <v-btn @click="toggleTheme" icon v-bind="props" variant="outlined"
                :color="theme.global.current.value.dark ? 'primary' : 'secondary'" class="theme-toggle-button">
                <v-icon :class="{ 'rotate-icon': theme.global.current.value.dark }">
                    {{ themeIcon }}
                </v-icon>
            </v-btn>
        </template>
        <span>{{ tooltipText }}</span>
    </v-tooltip>
</template>

<script setup>
import { useTheme } from 'vuetify';
import { computed } from 'vue';

const theme = useTheme();
const themeIcon = computed(() => (theme.global.current.value.dark ? 'mdi-weather-sunny' : 'mdi-weather-night'));
const tooltipText = computed(() => (theme.global.current.value.dark ? 'Alternar para tema claro' : 'Alternar para tema escuro'));

const toggleTheme = () => {
    theme.global.name.value = theme.global.current.value.dark ? 'dayTheme' : 'nightTheme';
};
</script>

<style scoped>
.theme-toggle-button {
    transition: all 0.3s ease;
}

.theme-toggle-button:hover {
    transform: scale(1.1);
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
}

.rotate-icon {
    animation: rotate 0.5s ease;
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}
</style>