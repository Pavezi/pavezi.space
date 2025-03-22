<template>
    <div>
        <h1 class="text-h4 font-weight-bold mb-6">Entre em Contato </h1>
        <ContactForm :initialSubject="subject" />
    </div>
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