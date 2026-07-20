import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';

import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

const siteUrl = 'https://capazquesi.cl';
const title = 'CAPAZ — Revisemos tu situación antes de decirte que no';
const description =
  'Revisamos con calma casos DS1 Tramo 2 y Tramo 3 para primera vivienda, con alternativas actuales en Quilpué, Villa Alemana y San Bernardo.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: '/' },
  openGraph: {
    title: 'CAPAZ — Capaz que sí',
    description,
    url: siteUrl,
    siteName: 'capazquesi.cl',
    locale: 'es_CL',
    type: 'website',
    images: [{ url: '/logo-capazquesi.svg', width: 1200, height: 630, alt: 'capazquesi.cl' }],
  },
  icons: { icon: '/isotipo-capaz.svg', shortcut: '/isotipo-capaz.svg', apple: '/isotipo-capaz.svg' },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es-CL">
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
