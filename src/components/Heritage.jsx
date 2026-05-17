import React from 'react';
import { History as LucideHistory } from 'lucide-react';

export default function Heritage({ imageMap }) {
  return (
    <section id="heritage" className="py-40 px-6 md:px-12 bg-[#FAFAFA] border-b border-slate-100 reveal">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative group">
           <div className="absolute inset-0 border-4 border-[#CC0000] opacity-0 group-hover:opacity-100 group-hover:-inset-4 transition-all duration-500 -z-10"></div>
           <div className="overflow-hidden shadow-2xl rounded-sm border border-slate-200">
             <img 
               src={`/images/${imageMap.FAMILY}`} 
               alt="The Frediani Family Owners" 
               width="700" height="500"
               loading="lazy" 
               className="relative z-10 w-full h-auto object-cover transition-all duration-1000 group-hover:scale-105" 
             />
           </div>
           <div className="mt-8 bg-slate-950 text-white p-10 shadow-2xl border-l-[12px] border-[#CC0000] group-hover:translate-x-4 transition-transform duration-700">
             <LucideHistory size={40} className="text-[#CC0000] mb-6" />
             <p className="text-2xl font-heading italic leading-tight text-white mb-6">"Established in 1946 by Frank Frediani"</p>
             <p className="text-[10px] uppercase font-bold tracking-[0.4em] text-slate-300">Three Generations of Excellence</p>
           </div>
        </div>
        <div className="lg:pl-10 text-left">
          <h2 className="text-5xl md:text-7xl font-heading text-[#CC0000] tracking-tighter leading-none uppercase mb-12 opacity-90">Heritage</h2>
          <div className="space-y-6 text-slate-600 text-lg md:text-xl leading-relaxed font-light font-sans">
            <p>
              <span className="text-6xl md:text-8xl font-black text-[#CC0000] float-left mr-6 leading-[0.7] mt-3 select-none">F</span>
              or three generations, dating back to 1946, <strong>AWC Air Duct & Window Cleaning</strong> has proudly served the Bay Area with exceptional care and quality.
            </p>
            <p>
              It all began with the vision of founder <strong>Frank Frediani</strong>, continued by his son <strong>Ron</strong>, who transitioned from a role in San Francisco's Window Cleaners Union to help lead AWC. Today, Ron and his wife Carol, along with their son Joe, own and operate AWC. 
            </p>
            <p>
              As a family-owned business, we prioritize exceptional customer service, guaranteeing punctuality, tidiness, and a consistently courteous approach.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}