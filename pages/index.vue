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
        title: 'Sites High-Performance',
        description: 'Desenvolvimento de sites rápidos e SEO-friendly com Vue.js/Nuxt ou React/Next.js, garantindo 90+ no PageSpeed Insights.',
    },
    {
        title: 'Sistema de Pagamentos Seguro',
        description: 'Integração com Pagar.me para receber Pix, cartão e boletos com anti-fraude e relatórios automatizados, reduzindo inadimplência em até 25%.',
    },
    {
        title: 'Consultoria em Arquitetura de Software',
        description: 'Análise e otimização do seu backend: escalabilidade (Node.js/Nest.js), redução de custos AWS/GCP e migração para microsserviços.',
    },
    {
        title: 'Integração de APIs que Simplificam Negócios',
        description: 'Conecto sistemas como WhatsApp, Pagar.me e ERPs via APIs RESTful customizadas, eliminando trabalho manual (ex: envio de notas fiscais automático).',
    },
    {
        title: 'Automações que Poupan Tempo e Dinheiro',
        description: 'Crio robôs para processos repetitivos: atualização de banco de dados, disparo de e-mails/SMS e alertas via WhatsApp, economizando 10+ horas semanais.',
    },
    {
        title: 'Chatbot de WhatsApp que Aumenta Vendas',
        description: 'Implemento fluxos automatizados de atendimento, lembretes de pagamento e promoções personalizadas, melhorando a taxa de conversão em 30%.',
    },
];

const featuredProjects = [
    {
        title: 'Smart Planner Chat',
        description: 'Chat que planeja tarefas diárias usando IA generativa',
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