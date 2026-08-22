// Edite este arquivo para trocar rapidamente os dados reais do tatuador.
export const siteConfig = {
  name: 'Aurora Tattoo Atelier',
  shortName: 'Aurora',
  domain: 'https://auroratattoo.com.br',
  email: 'contato@auroratattoo.com.br',
  phoneLabel: '(11) 99999-9999',
  // Substitua pelo número real com DDI + DDD, apenas dígitos.
  whatsappDigits: '5511999999999',
  instagramHandle: '@aurora.tattoo',
  instagramUrl: 'https://instagram.com/aurora.tattoo',
  location: 'Vila Madalena · São Paulo, SP',
  address: 'Vila Madalena, São Paulo — SP',
};

export const whatsappUrl = (message = 'Olá! Gostaria de conversar sobre uma tatuagem.') =>
  `https://wa.me/${siteConfig.whatsappDigits}?text=${encodeURIComponent(message)}`;
