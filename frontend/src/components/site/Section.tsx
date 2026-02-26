import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: 'default' | 'muted' | 'accent';
}

export function Section({ children, className, id, variant = 'default' }: SectionProps) {
  const variantClasses = {
    default: 'bg-background',
    muted: 'bg-muted/30',
    accent: 'bg-accent/5',
  };

  return (
    <section id={id} className={cn('py-16 md:py-24', variantClasses[variant], className)}>
      <div className="container">{children}</div>
    </section>
  );
}

export function SectionHeader({
  title,
  description,
  className,
}: {
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn('mb-12 text-center', className)}>
      <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">{title}</h2>
      {description && (
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
