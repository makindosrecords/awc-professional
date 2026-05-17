import React from 'react';
import { Award } from 'lucide-react';

export default function Services({ services, setSelectedService }) {
  return (
    <section id="services" className="py-32 px-12 bg-white relative border-y border-slate-100">
      <div className="max-w-[1500px] mx-auto">
        <div className="mb-24 border-b border-slate-100 pb-16 flex flex-col md:flex-row md:items-start justify-between gap-10 reveal">
          <div className="text-left max-w-4xl">
            <h2 className="text-5xl md:text-7xl font-heading text-[#CC0000] tracking-tighter leading-none uppercase mb-6">Services</h2>
            <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed font-sans border-l-2 border-slate-100 pl-8 italic">
               AWC proudly offers a wide range of professional services. From expert window and air duct cleaning to pressure washing and dryer vent maintenance, we're committed to enhancing the quality of your environment.
            </p>
          </div>
          <Award size={48} strokeWidth={1} className="text-[#CC0000] hidden md:block" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((s) => (
            <div key={s.id} onClick={() => setSelectedService(s)} className="group relative bg-white cursor-pointer overflow-visible transition-all duration-700 reveal">
              <div className="relative aspect-[2/3] overflow-hidden shadow-xl rounded-sm">
                <img 
                  src={`/images/${s.img}`} 
                  alt={`Service: ${s.title}`} 
                  width="400" height="600"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800'; }} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-8 flex flex-col justify-end text-left">
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center rounded-full text-white mb-4 group-hover:bg-[#CC0000] transition-colors">
                    <s.icon size={18} />
                  </div>
                  <h3 className="text-2xl font-heading font-black text-white leading-none uppercase tracking-tight mb-2">{s.title}</h3>
                  <div className="h-0.5 w-0 group-hover:w-full bg-[#CC0000] transition-all duration-500 mb-4"></div>
                  <p className="text-slate-300 text-[11px] font-light leading-relaxed max-h-0 group-hover:max-h-20 overflow-hidden transition-all duration-500 opacity-0 group-hover:opacity-100">
                    {s.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}