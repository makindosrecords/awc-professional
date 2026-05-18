import React, { useState, useEffect } from 'react';

export default function Hero({ imageMap }) {
  const [mountVideo, setMountVideo] = useState(false);

  useEffect(() => {
    // Wait until the entire page (and LCP image) has fully loaded and painted
    const handleLoad = () => setTimeout(() => setMountVideo(true), 250);
    
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center bg-slate-950 overflow-hidden px-6 md:px-12 group">
      <div className="absolute inset-0 z-0 bg-slate-950">
        <img 
          src={`/images/${imageMap.HERO_POSTER}`}
          alt="Professional window cleaning services in the Bay Area"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105"
        />
        {mountVideo && (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105 animate-in fade-in"
          >
            <source src={`/images/${imageMap.HERO_VIDEO}`} type="video/mp4" />
            <track kind="captions" />
          </video>
        )}
        <div className="absolute inset-0 bg-slate-950/10 backdrop-brightness-110 z-10"></div>
      </div>

      <div className="relative z-20 max-w-[1700px] mx-auto w-full py-4">
        <div className="mb-6 flex flex-col items-center text-center group/brand">
            <img 
                src={`/images/${imageMap.HERO_LOGO_SVG}`} 
                alt="AWC Hero Logo SVG" 
                width="320" height="320"
                loading="eager" decoding="async"
                className="h-56 md:h-[320px] w-auto mb-1 drop-shadow-[0_25px_60px_rgba(0,0,0,0.6)] transition-transform duration-700 group-hover/brand:scale-105" 
            />
            <p className="text-white text-lg md:text-2xl font-heading font-black tracking-[0.2em] uppercase mb-4 drop-shadow-lg">
                Air Duct & Window Cleaning
            </p>
            <div className="flex items-center space-x-6 mb-4">
                <div className="h-0.5 w-12 bg-[#CC0000]"></div>
                <span className="text-xs md:text-sm font-black uppercase tracking-[0.5em] text-white bg-[#CC0000] px-6 py-2.5 rounded-sm shadow-2xl">
                  Established 1946
                </span>
                <div className="h-0.5 w-12 bg-[#CC0000]"></div>
            </div>
        </div>

        <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-white mb-6 tracking-tight uppercase drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
              Where quality cleaning <br /> 
              meets <span className="text-[#CC0000]">family values</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white font-bold leading-[1.6] max-w-3xl italic font-sans mb-8 drop-shadow-2xl">
              <span className="bg-[#CC0000] px-1.5 py-0.5 [box-decoration-break:clone] [-webkit-box-decoration-break:clone] hover:tracking-widest hover:bg-white hover:text-[#CC0000] transition-all duration-700 cursor-default shadow-lg">
                Three generations of mastery in glass clarity and professional ventilation systems.
              </span>
            </p>
            <div className="h-1 w-32 bg-[#CC0000] mb-8 shadow-[0_0_20px_rgba(204,0,0,0.5)]"></div>
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-4 text-white text-[10px] uppercase font-black tracking-[0.4em]">
                {[
                    { label: 'Residential', icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/badge:scale-110 transition-transform"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> },
                    { label: 'Commercial', icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/badge:scale-110 transition-transform"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg> },
                    { label: 'Industrial', icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/badge:scale-110 transition-transform"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> },
                    { label: 'Services', icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/badge:scale-110 transition-transform"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg> }
                ].map((item, i) => (
                    <div key={i} className="flex items-center">
                        <span className="bg-[#CC0000] px-3 py-1 rounded-sm flex items-center space-x-3 shadow-xl drop-shadow-lg hover:-translate-y-1 hover:bg-white hover:text-[#CC0000] transition-all duration-300 group/badge cursor-default">
                            {item.icon} 
                            <span>{item.label}</span>
                        </span>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}