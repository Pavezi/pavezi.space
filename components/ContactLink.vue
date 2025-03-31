<template>
    <v-btn :href="href" target="_blank" rel="noopener noreferrer" icon class="mx-2">
        <v-icon :color="theme.global.current.value.dark ? 'primary' : 'secondary'">
            {{ icon }}
        </v-icon>
    </v-btn>
</template>

<script setup>
import { useTheme } from 'vuetify';

const props = defineProps({
    href: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    }
});

const theme = useTheme();
</script>