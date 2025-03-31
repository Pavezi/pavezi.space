<template>
    <v-card class="service-card" elevation="4">
        <v-card-item class="card-header">
            <v-icon size="x-large" :color="theme.global.current.value.dark ? 'primary' : 'secondary'">
                {{ icon }}
            </v-icon>
            <v-card-title class="text-h6 font-weight-bold">{{ title }}</v-card-title>
        </v-card-item>

        <v-card-text class="card-content">
            {{ description }}
        </v-card-text>

        <v-card-actions class="card-actions">
            <v-btn :to="`/contato?assunto=${encodeURIComponent(title)}`"
                :color="theme.global.current.value.dark ? 'primary' : 'secondary'" variant="flat" block size="large">
                Solicitar Orçamento
                <v-icon end>mdi-arrow-right</v-icon>
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
    height: 100%;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease;
    border-radius: 16px;
    overflow: hidden;

    &:hover {
        transform: translateY(-8px);
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    }
}

.card-header {
    padding: 24px;
    display: flex;
    align-items: center;
    gap: 16px;
    background-color: rgba(var(--v-theme-primary), 0.1);
}

.card-content {
    padding: 0 24px 16px;
    flex-grow: 1;
    color: rgba(var(--v-theme-on-surface), 0.9);
    line-height: 1.6;
}

.card-actions {
    padding: 16px 24px;

    .v-btn {
        letter-spacing: normal;
        font-weight: 600;
    }
}
</style>