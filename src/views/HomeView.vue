<script setup lang="ts">
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  FileSignature,
  Landmark,
  Scale,
  ShieldCheck,
  UsersRound,
} from '@lucide/vue';
import { useHead } from '@unhead/vue';
import ContactForm from '../components/ContactForm.vue';
import { siteConfig, whatsappUrl } from '../data/site';

useHead({
  title: 'Felipe Amorim Advogados | Clareza para decidir',
  meta: [
    { name: 'description', content: 'Atuação jurídica estratégica em direito empresarial, contratos, direito civil, família e sucessões, com atendimento próximo e responsável.' },
    { property: 'og:title', content: 'Felipe Amorim Advogados' },
    { property: 'og:description', content: 'Clareza para decidir. Firmeza para defender.' },
    { property: 'og:url', content: siteConfig.domain },
  ],
  link: [{ rel: 'canonical', href: siteConfig.domain }],
});

const introItems = [
  { icon: Scale, title: 'Felipe Amorim', text: 'Conheça a visão e a forma de conduzir cada caso com presença e estratégia.', link: '/sobre', label: 'Conheça o escritório' },
  { icon: BriefcaseBusiness, title: 'Áreas de atuação', text: 'Soluções jurídicas para pessoas, famílias e empresas.', link: '/servicos', label: 'Ver serviços' },
  { icon: UsersRound, title: 'Fale conosco', text: 'Conte seu contexto e receba orientação sobre o próximo passo.', link: '#contato', label: 'Iniciar conversa' },
];

const practiceAreas = [
  { icon: BriefcaseBusiness, number: '01', title: 'Direito empresarial', text: 'Suporte jurídico para decisões societárias, conflitos entre sócios e rotina da empresa.' },
  { icon: FileSignature, number: '02', title: 'Contratos', text: 'Elaboração, revisão e negociação de instrumentos claros, equilibrados e seguros.' },
  { icon: Landmark, number: '03', title: 'Direito civil', text: 'Atuação consultiva e contenciosa em obrigações, patrimônio e relações privadas.' },
  { icon: UsersRound, number: '04', title: 'Família e sucessões', text: 'Orientação cuidadosa em divórcios, inventários e planejamento sucessório.' },
];

const principles = [
  { number: '01', title: 'Entender', text: 'Ouvimos o contexto completo, identificamos riscos e definimos prioridades.' },
  { number: '02', title: 'Planejar', text: 'Apresentamos caminhos, impactos e alternativas em linguagem objetiva.' },
  { number: '03', title: 'Conduzir', text: 'Executamos a estratégia com proximidade e atualização em cada etapa.' },
];

const faqs = [
  { q: 'Como funciona o primeiro atendimento?', a: 'O primeiro contato serve para entendermos o tema, identificarmos urgências e verificarmos se o caso está dentro da atuação do escritório. Depois, explicamos o formato e os próximos passos.' },
  { q: 'O escritório atende de forma online?', a: 'Sim. Atendemos clientes em todo o Brasil por videoconferência, com envio seguro de documentos e acompanhamento remoto.' },
  { q: 'Quais documentos devo separar?', a: 'Depende do caso. No primeiro contato, informe o contexto e os prazos existentes. Nossa equipe indicará apenas os documentos necessários para a análise.' },
  { q: 'Quanto custa uma consulta ou serviço jurídico?', a: 'Os honorários variam conforme a complexidade, urgência e escopo. A proposta é apresentada com clareza antes do início da contratação.' },
];
</script>

