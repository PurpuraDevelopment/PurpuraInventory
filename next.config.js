// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Si deseas hacer una exportación estática, descomenta la línea:
  output: 'export',

  eslint: {
    ignoreDuringBuilds: true,  // Ignora los errores de ESLint durante el proceso de construcción
  },

  images: {
    unoptimized: true,  // Desactiva la optimización de imágenes de Next.js
  },

  // Eliminar la sección de internacionalización (i18n)
  // i18n: {
  //   locales: ['en', 'es'],
  //   defaultLocale: 'en',
  // },

};

module.exports = nextConfig;
