import { FAQSection } from '@/components/FAQSection';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ManifestSection } from '@/components/ManifestSection';
import { ProcessSection } from '@/components/ProcessSection';
import { TransparencySection } from '@/components/TransparencySection';

export default function Home() {
  return (
    <>
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:text-brand-blue focus:shadow"
        href="#contenido"
      >
        Saltar al contenido principal
      </a>
      <Header />
      <main id="contenido">
        <Hero />
        <ManifestSection />
        <TransparencySection />
        <ProcessSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
