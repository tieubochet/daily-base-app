import React from 'react';
import { Badge } from '../types';
import { ExternalLink, ChevronRight } from 'lucide-react';

interface BadgeItemProps {
  badge: Badge;
  onSelect: (badge: Badge) => void;
}

export const BadgeItem: React.FC<BadgeItemProps> = ({ badge, onSelect }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 p-4 items-start sm:items-center w-full">
        {/* Image */}
        <img
            src={badge.image}
            alt={badge.name}
            className="w-16 h-16 rounded-xl object-cover border border-white/10 flex-shrink-0"
        />

        {/* Content */}
        <div className="flex-1 w-full max-w-[640px]">
            <div className="flex flex-wrap items-center gap-2 mb-1">
                <h3 className="text-base font-extrabold text-primary m-0">{badge.name}</h3>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full border border-white/20 bg-[#101830]/30 text-xs text-white">
                    {badge.tag}
                </span>
            </div>
            <p className="text-sm text-[#C9D1D9] m-0 mb-2 leading-tight">
                {badge.description}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-2 mt-2">
                <button
                    onClick={() => onSelect(badge)}
                    className="flex items-center gap-2 h-9 px-3 rounded-xl text-sm font-semibold border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-colors"
                >
                    Details
                </button>
                {badge.links.slice(0, 2).map((link, i) => (
                    <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 h-9 px-3 rounded-xl text-sm font-semibold border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-colors no-underline"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {link.name}
                    </a>
                ))}
            </div>
        </div>
    </div>
  );
};