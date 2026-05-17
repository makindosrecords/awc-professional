import React from 'react';
import { Fan, Building2, Waves, Droplets, Wind, Sun, Layout as LucideLayout, Zap, Star } from 'lucide-react';

export const SocialSVG = {
  Instagram: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>,
  Facebook: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>,
  TikTok: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>,
  X: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 4.596 9.457 12.517h-7.405l-5.799-7.581-6.634 7.581H.539l8.6-9.829L0 1.153h7.594l5.233 6.918 6.074-6.918zm-1.29 14.908h2.039L6.448 3.208H4.26L17.611 16.06z"/></svg>,
  Yelp: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.2 14.6l-.3 4.1c-.1 1.5.8 2.8 2.2 3s2.8-.8 3-2.2l.1-.9c.1-.7-.1-1.3-.5-1.9l-2-2.1c-.8-.7-1.9-.7-2.5 0zm-4-1.3l-3.3 2.5c-1.2.9-1.5 2.5-.6 3.7.9 1.2 2.5 1.5 3.7.6l.8-.6c.6-.4.9-1 .9-1.7l.1-2.9c.1-1.1-.7-1.9-1.6-1.6zM11.1 9.4l.2-4.1c.1-1.5-.8-2.8-2.2-3s-2.8.8-3 2.2l-.1.9c-.1.7.1 1.3.5 1.9l2 2.1c.8.7 1.9.7 2.5 0zm10.2 4.1l-4.1-.2c-1.5-.1-2.8.8-3 2.2s.8 2.8 2.2 3l.9.1c.7.1 1.3-.1 1.9-.5l2.1-2c.7-.8.7-1.9 0-2.5zM15.3 7.8l3.3-2.5c1.2-.9 1.5-2.5.6-3.7-.9-1.2-2.5-1.5-3.7-.6l-.8.6c-.6.4-.9 1-.9 1.7l-.1 2.9c0 1 .8 1.9 1.6 1.6z"/></svg>,
  Nextdoor: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.5 2h-13A2.5 2.5 0 003 4.5v15A2.5 2.5 0 005.5 22h13a2.5 2.5 0 002.5-2.5v-15A2.5 2.5 0 0018.5 2zm-1.8 14.2l-2.6-1.5v-3.4l2.6 1.5v3.4zm-4.7 2.8l-2.6-1.5V9.4l2.6 1.5v8.1zm-4.7-2.8l-2.6-1.5V11l2.6 1.5v3.7z"/></svg>
};

export const IMAGE_MAP = {
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

export const phoneLiteral = "(650) 583-0420";

export const socialLinks = {
  instagram: "https://www.instagram.com/airductandwindowcleaning/",
  facebook: "https://www.facebook.com/bayareaawindowcleaning",
  tiktok: "https://www.tiktok.com/@bayareawindowcleaning",
  x: "https://x.com/SFductcleaner",
  yelp: "https://www.yelp.com/biz/awc-air-duct-and-window-cleaning-millbrae",
  nextdoor: "https://nextdoor.com/page/awc-air-duct-window-cleaning-millbrae-ca"
};

export const services = [
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
];

export const serviceLocations = [
  "Atherton", "Belmont", "Brisbane", "Burlingame", "Colma", "Daly City",
  "El Granada", "Foster City", "Half Moon Bay", "Hillsborough", "Los Altos Hills",
  "Menlo Park", "Millbrae", "Montara", "Moss Beach", "Pacifica", "Palo Alto",
  "Redwood City", "San Bruno", "San Carlos", "San Francisco", "San Mateo",
  "South San Francisco", "Stanford", "Sunnyvale", "Woodside"
];

export const testimonials = [
  { name: "S. Miller", location: "Hillsborough", text: "AWC has been cleaning our windows for years. Punctual, professional, and they leave the house spotless.", rating: 5 },
  { name: "J. Thompson", location: "San Mateo", text: "The air duct cleaning made a noticeable difference in my allergy symptoms. Highly recommend the fogging service too.", rating: 5 },
  { name: "L. Chen", location: "Palo Alto", text: "Our solar panels were covered in ash and dust. AWC got them back to peak performance with their water-fed pole system.", rating: 5 }
];