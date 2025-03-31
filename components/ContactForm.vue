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
        <div class="contact-links mt-6">
            <h3 class="text-h6 mb-3">Ou entre em contato diretamente:</h3>
            <div class="d-flex justify-center">
                <ContactLink href="https://wa.me/55991025882" icon="mdi-whatsapp" />
                <ContactLink href="https://www.linkedin.com/in/vinicius-pavezi-53976b162/" icon="mdi-linkedin" />
                <ContactLink href="mailto:viniciuspavezi@hotmail.com" icon="mdi-email" />
            </div>
        </div>
    </v-form>
</template>

<script setup>
import { useTheme } from 'vuetify';
import { ref } from 'vue';

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

watch(() => props.initialSubject, (newValue) => {
    subject.value = newValue;
});

const nameRules = [
    (v) => !!v || 'O nome é obrigatório',
    (v) => (v && v.length >= 3) || 'O nome deve ter pelo menos 3 caracteres',
];

const emailRules = [
    (v) => !!v || 'O e-mail é obrigatório',
    (v) => /.+@.+\..+/.test(v) || 'O e-mail deve ser válido',
];

const subjectRules = [
    (v) => !!v || 'O assunto é obrigatório',
    (v) => (v && v.length >= 5) || 'O assunto deve ter pelo menos 5 caracteres',
];

const messageRules = [
    (v) => !!v || 'A mensagem é obrigatória',
    (v) => (v && v.length >= 10) || 'A mensagem deve ter pelo menos 10 caracteres',
];

const submitForm = async () => {
    isSubmitting.value = true;

    try {
        const formData = new FormData();
        formData.append('name', name.value);
        formData.append('email', email.value);
        formData.append('subject', subject.value);
        formData.append('message', message.value);

        const config = useRuntimeConfig();
        const endpoint = config.public.formspreeEndpoint;

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
        isSubmitting.value = false;
    }
};
</script>

<style scoped>
.contact-form {
    background-color: rgba(var(--v-theme-background), 0.1);
    padding: 20px;
    border-radius: 8px;
}

.v-text-field,
.v-textarea {
    background-color: transparent;
    color: inherit;
}

.contact-links {
    text-align: center;
}
</style>