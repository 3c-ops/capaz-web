import Image from 'next/image';

import { CONTACT } from '@/lib/contact';

export function Footer() {
  return (
    <footer className="border-t border-brand-border px-5 py-10 md:py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <Image
            alt="capazquesi.cl"
            className="h-8 w-auto opacity-90"
            height={38}
            src="/logo-capazquesi.svg"
            width={190}
          />
          <p className="mt-4 max-w-md text-sm font-light leading-6 text-foreground/60">
            Te ayudamos en tu proceso de compra de vivienda DS1 conectando con alternativas
            inmobiliarias compatibles.
          </p>
        </div>

        <div className="text-sm font-light leading-6 text-foreground/60 md:text-right">
          <p>Santiago, Chile.</p>
          <p className="mt-2 max-w-sm">
            ¿Quieres vender tus proyectos DS1 con nosotros?{' '}
            <a
              className="font-medium text-brand-blue underline-offset-4 transition-colors hover:text-brand-navy hover:underline"
              href={`mailto:${CONTACT.email}`}
            >
              {CONTACT.email}
            </a>
          </p>
          <a
            className="mt-2 inline-block font-medium text-brand-blue underline-offset-4 transition-colors hover:text-brand-navy hover:underline"
            href="#como-trabajamos"
          >
            Ver método de acompañamiento
          </a>
        </div>
      </div>
    </footer>
  );
}
