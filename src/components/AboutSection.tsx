import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { CLINIC_PILLARS } from '../data/clinicData';
import { ResilientImage } from './ResilientImage';
import consultationRoomImg from '../assets/images/about_consultation_room_1794923705064.jpg';

interface AboutSectionProps {
  onContactClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick }) => {
  return (
    <section
      id="sobre"
      className="border-t border-[hsl(var(--border))] bg-leaf-wash py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Coluna esquerda: Fotografia editorial do consultório */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <div className="flex h-full flex-col justify-between rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))] p-3 shadow-card-soft">
              <ResilientImage
                src={consultationRoomImg}
                alt="Consultório silencioso da Urbano Saúde com poltronas confortáveis, luz natural e folhagens"
                fallbackLabel="Consultório Urbano Saúde"
                className="aspect-[4/3] w-full rounded-[10px] lg:aspect-auto lg:h-full lg:min-h-[420px]"
              />
              <p className="px-2 pt-3 pb-1 text-xs leading-relaxed text-[hsl(var(--muted-foreground))]">
                Consultórios planejados para transmitir calma, privacidade e acolhimento desde a
                chegada.
              </p>
            </div>
          </motion.div>

          {/* Coluna direita: Narrativa humanizada + 3 pilares numerados */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.08, ease: 'easeOut' }}
            className="flex flex-col justify-between lg:col-span-7"
          >
            <div>
              <p className="text-sm font-normal text-[hsl(var(--primary-strong))]">
                Sobre a Urbano Saúde
              </p>
              <h2 className="mt-2.5 font-display text-4xl font-medium leading-[1.06] text-[hsl(var(--foreground))] [text-wrap:balance] sm:text-5xl">
                Um lugar pensado para cuidar sem pressa.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[hsl(var(--muted-foreground))] sm:text-lg">
                Sabemos que procurar ajuda médica ou emocional costuma vir acompanhado de dúvidas
                e vulnerabilidade. A Urbano Saúde nasceu para substituir atendimentos corridos por
                encontros humanos, onde cada sintoma é escutado dentro da história real de quem
                chega.
              </p>

              <div className="mt-10 space-y-6 border-t border-[hsl(var(--border))] pt-8">
                {CLINIC_PILLARS.map((pillar) => (
                  <div
                    key={pillar.index}
                    className="grid grid-cols-1 gap-2 border-b border-[hsl(var(--border))] pb-6 last:border-b-0 last:pb-0 sm:grid-cols-12 sm:gap-4"
                  >
                    <div className="font-display text-2xl font-semibold text-[hsl(var(--primary-strong))] tabular-nums sm:col-span-2">
                      {pillar.index}.
                    </div>
                    <div className="sm:col-span-10">
                      <h3 className="font-display text-2xl font-semibold text-[hsl(var(--foreground))]">
                        {pillar.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-2">
              <button
                type="button"
                onClick={onContactClick}
                className="inline-flex min-h-[48px] items-center gap-2 rounded-lg bg-[hsl(var(--primary-strong))] px-6 py-3 text-sm font-bold text-[hsl(var(--primary-foreground))] shadow-cta-leaf whitespace-nowrap shrink-0 transition-all duration-150 hover:-translate-y-0.5 hover:bg-[hsl(var(--primary-deep))] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[hsl(var(--ring))] cursor-pointer"
              >
                <span>Entrar em contato</span>
                <ArrowUpRight className="h-4 w-4 stroke-[1.75]" aria-hidden="true" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
