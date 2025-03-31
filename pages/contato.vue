<template>
    <div>
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