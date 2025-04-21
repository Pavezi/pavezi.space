<template>
    <v-container class="py-8">
        <v-row justify="center">
            <v-col cols="12" class="text-center">
                <h1 class="text-h3 font-weight-bold mb-6">Meus Projetos</h1>
            </v-col>

            <v-col v-for="project in projects" :key="project.title" cols="12" sm="6" md="4">
                <ProjectCard v-bind="project" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import ProjectCard from '@/components/ProjectCard.vue'

const projects = [
    {
        title: 'Smart Planner Chat',
        description: 'Um assistente de planejamento inteligente com IA integrada para ajudar na organização pessoal e profissional.',
        image: 'smart-planner.jpg',
        link: 'https://smart-planner-n4q8.onrender.com/',
        tags: ['IA', 'Chat', 'Produtividade']
    },
    {
        title: 'GitHub',
        description: 'Meu perfil no GitHub com todos os meus projetos open-source e contribuições.',
        image: 'github.jpg', 
        link: 'https://github.com/Pavezi',
        tags: ['Código', 'Open Source', 'Repositórios']
    }
]
</script>