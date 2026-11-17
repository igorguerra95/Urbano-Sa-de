import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Minus, Plus } from 'lucide-react';
import { FAQ_ITEMS } from '../data/clinicData';
import { ResilientImage } from './ResilientImage';
import botanicalCalmImg from '../assets/images/botanical_calm_detail_1794923705490.jpg';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string>(FAQ_ITEMS[0].id);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? '' : id));
  };

  return (
    <section
      id="duvidas"
      className="border-t border-[hsl(var(--border))] bg-[hsl(var(--surface))] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <p className="text-sm font-normal text-[hsl(var(--primary-strong))]">
              Perguntas frequentes
            </p>
            <h2 className="mt-2.5 font-display text-4xl font-medium leading-[1.06] text-[hsl(var(--foreground))] [text-wrap:balance] sm:text-5xl">
              Dúvidas comuns antes da primeira consulta.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[hsl(var(--muted-foreground))]">
              Reunimos respostas diretas para que você dê o primeiro passo com segurança e
              tranquilidade.
            </p>

            <div className="mt-8 overflow-hidden rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--background))] p-2.5 shadow-card-soft">
              <ResilientImage
                src={botanicalCalmImg}
                alt="Folhagem verde com luz suave da manhã projetando sombras delicadas sobre parede clara"
                fallbackLabel="Tranquilidade e cuidado"
                className="aspect-[16/9] w-full rounded-[10px]"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.08, ease: 'easeOut' }}
            className="lg:col-span-7"
          >
            <div className="divide-y divide-[hsl(var(--border))] border-y border-[hsl(var(--border))]">
              {FAQ_ITEMS.map((item) => {
                const isOpen = openId === item.id;
                return (
                  <div key={item.id} className="py-5 sm:py-6">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${item.id}`}
                      onClick={() => toggleItem(item.id)}
                      className="flex w-full items-start justify-between gap-4 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[hsl(var(--ring))] cursor-pointer"
                    >
                      <span className="font-display text-2xl font-semibold leading-snug text-[hsl(var(--foreground))] transition-colors hover:text-[hsl(var(--primary-strong))]">
                        {item.question}
                      </span>
                      <span
                        aria-hidden="true"
                        className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--background))] text-[hsl(var(--primary-strong))]"
                      >
                        {isOpen ? (
                          <Minus className="h-4 w-4 stroke-[1.75]" />
                        ) : (
                          <Plus className="h-4 w-4 stroke-[1.75]" />
                        )}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`faq-panel-${item.id}`}
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          transition={{ duration: 0.2, ease: 'easeOut' }}
                          className="pr-10 pt-3"
                        >
                          <p className="text-sm leading-relaxed text-[hsl(var(--muted-foreground))] sm:text-base">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
