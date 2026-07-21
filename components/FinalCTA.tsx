import { CTAButton } from './CTAButton';

export function FinalCTA() {
  return (
    <section className="bg-white px-5 py-20 text-center md:py-32">
      <div className="case-card mx-auto max-w-3xl px-6 py-12 shadow-[0_24px_80px_rgba(25,45,96,0.06)] md:px-12 md:py-16">
        <p className="case-label mb-5 text-brand-blue">Próxima revisión</p>
        <h2 className="text-balance text-4xl font-semibold tracking-[-0.05em] text-brand-navy md:text-6xl md:leading-[0.98]">
          Revisemos tu situación.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg font-light leading-8 text-foreground/70 md:text-xl">
          La conversación comienza por WhatsApp y puede tomar varios días.
        </p>
        <CTAButton className="mt-10 px-9 py-[1.125rem] md:px-10 md:py-5">
          Cuéntanos tu caso por WhatsApp
        </CTAButton>
      </div>
    </section>
  );
}
