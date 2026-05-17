import React, { useState, useMemo, useEffect, lazy, Suspense } from 'react';
import { 
  Phone, Wind, CheckCircle2, Menu, X, ArrowRight, ShieldCheck, Clock, 
  ExternalLink, ChevronRight, Droplets, Building2, Fan, CreditCard, 
  Users2, Truck, Sun, Waves, Zap, Layout as LucideLayout, Maximize2, 
  Play as LucidePlay, Award, History as LucideHistory, ArrowUpRight, 
  Star, ShieldAlert, Users, MapPin, CheckCircle, Mail, Home, 
  Briefcase, Quote as QuoteIcon, Sparkles, FileText 
} from 'lucide-react';

import Hero from './components/Hero.jsx';

const Services = lazy(() => import('./components/Services.jsx'));
const Heritage = lazy(() => import('./components/Heritage.jsx'));
const Mastery = lazy(() => import('./components/Mastery.jsx'));
const Authority = lazy(() => import('./components/Authority.jsx'));
const Testimonials = lazy(() => import('./components/Testimonials.jsx'));
const Cta = lazy(() => import('./components/Cta.jsx'));
const Areas = lazy(() => import('./components/Areas.jsx'));
const Footer = lazy(() => import('./components/Footer.jsx'));

/**
 * AWC Air Duct and Window Cleaning - Production V89 (Typography Expansion)
 * Identity: 1946 Heritage / Frediani Family Lineage
 * Features: Larger Section Headings, Massive Hero Logo, Restored Meta SEO, PageSpeed Optimized
 */

// --- STABLE INLINE SOCIAL SVGS ---
const SocialSVG = {
  Instagram: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>,
  Facebook: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>,
  TikTok: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>,
  X: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 4.596 9.457 12.517h-7.405l-5.799-7.581-6.634 7.581H.539l8.6-9.829L0 1.153h7.594l5.233 6.918 6.074-6.918zm-1.29 14.908h2.039L6.448 3.208H4.26L17.611 16.06z"/></svg>,
  Yelp: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.2 14.6l-.3 4.1c-.1 1.5.8 2.8 2.2 3s2.8-.8 3-2.2l.1-.9c.1-.7-.1-1.3-.5-1.9l-2-2.1c-.8-.7-1.9-.7-2.5 0zm-4-1.3l-3.3 2.5c-1.2.9-1.5 2.5-.6 3.7.9 1.2 2.5 1.5 3.7.6l.8-.6c.6-.4.9-1 .9-1.7l.1-2.9c.1-1.1-.7-1.9-1.6-1.6zM11.1 9.4l.2-4.1c.1-1.5-.8-2.8-2.2-3s-2.8.8-3 2.2l-.1.9c-.1.7.1 1.3.5 1.9l2 2.1c.8.7 1.9.7 2.5 0zm10.2 4.1l-4.1-.2c-1.5-.1-2.8.8-3 2.2s.8 2.8 2.2 3l.9.1c.7.1 1.3-.1 1.9-.5l2.1-2c.7-.8.7-1.9 0-2.5zM15.3 7.8l3.3-2.5c1.2-.9 1.5-2.5.6-3.7-.9-1.2-2.5-1.5-3.7-.6l-.8.6c-.6.4-.9 1-.9 1.7l-.1 2.9c0 1 .8 1.9 1.6 1.6z"/></svg>,
  Nextdoor: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.5 2h-13A2.5 2.5 0 003 4.5v15A2.5 2.5 0 005.5 22h13a2.5 2.5 0 002.5-2.5v-15A2.5 2.5 0 0018.5 2zm-1.8 14.2l-2.6-1.5v-3.4l2.6 1.5v3.4zm-4.7 2.8l-2.6-1.5V9.4l2.6 1.5v8.1zm-4.7-2.8l-2.6-1.5V11l2.6 1.5v3.7z"/></svg>
};

