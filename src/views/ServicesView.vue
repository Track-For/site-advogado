<script setup lang="ts">
import { ArrowUpRight, Check, Clock3 } from '@lucide/vue';
import { useHead } from '@unhead/vue';
import { siteConfig, whatsappUrl } from '../data/site';

useHead({
  title: 'Áreas de Atuação | Almeida & Prado Advocacia',
  meta: [
    { name: 'description', content: 'Conheça a atuação do Almeida & Prado em direito empresarial, contratos, direito civil, família, sucessões e consultoria preventiva.' },
    { property: 'og:title', content: 'Áreas de Atuação | Almeida & Prado Advocacia' },
    { property: 'og:description', content: 'Assessoria jurídica para empresas, pessoas e famílias com estratégia sob medida.' },
    { property: 'og:url', content: `${siteConfig.domain}/servicos` },
  ],
  link: [{ rel: 'canonical', href: `${siteConfig.domain}/servicos` }],
});

const services = [
  {
    number: '01',
    title: 'Direito empresarial',
    subtitle: 'Decisões que sustentam o negócio',
    text: 'Acompanhamento jurídico para a rotina e os momentos decisivos da empresa, com foco em prevenção de riscos e continuidade.',
    items: ['Acordos e conflitos societários', 'Reorganizações e governança', 'Cobranças e recuperação de crédito', 'Contencioso empresarial'],
  },
  {
    number: '02',
    title: 'Contratos',
    subtitle: 'Relações mais seguras começam no papel',
    text: 'Estruturação de instrumentos claros, equilibrados e coerentes com a operação e os riscos envolvidos.',
    items: ['Elaboração e revisão contratual', 'Negociações estratégicas', 'Distratos e inadimplemento', 'Contratos comerciais e civis'],
  },
  {
    number: '03',
    title: 'Direito civil',
    subtitle: 'Proteção para relações e patrimônio',
    text: 'Atuação em questões patrimoniais, obrigações e conflitos privados, pela via consultiva ou judicial.',
    items: ['Responsabilidade civil', 'Indenizações e obrigações', 'Posse e propriedade', 'Ações e defesas judiciais'],
  },
  {
    number: '04',
    title: 'Família e sucessões',
    subtitle: 'Técnica e cuidado em decisões pessoais',
    text: 'Condução responsável de questões familiares e patrimoniais que pedem sensibilidade, discrição e planejamento.',
    items: ['Divórcios e acordos', 'Inventários e partilhas', 'Planejamento sucessório', 'Proteção patrimonial familiar'],
  },
  {
    number: '05',
    title: 'Consultoria preventiva',
    subtitle: 'Antecipar é também proteger',
    text: 'Apoio recorrente para identificar riscos, organizar documentos e decidir antes que um impasse se transforme em litígio.',
    items: ['Pareceres e orientação estratégica', 'Mapeamento de riscos jurídicos', 'Notificações e negociações', 'Acompanhamento mensal'],
  },
];
</script>

<template>
  <section class="inner-hero services-hero">
    <div class="inner-hero-mark" aria-hidden="true">§</div>
    <div class="container-wide inner-hero-grid">
      <div>
        <p class="eyebrow">Áreas de atuação</p>
        <h1>Conhecimento técnico.<br /><em>Estratégia aplicada.</em></h1>
      </div>
      <p>Cada serviço parte do mesmo princípio: compreender o todo para construir uma solução adequada ao seu contexto.</p>
    </div>
  </section>

  <section class="services-list container-wide">
    <article v-for="service in services" :key="service.number" class="service-row">
      <div class="service-number">{{ service.number }}</div>
      <div class="service-title">
        <p>{{ service.subtitle }}</p>
        <h2>{{ service.title }}</h2>
      </div>
      <div class="service-copy">
        <p>{{ service.text }}</p>
        <ul>
          <li v-for="item in service.items" :key="item"><Check :size="16" aria-hidden="true" />{{ item }}</li>
        </ul>
        <a :href="whatsappUrl(`Olá! Gostaria de atendimento em ${service.title}.`)" target="_blank" rel="noopener">Conversar sobre esta área <ArrowUpRight :size="17" /></a>
      </div>
    </article>
  </section>

  <section class="orientation-section">
    <div class="orientation-layout container-wide">
      <Clock3 :size="44" :stroke-width="1.1" aria-hidden="true" />
      <div>
        <p class="eyebrow">Existe um prazo em andamento?</p>
        <h2>Informe a data no primeiro contato.</h2>
      </div>
      <p>Intimações, audiências e prazos contratuais podem exigir providências rápidas. Avise sobre qualquer data relevante para avaliarmos a urgência.</p>
    </div>
  </section>

  <section class="scope-section container-wide">
    <div>
      <p class="eyebrow">Proposta transparente</p>
      <h2>Escopo, etapas e honorários definidos antes do início.</h2>
    </div>
    <div>
      <p>Após compreender a demanda, apresentamos uma proposta com o trabalho previsto, forma de acompanhamento e investimento. Você decide com todas as informações relevantes em mãos.</p>
      <a class="button button-dark" :href="whatsappUrl('Olá! Gostaria de solicitar uma análise inicial do meu caso.')" target="_blank" rel="noopener">Solicitar análise inicial <ArrowUpRight :size="18" /></a>
    </div>
  </section>

  <section class="page-cta page-cta-accent">
    <div>
      <p class="eyebrow">Não encontrou sua situação?</p>
      <h2>Conte o contexto.<br />Nós indicamos o <em>caminho.</em></h2>
      <a class="button button-light" :href="whatsappUrl()" target="_blank" rel="noopener">Falar com o escritório <ArrowUpRight :size="18" /></a>
    </div>
  </section>
</template>
