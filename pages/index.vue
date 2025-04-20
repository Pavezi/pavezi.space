<template>
    <div>
        <v-row class="my-10">
            <v-col cols="12" md="8" offset-md="2" class="text-center">
                <h1 class="text-h2 font-weight-bold">Bem-vindo ao Meu Portfólio</h1>
                <p class="text-h6 mt-4">Desenvolvedor Full-Stack | Engenheiro de Software | Vinícius Pavezi</p>
                <v-col>
                    <v-avatar size="200" class="profile-avatar">
                        <v-img src="/me.jpeg" alt="Profile"></v-img>
                    </v-avatar>
                </v-col>
            </v-col>
        </v-row>
        <v-row class="my-10">
            <v-col cols="12" md="8" offset-md="2">
                <h2 class="text-h4 font-weight-bold mb-6">Serviços Oferecidos</h2>
                <v-row>
                    <v-col cols="12" md="6" v-for="(service, index) in services" :key="index">
                        <ServiceCard :title="service.title" :description="service.description" />
                    </v-col>
                </v-row>
            </v-col>
        </v-row>

        <v-row class="my-10">
            <v-col cols="12" md="8" offset-md="2">
                <ContactForm />
            </v-col>
        </v-row>
    </div>
</template>

<script setup>

const services = [
    {
        title: 'Criação de sites',
        description: 'Desenvolvimento web moderno e responsivos com Vue.js e Nuxt.',
    },
    {
        title: 'Pagamentos',
        description: 'Adicione pagamentos via boletos, qr code, pix e cartão de crédito no seu sitema.',
    },
    {
        title: 'Consultoria',
        description: 'Elaboração de identidade virtual e site empresarial.',
    },
    {
        title: 'Integração de APIs',
        description: 'Desenvolvimento e integração de APIs RESTful com Node.js e Nest.js.',
    },
    {
        title: 'Automações',
        description: 'Automatizar processos e rotinas da empresa, criar gatilhos e definir scripts.',
    },
    {
        title: 'API do WhatsApp',
        description: 'Integra o WhastApp no seu sistema, permitindo envio automático de mensagens e automações.',
    },
];

const featuredProjects = [
    {
        title: 'Smart Planner Chat',
        description: 'Assistente de IA para planejamento pessoal e profissional com integração de calendário.',
        image: 'smart-planner.png',
        link: 'https://smart-planner-n4q8.onrender.com/',
        tags: ['Flask', 'IA', 'Nvidia.R1']
    },
    {
        title: 'Meu GitHub',
        description: 'Repositórios com projetos open-source e contribuições para a comunidade.',
        image: 'github.png',
        link: 'https://github.com/Pavezi',
        tags: ['Código', 'Open Source']
    }
];
</script>
<style scoped>
.profile-avatar {
    border: 4px solid rgba(var(--v-theme-), 0.1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
</style>