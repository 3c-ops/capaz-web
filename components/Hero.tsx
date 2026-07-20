import { CTAButton } from './CTAButton';

export function Hero() {
  return (
    <section className="px-5 py-16 sm:py-20 md:py-28 lg:py-32" id="inicio">
      <div className="mx-auto max-w-5xl text-left md:text-center">
        <h1 className="text-[clamp(3.25rem,8vw,7.75rem)] font-light leading-[0.95] tracking-[-0.065em] text-foreground/70">
          ¿Te dijeron que no?
        </h1>
        <p className="mt-3 text-[clamp(4rem,10vw,9rem)] font-bold leading-[0.9] tracking-[-0.075em] text-brand-blue">
          Capaz que sí.
        </p>
        <p className="mx-auto mt-8 max-w-2xl text-balance text-xl font-light leading-8 text-brand-navy/90 md:mt-9 md:text-2xl md:leading-9">
          ¿Buscas comprar para vivir y te dijeron que no? Revisemos si existe una alternativa
          con proyectos DS1 para primera vivienda.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center md:mt-11">
          <CTAButton>Revisemos tu caso por WhatsApp</CTAButton>
          <a
            className="inline-flex items-center justify-center rounded-2xl border border-brand-border bg-white/70 px-7 py-4 font-semibold text-foreground shadow-[0_10px_30px_rgba(25,45,96,0.04)] transition duration-300 ease-out hover:-translate-y-0.5 hover:border-foreground/15 hover:bg-white motion-reduce:hover:translate-y-0"
            href="#como-trabajamos"
          >
            Cómo trabajamos
          </a>
        </div>
        <p className="mt-7 text-sm leading-6 text-foreground/50">
          La conversación ocurre directamente por WhatsApp, de forma cercana y guiada.
        </p>
      </div>
    </section>
  );
}
