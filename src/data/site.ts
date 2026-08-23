// Centralize os dados reais do escritório neste arquivo antes da publicação.
export const siteConfig = {
  name: 'Felipe Amorim Advogados',
  shortName: 'Felipe Amorim',
  domain: 'https://almeida-prado-advocacia.luizfhellippe.chatgpt.site',
  email: '',
  phoneLabel: 'Atendimento pelo WhatsApp',
  whatsappDigits: '5511999999999',
  instagramHandle: '',
  instagramUrl: '',
  location: 'Atendimento presencial e online',
  address: 'Atendimento com hora marcada',
};

export const whatsappUrl = (message = 'Olá, Felipe! Gostaria de agendar uma conversa.') =>
  `https://wa.me/${siteConfig.whatsappDigits}?text=${encodeURIComponent(message)}`;
