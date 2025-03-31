<template>
    <v-tooltip :text="tooltip" location="bottom">
        <template v-slot:activator="{ props: tooltipProps }">
            <v-btn :href="href" target="_blank" rel="noopener noreferrer" icon v-bind="tooltipProps"
                class="contact-link" :color="customColor || (theme.global.current.value.dark ? 'primary' : 'secondary')"
                size="large" variant="flat">
                <v-icon size="28">{{ icon }}</v-icon>
            </v-btn>
        </template>
    </v-tooltip>
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
    },
    tooltip: {
        type: String,
        required: true
    },
    customColor: {
        type: String,
        default: null
    }
});

const theme = useTheme();
</script>
<style scoped>
.contact-link {
    margin: 0 8px;
    transition: all 0.3s ease;

    &:hover {
        transform: scale(1.1) translateY(-4px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }

    .v-icon {
        transition: transform 0.3s ease;
    }

    &:hover .v-icon {
        transform: scale(1.1);
    }
}
</style>