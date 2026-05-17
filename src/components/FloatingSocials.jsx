import React from 'react';
import { SocialSVG, socialLinks } from '../constants.jsx';

export default function FloatingSocials() {
  if (!socialLinks) return null;
  return (
    <div className="fixed bottom-10 left-10 z-[100] flex flex-col space-y-4">
      {[
        { id: 'instagram', icon: SocialSVG.Instagram, href: socialLinks.instagram, label: 'Instagram' },
        { id: 'facebook', icon: SocialSVG.Facebook, href: socialLinks.facebook, label: 'Facebook' },
        { id: 'tiktok', icon: SocialSVG.TikTok, href: socialLinks.tiktok, label: 'TikTok' },
        { id: 'x', icon: SocialSVG.X, href: socialLinks.x, label: 'X' },
        { id: 'yelp', icon: SocialSVG.Yelp, href: socialLinks.yelp, label: 'Yelp' },
        { id: 'nextdoor', icon: SocialSVG.Nextdoor, href: socialLinks.nextdoor, label: 'Nextdoor' }
      ].map((item) => {
        const Icon = item.icon;
        return (
          <a key={item.id} href={item.href} target="_blank" rel="noopener noreferrer" className="group flex items-center">
            <div className="w-11 h-11 bg-white/90 backdrop-blur-md border border-slate-200 flex items-center justify-center text-slate-500 transition-all duration-300 group-hover:bg-[#CC0000] group-hover:text-white group-hover:border-[#CC0000] group-hover:scale-110 shadow-xl rounded-full relative">
              <div className="absolute inset-0 rounded-full group-hover:animate-ping bg-[#CC0000]/20 opacity-0 group-hover:opacity-100"></div>
              <Icon />
            </div>
            <span className="opacity-0 group-hover:opacity-100 ml-4 text-[9px] font-black uppercase tracking-[0.2em] text-white bg-slate-900 px-3 py-1.5 shadow-sm rounded-sm transition-all transform translate-x-2 group-hover:translate-x-0 whitespace-nowrap">{item.label}</span>
          </a>
        );
      })}
    </div>
  );
}