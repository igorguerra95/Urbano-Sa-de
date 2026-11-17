import React, { useRef, useState } from 'react';
import { MotionConfig } from 'motion/react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { SpecialtiesSection } from './components/SpecialtiesSection';
import { AboutSection } from './components/AboutSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { FloatingContactButton } from './components/FloatingContactButton';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('');
  const nameInputRef = useRef<HTMLInputElement | null>(null);

  const scrollToContact = (specialtyName?: string) => {
    if (specialtyName) {
      setSelectedSpecialty(specialtyName);
    }
    const contactEl = document.getElementById('contato');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
      window.setTimeout(() => {
        nameInputRef.current?.focus({ preventScroll: true });
      }, 450);
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
        {/* Textura sutil orgânica sem interferência em cliques */}
        <div
          aria-hidden="true"
          className="grain-overlay pointer-events-none fixed inset-0 z-50"
        />

        <a
          href="#conteudo-principal"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-[hsl(var(--primary-strong))] focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-[hsl(var(--primary-foreground))]"
        >
          Ir para o conteúdo principal
        </a>

        <Header onContactClick={() => scrollToContact()} />

        <main id="conteudo-principal">
          <HeroSection onContactClick={() => scrollToContact()} />
          <SpecialtiesSection
            onSelectSpecialty={(specialty) => scrollToContact(specialty)}
          />
          <AboutSection onContactClick={() => scrollToContact()} />
          <FaqSection />
          <ContactSection
            selectedSpecialty={selectedSpecialty}
            nameInputRef={nameInputRef}
          />
        </main>

        <Footer />

        <FloatingContactButton onClick={() => scrollToContact()} />
      </div>
    </MotionConfig>
  );
}
