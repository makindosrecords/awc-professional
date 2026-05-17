import React from 'react';

export default function Footer({ imageMap, phoneLiteral }) {
  return (
    <footer id="contact" className="bg-[#0A0B10] text-white py-20 px-12 border-t border-white/5 relative z-10">
      <div className="max-w-[1500px] mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
        <div className="flex flex-col items-start max-w-sm text-left">
           <img src={`/images/${imageMap.LOGO}`} alt="AWC Footer Logo" width="150" height="150" className="h-14 brightness-200 grayscale mb-10 opacity-60 hover:opacity-100 transition-opacity" />
           <p className="text-lg font-heading italic text-slate-400 leading-relaxed mb-8">"Clear views and fresh environments since 1946. Three generations of Frediani heritage in the Bay Area."</p>
        </div>
        <div className="flex flex-col space-y-10 text-left">
           <nav className="grid grid-cols-2 gap-x-20 gap-y-5 text-[12px] font-black uppercase tracking-[0.3em] text-white/60">
              <a href="#services" className="hover:text-[#CC0000] transition-colors">Services</a>
              <a href="#heritage" className="hover:text-[#CC0000] transition-colors">Heritage</a>
              <a href="#about" className="hover:text-[#CC0000] transition-colors">Authority</a>
              <a href="#areas" className="hover:text-[#CC0000] transition-colors">Areas</a>
           </nav>
           <div className="h-px w-full bg-white/5"></div>
           <a href={`tel:${phoneLiteral.replace(/\D/g,'')}`} className="text-3xl lg:text-5xl font-heading font-black text-white hover:text-[#CC0000] transition-all tracking-tighter leading-none" aria-label={`Call us at ${phoneLiteral}`}>{phoneLiteral}</a>
        </div>
        <div className="flex items-center space-x-6">
          {['Licensed', 'Bonded', 'Insured'].map(tag => (
            <div key={tag} className="px-5 py-2 border border-white/10 bg-white/5 text-[9px] font-black uppercase tracking-[0.4em] text-slate-400 cursor-default">{tag}</div>
          ))}
        </div>
      </div>
    </footer>
  );
}