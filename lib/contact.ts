export const CONTACT = {
  whatsappNumber: '569XXXXXXXX',
  whatsappInitialMessage:
    'Hola CAPAZ, me gustaría revisar mi caso para comprar mi primera vivienda.',
  email: 'contacto@capazquesi.cl',
} as const;

export function getWhatsAppHref() {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
    CONTACT.whatsappInitialMessage,
  )}`;
}
