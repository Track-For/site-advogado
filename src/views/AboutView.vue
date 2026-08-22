<script setup lang="ts">
import { ArrowUpRight, Eye, MessageSquareText, Scale, ShieldCheck } from '@lucide/vue';
import { useHead } from '@unhead/vue';
import { siteConfig, whatsappUrl } from '../data/site';

useHead({
  title: 'O Escritório | Almeida & Prado Advocacia',
  meta: [
    { name: 'description', content: 'Conheça a forma de atuação do Almeida & Prado: advocacia próxima, estratégica e comprometida com decisões claras.' },
    { property: 'og:title', content: 'O Escritório | Almeida & Prado Advocacia' },
    { property: 'og:description', content: 'Estratégia jurídica com escuta, clareza e responsabilidade.' },
    { property: 'og:url', content: `${siteConfig.domain}/sobre` },
  ],
  link: [{ rel: 'canonical', href: `${siteConfig.domain}/sobre` }],
});

const values = [
  { icon: Eye, title: 'Visão completa', text: 'Nenhuma questão jurídica existe isoladamente. Consideramos o contexto humano, financeiro e empresarial.' },
  { icon: MessageSquareText, title: 'Linguagem clara', text: 'Explicamos cenários, riscos e alternativas sem transformar complexidade em distância.' },
  { icon: ShieldCheck, title: 'Responsabilidade', text: 'Atuação técnica, confidencial e realista, sem promessas de resultado ou respostas prontas.' },
];
</script>

<template>
  <section class="inner-hero about-hero">
    <div class="inner-hero-mark" aria-hidden="true">AP</div>
    <div class="container-wide inner-hero-grid">
      <div>
        <p class="eyebrow">O escritório</p>
        <h1>Estratégia jurídica<br />com <em>presença.</em></h1>
      </div>
      <p>Um escritório construído para transformar temas complexos em decisões conscientes, com proximidade e rigor técnico.</p>
    </div>
  </section>

  <section class="story-section container-wide">
    <div class="story-seal" aria-hidden="true">
      <Scale :size="64" :stroke-width="1" />
      <strong>A&P</strong>
      <span>Advocacia estratégica</span>
    </div>
    <div class="story-copy">
      <p class="eyebrow">Nossa visão</p>
      <h2>Direito não é só resposta.<br />É direção.</h2>
      <p class="large-copy">O Almeida & Prado nasceu de uma convicção simples: um bom trabalho jurídico precisa ser tecnicamente sólido e compreensível para quem toma a decisão.</p>
      <p>Por isso, começamos pela escuta. Antes de apontar caminhos, entendemos relações, prioridades, prazos e riscos. A estratégia surge desse contexto — não de uma fórmula.</p>
      <p>Atuamos de forma consultiva e contenciosa, acompanhando pessoas, famílias e empresas em decisões que exigem segurança, discrição e visão de longo prazo.</p>
    </div>
  </section>

  <section class="mission-section">
    <div class="mission-copy container-wide">
      <p class="eyebrow">O que nos orienta</p>
      <h2>Menos formalidade vazia.<br />Mais <em>entendimento.</em></h2>
    </div>
    <div class="values-grid container-wide">
      <article v-for="(value, index) in values" :key="value.title">
        <span>0{{ index + 1 }}</span>
        <component :is="value.icon" :size="30" :stroke-width="1.35" aria-hidden="true" />
        <h3>{{ value.title }}</h3>
        <p>{{ value.text }}</p>
      </article>
    </div>
  </section>

  <section class="approach-section container-wide">
    <div class="approach-heading">
      <p class="eyebrow">Atendimento</p>
      <h2>Próximo quando importa.<br />Objetivo sempre.</h2>
    </div>
    <div class="approach-content">
      <p>Você fala diretamente com quem analisa e conduz seu caso. A cada etapa relevante, recebe contexto suficiente para decidir com segurança.</p>
      <ul>
        <li><span>01</span> Atendimento presencial em São Paulo</li>
        <li><span>02</span> Consultas online em todo o Brasil</li>
        <li><span>03</span> Comunicação clara sobre escopo, prazos e honorários</li>
        <li><span>04</span> Sigilo e proteção das informações compartilhadas</li>
      </ul>
    </div>
  </section>

  <section class="page-cta">
    <div>
      <p class="eyebrow">Vamos conversar?</p>
      <h2>Entenda suas opções<br />antes de <em>decidir.</em></h2>
      <a class="button button-light" :href="whatsappUrl()" target="_blank" rel="noopener">Agendar atendimento <ArrowUpRight :size="18" /></a>
    </div>
  </section>
</template>
