import React from 'react';
import { ShieldCheck, Award } from 'lucide-react';

export default function Authority({ imageMap }) {
  return (
    <section id="about" className="py-40 px-6 md:px-12 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-12 reveal text-left">
            <h3 className="text-5xl lg:text-7xl font-heading text-[#CC0000] tracking-tighter uppercase leading-none">Authority</h3>
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-light font-sans max-w-lg">
              We are proud to be active participants in the <strong>International Window Cleaning Association</strong>. Our crew holds full certifications in OSHA protocols and aerial platform systems.
            </p>
            <div className="grid grid-cols-1 gap-5">
              {[
                { icon: ShieldCheck, title: "Liability & Workers' Comp", desc: "Full Comprehensive Protection" },
                { icon: Award, title: "Aerial Platform Certified", desc: "Specialized High-Reach Systems" }
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-8 p-8 bg-slate-50 border border-slate-100 rounded-sm hover:border-[#CC0000] transition-all group/card">
                  <item.icon className="text-[#CC0000] group-hover/card:scale-110 transition-transform" size={32} />
                  <div className="text-left"><p className="text-base font-black text-slate-900 uppercase tracking-tight leading-none mb-1">{item.title}</p><p className="text-[10px] uppercase font-bold tracking-widest text-slate-600">{item.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-10 reveal group">
            <div className="relative overflow-hidden rounded-sm shadow-2xl border border-slate-50">
              <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-[#CC0000] -translate-y-2 translate-x-2 z-20 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-700"></div>
              <img src={`/images/${imageMap.TEAM}`} loading="lazy" width="600" height="400" className="w-full h-auto relative z-10 transition-all duration-1000 group-hover:scale-105 group-hover:rotate-[-0.5deg]" alt="Professional AWC Crew" />
            </div>
            <div className="bg-slate-50 p-10 border-l-[10px] border-[#CC0000] shadow-sm group-hover:bg-white transition-colors duration-500 text-left">
              <p className="text-xl font-heading italic text-slate-900 leading-snug">"Ron Frediani serves on the Board of the Millbrae Chamber of Commerce and is a past president of the Millbrae Lions Club"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}