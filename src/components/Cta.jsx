import React from 'react';
import { Sparkles, ChevronRight } from 'lucide-react';

export default function Cta({ setIsQuoteModalOpen }) {
  return (
    <section className="py-40 px-6 md:px-12 bg-white text-center reveal">
      <Sparkles size={64} className="text-[#CC0000] mx-auto mb-10 animate-pulse" />
      <h2 className="text-5xl lg:text-8xl font-heading text-slate-900 tracking-tighter uppercase mb-8 leading-none">Tailored <span className="text-[#CC0000]">Estimate</span></h2>
      <p className="text-xl text-slate-500 font-light mb-16 max-w-2xl mx-auto">Launch our dispatch engine for a personalized service quote for your Peninsula property.</p>
      <button onClick={() => setIsQuoteModalOpen(true)} className="bg-slate-950 text-white px-16 py-8 text-[11px] font-black uppercase tracking-[0.8em] hover:bg-[#CC0000] transition-all shadow-xl group overflow-hidden">
        Open Quote Tool <ChevronRight className="inline-block ml-4 group-hover:translate-x-2 transition-transform" />
      </button>
    </section>
  );
}