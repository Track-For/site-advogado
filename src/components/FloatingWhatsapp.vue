<script setup lang="ts">
import { MessageCircle } from '@lucide/vue';
import { whatsappUrl } from '../data/site';
</script>

<template>
  <a class="floating-whatsapp" :href="whatsappUrl()" target="_blank" rel="noopener" aria-label="Falar com o escritório pelo WhatsApp">
    <MessageCircle :size="20" aria-hidden="true" />
    <span>Fale conosco</span>
  </a>
</template>
