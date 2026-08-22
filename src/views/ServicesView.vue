<script setup lang="ts">
import { ArrowUpRight, Check } from '@lucide/vue';
import { useHead } from '@unhead/vue';
import { siteConfig, whatsappUrl } from '../data/site';

useHead({
  title: 'Serviços de Tatuagem | Fine Line, Blackwork e Autoral em SP',
  meta: [
    { name: 'description', content: 'Conheça os serviços do Aurora Tattoo Atelier: fine line, blackwork, tatuagem autoral, cover-up e retoques em São Paulo.' },
    { property: 'og:title', content: 'Serviços | Aurora Tattoo Atelier' },
    { property: 'og:description', content: 'Fine line, blackwork, projetos autorais e cover-ups criados para cada corpo.' },
    { property: 'og:url', content: `${siteConfig.domain}/servicos` },
    { name: 'twitter:title', content: 'Serviços | Aurora Tattoo Atelier' },
    { name: 'twitter:description', content: 'Fine line, blackwork, projetos autorais e cover-ups criados para cada corpo.' },
  ],
  link: [{ rel: 'canonical', href: `${siteConfig.domain}/servicos` }],
});

const services = [
  { number: '01', title: 'Fine line', subtitle: 'Delicadeza com intenção', text: 'Linhas finas, composições leves e detalhes precisos para projetos minimalistas, botânicos ou simbólicos.', tags: ['Traço fino', 'Botânico', 'Minimalista'], image: '/images/portfolio-fine-line.jpg' },
  { number: '02', title: 'Blackwork', subtitle: 'Contraste que permanece', text: 'Projetos em preto com presença gráfica, áreas sólidas e composições que valorizam o movimento do corpo.', tags: ['Preto sólido', 'Gráfico', 'Ornamental'], image: '/images/portfolio-blackwork.jpg' },
  { number: '03', title: 'Autoral', subtitle: 'Sua história, outra forma', text: 'Do conceito ao desenho final, criamos uma peça exclusiva a partir das suas referências e significado pessoal.', tags: ['Exclusivo', 'Ilustrativo', 'Sob medida'], image: '/images/portfolio-process.jpg' },
  { number: '04', title: 'Cover-up', subtitle: 'Um novo começo', text: 'Estudo técnico para transformar tatuagens antigas em novas composições, respeitando contraste, tamanho e viabilidade.', tags: ['Releitura', 'Cobertura', 'Avaliação'], image: '/images/portfolio-art.jpg' },
];

const sessionIncludes = [
  'Conversa inicial e direção criativa',
  'Desenho exclusivo para o projeto',
  'Materiais descartáveis e esterilizados',
  'Orientações completas de cicatrização',
  'Suporte pós-sessão pelo WhatsApp',
];
</script>

<template>
  <section class="inner-hero services-hero">
    <div class="container-wide inner-hero-grid">
      <div>
        <p class="eyebrow">Serviços</p>
        <h1>Escolha o idioma.<br /><em>A gente cria a voz.</em></h1>
      </div>
      <p>Escolha um ponto de partida. A partir dele, construímos uma linguagem visual única para o que você quer expressar.</p>
    </div>
  </section>

  <section class="services-list container-wide">
    <article v-for="service in services" :key="service.number" class="service-row">
      <div class="service-number">{{ service.number }}</div>
      <div class="service-image"><img :src="service.image" :alt="`Exemplo de tatuagem no estilo ${service.title}`" width="700" height="850" loading="lazy" /></div>
      <div class="service-copy">
        <p class="service-subtitle">{{ service.subtitle }}</p>
        <h2>{{ service.title }}</h2>
        <p>{{ service.text }}</p>
        <ul><li v-for="tag in service.tags" :key="tag">{{ tag }}</li></ul>
        <a :href="whatsappUrl(`Olá! Quero saber mais sobre um projeto de ${service.title}.`)" target="_blank" rel="noopener">Solicitar orçamento <ArrowUpRight :size="17" /></a>
      </div>
    </article>
  </section>

  <section class="included-section">
    <div class="included-layout container-wide">
      <div>
        <p class="eyebrow">Em toda sessão</p>
        <h2>O invisível também<br />faz parte da <em>obra.</em></h2>
        <p>Você não contrata apenas o tempo de máquina. Todo projeto inclui pesquisa, desenho e acompanhamento.</p>
      </div>
      <ul>
        <li v-for="item in sessionIncludes" :key="item"><Check :size="18" aria-hidden="true" />{{ item }}</li>
      </ul>
    </div>
  </section>

  <section class="pricing-note container-wide">
    <div>
      <p class="eyebrow">Investimento</p>
      <h2>Quanto custa<br />uma tatuagem?</h2>
    </div>
    <div>
      <p>O valor é calculado conforme tamanho, complexidade, local do corpo e tempo de sessão. Por isso, cada orçamento é individual.</p>
      <p>Envie sua ideia com referências e medidas aproximadas. Você receberá uma estimativa clara antes de decidir pelo agendamento.</p>
      <a class="button button-dark" :href="whatsappUrl('Olá! Gostaria de solicitar um orçamento para minha tatuagem.')" target="_blank" rel="noopener">Pedir uma estimativa <ArrowUpRight :size="18" /></a>
    </div>
  </section>

  <section class="page-cta page-cta-accent">
    <div>
      <p class="eyebrow">Seu próximo projeto</p>
      <h2>O que merece<br />virar <em>marca?</em></h2>
      <a class="button button-light" :href="whatsappUrl()" target="_blank" rel="noopener">Conversar no WhatsApp <ArrowUpRight :size="18" /></a>
    </div>
  </section>
</template>
