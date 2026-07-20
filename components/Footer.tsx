import Image from 'next/image';

import { CONTACT } from '@/lib/contact';

export function Footer() {
  return (
    <footer className="border-t border-brand-border px-5 py-6 md:py-7">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <Image
            alt="capazquesi.cl"
            className="h-7 w-auto opacity-90 md:h-8"
            height={38}
            src="/logo-capazquesi.svg"
            width={205}
          />
          <p className="mt-2.5 max-w-md text-sm font-light leading-6 text-foreground/60">
            Revisamos contigo alternativas DS1 para comprar tu primera vivienda.
          </p>
        </div>

        <div className="text-sm font-light leading-6 text-foreground/60 md:text-right">
          <p>Santiago, Chile.</p>
          <p className="mt-1 max-w-sm">
            ¿Quieres vender tus proyectos DS1 con nosotros?{' '}
            <a
              className="font-medium text-brand-blue underline-offset-4 transition-colors hover:text-brand-navy hover:underline"
              href={`mailto:${CONTACT.email}`}
            >
              {CONTACT.email}
            </a>
          </p>
          <a
            className="mt-1 inline-block font-medium text-brand-blue underline-offset-4 transition-colors hover:text-brand-navy hover:underline"
            href="#como-trabajamos"
          >
            Ver método de acompañamiento
          </a>
        </div>
      </div>
    </footer>
  );
}
