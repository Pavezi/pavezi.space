<template>
    <v-container>
        <ContactForm :initialSubject="subject" />
    </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const subject = ref('');

onMounted(() => {
    subject.value = route.query.assunto || '';
});
</script>