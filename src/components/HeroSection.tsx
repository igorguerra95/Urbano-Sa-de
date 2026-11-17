import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { HERO_METRICS } from '../data/clinicData';
import { CountUpMetric } from './CountUpMetric';
import { ResilientImage } from './ResilientImage';
import heroClinicImg from '../assets/images/hero_urbano_clinic_1794923703888.jpg';

interface HeroSectionProps {
  onContactClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onContactClick }) => {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-ambient-canvas pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-20 lg:pb-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Split assimétrico 12 colunas com alinhamento stretch */}
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col justify-between lg:col-span-7 lg:py-4">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0, ease: 'easeOut' }}
                className="text-sm font-normal tracking-normal text-[hsl(var(--primary-strong))]"
              >
                Saúde Mental &amp; Medicina Integrada
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.08, ease: 'easeOut' }}
                className="mt-4 max-w-2xl font-display font-medium text-[hsl(var(--foreground))] [font-size:clamp(3rem,5.4vw,5.25rem)] leading-[0.98] tracking-[-0.025em] [text-wrap:balance]"
              >
                Cuidado médico que começa pela{' '}
                <span className="italic text-[hsl(var(--primary-strong))]">escuta</span>.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.16, ease: 'easeOut' }}
                className="mt-6 max-w-xl text-base leading-relaxed text-[hsl(var(--muted-foreground))] sm:text-lg"
              >
                Na Urbano Saúde, unimos psiquiatria, psicologia e especialidades clínicas em um
                espaço sereno para cuidar do seu equilíbrio emocional e físico com tempo,
                acolhimento e clareza.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.24, ease: 'easeOut' }}
              className="mt-9 flex flex-wrap items-center gap-5"
            >
              <button
                type="button"
                onClick={onContactClick}
                className="inline-flex min-h-[48px] items-center gap-2.5 rounded-lg bg-[hsl(var(--primary-strong))] px-7 py-3.5 text-sm font-bold text-[hsl(var(--primary-foreground))] shadow-cta-leaf whitespace-nowrap shrink-0 transition-all duration-150 hover:-translate-y-0.5 hover:bg-[hsl(var(--primary-deep))] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[hsl(var(--ring))] cursor-pointer"
              >
                <span>Entrar em contato</span>
                <ArrowUpRight className="h-4 w-4 stroke-[1.75]" aria-hidden="true" />
              </button>

              <a
                href="#especialidades"
                className="inline-flex min-h-[44px] items-center gap-2 text-sm font-bold text-[hsl(var(--foreground))] whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[hsl(var(--primary-strong))] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[hsl(var(--ring))]"
              >
                <span>Conhecer especialidades</span>
                <ArrowDown className="h-4 w-4 stroke-[1.75]" aria-hidden="true" />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.14, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <div className="h-full overflow-hidden rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))] p-2.5 shadow-card-elevated">
              <ResilientImage
                src={heroClinicImg}
                alt="Recepção acolhedora da clínica Urbano Saúde com iluminação natural, madeira clara e plantas naturais"
                fallbackLabel="Ambiente acolhedor Urbano Saúde"
                priority
                className="aspect-[4/3] w-full rounded-[10px] lg:aspect-auto lg:h-full"
              />
            </div>
          </motion.div>
        </div>

        {/* Faixa de métricas em largura total abaixo do split */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4"
        >
          {HERO_METRICS.map((metric) => (
            <CountUpMetric
              key={metric.label}
              value={metric.value}
              suffix={metric.suffix}
              label={metric.label}
              detail={metric.detail}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
