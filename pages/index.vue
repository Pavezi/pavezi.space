<template>
    <div>
        <v-row class="my-10">
            <v-col cols="12" md="8" offset-md="2" class="text-center">
                <h1 class="text-h2 font-weight-bold">Bem-vindo ao Meu Portfólio</h1>
                <p class="text-h6 mt-4">Desenvolvedor Full-Stack | Engenheiro de Software | Vinícius Pavezi</p>
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
        title: 'Desenvolvimento Web',
        description: 'Criação de sites modernos e responsivos com Vue.js e Nuxt.',
    },
    {
        title: 'Consultoria',
        description: 'Elaboração de produtos e boas práticas de desenvolvimento.',
    },
    {
        title: 'Integração de APIs',
        description: 'Desenvolvimento e integração de APIs RESTful com Node.js e Nest.js.',
    },
    {
        title: 'API do WhatsApp',
        description: 'Integra o WhastApp no seu sistema envio automatico de mensagens e automações',
    },
    {
        title: 'Automações',
        description: 'Automatizar processos, criar gatilhos e definir scripts',
    },
];

const projects = [
    {
        title: 'Portfólio Pessoal',
        description: 'Um site para mostrar meus projetos e habilidades.',
        image: '/images/project1.jpg',
    },
    {
        title: 'E-commerce',
        description: 'Plataforma de vendas online com integração de pagamentos.',
        image: '/images/project2.jpg',
    },
];
</script>