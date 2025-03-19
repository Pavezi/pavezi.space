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
defineProps({
    title: String,
    description: String,
    icon: {
        type: String,
        default: 'mdi-check', // Ícone padrão
    },
});
</script>
<style scoped>
.service-card {
    width: 100%;
    /* Ocupa toda a largura disponível */
    margin: 8px 0;
    /* Espaçamento entre os cards */
    background-color: rgba(var(--v-theme-surface), 0.9);
    /* Fundo do card */
    color: rgba(var(--v-theme-on-surface), 0.9);
    /* Cor do texto */
}

.v-card-title {
    font-size: 1.1rem;
    font-weight: bold;
}

.v-card-text {
    color: rgba(var(--v-theme-on-surface), 0.7);
    /* Cor do texto secundário */
}
</style>