import React, { useState, useMemo, useEffect, lazy, Suspense } from 'react';

import Hero from './components/Hero.jsx';
import { IMAGE_MAP, phoneLiteral } from './constants.jsx';
import ScrollProgressBar from './components/ScrollProgressBar.jsx';

const Services = lazy(() => import('./components/Services.jsx'));
const Heritage = lazy(() => import('./components/Heritage.jsx'));
const Mastery = lazy(() => import('./components/Mastery.jsx'));
const Authority = lazy(() => import('./components/Authority.jsx'));
const Testimonials = lazy(() => import('./components/Testimonials.jsx'));
const Cta = lazy(() => import('./components/Cta.jsx'));
const Areas = lazy(() => import('./components/Areas.jsx'));
const Footer = lazy(() => import('./components/Footer.jsx'));
const QuoteModal = lazy(() => import('./components/QuoteModal.jsx'));
const ServiceModal = lazy(() => import('./components/ServiceModal.jsx'));
const FloatingSocials = lazy(() => import('./components/FloatingSocials.jsx'));

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    // SEO LOGIC 
    document.title = "AWC Air Duct & Window Cleaning | Bay Area Professional Services";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', "Three generations of professional air duct cleaning, window cleaning, and exterior restoration in the Bay Area. Established 1946. Licensed, bonded, and insured.");
  }, []);

  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-[#CC0000] selection:text-white overflow-x-hidden min-h-screen">
      <ScrollProgressBar />
      
      <Suspense fallback={null}>
        <FloatingSocials />
      </Suspense>

      <header className="bg-white/95 backdrop-blur-xl border-b border-slate-100 fixed top-0 left-0 right-0 z-[60] shadow-sm transition-all duration-300">
        <div className="max-w-[1600px] mx-auto px-10 py-4 flex justify-between items-center">
          <div className="relative w-48 h-16 flex items-center">
             <img 
               src={`/images/${IMAGE_MAP.LOGO}`} 
               alt="AWC Header Logo" 
               width="176" height="176"
               fetchpriority="high" loading="eager" decoding="async"
               className="h-44 w-auto cursor-pointer transition-transform hover:scale-110 absolute left-0 top-[68%] -translate-y-1/2" 
               onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
             />
          </div>
          <nav className="hidden xl:flex items-center space-x-12 text-[11px] uppercase font-bold tracking-[0.3em] text-slate-500">
            {['Services', 'Heritage', 'About', 'Areas'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-[#CC0000] transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#CC0000] group-hover:w-full transition-all"></span>
              </a>
            ))}
            <button onClick={() => setIsQuoteModalOpen(true)} className="hover:text-[#CC0000] transition-colors relative group uppercase font-bold">
              Quote
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#CC0000] group-hover:w-full transition-all"></span>
            </button>
            <div className="flex flex-col items-end leading-none cursor-pointer" onClick={() => window.location.href=`tel:${phoneLiteral.replace(/\D/g,'')}`}>
              <span className="text-[9px] text-[#CC0000] mb-1 font-black">Direct Line</span>
              <span className="text-2xl text-slate-900 font-black tracking-tighter">{phoneLiteral}</span>
            </div>
          </nav>
          <button className="xl:hidden p-2" onClick={() => setIsMenuOpen(true)} aria-label="Open Menu">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </button>
        </div>
      </header>

      <main className="pt-28">
        
        <Hero imageMap={IMAGE_MAP} />
        <Suspense fallback={<div className="h-64 flex items-center justify-center"><div className="text-[#CC0000] text-sm font-black uppercase tracking-[0.4em] animate-pulse">Loading Content...</div></div>}>
          <Services setSelectedService={setSelectedService} />
          <Heritage imageMap={IMAGE_MAP} />

          <Mastery imageMap={IMAGE_MAP} setIsQuoteModalOpen={setIsQuoteModalOpen} />
          <Authority imageMap={IMAGE_MAP} />
          <Testimonials />
          <Cta setIsQuoteModalOpen={setIsQuoteModalOpen} />
          <Areas imageMap={IMAGE_MAP} />

          <Footer imageMap={IMAGE_MAP} phoneLiteral={phoneLiteral} />
        </Suspense>
      </main>

      {isQuoteModalOpen && (
        <Suspense fallback={null}>
          <QuoteModal setIsQuoteModalOpen={setIsQuoteModalOpen} />
        </Suspense>
      )}

      {selectedService && (
        <Suspense fallback={null}>
          <ServiceModal selectedService={selectedService} setSelectedService={setSelectedService} />
        </Suspense>
      )}

      {/* MOBILE NAV */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-slate-950 z-[200] flex flex-col items-center justify-center p-20 text-center animate-in fade-in duration-300">
          <button className="absolute top-12 right-12 text-white hover:text-[#CC0000] transition-all" onClick={() => setIsMenuOpen(false)} aria-label="Close Menu">
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
          <div className="space-y-8">
            {['Services', 'Heritage', 'About', 'Areas'].map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} className="block text-5xl font-heading italic text-white hover:text-[#CC0000] tracking-tighter transition-all" onClick={() => setIsMenuOpen(false)}>{link}</a>
            ))}
            <button onClick={() => { setIsQuoteModalOpen(true); setIsMenuOpen(false); }} className="block text-5xl font-heading italic text-white hover:text-[#CC0000] tracking-tighter transition-all">Quote</button>
          </div>
          <div className="mt-24 pt-10 border-t border-white/10 w-full max-w-sm text-center">
             <a href={`tel:${phoneLiteral.replace(/\D/g,'')}`} className="text-2xl font-heading font-black text-white">{phoneLiteral}</a>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        html { 
          scroll-behavior: smooth; 
          scroll-padding-top: 100px; 
        }
        .font-sans { font-family: 'Figtree', sans-serif; font-display: swap; }
        .font-heading { font-family: 'Archivo', sans-serif; font-display: swap; }
        body { background-color: #FFFFFF; }
        @keyframes reveal {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .reveal {
          animation: reveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        .animate-in { animation: fade-in 1.2s forwards; }
      `}} />
    </div>
  );
}