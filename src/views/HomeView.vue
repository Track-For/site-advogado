<script setup lang="ts">
import { ArrowRight, ArrowUpRight, HeartHandshake, PencilRuler, ShieldCheck, Sparkles, Star } from '@lucide/vue';
import { useHead } from '@unhead/vue';
import ContactForm from '../components/ContactForm.vue';
import { siteConfig, whatsappUrl } from '../data/site';

useHead({
  title: 'Aurora Tattoo Atelier | Tatuagens autorais em São Paulo',
  meta: [
    { name: 'description', content: 'Tatuagens autorais, fine line e blackwork na Vila Madalena, em São Paulo. Conheça o portfólio do Aurora Tattoo Atelier e solicite seu orçamento.' },
    { property: 'og:title', content: 'Aurora Tattoo Atelier | Sua pele não é rascunho' },
    { property: 'og:description', content: 'Tatuagem autoral sem cópia, sem fórmula pronta e com um processo feito para a sua história.' },
    { property: 'og:url', content: siteConfig.domain },
  ],
  link: [{ rel: 'canonical', href: siteConfig.domain }],
});

const works = [
  { src: '/images/portfolio-fine-line.jpg', title: 'Botânica íntima', style: 'Fine line', class: 'work-tall' },
  { src: '/images/portfolio-process.jpg', title: 'Traço em processo', style: 'Autoral', class: 'work-wide' },
  { src: '/images/portfolio-blackwork.jpg', title: 'Contraste e presença', style: 'Blackwork', class: '' },
  { src: '/images/portfolio-studio.jpg', title: 'Ritual de criação', style: 'Processo', class: '' },
  { src: '/images/portfolio-art.jpg', title: 'Memória impressa', style: 'Black & grey', class: 'work-wide' },
];

const benefits = [
  { icon: PencilRuler, number: '01', title: 'Desenho 100% autoral', text: 'Cada projeto nasce da sua ideia, anatomia e referências — sem cópias ou fórmulas prontas.' },
  { icon: ShieldCheck, number: '02', title: 'Segurança em cada detalhe', text: 'Materiais descartáveis, ambiente esterilizado e protocolos rigorosos de biossegurança.' },
  { icon: HeartHandshake, number: '03', title: 'Atendimento sem pressa', text: 'Escuta, orientação e transparência para você se sentir seguro antes, durante e depois.' },
  { icon: Sparkles, number: '04', title: 'Acompanhamento real', text: 'Você recebe um guia de cuidados e suporte durante todo o período de cicatrização.' },
];

const faqs = [
  { q: 'Como funciona o orçamento de uma tatuagem?', a: 'O valor considera tamanho, nível de detalhe, local do corpo e tempo estimado de sessão. Envie sua ideia, referências e medidas pelo formulário para receber uma avaliação personalizada.' },
  { q: 'Preciso chegar com o desenho pronto?', a: 'Não. Basta trazer sua história, tema ou referências. O desenho final é criado de forma autoral e ajustado à anatomia da área escolhida.' },
  { q: 'Quais estilos o Aurora atende?', a: 'O atelier é especializado em fine line, blackwork, traço ilustrativo, projetos botânicos e cover-ups selecionados.' },
  { q: 'Onde fica o estúdio?', a: 'O atendimento acontece com hora marcada na Vila Madalena, em São Paulo. O endereço completo é enviado após a confirmação do agendamento.' },
  { q: 'Como cuidar da tatuagem depois da sessão?', a: 'Ao final da sessão você recebe instruções completas de higienização, hidratação, exposição solar e acompanhamento da cicatrização.' },
];
</script>

