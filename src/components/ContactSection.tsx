import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { SPECIALTIES } from '../data/clinicData';

interface ContactSectionProps {
  selectedSpecialty: string;
  nameInputRef: React.RefObject<HTMLInputElement | null>;
}

interface FormState {
  nome: string;
  contato: string;
  especialidade: string;
  periodo: string;
  mensagem: string;
}

interface FormErrors {
  nome?: string;
  contato?: string;
}

const SPECIALTY_OPTIONS = [
  'Orientação inicial (não tenho certeza)',
  ...SPECIALTIES.map((s) => s.name),
];

export const ContactSection: React.FC<ContactSectionProps> = ({
  selectedSpecialty,
  nameInputRef,
}) => {
  const [form, setForm] = useState<FormState>({
    nome: '',
    contato: '',
    especialidade: selectedSpecialty || SPECIALTY_OPTIONS[0],
    periodo: 'Indiferente',
    mensagem: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedData, setSubmittedData] = useState<FormState | null>(null);

  useEffect(() => {
    if (selectedSpecialty) {
      setForm((prev) => ({ ...prev, especialidade: selectedSpecialty }));
      setSubmittedData(null);
    }
  }, [selectedSpecialty]);

  const validate = (): boolean => {
    const nextErrors: FormErrors = {};
    const trimmedName = form.nome.trim();
    const trimmedContact = form.contato.trim();

    if (trimmedName.length < 2) {
      nextErrors.nome = 'Por favor, informe seu nome completo.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const digitsOnly = trimmedContact.replace(/\D/g, '');
    const isValidPhone = digitsOnly.length >= 10 && digitsOnly.length <= 13;

    if (!trimmedContact) {
      nextErrors.contato = 'Informe um e-mail ou número de WhatsApp para retorno.';
    } else if (!emailRegex.test(trimmedContact) && !isValidPhone) {
      nextErrors.contato =
        'Digite um e-mail válido ou telefone com DDD (ex.: (11) 99999-9999).';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;
    setSubmittedData({ ...form });
  };

  const handleReset = () => {
    setSubmittedData(null);
    setForm({
      nome: '',
      contato: '',
      especialidade: SPECIALTY_OPTIONS[0],
      periodo: 'Indiferente',
      mensagem: '',
    });
    setErrors({});
  };

  return (
    <section
      id="contato"
      className="border-t border-[hsl(var(--border))] bg-ambient-canvas py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Coluna de orientação e acolhimento (sem endereço/telefone/mapa fictícios) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="flex flex-col justify-between lg:col-span-5"
          >
            <div>
              <p className="text-sm font-normal text-[hsl(var(--primary-strong))]">
                Primeira consulta
              </p>
              <h2 className="mt-2.5 font-display text-4xl font-medium leading-[1.06] text-[hsl(var(--foreground))] [text-wrap:balance] sm:text-5xl">
                Dê o primeiro passo no seu ritmo.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[hsl(var(--muted-foreground))]">
                Preencha seus dados ao lado para solicitar seu atendimento. Nossa equipe de
                acolhimento retorna com orientações sobre disponibilidade e preparo para a
                primeira conversa.
              </p>

              <div className="mt-8 space-y-4 border-t border-[hsl(var(--border))] pt-6">
                <div>
                  <h3 className="font-display text-xl font-semibold text-[hsl(var(--foreground))]">
                    Atendimento individualizado
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
                    Se preferir, você não precisa detalhar motivos clínicos no formulário — basta
                    escolher a especialidade ou solicitar orientação inicial.
                  </p>
                </div>

                <div className="flex items-start gap-2.5 text-sm text-[hsl(var(--muted-foreground))]">
                  <ShieldCheck
                    className="mt-0.5 h-4 w-4 shrink-0 stroke-[1.75] text-[hsl(var(--primary-strong))]"
                    aria-hidden="true"
                  />
                  <span>
                    Suas informações são recebidas sob sigilo e utilizadas exclusivamente para
                    organizar seu contato com a clínica.
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Coluna do formulário de captura de leads */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.08, ease: 'easeOut' }}
            className="lg:col-span-7"
          >
            <div className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))] p-6 shadow-card-elevated sm:p-9">
              {submittedData ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="flex flex-col items-start py-4"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(var(--surface-botanical))] text-[hsl(var(--primary-strong))]">
                    <CheckCircle2 className="h-6 w-6 stroke-[1.75]" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-display text-3xl font-semibold text-[hsl(var(--foreground))]">
                    Solicitação registrada com cuidado.
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-[hsl(var(--muted-foreground))]">
                    Obrigado, <strong className="text-[hsl(var(--foreground))]">{submittedData.nome}</strong>.
                    Recebemos seu interesse em{' '}
                    <strong className="text-[hsl(var(--foreground))]">
                      {submittedData.especialidade}
                    </strong>{' '}
                    (período: {submittedData.periodo.toLowerCase()}) e entraremos em contato por{' '}
                    <strong className="text-[hsl(var(--foreground))]">{submittedData.contato}</strong>.
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="mt-8 inline-flex min-h-[44px] items-center rounded-lg border border-[hsl(var(--border-strong))] bg-[hsl(var(--background))] px-5 py-2.5 text-sm font-bold text-[hsl(var(--foreground))] transition-colors hover:bg-[hsl(var(--surface-botanical))] cursor-pointer"
                  >
                    Enviar outra solicitação
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="lead-nome"
                        className="block text-sm font-bold text-[hsl(var(--foreground))]"
                      >
                        Nome completo
                      </label>
                      <input
                        ref={nameInputRef}
                        id="lead-nome"
                        name="nome"
                        type="text"
                        autoComplete="name"
                        required
                        value={form.nome}
                        onChange={(e) => {
                          setForm((prev) => ({ ...prev, nome: e.target.value }));
                          if (errors.nome) setErrors((prev) => ({ ...prev, nome: undefined }));
                        }}
                        placeholder="Como você gostaria de ser chamado(a)"
                        aria-invalid={Boolean(errors.nome)}
                        aria-describedby={errors.nome ? 'lead-nome-erro' : undefined}
                        className="mt-2 block min-h-[46px] w-full rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--background))] px-4 py-2.5 text-sm text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))]/70 transition-colors focus:border-[hsl(var(--primary-strong))] focus:outline-none"
                      />
                      {errors.nome && (
                        <p
                          id="lead-nome-erro"
                          role="alert"
                          className="mt-1.5 text-xs font-bold text-red-700"
                        >
                          {errors.nome}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="lead-contato"
                        className="block text-sm font-bold text-[hsl(var(--foreground))]"
                      >
                        E-mail ou WhatsApp
                      </label>
                      <input
                        id="lead-contato"
                        name="contato"
                        type="text"
                        required
                        value={form.contato}
                        onChange={(e) => {
                          setForm((prev) => ({ ...prev, contato: e.target.value }));
                          if (errors.contato)
                            setErrors((prev) => ({ ...prev, contato: undefined }));
                        }}
                        placeholder="seu@email.com ou (11) 99999-9999"
                        aria-invalid={Boolean(errors.contato)}
                        aria-describedby={errors.contato ? 'lead-contato-erro' : undefined}
                        className="mt-2 block min-h-[46px] w-full rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--background))] px-4 py-2.5 text-sm text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))]/70 transition-colors focus:border-[hsl(var(--primary-strong))] focus:outline-none"
                      />
                      {errors.contato && (
                        <p
                          id="lead-contato-erro"
                          role="alert"
                          className="mt-1.5 text-xs font-bold text-red-700"
                        >
                          {errors.contato}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="lead-especialidade"
                        className="block text-sm font-bold text-[hsl(var(--foreground))]"
                      >
                        Especialidade de interesse
                      </label>
                      <select
                        id="lead-especialidade"
                        name="especialidade"
                        value={form.especialidade}
                        onChange={(e) =>
                          setForm((prev) => ({ ...prev, especialidade: e.target.value }))
                        }
                        className="mt-2 block min-h-[46px] w-full rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--background))] px-4 py-2.5 text-sm text-[hsl(var(--foreground))] transition-colors focus:border-[hsl(var(--primary-strong))] focus:outline-none"
                      >
                        {SPECIALTY_OPTIONS.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <span className="block text-sm font-bold text-[hsl(var(--foreground))]">
                        Melhor período para retorno
                      </span>
                      <div className="mt-2 grid grid-cols-3 gap-2">
                        {['Manhã', 'Tarde', 'Indiferente'].map((period) => {
                          const active = form.periodo === period;
                          return (
                            <button
                              key={period}
                              type="button"
                              onClick={() => setForm((prev) => ({ ...prev, periodo: period }))}
                              className={`min-h-[46px] rounded-lg border px-2 text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
                                active
                                  ? 'border-[hsl(var(--primary-strong))] bg-[hsl(var(--surface-botanical))] text-[hsl(var(--primary-deep))]'
                                  : 'border-[hsl(var(--border))] bg-[hsl(var(--background))] text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]'
                              }`}
                            >
                              {period}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="lead-mensagem"
                      className="block text-sm font-bold text-[hsl(var(--foreground))]"
                    >
                      Como podemos ajudar? <span className="font-normal text-[hsl(var(--muted-foreground))]">(opcional)</span>
                    </label>
                    <textarea
                      id="lead-mensagem"
                      name="mensagem"
                      rows={4}
                      value={form.mensagem}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, mensagem: e.target.value }))
                      }
                      placeholder="Se desejar, conte brevemente o que procura neste momento."
                      className="mt-2 block w-full rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--background))] px-4 py-3 text-sm text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))]/70 transition-colors focus:border-[hsl(var(--primary-strong))] focus:outline-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg bg-[hsl(var(--primary-strong))] px-6 py-3.5 text-sm font-bold text-[hsl(var(--primary-foreground))] shadow-cta-leaf transition-all duration-150 hover:bg-[hsl(var(--primary-deep))] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[hsl(var(--ring))] sm:w-auto cursor-pointer"
                    >
                      <span>Entrar em contato</span>
                      <ArrowUpRight className="h-4 w-4 stroke-[1.75]" aria-hidden="true" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
