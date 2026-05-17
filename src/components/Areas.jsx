import React from 'react';

export default function Areas({ imageMap, serviceLocations }) {
  return (
    <section id="areas" className="py-40 px-6 md:px-12 bg-slate-950 text-white reveal">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="text-left">
          <h2 className="text-5xl md:text-7xl font-heading tracking-tighter leading-none uppercase text-white mb-10">Service <span className="text-[#CC0000]">Areas</span></h2>
          <img src={`/images/${imageMap.SERVICE_AREA_MAP}`} alt="AWC Service Map" width="1200" height="800" loading="lazy" className="w-full h-auto shadow-2xl border border-white/10 rounded-sm" />
        </div>
        <div className="grid grid-cols-2 gap-y-4 gap-x-10 text-left">
          {serviceLocations.map((location) => (
            <div key={location} className="flex items-center space-x-5 border-b border-white/5 pb-3 group hover:border-[#CC0000] transition-colors">
              <div className="w-2 h-2 bg-[#CC0000] rounded-full scale-0 group-hover:scale-100 transition-all"></div>
              <span className="text-xl md:text-2xl font-heading italic text-white/60 group-hover:text-white leading-none tracking-tight">{location}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}