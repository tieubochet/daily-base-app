import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface BadgeIconProps {
  name: string;
  className?: string;
}

export const BadgeIcon: React.FC<BadgeIconProps> = ({ name, className }) => {
  const getInitials = (name: string) => {
    const words = name.trim().split(/\s+/);
    if (words.length >= 2) {
      return (words[0][0] + words[1][0]).toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  // Simple deterministic color generation based on string hash
  const getColor = (name: string) => {
    const colors = [
      'bg-[#111827]', // Gray-900 (Dark/Black)
      'bg-[#059669]', // Emerald-600 (Green)
      'bg-[#2563EB]', // Blue-600
      'bg-[#7C3AED]', // Violet-600
      'bg-[#DB2777]', // Pink-600
      'bg-[#D97706]', // Amber-600
      'bg-[#0891B2]', // Cyan-600
      'bg-[#4F46E5]', // Indigo-600
    ];
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  };

  return (
    <div
      className={twMerge(
        clsx(
          'flex items-center justify-center text-white font-bold rounded-xl border border-white/10 shadow-sm shrink-0',
          getColor(name),
          className
        )
      )}
    >
      <span className="leading-none select-none">{getInitials(name)}</span>
    </div>
  );
};
