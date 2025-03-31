<template>
    <v-card class="service-card">
        <v-card-title>
            <v-icon left>{{ icon }}</v-icon>
            {{ title }}
        </v-card-title>
        <v-card-text>{{ description }}</v-card-text>
        <v-card-actions>
            <v-btn :to="`/contato?assunto=${encodeURIComponent(title)}`" color="primary" variant="outlined">
                Solicitar Orçamento
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
    icon: {
        type: String,
        default: 'mdi-check',
    },
});
</script>
<style scoped>
.service-card {
    width: 100%;
    margin: 8px 0;
    background-color: rgba(var(--v-theme-surface), 0.9);
    color: rgba(var(--v-theme-on-surface), 0.9);
}

.v-card-title {
    font-size: 1.1rem;
    font-weight: bold;
}

.v-card-text {
    color: rgba(var(--v-theme-on-surface), 0.7);
}
</style>