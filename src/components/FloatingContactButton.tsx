import React from 'react';
import { MessageCircle } from 'lucide-react';

interface FloatingContactButtonProps {
  onClick: () => void;
}

export const FloatingContactButton: React.FC<FloatingContactButtonProps> = ({
  onClick,
}) => {
  return (
    <div className="fixed right-5 bottom-5 z-30">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-full bg-[hsl(var(--primary))] opacity-25 animate-ping [animation-duration:2.8s]"
      />
      <button
        type="button"
        onClick={onClick}
        aria-label="Entrar em contato para primeira consulta"
        title="Entrar em contato"
        className="relative flex h-13 w-13 items-center justify-center rounded-full bg-[hsl(var(--primary-strong))] text-[hsl(var(--primary-foreground))] shadow-card-elevated transition-transform duration-150 hover:scale-105 hover:bg-[hsl(var(--primary-deep))] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[hsl(var(--ring))] cursor-pointer"
      >
        <MessageCircle className="h-6 w-6 stroke-[1.75]" aria-hidden="true" />
      </button>
    </div>
  );
};
