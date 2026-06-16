// Configuración editable del sitio
export const SITE = {
  title: 'ImpulsoLocal | Páginas web profesionales + Google Ads',
  description: 'Creamos páginas web profesionales para servicios locales y configuramos Google Ads para captar más consultas por WhatsApp o llamada.',
  url: 'https://tudominio.cl',
  author: 'ImpulsoLocal',
  whatsapp: '56900000000',
  email: 'contacto@tudominio.cl',
} as const;

export const NAVIGATION = [
  { name: 'Inicio', href: '/' },
  { name: 'Servicios', href: '/servicios' },
  { name: 'Demos', href: '/demos' },
  { name: 'Clientes', href: '/clientes' },
  { name: 'Precios', href: '/precios' },
  { name: 'Contacto', href: '/contacto' },
] as const;

export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com',
  instagram: 'https://instagram.com',
  facebook: 'https://facebook.com',
} as const;
