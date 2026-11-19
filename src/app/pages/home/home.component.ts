import { Component, signal, computed, OnInit, OnDestroy, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BRAND_CATEGORIES, BRAND_PRODUCTS, FLASH_DEALS, CategoryItem, ProductItem, FlashDealItem } from '../../data/brandpeoples.data';


export interface HeroSlideMetric {
  label: string;
  value: string;
}

export interface HeroSlide {
  id: number;
  image: string;
  badge: string;
  headlineLine1: string;
  headlineLine2: string;
  headlineHighlight: string;
  description: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  primaryCtaBadge: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  metrics: HeroSlideMetric[];
  tag: string;
  cardTitle: string;
  cardSpec: string;
  gsmBadge: string;
}

export interface FaqItem {
  id: number;
  category: string;
  question: string;
  answer: string;
  bulletPoints?: string[];
}

export interface TrustedBrand {
  name: string;
  symbol: string;
  category: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    image: 'images/bw/hero_unique_identity_brand.jpg',
    badge: 'TIRUPPUR FACTORY HUB • COIMBATORE • CUSTOM APPAREL & MERCH',
    headlineLine1: 'DESIGN YOUR',
    headlineLine2: 'IDENTITY.',
    headlineHighlight: 'WEAR YOUR BRAND.',
    description: "South India's premier custom apparel manufacturer in Tiruppur & Coimbatore, Tamil Nadu. High-density 3D silicone heat transfers, 2400 DPI DTF digital prints, and 240 GSM bio-washed combed cotton. Preview in real-time WebGL 3D before production.",
    primaryCtaText: 'Launch 3D Customizer',
    primaryCtaLink: '/customizer',
    primaryCtaBadge: '360°',
    secondaryCtaText: 'Explore Catalog',
    secondaryCtaLink: '/catalog',
    metrics: [
      { label: 'Cotton Spec', value: '240 GSM Combed' },
      { label: 'Wash Test', value: '50+ Washes' },
      { label: 'Production SLA', value: '24h - 48h' }
    ],
    tag: 'CUSTOM T-SHIRTS • 220 GSM',
    cardTitle: 'Custom T-Shirts',
    cardSpec: 'Oversized, drop-shoulder, crewneck & heavyweight 220 GSM bio-washed tees.',
    gsmBadge: 'Bestseller'
  },
  {
    id: 2,
    image: 'images/bw/hero_unique_2_hoodie.jpg',
    badge: '380 GSM FRENCH TERRY • WINTER DROP',
    headlineLine1: 'HEAVY FLEECE.',
    headlineLine2: 'HOODIES.',
    headlineHighlight: 'BUILT TO LAST.',
    description: '380 GSM French Terry & fleece hoodies with direct thermo-embossed branding, double-layer hood structure, and zero-shrink fleece warmth.',
    primaryCtaText: 'Customize Hoodie',
    primaryCtaLink: '/customizer',
    primaryCtaBadge: '3D LIVE',
    secondaryCtaText: 'Explore Hoodies',
    secondaryCtaLink: '/catalog',
    metrics: [
      { label: 'Fleece Weight', value: '380 GSM' },
      { label: 'Hood Spec', value: 'Double Layer' },
      { label: 'Embossing', value: 'Thermo-Sonic' }
    ],
    tag: 'HOODIES & SWEATSHIRTS',
    cardTitle: 'Hoodies & Sweatshirts',
    cardSpec: '380 GSM French Terry & fleece hoodies with direct thermo-embossed branding.',
    gsmBadge: 'Winter Drop'
  },
  {
    id: 3,
    image: 'images/bw/hero_unique_3_activewear.jpg',
    badge: '4-WAY STRETCH POLY-SPANDEX • ACTIVEWEAR',
    headlineLine1: '300% STRETCH.',
    headlineLine2: 'ACTIVEWEAR.',
    headlineHighlight: 'SILICONE RELIEF.',
    description: '4-way stretch poly-spandex with high-elastic 3D silicone heat transfers designed for elite athletic performance and zero-crack flexibility.',
    primaryCtaText: 'Customize Activewear',
    primaryCtaLink: '/customizer',
    primaryCtaBadge: '360°',
    secondaryCtaText: 'View Sportswear',
    secondaryCtaLink: '/catalog',
    metrics: [
      { label: 'Stretch Rating', value: '300% Elastic' },
      { label: 'Print Type', value: '3D Silicone' },
      { label: 'Moisture', value: 'Quick-Dry' }
    ],
    tag: 'PERFORMANCE SPORTSWEAR',
    cardTitle: 'Performance Sportswear',
    cardSpec: '4-way stretch poly-spandex with high-elastic 3D silicone heat transfers.',
    gsmBadge: '300% Stretch'
  },
  {
    id: 4,
    image: 'images/bw/hero_unique_4_caps.jpg',
    badge: 'STRUCTURED 6-PANEL TRUCKER • HEADWEAR',
    headlineLine1: 'STRUCTURED.',
    headlineLine2: 'CAPS & BEANIES.',
    headlineHighlight: '3D RUBBER BADGES.',
    description: 'Structured 6-panel trucker caps with 3D rubber badges, metallic antique brass buckle, and anti-scratch luxury sweatbands.',
    primaryCtaText: 'Customize Headwear',
    primaryCtaLink: '/customizer',
    primaryCtaBadge: '3D LIVE',
    secondaryCtaText: 'View Caps',
    secondaryCtaLink: '/catalog',
    metrics: [
      { label: 'Crown Structure', value: '6-Panel Rigid' },
      { label: 'Emblem Style', value: '3D Rubber Badge' },
      { label: 'Closure', value: 'Metal Buckle' }
    ],
    tag: 'CAPS & BEANIES',
    cardTitle: 'Caps & Beanies',
    cardSpec: 'Structured 6-panel trucker caps with 3D rubber badges and metallic buckle.',
    gsmBadge: 'Popular'
  },
  {
    id: 5,
    image: 'images/bw/hero_unique_5_dtf.jpg',
    badge: '2400 DPI CMYK+W • COLD-PEEL DTF',
    headlineLine1: 'HOT PEEL.',
    headlineLine2: 'DTF STICKERS.',
    headlineHighlight: 'GANG SHEETS.',
    description: '2400 DPI photographic DTF transfers & high-density silicone labels on sheets. Photographic detail and stretchable wash-proof adhesives.',
    primaryCtaText: 'Upload Gang Sheet',
    primaryCtaLink: '/customizer',
    primaryCtaBadge: 'DTF 2400',
    secondaryCtaText: 'Order DTF Rolls',
    secondaryCtaLink: '/catalog',
    metrics: [
      { label: 'Resolution', value: '2400 DPI' },
      { label: 'Ink Formula', value: 'CMYK + Opaque W' },
      { label: 'Daily Rolls', value: '500+ Meters' }
    ],
    tag: 'CUSTOM HEAT STICKERS & DTF',
    cardTitle: 'Custom Heat Stickers & DTF',
    cardSpec: '2400 DPI photographic DTF transfers & high-density silicone labels on sheets.',
    gsmBadge: 'Hot Peel'
  },
  {
    id: 6,
    image: 'images/bw/hero_unique_6_corporate.jpg',
    badge: 'PREMIUM BRANDED KITS • BULK DISCOUNT',
    headlineLine1: 'CORPORATE.',
    headlineLine2: 'MERCH KITS.',
    headlineHighlight: 'TURNKEY PACKS.',
    description: 'Premium branded tote bags, polos, diaries, and merchandise welcome kits curated for enterprise onboarding, creator merch, and VIP gifting.',
    primaryCtaText: 'Build Custom Kit',
    primaryCtaLink: '/gift-kits',
    primaryCtaBadge: 'PACKS',
    secondaryCtaText: 'View Merch Kits',
    secondaryCtaLink: '/catalog',
    metrics: [
      { label: 'Min Quantity', value: '50 Packs' },
      { label: 'Packaging', value: 'Custom Boxed' },
      { label: 'Bulk Discount', value: 'Up to 35% Off' }
    ],
    tag: 'CORPORATE & MERCH KITS',
    cardTitle: 'Corporate & Merch Kits',
    cardSpec: 'Premium branded tote bags, polos, diaries, and merchandise welcome kits.',
    gsmBadge: 'Bulk Discount'
  }
];

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <!-- ========================================================================= -->
    <!-- 1. FULL-BLEED EDITORIAL HERO BANNER (MATCHING REFERENCE LAYOUT)           -->
    <!-- ========================================================================= -->
    <section class="relative bg-black text-white min-h-[640px] lg:min-h-[760px] flex items-center overflow-hidden border-b border-zinc-900">
      
      <!-- FULL-BLEED HERO BACKGROUND IMAGE (PERFECT FIT WITH ZERO GAP IN BETWEEN) -->
      <div class="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0">
        @for (slide of heroSlides; track slide.id; let idx = $index) {
          <img 
            [src]="slide.image" 
            [alt]="slide.cardTitle"
            [attr.loading]="idx === 0 ? 'eager' : 'lazy'"
            [attr.fetchpriority]="idx === 0 ? 'high' : 'low'"
            decoding="async"
            [class.opacity-100]="activeSlideIndex() === idx"
            [class.animate-image-drift]="activeSlideIndex() === idx"
            [class.opacity-0]="activeSlideIndex() !== idx"
            [class.scale-105]="activeSlideIndex() !== idx"
            class="absolute inset-0 w-full h-full object-cover object-right grayscale contrast-125 brightness-90 transition-opacity duration-1000 ease-out pointer-events-none" />
        }

        <!-- Heavy Dark Scrim on Mobile & Tablet so white fabric/print textures NEVER clash with text -->
        <div class="absolute inset-0 bg-black/80 lg:hidden z-10 pointer-events-none"></div>

        <!-- Seamless Horizontal Gradient Blend on Desktop: Pure Solid Black on Left to Soft Transparent Right -->
        <div class="absolute inset-0 bg-gradient-to-r from-black via-black/80 via-35% to-transparent hidden lg:block z-10 pointer-events-none"></div>

        <!-- Subtle Top & Bottom Gradient Shadows for Perfect Edge Blending -->
        <div class="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black via-black/50 to-transparent z-10 pointer-events-none"></div>
        <div class="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black via-black/70 to-transparent z-10 pointer-events-none"></div>
      </div>

      <!-- Left Column: Editorial Display Typography (Directly on Black Background) -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20 py-16 sm:py-24">
        <div class="max-w-2xl space-y-6">
          
          <!-- Category / Location Top Pill (Animated on slide change) -->
          @for (slide of heroSlides; track slide.id; let idx = $index) {
            @if (activeSlideIndex() === idx) {
              <div class="animate-hero-pill-in inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/95 border border-zinc-700/90 text-zinc-300 text-xs font-mono uppercase tracking-widest shadow-xl">
                <span class="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                <span>3D ON-DEMAND APPAREL STUDIO &bull; {{ slide.tag }}</span>
              </div>
            }
          }

          <!-- Massive Bold Display Headline with Animated Letter & Word Reveal -->
          @for (slide of heroSlides; track slide.id; let idx = $index) {
            @if (activeSlideIndex() === idx) {
              <h1 class="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[1.04] uppercase font-display drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]">
                <span class="block overflow-hidden">
                  <span class="block animate-letter-reveal">{{ slide.headlineLine1 }}</span>
                </span>
                <span class="block overflow-hidden">
                  <span class="block animate-letter-reveal delay-100">{{ slide.headlineLine2 }}</span>
                </span>
                <span class="block overflow-hidden mt-1">
                  <span class="block animate-silver-shimmer animate-letter-reveal delay-200 font-extrabold tracking-tight">
                    {{ slide.headlineHighlight }}
                  </span>
                </span>
              </h1>
            }
          }

          <!-- Subtitle Description (Animated on slide change) -->
          @for (slide of heroSlides; track slide.id; let idx = $index) {
            @if (activeSlideIndex() === idx) {
              <p class="animate-hero-slide-in text-base sm:text-lg text-zinc-300 leading-relaxed max-w-xl font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                {{ slide.description }}
              </p>
            }
          }

          <!-- Action Buttons -->
          <div class="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a routerLink="/customizer" 
               class="btn-shimmer hover-lift-sm px-8 py-4 text-sm font-black text-black bg-white hover:bg-zinc-200 rounded-full shadow-bw transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.45)] flex items-center justify-center gap-3 uppercase tracking-wider active:scale-95 cursor-pointer group">
              <span>Launch 3D Customizer</span>
              <span class="text-xs font-mono px-2 py-0.5 rounded bg-black text-white transition-transform duration-300 group-hover:scale-110">360&deg;</span>
              <span class="transition-transform duration-300 group-hover:translate-x-1.5 font-bold">&rarr;</span>
            </a>

            <a routerLink="/catalog" 
               class="hover-lift-sm px-8 py-4 text-sm font-bold text-zinc-300 hover:text-white bg-zinc-950/90 hover:bg-zinc-900 border border-zinc-800 hover:border-zinc-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] rounded-full transition-all duration-300 flex items-center justify-center gap-2 text-center uppercase tracking-wider active:scale-95 cursor-pointer group">
              <span>Explore Catalog</span>
              <span class="transition-transform duration-300 group-hover:translate-x-1.5 text-zinc-400 group-hover:text-white font-bold">&rarr;</span>
            </a>
          </div>

          <!-- Feature / Spec Pills (Animated on slide change) -->
          @for (slide of heroSlides; track slide.id; let idx = $index) {
            @if (activeSlideIndex() === idx) {
              <div class="pt-4 flex flex-wrap items-center gap-2.5 text-xs font-mono">
                @for (metric of slide.metrics; track metric.label; let mIdx = $index) {
                  <span class="animate-spec-badge-in inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-zinc-300 shadow-md"
                        [style.animation-delay]="(mIdx * 80) + 'ms'">
                    <span class="w-1.5 h-1.5 rounded-full bg-white"></span>
                    <span>{{ metric.label }}: <strong class="text-white">{{ metric.value }}</strong></span>
                  </span>
                }
              </div>
            }
          }

        </div>
      </div>

      <!-- Minimalist 2px Auto-Scroll Progress Line along Bottom Border -->
      <div class="absolute bottom-0 inset-x-0 h-[2px] bg-zinc-900/90 z-20 flex pointer-events-none">
        @for (slide of heroSlides; track slide.id; let idx = $index) {
          <div class="flex-1 h-full bg-zinc-950 overflow-hidden relative border-r border-black/80 last:border-r-0">
            <div class="h-full bg-white transition-all ease-linear"
                 [style.width]="activeSlideIndex() === idx ? '100%' : (activeSlideIndex() > idx ? '100%' : '0%')"
                 [style.transition-duration]="activeSlideIndex() === idx ? '3500ms' : '0ms'">
            </div>
          </div>
        }
      </div>

    </section>

    <!-- ========================================================================= -->
    <!-- 2. CURATED CATEGORIES (PLACED SECOND AS SPECIFIED BY USER)                -->
    <!-- ========================================================================= -->
    <section id="curated-categories" class="py-16 sm:py-24 bg-black text-white border-b border-zinc-900 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div class="scroll-reveal inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono uppercase tracking-widest shadow-md">
            <span class="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
            <span>Apparel Collection &bull; 6 Curated Categories</span>
          </div>
          <div class="overflow-hidden">
            <h2 class="letter-reveal text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase font-display">
              Curated Categories
            </h2>
          </div>
          <p class="scroll-reveal delay-100 text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Precision engineered heavy cottons, active stretch fabrics, and structured headwear.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          @for (cat of categories; track cat.id; let idx = $index) {
            <div [class]="'theme-card-bw rounded-3xl overflow-hidden border border-zinc-800 flex flex-col justify-between group hover-lift transition-all duration-500 hover:border-zinc-400 bg-zinc-950 shadow-2xl relative scroll-reveal stagger-' + ((idx % 3) + 1)">
              
              <!-- Category Image Showcase Banner with Motion Design & Ambient Floating Badges -->
              <div class="image-motion-card relative h-52 sm:h-56 w-full overflow-hidden bg-zinc-900 border-b border-zinc-850">
                <img 
                  [src]="cat.image" 
                  [alt]="cat.name" 
                  loading="lazy"
                  decoding="async"
                  class="w-full h-full object-cover object-[75%_center] grayscale contrast-125 brightness-100 group-hover:scale-110 group-hover:brightness-110 group-hover:grayscale-0 transition-all duration-700 ease-out" />
                
                <!-- Dark Vignette Gradient on Bottom of Image -->
                <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent"></div>

                <!-- Floating Top Left Index Pill with Ambient Float Motion -->
                <span class="animate-ambient-float absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-black/85 backdrop-blur-md text-white font-mono text-xs font-bold border border-zinc-700/80 shadow-md">
                  0{{ idx + 1 }}
                </span>

                <!-- Floating Top Right Badge with Ambient Float Motion -->
                @if (cat.badge) {
                  <span class="animate-ambient-float-slow absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-white text-black font-mono text-xs uppercase font-black tracking-wider shadow-lg">
                    {{ cat.badge }}
                  </span>
                }
              </div>

              <!-- Content Body -->
              <div class="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6 bg-zinc-950">
                
                <div class="space-y-3.5">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-xl shrink-0 group-hover:border-zinc-600 group-hover:scale-105 transition-all duration-300">
                      {{ cat.icon }}
                    </div>
                    <h3 class="text-xl sm:text-2xl font-black text-white group-hover:text-zinc-100 transition-colors uppercase font-display tracking-tight">
                      {{ cat.name }}
                    </h3>
                  </div>

                  <p class="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                    {{ cat.desc }}
                  </p>
                </div>

                <!-- Footer with Count and Dual Action Buttons -->
                <div class="pt-5 border-t border-zinc-800/90 flex flex-wrap items-center justify-between gap-3">
                  <span class="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-zinc-300 font-bold">
                    <span class="w-1.5 h-1.5 rounded-full bg-white"></span>
                    {{ cat.count }}
                  </span>
                  
                  <div class="flex items-center gap-2">
                    <a [routerLink]="['/customize']" 
                       [queryParams]="{ category: cat.id }"
                       class="px-3.5 py-2 rounded-full border border-zinc-700 bg-zinc-900 hover:bg-white hover:text-black text-white text-[11px] font-mono font-bold uppercase transition-all duration-300">
                      3D Studio
                    </a>
                    <a routerLink="/catalog" 
                       class="btn-shimmer hover-lift-sm px-4 py-2 rounded-full bg-white hover:bg-zinc-200 text-black text-xs font-mono font-black uppercase transition-all duration-300 flex items-center gap-1.5 shadow-bw">
                      <span>Explore</span>
                      <span class="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                    </a>
                  </div>
                </div>

              </div>

            </div>
          }
        </div>

      </div>
    </section>

    <!-- ========================================================================= -->
    <!-- 3. HIGH-CONTRAST MONOCHROME METRIC COUNTERS                               -->
    <!-- ========================================================================= -->
    <section class="py-12 bg-black text-white border-b border-zinc-900 font-mono">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          
          <div class="scroll-reveal stagger-1 space-y-1 p-3 rounded-2xl border border-zinc-900 hover:border-zinc-700 transition duration-300">
            <span class="text-3xl sm:text-4xl font-black text-white block tracking-tighter">10+ YEARS</span>
            <span class="text-xs text-zinc-400 uppercase tracking-widest block">Textile Hub Leadership</span>
          </div>

          <div class="scroll-reveal stagger-2 space-y-1 p-3 rounded-2xl border border-zinc-900 hover:border-zinc-700 transition duration-300">
            <span class="text-3xl sm:text-4xl font-black text-white block tracking-tighter">100,000+</span>
            <span class="text-xs text-zinc-400 uppercase tracking-widest block">Pieces Daily Output</span>
          </div>

          <div class="scroll-reveal stagger-3 space-y-1 p-3 rounded-2xl border border-zinc-900 hover:border-zinc-700 transition duration-300">
            <span class="text-3xl sm:text-4xl font-black text-white block tracking-tighter">24 - 48H</span>
            <span class="text-xs text-zinc-400 uppercase tracking-widest block">Rapid Dispatch SLA</span>
          </div>

          <div class="scroll-reveal stagger-4 space-y-1 p-3 rounded-2xl border border-zinc-900 hover:border-zinc-700 transition duration-300">
            <span class="text-3xl sm:text-4xl font-black text-white block tracking-tighter">&Delta;E &lt; 0.5</span>
            <span class="text-xs text-zinc-400 uppercase tracking-widest block">Spectrophotometer Accuracy</span>
          </div>

        </div>
      </div>
    </section>

    <!-- ========================================================================= -->
    <!-- 4. CUSTOM PRINTING & 3D DESIGN STUDIO (FULL-BLEED HERO-STYLE BANNER SLIDER) -->
    <!-- ========================================================================= -->
    <section id="print-design-studio" 
             class="relative bg-black text-white min-h-[640px] lg:min-h-[760px] flex items-center overflow-hidden border-b border-zinc-900">
      
      <!-- FULL-BLEED PRINT SHOWCASE BACKGROUND IMAGE (MATCHING HERO BANNER LAYOUT) -->
      <div class="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0">
        @for (tech of printTechnologies; track tech.id; let idx = $index) {
          <img 
            [src]="tech.image" 
            [alt]="tech.title"
            loading="lazy"
            decoding="async"
            [class.opacity-100]="activePrintTechIndex() === idx"
            [class.animate-image-drift]="activePrintTechIndex() === idx"
            [class.opacity-0]="activePrintTechIndex() !== idx"
            [class.scale-105]="activePrintTechIndex() !== idx"
            class="absolute inset-0 w-full h-full object-cover object-center lg:object-right grayscale contrast-125 brightness-95 transition-opacity duration-1000 ease-out pointer-events-none" />
        }

        <!-- Dark Scrim on Mobile & Tablet so white fabric/print textures NEVER clash with text -->
        <div class="absolute inset-0 bg-black/85 lg:hidden z-10 pointer-events-none"></div>

        <!-- Seamless Horizontal Gradient Blend on Desktop: Pure Solid Black on Left to Soft Transparent Right -->
        <div class="absolute inset-0 bg-gradient-to-r from-black via-black/85 via-40% to-transparent hidden lg:block z-10 pointer-events-none"></div>

        <!-- Subtle Top & Bottom Gradient Shadows for Perfect Edge Blending -->
        <div class="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black via-black/50 to-transparent z-10 pointer-events-none"></div>
        <div class="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black via-black/70 to-transparent z-10 pointer-events-none"></div>
      </div>

      <!-- Left Column: Editorial Display Typography (Directly on Black Background) -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20 pt-16 sm:pt-20 pb-28 sm:pb-36">
        <div class="max-w-2xl space-y-6">
          
          <!-- Category / Studio Top Pill (Animated on slide change) -->
          @for (tech of printTechnologies; track tech.id; let idx = $index) {
            @if (activePrintTechIndex() === idx) {
              <div class="animate-hero-pill-in inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/95 border border-zinc-700/90 text-zinc-300 text-xs font-mono uppercase tracking-widest shadow-xl">
                <span class="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                <span>PRINTING FOR DESIGN &bull; {{ tech.badge }}</span>
              </div>
            }
          }

          <!-- Massive Bold Display Headline with Animated Letter & Word Reveal -->
          @for (tech of printTechnologies; track tech.id; let idx = $index) {
            @if (activePrintTechIndex() === idx) {
              <h2 class="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[1.04] uppercase font-display drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]">
                <span class="block overflow-hidden">
                  <span class="block animate-letter-reveal">{{ tech.headlineLine1 }}</span>
                </span>
                <span class="block overflow-hidden">
                  <span class="block animate-letter-reveal delay-100">{{ tech.headlineLine2 }}</span>
                </span>
                <span class="block overflow-hidden mt-1">
                  <span class="block animate-silver-shimmer animate-letter-reveal delay-200 font-extrabold tracking-tight">
                    {{ tech.headlineHighlight }}
                  </span>
                </span>
              </h2>
            }
          }

          <!-- Subtitle Description (Animated on slide change) -->
          @for (tech of printTechnologies; track tech.id; let idx = $index) {
            @if (activePrintTechIndex() === idx) {
              <p class="animate-hero-slide-in text-base sm:text-lg text-zinc-300 leading-relaxed max-w-xl font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                {{ tech.description }}
              </p>
            }
          }

          <!-- Action Buttons -->
          <div class="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a routerLink="/customizer" 
               class="btn-shimmer hover-lift-sm px-8 py-4 text-sm font-black text-black bg-white hover:bg-zinc-200 rounded-full shadow-bw transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.45)] flex items-center justify-center gap-3 uppercase tracking-wider active:scale-95 cursor-pointer group">
              <span>Launch 3D Customizer</span>
              <span class="text-xs font-mono px-2 py-0.5 rounded bg-black text-white transition-transform duration-300 group-hover:scale-110">360&deg;</span>
              <span class="transition-transform duration-300 group-hover:translate-x-1.5 font-bold">&rarr;</span>
            </a>

            <a routerLink="/catalog" 
               class="hover-lift-sm px-8 py-4 text-sm font-bold text-zinc-300 hover:text-white bg-zinc-950/90 hover:bg-zinc-900 border border-zinc-800 hover:border-zinc-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] rounded-full transition-all duration-300 flex items-center justify-center gap-2 text-center uppercase tracking-wider active:scale-95 cursor-pointer group">
              <span>Explore Garments</span>
              <span class="transition-transform duration-300 group-hover:translate-x-1.5 text-zinc-400 group-hover:text-white font-bold">&rarr;</span>
            </a>
          </div>

          <!-- Live Print Specs Badges (Animated on slide change) -->
          @for (tech of printTechnologies; track tech.id; let idx = $index) {
            @if (activePrintTechIndex() === idx) {
              <div class="pt-2 flex flex-wrap items-center gap-2.5 text-xs font-mono">
                @for (spec of tech.specs; track spec.label; let mIdx = $index) {
                  <span class="animate-spec-badge-in inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-zinc-300 shadow-md"
                        [style.animation-delay]="(mIdx * 80) + 'ms'">
                    <span class="w-1.5 h-1.5 rounded-full bg-white"></span>
                    <span>{{ spec.label }}: <strong class="text-white">{{ spec.value }}</strong></span>
                  </span>
                }
              </div>
            }
          }

        </div>
      </div>

      <!-- Centered Minimalist Indicator Dots Only -->
      <div class="absolute bottom-8 sm:bottom-10 inset-x-0 flex justify-center z-30 pointer-events-auto px-4">
        <div class="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-black/85 border border-zinc-800 shadow-[0_10px_35px_rgba(0,0,0,0.9)] backdrop-blur-md">
          @for (tech of printTechnologies; track tech.id; let idx = $index) {
            <button 
              (click)="onPrintDotClick(idx, $event)"
              type="button"
              [attr.aria-label]="'Switch to ' + tech.label"
              [class.w-6]="activePrintTechIndex() === idx"
              [class.bg-white]="activePrintTechIndex() === idx"
              [class.w-2]="activePrintTechIndex() !== idx"
              [class.bg-zinc-600]="activePrintTechIndex() !== idx"
              class="h-2 rounded-full transition-all duration-300 cursor-pointer hover:bg-zinc-300">
            </button>
          }
        </div>
      </div>

      <!-- Minimalist 2px Auto-Scroll Progress Line along Bottom Border -->
      <div class="absolute bottom-0 inset-x-0 h-[2px] bg-zinc-900/90 z-20 flex pointer-events-none">
        @for (tech of printTechnologies; track tech.id; let idx = $index) {
          <div class="flex-1 h-full bg-zinc-950 overflow-hidden relative border-r border-black/80 last:border-r-0">
            <div class="h-full bg-white transition-all ease-linear"
                 [style.width]="activePrintTechIndex() === idx ? '100%' : (activePrintTechIndex() > idx ? '100%' : '0%')"
                 [style.transition-duration]="activePrintTechIndex() === idx ? '4000ms' : '0ms'">
            </div>
          </div>
        }
      </div>

    </section>

    <!-- ========================================================================= -->
    <!-- 5. CLIENT TRUST & BRAND LOGO BAR ("TRUSTED BY LEADING LABELS")            -->
    <!-- ========================================================================= -->
    <section class="py-14 bg-black text-white border-b border-zinc-900 relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center space-y-3 mb-10">
          <div class="scroll-reveal inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-950 border border-zinc-800 text-zinc-300 text-xs font-mono uppercase tracking-widest shadow-md">
            <span class="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
            <span>Social Proof &bull; 500+ Active Brands</span>
          </div>
          <div class="overflow-hidden">
            <h3 class="letter-reveal text-xs sm:text-sm font-mono uppercase tracking-[0.22em] text-zinc-400 font-bold">
              Trusted by Leading Streetwear Labels &bull; Creator Collectives &bull; Fast-Growth DTC Brands
            </h3>
          </div>
        </div>

        <!-- Monochrome Brand Badges Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6 items-center">
          @for (brand of trustedBrands; track brand.name; let bIdx = $index) {
            <div [class]="'p-4 rounded-2xl bg-zinc-950/80 border border-zinc-850 hover:border-zinc-500 hover:bg-zinc-900/90 transition-all duration-300 flex flex-col items-center justify-center text-center group cursor-default shadow-md hover-lift-sm scroll-reveal stagger-' + ((bIdx % 6) + 1)">
              <span class="text-lg sm:text-xl font-black text-zinc-400 group-hover:text-white transition-colors uppercase font-display tracking-wider">
                {{ brand.symbol }}
              </span>
              <span class="text-[10px] sm:text-[11px] font-mono tracking-widest text-zinc-300 group-hover:text-zinc-200 uppercase font-bold mt-1.5 truncate max-w-full">
                {{ brand.name }}
              </span>
              <span class="text-[9px] font-mono text-zinc-500 uppercase mt-0.5">
                {{ brand.category }}
              </span>
            </div>
          }
        </div>

      </div>
    </section>

    <!-- ========================================================================= -->
    <!-- 6. FREQUENTLY ASKED QUESTIONS ACCORDION (PRODUCTION, MOQ, SLA & DURABILITY) -->
    <!-- ========================================================================= -->
    <section id="faq-section" class="py-20 sm:py-28 bg-zinc-950 text-white border-b border-zinc-900 relative">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <!-- Section Header -->
        <div class="text-center space-y-4">
          <div class="scroll-reveal inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black border border-zinc-800 text-zinc-300 text-xs font-mono uppercase tracking-widest shadow-xl">
            <span class="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
            <span>Knowledge Base &bull; Production Standards</span>
          </div>

          <div class="overflow-hidden">
            <h2 class="letter-reveal text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase font-display">
              Everything You Need To Know. <br />
              <span class="inline-block animate-silver-shimmer font-extrabold mt-1">Before You Print.</span>
            </h2>
          </div>

          <p class="scroll-reveal delay-100 text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Essential specifications covering zero minimum orders, fast turnaround dispatch, 50+ wash durability, and vector file upload guidelines.
          </p>
        </div>

        <!-- FAQ Accordion List -->
        <div class="space-y-4">
          @for (faq of faqs; track faq.id; let idx = $index) {
            <div class="rounded-2xl border border-zinc-850 bg-black/90 overflow-hidden transition-all duration-300 hover:border-zinc-700 shadow-xl">
              
              <!-- Accordion Header Button -->
              <button 
                (click)="toggleFaq(idx)"
                type="button"
                [attr.aria-expanded]="openFaqIndex() === idx"
                class="w-full px-6 py-5 sm:py-6 text-left flex items-center justify-between gap-4 cursor-pointer group">
                
                <div class="flex items-center gap-3 sm:gap-4 min-w-0">
                  <span class="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-[10px] font-mono font-bold text-zinc-300 uppercase shrink-0">
                    {{ faq.category }}
                  </span>
                  <h3 class="text-sm sm:text-base font-bold text-white group-hover:text-zinc-200 transition-colors tracking-tight">
                    {{ faq.question }}
                  </h3>
                </div>

                <!-- Animated Plus / Minus Toggle Indicator -->
                <div class="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:border-zinc-500 transition-all shrink-0">
                  <span class="text-base font-mono font-bold transition-transform duration-300" [class.rotate-45]="openFaqIndex() === idx">
                    +
                  </span>
                </div>

              </button>

              <!-- Accordion Collapsible Body -->
              @if (openFaqIndex() === idx) {
                <div class="px-6 pb-6 pt-1 text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans border-t border-zinc-900/80 animate-hero-slide-in">
                  <p class="mb-3">{{ faq.answer }}</p>
                  
                  @if (faq.bulletPoints && faq.bulletPoints.length > 0) {
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-zinc-900/60 font-mono text-[11px] text-zinc-400">
                      @for (bullet of faq.bulletPoints; track bullet) {
                        <div class="flex items-center gap-2">
                          <span class="w-1.5 h-1.5 rounded-full bg-white"></span>
                          <span>{{ bullet }}</span>
                        </div>
                      }
                    </div>
                  }
                </div>
              }

            </div>
          }
        </div>

        <!-- Technical Assistance Support Box at bottom of FAQ -->
        <div class="p-6 sm:p-8 rounded-3xl bg-zinc-950 border border-zinc-850 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div class="space-y-1 text-center sm:text-left">
            <h4 class="text-base font-bold text-white uppercase tracking-tight">
              Have specific manufacturing or artwork questions?
            </h4>
            <p class="text-xs text-zinc-400">
              Our pre-press production engineers review artworks, PMS colors, and fabric drape daily.
            </p>
          </div>

          <div class="flex items-center gap-3 shrink-0">
            <a href="https://wa.me/919629986444?text=Hi%20Brand%20Peoples,%20I%20have%20a%20technical%20question%20about%20printing%20and%20MOQ." 
               target="_blank" 
               rel="noopener noreferrer"
               class="hover-lift-sm px-5 py-2.5 rounded-full bg-white hover:bg-zinc-200 text-black text-xs font-mono font-black uppercase transition-all duration-300 flex items-center gap-2 shadow-bw">
              <span>WhatsApp Engineer</span>
              <span class="btn-arrow">&rarr;</span>
            </a>
            <a href="tel:9629986444" 
               class="hover-lift-sm px-5 py-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 text-xs font-mono font-bold uppercase border border-zinc-800 transition-all">
              +91 96299 86444
            </a>
          </div>
        </div>

      </div>
    </section>
  `
})
export class HomeComponent implements OnInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);

  categories: CategoryItem[] = BRAND_CATEGORIES;
  flashDeals: FlashDealItem[] = FLASH_DEALS;

  // Interactive Custom Print & 3D Design Technologies
  activePrintTechIndex = signal<number>(0);
  printTechnologies = [
    {
      id: 'dtf',
      label: 'DTF Graphic Prints',
      badge: '2400 DPI CMYK+W',
      headlineLine1: 'PHOTOGRAPHIC.',
      headlineLine2: 'DTF PRINTS.',
      headlineHighlight: '2400 DPI CMYK+W.',
      title: 'Photographic Direct-to-Film Digital Prints',
      description: 'Ultra-vibrant, stretchable digital heat transfers supporting photorealistic gradients, chrome typography, and micro-details on combed cotton.',
      image: 'images/print/print_dtf_streetwear.jpg',
      specs: [
        { label: 'Resolution', value: '2400 x 2400 DPI' },
        { label: 'Fabric Fit', value: '100% Bio-Washed Cotton' },
        { label: 'Stretch Rating', value: 'Zero Cracking' },
        { label: 'Min Order', value: 'No Minimum (1 Pc)' }
      ]
    },
    {
      id: 'silicone',
      label: '3D Silicone Relief',
      badge: '1.5mm RAISED RELIEF',
      headlineLine1: 'HIGH DENSITY.',
      headlineLine2: '3D SILICONE.',
      headlineHighlight: '1.5MM RAISED RELIEF.',
      title: 'High-Density Dimensional Silicone Transfers',
      description: 'Physical 3D rubber relief with razor-sharp beveled edges and matte-touch textures, engineered for high-end luxury streetwear and emblems.',
      image: 'images/print/print_3d_silicone_macro.jpg',
      specs: [
        { label: 'Relief Height', value: '1.2mm - 1.8mm' },
        { label: 'Texture', value: 'Matte Tactile Silicone' },
        { label: 'Durability', value: '50+ Commercial Washes' },
        { label: 'Shore Hardness', value: '30A Flexible' }
      ]
    },
    {
      id: 'backprint',
      label: 'Oversized Back-Prints',
      badge: 'POSTER SCALE',
      headlineLine1: 'POSTER SCALE.',
      headlineLine2: 'BACK-PRINTS.',
      headlineHighlight: 'ARCHITECTURAL DRAPE.',
      title: 'Full-Panel Architectural Streetwear Back-Prints',
      description: 'Statement poster-scale graphics engineered for heavyweight drop-shoulder tees and 380 GSM fleece hoodies with edge-to-edge drape.',
      image: 'images/print/print_oversized_backprint.jpg',
      specs: [
        { label: 'Print Area', value: 'Up to 16 x 22 Inches' },
        { label: 'Garment Fit', value: 'Heavy French Terry Fleece' },
        { label: 'Print Hand-Feel', value: 'Soft Zero-Hand Feel' },
        { label: 'Color Fastness', value: 'Grade 4.5 ISO' }
      ]
    },
    {
      id: 'gangsheet',
      label: 'DTF Gang Sheets & Decals',
      badge: 'ROLL-TO-ROLL DIGITAL',
      headlineLine1: 'ROLL-TO-ROLL.',
      headlineLine2: 'GANG SHEETS.',
      headlineHighlight: 'RAPID HEAT TRANSFERS.',
      title: 'Custom DTF Gang Sheets & Transfer Rolls',
      description: 'Pack dozens of different brand logos, neck tags, and illustrative decals onto continuous PET transfer rolls with rapid hot-peel adhesion.',
      image: 'images/print/print_dtf_gangsheet.jpg',
      specs: [
        { label: 'Roll Width', value: '60cm Continuous' },
        { label: 'Underbase', value: 'Ultra-Opaque Titanium White' },
        { label: 'Peel Type', value: 'Instant Hot / Cold Peel' },
        { label: 'Turnaround', value: 'Same-Day Dispatch' }
      ]
    }
  ];

  currentPrintTech = computed(() => {
    return this.printTechnologies[this.activePrintTechIndex()] || this.printTechnologies[0];
  });

  private printIntervalId: any = null;

  setPrintTech(id: string): void {
    const idx = this.printTechnologies.findIndex(t => t.id === id);
    if (idx !== -1) {
      this.activePrintTechIndex.set(idx);
    }
  }

  setPrintTechIndex(index: number, event?: Event): void {
    if (event) event.stopPropagation();
    if (index >= 0 && index < this.printTechnologies.length) {
      this.activePrintTechIndex.set(index);
      this.startPrintAutoScroll();
    }
  }

  isPrintAutoScrollStopped = signal<boolean>(false);

  onPrintDotClick(index: number, event?: Event): void {
    if (event) event.stopPropagation();
    if (index >= 0 && index < this.printTechnologies.length) {
      this.activePrintTechIndex.set(index);
      // Only stop when user explicitly clicks a dot ("i click the clusor only stoip page oither vise move")
      this.stopPrintAutoScroll();
      this.isPrintAutoScrollStopped.set(true);
    }
  }

  nextPrintTech(event?: Event): void {
    if (event) event.stopPropagation();
    this.activePrintTechIndex.update(idx => (idx + 1) % this.printTechnologies.length);
  }

  prevPrintTech(event?: Event): void {
    if (event) event.stopPropagation();
    this.activePrintTechIndex.update(idx => (idx - 1 + this.printTechnologies.length) % this.printTechnologies.length);
  }

  startPrintAutoScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.stopPrintAutoScroll();
      this.printIntervalId = setInterval(() => {
        this.nextPrintTech();
      }, 4000);
    }
  }

  stopPrintAutoScroll(): void {
    if (this.printIntervalId) {
      clearInterval(this.printIntervalId);
      this.printIntervalId = null;
    }
  }

  // Auto-scrolling Hero Banner State
  heroSlides: HeroSlide[] = HERO_SLIDES;
  activeSlideIndex = signal<number>(0);
  currentSlide = computed(() => this.heroSlides[this.activeSlideIndex()]);
  isPaused = signal<boolean>(false);

  private slideIntervalId: any = null;

  ngOnInit(): void {
    this.startAutoScroll();
    this.startPrintAutoScroll();
  }

  ngOnDestroy(): void {
    this.stopAutoScroll();
    this.stopPrintAutoScroll();
  }

  private startAutoScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.stopAutoScroll();
      this.slideIntervalId = setInterval(() => {
        this.nextSlide();
      }, 3500);
    }
  }

  private stopAutoScroll(): void {
    if (this.slideIntervalId) {
      clearInterval(this.slideIntervalId);
      this.slideIntervalId = null;
    }
  }

  nextSlide(event?: Event): void {
    if (event) event.stopPropagation();
    this.activeSlideIndex.update(idx => (idx + 1) % this.heroSlides.length);
  }

  prevSlide(event?: Event): void {
    if (event) event.stopPropagation();
    this.activeSlideIndex.update(idx => (idx - 1 + this.heroSlides.length) % this.heroSlides.length);
  }

  goToSlide(index: number, event?: Event): void {
    if (event) event.stopPropagation();
    if (index >= 0 && index < this.heroSlides.length) {
      this.activeSlideIndex.set(index);
      // Restart interval so slide stays for full duration
      this.startAutoScroll();
    }
  }

  pauseAutoScroll(): void {
    this.isPaused.set(true);
  }

  resumeAutoScroll(): void {
    this.isPaused.set(false);
  }

  // Client Trust & Leading Brands Data
  trustedBrands: TrustedBrand[] = [
    { name: 'ORIGIN SUPPLY', symbol: '◈ OS', category: 'Streetwear' },
    { name: 'KINETIC LABS', symbol: '▲ KNT', category: 'Activewear' },
    { name: 'VALENCE ARCHIVE', symbol: '⬡ VLN', category: 'High-End DTC' },
    { name: 'DISTORTION', symbol: '✦ DST', category: 'Creator Merch' },
    { name: 'NEO-TOKYO', symbol: '◼ NTK', category: 'Graphic Tees' },
    { name: 'SYSTEMATIC', symbol: '● SYS', category: 'Heavy Fleece' },
    { name: 'OVERSIZE CO.', symbol: '▼ OVR', category: 'Oversized Fit' },
    { name: 'CHROMA SOUNDS', symbol: '◆ CHR', category: 'Music & Tour' }
  ];

  // Frequently Asked Questions (FAQ) Accordion State & Data
  openFaqIndex = signal<number | null>(0);

  toggleFaq(index: number): void {
    if (this.openFaqIndex() === index) {
      this.openFaqIndex.set(null);
    } else {
      this.openFaqIndex.set(index);
    }
  }

  faqs: FaqItem[] = [
    {
      id: 1,
      category: 'MOQ & ORDERING',
      question: 'What is the Minimum Order Quantity (MOQ) for custom printing and blank apparel?',
      answer: 'Zero minimum order! We support 1 Pc on-demand prototypes via our WebGL 3D Studio, so you can test fit, print alignment, and fabric drape before scaling. For bulk production drops (50+ to 10,000+ units), we provide tiered enterprise wholesale discounts up to 35% off with dedicated account management.',
      bulletPoints: ['No MOQ on custom garments (1 Pc prototype)', 'Tiered wholesale discounts from 50+ units', 'Sample cost credited towards bulk orders', 'Pantone spot color matching included']
    },
    {
      id: 2,
      category: 'DISPATCH & SLA',
      question: 'What are your production turnaround times and dispatch speeds?',
      answer: 'For on-demand custom sampling and DTF roll gang sheets, dispatch occurs within 24 to 48 hours. Batch orders (50 to 500 units) ship within 3 to 5 business days. We provide end-to-end tracked courier dispatch with express air shipping across India and international logistics partners worldwide.',
      bulletPoints: ['24h - 48h for samples & DTF rolls', '3 - 5 business days for batch production', 'Express air shipping across India', 'Real-time order tracking notifications']
    },
    {
      id: 3,
      category: 'WASH DURABILITY',
      question: 'How durable are the prints? Will they peel, fade, or crack after washing?',
      answer: 'All direct-to-film (DTF) transfers and 3D silicone relief prints are laboratory tested for 50+ commercial wash cycles. Formulated with flexible elastomeric polymers, our prints achieve Grade 4.5 ISO color fastness, zero cracking on stretched fabrics, and carry OEKO-TEX Standard 100 eco-certification.',
      bulletPoints: ['Tested for 50+ commercial washes', 'Grade 4.5 ISO color fastness', 'Zero cracking on stretch fabrics', 'OEKO-TEX Standard 100 certified']
    },
    {
      id: 4,
      category: 'FILE SPECIFICATIONS',
      question: 'What design file formats and resolutions should I upload?',
      answer: 'We accept vector formats (SVG, AI, EPS, PDF with converted outlines) as well as high-resolution raster files (PNG, TIFF) with transparent backgrounds at 300 to 2400 DPI. Our pre-press color engine natively maps Pantone PMS spot colors and handles automatic white underbase ink compensation.',
      bulletPoints: ['Vector files: SVG, AI, EPS, PDF (converted outlines)', 'Raster files: Transparent PNG, TIFF (300+ DPI)', 'Automatic titanium white underbase generation', 'Pantone PMS spot color verification']
    },
    {
      id: 5,
      category: '3D PREVIEW ACCURACY',
      question: 'How accurately does the WebGL 3D customizer reflect the physical garment?',
      answer: 'Our 3D engine is calibrated against actual factory blanks with photorealistic PBR (Physically-Based Rendering) roughness textures, authentic GSM weight drape, and precise printable dimension bounding boxes. What you inspect in 3D aligns 1:1 with real physical screen and heat-press placements.',
      bulletPoints: ['1:1 dimensional print bounding boxes', 'Calibrated PBR fabric roughness & drape', 'Real-time 360° rotation & zoom inspection', 'Front, back, sleeve & tag placement projection']
    },
    {
      id: 6,
      category: 'TIRUPPUR FACTORY & REGIONAL DISPATCH',
      question: 'Where is your factory located, and do you deliver across Tiruppur, Coimbatore, and Tamil Nadu?',
      answer: 'Our 40,000 sq. ft integrated apparel manufacturing facility and design studio are headquartered in Anupparpalayam Pudur, Tiruppur, Tamil Nadu. We supply high-density 3D silicone prints, custom oversized t-shirts, DTF gang sheets, and corporate welcome packages across Coimbatore, Chennai, Madurai, and all across Tamil Nadu with same-day sample courier and express freight. Direct studio visits and live fabric audits are welcome.',
      bulletPoints: ['Direct factory manufacturing in Tiruppur textile hub', 'Rapid 24-hour courier delivery to Coimbatore & Tamil Nadu', 'Zero brokers: 100% factory-direct wholesale pricing', 'Physical studio visits & live fabric inspections welcome']
    }
  ];
}
