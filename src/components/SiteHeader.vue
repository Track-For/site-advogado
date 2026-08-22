<script setup lang="ts">
import { ArrowUpRight, Menu, X } from '@lucide/vue';
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { whatsappUrl } from '../data/site';

const route = useRoute();
const menuOpen = ref(false);
const scrolled = ref(false);
const solidHeader = computed(() => scrolled.value || route.path !== '/');

function updateScroll() {
  scrolled.value = window.scrollY > 24;
}

watch(
  () => route.fullPath,
  () => {
    menuOpen.value = false;
  },
);

watch(menuOpen, (isOpen) => {
  if (typeof document !== 'undefined') document.body.classList.toggle('menu-open', isOpen);
});

onMounted(() => {
  updateScroll();
  window.addEventListener('scroll', updateScroll, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateScroll);
  document.body.classList.remove('menu-open');
});
</script>

<template>
  <header class="site-header" :class="{ 'is-solid': solidHeader, 'menu-active': menuOpen }">
    <div class="header-inner">
      <RouterLink class="brand" to="/" aria-label="Aurora Tattoo Atelier — início">
        <span class="brand-name">AURORA</span>
        <span class="brand-subtitle">Tattoo Atelier</span>
      </RouterLink>

      <nav class="desktop-nav" aria-label="Navegação principal">
        <RouterLink to="/#trabalhos">Trabalhos</RouterLink>
        <RouterLink to="/sobre">O atelier</RouterLink>
        <RouterLink to="/servicos">Serviços</RouterLink>
      </nav>

      <a class="header-cta" :href="whatsappUrl()" target="_blank" rel="noopener">
        Agendar <ArrowUpRight :size="16" aria-hidden="true" />
      </a>

      <button
        class="menu-button"
        type="button"
        :aria-expanded="menuOpen"
        :aria-label="menuOpen ? 'Fechar menu' : 'Abrir menu'"
        aria-controls="mobile-menu"
        @click="menuOpen = !menuOpen"
      >
        <X v-if="menuOpen" :size="24" aria-hidden="true" />
        <Menu v-else :size="24" aria-hidden="true" />
      </button>
    </div>

    <nav v-show="menuOpen" id="mobile-menu" class="mobile-nav" aria-label="Navegação para celular">
      <RouterLink to="/#trabalhos">Trabalhos <span>01</span></RouterLink>
      <RouterLink to="/sobre">O atelier <span>02</span></RouterLink>
      <RouterLink to="/servicos">Serviços <span>03</span></RouterLink>
      <a :href="whatsappUrl()" target="_blank" rel="noopener">Agendar conversa <ArrowUpRight :size="24" /></a>
      <p>Vila Madalena · São Paulo, SP</p>
    </nav>
  </header>
</template>
