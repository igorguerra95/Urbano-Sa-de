import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[hsl(var(--border))] bg-[hsl(var(--surface))] py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <a
              href="#inicio"
              className="font-display text-2xl font-semibold tracking-tight text-[hsl(var(--foreground))]"
            >
              Urbano Saúde
            </a>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
              Clínica médica e de saúde mental dedicada ao cuidado integrado e humanizado em
              todas as etapas da vida.
            </p>
          </div>

          <nav aria-label="Links do rodapé" className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a
              href="#inicio"
              className="text-[hsl(var(--muted-foreground))] transition-colors hover:text-[hsl(var(--foreground))]"
            >
              Início
            </a>
            <a
              href="#especialidades"
              className="text-[hsl(var(--muted-foreground))] transition-colors hover:text-[hsl(var(--foreground))]"
            >
              Especialidades
            </a>
            <a
              href="#sobre"
              className="text-[hsl(var(--muted-foreground))] transition-colors hover:text-[hsl(var(--foreground))]"
            >
              Sobre
            </a>
            <a
              href="#duvidas"
              className="text-[hsl(var(--muted-foreground))] transition-colors hover:text-[hsl(var(--foreground))]"
            >
              Dúvidas
            </a>
            <a
              href="#contato"
              className="text-[hsl(var(--muted-foreground))] transition-colors hover:text-[hsl(var(--foreground))]"
            >
              Contato
            </a>
          </nav>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-3 border-t border-[hsl(var(--border))] pt-6 text-xs text-[hsl(var(--muted-foreground))] sm:flex-row sm:items-center">
          <p>© {currentYear} Urbano Saúde. Todos os direitos reservados.</p>
          <p>Atendimento médico e psicoterapêutico com sigilo e ética profissional.</p>
        </div>
      </div>
    </footer>
  );
};
