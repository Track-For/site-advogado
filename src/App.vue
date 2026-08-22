<script setup lang="ts">
import FloatingWhatsapp from './components/FloatingWhatsapp.vue';
import SiteFooter from './components/SiteFooter.vue';
import SiteHeader from './components/SiteHeader.vue';
</script>

<template>
  <a class="skip-link" href="#conteudo">Pular para o conteúdo</a>
  <SiteHeader />
  <main id="conteudo">
    <RouterView v-slot="{ Component }">
      <Transition name="page" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </main>
  <SiteFooter />
  <FloatingWhatsapp />
</template>
