<template>
    <v-container class="about-page">
        <v-row justify="center">
            <v-col cols="12" md="10" lg="8">
                <v-card class="about-card" elevation="6">
                    <v-card-title class="text-h3 font-weight-bold text-center py-6">
                        Sobre Mim
                    </v-card-title>

                    <v-divider></v-divider>

                    <v-card-text class="pa-6">
                        <v-row align="center" class="mb-8">
                            <v-col cols="12" md="4" class="text-center">
                                <v-avatar size="200" class="profile-avatar">
                                    <v-img src="/me.jpeg" alt="Profile"></v-img>
                                </v-avatar>
                            </v-col>

                            <v-col cols="12" md="8">
                                <h2 class="text-h5 mb-4">Vinícius Pavezi</h2>
                                <p class="text-subtitle-1 mb-2">
                                    <v-icon left>mdi-school</v-icon>
                                    Formado em Sistemas de Informação
                                </p>
                                <p class="text-subtitle-1">
                                    <v-icon left>mdi-briefcase</v-icon>
                                    Desenvolvedor Fullstack JavaScript
                                </p>
                            </v-col>
                        </v-row>

                        <section class="mb-8">
                            <h3 class="text-h5 font-weight-bold mb-4">Experiência e Especializações</h3>
                            <v-chip-group column class="mb-4">
                                <v-chip v-for="tech in technologies" :key="tech" color="primary" variant="outlined">
                                    {{ tech }}
                                </v-chip>
                            </v-chip-group>

                            <p class="mb-3">
                                Especializado em NodeJS com TypeScript, posso implementar plataformas escaláveis com
                                componentes Core como:
                            </p>

                            <ul class="mb-4">
                                <li v-for="item in coreComponents" :key="item" class="mb-2">
                                    <v-icon small color="primary">mdi-check</v-icon> {{ item }}
                                </li>
                            </ul>
                        </section>

                        <section class="mb-8">
                            <h3 class="text-h5 font-weight-bold mb-4">Principais Habilidades</h3>
                            <v-row>
                                <v-col v-for="(skill, index) in skills" :key="index" cols="12" md="6">
                                    <v-card variant="flat" class="skill-card pa-4">
                                        <div class="d-flex align-center mb-2">
                                            <v-icon :icon="skill.icon" :color="skill.color" size="24"
                                                class="mr-3"></v-icon>
                                            <h4 class="text-h6 font-weight-bold">{{ skill.title }}</h4>
                                        </div>
                                        <p>{{ skill.description }}</p>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </section>

                        <section class="mb-4">
                            <h3 class="text-h5 font-weight-bold mb-4">Princípios de Desenvolvimento</h3>
                            <v-row>
                                <v-col v-for="principle in principles" :key="principle.title" cols="12" md="4">
                                    <v-card variant="outlined" class="principle-card pa-4 h-100">
                                        <h4 class="text-h6 font-weight-bold mb-2">{{ principle.title }}</h4>
                                        <p>{{ principle.description }}</p>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </section>

                        <section class="text-center mt-8">
                            <v-btn color="primary" size="large" variant="flat" to="/contato" class="contact-button">
                                Entre em Contato
                                <v-icon end>mdi-email-send</v-icon>
                            </v-btn>
                        </section>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script setup>
const technologies = [
    'JavaScript', 'TypeScript', 'Node.js', 'NestJS', 'Express',
    'React', 'Next.js', 'Vue', 'Nuxt', 'AWS', 'PostgreSQL',
    'Docker', 'Jest', 'Cypress', 'Swagger', 'RabbitMQ',
    'Serverless', 'GitHub Actions', 'CI/CD'
];

const coreComponents = [
    'Autenticação e Autorização',
    'Painel Administrativo',
    'Sistema de Notificações',
    'Módulo de Faturamento',
    'Estruturação de Banco de Dados',
    'Integração com Pagamentos (Pagar.me)',
    'Sistema de Mensageria (WhatsApp)',
    'Automação de Processos'
];

const skills = [
    {
        title: 'Backend Development',
        icon: 'mdi-server',
        color: 'primary',
        description: 'Desenvolvimento de APIs robustas com Node.js, NestJS e Express, seguindo melhores práticas de arquitetura e segurança.'
    },
    {
        title: 'Frontend Development',
        icon: 'mdi-monitor',
        color: 'secondary',
        description: 'Criação de interfaces modernas e responsivas com React, Vue, Next.js e Nuxt, focando na experiência do usuário.'
    },
    {
        title: 'Cloud & DevOps',
        icon: 'mdi-cloud',
        color: 'info',
        description: 'Implementação de soluções escaláveis na AWS e GCP, incluindo Fargate, Lambda, e pipelines de CI/CD automatizados.'
    },
    {
        title: 'Banco de Dados',
        icon: 'mdi-database',
        color: 'success',
        description: 'Modelagem e otimização de bancos de dados relacionais (PostgreSQL) e não-relacionais, garantindo performance e integridade.'
    },
    {
        title: 'Pagamentos & Automação',
        icon: 'mdi-credit-card',
        color: 'warning',
        description: 'Integração com gateways de pagamento (Pagar.me), geração de boletos, Pix e automação de processos financeiros.'
    },
    {
        title: 'Qualidade de Código',
        icon: 'mdi-code-braces',
        color: 'error',
        description: 'Aplicação de testes unitários e E2E (Jest, Cypress), documentação (Swagger) e princípios de Clean Code.'
    }
];

const principles = [
    {
        title: 'DRY',
        description: 'Don\'t Repeat Yourself - Evitar duplicação de código, criando componentes e funções reutilizáveis.'
    },
    {
        title: 'SRP',
        description: 'Single Responsibility Principle - Cada módulo ou classe deve ter apenas uma razão para mudar.'
    },
    {
        title: 'Clean Code',
        description: 'Escrever código limpo, legível e de fácil manutenção, seguindo padrões e boas práticas.'
    }
];
</script>

<style scoped>
.about-page {
    padding-top: 48px;
    padding-bottom: 48px;
}

.about-card {
    border-radius: 16px;
    overflow: hidden;
}

.profile-avatar {
    border: 4px solid rgb(var(--v-theme-primary));
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.skill-card {
    border-radius: 12px;
    background-color: rgba(var(--v-theme-primary), 0.05);
    height: 100%;
    transition: transform 0.3s ease;

    &:hover {
        transform: translateY(-4px);
    }
}

.principle-card {
    border-radius: 12px;
    transition: all 0.3s ease;

    &:hover {
        border-color: rgb(var(--v-theme-primary));
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
}

.contact-button {
    font-weight: 600;
    letter-spacing: 0.5px;
    padding: 0 32px;
    height: 48px;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 16px rgba(var(--v-theme-primary), 0.2);
    }
}

ul {
    padding-left: 24px;

    li {
        list-style-type: none;
        position: relative;
    }
}
</style>