// --- COMPLETE IMAGE MAP ---
const IMAGE_MAP = {
  LOGO: "AWC-red-logo-2x3[35897]_pdf.avif",
  HERO_LOGO_SVG: "awc_logo.svg",
  HERO_VIDEO: "hero_video.mp4",
  HERO_POSTER: "office_depot_window_cleaning.avif",
  FAMILY: "awc_family.avif",
  TEAM: "awc_team.avif",
  VAN: "awc_van.avif",
  BEFORE_AFTER: "before_after_window_cleaning.avif",
  SERVICE_AREA_MAP: "awc-service-area-map.avif",
  SERVICE_1_DUCT: "service_air_duct.avif",
  SERVICE_2_WINDOW: "service_window_cleaning.avif",
  SERVICE_3_PRESSURE: "service_pressure_wash.avif",
  SERVICE_4_GUTTER: "service_gutter_cleaning.avif",
  SERVICE_5_DRYER: "service_dryer_vent.avif",
  SERVICE_6_SOLAR: "service_solar_panel.avif",
  SERVICE_7_DECK: "service_deck_restoration.avif",
  SERVICE_8_HOUSE: "service_house_washing.avif",
  SERVICE_9_LIGHT: "service_light_fixture.avif",
  SERVICE_10_MIRROR: "service_mirror_cleaning.avif",
  SERVICE_11_ROOF: "service_roof_softwash.avif",
  SERVICE_12_FOGGING: "service_fogging_sanitization.avif",
  WINDOW_LADDER: "window_cleaning_ladder.avif",
  GUTTER_1: "gutter_cleaning_1.avif",
  GUTTER_2: "gutter_cleaning_2.avif",
  SOLAR_1: "solar_panel_cleaning.avif",
  DECK_1: "deck_cleaning.avif",
  HOUSE_1: "house_washing.avif",
  HOUSE_2: "house_washing_2.avif"
};

