import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  icon?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children, className, title, icon }) => {
  return (
    <div
      className={twMerge(
        clsx(
          // Glassmorphism base styles matching the HTML provided
          'bg-surface backdrop-blur-md border border-border rounded-2xl shadow-xl w-full transition-colors duration-300',
          className
        )
      )}
    >
      {(title || icon) && (
        <div className="flex items-center gap-2 mb-3 border-b border-white/10 pb-2 p-4">
          {icon && <span className="text-accent">{icon}</span>}
          {title && (
            <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary">
              {title}
            </h3>
          )}
        </div>
      )}
      <div className={title || icon ? 'px-4 pb-4' : ''}>
        {children}
      </div>
    </div>
  );
};