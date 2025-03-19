<template>
    <v-form @submit.prevent="submitForm" class="contact-form">
        <v-text-field v-model="name" label="Nome" :rules="nameRules" required
            :color="theme.global.current.value.dark ? 'primary' : 'secondary'" />
        <v-text-field v-model="email" label="E-mail" type="email" :rules="emailRules" required
            :color="theme.global.current.value.dark ? 'primary' : 'secondary'" />
        <v-text-field v-model="subject" label="Assunto" :rules="subjectRules" required
            :color="theme.global.current.value.dark ? 'primary' : 'secondary'" />
        <v-textarea v-model="message" label="Mensagem" :rules="messageRules" required
            :color="theme.global.current.value.dark ? 'primary' : 'secondary'" />
        <v-btn type="submit" :color="theme.global.current.value.dark ? 'primary' : 'secondary'">
            Enviar
        </v-btn>
    </v-form>
</template>

<script setup>
import { useTheme } from 'vuetify';
import { ref } from 'vue';

// Defina as props primeiro
const props = defineProps({
    initialSubject: {
        type: String,
        default: '',
    },
});

const theme = useTheme();
const name = ref('');
const email = ref('');
const subject = ref(props.initialSubject);
const message = ref('');

// Regras de validação
const nameRules = [
    (v) => !!v || 'O nome é obrigatório', // Campo obrigatório
    (v) => (v && v.length >= 3) || 'O nome deve ter pelo menos 3 caracteres', // Mínimo de caracteres
];

const emailRules = [
    (v) => !!v || 'O e-mail é obrigatório', // Campo obrigatório
    (v) => /.+@.+\..+/.test(v) || 'O e-mail deve ser válido', // Formato de e-mail válido
];

const subjectRules = [
    (v) => !!v || 'O assunto é obrigatório', // Campo obrigatório
    (v) => (v && v.length >= 5) || 'O assunto deve ter pelo menos 5 caracteres', // Mínimo de caracteres
];

const messageRules = [
    (v) => !!v || 'A mensagem é obrigatória', // Campo obrigatório
    (v) => (v && v.length >= 10) || 'A mensagem deve ter pelo menos 10 caracteres', // Mínimo de caracteres
];

const submitForm = async () => {
    isSubmitting.value = true; // Inicia o estado de envio

    try {
        const formData = new FormData();
        formData.append('name', name.value);
        formData.append('email', email.value);
        formData.append('subject', subject.value);
        formData.append('message', message.value);

        const config = useRuntimeConfig(); // Acessa as variáveis de ambiente
        const endpoint = config.public.formspreeEndpoint; // Acessa NUXT_PUBLIC_FORMSPREE_ENDPOINT

        const response = await fetch(endpoint, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json',
            },
        });

        if (response.ok) {
            alert('Mensagem enviada com sucesso!');
            name.value = '';
            email.value = '';
            subject.value = '';
            message.value = '';
        } else {
            const errorData = await response.json();
            alert(`Erro ao enviar a mensagem: ${errorData.error || 'Tente novamente.'}`);
        }
    } catch (error) {
        alert('Erro ao enviar a mensagem. Tente novamente.');
    } finally {
        isSubmitting.value = false; // Finaliza o estado de envio
    }
};
</script>

<style scoped>
.contact-form {
    background-color: rgba(var(--v-theme-background), 0.1);
        /* Fundo semi-transparente */
    padding: 20px;
    border-radius: 8px;
}

.v-text-field,
.v-textarea {
    background-color: transparent;
    /* Fundo transparente */
    color: inherit;
    /* Herda a cor do tema */
}
</style>