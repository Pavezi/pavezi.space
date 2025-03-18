<template>
    <v-card class="mb-4">
        <v-card-title>{{ title }}</v-card-title>
        <v-card-text>{{ description }}</v-card-text>
    </v-card>
</template>

<script setup>
defineProps({
    title: String,
    description: String,
});
</script>