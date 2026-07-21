import { transparencyItems } from '@/lib/content';

import { SectionHeader } from './SectionHeader';

function TransparencyList({
  items,
}: {
  items: readonly { title: string; description: string }[];
}) {
  return (
    <ul className="mt-8 space-y-5">
      {items.map((item, index) => (
        <li className="group flex gap-4" key={item.title}>
          <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-surface-muted text-xs font-semibold text-brand-blue transition-colors duration-300 group-hover:bg-brand-blue group-hover:text-white">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span>
            <strong className="block text-base font-semibold text-foreground">{item.title}</strong>
            <span className="mt-1 block text-sm leading-6 text-foreground/60">
              {item.description}
            </span>
          </span>
        </li>
      ))}
    </ul>
  );
}

function TransparencyBrandSignature() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-[-34vw] top-[-18rem] bottom-[-16rem] -z-10 hidden overflow-visible mix-blend-multiply md:block"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 1600 920"
    >
      <defs>
        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1260" id="capaz-soft-signature" width="2060" x="-230" y="-170">
          <feGaussianBlur stdDeviation="26" />
        </filter>
        <radialGradient cx="50%" cy="50%" id="capaz-signature-fade" r="64%">
          <stop offset="0%" stopColor="var(--brand-blue)" stopOpacity="0.18" />
          <stop offset="58%" stopColor="var(--brand-blue)" stopOpacity="0.1" />
          <stop offset="100%" stopColor="var(--brand-blue)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <g className="capaz-signature-drift" filter="url(#capaz-soft-signature)" opacity="1">
        <path
          d="M-118 692C15 846 319 908 539 763c130-86 188-208 164-330"
          stroke="url(#capaz-signature-fade)"
          strokeLinecap="round"
          strokeWidth="190"
        />
        <path
          d="M980 72c150-106 411-65 479 98 57 137-34 270-212 348-116 51-151 112-141 208"
          stroke="url(#capaz-signature-fade)"
          strokeLinecap="round"
          strokeWidth="132"
        />
        <path
          d="M1334 965c-112 16-207-35-226-119"
          stroke="url(#capaz-signature-fade)"
          strokeLinecap="round"
          strokeWidth="138"
        />
      </g>
    </svg>
  );
}

export function TransparencySection() {
  return (
    <section className="px-5 py-20 md:py-32" id="transparencia">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          description="Preferimos decir la verdad desde el inicio. Así no te hacemos perder tiempo y nos enfocamos donde realmente podemos generar una alternativa real."
          title="¿Hoy con qué podemos ayudarte?"
        />

        <div className="relative isolate mt-4 grid gap-5 md:mt-6 md:grid-cols-2 md:gap-6 lg:gap-8">
          <TransparencyBrandSignature />
          <article className="relative z-0 rounded-[2rem] border border-brand-border bg-white p-7 shadow-[0_18px_60px_rgba(25,45,96,0.05)] transition duration-300 ease-out hover:-translate-y-1 hover:border-brand-blue/20 hover:shadow-[0_24px_70px_rgba(25,45,96,0.08)] motion-reduce:hover:translate-y-0 md:p-10">
            <h3 className="text-xl font-semibold tracking-[-0.02em] text-brand-navy">
              Donde sí podemos aportar
            </h3>
            <TransparencyList items={transparencyItems.canHelp} />
          </article>

          <article className="relative z-0 rounded-[2rem] border border-brand-border bg-white p-7 shadow-[0_18px_60px_rgba(25,45,96,0.05)] transition duration-300 ease-out hover:-translate-y-1 hover:border-foreground/10 hover:shadow-[0_24px_70px_rgba(25,45,96,0.08)] motion-reduce:hover:translate-y-0 md:p-10">
            <h3 className="text-xl font-semibold tracking-[-0.02em] text-brand-navy">
              Donde hoy no podemos ayudarte
            </h3>
            <TransparencyList items={transparencyItems.cannotHelp} />
            <p className="mt-8 border-t border-brand-border pt-5 text-xs leading-5 text-foreground/50">
              Los proyectos, precios y disponibilidad pueden cambiar.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
