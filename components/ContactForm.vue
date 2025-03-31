<template>
    <v-form @submit.prevent="submitForm" class="contact-form" ref="form">
        <v-card class="form-card" elevation="8">
            <v-card-title class="text-h5 font-weight-bold mb-4">Entre em Contato</v-card-title>

            <v-card-text>
                <v-text-field v-model="name" label="Nome Completo" :rules="nameRules" required variant="outlined"
                    :color="theme.global.current.value.dark ? 'primary' : 'secondary'" class="mb-4"
                    :error-messages="fieldErrors.name" @input="clearError('name')" />

                <v-text-field v-model="email" label="E-mail" type="email" :rules="emailRules" required
                    variant="outlined" :color="theme.global.current.value.dark ? 'primary' : 'secondary'" class="mb-4"
                    :error-messages="fieldErrors.email" @input="clearError('email')" />

                <v-text-field v-model="subject" label="Assunto" :rules="subjectRules" required variant="outlined"
                    :color="theme.global.current.value.dark ? 'primary' : 'secondary'" class="mb-4"
                    :error-messages="fieldErrors.subject" @input="clearError('subject')" />

                <v-textarea v-model="message" label="Mensagem" :rules="messageRules" required variant="outlined"
                    :color="theme.global.current.value.dark ? 'primary' : 'secondary'" rows="4" class="mb-6"
                    :error-messages="fieldErrors.message" @input="clearError('message')" />

                <v-btn type="submit" :color="theme.global.current.value.dark ? 'primary' : 'secondary'" size="large"
                    block :loading="isSubmitting">
                    Enviar Mensagem
                    <template v-slot:loader>
                        <v-progress-circular indeterminate size="24"></v-progress-circular>
                    </template>
                </v-btn>
            </v-card-text>
        </v-card>

        <div class="contact-links mt-8">
            <h3 class="text-h6 mb-4 text-center">Ou entre em contato diretamente:</h3>
            <div class="d-flex justify-center">
                <ContactLink href="https://wa.me/55991025882" icon="mdi-whatsapp" tooltip="WhatsApp" color="#25D366" />
                <ContactLink href="https://www.linkedin.com/in/vinicius-pavezi-53976b162/" icon="mdi-linkedin"
                    tooltip="LinkedIn" color="#0077B5" />
                <ContactLink href="mailto:viniciuspavezi@hotmail.com" icon="mdi-email" tooltip="E-mail"
                    color="#D44638" />
            </div>
        </div>

        <v-snackbar v-model="showErrorSnackbar" :timeout="5000" color="error" location="bottom right">
            {{ errorMessage }}
            <template v-slot:actions>
                <v-btn variant="text" @click="showErrorSnackbar = false">
                    Fechar
                </v-btn>
            </template>
        </v-snackbar>

        <v-snackbar v-model="showSuccessSnackbar" :timeout="5000" color="success" location="bottom right">
            Mensagem enviada com sucesso!
            <template v-slot:actions>
                <v-btn variant="text" @click="showSuccessSnackbar = false">
                    Fechar
                </v-btn>
            </template>
        </v-snackbar>
    </v-form>
</template>

<script setup>
import { useTheme } from 'vuetify';
import { ref, watch } from 'vue';

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
const isSubmitting = ref(false);
const form = ref(null);
const showErrorSnackbar = ref(false);
const showSuccessSnackbar = ref(false);
const errorMessage = ref('');
const fieldErrors = ref({
    name: '',
    email: '',
    subject: '',
    message: ''
});

watch(() => props.initialSubject, (newValue) => {
    subject.value = newValue;
});

const nameRules = [
    (v) => !!v || 'O nome é obrigatório',
    (v) => (v && v.length >= 3) || 'O nome deve ter pelo menos 3 caracteres',
];

const emailRules = [
    (v) => !!v || 'O e-mail é obrigatório',
    (v) => /.+@.+\..+/.test(v) || 'Por favor, insira um e-mail válido',
];

const subjectRules = [
    (v) => !!v || 'O assunto é obrigatório',
    (v) => (v && v.length >= 5) || 'O assunto deve ter pelo menos 5 caracteres',
];

const messageRules = [
    (v) => !!v || 'A mensagem é obrigatória',
    (v) => (v && v.length >= 10) || 'A mensagem deve ter pelo menos 10 caracteres',
];

const clearError = (field) => {
    fieldErrors.value[field] = '';
};

const validateForm = () => {
    let isValid = true;

    if (!name.value) {
        fieldErrors.value.name = 'Por favor, insira seu nome';
        isValid = false;
    } else if (name.value.length < 3) {
        fieldErrors.value.name = 'O nome deve ter pelo menos 3 caracteres';
        isValid = false;
    }

    if (!email.value) {
        fieldErrors.value.email = 'Por favor, insira seu e-mail';
        isValid = false;
    } else if (!/.+@.+\..+/.test(email.value)) {
        fieldErrors.value.email = 'Por favor, insira um e-mail válido';
        isValid = false;
    }

    if (!subject.value) {
        fieldErrors.value.subject = 'Por favor, insira o assunto';
        isValid = false;
    } else if (subject.value.length < 5) {
        fieldErrors.value.subject = 'O assunto deve ter pelo menos 5 caracteres';
        isValid = false;
    }

    if (!message.value) {
        fieldErrors.value.message = 'Por favor, insira sua mensagem';
        isValid = false;
    } else if (message.value.length < 10) {
        fieldErrors.value.message = 'A mensagem deve ter pelo menos 10 caracteres';
        isValid = false;
    }

    if (!isValid) {
        errorMessage.value = 'Por favor, preencha todos os campos corretamente';
        showErrorSnackbar.value = true;
    }

    return isValid;
};

const submitForm = async () => {
    // Validar o formulário antes de enviar
    if (!validateForm()) {
        return;
    }

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
            showSuccessSnackbar.value = true;
            name.value = '';
            email.value = '';
            subject.value = '';
            message.value = '';
            // Resetar erros
            Object.keys(fieldErrors.value).forEach(key => {
                fieldErrors.value[key] = '';
            });
        } else {
            const errorData = await response.json();
            errorMessage.value = errorData.error || 'Erro ao enviar a mensagem. Tente novamente.';
            showErrorSnackbar.value = true;
        }
    } catch (error) {
        errorMessage.value = 'Erro de conexão. Verifique sua internet e tente novamente.';
        showErrorSnackbar.value = true;
    } finally {
        isSubmitting.value = false;
    }
};
</script>

<style scoped>
/* Estilos mantidos da versão anterior */
.contact-form {
    max-width: 600px;
    margin: 0 auto;
    }
    
    .form-card {
        padding: 24px;
        border-radius: 16px;
        background-color: rgba(var(--v-theme-surface), 0.95);
    }
    
    .contact-links {
        background-color: rgba(var(--v-theme-surface), 0.8);
        padding: 20px;
        border-radius: 12px;
        backdrop-filter: blur(4px);
    }
    
    .v-text-field,
    .v-textarea {
        background-color: rgba(var(--v-theme-surface), 0.1);
        border-radius: 8px;
}

.v-btn {
    font-weight: 600;
    letter-spacing: 0.5px;
    height: 48px;
}
</style>