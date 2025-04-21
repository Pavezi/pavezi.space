<template>
    <v-card class="project-card" elevation="6">
        <v-img :src="image" height="200px" cover class="project-image"
            gradient="to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.7)">
            <v-card-title class="text-white text-h5 font-weight-bold">
                {{ title }}
            </v-card-title>
        </v-img>

        <v-card-text class="project-description">
            {{ description }}

            <v-chip-group class="mt-3">
                <v-chip v-for="(tag, index) in tags" :key="index" small>
                    {{ tag }}
                </v-chip>
            </v-chip-group>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions class="px-4 pb-4">
            <v-btn :href="link" target="_blank" :color="theme.global.current.value.dark ? 'secondary' : 'primary'"
                variant="flat" size="large" block>
                Ver Projeto
                <v-icon end>mdi-open-in-new</v-icon>
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
    tags: {
        type: Array,
        default: () => []
    }
});
</script>

<style scoped>
.project-card {
    width: 100%;
    max-width: 360px;
        margin: 12px;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        border-radius: 16px;
        overflow: hidden;
    }
    
    .project-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3) !important;
    }
    
    .project-image {
        position: relative;
    }
    
    .project-image .v-card-title {
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 16px;
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
    }
    
    .project-description {
        padding: 16px;
        color: rgba(var(--v-theme-on-surface), 0.9);
        line-height: 1.6;
        min-height: 120px;
    }

.v-card-actions {
    justify-content: center;
}

.v-card-actions .v-btn {
    font-weight: 600;
}
</style>