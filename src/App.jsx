import React, { useState, useMemo, useEffect } from 'react';
import { 
  Phone, 
  Wind, 
  CheckCircle2, 
  Menu, 
  X, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  ExternalLink,
  ChevronRight,
  Droplets,
  Building2,
  Fan,
  CreditCard,
  Users2,
  Truck,
  Sun,
  Waves,
  Zap,
  Layout as LucideLayout,
  Maximize2,
  Play as LucidePlay,
  Award,
  History as LucideHistory,
  ArrowUpRight,
  Star,
  ShieldAlert,
  Users,
  MapPin,
  CheckCircle
} from 'lucide-react';

/**
 * AWC Air Duct and Window Cleaning - Production V41 (Compact Branding Build)
 * Identity: 1946 Heritage / Frediani Family Lineage
 * Typography: Archivo (Headings) / Figtree (UI & Body)
 * Features: Compact Hero Section, Centered Hero Branding, Smooth Scroll
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

// --- IMAGE MAP ---
const IMAGE_MAP = {
  LOGO: "AWC-red-logo-2x3[35897]_pdf.avif",
  HERO_MAIN: "office_depot_window_cleaning.avif",
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
  SERVICE_12_FOGGING: "service_fogging_sanitization.avif"
};

// --- FLOATING LOWER-LEFT SOCIAL BAR ---
const FloatingSocials = ({ links }) => (
  <div className="fixed bottom-10 left-10 z-[100] flex flex-col space-y-4">
    {[
      { icon: SocialSVG.Instagram, href: links.instagram, label: 'Instagram' },
      { icon: SocialSVG.Facebook, href: links.facebook, label: 'Facebook' },
      { icon: SocialSVG.TikTok, href: links.tiktok, label: 'TikTok' },
      { icon: SocialSVG.X, href: links.x, label: 'X' },
      { icon: SocialSVG.Yelp, href: links.yelp, label: 'Yelp' },
      { icon: SocialSVG.Nextdoor, href: links.nextdoor, label: 'Nextdoor' }
    ].map((item, i) => (
      <a 
        key={i}
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center"
      >
        <div className="w-11 h-11 bg-white/90 backdrop-blur-md border border-slate-200 flex items-center justify-center text-slate-500 transition-all duration-300 group-hover:bg-[#CC0000] group-hover:text-white group-hover:border-[#CC0000] group-hover:scale-110 shadow-xl rounded-full relative">
          <div className="absolute inset-0 rounded-full group-hover:animate-ping bg-[#CC0000]/20 opacity-0 group-hover:opacity-100"></div>
          <item.icon />
        </div>
        <span className="opacity-0 group-hover:opacity-100 ml-4 text-[9px] font-black uppercase tracking-[0.2em] text-white bg-slate-900 px-3 py-1.5 shadow-sm rounded-sm pointer-events-none transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 whitespace-nowrap">
          {item.label}
        </span>
      </a>
    ))}
  </div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const phoneLiteral = "(650) 583-0420";
  
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.pageYOffset / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialLinks = {
    instagram: "https://www.instagram.com/airductandwindowcleaning/",
    facebook: "https://www.facebook.com/bayareaawindowcleaning",
    tiktok: "https://www.tiktok.com/@bayareawindowcleaning",
    x: "https://x.com/SFductcleaner",
    yelp: "https://www.yelp.com/biz/awc-air-duct-and-window-cleaning-millbrae",
    nextdoor: "https://nextdoor.com/page/awc-air-duct-window-cleaning-millbrae-ca"
  };

  const serviceLocations = useMemo(() => [
    "Atherton", "Belmont", "Brisbane", "Burlingame", "Colma", "Daly City",
    "El Granada", "Foster City", "Half Moon Bay", "Hillsborough", "Los Altos Hills",
    "Menlo Park", "Millbrae", "Montara", "Moss Beach", "Pacifica", "Palo Alto",
    "Redwood City", "San Bruno", "San Carlos", "San Francisco", "San Mateo",
    "South San Francisco", "Stanford", "Sunnyvale", "Woodside"
  ], []);

  const services = useMemo(() => [
    { id: 1, title: "Air Duct Cleaning", icon: Fan, img: IMAGE_MAP.SERVICE_1_DUCT, desc: "Professional high-static ventilation sanitization for your residential or commercial property." },
    { id: 2, title: "Window Cleaning", icon: Building2, img: IMAGE_MAP.SERVICE_2_WINDOW, desc: "Interior and exterior window cleaning for storefronts, residential estates, and skyscrapers." },
    { id: 3, title: "Pressure Washing", icon: Waves, img: IMAGE_MAP.SERVICE_3_PRESSURE, desc: "Precision surface restoration for driveways, siding, and building perimeters." },
    { id: 4, title: "Gutter Cleaning", icon: Droplets, img: IMAGE_MAP.SERVICE_4_GUTTER, desc: "Debris removal and system flushing to protect property foundations and roofs." },
    { id: 5, title: "Dryer Vent Cleaning", icon: Wind, img: IMAGE_MAP.SERVICE_5_DRYER, desc: "Critical maintenance ensuring laundry safety, efficiency, and fire prevention." },
    { id: 6, title: "Solar Panel Cleaning", icon: Sun, img: IMAGE_MAP.SERVICE_6_SOLAR, desc: "Purified water cleaning for peak electrical efficiency of your solar arrays." },
    { id: 7, title: "Deck Cleaning & Restoration", icon: LucideLayout, img: IMAGE_MAP.SERVICE_7_DECK, desc: "Deep wood cleaning and restoration to enhance outdoor longevity." },
    { id: 8, title: "House & Building Washing", icon: Building2, img: IMAGE_MAP.SERVICE_8_HOUSE, desc: "Comprehensive exterior washing from soft-wash to high-pressure." },
    { id: 9, title: "Light Fixture Cleaning", icon: Zap, img: IMAGE_MAP.SERVICE_9_LIGHT, desc: "Detail-oriented hand cleaning for luxury estate chandeliers and fixtures." },
    { id: 10, title: "Mirror Cleaning", icon: Star, img: IMAGE_MAP.SERVICE_10_MIRROR, desc: "Streak-free polishing for gym mirrors and custom residential glass." },
    { id: 11, title: "Soft Washing & Roof Washing", icon: Droplets, img: IMAGE_MAP.SERVICE_11_ROOF, desc: "Safe, low-pressure chemical cleaning for roof algae and moss." },
    { id: 12, title: "Fogging Service", icon: Wind, img: IMAGE_MAP.SERVICE_12_FOGGING, desc: "Industrial sanitization fogging for complete interior environment purification." }
  ], []);

  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-[#CC0000] selection:text-white overflow-x-hidden min-h-screen">
      {/* SCROLL PROGRESS INDICATOR */}
      <div className="fixed top-0 left-0 h-1 bg-[#CC0000] z-[100] transition-all duration-300" style={{ width: `${scrollProgress}%` }}></div>
      
      <FloatingSocials links={socialLinks} />

      {/* FIXED NAVIGATION */}
      <header className="bg-white/95 backdrop-blur-xl border-b border-slate-100 fixed top-0 left-0 right-0 z-[60] shadow-sm transition-all duration-300">
        <div className="max-w-[1600px] mx-auto px-10 py-4 flex justify-between items-center">
          {/* LOGO CONTAINER: Set to top-[68%] to ensure it sits perfectly balanced over the header background */}
          <div className="relative w-48 h-16 flex items-center">
             <img 
               src={`/images/${IMAGE_MAP.LOGO}`} 
               alt="AWC Logo" 
               className="h-44 w-auto cursor-pointer transition-transform hover:scale-110 active:scale-95 absolute left-0 top-[68%] -translate-y-1/2" 
               onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
               onError={(e) => { e.currentTarget.style.display = 'none'; }} 
             />
          </div>

          <div className="hidden xl:flex items-center space-x-12">
            <nav className="flex space-x-12 text-[11px] uppercase font-bold tracking-[0.3em] text-slate-400">
              {['Services', 'Heritage', 'About', 'Areas', 'Payments'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-[#CC0000] transition-colors relative group">
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#CC0000] group-hover:w-full transition-all"></span>
                </a>
              ))}
            </nav>
            <div className="h-10 w-px bg-slate-100"></div>
            <div className="flex flex-col items-end leading-none group cursor-pointer" onClick={() => window.location.href=`tel:${phoneLiteral.replace(/\D/g,'')}`}>
              <span className="text-[9px] uppercase tracking-[0.3em] text-[#CC0000] font-black mb-1 group-hover:translate-x-1 transition-transform">Direct Line</span>
              <span className="text-2xl font-heading font-black text-slate-900 group-hover:text-[#CC0000] transition-colors tracking-tighter">
                {phoneLiteral}
              </span>
            </div>
          </div>
          <button className="xl:hidden p-2 hover:bg-slate-50 rounded-full" onClick={() => setIsMenuOpen(true)}>
            <Menu size={32} />
          </button>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="pt-28">
        
        {/* HERO SECTION - REFINED COMPACT BRANDING & CENTERED ARCHITECTURE */}
        <section className="relative min-h-[65vh] flex items-center bg-slate-950 overflow-hidden px-12 group">
          <div className="absolute inset-0 z-0">
            <img 
              src={`/images/${IMAGE_MAP.HERO_MAIN}`} 
              alt="AWC Excellence" 
              className="w-full h-full object-cover opacity-80 transition-transform duration-1000 group-hover:scale-105"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <div className="absolute inset-0 bg-slate-950/30"></div>
          </div>

          <div className="relative z-20 max-w-7xl mx-auto w-full py-8 text-center reveal">
            {/* HERO LOGO: Resized (h-64) and moved up slightly for better section fit */}
            <div className="mb-6 flex flex-col items-center">
               <img 
                 src={`/images/${IMAGE_MAP.LOGO}`} 
                 alt="" 
                 className="h-64 w-auto mb-6 drop-shadow-[0_25px_60px_rgba(0,0,0,0.6)] animate-in fade-in slide-in-from-bottom-4 duration-1000" 
               />
               <div className="flex items-center space-x-8 mb-6">
                <div className="h-0.5 w-12 bg-[#CC0000]"></div>
                <span className="text-xs font-black uppercase tracking-[0.4em] text-white bg-[#CC0000] px-5 py-1.5 rounded-sm shadow-2xl">Established 1946</span>
                <div className="h-0.5 w-12 bg-[#CC0000]"></div>
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading leading-[1.2] text-white mb-6 tracking-tight uppercase drop-shadow-xl max-w-5xl mx-auto">
              Where quality cleaning <br /> 
              meets <span className="text-[#CC0000]">family values</span>
            </h1>
            
            <div className="flex flex-col items-center space-y-8">
               <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed max-w-3xl italic font-sans mx-auto">
                 Three generations of mastery in glass clarity and professional ventilation systems.
               </p>
               <div className="h-10 w-px bg-[#CC0000]"></div>
               <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-white/60 text-[9px] uppercase font-black tracking-[0.3em]">
                  <div className="flex items-center space-x-3"><CheckCircle2 size={14} className="text-[#CC0000]" /> <span>Residential</span></div>
                  <div className="flex items-center space-x-3"><CheckCircle2 size={14} className="text-[#CC0000]" /> <span>Commercial</span></div>
                  <div className="flex items-center space-x-3"><CheckCircle2 size={14} className="text-[#CC0000]" /> <span>Industrial</span></div>
               </div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="py-32 px-12 bg-white relative border-y border-slate-100">
          <div className="max-w-[1500px] mx-auto">
            <div className="mb-24 border-b border-slate-100 pb-16 flex flex-col md:flex-row md:items-start justify-between gap-10 reveal">
              <div className="text-left max-w-4xl">
                <h2 className="text-4xl md:text-6xl font-heading text-[#CC0000] tracking-tighter leading-none uppercase mb-6">Services</h2>
                <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed font-sans border-l-2 border-slate-100 pl-8 italic">
                   AWC proudly offers a wide range of professional services. From expert window and air duct cleaning to pressure washing and dryer vent maintenance, we're committed to enhancing the quality of your environment.
                </p>
              </div>
              <Award size={48} strokeWidth={1} className="text-[#CC0000] hidden md:block" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {services.map((s, idx) => (
                <div 
                  key={s.id} 
                  onClick={() => setSelectedService(s)} 
                  className="group relative bg-white cursor-pointer overflow-visible transition-all duration-700 reveal"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="relative aspect-[2/3] overflow-hidden shadow-xl rounded-sm">
                    <img 
                      src={`/images/${s.img}`} 
                      alt={s.title} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                      onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800'; }} 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-6 right-6 text-white/30 font-heading font-black text-2xl select-none">
                       {String(s.id).padStart(2, '0')}
                    </div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-left translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
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

        {/* HERITAGE SECTION */}
        <section id="heritage" className="py-40 px-6 md:px-12 bg-[#FAFAFA] overflow-hidden relative border-b border-slate-100">
          <div className="max-w-[1400px] mx-auto relative z-10">
             <div className="flex flex-col lg:flex-row gap-16 items-center reveal">
               <div className="w-full lg:w-1/2">
                  <div className="relative group">
                     <div className="absolute -inset-6 border-[12px] border-white -z-10 rotate-[-1deg] shadow-sm"></div>
                     <img 
                      src={`/images/${IMAGE_MAP.FAMILY}`} 
                      className="relative z-10 w-full h-auto object-cover shadow-2xl border border-slate-200 grayscale-0 transition-all duration-1000" 
                      alt="The Frediani Family" 
                      onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800'; }}
                     />
                  </div>
                  <div className="mt-8 bg-slate-950 text-white p-10 shadow-2xl border-l-[12px] border-[#CC0000]">
                    <LucideHistory size={40} className="text-[#CC0000] mb-6" />
                    <p className="text-2xl font-heading italic leading-tight text-white mb-6">"Established in 1946 by Frank Frediani"</p>
                    <p className="text-[10px] uppercase font-bold tracking-[0.4em] text-slate-500">Three Generations of Excellence</p>
                  </div>
               </div>
               <div className="w-full lg:w-1/2 lg:pl-10">
                 <h2 className="text-4xl md:text-6xl font-heading text-[#CC0000] tracking-tighter leading-none uppercase mb-12 opacity-90 reveal">
                   Heritage
                 </h2>
                 <div className="space-y-10 text-slate-600 text-lg md:text-xl leading-relaxed font-light font-sans reveal">
                   <p className="relative">
                     <span className="text-6xl md:text-8xl font-black text-[#CC0000] float-left mr-6 leading-[0.7] mt-3 select-none">F</span>
                     or three generations, dating back to 1946, <strong>AWC Air Duct & Window Cleaning</strong> has proudly served the Bay Area with exceptional care and quality. 
                     It all began with the vision of founder <strong>Frank Frediani</strong>, continued by his son <strong>Ron</strong>, who transitioned from a role in San Francisco's Window Cleaners Union to help lead AWC. 
                     Today, Ron and his wife Carol, along with their son Joe, own and operate AWC. Our highly skilled team is committed to delivering top-quality service safely and efficiently. 
                     As a family-owned business, we prioritize exceptional customer service, guaranteeing punctuality, tidiness, and a consistently courteous approach.
                   </p>
                 </div>
               </div>
             </div>
          </div>
        </section>

        {/* MASTERY SECTION */}
        <section className="py-40 px-6 md:px-12 bg-slate-950 text-white overflow-hidden relative">
           <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="reveal">
                 <div className="w-12 h-1.5 bg-[#CC0000] mb-10"></div>
                 <h2 className="text-4xl md:text-6xl font-heading tracking-tighter leading-[1.1] mb-12 uppercase italic">
                   Mastery <br/> <span className="text-[#CC0000]">Revealed</span>
                 </h2>
                 <p className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed italic font-heading border-l-[12px] border-[#CC0000]/40 pl-10 mb-16">
                   "Our service shines through. Meticulous attention to detail ensures your property's glass and ventilation meet the highest standard of clarity"
                 </p>
                 <button className="group flex items-center space-x-8 text-white font-black uppercase tracking-[0.4em] text-[10px] py-4 px-8 border border-white/10 hover:bg-[#CC0000] hover:border-[#CC0000] transition-all">
                    <span>Performance Archive</span>
                    <ArrowRight size={16} className="group-hover:translate-x-3 transition-transform" />
                 </button>
              </div>
              <div className="relative group reveal">
                 <img 
                   src={`/images/${IMAGE_MAP.BEFORE_AFTER}`} 
                   className="w-full h-auto shadow-[0_30px_80px_-15px_rgba(0,0,0,0.8)] border border-white/5 rounded-sm relative z-10" 
                   alt="Mastery Proof"
                   onError={(e) => { e.currentTarget.style.display = 'none'; }} 
                 />
                 <div className="absolute -bottom-8 -left-8 bg-white text-slate-900 px-10 py-6 shadow-2xl flex items-center space-x-6 z-20">
                    <div className="p-3 bg-slate-950 text-[#CC0000] rounded-full"><Maximize2 size={24} /></div>
                    <span className="text-sm font-black uppercase tracking-[0.3em]">Proven Clarity</span>
                 </div>
              </div>
           </div>
        </section>

        {/* AUTHORITY SECTION */}
        <section id="about" className="py-40 px-6 md:px-12 bg-white relative overflow-hidden">
           <div className="max-w-[1400px] mx-auto">
              <div className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                 <div className="space-y-12 reveal">
                    <h3 className="text-4xl lg:text-6xl font-heading text-[#CC0000] tracking-tighter uppercase leading-none">Authority</h3>
                    <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-light font-sans max-w-lg">
                       We are proud to be active participants in the <strong>International Window Cleaning Association</strong>. Our crew holds full certifications in OSHA protocols.
                    </p>
                    <div className="grid grid-cols-1 gap-5">
                       {[
                         { icon: ShieldCheck, title: "Liability & Workers' Comp", desc: "Full Comprehensive Protection" },
                         { icon: Award, title: "Aerial Platform Certified", desc: "Specialized High-Reach Systems" }
                       ].map((item, i) => (
                         <div key={i} className="flex items-center space-x-8 p-8 bg-slate-50 border border-slate-100 rounded-sm hover:border-[#CC0000] transition-all group/card">
                            <item.icon className="text-[#CC0000] group-hover/card:scale-110 transition-transform" size={32} />
                            <div>
                               <p className="text-base font-black text-slate-900 uppercase tracking-tight leading-none mb-1">{item.title}</p>
                               <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400">{item.desc}</p>
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>
                 <div className="space-y-10 reveal">
                    <div className="relative">
                       <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-[#CC0000] -translate-y-2 translate-x-2"></div>
                       <img 
                         src={`/images/${IMAGE_MAP.TEAM}`} 
                         className="w-full h-auto shadow-2xl rounded-sm relative z-10 border border-slate-50" 
                         alt="AWC Authority"
                         onError={(e) => { e.currentTarget.style.display = 'none'; }} 
                       />
                    </div>
                    <div className="bg-slate-50 p-10 border-l-[10px] border-[#CC0000] shadow-sm">
                       <h4 className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-400 mb-4 italic">Leadership Profile</h4>
                       <p className="text-xl font-heading italic text-slate-900 leading-snug">
                         "Ron Frediani serves on the Board of the Millbrae Chamber of Commerce and is a past president of the Millbrae Lions Club"
                       </p>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* SERVICE AREAS SECTION */}
        <section id="areas" className="py-40 px-6 md:px-12 bg-slate-950 text-white overflow-hidden relative border-b border-white/5">
           <div className="max-w-[1400px] mx-auto relative z-10">
              <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-10 reveal">
                 <div className="text-left">
                    <h2 className="text-4xl md:text-6xl font-heading tracking-tighter leading-none uppercase text-white">Service <span className="text-[#CC0000]">Areas</span></h2>
                 </div>
                 <div className="flex items-center space-x-4 text-[#CC0000] mb-4">
                    <MapPin size={24} />
                    <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/40">Dispatch Log</span>
                 </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                 <div className="relative group reveal">
                    {/* FULL COLOR MAP - NO OVERLAYS */}
                    <img 
                      src={`/images/${IMAGE_MAP.SERVICE_AREA_MAP}`} 
                      alt="AWC Service Areas Map" 
                      className="w-full h-auto shadow-2xl border border-white/10 rounded-sm relative z-10" 
                      onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200'; }} 
                    />
                 </div>

                 <div className="grid grid-cols-2 gap-y-4 gap-x-10 reveal">
                    {serviceLocations.map((location) => (
                       <div key={location} className="flex items-center space-x-5 group border-b border-white/5 pb-3 hover:border-[#CC0000] transition-colors">
                          <div className="w-2 h-2 bg-[#CC0000] rounded-full opacity-40 group-hover:opacity-100 transition-all scale-0 group-hover:scale-100 flex-shrink-0"></div>
                          <span className="text-xl md:text-2xl font-heading italic text-white/60 group-hover:text-white transition-colors leading-none tracking-tight">{location}</span>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* PAYMENTS SECTION */}
        <section id="payments" className="py-32 px-12 bg-white relative">
           <div className="max-w-4xl mx-auto bg-slate-900 text-white p-20 md:p-32 text-center relative overflow-hidden shadow-2xl reveal border-t-8 border-[#CC0000]">
             <div className="absolute top-0 left-0 w-full h-2.5 bg-[#CC0000]"></div>
             <CreditCard size={80} className="text-[#CC0000] mx-auto mb-10 opacity-30" />
             <h2 className="text-4xl md:text-6xl font-heading mb-8 tracking-tighter leading-none uppercase italic">Payments</h2>
             <p className="text-white/60 mb-16 text-xl font-light leading-relaxed max-w-xl mx-auto italic font-sans">
               "Providing simplified, secure billing for our residential and commercial partners"
             </p>
             <button className="bg-[#CC0000] text-white px-14 py-7 text-[10px] font-black uppercase tracking-[0.6em] hover:bg-white hover:text-slate-950 transition-all shadow-xl group">
               Secure Portal Access <ChevronRight className="inline-block ml-3 group-hover:translate-x-2 transition-transform" />
             </button>
           </div>
        </section>

        {/* FOOTER */}
        <footer id="contact" className="bg-[#0A0B10] text-white py-20 px-12 border-t border-white/5 relative z-10">
          <div className="max-w-[1500px] mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
            <div className="flex flex-col items-start max-w-sm">
               <img src={`/images/${IMAGE_MAP.LOGO}`} alt="AWC Logo" className="h-14 w-auto brightness-200 grayscale mb-10 opacity-60 hover:opacity-100 transition-opacity" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
               <p className="text-lg font-heading italic text-slate-500 leading-relaxed mb-8">"Clear views and fresh environments since 1946. Three generations of Frediani heritage in the Bay Area."</p>
            </div>
            
            <div className="flex flex-col space-y-10">
               <div className="grid grid-cols-2 gap-x-20 gap-y-5 text-[12px] font-black uppercase tracking-[0.3em] text-white/30">
                  <a href="#services" className="hover:text-[#CC0000] transition-colors">Services</a>
                  <a href="#heritage" className="hover:text-[#CC0000] transition-colors">Heritage</a>
                  <a href="#about" className="hover:text-[#CC0000] transition-colors">Authority</a>
                  <a href="#areas" className="hover:text-[#CC0000] transition-colors">Areas</a>
               </div>
               <div className="h-px w-full bg-white/5"></div>
               <a href={`tel:${phoneLiteral.replace(/\D/g,'')}`} className="text-3xl lg:text-5xl font-heading font-black text-white hover:text-[#CC0000] transition-all tracking-tighter leading-none">{phoneLiteral}</a>
            </div>

            <div className="flex items-center space-x-6">
              {['Licensed', 'Bonded', 'Insured'].map(tag => (
                <div key={tag} className="px-5 py-2 border border-white/5 bg-white/5 text-[9px] font-black uppercase tracking-[0.4em] text-slate-500 cursor-default">
                  {tag}
                </div>
              ))}
            </div>
          </div>
          <div className="max-w-[1500px] mx-auto mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[8px] font-bold uppercase tracking-[1em] text-slate-800">
             <span>© {new Date().getFullYear()} AWC Air Duct & Window Cleaning</span>
             <span className="mt-4 md:mt-0">Peninsula Service Hub</span>
          </div>
        </footer>
      </main>

      {/* SERVICE MODAL */}
      {selectedService && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-8 overflow-hidden">
          <div className="absolute inset-0 bg-slate-950/98 backdrop-blur-2xl" onClick={() => setSelectedService(null)}></div>
          <div className="relative bg-white w-full max-w-7xl max-h-[92vh] overflow-y-auto shadow-2xl rounded-sm animate-in fade-in zoom-in duration-500">
            <button className="absolute top-8 right-8 text-slate-400 hover:text-[#CC0000] z-10 transition-all p-3 hover:scale-110" onClick={() => setSelectedService(null)}><X size={40} strokeWidth={1} /></button>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="bg-slate-950 flex items-center justify-center border-r border-slate-100 min-h-[450px] relative overflow-hidden group/vid">
                 <LucideHistory size={300} className="text-white/5 absolute -right-10 -bottom-10 rotate-12" />
                 <div className="text-[#CC0000] opacity-30 uppercase font-black text-[11px] tracking-[1.2em] group-hover/vid:tracking-[1.5em] transition-all duration-700">AWC TECHNICAL</div>
              </div>
              <div className="p-12 md:p-24 bg-white text-left">
                <div className="flex items-center space-x-10 mb-12">
                  <div className="text-[#CC0000]"><selectedService.icon size={40} strokeWidth={1.5} /></div>
                  <div className="h-px w-16 bg-slate-100"></div>
                  <span className="text-[11px] uppercase tracking-[0.6em] font-black text-slate-300 italic">Profile {selectedService.id}</span>
                </div>
                <h3 className="text-4xl md:text-6xl font-heading font-black mb-8 tracking-tighter text-slate-950 uppercase leading-none">{selectedService.title}</h3>
                <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed mb-16 italic border-l-[16px] border-[#CC0000] pl-10 font-sans">{selectedService.desc}</p>
                <button className="bg-slate-950 text-white w-full py-10 text-[10px] font-black uppercase tracking-[0.6em] hover:bg-[#CC0000] transition-all shadow-xl">Immediate Dispatch</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MOBILE NAV OVERLAY */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-slate-950 z-[200] flex flex-col items-center justify-center p-20 text-center animate-in fade-in duration-300">
          <button className="absolute top-12 right-12 text-white hover:text-[#CC0000] transition-all" onClick={() => setIsMenuOpen(false)}><X size={56} strokeWidth={1} /></button>
          <div className="space-y-8">
            {['Services', 'Heritage', 'About', 'Areas', 'Payments'].map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} className="block text-5xl font-heading italic text-white hover:text-[#CC0000] tracking-tighter transition-all" onClick={() => setIsMenuOpen(false)}>{link}</a>
            ))}
          </div>
          <div className="mt-24 pt-10 border-t border-white/10 w-full max-w-sm">
             <p className="text-[9px] font-black uppercase tracking-[0.4em] text-[#CC0000] mb-5">Dispatch</p>
             <a href={`tel:${phoneLiteral.replace(/\D/g,'')}`} className="text-2xl font-heading font-black text-white">{phoneLiteral}</a>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;700;900&family=Figtree:wght@300;400;700;900&display=swap');
        
        html { 
          scroll-behavior: smooth; 
          scroll-padding-top: 100px; /* Ensures fixed header doesn't overlap section titles on scroll */
        }
        
        .font-sans { font-family: 'Figtree', sans-serif; }
        .font-heading { font-family: 'Archivo', sans-serif; }
        
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