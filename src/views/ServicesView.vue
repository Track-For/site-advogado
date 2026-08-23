<script setup lang="ts">
import { ArrowUpRight, Check, Clock3 } from '@lucide/vue';
import { useHead } from '@unhead/vue';
import { siteConfig, whatsappUrl } from '../data/site';

useHead({
  title: 'Áreas de Atuação | Felipe Amorim Advogados',
  meta: [
    { name: 'description', content: 'Conheça a atuação empresarial de Felipe Amorim em direito societário, contratos, consultoria, contencioso e recuperação de crédito.' },
    { property: 'og:title', content: 'Áreas de Atuação | Felipe Amorim Advogados' },
    { property: 'og:description', content: 'Assessoria jurídica estratégica para empresas e empresários.' },
    { property: 'og:url', content: `${siteConfig.domain}/servicos` },
  ],
  link: [{ rel: 'canonical', href: `${siteConfig.domain}/servicos` }],
});

const services = [
  {
    number: '01',
    title: 'Societário e governança',
    subtitle: 'Estruturas que sustentam o negócio',
    text: 'Organização jurídica das relações entre sócios e da estrutura empresarial, com foco em segurança, continuidade e tomada de decisão.',
    items: ['Constituição e alterações societárias', 'Acordos e conflitos entre sócios', 'Reorganizações societárias', 'Governança corporativa'],
  },
  {
    number: '02',
    title: 'Contratos empresariais',
    subtitle: 'Relações comerciais mais seguras',
    text: 'Estruturação de instrumentos claros e coerentes com a operação, os objetivos e os riscos envolvidos em cada relação comercial.',
    items: ['Elaboração e revisão contratual', 'Negociações estratégicas', 'Distratos e inadimplemento', 'Contratos comerciais e operacionais'],
  },
  {
    number: '03',
    title: 'Consultoria empresarial',
    subtitle: 'Direito integrado à gestão',
    text: 'Apoio jurídico para decisões estratégicas, organização de rotinas e prevenção de riscos na atividade empresarial.',
    items: ['Orientação jurídica estratégica', 'Mapeamento de riscos', 'Políticas e processos internos', 'Assessoria jurídica recorrente'],
  },
  {
    number: '04',
    title: 'Contencioso empresarial',
    subtitle: 'Estratégia para conflitos do negócio',
    text: 'Atuação em disputas empresariais com análise de risco, definição de estratégia e condução objetiva de cada etapa.',
    items: ['Conflitos societários', 'Inadimplemento contratual', 'Ações e defesas empresariais', 'Negociação e composição de litígios'],
  },
  {
    number: '05',
    title: 'Cobrança e recuperação de crédito',
    subtitle: 'Proteção do fluxo financeiro',
    text: 'Estratégias extrajudiciais e judiciais para recuperação de valores, preservando a análise econômica de cada medida.',
    items: ['Cobrança extrajudicial', 'Negociação de dívidas', 'Ações de cobrança e execução', 'Análise de garantias e documentos'],
  },
];
</script>

<template>
  <section class="inner-hero services-hero">
    <div class="inner-hero-mark" aria-hidden="true">§</div>
    <div v-reveal class="container-wide inner-hero-grid">
      <div class="services-hero-copy">
        <p class="eyebrow">Advocacia empresarial</p>
        <h1>Conhecimento técnico.<br /><em>Estratégia aplicada.</em></h1>
        <p>Cada serviço parte do mesmo princípio: compreender o negócio para construir uma solução adequada à empresa.</p>
      </div>
    </div>
  </section>

  <section class="services-list container-wide">
    <article v-for="(service, index) in services" :key="service.number" v-reveal="{ delay: index % 2 * 70 }" class="service-row">
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
      <Clock3 v-reveal :size="44" :stroke-width="1.1" aria-hidden="true" />
      <div v-reveal="{ delay: 80 }">
        <p class="eyebrow">Existe um prazo em andamento?</p>
        <h2>Informe a data no primeiro contato.</h2>
      </div>
      <p v-reveal="{ delay: 160 }">Intimações, audiências e prazos contratuais podem exigir providências rápidas. Avise sobre qualquer data relevante para avaliarmos a urgência.</p>
    </div>
  </section>

  <section class="scope-section container-wide">
    <div v-reveal="{ x: -24, y: 0 }">
      <p class="eyebrow">Proposta transparente</p>
      <h2>Escopo, etapas e honorários definidos antes do início.</h2>
    </div>
    <div v-reveal="{ delay: 100, x: 24, y: 0 }">
      <p>Após compreender a demanda, apresentamos uma proposta com o trabalho previsto, forma de acompanhamento e investimento. Você decide com todas as informações relevantes em mãos.</p>
      <a class="button button-dark" :href="whatsappUrl('Olá! Gostaria de solicitar uma análise inicial do meu caso.')" target="_blank" rel="noopener">Solicitar análise inicial <ArrowUpRight :size="18" /></a>
    </div>
  </section>

  <section class="page-cta page-cta-accent">
    <div v-reveal>
      <p class="eyebrow">Não encontrou sua situação?</p>
      <h2>Conte o contexto.<br />Nós indicamos o <em>caminho.</em></h2>
      <a class="button button-light" :href="whatsappUrl()" target="_blank" rel="noopener">Falar com o escritório <ArrowUpRight :size="18" /></a>
    </div>
  </section>
</template>