<template>
  <!-- HERO: direção editorial underground, com alto contraste e tipografia monumental -->
  <section class="hero">
    <div class="hero-index" aria-hidden="true">A—01</div>
    <div class="hero-rail" aria-hidden="true">VILA MADALENA · SP · BRASIL · DESDE 2017</div>

    <div class="hero-copy">
      <p class="eyebrow"><span aria-hidden="true">◆</span> Tatuagem autoral · São Paulo</p>
      <h1><span>Sua pele</span><span>não é</span><em>rascunho.</em></h1>
      <p class="hero-lead">Não tatuamos tendências. Criamos símbolos que só fazem sentido em uma pele: <strong>a sua.</strong></p>
      <div class="hero-actions">
        <a class="button button-primary" :href="whatsappUrl()" target="_blank" rel="noopener">
          Marcar uma ideia <ArrowUpRight :size="18" aria-hidden="true" />
        </a>
        <a class="text-link text-link-light" href="#trabalhos">Explorar trabalhos <span aria-hidden="true">↓</span></a>
      </div>
      <div class="hero-manifesto" aria-label="Manifesto do atelier">
        <span>Feito uma vez.</span>
        <strong>Carregado sempre.</strong>
      </div>
    </div>

    <figure class="hero-visual">
      <div class="hero-image-frame">
        <img src="/images/hero-tattoo.jpg" width="900" height="1200" alt="Tatuador trabalhando com precisão em um projeto autoral" fetchpriority="high" />
      </div>
      <figcaption><span>TRABALHO / 001</span><span>Processo & precisão</span></figcaption>
      <div class="hero-stamp" aria-hidden="true"><strong>100%</strong><span>autoral<br />sem cópia</span></div>
    </figure>

    <div class="hero-proof" aria-label="Destaques do atelier">
      <span><strong>8+</strong> anos de experiência</span>
      <span><strong>600+</strong> histórias tatuadas</span>
      <span><strong>5.0</strong> avaliação dos clientes</span>
    </div>
  </section>

  <div class="ticker" aria-hidden="true">
    <div>Sem cópia <span>✦</span> Fine line <span>✦</span> Blackwork <span>✦</span> Feito em SP <span>✦</span> Sem cópia <span>✦</span> Fine line <span>✦</span> Blackwork <span>✦</span> Feito em SP <span>✦</span></div>
  </div>

  <!-- PORTFÓLIO -->
  <section id="trabalhos" class="section portfolio-section">
    <div class="section-heading container-wide">
      <div>
        <p class="eyebrow">Trabalhos selecionados</p>
        <h2>Pele não é<br /><em>parede branca.</em></h2>
      </div>
      <p>Uma seleção de projetos que nasceram de conversas, memórias e símbolos pessoais. Nenhuma história se repete — o desenho também não.</p>
    </div>

    <div class="portfolio-grid container-wide">
      <figure v-for="(work, index) in works" :key="work.title" class="work-card" :class="work.class">
        <img :src="work.src" :alt="`${work.title} — exemplo de tatuagem no estilo ${work.style}`" width="800" height="1000" loading="lazy" />
        <figcaption>
          <span>{{ String(index + 1).padStart(2, '0') }}</span>
          <strong>{{ work.title }}</strong>
          <small>{{ work.style }}</small>
        </figcaption>
      </figure>
    </div>

    <div class="section-action container-wide">
      <a :href="siteConfig.instagramUrl" target="_blank" rel="noopener" class="outline-link">Ver mais no Instagram <ArrowUpRight :size="18" /></a>
    </div>
  </section>

  <!-- SOBRE: bloco de história resumida -->
  <section class="about-preview">
    <div class="about-image">
      <img src="/images/artist-portrait.jpg" width="900" height="1100" alt="Artista do Aurora Tattoo Atelier concentrado durante a criação de um desenho" loading="lazy" />
      <span>Desde 2017 · SP</span>
    </div>
    <div class="about-copy">
      <p class="eyebrow">Por trás do traço</p>
      <h2>A ideia entra.<br />A cópia <em>não.</em></h2>
      <p class="large-copy">O Aurora nasceu da vontade de tornar a tatuagem um encontro mais humano: com tempo para entender, criar e cuidar.</p>
      <p>Aqui, técnica e sensibilidade caminham juntas. Cada projeto respeita o corpo, o momento e o significado que você escolheu carregar.</p>
      <RouterLink to="/sobre" class="text-arrow-link">Conheça nossa história <ArrowRight :size="19" /></RouterLink>
    </div>
  </section>

  <!-- BENEFÍCIOS -->
  <section class="section benefits-section">
    <div class="section-heading section-heading-light container-wide">
      <div>
        <p class="eyebrow">A experiência Aurora</p>
        <h2>Sem atalho.<br /><em>Sem cópia.</em></h2>
      </div>
      <p>Do primeiro contato à pele cicatrizada, cada etapa foi pensada para unir expressão, conforto e excelência técnica.</p>
    </div>
    <div class="benefits-grid container-wide">
      <article v-for="benefit in benefits" :key="benefit.number" class="benefit-card">
        <component :is="benefit.icon" :size="27" :stroke-width="1.4" aria-hidden="true" />
        <span>{{ benefit.number }}</span>
        <h3>{{ benefit.title }}</h3>
        <p>{{ benefit.text }}</p>
      </article>
    </div>
  </section>

  <!-- PROCESSO -->
  <section class="section process-section">
    <div class="process-intro container-wide">
      <p class="eyebrow">Como funciona</p>
      <h2>Da obsessão<br />à cicatriz.</h2>
    </div>
    <ol class="process-list container-wide">
      <li>
        <span>01</span><div><h3>Conte sua ideia</h3><p>Envie tema, referências, tamanho e local do corpo. Quanto mais contexto, melhor.</p></div>
      </li>
      <li>
        <span>02</span><div><h3>Criação autoral</h3><p>Estudamos a composição e desenhamos uma solução única, pensada para a sua anatomia.</p></div>
      </li>
      <li>
        <span>03</span><div><h3>Sessão com cuidado</h3><p>Alinhamos os detalhes, preparamos a pele e conduzimos a sessão no seu ritmo.</p></div>
      </li>
      <li>
        <span>04</span><div><h3>Cicatrização assistida</h3><p>Você sai com orientações claras e pode contar com nosso suporte no pós.</p></div>
      </li>
    </ol>
  </section>

  <!-- DEPOIMENTO -->
  <section class="testimonial-section">
    <div class="testimonial-inner">
      <div class="stars" aria-label="5 de 5 estrelas">
        <Star v-for="n in 5" :key="n" :size="15" fill="currentColor" aria-hidden="true" />
      </div>
      <blockquote>“Eu cheguei com uma ideia solta e saí com algo que parecia ter sido meu a vida inteira. O cuidado em cada detalhe fez toda a diferença.”</blockquote>
      <p><strong>Marina A.</strong><span>Projeto fine line · São Paulo</span></p>
    </div>
  </section>

  <!-- FAQ visível melhora busca semântica e respostas de IA -->
  <section class="section faq-section">
    <div class="faq-layout container-wide">
      <div class="faq-intro">
        <p class="eyebrow">Perguntas frequentes</p>
        <h2>Perguntar faz<br />parte do ritual.</h2>
        <p>Reunimos respostas diretas para as dúvidas mais comuns de quem está planejando uma nova tatuagem.</p>
      </div>
      <div class="faq-list">
        <details v-for="(faq, index) in faqs" :key="faq.q" :open="index === 0">
          <summary><span>{{ faq.q }}</span><b aria-hidden="true">+</b></summary>
          <p>{{ faq.a }}</p>
        </details>
      </div>
    </div>
  </section>

  <!-- FORMULÁRIO DE CONTATO -->
  <section id="contato" class="contact-section">
    <div class="contact-layout container-wide">
      <div class="contact-intro">
        <p class="eyebrow">Comece seu projeto</p>
        <h2>Deixe uma<br /><em>marca.</em></h2>
        <p>Conte o que você imagina. Respondemos em até 1 dia útil com as próximas etapas e uma estimativa inicial.</p>
        <div class="contact-meta">
          <span>Atendimento</span><strong>Terça a sábado · 10h às 19h</strong>
          <span>Local</span><strong>{{ siteConfig.location }}</strong>
        </div>
      </div>
      <ContactForm />
    </div>
  </section>
</template>
