// Centralize os dados reais do escritório neste arquivo antes da publicação.
export const siteConfig = {
  name: 'Almeida & Prado Advocacia',
  shortName: 'Almeida & Prado',
  domain: 'https://almeida-prado-advocacia.luizfhellippe.chatgpt.site',
  email: 'contato@almeidaprado.adv.br',
  phoneLabel: '(11) 99999-9999',
  whatsappDigits: '5511999999999',
  instagramHandle: '@almeidaprado.adv',
  instagramUrl: 'https://instagram.com/almeidaprado.adv',
  location: 'São Paulo · Atendimento nacional',
  address: 'Av. Paulista, São Paulo — SP',
};

export const whatsappUrl = (message = 'Olá! Gostaria de agendar uma conversa com um advogado.') =>
  `https://wa.me/${siteConfig.whatsappDigits}?text=${encodeURIComponent(message)}`;
