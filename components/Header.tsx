import Image from 'next/image';

import { CTAButton } from './CTAButton';

const navigation = [{ label: 'Cómo trabajamos', href: '#como-trabajamos' }] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-border/80 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-2.5 md:px-8">
        <a
          aria-label="Ir al inicio"
          className="rounded-xl transition-opacity hover:opacity-80"
          href="#inicio"
        >
          <Image
            alt="capazquesi.cl"
            className="h-9 w-auto sm:h-10 md:h-11"
            height={52}
            priority
            src="/logo-capazquesi.svg"
            width={260}
          />
        </a>

        <nav aria-label="Navegación principal" className="flex items-center gap-5">
          {navigation.map((item) => (
            <a
              className="hidden rounded-full px-3 py-2 text-sm font-medium text-foreground/65 transition duration-200 hover:bg-white hover:text-brand-blue sm:inline"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
          <CTAButton className="hidden rounded-full px-5 py-2.5 text-sm shadow-none md:inline-flex">
            WhatsApp
          </CTAButton>
        </nav>
      </div>
    </header>
  );
}
