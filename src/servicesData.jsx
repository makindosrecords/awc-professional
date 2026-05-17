import { Fan, Building2, Waves, Droplets, Wind, Sun, Layout as LucideLayout, Zap, Star } from 'lucide-react';
import { IMAGE_MAP } from './constants.jsx';

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