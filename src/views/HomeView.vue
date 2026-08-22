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
  title: 'Almeida & Prado Advocacia | Estratégia jurídica com clareza',
  meta: [
    { name: 'description', content: 'Advocacia estratégica em direito empresarial, contratos, direito civil, família e sucessões. Atendimento próximo, claro e responsável.' },
    { property: 'og:title', content: 'Almeida & Prado | Advocacia estratégica' },
    { property: 'og:description', content: 'Orientação jurídica clara para proteger seu patrimônio, sua empresa e seus próximos passos.' },
    { property: 'og:url', content: siteConfig.domain },
  ],
  link: [{ rel: 'canonical', href: siteConfig.domain }],
});

const practiceAreas = [
  { icon: BriefcaseBusiness, number: '01', title: 'Direito empresarial', text: 'Suporte jurídico para decisões societárias, reorganizações, conflitos entre sócios e rotina da empresa.' },
  { icon: FileSignature, number: '02', title: 'Contratos', text: 'Elaboração, revisão e negociação de instrumentos que reduzam riscos e deem segurança às relações.' },
  { icon: Landmark, number: '03', title: 'Direito civil', text: 'Atuação consultiva e contenciosa em obrigações, responsabilidade civil, patrimônio e relações privadas.' },
  { icon: UsersRound, number: '04', title: 'Família e sucessões', text: 'Orientação cuidadosa em divórcios, inventários, planejamento sucessório e proteção patrimonial.' },
];

const principles = [
  { number: '01', title: 'Diagnóstico', text: 'Entendemos o contexto completo, os riscos e o que realmente precisa ser protegido.' },
  { number: '02', title: 'Estratégia', text: 'Apresentamos caminhos possíveis, custos, prazos e impactos em linguagem objetiva.' },
  { number: '03', title: 'Condução', text: 'Executamos a estratégia com comunicação próxima e atualização em cada etapa relevante.' },
];

const faqs = [
  { q: 'Como funciona o primeiro atendimento?', a: 'O primeiro contato serve para entendermos o tema, identificarmos urgências e verificarmos se o caso está dentro da atuação do escritório. Depois, explicamos o formato e os próximos passos.' },
  { q: 'O escritório atende de forma online?', a: 'Sim. Atendemos clientes em todo o Brasil por videoconferência, com envio seguro de documentos e acompanhamento remoto.' },
  { q: 'Quais documentos devo separar?', a: 'Depende do caso. No primeiro contato, informe o contexto e os prazos existentes. Nossa equipe indicará apenas os documentos necessários para a análise.' },
  { q: 'Quanto custa uma consulta ou serviço jurídico?', a: 'Os honorários variam conforme a complexidade, urgência e escopo do trabalho. A proposta é apresentada com clareza antes do início da contratação.' },
];
</script>

