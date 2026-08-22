<script setup lang="ts">
import { ArrowUpRight } from '@lucide/vue';
import { siteConfig, whatsappUrl } from '../data/site';

const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="site-footer">
    <div class="footer-top container-wide">
      <div>
        <p class="footer-kicker">Uma decisão bem orientada começa por uma conversa.</p>
        <h2>Vamos entender<br />o seu <em>caso.</em></h2>
      </div>
      <a class="circle-link" :href="whatsappUrl()" target="_blank" rel="noopener" aria-label="Conversar no WhatsApp">
        <ArrowUpRight :size="30" aria-hidden="true" />
      </a>
    </div>

    <div class="footer-grid container-wide">
      <RouterLink class="footer-brand" to="/" aria-label="Página inicial">
        <strong>A&P</strong>
        <span>Almeida & Prado Advocacia</span>
      </RouterLink>
      <div>
        <p class="footer-label">Escritório</p>
        <p>{{ siteConfig.address }}<br />Atendimento presencial e online</p>
      </div>
      <div>
        <p class="footer-label">Contato</p>
        <a :href="`mailto:${siteConfig.email}`">{{ siteConfig.email }}</a><br />
        <a :href="whatsappUrl()" target="_blank" rel="noopener">{{ siteConfig.phoneLabel }}</a>
      </div>
      <div>
        <p class="footer-label">Navegação</p>
        <RouterLink to="/sobre">O escritório</RouterLink><br />
        <RouterLink to="/servicos">Serviços</RouterLink>
      </div>
    </div>

    <div class="footer-bottom container-wide">
      <span>© {{ currentYear }} {{ siteConfig.name }}</span>
      <span>Conteúdo informativo. Cada caso exige análise individual.</span>
      <RouterLink to="/">Voltar ao início ↑</RouterLink>
    </div>
  </footer>
</template>
