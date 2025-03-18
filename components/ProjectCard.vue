<template>
    <v-card class="project-card">
        <v-img :src="image" height="200px" cover />
        <v-card-title>{{ title }}</v-card-title>
        <v-card-text>{{ description }}</v-card-text>
        <v-card-actions>
            <v-btn :href="link" target="_blank" color="primary" variant="outlined">
                Ver Projeto
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup>
defineProps({
    title: String,
    description: String,
    image: String,
    link: String
});
</script>

<style scoped>
.project-card {
    width: 300px;
    margin: 16px;
}
</style>