export const WHATSAPP_NUMBER = '918410617268';

export const getWhatsAppUrl = (message: string) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

export const getServiceInquiry = (service: string, country: string = '', userType: 'student' | 'traveler' = 'traveler') => {
  const base = `Hi Compact Holidays, `;
  if (userType === 'student') {
    return `${base}I'm a student searching for ${service} assistance for ${country ? country : 'my study abroad destination'}. I saw your "Visa in 7 Days" offer. Please contact me for a quick quote.`;
  }
  return `${base}I'm interested in the ${service} service${country ? ` for ${country}` : ''}. Can I get a quick quote and more details?`;
};
