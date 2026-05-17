import React from 'react';
import { Quote as QuoteIcon, Star } from 'lucide-react';
import { testimonials } from '../constants.jsx';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 px-6 md:px-12 bg-slate-950 text-white border-y border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-24 reveal">
          <QuoteIcon size={48} className="text-[#CC0000]/40 mx-auto mb-6" />
          <h2 className="text-5xl md:text-7xl font-heading text-white tracking-tighter uppercase mb-4">Client <span className="text-[#CC0000]">Voices</span></h2>
          <p className="text-slate-400 uppercase font-black text-[10px] tracking-[0.4em]">Excellence verified by your neighbors</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-slate-900 p-12 shadow-2xl rounded-sm border-t-4 border-[#CC0000] reveal hover:-translate-y-2 transition-transform duration-500 text-left" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="flex space-x-1 mb-8">{[...Array(t.rating)].map((_, index) => <Star key={index} size={14} className="text-[#CC0000] fill-[#CC0000]" />)}</div>
              <p className="text-lg text-slate-300 italic mb-10 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center space-x-4 border-t border-white/5 pt-8">
                <div className="w-10 h-10 bg-[#CC0000] flex items-center justify-center text-white text-xs font-black rounded-full uppercase">{t.name[0]}</div>
                <div><p className="text-sm font-black text-white uppercase tracking-tight">{t.name}</p><p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{t.location}</p></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}