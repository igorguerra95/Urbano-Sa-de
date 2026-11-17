import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Check } from 'lucide-react';
import { SPECIALTIES, type SpecialtyCategory } from '../data/clinicData';

interface SpecialtiesSectionProps {
  onSelectSpecialty: (specialtyName: string) => void;
}

const FILTER_OPTIONS: { id: SpecialtyCategory; label: string }[] = [
  { id: 'todas', label: 'Todas as áreas' },
  { id: 'saude-mental', label: 'Saúde Mental' },
  { id: 'clinica-medica', label: 'Medicina & Nutrição' },
];

export const SpecialtiesSection: React.FC<SpecialtiesSectionProps> = ({
  onSelectSpecialty,
}) => {
  const [activeCategory, setActiveCategory] = useState<SpecialtyCategory>('todas');

  const filteredSpecialties =
    activeCategory === 'todas'
      ? SPECIALTIES
      : SPECIALTIES.filter((item) => item.category === activeCategory);

  return (
    <section
      id="especialidades"
      className="border-t border-[hsl(var(--border))] bg-[hsl(var(--surface))] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12"
        >
          <div className="lg:col-span-7">
            <p className="text-sm font-normal text-[hsl(var(--primary-strong))]">
              Especialidades integradas
            </p>
            <h2 className="mt-2.5 font-display text-4xl font-medium leading-[1.06] text-[hsl(var(--foreground))] [text-wrap:balance] sm:text-5xl">
              Da saúde mental ao cuidado clínico completo.
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-base leading-relaxed text-[hsl(var(--muted-foreground))]">
              Reunimos psiquiatria, psicologia e especialidades médicas essenciais para olhar
              cada pessoa por inteiro, sem atendimentos fragmentados.
            </p>
          </div>
        </motion.div>

        {/* Controles interativos de filtro */}
        <div
          role="tablist"
          aria-label="Filtrar especialidades"
          className="mt-10 inline-flex flex-wrap items-center gap-1.5 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--surface-subtle))] p-1.5"
        >
          {FILTER_OPTIONS.map((option) => {
            const isSelected = activeCategory === option.id;
            return (
              <button
                key={option.id}
                role="tab"
                type="button"
                aria-selected={isSelected}
                onClick={() => setActiveCategory(option.id)}
                className={`min-h-[40px] rounded-lg px-4 py-2 text-sm font-bold whitespace-nowrap shrink-0 transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[hsl(var(--ring))] cursor-pointer ${
                  isSelected
                    ? 'bg-[hsl(var(--primary-strong))] text-[hsl(var(--primary-foreground))] shadow-sm'
                    : 'text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]'
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>

        {/* Grid editorial assimétrico de 12 colunas */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-12">
          {filteredSpecialties.map((specialty, idx) => {
            // Destaque assimétrico para Saúde Mental quando exibindo todas as áreas
            const colSpanClass =
              activeCategory === 'todas' && specialty.featured
                ? 'md:col-span-6'
                : activeCategory === 'saude-mental'
                  ? 'md:col-span-6'
                  : 'md:col-span-6 lg:col-span-4';

            return (
              <motion.article
                key={specialty.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: Math.min(idx * 0.05, 0.25), ease: 'easeOut' }}
                className={`group flex flex-col justify-between rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--background))] p-7 shadow-card-soft transition-all duration-200 hover:-translate-y-1 hover:border-[hsl(var(--border-strong))] hover:shadow-card-elevated ${colSpanClass}`}
              >
                <div>
                  {/* Metadado editorial sem pílulas */}
                  <div className="flex items-center gap-2 text-xs font-bold tracking-normal text-[hsl(var(--primary-strong))] tabular-nums">
                    <span>{specialty.index}</span>
                    <span aria-hidden="true" className="text-[hsl(var(--border-strong))]">
                      ·
                    </span>
                    <span className="font-normal text-[hsl(var(--muted-foreground))]">
                      {specialty.categoryLabel}
                    </span>
                  </div>

                  <h3 className="mt-3 font-display text-3xl font-semibold text-[hsl(var(--foreground))]">
                    {specialty.name}
                  </h3>

                  <p className="mt-2 text-sm font-bold leading-snug text-[hsl(var(--foreground))]">
                    {specialty.lead}
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
                    {specialty.description}
                  </p>

                  <ul className="mt-5 space-y-2 border-t border-[hsl(var(--border))] pt-4">
                    {specialty.carePoints.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-sm text-[hsl(var(--muted-foreground))]"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 stroke-[2] text-[hsl(var(--primary-strong))]"
                          aria-hidden="true"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7 pt-2">
                  <button
                    type="button"
                    onClick={() => onSelectSpecialty(specialty.name)}
                    className="inline-flex min-h-[42px] items-center gap-1.5 text-sm font-bold text-[hsl(var(--primary-strong))] whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[hsl(var(--primary-deep))] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[hsl(var(--ring))] cursor-pointer"
                  >
                    <span>Entrar em contato</span>
                    <ArrowUpRight
                      className="h-4 w-4 stroke-[1.75] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
