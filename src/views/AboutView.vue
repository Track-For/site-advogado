<script setup lang="ts">
import { ArrowUpRight, Eye, Heart, ShieldCheck } from '@lucide/vue';
import { useHead } from '@unhead/vue';
import { siteConfig, whatsappUrl } from '../data/site';

useHead({
  title: 'Sobre o Atelier | Aurora Tattoo Atelier',
  meta: [
    { name: 'description', content: 'Conheça a história, a missão e o processo criativo do Aurora Tattoo Atelier, estúdio de tatuagem autoral na Vila Madalena, São Paulo.' },
    { property: 'og:title', content: 'Sobre o Aurora Tattoo Atelier' },
    { property: 'og:description', content: 'Um atelier onde técnica, escuta e expressão pessoal caminham juntas.' },
    { property: 'og:url', content: `${siteConfig.domain}/sobre` },
    { name: 'twitter:title', content: 'Sobre o Aurora Tattoo Atelier' },
    { name: 'twitter:description', content: 'Um atelier onde técnica, escuta e expressão pessoal caminham juntas.' },
  ],
  link: [{ rel: 'canonical', href: `${siteConfig.domain}/sobre` }],
});

const values = [
  { icon: Eye, title: 'Escuta atenta', text: 'A criação começa entendendo o que a imagem significa para você.' },
  { icon: Heart, title: 'Respeito ao corpo', text: 'Desenhamos para a anatomia, o movimento e o tempo de cada pessoa.' },
  { icon: ShieldCheck, title: 'Cuidado radical', text: 'Segurança, higiene e transparência são parte essencial da arte.' },
];
</script>

<template>
  <section class="inner-hero about-hero">
    <div class="container-wide inner-hero-grid">
      <div>
        <p class="eyebrow">O atelier</p>
        <h1>Traço com técnica.<br /><em>Presença com propósito.</em></h1>
      </div>
      <p>O Aurora é um espaço de criação autoral, cuidado e expressão — feito para que cada pessoa viva a tatuagem como um encontro consigo.</p>
    </div>
  </section>

  <section class="story-section container-wide">
    <figure class="story-image">
      <img src="/images/artist-portrait.jpg" width="900" height="1100" alt="Artista do Aurora Tattoo Atelier em seu processo criativo" />
      <figcaption>Alex Nunes · Artista residente</figcaption>
    </figure>
    <div class="story-copy">
      <p class="eyebrow">Nossa história</p>
      <h2>Um lugar para criar<br />sem <em>automatismos.</em></h2>
      <p class="large-copy">Tudo começou em 2017, com uma mesa de desenho, uma máquina e a convicção de que tatuar poderia ser um processo mais cuidadoso.</p>
      <p>Depois de anos trabalhando em estúdios compartilhados, o Aurora abriu as portas na Vila Madalena para receber menos projetos por dia e dedicar mais atenção a cada um deles.</p>
      <p>O atelier cresceu sem perder a essência: escutar antes de desenhar, explicar antes de executar e acompanhar mesmo depois que a sessão termina.</p>
      <div class="signature">Alex Nunes <span>Fundador & artista</span></div>
    </div>
  </section>

  <section class="mission-section">
    <div class="mission-copy container-wide">
      <p class="eyebrow">Nossa missão</p>
      <h2>Transformar histórias em arte viva, com respeito ao corpo e verdade no processo.</h2>
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

  <section class="studio-section">
    <div class="studio-copy">
      <p class="eyebrow">Nosso espaço</p>
      <h2>Privacidade, calma<br />e boas conversas.</h2>
      <p>Um estúdio reservado, pensado para acolher uma pessoa por vez. Luz confortável, equipamentos profissionais e tudo preparado para você viver a sessão com tranquilidade.</p>
      <ul>
        <li><span>01</span> Atendimento exclusivamente com hora marcada</li>
        <li><span>02</span> Materiais descartáveis e esterilização certificada</li>
        <li><span>03</span> Fácil acesso na Vila Madalena, São Paulo</li>
      </ul>
    </div>
    <img src="/images/studio-detail.jpg" width="1100" height="900" alt="Ambiente acolhedor e profissional do atelier de tatuagem" loading="lazy" />
  </section>

  <section class="numbers-section container-wide" aria-label="Números do Aurora Tattoo Atelier">
    <div><strong>8+</strong><span>anos dedicados à tatuagem</span></div>
    <div><strong>600+</strong><span>projetos realizados</span></div>
    <div><strong>5.0</strong><span>média de avaliação</span></div>
    <div><strong>1:1</strong><span>atendimento individual</span></div>
  </section>

  <section class="page-cta">
    <div>
      <p class="eyebrow">Vamos conversar?</p>
      <h2>Tem uma história<br />pedindo <em>forma?</em></h2>
      <a class="button button-light" :href="whatsappUrl()" target="_blank" rel="noopener">Compartilhe sua ideia <ArrowUpRight :size="18" /></a>
    </div>
  </section>
</template>
