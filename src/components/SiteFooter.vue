<script setup lang="ts">
import { ArrowUpRight } from '@lucide/vue';
import { siteConfig, whatsappUrl } from '../data/site';

const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="site-footer">
    <div class="footer-top container-wide">
      <div>
        <p class="footer-kicker">Pronto para transformar sua ideia?</p>
        <h2>Vamos criar algo<br /><em>que seja seu.</em></h2>
      </div>
      <a class="circle-link" :href="whatsappUrl()" target="_blank" rel="noopener" aria-label="Conversar no WhatsApp">
        <ArrowUpRight :size="30" aria-hidden="true" />
      </a>
    </div>

    <div class="footer-grid container-wide">
      <RouterLink class="footer-brand" to="/">
        <strong>AURORA</strong>
        <span>Tattoo Atelier</span>
      </RouterLink>
      <div>
        <p class="footer-label">Visite</p>
        <p>{{ siteConfig.address }}<br />Atendimento com hora marcada</p>
      </div>
      <div>
        <p class="footer-label">Contato</p>
        <a :href="`mailto:${siteConfig.email}`">{{ siteConfig.email }}</a><br />
        <a :href="whatsappUrl()" target="_blank" rel="noopener">{{ siteConfig.phoneLabel }}</a>
      </div>
      <div>
        <p class="footer-label">Acompanhe</p>
        <a :href="siteConfig.instagramUrl" target="_blank" rel="noopener">Instagram ↗</a>
      </div>
    </div>

    <div class="footer-bottom container-wide">
      <span>© {{ currentYear }} {{ siteConfig.name }}</span>
      <span>Arte, cuidado e presença.</span>
      <RouterLink to="/">Voltar ao início ↑</RouterLink>
    </div>
  </footer>
</template>
