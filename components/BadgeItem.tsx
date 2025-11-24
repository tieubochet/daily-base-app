import React from 'react';
import { Badge } from '../types';
import { ExternalLink, Info } from 'lucide-react';
import { BadgeIcon } from './BadgeIcon';

interface BadgeItemProps {
  badge: Badge;
  onSelect: (badge: Badge) => void;
}

export const BadgeItem: React.FC<BadgeItemProps> = ({ badge, onSelect }) => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 py-5 border-b border-white/10 last:border-0 w-full">
      {/* Left: Icon/Image (Auto-generated) */}
      <div className="shrink-0">
        <BadgeIcon name={badge.name} className="w-14 h-14 text-xl" />
      </div>

      {/* Middle: Content */}
      <div className="flex-1 min-w-0 flex flex-col items-start text-left gap-1 w-full">
          <div className="flex items-center flex-wrap gap-2">
              <h3 className="text-lg font-bold text-primary truncate leading-tight">
                  {badge.name}
              </h3>
              
              {/* Chain Tag */}
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-100 border border-blue-400/20 whitespace-nowrap">
                {badge.tag}
              </span>

              {/* Details Pill */}
              <button
                onClick={() => onSelect(badge)}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold bg-white/10 hover:bg-white/20 text-secondary border border-white/10 transition-colors uppercase tracking-wide cursor-pointer"
              >
                <Info size={10} /> Details
              </button>
          </div>
          
          <p className="text-sm text-secondary/80 leading-snug font-medium">
              {badge.description}
          </p>
      </div>

      {/* Right: Action Buttons */}
      <div className="shrink-0 w-full md:w-auto mt-2 md:mt-0 flex flex-col gap-2 items-stretch md:items-end">
        {badge.links.map((link, index) => (
            <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 h-9 px-4 rounded-lg text-sm font-bold bg-[#FFC800] text-black border border-[#FFC800] hover:bg-[#FFD633] hover:scale-[1.02] transition-all w-full md:w-auto shadow-md whitespace-nowrap"
                onClick={(e) => e.stopPropagation()}
            >
                {link.name} <ExternalLink size={12} />
            </a>
        ))}
      </div>
    </div>
  );
};