const FloatingSocials = ({ links }) => {
  if (!links) return null;
  return (
    <div className="fixed bottom-10 left-10 z-[100] flex flex-col space-y-4">
      {[
        { id: 'instagram', icon: SocialSVG.Instagram, href: links.instagram, label: 'Instagram' },
        { id: 'facebook', icon: SocialSVG.Facebook, href: links.facebook, label: 'Facebook' },
        { id: 'tiktok', icon: SocialSVG.TikTok, href: links.tiktok, label: 'TikTok' },
        { id: 'x', icon: SocialSVG.X, href: links.x, label: 'X' },
        { id: 'yelp', icon: SocialSVG.Yelp, href: links.yelp, label: 'Yelp' },
        { id: 'nextdoor', icon: SocialSVG.Nextdoor, href: links.nextdoor, label: 'Nextdoor' }
      ].map((item) => {
        const Icon = item.icon;
        return (
          <a key={item.id} href={item.href} target="_blank" rel="noopener noreferrer" className="group flex items-center">
            <div className="w-11 h-11 bg-white/90 backdrop-blur-md border border-slate-200 flex items-center justify-center text-slate-500 transition-all duration-300 group-hover:bg-[#CC0000] group-hover:text-white group-hover:border-[#CC0000] group-hover:scale-110 shadow-xl rounded-full relative">
              <div className="absolute inset-0 rounded-full group-hover:animate-ping bg-[#CC0000]/20 opacity-0 group-hover:opacity-100"></div>
              <Icon />
            </div>
            <span className="opacity-0 group-hover:opacity-100 ml-4 text-[9px] font-black uppercase tracking-[0.2em] text-white bg-slate-900 px-3 py-1.5 shadow-sm rounded-sm transition-all transform translate-x-2 group-hover:translate-x-0 whitespace-nowrap">{item.label}</span>
          </a>
        );
      })}
    </div>
  );
};

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
          const currentProgress = (window.pageYOffset / totalScroll) * 100;
          setScrollProgress(currentProgress);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <div className="fixed top-0 left-0 h-1 bg-[#CC0000] z-[100]" style={{ width: `${scrollProgress}%` }}></div>;
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [quoteStep, setQuoteStep] = useState(1);
  const [quoteState, setQuoteState] = useState({
    services: [], propertyType: 'residential', name: '', email: '', phone: '', address: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const phoneLiteral = "(650) 583-0420";
  const socialLinks = useMemo(() => ({
    instagram: "https://www.instagram.com/airductandwindowcleaning/",
    facebook: "https://www.facebook.com/bayareaawindowcleaning",
    tiktok: "https://www.tiktok.com/@bayareawindowcleaning",
    x: "https://x.com/SFductcleaner",
    yelp: "https://www.yelp.com/biz/awc-air-duct-and-window-cleaning-millbrae",
    nextdoor: "https://nextdoor.com/page/awc-air-duct-window-cleaning-millbrae-ca"
  }), []);

  const services = useMemo(() => [
    { id: 1, title: "Air Duct Cleaning", icon: Fan, img: IMAGE_MAP.SERVICE_1_DUCT, desc: "Professional high-static ventilation sanitization for your residential or commercial property.", videoUrl: "https://www.youtube.com/embed/_FHWKTUiykM", longDesc: ["According to the doctors at WebMD, “Indoor air pollution can affect you at home, work or even places you visit.”", "Clean ducts help your system run more efficiently and reduce harmful allergens."] },
    { id: 2, title: "Window Cleaning", icon: Building2, img: IMAGE_MAP.SERVICE_2_WINDOW, desc: "Interior and exterior window cleaning for storefronts, residential estates, and skyscrapers.", localVideo: "window_cleaning.mp4", extraImages: [IMAGE_MAP.WINDOW_LADDER] },
    { id: 3, title: "Pressure Washing", icon: Waves, img: IMAGE_MAP.SERVICE_3_PRESSURE, desc: "Precision surface restoration for driveways, siding, and building perimeters.", localVideo: "pressure_cleaning.mp4" },
    { id: 4, title: "Gutter Cleaning", icon: Droplets, img: IMAGE_MAP.SERVICE_4_GUTTER, desc: "Debris removal and system flushing to protect property foundations and roofs.", extraImages: [IMAGE_MAP.GUTTER_1, IMAGE_MAP.GUTTER_2] },
    { id: 5, title: "Dryer Vent Cleaning", icon: Wind, img: IMAGE_MAP.SERVICE_5_DRYER, desc: "Critical maintenance ensuring laundry safety, efficiency, and fire prevention.", videoUrl: "https://www.youtube.com/embed/iuUXuGMimYo" },
    { id: 6, title: "Solar Panel Cleaning", icon: Sun, img: IMAGE_MAP.SERVICE_6_SOLAR, desc: "Purified water cleaning for peak electrical efficiency of your solar arrays.", extraImages: [IMAGE_MAP.SOLAR_1] },
    { id: 7, title: "Deck Cleaning & Restoration", icon: LucideLayout, img: IMAGE_MAP.SERVICE_7_DECK, desc: "Deep wood cleaning and restoration to enhance outdoor longevity.", extraImages: [IMAGE_MAP.DECK_1] },
    { id: 8, title: "House & Building Washing", icon: Building2, img: IMAGE_MAP.SERVICE_8_HOUSE, desc: "Comprehensive exterior washing from soft-wash to high-pressure.", extraImages: [IMAGE_MAP.HOUSE_1, IMAGE_MAP.HOUSE_2] },
    { id: 9, title: "Light Fixture Cleaning", icon: Zap, img: IMAGE_MAP.SERVICE_9_LIGHT, desc: "Detail-oriented hand cleaning for luxury estate chandeliers and fixtures.", extraImages: [IMAGE_MAP.SERVICE_9_LIGHT] },
    { id: 10, title: "Mirror Cleaning", icon: Star, img: IMAGE_MAP.SERVICE_10_MIRROR, desc: "Streak-free polishing for gym mirrors and custom residential glass.", extraImages: [IMAGE_MAP.LOGO] },
    { id: 11, title: "Soft Washing & Roof Washing", icon: Droplets, img: IMAGE_MAP.SERVICE_11_ROOF, desc: "Safe, low-pressure chemical cleaning for roof algae and moss.", localVideo: "soft_washing.mp4" },
    { id: 12, title: "Fogging Service", icon: Wind, img: IMAGE_MAP.SERVICE_12_FOGGING, desc: "Industrial sanitization fogging for complete interior environment purification.", videoUrl: "https://www.youtube.com/embed/xhaP51QZQmU" }
  ], []);

  const serviceLocations = useMemo(() => [
    "Atherton", "Belmont", "Brisbane", "Burlingame", "Colma", "Daly City",
    "El Granada", "Foster City", "Half Moon Bay", "Hillsborough", "Los Altos Hills",
    "Menlo Park", "Millbrae", "Montara", "Moss Beach", "Pacifica", "Palo Alto",
    "Redwood City", "San Bruno", "San Carlos", "San Francisco", "San Mateo",
    "South San Francisco", "Stanford", "Sunnyvale", "Woodside"
  ], []);

  const testimonials = useMemo(() => [
    { name: "S. Miller", location: "Hillsborough", text: "AWC has been cleaning our windows for years. Punctual, professional, and they leave the house spotless.", rating: 5 },
    { name: "J. Thompson", location: "San Mateo", text: "The air duct cleaning made a noticeable difference in my allergy symptoms. Highly recommend the fogging service too.", rating: 5 },
    { name: "L. Chen", location: "Palo Alto", text: "Our solar panels were covered in ash and dust. AWC got them back to peak performance with their water-fed pole system.", rating: 5 }
  ], []);

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
      
      <FloatingSocials links={socialLinks} />

      <header className="bg-white/95 backdrop-blur-xl border-b border-slate-100 fixed top-0 left-0 right-0 z-[60] shadow-sm transition-all duration-300">
        <div className="max-w-[1600px] mx-auto px-10 py-4 flex justify-between items-center">
          <div className="relative w-48 h-16 flex items-center">
             <img 
               src={`/images/${IMAGE_MAP.LOGO}`} 
               alt="AWC Header Logo" 
               width="176" height="176"
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
          <button className="xl:hidden p-2" onClick={() => setIsMenuOpen(true)} aria-label="Open Menu"><Menu size={32} /></button>
        </div>
      </header>

      <main className="pt-28">
        
        <Hero imageMap={IMAGE_MAP} />
        <Suspense fallback={<div className="h-64 flex items-center justify-center"><div className="text-[#CC0000] text-sm font-black uppercase tracking-[0.4em] animate-pulse">Loading Content...</div></div>}>
          <Services services={services} setSelectedService={setSelectedService} />
          <Heritage imageMap={IMAGE_MAP} />

          <Mastery imageMap={IMAGE_MAP} setIsQuoteModalOpen={setIsQuoteModalOpen} />
          <Authority imageMap={IMAGE_MAP} />
          <Testimonials testimonials={testimonials} />
          <Cta setIsQuoteModalOpen={setIsQuoteModalOpen} />
          <Areas imageMap={IMAGE_MAP} serviceLocations={serviceLocations} />

          <Footer imageMap={IMAGE_MAP} phoneLiteral={phoneLiteral} />
        </Suspense>
      </main>

      {/* INSTANT QUOTE MODAL */}
      {isQuoteModalOpen && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-slate-950/98 backdrop-blur-2xl" onClick={() => setIsQuoteModalOpen(false)}></div>
          <div className="relative bg-white w-full max-w-5xl max-h-[92vh] overflow-y-auto shadow-2xl rounded-sm animate-in zoom-in duration-500">
            <button className="absolute top-8 right-8 text-slate-400 hover:text-[#CC0000] z-10 transition-all p-3 hover:scale-110" onClick={() => setIsQuoteModalOpen(false)} aria-label="Close"><X size={40} strokeWidth={1} /></button>
            <div className="p-8 md:p-20 text-left">
              <div className="mb-16 border-b border-slate-100 pb-10">
                <div className="flex items-center space-x-4 mb-4"><FileText className="text-[#CC0000]" size={24} /><span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Step {quoteStep} of 3</span></div>
                {/* INCREASED MODAL HEADER */}
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
      )}

      {/* SERVICE MODAL */}
      {selectedService && (
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
      )}

      {/* MOBILE NAV */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-slate-950 z-[200] flex flex-col items-center justify-center p-20 text-center animate-in fade-in duration-300">
          <button className="absolute top-12 right-12 text-white hover:text-[#CC0000] transition-all" onClick={() => setIsMenuOpen(false)} aria-label="Close Menu"><X size={56} strokeWidth={1} /></button>
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