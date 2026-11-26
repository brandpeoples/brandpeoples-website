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
    <!-- 1. FULL-BLEED EDITORIAL HERO BANNER (CLEAN STUDIO LIGHT THEME)            -->
    <!-- ========================================================================= -->
    <section class="relative bg-white text-neutral-900 min-h-[640px] lg:min-h-[760px] flex items-center overflow-hidden border-b border-neutral-200">
      
      <!-- FULL-BLEED HERO BACKGROUND IMAGE WITH CLEAN STUDIO LIGHTING -->
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
            class="absolute inset-0 w-full h-full object-cover object-right contrast-105 brightness-100 drop-shadow-xl transition-opacity duration-1000 ease-out pointer-events-none" />
        }

        <!-- Clean Studio Ambient Lighting -->
        <div class="absolute right-0 top-1/2 -translate-y-1/2 w-[750px] h-[750px] studio-rim-glow pointer-events-none z-10"></div>
        <div class="absolute right-1/4 top-1/3 w-[500px] h-[500px] bg-neutral-100/50 blur-[100px] rounded-full pointer-events-none z-10"></div>

        <!-- Balanced Light Scrim on Mobile & Tablet: Ensures High Contrast without Crushing Textures -->
        <div class="absolute inset-0 bg-white/80 lg:hidden z-10 pointer-events-none"></div>

        <!-- Seamless Studio Ambient Gradient on Desktop: Crisp White on Left to Luminous Garment on Right -->
        <div class="absolute inset-0 bg-gradient-to-r from-white via-white/95 via-42% to-transparent hidden lg:block z-10 pointer-events-none"></div>

        <!-- Soft Top & Bottom Ambient Edge Blends -->
        <div class="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white via-white/50 to-transparent z-10 pointer-events-none"></div>
        <div class="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/70 to-transparent z-10 pointer-events-none"></div>
      </div>

      <!-- Left Column: Editorial Display Typography -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20 py-16 sm:py-24">
        <div class="max-w-2xl space-y-6">
          
          <!-- Category / Location Top Pill (Animated on slide change) -->
          @for (slide of heroSlides; track slide.id; let idx = $index) {
            @if (activeSlideIndex() === idx) {
              <div class="animate-hero-pill-in inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100/90 backdrop-blur-md border border-neutral-200 text-neutral-800 text-xs font-mono uppercase tracking-widest shadow-sm">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>3D ON-DEMAND APPAREL STUDIO &bull; {{ slide.tag }}</span>
              </div>
            }
          }

          <!-- Massive Bold Display Headline with Animated Letter & Word Reveal -->
          @for (slide of heroSlides; track slide.id; let idx = $index) {
            @if (activeSlideIndex() === idx) {
              <h1 class="text-4xl sm:text-6xl lg:text-7xl font-black text-neutral-950 tracking-tighter leading-[1.04] uppercase font-display">
                <span class="block overflow-hidden">
                  <span class="block animate-letter-reveal">{{ slide.headlineLine1 }}</span>
                </span>
                <span class="block overflow-hidden">
                  <span class="block animate-letter-reveal delay-100">{{ slide.headlineLine2 }}</span>
                </span>
                <span class="block overflow-hidden mt-1">
                  <span class="block animate-silver-shimmer animate-letter-reveal delay-200 font-extrabold tracking-tight text-neutral-800">
                    {{ slide.headlineHighlight }}
                  </span>
                </span>
              </h1>
            }
          }

          <!-- Subtitle Description (Animated on slide change) -->
          @for (slide of heroSlides; track slide.id; let idx = $index) {
            @if (activeSlideIndex() === idx) {
              <p class="animate-hero-slide-in text-base sm:text-lg text-neutral-600 leading-relaxed max-w-xl font-normal">
                {{ slide.description }}
              </p>
            }
          }

          <!-- Action Buttons -->
          <div class="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a routerLink="/customizer" 
               class="btn-luxury-primary hover-lift-sm px-8 py-4 text-sm font-black rounded-full flex items-center justify-center gap-3 uppercase tracking-wider cursor-pointer group">
              <span>Launch 3D Customizer</span>
              <span class="text-xs font-mono px-2 py-0.5 rounded bg-white text-black transition-transform duration-300 group-hover:scale-110">360&deg;</span>
              <span class="transition-transform duration-300 group-hover:translate-x-1.5 font-bold">&rarr;</span>
            </a>

            <a routerLink="/catalog" 
               class="btn-luxury-secondary hover-lift-sm px-8 py-4 text-sm font-bold rounded-full flex items-center justify-center gap-2 text-center uppercase tracking-wider cursor-pointer group">
              <span>Explore Catalog</span>
              <span class="transition-transform duration-300 group-hover:translate-x-1.5 text-neutral-500 group-hover:text-black font-bold">&rarr;</span>
            </a>
          </div>

          <!-- Feature / Spec Pills (Animated on slide change) -->
          @for (slide of heroSlides; track slide.id; let idx = $index) {
            @if (activeSlideIndex() === idx) {
              <div class="pt-4 flex flex-wrap items-center gap-2.5 text-xs font-mono">
                @for (metric of slide.metrics; track metric.label; let mIdx = $index) {
                  <span class="animate-spec-badge-in inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-neutral-200 text-neutral-700 shadow-sm"
                        [style.animation-delay]="(mIdx * 80) + 'ms'">
                    <span class="w-1.5 h-1.5 rounded-full bg-neutral-900"></span>
                    <span>{{ metric.label }}: <strong class="text-neutral-950">{{ metric.value }}</strong></span>
                  </span>
                }
              </div>
            }
          }

        </div>
      </div>

      <!-- Minimalist Auto-Scroll Progress Line along Bottom Border -->
      <div class="absolute bottom-0 inset-x-0 h-[2px] bg-neutral-200 z-20 flex pointer-events-none">
        @for (slide of heroSlides; track slide.id; let idx = $index) {
          <div class="flex-1 h-full bg-neutral-100 overflow-hidden relative border-r border-neutral-200 last:border-r-0">
            <div class="h-full bg-neutral-950 transition-all ease-linear"
                 [style.width]="activeSlideIndex() === idx ? '100%' : (activeSlideIndex() > idx ? '100%' : '0%')"
                 [style.transition-duration]="activeSlideIndex() === idx ? '3500ms' : '0ms'">
            </div>
          </div>
        }
      </div>

    </section>

    <!-- ========================================================================= -->
    <!-- 1B. TRUST & VALUE PROPOSITIONS BAR (MATCHING MOCKUP DESIGN)               -->
    <!-- ========================================================================= -->
    <section class="bg-white border-b border-neutral-200 py-6 sm:py-8 relative z-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div class="flex items-center gap-3.5 p-3 sm:p-4 rounded-2xl bg-neutral-50/80 border border-neutral-200/80 hover:bg-white hover:border-neutral-300 hover:shadow-sm transition-all">
            <div class="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white border border-neutral-200 flex items-center justify-center shrink-0 text-neutral-900 shadow-sm">
              <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
              </svg>
            </div>
            <div>
              <h4 class="text-xs sm:text-sm font-bold text-neutral-900">Premium Quality</h4>
              <p class="text-[11px] text-neutral-500 font-mono">100% Combed Cotton</p>
            </div>
          </div>
          <div class="flex items-center gap-3.5 p-3 sm:p-4 rounded-2xl bg-neutral-50/80 border border-neutral-200/80 hover:bg-white hover:border-neutral-300 hover:shadow-sm transition-all">
            <div class="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white border border-neutral-200 flex items-center justify-center shrink-0 text-neutral-900 shadow-sm">
              <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"/>
              </svg>
            </div>
            <div>
              <h4 class="text-xs sm:text-sm font-bold text-neutral-900">Fast Delivery</h4>
              <p class="text-[11px] text-neutral-500 font-mono">Same-Day DTF Dispatch</p>
            </div>
          </div>
          <div class="flex items-center gap-3.5 p-3 sm:p-4 rounded-2xl bg-neutral-50/80 border border-neutral-200/80 hover:bg-white hover:border-neutral-300 hover:shadow-sm transition-all">
            <div class="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white border border-neutral-200 flex items-center justify-center shrink-0 text-neutral-900 shadow-sm">
              <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414"/>
              </svg>
            </div>
            <div>
              <h4 class="text-xs sm:text-sm font-bold text-neutral-900">24/7 Support</h4>
              <p class="text-[11px] text-neutral-500 font-mono">Direct Studio Techs</p>
            </div>
          </div>
          <div class="flex items-center gap-3.5 p-3 sm:p-4 rounded-2xl bg-neutral-50/80 border border-neutral-200/80 hover:bg-white hover:border-neutral-300 hover:shadow-sm transition-all">
            <div class="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white border border-neutral-200 flex items-center justify-center shrink-0 text-neutral-900 shadow-sm">
              <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
            </div>
            <div>
              <h4 class="text-xs sm:text-sm font-bold text-neutral-900">Secure Payments</h4>
              <p class="text-[11px] text-neutral-500 font-mono">GST Invoicing & Escrow</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ========================================================================= -->
    <!-- 2. CURATED CATEGORIES                                                     -->
    <!-- ========================================================================= -->
    <section id="curated-categories" class="py-16 sm:py-24 bg-neutral-50/50 text-neutral-900 border-b border-neutral-200 relative overflow-hidden">
      <!-- Ambient Studio Spotlight -->
      <div class="absolute inset-x-0 top-0 h-96 studio-ambient-spotlight pointer-events-none"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div class="scroll-reveal inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 text-neutral-800 text-xs font-mono uppercase tracking-widest shadow-sm">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Apparel Collection &bull; 6 Curated Categories</span>
          </div>
          <div class="overflow-hidden">
            <h2 class="letter-reveal text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-950 uppercase font-display">
              Curated Categories
            </h2>
          </div>
          <p class="scroll-reveal delay-100 text-neutral-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Precision engineered heavy cottons, active stretch fabrics, and structured headwear.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          @for (cat of categories; track cat.id; let idx = $index) {
            <div [class]="'card-luxury rounded-3xl overflow-hidden flex flex-col justify-between group hover-lift relative scroll-reveal stagger-' + ((idx % 3) + 1)">
              
              <!-- Category Image Showcase Banner with Motion Design & Ambient Floating Badges -->
              <div class="image-motion-card relative h-56 sm:h-60 w-full overflow-hidden bg-neutral-100 border-b border-neutral-200">
                <img 
                  [src]="cat.image" 
                  [alt]="cat.name" 
                  loading="lazy"
                  decoding="async"
                  class="w-full h-full object-cover object-[75%_center] contrast-105 brightness-100 group-hover:scale-105 transition-all duration-700 ease-out" />
                
                <!-- Light Vignette Gradient on Bottom of Image -->
                <div class="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent"></div>

                <!-- Floating Top Left Index Pill with Ambient Float Motion -->
                <span class="animate-ambient-float absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-neutral-900 font-mono text-xs font-bold border border-neutral-200 shadow-sm">
                  0{{ idx + 1 }}
                </span>

                <!-- Floating Top Right Badge with Ambient Float Motion -->
                @if (cat.badge) {
                  <span class="animate-ambient-float-slow absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-neutral-950 text-white font-mono text-xs uppercase font-black tracking-wider shadow-sm">
                    {{ cat.badge }}
                  </span>
                }
              </div>

              <!-- Content Body -->
              <div class="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6 bg-white">
                
                <div class="space-y-3.5">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-xl bg-neutral-50 border border-neutral-200 flex items-center justify-center text-xl shrink-0 group-hover:border-neutral-400 group-hover:scale-105 transition-all duration-300">
                      {{ cat.icon }}
                    </div>
                    <h3 class="text-xl sm:text-2xl font-black text-neutral-950 group-hover:text-black transition-colors uppercase font-display tracking-tight">
                      {{ cat.name }}
                    </h3>
                  </div>

                  <p class="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                    {{ cat.desc }}
                  </p>
                </div>

                <!-- Footer with Count and Dual Action Buttons -->
                <div class="pt-5 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-3">
                  <span class="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-neutral-700 font-bold">
                    <span class="w-1.5 h-1.5 rounded-full bg-neutral-900"></span>
                    {{ cat.count }}
                  </span>
                  
                  <div class="flex items-center gap-2">
                    <a [routerLink]="['/customize']" 
                       [queryParams]="{ category: cat.id }"
                       class="px-3.5 py-2 rounded-full border border-neutral-300 bg-neutral-50 hover:bg-neutral-900 hover:text-white text-neutral-800 text-[11px] font-mono font-bold uppercase transition-all duration-300">
                      3D Studio
                    </a>
                    <a routerLink="/catalog" 
                       class="px-4 py-2 rounded-full bg-neutral-950 hover:bg-black text-white text-xs font-mono font-black uppercase transition-all duration-300 flex items-center gap-1.5 shadow-sm">
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
    <!-- 3. CONTRASTING METRIC COUNTERS BAND                                       -->
    <!-- ========================================================================= -->
    <section class="py-14 bg-neutral-950 text-white border-b border-neutral-900 font-mono relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          
          <div class="scroll-reveal stagger-1 space-y-1 p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800 transition duration-300">
            <span class="text-3xl sm:text-4xl font-black text-white block tracking-tighter">10+ YEARS</span>
            <span class="text-xs text-neutral-400 uppercase tracking-widest block">Textile Hub Leadership</span>
          </div>

          <div class="scroll-reveal stagger-2 space-y-1 p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800 transition duration-300">
            <span class="text-3xl sm:text-4xl font-black text-white block tracking-tighter">100,000+</span>
            <span class="text-xs text-neutral-400 uppercase tracking-widest block">Pieces Daily Output</span>
          </div>

          <div class="scroll-reveal stagger-3 space-y-1 p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800 transition duration-300">
            <span class="text-3xl sm:text-4xl font-black text-white block tracking-tighter">24 - 48H</span>
            <span class="text-xs text-neutral-400 uppercase tracking-widest block">Rapid Dispatch SLA</span>
          </div>

          <div class="scroll-reveal stagger-4 space-y-1 p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800 transition duration-300">
            <span class="text-3xl sm:text-4xl font-black text-white block tracking-tighter">&Delta;E &lt; 0.5</span>
            <span class="text-xs text-neutral-400 uppercase tracking-widest block">Spectrophotometer Accuracy</span>
          </div>

        </div>
      </div>
    </section>

    <!-- ========================================================================= -->
    <!-- 4. CUSTOM PRINTING & 3D DESIGN STUDIO                                     -->
    <!-- ========================================================================= -->
    <section id="print-design-studio" 
             class="relative bg-white text-neutral-950 min-h-[640px] lg:min-h-[760px] flex items-center overflow-hidden border-b border-neutral-200">
      
      <!-- Studio Lighting Layers behind Print Samples -->
      <div class="absolute right-0 top-1/2 -translate-y-1/2 w-[750px] h-[750px] studio-rim-glow pointer-events-none z-10"></div>
      
      <!-- FULL-BLEED PRINT SHOWCASE BACKGROUND IMAGE -->
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
            class="absolute inset-0 w-full h-full object-cover object-center lg:object-right contrast-105 brightness-100 drop-shadow-xl transition-opacity duration-1000 ease-out pointer-events-none" />
        }

        <!-- Scrim on Mobile & Tablet -->
        <div class="absolute inset-0 bg-white/80 lg:hidden z-10 pointer-events-none"></div>

        <!-- Seamless Horizontal Gradient Blend on Desktop -->
        <div class="absolute inset-0 bg-gradient-to-r from-white via-white/95 via-42% to-transparent hidden lg:block z-10 pointer-events-none"></div>

        <!-- Top & Bottom Ambient Edge Blends -->
        <div class="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white via-white/50 to-transparent z-10 pointer-events-none"></div>
        <div class="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/70 to-transparent z-10 pointer-events-none"></div>
      </div>

      <!-- Left Column: Editorial Display Typography -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20 pt-16 sm:pt-20 pb-28 sm:pb-36">
        <div class="max-w-2xl space-y-6">
          
          <!-- Category / Studio Top Pill (Animated on slide change) -->
          @for (tech of printTechnologies; track tech.id; let idx = $index) {
            @if (activePrintTechIndex() === idx) {
              <div class="animate-hero-pill-in inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-800 text-xs font-mono uppercase tracking-widest shadow-sm">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>PRINTING FOR DESIGN &bull; {{ tech.badge }}</span>
              </div>
            }
          }

          <!-- Massive Bold Display Headline with Animated Letter & Word Reveal -->
          @for (tech of printTechnologies; track tech.id; let idx = $index) {
            @if (activePrintTechIndex() === idx) {
              <h2 class="text-4xl sm:text-6xl lg:text-7xl font-black text-neutral-950 tracking-tighter leading-[1.04] uppercase font-display">
                <span class="block overflow-hidden">
                  <span class="block animate-letter-reveal">{{ tech.headlineLine1 }}</span>
                </span>
                <span class="block overflow-hidden">
                  <span class="block animate-letter-reveal delay-100">{{ tech.headlineLine2 }}</span>
                </span>
                <span class="block overflow-hidden mt-1">
                  <span class="block animate-silver-shimmer animate-letter-reveal delay-200 font-extrabold tracking-tight text-neutral-800">
                    {{ tech.headlineHighlight }}
                  </span>
                </span>
              </h2>
            }
          }

          <!-- Subtitle Description (Animated on slide change) -->
          @for (tech of printTechnologies; track tech.id; let idx = $index) {
            @if (activePrintTechIndex() === idx) {
              <p class="animate-hero-slide-in text-base sm:text-lg text-neutral-600 leading-relaxed max-w-xl font-normal">
                {{ tech.description }}
              </p>
            }
          }

          <!-- Action Buttons -->
          <div class="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a routerLink="/customizer" 
               class="btn-luxury-primary hover-lift-sm px-8 py-4 text-sm font-black rounded-full flex items-center justify-center gap-3 uppercase tracking-wider cursor-pointer group">
              <span>Launch 3D Customizer</span>
              <span class="text-xs font-mono px-2 py-0.5 rounded bg-white text-black transition-transform duration-300 group-hover:scale-110">360&deg;</span>
              <span class="transition-transform duration-300 group-hover:translate-x-1.5 font-bold">&rarr;</span>
            </a>

            <a routerLink="/catalog" 
               class="btn-luxury-secondary hover-lift-sm px-8 py-4 text-sm font-bold rounded-full flex items-center justify-center gap-2 text-center uppercase tracking-wider cursor-pointer group">
              <span>Explore Garments</span>
              <span class="transition-transform duration-300 group-hover:translate-x-1.5 text-neutral-500 group-hover:text-black font-bold">&rarr;</span>
            </a>
          </div>

          <!-- Live Print Specs Badges (Animated on slide change) -->
          @for (tech of printTechnologies; track tech.id; let idx = $index) {
            @if (activePrintTechIndex() === idx) {
              <div class="pt-2 flex flex-wrap items-center gap-2.5 text-xs font-mono">
                @for (spec of tech.specs; track spec.label; let mIdx = $index) {
                  <span class="animate-spec-badge-in inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 text-neutral-700 shadow-sm"
                        [style.animation-delay]="(mIdx * 80) + 'ms'">
                    <span class="w-1.5 h-1.5 rounded-full bg-neutral-900"></span>
                    <span>{{ spec.label }}: <strong class="text-neutral-950">{{ spec.value }}</strong></span>
                  </span>
                }
              </div>
            }
          }

        </div>
      </div>

      <!-- Centered Minimalist Indicator Dots Only -->
      <div class="absolute bottom-8 sm:bottom-10 inset-x-0 flex justify-center z-30 pointer-events-auto px-4">
        <div class="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/95 border border-neutral-200 shadow-md backdrop-blur-md">
          @for (tech of printTechnologies; track tech.id; let idx = $index) {
            <button 
              (click)="onPrintDotClick(idx, $event)"
              type="button"
              [attr.aria-label]="'Switch to ' + tech.label"
              [class.w-6]="activePrintTechIndex() === idx"
              [class.bg-neutral-950]="activePrintTechIndex() === idx"
              [class.w-2]="activePrintTechIndex() !== idx"
              [class.bg-neutral-300]="activePrintTechIndex() !== idx"
              class="h-2 rounded-full transition-all duration-300 cursor-pointer hover:bg-neutral-500">
            </button>
          }
        </div>
      </div>

      <!-- Minimalist 2px Auto-Scroll Progress Line along Bottom Border -->
      <div class="absolute bottom-0 inset-x-0 h-[2px] bg-neutral-200 z-20 flex pointer-events-none">
        @for (tech of printTechnologies; track tech.id; let idx = $index) {
          <div class="flex-1 h-full bg-neutral-100 overflow-hidden relative border-r border-neutral-200 last:border-r-0">
            <div class="h-full bg-neutral-950 transition-all ease-linear"
                 [style.width]="activePrintTechIndex() === idx ? '100%' : (activePrintTechIndex() > idx ? '100%' : '0%')"
                 [style.transition-duration]="activePrintTechIndex() === idx ? '4000ms' : '0ms'">
            </div>
          </div>
        }
      </div>

    </section>

    <!-- ========================================================================= -->
    <!-- 5. CLIENT TRUST & BRAND LOGO BAR                                          -->
    <!-- ========================================================================= -->
    <section class="py-14 bg-neutral-50 text-neutral-900 border-b border-neutral-200 relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center space-y-3 mb-10">
          <div class="scroll-reveal inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 text-neutral-800 text-xs font-mono uppercase tracking-widest shadow-sm">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Social Proof &bull; 500+ Active Brands</span>
          </div>
          <div class="overflow-hidden">
            <h3 class="letter-reveal text-xs sm:text-sm font-mono uppercase tracking-[0.22em] text-neutral-600 font-bold">
              Trusted by Leading Streetwear Labels &bull; Creator Collectives &bull; Fast-Growth DTC Brands
            </h3>
          </div>
        </div>

        <!-- Monochrome Brand Badges Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6 items-center">
          @for (brand of trustedBrands; track brand.name; let bIdx = $index) {
            <div [class]="'p-4 rounded-2xl bg-white border border-neutral-200 hover:border-neutral-400 hover:shadow-sm transition-all duration-300 flex flex-col items-center justify-center text-center group cursor-default shadow-sm hover-lift-sm scroll-reveal stagger-' + ((bIdx % 6) + 1)">
              <span class="text-lg sm:text-xl font-black text-neutral-900 group-hover:text-black transition-colors uppercase font-display tracking-wider">
                {{ brand.symbol }}
              </span>
              <span class="text-[10px] sm:text-[11px] font-mono tracking-widest text-neutral-700 group-hover:text-black uppercase font-bold mt-1.5 truncate max-w-full">
                {{ brand.name }}
              </span>
              <span class="text-[9px] font-mono text-neutral-500 uppercase mt-0.5">
                {{ brand.category }}
              </span>
            </div>
          }
        </div>

      </div>
    </section>

    <!-- ========================================================================= -->
    <!-- 6. FREQUENTLY ASKED QUESTIONS ACCORDION                                   -->
    <!-- ========================================================================= -->
    <section id="faq-section" class="py-20 sm:py-28 bg-white text-neutral-900 border-b border-neutral-200 relative overflow-hidden">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <!-- Section Header -->
        <div class="text-center space-y-4">
          <div class="scroll-reveal inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-800 text-xs font-mono uppercase tracking-widest shadow-sm">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Knowledge Base &bull; Production Standards</span>
          </div>

          <div class="overflow-hidden">
            <h2 class="letter-reveal text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-950 uppercase font-display">
              Everything You Need To Know. <br />
              <span class="inline-block animate-silver-shimmer font-extrabold mt-1 text-neutral-800">Before You Print.</span>
            </h2>
          </div>

          <p class="scroll-reveal delay-100 text-neutral-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Essential specifications covering zero minimum orders, fast turnaround dispatch, 50+ wash durability, and vector file upload guidelines.
          </p>
        </div>

        <!-- FAQ Accordion List -->
        <div class="space-y-4">
          @for (faq of faqs; track faq.id; let idx = $index) {
            <div class="rounded-2xl border border-neutral-200 bg-neutral-50/50 overflow-hidden transition-all duration-300 hover:border-neutral-300 hover:bg-white shadow-sm">
              
              <!-- Accordion Header Button -->
              <button 
                (click)="toggleFaq(idx)"
                type="button"
                [attr.aria-expanded]="openFaqIndex() === idx"
                class="w-full px-6 py-5 sm:py-6 text-left flex items-center justify-between gap-4 cursor-pointer group">
                
                <div class="flex items-center gap-3 sm:gap-4 min-w-0">
                  <span class="px-2.5 py-1 rounded-md bg-white border border-neutral-200 text-[10px] font-mono font-bold text-neutral-700 uppercase shrink-0 shadow-sm">
                    {{ faq.category }}
                  </span>
                  <h3 class="text-sm sm:text-base font-bold text-neutral-900 group-hover:text-black transition-colors tracking-tight">
                    {{ faq.question }}
                  </h3>
                </div>

                <!-- Animated Plus / Minus Toggle Indicator -->
                <div class="w-8 h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-700 group-hover:text-black group-hover:border-neutral-400 transition-all shrink-0 shadow-sm">
                  <span class="text-base font-mono font-bold transition-transform duration-300" [class.rotate-45]="openFaqIndex() === idx">
                    +
                  </span>
                </div>

              </button>

              <!-- Accordion Collapsible Body -->
              @if (openFaqIndex() === idx) {
                <div class="px-6 pb-6 pt-1 text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans border-t border-neutral-200/60 animate-hero-slide-in">
                  <p class="mb-3">{{ faq.answer }}</p>
                  
                  @if (faq.bulletPoints && faq.bulletPoints.length > 0) {
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-neutral-200/60 font-mono text-[11px] text-neutral-500">
                      @for (bullet of faq.bulletPoints; track bullet) {
                        <div class="flex items-center gap-2">
                          <span class="w-1.5 h-1.5 rounded-full bg-neutral-900"></span>
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
        <div class="p-6 sm:p-8 rounded-3xl bg-neutral-50 border border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div class="space-y-1 text-center sm:text-left">
            <h4 class="text-base font-bold text-neutral-950 uppercase tracking-tight">
              Have specific manufacturing or artwork questions?
            </h4>
            <p class="text-xs text-neutral-600">
              Our pre-press production engineers review artworks, PMS colors, and fabric drape daily.
            </p>
          </div>

          <div class="flex items-center gap-3 shrink-0">
            <a href="https://wa.me/919629986444?text=Hi%20Brand%20Peoples,%20I%20have%20a%20technical%20question%20about%20printing%20and%20MOQ." 
               target="_blank" 
               rel="noopener noreferrer"
               class="btn-luxury-primary hover-lift-sm px-5 py-2.5 rounded-full text-xs font-mono font-black uppercase transition-all duration-300 flex items-center gap-2">
              <span>WhatsApp Engineer</span>
              <span class="btn-arrow">&rarr;</span>
            </a>
            <a href="tel:9629986444" 
               class="hover-lift-sm px-5 py-2.5 rounded-full bg-white hover:bg-neutral-100 text-neutral-800 text-xs font-mono font-bold uppercase border border-neutral-300 transition-all shadow-sm">
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
