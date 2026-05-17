import React, { useState } from 'react';
import { X, FileText, Home, Briefcase, MapPin, CheckCircle, ChevronRight } from 'lucide-react';
import { services } from '../servicesData.jsx';

export default function QuoteModal({ setIsQuoteModalOpen }) {
  const [quoteStep, setQuoteStep] = useState(1);
  const [quoteState, setQuoteState] = useState({
    services: [], propertyType: 'residential', name: '', email: '', phone: '', address: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleQuoteToggle = (id) => {
    setQuoteState(prev => ({
      ...prev, services: prev.services.includes(id) ? prev.services.filter(s => s !== id) : [...prev.services, id]
    }));
  };

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
        setFormSubmitted(false); setQuoteStep(1); setQuoteState({ services: [], propertyType: 'residential', name: '', email: '', phone: '', address: '' }); setIsQuoteModalOpen(false);
    }, 5000);
  };

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-slate-950/98 backdrop-blur-2xl" onClick={() => setIsQuoteModalOpen(false)}></div>
      <div className="relative bg-white w-full max-w-5xl max-h-[92vh] overflow-y-auto shadow-2xl rounded-sm animate-in zoom-in duration-500">
        <button className="absolute top-8 right-8 text-slate-400 hover:text-[#CC0000] z-10 transition-all p-3 hover:scale-110" onClick={() => setIsQuoteModalOpen(false)} aria-label="Close"><X size={40} strokeWidth={1} /></button>
        <div className="p-8 md:p-20 text-left">
          <div className="mb-16 border-b border-slate-100 pb-10">
            <div className="flex items-center space-x-4 mb-4"><FileText className="text-[#CC0000]" size={24} /><span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Step {quoteStep} of 3</span></div>
            <h3 className="text-5xl font-heading font-black tracking-tighter text-slate-950 uppercase leading-none">Instant Estimate</h3>
          </div>
          <form onSubmit={handleQuoteSubmit}>
            {quoteStep === 1 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                <p className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-900 mb-10">1. Select Required Services (Multi-select)</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {services.map(s => (
                    <button key={s.id} type="button" onClick={() => handleQuoteToggle(s.id)} className={`group flex items-center p-6 border rounded-sm transition-all text-left ${quoteState.services.includes(s.id) ? 'bg-[#CC0000] border-[#CC0000] text-white shadow-lg' : 'bg-slate-50 border-slate-100 text-slate-600 hover:border-[#CC0000]'}`}>
                      <div className={`p-2 rounded-sm mr-4 transition-colors ${quoteState.services.includes(s.id) ? 'bg-white/10 text-white' : 'bg-white text-[#CC0000] group-hover:bg-[#CC0000] group-hover:text-white'}`}><s.icon size={20} /></div>
                      <span className="text-xs font-black uppercase tracking-widest">{s.title}</span>
                    </button>
                  ))}
                </div>
                <div className="mt-16 flex justify-end"><button type="button" disabled={quoteState.services.length === 0} onClick={() => setQuoteStep(2)} className="bg-slate-950 text-white px-12 py-6 text-[10px] font-black uppercase tracking-[0.6em] hover:bg-[#CC0000] transition-all disabled:opacity-20 shadow-xl">Continue</button></div>
              </div>
            )}
            {quoteStep === 2 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                <p className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-900 mb-10">2. Property Details</p>
                <div className="space-y-12">
                  <div className="flex space-x-6">{['residential', 'commercial'].map(type => (
                    <button key={type} type="button" onClick={() => setQuoteState(p => ({...p, propertyType: type}))} className={`flex-1 flex flex-col items-center justify-center p-12 border rounded-sm transition-all ${quoteState.propertyType === type ? 'bg-slate-950 border-slate-950 text-white shadow-xl' : 'bg-slate-50 border-slate-100 text-slate-400 hover:border-slate-300'}`}>
                      {type === 'residential' ? <Home size={32} className="mb-4" /> : <Briefcase size={32} className="mb-4" />}
                      <span className="text-xs font-black uppercase tracking-[0.3em]">{type}</span>
                    </button>
                  ))}</div>
                  <div className="relative"><MapPin size={20} className="absolute left-6 top-6 text-slate-300" /><textarea required rows="3" className="w-full bg-slate-50 border-none p-6 pl-16 focus:ring-2 focus:ring-[#CC0000] transition-all font-bold text-slate-900 text-lg rounded-sm" placeholder="Service Address (Peninsula Only)" value={quoteState.address} onChange={e => setQuoteState(p => ({...p, address: e.target.value}))}></textarea></div>
                </div>
                <div className="mt-16 flex justify-between"><button type="button" onClick={() => setQuoteStep(1)} className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 hover:text-slate-900">Back</button><button type="button" disabled={!quoteState.address} onClick={() => setQuoteStep(3)} className="bg-slate-950 text-white px-12 py-6 text-[10px] font-black uppercase tracking-[0.6em] hover:bg-[#CC0000] transition-all disabled:opacity-20 shadow-xl">Continue</button></div>
              </div>
            )}
            {quoteStep === 3 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                <p className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-900 mb-10">3. Contact Verification</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <input required className="w-full bg-slate-50 border-none p-6 focus:ring-2 focus:ring-[#CC0000] font-bold text-slate-900 text-lg rounded-sm" placeholder="Full Name" value={quoteState.name} onChange={e => setQuoteState(p => ({...p, name: e.target.value}))} />
                   <input required type="email" className="w-full bg-slate-50 border-none p-6 focus:ring-2 focus:ring-[#CC0000] font-bold text-slate-900 text-lg rounded-sm" placeholder="Email Address" value={quoteState.email} onChange={e => setQuoteState(p => ({...p, email: e.target.value}))} />
                   <input required type="tel" className="w-full bg-slate-50 border-none p-6 focus:ring-2 focus:ring-[#CC0000] font-bold text-slate-900 text-lg rounded-sm md:col-span-2" placeholder="Phone Number" value={quoteState.phone} onChange={e => setQuoteState(p => ({...p, phone: e.target.value}))} />
                </div>
                <div className="mt-16 flex justify-between items-center"><button type="button" onClick={() => setQuoteStep(2)} className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 hover:text-slate-900">Back</button>
                  {formSubmitted ? (
                    <div className="bg-[#CC0000] text-white px-10 py-5 rounded-sm flex items-center space-x-4 animate-in zoom-in"><CheckCircle size={20} /><span className="text-[10px] font-black uppercase tracking-[0.3em]">Transmission Success</span></div>
                  ) : (
                    <button type="submit" disabled={!quoteState.name || !quoteState.email || !quoteState.phone} className="bg-slate-950 text-white px-12 py-6 text-[10px] font-black uppercase tracking-[0.6em] hover:bg-[#CC0000] transition-all shadow-xl group">Submit Request <ChevronRight className="inline-block ml-4 group-hover:translate-x-2 transition-transform" /></button>
                  )}
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}