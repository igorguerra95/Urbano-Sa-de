import React, { useState } from 'react';
import { Leaf } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
  priority?: boolean;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  className = '',
  fallbackLabel = 'Urbano Saúde',
  priority = false,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`relative flex flex-col items-center justify-center overflow-hidden bg-leaf-wash p-8 text-center ${className}`}
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[hsl(var(--border-strong))] bg-[hsl(var(--surface))] text-[hsl(var(--primary-strong))]">
          <Leaf className="h-5 w-5 stroke-[1.5]" />
        </div>
        <p className="mt-4 font-display text-xl font-medium text-[hsl(var(--foreground))]">
          {fallbackLabel}
        </p>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[hsl(var(--surface-botanical))] ${className}`}>
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`h-full w-full object-cover transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};
