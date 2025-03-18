<template>
    <v-card class="project-card">
        <v-img :src="image" height="200px" cover />
        <v-card-title>{{ title }}</v-card-title>
        <v-card-text>{{ description }}</v-card-text>
        <v-card-actions>
            <v-btn :href="link" target="_blank" :color="theme.global.current.value.dark ? 'primary' : 'secondary'"
                variant="outlined">
                Ver Projeto
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup>
import { useTheme } from 'vuetify';

const theme = useTheme();

defineProps({
    title: String,
    description: String,
    image: String,
    link: String,
});
</script>

<style scoped>
.project-card {
    width: 300px;
    margin: 16px;
        background-color: rgba(var(--v-theme-surface), 0.9);
            color: rgba(var(--v-theme-on-surface), 0.9);
        }
        
        .v-card-title {
            font-size: 1.25rem;
            font-weight: bold;
        }
        
        .v-card-text {
            color: rgba(var(--v-theme-on-surface), 0.7);
}
</style>