<template>
  <section class="photo-hero">
    <img src="/images/felipe-amorim-hero.png" width="1536" height="1024" alt="Felipe Amorim em seu escritório" fetchpriority="high" />
    <div class="photo-hero-shade" aria-hidden="true"></div>
    <div class="photo-hero-copy">
      <p class="eyebrow">Felipe Amorim · Advogados</p>
      <h1>Clareza para<br />decidir. Firmeza<br />para <em>defender.</em></h1>
      <p>Atuação jurídica estratégica, próxima e responsável para proteger o que importa e construir caminhos seguros.</p>
      <div class="photo-hero-actions">
        <a class="button button-light" :href="whatsappUrl()" target="_blank" rel="noopener">Agendar uma conversa <ArrowUpRight :size="17" /></a>
        <a href="#atuacao">Conheça nossa atuação <span>↓</span></a>
      </div>
    </div>
    <div class="photo-hero-note">
      <span>Atendimento pessoal e estratégico</span>
      <strong>Presencial · Online</strong>
    </div>
  </section>

  <section id="atuacao" class="intro-panel">
    <div class="intro-heading container-wide">
      <p class="mini-label">Introdução</p>
      <h2>Experiência jurídica para transformar<br />complexidade em boas decisões.</h2>
    </div>
    <div class="intro-grid container-wide">
      <article v-for="item in introItems" :key="item.title">
        <component :is="item.icon" :size="27" :stroke-width="1.45" aria-hidden="true" />
        <h3>{{ item.title }}</h3>
        <p>{{ item.text }}</p>
        <RouterLink v-if="item.link.startsWith('/')" :to="item.link">{{ item.label }}</RouterLink>
        <a v-else :href="item.link">{{ item.label }}</a>
      </article>
    </div>
  </section>

  <section class="overview-section container-wide">
    <div class="overview-copy">
      <p class="mini-label">Felipe Amorim Advogados</p>
      <h2>Direito que acompanha suas decisões.</h2>
      <p>Escuta atenta, estratégia e comunicação simples para que você compreenda o cenário e escolha o melhor caminho.</p>
      <div class="overview-links">
        <RouterLink v-for="area in practiceAreas" :key="area.number" to="/servicos">
          <span>{{ area.title }}</span><b>+</b>
        </RouterLink>
      </div>
    </div>
    <figure class="overview-image">
      <img src="/images/felipe-amorim-hero.png" width="1536" height="1024" alt="Felipe Amorim em seu escritório" loading="lazy" />
      <figcaption>Felipe Amorim · Atendimento próximo</figcaption>
    </figure>
  </section>

  <section class="team-feature">
    <div class="team-feature-signature" aria-hidden="true">
      <span>FA</span>
      <small>Felipe Amorim<br />Advogados</small>
    </div>
    <div class="team-feature-copy">
      <p class="mini-label">Presença em cada etapa</p>
      <h2>Cada caso começa com escuta.</h2>
      <p>Você fala com quem analisa e conduz sua demanda. Cada recomendação considera o impacto jurídico, humano e financeiro da decisão.</p>
      <div class="team-feature-actions">
        <RouterLink to="/sobre" class="soft-button">Conheça o escritório</RouterLink>
        <a :href="whatsappUrl()" target="_blank" rel="noopener" class="dark-pill">Agendar conversa</a>
      </div>
    </div>
    <div class="team-contact-chip">
      <span>FA</span>
      <p>Fale com o escritório<br /><strong>{{ siteConfig.phoneLabel }}</strong></p>
    </div>
  </section>

  <section class="section solutions-section">
    <div class="solutions-heading container-wide">
      <div>
        <p class="mini-label">Nossas soluções</p>
        <h2>Atuação jurídica<br />pensada para a vida real.</h2>
      </div>
      <p>Da prevenção de riscos à condução de conflitos, construímos respostas proporcionais ao que está em jogo.</p>
    </div>
    <div class="solutions-grid container-wide">
      <article v-for="area in practiceAreas" :key="area.number">
        <div><span>{{ area.number }}</span><component :is="area.icon" :size="24" :stroke-width="1.4" /></div>
        <h3>{{ area.title }}</h3>
        <p>{{ area.text }}</p>
        <RouterLink to="/servicos" :aria-label="`Saiba mais sobre ${area.title}`">Saiba mais <ArrowUpRight :size="15" /></RouterLink>
      </article>
    </div>
  </section>

  <section class="process-v2">
    <div class="process-v2-heading container-wide">
      <p class="mini-label">Como trabalhamos</p>
      <h2>Clareza do primeiro contato<br />até a última decisão.</h2>
    </div>
    <ol class="process-v2-list container-wide">
      <li v-for="principle in principles" :key="principle.number">
        <span>{{ principle.number }}</span>
        <h3>{{ principle.title }}</h3>
        <p>{{ principle.text }}</p>
        <ArrowRight :size="20" aria-hidden="true" />
      </li>
    </ol>
    <div class="trust-line container-wide">
      <ShieldCheck :size="24" :stroke-width="1.4" />
      <span>Sigilo, responsabilidade e transparência em todas as etapas.</span>
    </div>
  </section>

  <section class="section faq-section faq-v2">
    <div class="faq-layout container-wide">
      <div class="faq-intro">
        <p class="mini-label">Perguntas frequentes</p>
        <h2>Informação também<br />traz segurança.</h2>
        <p>Respostas diretas para as principais dúvidas antes do primeiro atendimento.</p>
      </div>
      <div class="faq-list">
        <details v-for="(faq, index) in faqs" :key="faq.q" :open="index === 0">
          <summary><span>{{ faq.q }}</span><b aria-hidden="true">+</b></summary>
          <p>{{ faq.a }}</p>
        </details>
      </div>
    </div>
  </section>

  <section id="contato" class="contact-section contact-v2">
    <div class="contact-layout container-wide">
      <div class="contact-intro">
        <p class="mini-label">Fale com o escritório</p>
        <h2>Seu próximo passo começa com uma conversa.</h2>
        <p>Conte brevemente o que está acontecendo. O escritório retornará para orientar as próximas etapas.</p>
        <div class="contact-meta">
          <span>Atendimento</span><strong>Segunda a sexta · 9h às 18h</strong>
          <span>Formato</span><strong>{{ siteConfig.location }}</strong>
        </div>
      </div>
      <ContactForm />
    </div>
  </section>
</template>