<template>
  <section class="hero legal-hero">
    <div class="hero-grid" aria-hidden="true"></div>
    <div class="hero-index" aria-hidden="true">A&P</div>
    <div class="hero-rail" aria-hidden="true">ESTRATÉGIA · PROXIMIDADE · RESPONSABILIDADE</div>

    <div class="hero-copy">
      <p class="eyebrow"><span aria-hidden="true">◆</span> Advocacia estratégica · São Paulo</p>
      <h1><span>Decisões</span><span>jurídicas,</span><em>sem incerteza.</em></h1>
      <p class="hero-lead">Orientação clara para proteger seu patrimônio, sua empresa e seus próximos passos. <strong>Atendimento direto por advogados.</strong></p>
      <div class="hero-actions">
        <a class="button button-primary" :href="whatsappUrl()" target="_blank" rel="noopener">
          Agendar análise inicial <ArrowUpRight :size="18" aria-hidden="true" />
        </a>
        <a class="text-link text-link-light" href="#atuacao">Conheça nossa atuação <span aria-hidden="true">↓</span></a>
      </div>
      <div class="hero-manifesto" aria-label="Compromisso do escritório">
        <span>Clareza no caminho.</span>
        <strong>Firmeza na defesa.</strong>
      </div>
    </div>

    <aside class="hero-visual legal-dossier" aria-label="Compromissos do escritório">
      <div class="dossier-card">
        <div class="dossier-brand"><span>A&P</span><small>ALMEIDA & PRADO</small></div>
        <p>ADVOCACIA ESTRATÉGICA</p>
        <strong>A solução começa quando o problema é compreendido por inteiro.</strong>
        <dl>
          <div><dt>01</dt><dd>Escuta ativa</dd></div>
          <div><dt>02</dt><dd>Estratégia sob medida</dd></div>
          <div><dt>03</dt><dd>Comunicação transparente</dd></div>
        </dl>
      </div>
    </aside>

    <div class="hero-proof" aria-label="Formas de atendimento">
      <span><strong>01</strong> presencial em São Paulo</span>
      <span><strong>02</strong> online para todo o Brasil</span>
      <span><strong>03</strong> retorno em até 1 dia útil</span>
    </div>
  </section>

  <div class="ticker" aria-hidden="true">
    <div>Direito empresarial <span>✦</span> Contratos <span>✦</span> Direito civil <span>✦</span> Família e sucessões <span>✦</span> Direito empresarial <span>✦</span> Contratos <span>✦</span> Direito civil <span>✦</span> Família e sucessões <span>✦</span></div>
  </div>

  <section id="atuacao" class="section practice-section">
    <div class="section-heading container-wide">
      <div>
        <p class="eyebrow">Áreas de atuação</p>
        <h2>Experiência que<br /><em>orienta decisões.</em></h2>
      </div>
      <p>Atuação consultiva e contenciosa para pessoas, famílias e empresas, com estratégia construída para a realidade de cada caso.</p>
    </div>

    <div class="practice-grid container-wide">
      <article v-for="area in practiceAreas" :key="area.number" class="practice-card">
        <div class="practice-card-top">
          <component :is="area.icon" :size="27" :stroke-width="1.45" aria-hidden="true" />
          <span>{{ area.number }}</span>
        </div>
        <h3>{{ area.title }}</h3>
        <p>{{ area.text }}</p>
        <RouterLink to="/servicos" :aria-label="`Saiba mais sobre ${area.title}`">Saiba mais <ArrowUpRight :size="17" /></RouterLink>
      </article>
    </div>
  </section>

  <section class="statement-section">
    <div class="statement-number" aria-hidden="true">§</div>
    <div class="statement-copy container-wide">
      <p class="eyebrow">Nossa forma de atuar</p>
      <h2>O juridiquês fica conosco.<br /><em>A clareza fica com você.</em></h2>
      <p>Traduzimos cenários complexos em decisões possíveis. Sem promessas vazias, sem respostas genéricas e sem deixar você no escuro.</p>
      <RouterLink to="/sobre" class="text-arrow-link">Conheça o escritório <ArrowRight :size="18" /></RouterLink>
    </div>
  </section>

  <section class="section method-section">
    <div class="method-intro container-wide">
      <div>
        <p class="eyebrow">Como trabalhamos</p>
        <h2>Do contexto à<br /><em>estratégia.</em></h2>
      </div>
      <p>Cada caso começa com escuta e termina com um plano compreensível. Você sabe o que está sendo feito, por quê e qual é o próximo passo.</p>
    </div>
    <ol class="method-list container-wide">
      <li v-for="principle in principles" :key="principle.number">
        <span>{{ principle.number }}</span>
        <h3>{{ principle.title }}</h3>
        <p>{{ principle.text }}</p>
      </li>
    </ol>
  </section>

  <section class="reassurance-section">
    <div class="reassurance-inner container-wide">
      <ShieldCheck :size="38" :stroke-width="1.25" aria-hidden="true" />
      <p>Sigilo, responsabilidade e transparência em todas as etapas do atendimento.</p>
      <small>A advocacia é uma relação de confiança.</small>
    </div>
  </section>

  <section class="section faq-section">
    <div class="faq-layout container-wide">
      <div class="faq-intro">
        <p class="eyebrow">Perguntas frequentes</p>
        <h2>Informação também<br /><em>traz segurança.</em></h2>
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

  <section id="contato" class="contact-section">
    <div class="contact-layout container-wide">
      <div class="contact-intro">
        <p class="eyebrow">Fale com o escritório</p>
        <h2>Seu próximo passo<br />começa com <em>clareza.</em></h2>
        <p>Conte brevemente o que está acontecendo. Retornaremos em até 1 dia útil para orientar as próximas etapas.</p>
        <div class="contact-meta">
          <span>Atendimento</span><strong>Segunda a sexta · 9h às 18h</strong>
          <span>Formato</span><strong>{{ siteConfig.location }}</strong>
        </div>
      </div>
      <ContactForm />
    </div>
  </section>
</template>
