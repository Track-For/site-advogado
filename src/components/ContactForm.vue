<script setup lang="ts">
import { ArrowUpRight, Check } from '@lucide/vue';
import { reactive, ref } from 'vue';
import { siteConfig, whatsappUrl } from '../data/site';

const form = reactive({ name: '', phone: '', area: '', message: '', consent: false });
const error = ref('');
const sent = ref(false);

function submitLead() {
  error.value = '';
  sent.value = false;

  if (!form.name.trim() || !form.phone.trim() || !form.area || !form.message.trim()) {
    error.value = 'Preencha os campos obrigatórios para continuar.';
    return;
  }

  if (!form.consent) {
    error.value = 'Confirme o consentimento para enviarmos sua mensagem.';
    return;
  }

  const message = [
    `Olá, ${siteConfig.shortName}. Meu nome é ${form.name}.`,
    `Meu WhatsApp: ${form.phone}.`,
    `Área do atendimento: ${form.area}.`,
    `Resumo da situação: ${form.message}`,
  ].join('\n');

  sent.value = true;
  window.open(whatsappUrl(message), '_blank', 'noopener,noreferrer');
}
</script>

<template>
  <form class="contact-form" novalidate @submit.prevent="submitLead">
    <div class="form-row">
      <label>
        <span>Nome completo *</span>
        <input v-model="form.name" name="name" type="text" autocomplete="name" placeholder="Como podemos chamar você?" />
      </label>
      <label>
        <span>WhatsApp *</span>
        <input v-model="form.phone" name="phone" type="tel" autocomplete="tel" inputmode="tel" placeholder="(11) 99999-9999" />
      </label>
    </div>

    <label>
      <span>Área do atendimento *</span>
      <select v-model="form.area" name="area">
        <option value="" disabled>Selecione uma opção</option>
        <option>Direito empresarial</option>
        <option>Contratos</option>
        <option>Direito civil</option>
        <option>Família e sucessões</option>
        <option>Consultoria preventiva</option>
        <option>Não tenho certeza</option>
      </select>
    </label>

    <label>
      <span>Conte o essencial sobre sua situação *</span>
      <textarea v-model="form.message" name="message" rows="4" placeholder="Descreva brevemente o contexto e, se houver, o prazo mais próximo."></textarea>
    </label>

    <label class="consent">
      <input v-model="form.consent" type="checkbox" />
      <span>Concordo com o uso destes dados apenas para retorno sobre o atendimento solicitado.</span>
    </label>

    <p class="form-disclaimer">Evite enviar documentos ou informações sensíveis neste primeiro contato.</p>
    <p v-if="error" class="form-message is-error" role="alert">{{ error }}</p>
    <p v-if="sent" class="form-message is-success" role="status"><Check :size="16" /> Sua mensagem foi preparada no WhatsApp.</p>

    <button class="button button-primary form-submit" type="submit">
      Solicitar contato <ArrowUpRight :size="18" aria-hidden="true" />
    </button>
  </form>
</template>
