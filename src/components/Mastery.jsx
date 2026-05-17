import React from 'react';
import { ArrowRight, Maximize2 } from 'lucide-react';

export default function Mastery({ imageMap, setIsQuoteModalOpen }) {
  return (
    <section className="py-40 px-6 md:px-12 bg-slate-950 text-white overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
        <div className="reveal text-left">
          <div className="w-12 h-1.5 bg-[#CC0000] mb-10"></div>
          <h2 className="text-5xl md:text-7xl font-heading tracking-tighter leading-[1.1] mb-12 uppercase italic">Mastery <br/> <span className="text-[#CC0000]">Revealed</span></h2>
          <p className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed italic font-heading border-l-[12px] border-[#CC0000]/40 pl-10 mb-16">
            "Our service shines through. Meticulous attention to detail ensures your property's glass and ventilation meet the highest standard of clarity."
          </p>
          <button onClick={() => setIsQuoteModalOpen(true)} className="group flex items-center space-x-8 text-white font-black uppercase tracking-[0.4em] text-[10px] py-4 px-8 border border-white/10 hover:bg-[#CC0000] hover:border-[#CC0000] transition-all">
            <span>Request Clarity</span>
            <ArrowRight size={16} className="group-hover:translate-x-3 transition-transform" />
          </button>
        </div>
        <div className="relative group reveal flex justify-center lg:justify-end">
          <div className="max-w-xl w-full overflow-hidden rounded-sm border border-white/5 relative z-10 before:content-[''] before:absolute before:top-0 before:-left-[100%] before:w-1/2 before:h-full before:bg-white/20 before:skew-x-[-25deg] group-hover:before:left-[150%] before:transition-all before:duration-1000 before:z-20">
            <img src={`/images/${imageMap.WINDOW_LADDER}`} alt="Professional Equipment Mastery" width="600" height="800" loading="lazy" className="w-full h-auto transition-all duration-1000 group-hover:scale-110 group-hover:brightness-125 object-cover" />
          </div>
          <div className="absolute -bottom-8 -left-8 bg-white text-slate-900 px-10 py-6 shadow-2xl flex items-center space-x-6 z-20 group-hover:-translate-y-2 transition-transform duration-500">
            <div className="p-3 bg-slate-950 text-[#CC0000] rounded-full"><Maximize2 size={24} /></div>
            <span className="text-sm font-black uppercase tracking-[0.3em]">Proven Results</span>
          </div>
        </div>
      </div>
    </section>
  );
}