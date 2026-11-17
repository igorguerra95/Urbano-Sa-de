import React, { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

interface HeaderProps {
  onContactClick: () => void;
}

const NAV_LINKS = [
  { href: '#inicio', label: 'Início' },
  { href: '#especialidades', label: 'Especialidades' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#duvidas', label: 'Dúvidas' },
  { href: '#contato', label: 'Contato' },
];

export const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setDrawerOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [drawerOpen]);

  const handleMobileNav = (href: string) => {
    setDrawerOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-[hsl(var(--border))] bg-[hsla(210,40%,98%,0.88)] backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-4 sm:px-6 lg:h-[72px] lg:px-8">
          {/* Zona 1: Marca única em uma linha */}
          <a
            href="#inicio"
            className="font-display text-2xl font-semibold tracking-tight text-[hsl(var(--foreground))] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[hsl(var(--ring))]"
          >
            Urbano Saúde
          </a>

          {/* Zona 2: Links de navegação concisos em uma linha */}
          <nav
            aria-label="Navegação principal"
            className="hidden items-center gap-7 md:flex"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative py-1 text-sm font-normal text-[hsl(var(--muted-foreground))] whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[hsl(var(--foreground))] after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[hsl(var(--primary-strong))] after:transition-all after:duration-200 hover:after:w-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[hsl(var(--ring))]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zona 3: Ação primária única + gatilho do drawer mobile */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onContactClick}
              className="hidden items-center gap-2 rounded-lg bg-[hsl(var(--primary-strong))] px-5 py-2.5 text-sm font-bold text-[hsl(var(--primary-foreground))] shadow-cta-leaf whitespace-nowrap shrink-0 transition-all duration-150 hover:bg-[hsl(var(--primary-deep))] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[hsl(var(--ring))] md:inline-flex cursor-pointer"
            >
              <span>Entrar em contato</span>
              <ArrowUpRight className="h-4 w-4 stroke-[1.75]" aria-hidden="true" />
            </button>

            <button
              type="button"
              aria-label="Abrir menu de navegação"
              aria-expanded={drawerOpen}
              aria-controls="mobile-navigation-drawer"
              onClick={() => setDrawerOpen(true)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--surface))] text-[hsl(var(--foreground))] transition-colors hover:border-[hsl(var(--border-strong))] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[hsl(var(--ring))] md:hidden cursor-pointer"
            >
              <Menu className="h-5 w-5 stroke-[1.75]" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Sheet / Drawer Lateral Mobile */}
      <AnimatePresence>
        {drawerOpen && (
          <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true" aria-label="Menu de navegação">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setDrawerOpen(false)}
              className="fixed inset-0 bg-[hsla(156,26%,12%,0.36)] backdrop-blur-[2px]"
            />

            <motion.aside
              id="mobile-navigation-drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-y-0 right-0 flex w-[84%] max-w-xs flex-col justify-between border-l border-[hsl(var(--border))] bg-[hsl(var(--background))] p-6 shadow-card-elevated"
            >
              <div>
                <div className="flex items-center justify-between border-b border-[hsl(var(--border))] pb-4">
                  <span className="font-display text-2xl font-semibold text-[hsl(var(--foreground))]">
                    Urbano Saúde
                  </span>
                  <button
                    type="button"
                    aria-label="Fechar menu de navegação"
                    onClick={() => setDrawerOpen(false)}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--surface))] text-[hsl(var(--foreground))] cursor-pointer"
                  >
                    <X className="h-5 w-5 stroke-[1.75]" aria-hidden="true" />
                  </button>
                </div>

                <nav aria-label="Navegação mobile" className="mt-6 flex flex-col gap-1">
                  {NAV_LINKS.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleMobileNav(link.href);
                      }}
                      className="flex min-h-[44px] items-center rounded-lg px-3 font-display text-2xl font-medium text-[hsl(var(--foreground))] transition-colors hover:bg-[hsl(var(--surface-botanical))] hover:text-[hsl(var(--primary-strong))]"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="border-t border-[hsl(var(--border))] pt-5">
                <p className="mb-3 text-xs leading-relaxed text-[hsl(var(--muted-foreground))]">
                  Atendimento médico e em saúde mental com escuta acolhedora.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setDrawerOpen(false);
                    onContactClick();
                  }}
                  className="flex min-h-[46px] w-full items-center justify-center gap-2 rounded-lg bg-[hsl(var(--primary-strong))] px-5 py-3 text-sm font-bold text-[hsl(var(--primary-foreground))] shadow-cta-leaf cursor-pointer"
                >
                  <span>Entrar em contato</span>
                  <ArrowUpRight className="h-4 w-4 stroke-[1.75]" aria-hidden="true" />
                </button>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
