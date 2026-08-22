<script setup lang="ts">
import { MessageCircle } from '@lucide/vue';
import { whatsappUrl } from '../data/site';
</script>

<template>
  <a class="floating-whatsapp" :href="whatsappUrl()" target="_blank" rel="noopener" aria-label="Falar com o Aurora Tattoo Atelier pelo WhatsApp">
    <MessageCircle :size="22" aria-hidden="true" />
    <span>WhatsApp</span>
  </a>
</template>
