<template>
    <v-form @submit.prevent="submitForm" class="contact-form">
        <v-text-field v-model="name" label="Nome" required
            :color="theme.global.current.value.dark ? 'primary' : 'secondary'" />
        <v-text-field v-model="email" label="E-mail" type="email" required
            :color="theme.global.current.value.dark ? 'primary' : 'secondary'" />
        <v-textarea v-model="message" label="Mensagem" required
            :color="theme.global.current.value.dark ? 'primary' : 'secondary'" />
        <v-btn type="submit" :color="'secondary'">
            Enviar
        </v-btn>
    </v-form>
</template>

<script setup>
import { useTheme } from 'vuetify';
import { ref } from 'vue';

const theme = useTheme();
const name = ref('');
const email = ref('');
const message = ref('');

const submitForm = () => {
    alert(`Obrigado, ${name.value}! Sua mensagem foi enviada.`);
};
</script>

<style scoped>
.contact-form {
    background-color: rgba(255, 255, 255, 0.1);
    padding: 20px;
    border-radius: 8px;
}

.v-text-field,
.v-textarea {
    background-color: transparent;
    color: inherit;
}
</style>