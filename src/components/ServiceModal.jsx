import React from 'react';
import { X, History as LucideHistory } from 'lucide-react';

export default function ServiceModal({ selectedService, setSelectedService }) {
  if (!selectedService) return null;
  
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-8 overflow-hidden">
      <div className="absolute inset-0 bg-slate-950/98 backdrop-blur-2xl" onClick={() => setSelectedService(null)}></div>
      <div className="relative bg-white w-full max-w-7xl max-h-[92vh] overflow-y-auto shadow-2xl rounded-sm animate-in zoom-in duration-500 grid grid-cols-1 lg:grid-cols-2 items-start h-full">
        <button className="absolute top-8 right-8 text-slate-400 hover:text-[#CC0000] z-10 transition-all p-3 hover:scale-110" onClick={() => setSelectedService(null)} aria-label="Close"><X size={40} strokeWidth={1} /></button>
        <div className="p-12 md:p-24 bg-white text-left order-2 lg:order-1 flex flex-col justify-center min-h-full">
          <div className="flex items-center space-x-10 mb-10"><div className="text-[#CC0000]"><selectedService.icon size={40} strokeWidth={1.5} /></div><div className="h-px w-16 bg-slate-100"></div></div>
          <h3 className="text-4xl md:text-5xl font-heading font-black mb-10 tracking-tighter text-slate-950 uppercase leading-none">{selectedService.title}</h3>
          <div className="space-y-6 mb-12">
             {selectedService.longDesc ? selectedService.longDesc.map((para, i) => (
                 <p key={i} className={`text-lg leading-relaxed text-slate-600 font-sans ${para.startsWith('•') ? 'pl-4' : ''}`}>
                   {para}
                 </p>
               )) : <p className="text-xl text-slate-500 font-light leading-relaxed italic border-l-[16px] border-[#CC0000] pl-10 font-sans">{selectedService.desc}</p>
             }
          </div>
          <button className="bg-slate-950 text-white w-full py-10 text-[10px] font-black uppercase tracking-[0.6em] hover:bg-[#CC0000] transition-all shadow-xl">Immediate Dispatch</button>
        </div>
        <div className="bg-slate-950 flex flex-col items-center justify-center border-l border-slate-100 min-h-[500px] lg:min-h-screen relative overflow-hidden group/vid order-1 lg:order-2 px-10 py-20">
           <div className="w-full max-w-4xl space-y-12">
              {selectedService.videoUrl ? <div className="w-full aspect-video bg-black shadow-2xl rounded-sm overflow-hidden"><iframe width="100%" height="100%" src={selectedService.videoUrl} title="Service Video" frameBorder="0" allowFullScreen></iframe></div> : selectedService.localVideo ? <div className="w-full aspect-video bg-black shadow-2xl rounded-sm overflow-hidden"><video src={`/images/${selectedService.localVideo}`} controls className="w-full h-full object-cover" /></div> : null}
              {selectedService.extraImages && selectedService.extraImages.map((img, i) => <img key={i} src={`/images/${img}`} alt="Service Detail" width="600" height="400" loading="lazy" className="w-full h-auto rounded-sm shadow-2xl border border-white/5" />)}
              {!selectedService.videoUrl && !selectedService.localVideo && !selectedService.extraImages && <div className="flex flex-col items-center text-center"><LucideHistory size={300} className="text-white/5 mb-8" /><div className="text-[#CC0000] opacity-30 uppercase font-black text-[11px] tracking-[1.2em]">AWC TECHNICAL LOG</div></div>}
           </div>
        </div>
      </div>
    </div>
  );
}