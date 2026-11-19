import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

export interface EnrichedBundle {
  code: string;
  name: string;
  tagline: string;
  category: 'all' | 'onboarding' | 'executive' | 'active' | 'eco' | 'events';
  categoryBadge: string;
  target: string;
  items: string[];
  moq: string;
  estimatedPrice: string;
  turnaround: string;
  boxType: string;
  branding: string;
  badge?: string;
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-gift-kits',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <!-- ========================================================================= -->
    <!-- 1. TOP EDITORIAL HERO: CORPORATE MERCH & GIFT KITS                        -->
    <!-- ========================================================================= -->
    <section class="bg-black text-white pt-12 pb-16 sm:pb-24 border-b border-zinc-900 relative overflow-hidden font-sans">
      <!-- Subtle ambient lighting -->
      <div class="absolute -top-32 -right-32 w-96 h-96 bg-white/[0.04] rounded-full blur-[140px] pointer-events-none"></div>
      <div class="absolute -bottom-32 -left-32 w-96 h-96 bg-zinc-800/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Breadcrumbs -->
        <nav class="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-8 select-none">
          <a routerLink="/" class="hover:text-white transition">Home</a>
          <span class="text-zinc-700">/</span>
          <span class="text-zinc-300">Merchandise Suites</span>
          <span class="text-zinc-700">/</span>
          <span class="text-white font-bold">Corporate Gift Kits</span>
        </nav>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          <!-- Hero Copy & Metrics (7 cols) -->
          <div class="lg:col-span-7 space-y-6">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-950 border border-zinc-800 text-xs font-mono uppercase tracking-widest shadow-xs">
              <span class="w-2 h-2 rounded-full bg-white animate-pulse"></span>
              <span>7 TURNKEY MERCHANDISE PACKAGES &bull; ZERO PLASTIC</span>
            </div>

            <h1 class="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight font-display text-white leading-[1.08] uppercase">
              Curated Gift Kits &amp; <br>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-500">
                Turnkey Bundles.
              </span>
            </h1>

            <p class="text-zinc-400 text-sm sm:text-base max-w-xl font-normal leading-relaxed">
              Seven fully personalized corporate merchandise combinations for new employee onboarding, executive milestones, client summits, and active lifestyle drives. Crafted with export-grade combed cotton apparel, fiber laser-etched 304 stainless steel flasks, and bespoke rigid luxury presentation packaging.
            </p>

            <!-- Actions & Direct Factory WhatsApp -->
            <div class="flex flex-wrap items-center gap-3.5 pt-2">
              <a href="#bundles" 
                 class="btn-shimmer bg-white text-black font-black hover:bg-zinc-200 px-6 sm:px-8 py-3.5 rounded-full text-xs sm:text-sm uppercase tracking-wider transition-all shadow-bw cursor-pointer flex items-center gap-2">
                <span>Explore 7 Bundles</span>
                <span class="text-base">&darr;</span>
              </a>

              <a href="#configurator" 
                 class="px-6 sm:px-7 py-3.5 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer">
                <span>Custom Kit Builder</span>
                <span>&rarr;</span>
              </a>

              <a href="https://wa.me/919629986444?text=Hi%20Brand%20Peoples%20Factory,%20I%20want%20to%20curate%20a%20custom%20gift%20box%20for%20our%20company." 
                 target="_blank" 
                 rel="noopener noreferrer"
                 class="px-5 py-3.5 rounded-full border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 text-xs font-mono transition-all flex items-center gap-1.5">
                <span>Direct WhatsApp</span>
                <span class="text-white">&nearr;</span>
              </a>
            </div>

            <!-- Value Highlights Metrics Bar -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-zinc-800/80 font-mono">
              <div class="space-y-1">
                <span class="block text-2xl sm:text-3xl font-black text-white">25 Kits</span>
                <span class="text-[10px] text-zinc-500 uppercase tracking-widest block">Low Starter MOQ</span>
              </div>
              <div class="space-y-1">
                <span class="block text-2xl sm:text-3xl font-black text-white">100%</span>
                <span class="text-[10px] text-zinc-500 uppercase tracking-widest block">Custom Branded</span>
              </div>
              <div class="space-y-1">
                <span class="block text-2xl sm:text-3xl font-black text-white">3–5 Days</span>
                <span class="text-[10px] text-zinc-500 uppercase tracking-widest block">Fast SLA Dispatch</span>
              </div>
              <div class="space-y-1">
                <span class="block text-2xl sm:text-3xl font-black text-white">Zero Plastic</span>
                <span class="text-[10px] text-zinc-500 uppercase tracking-widest block">Rigid Luxury Box</span>
              </div>
            </div>
          </div>

          <!-- Featured Showcase Card (5 cols) -->
          <div class="lg:col-span-5 relative">
            <div class="relative bg-zinc-950 rounded-3xl p-6 sm:p-7 border border-zinc-800 shadow-2xl space-y-6">
              
              <!-- Floating Pill Top Right -->
              <span class="absolute -top-3 -right-3 bg-white text-black text-[10px] font-mono font-bold uppercase px-3 py-1 rounded-full shadow-lg tracking-wider border border-white">
                FEATURED BUNDLE &bull; GIFT-V101
              </span>

              <!-- Bundle Visual Mockup with Image Motion -->
              <div class="image-motion-card aspect-4/3 rounded-2xl bg-zinc-900 overflow-hidden relative border border-zinc-800 flex items-center justify-center group">
                <img 
                  src="images/bw/hero_unique_6_corporate.jpg" 
                  alt="Welcome Onboard Corporate Swag Box" 
                  class="w-full h-full object-cover grayscale contrast-115 group-hover:scale-108 transition-transform duration-700 ease-out" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex items-end p-5">
                  <div class="text-white space-y-1">
                    <span class="text-[10px] font-mono uppercase tracking-widest text-zinc-300 block font-bold">BEST SELLER ONBOARDING</span>
                    <h3 class="font-extrabold text-lg sm:text-xl leading-tight font-display text-white">Welcome Onboard Pack</h3>
                  </div>
                </div>
              </div>

              <!-- Included item pills -->
              <div class="space-y-2">
                <span class="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block font-bold">Standard Kit Contents:</span>
                <div class="flex flex-wrap gap-1.5">
                  <span class="px-2.5 py-1 rounded-lg bg-zinc-900 text-zinc-200 text-xs font-mono border border-zinc-800">
                    👕 180 GSM Bio-Washed Tee
                  </span>
                  <span class="px-2.5 py-1 rounded-lg bg-zinc-900 text-zinc-200 text-xs font-mono border border-zinc-800">
                    ☕ 350ml Matte Ceramic Mug
                  </span>
                  <span class="px-2.5 py-1 rounded-lg bg-zinc-900 text-zinc-200 text-xs font-mono border border-zinc-800">
                    ✍️ Precision Metal Click Pen
                  </span>
                  <span class="px-2.5 py-1 rounded-lg bg-zinc-900 text-zinc-200 text-xs font-mono border border-zinc-800">
                    📦 Magnetic Luxury Keepsake Box
                  </span>
                </div>
              </div>

              <!-- Direct Quote Action in Card -->
              <div class="pt-3 flex items-center justify-between border-t border-zinc-800">
                <div>
                  <span class="text-[10px] font-mono text-zinc-500 block uppercase">Turnkey Unit Cost</span>
                  <span class="text-base sm:text-lg font-black text-white font-mono">From ₹799 <small class="text-zinc-400 font-normal text-xs">/ kit</small></span>
                </div>
                <a 
                  [href]="getWhatsAppUrl(bundles[0])" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="btn-shimmer bg-white hover:bg-zinc-200 text-black font-black px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md active:scale-95 flex items-center gap-1.5">
                  <span>Get Instant Quote</span>
                  <span>&nearr;</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- ========================================================================= -->
    <!-- 2. CURATED 7-BUNDLE COLLECTION GRID                                       -->
    <!-- ========================================================================= -->
    <section id="bundles" class="py-16 sm:py-24 bg-zinc-950 font-sans border-b border-zinc-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <!-- Section Header with Category Tabs -->
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-800/80 pb-6">
          <div class="space-y-2">
            <span class="text-xs font-mono text-zinc-400 font-bold uppercase tracking-widest block flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full bg-white"></span>
              <span>READY-TO-SHIP OR FULLY CUSTOMIZED</span>
            </span>
            <div class="overflow-hidden">
              <h2 class="letter-reveal text-3xl sm:text-4xl font-black tracking-tight text-white font-display uppercase">
                Curated Gift Packages
              </h2>
            </div>
            <p class="text-xs sm:text-sm text-zinc-400 max-w-xl">
              Turnkey corporate gifting suites. Add your company emblem, team member names, and brand color palette to every piece.
            </p>
          </div>

          <!-- Category Filter Pills -->
          <div class="flex flex-wrap items-center gap-1.5 font-mono">
            @for (tab of categories; track tab.key) {
              <button 
                (click)="activeCategory.set(tab.key)" 
                type="button" 
                [class.bg-white]="activeCategory() === tab.key"
                [class.text-black]="activeCategory() === tab.key"
                [class.border-white]="activeCategory() === tab.key"
                [class.bg-zinc-900]="activeCategory() !== tab.key"
                [class.text-zinc-400]="activeCategory() !== tab.key"
                [class.border-zinc-800]="activeCategory() !== tab.key"
                class="px-3 py-1.5 rounded-full border text-xs font-bold transition-all cursor-pointer hover:border-zinc-500 hover:text-white">
                {{ tab.label }}
              </button>
            }
          </div>
        </div>

        <!-- 7-Card Grid with Monochrome Styling -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          @for (b of filteredBundles(); track b.code; let idx = $index) {
            <article [class]="'theme-card-bw rounded-3xl bg-black border border-zinc-850 overflow-hidden flex flex-col justify-between group hover-lift shadow-xl transition-all duration-300 hover:border-zinc-500 scroll-reveal stagger-' + ((idx % 3) + 1)">
              
              <!-- Card Image Header -->
              <div class="image-motion-card relative aspect-16/10 overflow-hidden bg-zinc-900 border-b border-zinc-850">
                <img 
                  [src]="b.image" 
                  [alt]="b.name" 
                  loading="lazy" 
                  decoding="async"
                  class="w-full h-full object-cover grayscale contrast-115 group-hover:scale-108 transition-transform duration-700 ease-out" />
                <div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                <!-- Top Left Badge -->
                <span class="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-black/85 backdrop-blur-md text-[10px] font-mono text-zinc-300 border border-zinc-700/80 uppercase font-bold tracking-wider">
                  {{ b.categoryBadge }}
                </span>

                <!-- Top Right Highlight Badge -->
                @if (b.badge) {
                  <span class="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-white text-black text-[10px] font-mono font-black uppercase tracking-wider shadow-md">
                    {{ b.badge }}
                  </span>
                }

                <!-- Product Code on Bottom -->
                <span class="absolute bottom-3 left-4 text-[10px] font-mono text-zinc-400 uppercase tracking-widest font-bold">
                  {{ b.code }}
                </span>
              </div>

              <!-- Card Content Body -->
              <div class="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5 bg-black">
                
                <div class="space-y-4">
                  <div>
                    <h3 class="text-xl font-black text-white font-display tracking-tight uppercase group-hover:text-zinc-200 transition-colors">
                      {{ b.name }}
                    </h3>
                    <p class="text-xs text-zinc-400 mt-1 font-mono">
                      {{ b.tagline }}
                    </p>
                  </div>

                  <!-- Kit Contents Checklist -->
                  <div class="space-y-1.5 pt-1">
                    <span class="text-[10px] font-mono uppercase text-zinc-500 block font-bold">Includes in Every Kit:</span>
                    <ul class="space-y-1.5 text-xs text-zinc-300">
                      @for (item of b.items; track item) {
                        <li class="flex items-start gap-2">
                          <span class="text-white text-xs mt-0.5 shrink-0">&bull;</span>
                          <span class="leading-relaxed">{{ item }}</span>
                        </li>
                      }
                    </ul>
                  </div>

                  <!-- Specs Breakdown -->
                  <div class="pt-3 border-t border-zinc-800/80 space-y-2 font-mono text-[11px]">
                    <div class="flex items-center justify-between text-zinc-400">
                      <span>Packaging:</span>
                      <strong class="text-white font-medium">{{ b.boxType }}</strong>
                    </div>
                    <div class="flex items-center justify-between text-zinc-400">
                      <span>Branding:</span>
                      <strong class="text-white font-medium">{{ b.branding }}</strong>
                    </div>
                    <div class="flex items-center justify-between text-zinc-400">
                      <span>MOQ &amp; SLA:</span>
                      <strong class="text-white font-medium">{{ b.moq }} &bull; {{ b.turnaround }}</strong>
                    </div>
                  </div>
                </div>

                <!-- Footer with Action Buttons (Quote-Driven B2B Action) -->
                <div class="pt-4 border-t border-zinc-800/80 space-y-3 font-mono">
                  <div class="flex items-center justify-between">
                    <div>
                      <span class="text-[10px] text-zinc-500 uppercase block">Starting Tier</span>
                      <span class="text-lg font-black text-white font-display">{{ b.estimatedPrice }}</span>
                    </div>
                    <span class="text-[10px] text-zinc-500">Tiered bulk discounts</span>
                  </div>

                  <div class="grid grid-cols-2 gap-2">
                    <a 
                      [href]="getWhatsAppUrl(b)" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      class="btn-shimmer bg-white hover:bg-zinc-200 text-black font-black py-2.5 px-3 rounded-xl text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-sm active:scale-95">
                      <span>Inquire Batch</span>
                      <span>&nearr;</span>
                    </a>

                    <a 
                      routerLink="/customizer"
                      class="bg-zinc-900 text-zinc-300 border border-zinc-700 hover:bg-zinc-800 hover:text-white py-2.5 px-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-1 hover:border-zinc-500">
                      <span>3D Preview</span>
                      <span>&rarr;</span>
                    </a>
                  </div>
                </div>

              </div>

            </article>
          }
        </div>

      </div>
    </section>

    <!-- ========================================================================= -->
    <!-- 3. INTERACTIVE 3-STEP CUSTOM KIT CONFIGURATOR                             -->
    <!-- ========================================================================= -->
    <section id="configurator" class="py-16 sm:py-24 bg-black border-t border-b border-zinc-900 font-sans">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div class="text-center max-w-2xl mx-auto space-y-3">
          <span class="inline-block px-3.5 py-1.5 rounded-full bg-zinc-950 text-zinc-300 border border-zinc-800 text-xs font-mono uppercase tracking-widest shadow-xs">
            Interactive Assembly Line
          </span>
          <div class="overflow-hidden">
            <h2 class="letter-reveal text-3xl sm:text-5xl font-black text-white font-display tracking-tight uppercase">
              Build Your Custom Kit
            </h2>
          </div>
          <p class="text-xs sm:text-sm text-zinc-400 leading-relaxed font-mono">
            Select your base apparel blank, choose curated accessories, and configure presentation packaging. Instant live cost calculator and 1-click WhatsApp BOM submission.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <!-- Left Configuration Form (8 cols) -->
          <div class="lg:col-span-8 space-y-8 font-mono">
            
            <!-- STEP 1: APPAREL BLANK -->
            <div class="p-6 sm:p-7 rounded-3xl bg-zinc-950 border border-zinc-800 space-y-5">
              <div class="flex items-center justify-between border-b border-zinc-800/80 pb-3">
                <div class="flex items-center gap-2.5">
                  <span class="w-6 h-6 rounded-full bg-white text-black text-xs font-bold flex items-center justify-center font-display">1</span>
                  <h3 class="text-base sm:text-lg font-black text-white uppercase font-display tracking-tight">Select Base Apparel</h3>
                </div>
                <span class="text-[10px] text-zinc-400 uppercase">Export Cotton &bull; Pick 1</span>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                @for (app of apparelOptions; track app.id) {
                  <button 
                    (click)="selectedApparel.set(app.id)"
                    type="button" 
                    [class.border-white]="selectedApparel() === app.id"
                    [class.bg-zinc-900]="selectedApparel() === app.id"
                    [class.border-zinc-800]="selectedApparel() !== app.id"
                    [class.bg-black]="selectedApparel() !== app.id"
                    class="p-4 rounded-2xl border text-left transition-all cursor-pointer hover:border-zinc-600 flex flex-col justify-between space-y-3 group">
                    <div class="flex items-start justify-between gap-2">
                      <div>
                        <span class="font-bold text-sm text-white block font-display uppercase tracking-tight">{{ app.name }}</span>
                        <span class="text-xs text-zinc-400 block mt-0.5">{{ app.gsm }}</span>
                      </div>
                      <span class="text-xs font-bold text-white shrink-0 font-mono">{{ app.priceEst }}</span>
                    </div>
                    <p class="text-[11px] text-zinc-400 font-sans leading-relaxed">{{ app.desc }}</p>
                    <div class="flex items-center justify-between pt-2 border-t border-zinc-900 text-[10px]">
                      <span class="text-zinc-500">OEKO-TEX STD 100</span>
                      <span [class.text-white]="selectedApparel() === app.id" [class.text-zinc-600]="selectedApparel() !== app.id" class="font-bold">
                        {{ selectedApparel() === app.id ? 'SELECTED ✓' : 'SELECT' }}
                      </span>
                    </div>
                  </button>
                }
              </div>
            </div>

            <!-- STEP 2: ACCESSORIES -->
            <div class="p-6 sm:p-7 rounded-3xl bg-zinc-950 border border-zinc-800 space-y-5">
              <div class="flex items-center justify-between border-b border-zinc-800/80 pb-3">
                <div class="flex items-center gap-2.5">
                  <span class="w-6 h-6 rounded-full bg-white text-black text-xs font-bold flex items-center justify-center font-display">2</span>
                  <h3 class="text-base sm:text-lg font-black text-white uppercase font-display tracking-tight">Curate Merchandise Items</h3>
                </div>
                <span class="text-[10px] text-zinc-400 uppercase">Select Multiple &bull; Optional</span>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                @for (acc of accessoryOptions; track acc.id) {
                  <button 
                    (click)="toggleAccessory(acc.id)"
                    type="button" 
                    [class.border-white]="isAccessorySelected(acc.id)"
                    [class.bg-zinc-900]="isAccessorySelected(acc.id)"
                    [class.border-zinc-800]="!isAccessorySelected(acc.id)"
                    [class.bg-black]="!isAccessorySelected(acc.id)"
                    class="p-4 rounded-2xl border text-left transition-all cursor-pointer hover:border-zinc-600 flex flex-col justify-between space-y-3">
                    <div>
                      <div class="text-2xl mb-1.5">{{ acc.icon }}</div>
                      <span class="font-bold text-xs text-white block">{{ acc.name }}</span>
                      <span class="text-[10px] text-zinc-400 font-sans block mt-1 leading-relaxed">{{ acc.detail }}</span>
                    </div>
                    <div class="flex items-center justify-between pt-2 border-t border-zinc-900 text-xs">
                      <span class="font-bold text-white">+₹{{ acc.price }}</span>
                      <span [class.text-white]="isAccessorySelected(acc.id)" [class.text-zinc-600]="!isAccessorySelected(acc.id)" class="text-[10px] font-bold">
                        {{ isAccessorySelected(acc.id) ? 'ADDED ✓' : '+ ADD' }}
                      </span>
                    </div>
                  </button>
                }
              </div>
            </div>

            <!-- STEP 3: PACKAGING -->
            <div class="p-6 sm:p-7 rounded-3xl bg-zinc-950 border border-zinc-800 space-y-5">
              <div class="flex items-center justify-between border-b border-zinc-800/80 pb-3">
                <div class="flex items-center gap-2.5">
                  <span class="w-6 h-6 rounded-full bg-white text-black text-xs font-bold flex items-center justify-center font-display">3</span>
                  <h3 class="text-base sm:text-lg font-black text-white uppercase font-display tracking-tight">Presentation &amp; Packaging</h3>
                </div>
                <span class="text-[10px] text-zinc-400 uppercase">Custom Sleeves Included</span>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                @for (pkg of packagingOptions; track pkg.id) {
                  <button 
                    (click)="selectedPackaging.set(pkg.id)"
                    type="button" 
                    [class.border-white]="selectedPackaging() === pkg.id"
                    [class.bg-zinc-900]="selectedPackaging() === pkg.id"
                    [class.border-zinc-800]="selectedPackaging() !== pkg.id"
                    [class.bg-black]="selectedPackaging() !== pkg.id"
                    class="p-4 rounded-2xl border text-left transition-all cursor-pointer hover:border-zinc-600 flex flex-col justify-between space-y-3">
                    <div>
                      <div class="text-2xl mb-1.5">{{ pkg.icon }}</div>
                      <span class="font-bold text-xs text-white block">{{ pkg.name }}</span>
                      <span class="text-[10px] text-zinc-400 font-sans block mt-1 leading-relaxed">{{ pkg.desc }}</span>
                    </div>
                    <div class="pt-2 border-t border-zinc-900 text-right">
                      <span [class.text-white]="selectedPackaging() === pkg.id" [class.text-zinc-600]="selectedPackaging() !== pkg.id" class="text-[10px] font-bold">
                        {{ selectedPackaging() === pkg.id ? 'SELECTED ✓' : 'SELECT' }}
                      </span>
                    </div>
                  </button>
                }
              </div>
            </div>

          </div>

          <!-- Right Real-Time Bill of Materials (BOM) Live Card (4 cols) -->
          <div class="lg:col-span-4 sticky top-24">
            <div class="p-6 sm:p-7 rounded-3xl bg-zinc-950 border border-zinc-800 shadow-2xl space-y-6 font-mono">
              
              <div class="space-y-1 border-b border-zinc-800 pb-4">
                <span class="text-[10px] text-zinc-400 uppercase tracking-widest font-bold block">LIVE ESTIMATE &bull; 25-KIT BATCH</span>
                <h4 class="text-xl font-black text-white font-display tracking-tight uppercase">BOM Summary</h4>
              </div>

              <!-- Selected Items List -->
              <div class="space-y-3 text-xs">
                <div>
                  <span class="text-zinc-500 uppercase text-[10px] block">Base Garment:</span>
                  <div class="flex items-center justify-between text-zinc-200 mt-0.5">
                    <span class="truncate pr-2">{{ getSelectedApparelName() }}</span>
                    <span class="text-white font-bold shrink-0">{{ getSelectedApparelPrice() }}</span>
                  </div>
                </div>

                <div class="pt-2 border-t border-zinc-900">
                  <span class="text-zinc-500 uppercase text-[10px] block">Selected Merch Items ({{ selectedAccessories().length }}):</span>
                  @if (selectedAccessories().length === 0) {
                    <span class="text-zinc-600 italic text-[11px] block mt-1">No additional items chosen</span>
                  } @else {
                    <div class="space-y-1.5 mt-1.5">
                      @for (accId of selectedAccessories(); track accId) {
                        <div class="flex items-center justify-between text-zinc-300 text-[11px]">
                          <span class="truncate pr-2">&bull; {{ getAccessoryName(accId) }}</span>
                          <span class="text-white shrink-0">{{ getAccessoryPrice(accId) }}</span>
                        </div>
                      }
                    </div>
                  }
                </div>

                <div class="pt-2 border-t border-zinc-900">
                  <span class="text-zinc-500 uppercase text-[10px] block">Packaging &amp; Sleeve:</span>
                  <div class="flex items-center justify-between text-zinc-300 mt-0.5">
                    <span>{{ getSelectedPackagingName() }}</span>
                    <span class="text-white font-bold">Included</span>
                  </div>
                </div>
              </div>

              <!-- Price Ticker Box -->
              <div class="pt-4 border-t border-zinc-800 space-y-2">
                <div class="flex items-baseline justify-between">
                  <span class="text-xs text-zinc-400 uppercase">Estimated Unit Cost:</span>
                  <span class="text-3xl font-black text-white font-display">₹{{ calculateEstimatedKitTotal() }}</span>
                </div>
                <span class="text-[10px] text-zinc-500 block leading-tight">
                  Based on 25-kit batch. 100+ pcs unlocks ₹60/unit factory volume rebate.
                </span>
              </div>

              <!-- Direct B2B Quote Action CTAs (No Cart / Bag) -->
              <div class="space-y-2.5 pt-2">
                <a 
                  [href]="getCustomKitWhatsAppUrl()" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="btn-shimmer bg-white hover:bg-zinc-200 text-black font-black w-full py-3.5 px-4 rounded-2xl text-xs uppercase tracking-wider transition-all cursor-pointer shadow-lg active:scale-95 flex items-center justify-center gap-2">
                  <span>Submit BOM Quote to Factory &nearr;</span>
                </a>

                <a 
                  href="tel:9629986444" 
                  class="w-full py-3 px-4 rounded-2xl border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2">
                  <span>Call Gifting Desk: +91 96299 86444</span>
                </a>
              </div>

              <div class="text-[10px] text-zinc-500 text-center leading-relaxed">
                Free physical sample kit available for verified corporate orders (50+ pcs).
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- ========================================================================= -->
    <!-- 4. EMBELLISHMENT & BRANDING TECHNOLOGIES                                   -->
    <!-- ========================================================================= -->
    <section class="py-16 sm:py-24 bg-zinc-950 font-sans border-b border-zinc-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div class="text-center max-w-2xl mx-auto space-y-3">
          <span class="text-xs font-mono text-zinc-400 font-bold uppercase tracking-widest block">FACTORY EMBELLISHMENT SUITE</span>
          <div class="overflow-hidden">
            <h2 class="letter-reveal text-3xl sm:text-4xl font-black text-white font-display uppercase tracking-tight">
              How We Brand Your Merchandise
            </h2>
          </div>
          <p class="text-xs sm:text-sm text-zinc-400">
            Every product inside your kit is personalized with calibrated machinery for high durability and export-grade handfeel.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs">
          
          <div class="scroll-reveal stagger-1 p-6 rounded-3xl bg-black border border-zinc-800 space-y-3 hover:border-zinc-500 transition-all shadow-md hover-lift-sm">
            <div class="w-10 h-10 rounded-2xl bg-zinc-900 flex items-center justify-center text-lg border border-zinc-700">
              💎
            </div>
            <h4 class="font-bold text-base text-white font-display">High-Density 3D Silicone</h4>
            <p class="text-zinc-400 leading-relaxed font-sans text-xs">
              Premium polo shirts, heavyweight hoodies, and caps. Creates 1.5mm elevated tactile relief with velvety texture and stretch recovery.
            </p>
            <span class="text-[10px] text-zinc-300 font-bold block uppercase">PREMIUM STREETWEAR GRADE</span>
          </div>

          <div class="scroll-reveal stagger-2 p-6 rounded-3xl bg-black border border-zinc-800 space-y-3 hover:border-zinc-500 transition-all shadow-md hover-lift-sm">
            <div class="w-10 h-10 rounded-2xl bg-zinc-900 flex items-center justify-center text-lg border border-zinc-700">
              ⚡
            </div>
            <h4 class="font-bold text-base text-white font-display">Fiber Laser Engraving</h4>
            <p class="text-zinc-400 leading-relaxed font-sans text-xs">
              Stainless steel tumblers, vacuum flasks, brass pens, and bamboo notebooks. Permanent metallic finish that never fades or peels.
            </p>
            <span class="text-[10px] text-zinc-300 font-bold block uppercase">PERMANENT &bull; INDIVIDUAL NAMES</span>
          </div>

          <div class="scroll-reveal stagger-3 p-6 rounded-3xl bg-black border border-zinc-800 space-y-3 hover:border-zinc-500 transition-all shadow-md hover-lift-sm">
            <div class="w-10 h-10 rounded-2xl bg-zinc-900 flex items-center justify-center text-lg border border-zinc-700">
              🎨
            </div>
            <h4 class="font-bold text-base text-white font-display">2400 DPI DTF Transfers</h4>
            <p class="text-zinc-400 leading-relaxed font-sans text-xs">
              Photorealistic full-color prints with ultra-soft hand feel. Exceptional vibrancy on both light and dark cotton textiles.
            </p>
            <span class="text-[10px] text-zinc-300 font-bold block uppercase">50+ WASH FASTNESS</span>
          </div>

          <div class="scroll-reveal stagger-4 p-6 rounded-3xl bg-black border border-zinc-800 space-y-3 hover:border-zinc-500 transition-all shadow-md hover-lift-sm">
            <div class="w-10 h-10 rounded-2xl bg-zinc-900 flex items-center justify-center text-lg border border-zinc-700">
              🧵
            </div>
            <h4 class="font-bold text-base text-white font-display">Tajima Embroidery</h4>
            <p class="text-zinc-400 leading-relaxed font-sans text-xs">
              Cotton pique polos (220 GSM), baseball caps, and structured laptop bags. Multi-thread Japanese embroidery with crisp edge definition.
            </p>
            <span class="text-[10px] text-zinc-300 font-bold block uppercase">HIGH-DENSITY EMBROIDERY</span>
          </div>

        </div>

      </div>
    </section>

    <!-- ========================================================================= -->
    <!-- 5. 4-STEP B2B ORDER WORKFLOW                                              -->
    <!-- ========================================================================= -->
    <section class="py-16 sm:py-20 bg-black font-sans border-b border-zinc-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div class="text-center space-y-2">
          <span class="text-xs font-mono text-zinc-400 font-bold uppercase tracking-widest block">ORDER WITH CONFIDENCE</span>
          <h2 class="text-2xl sm:text-3xl font-black text-white font-display uppercase tracking-tight">
            Seamless 4-Step Production Process
          </h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs">
          <div class="p-6 rounded-2xl bg-zinc-950 border border-zinc-850 space-y-3">
            <div class="text-xs font-black text-white font-display">01 / DISCOVERY</div>
            <h4 class="text-sm font-bold text-white font-sans">Share Logo &amp; Quantities</h4>
            <p class="text-zinc-400 font-sans leading-relaxed">
              Submit your preferred bundle or custom BOM specification with your brand guideline book and vector logo files.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-zinc-950 border border-zinc-850 space-y-3">
            <div class="text-xs font-black text-white font-display">02 / PROOFING</div>
            <h4 class="text-sm font-bold text-white font-sans">24h 3D Digital Proof</h4>
            <p class="text-zinc-400 font-sans leading-relaxed">
              Our pre-press design engineers render 360° photorealistic mockups with exact PANTONE color matches for your sign-off.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-zinc-950 border border-zinc-850 space-y-3">
            <div class="text-xs font-black text-white font-display">03 / FABRICATION</div>
            <h4 class="text-sm font-bold text-white font-sans">Precision Production</h4>
            <p class="text-zinc-400 font-sans leading-relaxed">
              Textiles are knitted, dyed, and embellished in our certified factory hub. Merchandise is assembled in luxury keepsake boxes.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-zinc-950 border border-zinc-850 space-y-3">
            <div class="text-xs font-black text-white font-display">04 / DISPATCH</div>
            <h4 class="text-sm font-bold text-white font-sans">Express Pan-India Logistics</h4>
            <p class="text-zinc-400 font-sans leading-relaxed">
              Bulk kits are palletized or individually drop-shipped directly to team members across India with active live tracking.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ========================================================================= -->
    <!-- 6. CORPORATE GIFTING FAQ & PROTOTYPE ASSURANCE                             -->
    <!-- ========================================================================= -->
    <section class="py-16 sm:py-24 bg-zinc-950 font-sans border-b border-zinc-900">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div class="text-center space-y-3">
          <span class="text-xs font-mono text-zinc-400 font-bold uppercase tracking-widest block">FREQUENTLY ASKED QUESTIONS</span>
          <div class="overflow-hidden">
            <h2 class="letter-reveal text-3xl sm:text-4xl font-black text-white font-display tracking-tight uppercase">
              Corporate Gifting &amp; Bulk Orders
            </h2>
          </div>
        </div>

        <div class="space-y-3.5">
          @for (faq of faqs; track faq.question; let idx = $index) {
            <div class="rounded-2xl bg-black border border-zinc-850 overflow-hidden transition-all duration-300 hover:border-zinc-700 shadow-md">
              <button 
                (click)="toggleFaq(idx)"
                type="button" 
                class="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer group">
                <h4 class="font-bold text-sm sm:text-base text-white font-display group-hover:text-zinc-200 transition-colors">
                  {{ faq.question }}
                </h4>
                <div class="w-7 h-7 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 group-hover:text-white transition-all shrink-0">
                  <span class="text-sm font-mono font-bold transition-transform duration-300" [class.rotate-45]="openFaqIndex() === idx">
                    +
                  </span>
                </div>
              </button>

              @if (openFaqIndex() === idx) {
                <div class="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans border-t border-zinc-900/80 animate-fadeIn">
                  {{ faq.answer }}
                </div>
              }
            </div>
          }
        </div>

        <!-- Technical Assistance Support Box at bottom of FAQ -->
        <div class="p-6 sm:p-8 rounded-3xl bg-black border border-zinc-850 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div class="space-y-1 text-center sm:text-left">
            <h4 class="text-base font-bold text-white uppercase tracking-tight">
              Ready to create your enterprise gift box?
            </h4>
            <p class="text-xs text-zinc-400">
              Speak directly with our B2B merchandise engineers for sample packs and custom GST invoicing.
            </p>
          </div>

          <div class="flex items-center gap-3 shrink-0">
            <a href="https://wa.me/919629986444?text=Hi%20Brand%20Peoples,%20I%20want%20to%20order%20corporate%20gift%20kits." 
               target="_blank" 
               rel="noopener noreferrer"
               class="btn-shimmer hover-lift-sm px-5 py-2.5 rounded-full bg-white hover:bg-zinc-200 text-black text-xs font-mono font-black uppercase transition-all duration-300 flex items-center gap-2 shadow-bw">
              <span>WhatsApp Merchandiser</span>
              <span class="text-xs">&nearr;</span>
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
export class GiftKitsComponent {
  activeCategory = signal<'all' | 'onboarding' | 'executive' | 'active' | 'eco' | 'events'>('all');
  openFaqIndex = signal<number | null>(0);

  toggleFaq(index: number): void {
    this.openFaqIndex.update(current => current === index ? null : index);
  }

  categories: { key: 'all' | 'onboarding' | 'executive' | 'active' | 'eco' | 'events'; label: string }[] = [
    { key: 'all', label: 'All Bundles (7)' },
    { key: 'onboarding', label: 'Onboarding (2)' },
    { key: 'executive', label: 'Executive VIP (2)' },
    { key: 'active', label: 'Active & Sports (1)' },
    { key: 'eco', label: 'Sustainable Eco (1)' },
    { key: 'events', label: 'Events & Expo (1)' },
  ];

  faqs: FaqItem[] = [
    {
      question: 'Can we personalize each kit with individual employee names?',
      answer: 'Yes. For executive desk packs, water bottles, and metal pens, our fiber laser engraving setup allows 1-to-1 individual recipient names alongside your corporate company emblem at a nominal per-unit personalization fee.'
    },
    {
      question: 'What is the turnaround time for bulk gift boxes?',
      answer: 'Standard pre-curated packages ship within 3 to 5 business days after digital mockup sign-off. For custom-designed packaging sleeves or bespoke color match orders, dispatch timeline is 7 to 10 business days with pan-India express logistics.'
    },
    {
      question: 'Can we order a physical sample box before approving the whole batch?',
      answer: 'Absolutely. We provide physical pre-production sample kits and fabric swatch packs for verified corporate buyers. Contact our merchandising desk on WhatsApp (+91 96299 86444) to request a prototype kit with your logo.'
    },
    {
      question: 'Do you support multi-location individual employee home drop-shipping?',
      answer: 'Yes. For distributed and remote-first teams across India, you can provide an address CSV roster. We individually pack, bubble-wrap, and dispatch directly to each employee with automated SMS/WhatsApp tracking.'
    },
    {
      question: 'Is GST tax invoicing provided for corporate accounting?',
      answer: 'Yes. Every corporate order is issued with a complete 18% or 12% GST-compliant tax invoice showing your company name and GSTIN for full input tax credit (ITC) reconciliation.'
    }
  ];

  // Enriched Bundles using actual valid high-resolution images from the project
  bundles: EnrichedBundle[] = [
    {
      code: 'GIFT-V101',
      name: 'Welcome Onboard Kit',
      tagline: 'First-Day Delight for New Team Joinees',
      category: 'onboarding',
      categoryBadge: 'Onboarding Suite',
      target: 'New hire onboarding, developer welcomes & startup day-one packs',
      items: [
        '1× Standard Cotton Round Neck T-Shirt (180 GSM Bio-Washed)',
        '1× Matte Ceramic Coffee Mug (350ml with Logo)',
        '1× Classic Precision Click Ballpoint Pen',
        '1× Welcome Note Card & Custom Box Sleeve'
      ],
      moq: 'Min 25 Kits',
      estimatedPrice: '₹799 / kit',
      turnaround: '3–5 Days',
      boxType: 'Magnetic Rigid Box',
      branding: '2400 DPI DTF + Pad Print',
      badge: 'Best Seller',
      image: 'images/bw/hero_unique_6_corporate.jpg'
    },
    {
      code: 'GIFT-V102',
      name: 'Executive VIP Desk Pack',
      tagline: 'High-Impact Client & Manager Appreciation',
      category: 'executive',
      categoryBadge: 'Executive & VIP',
      target: 'Client appreciation gifts, executive rewards & board member packs',
      items: [
        '1× Executive Metal Rollerball Pen (Precision Etched)',
        '1× 304 Stainless Steel Vacuum Tumbler (500ml)',
        '1× Hardbound Leatherette A5 Ruled Journal',
        '1× Magnetic Luxury Keepsake Box'
      ],
      moq: 'Min 25 Kits',
      estimatedPrice: '₹1,249 / kit',
      turnaround: '3–5 Days',
      boxType: 'Magnetic Rigid Luxury Box',
      branding: 'Fiber Laser Engraving + Foil Stamping',
      badge: 'Premium VIP',
      image: 'images/products/water_bottle_branding.jpg'
    },
    {
      code: 'GIFT-V103',
      name: 'Fitness & Marathon Pack',
      tagline: 'Health Drives & Sports Day Recognition',
      category: 'active',
      categoryBadge: 'Active & Sports',
      target: 'Company sports tournaments, annual marathons & wellness drives',
      items: [
        '1× Performance Activewear Tee (160 GSM Quick-Dry Dot-Knit)',
        '1× Water-Resistant Sports Duffle Gym Bag',
        '1× Stainless Steel Sports Water Flask with Carabiner Clip',
        '1× Quick-Dry Sports Sweat Wristband'
      ],
      moq: 'Min 25 Kits',
      estimatedPrice: '₹949 / kit',
      turnaround: '4–6 Days',
      boxType: 'Water-Resistant Drawstring Kit Bag',
      branding: 'Breathable Sublimation + Laser Marking',
      image: 'images/bw/hero_unique_3_activewear.jpg'
    },
    {
      code: 'GIFT-V104',
      name: 'Sustainable Eco Gift Set',
      tagline: 'Zero-Plastic & Earth-Positive Corporate Gifting',
      category: 'eco',
      categoryBadge: 'Sustainable Eco',
      target: 'ESG initiatives, sustainability summits & eco-friendly brands',
      items: [
        '1× Heavyweight Organic Cotton Canvas Tote Bag',
        '1× Recycled Cork & Bamboo Bound A5 Ruled Diary',
        '1× Bamboo Wood Push-Action Ballpoint Pen',
        '1× Borosilicate Glass Infuser Bottle with Bamboo Cap'
      ],
      moq: 'Min 25 Kits',
      estimatedPrice: '₹899 / kit',
      turnaround: '4–6 Days',
      boxType: 'Recycled Kraft Carton + Soy Ink Print',
      branding: 'Eco Water-Based Inks + Laser Etch',
      badge: 'Eco Choice',
      image: 'images/products/fine_art_canvas_painting.jpg'
    },
    {
      code: 'GIFT-V105',
      name: 'Corporate Uniform & Polo Kit',
      tagline: 'Refined Workwear for Tech Teams & Support Staff',
      category: 'onboarding',
      categoryBadge: 'Apparel Suite',
      target: 'Engineering teams, retail branch staff & client-facing crew',
      items: [
        '2× Premium Combed Cotton Pique Polos (220 GSM Bio-Washed)',
        '1× Water-Resistant Padded 15.6" Laptop Sleeve with Logo',
        '1× Metal Keychain with Custom 3D Laser Relief',
        '1× Custom Branded Heavy Cardboard Presentation Box'
      ],
      moq: 'Min 25 Kits',
      estimatedPrice: '₹1,099 / kit',
      turnaround: '5–7 Days',
      boxType: 'Reinforced Shipping Outer Box',
      branding: 'High-Density 3D Silicone + Tajima Embroidery',
      image: 'images/products/pique_polo_240.jpg'
    },
    {
      code: 'GIFT-V106',
      name: 'Luxury Founder Leadership Box',
      tagline: 'Top Milestone Achievers & Founder Recognition',
      category: 'executive',
      categoryBadge: 'Leadership & Founder',
      target: 'Annual gala awards, leadership summits & 5-year loyalty recognition',
      items: [
        '1× Heavyweight French Terry Hoodie (380 GSM Streetwear)',
        '1× Matte Black Insulated Thermal Flask Tumbler (600ml)',
        '1× Stainless Steel Cartridge Fountain Pen',
        '1× Weekend Travel Duffle with Leather Trim'
      ],
      moq: 'Min 25 Kits',
      estimatedPrice: '₹2,199 / kit',
      turnaround: '5–7 Days',
      boxType: 'Custom Velvet-Lined Rigid Box',
      branding: 'Gold Foil Stamping + 3D Silicone Relief',
      badge: 'Luxury Tier',
      image: 'images/bw/hero_unique_2_hoodie.jpg'
    },
    {
      code: 'GIFT-V107',
      name: 'Trade Fair & Expo Pack',
      tagline: 'High-Volume Swag for Booth Visitors & Press',
      category: 'events',
      categoryBadge: 'Events & Expo',
      target: 'Tech expos, industry trade fairs, product launches & press events',
      items: [
        '1× Lightweight Promotional Event T-Shirt (160 GSM Cotton)',
        '1× Structured 6-Panel Twill Cap with Metal Buckle',
        '1× Recycled Wheat Straw Ballpoint Pen',
        '1× Non-Woven Branded Tote Bag with Reinforced Handles'
      ],
      moq: 'Min 50 Kits',
      estimatedPrice: '₹499 / kit',
      turnaround: '3–5 Days',
      boxType: 'Lightweight Presentation Pack',
      branding: 'High-Speed Automated Screen Printing',
      badge: 'High Volume',
      image: 'images/bw/hero_unique_4_caps.jpg'
    }
  ];

  filteredBundles = computed(() => {
    const cat = this.activeCategory();
    if (cat === 'all') return this.bundles;
    return this.bundles.filter(b => b.category === cat);
  });

  // Configurator data
  apparelOptions = [
    { id: 'tee180', name: 'Round Neck Cotton Tee', gsm: '180 GSM', desc: '100% bio-washed combed cotton, soft ribbed collar', priceEst: '₹349' },
    { id: 'tee240', name: 'Streetwear Oversized Tee', gsm: '240 GSM', desc: 'Heavyweight drop shoulder with double stitched seams', priceEst: '₹489' },
    { id: 'polo220', name: 'Pique Knit Polo Shirt', gsm: '220 GSM', desc: 'Combed cotton pique with reinforced placket', priceEst: '₹449' },
    { id: 'active160', name: 'Performance Sports Tee', gsm: '160 GSM', desc: 'Moisture wicking dot-knit polyester', priceEst: '₹329' }
  ];

  accessoryOptions = [
    { id: 'tumbler', name: '500ml Vacuum Tumbler', icon: '🥤', detail: 'Laser-engraved logo, keeps hot/cold 12h', price: 349 },
    { id: 'mug', name: 'Ceramic Coffee Mug (350ml)', icon: '☕', detail: 'Gloss white with full-color wrap print', price: 189 },
    { id: 'pen_metal', name: 'Executive Metal Rollerball Pen', icon: '✍️', detail: 'Weighted brass barrel with precision engraving', price: 149 },
    { id: 'notebook', name: 'Hardbound A5 Leatherette Journal', icon: '📓', detail: '192 ruled pages with ribbon bookmark', price: 219 },
    { id: 'tote', name: 'Canvas Tote Bag', icon: '🛍️', detail: 'Heavy cotton canvas with long shoulder handles', price: 179 },
    { id: 'cap', name: 'Structured 6-Panel Cap', icon: '🧢', detail: 'Combed cotton twill with brass buckle strap', price: 229 }
  ];

  packagingOptions = [
    { id: 'rigid', name: 'Magnetic Rigid Luxury Box', icon: '🎁', desc: 'Matte black or custom branded with foam insert' },
    { id: 'kraft', name: 'Eco Kraft Presentation Carton', icon: '📦', desc: '100% biodegradable corrugated cardboard with color sleeve' },
    { id: 'tote_pack', name: 'Cotton Drawstring Swag Bag', icon: '🎒', desc: 'Reusable cotton bag, ideal for event giveaways' }
  ];

  selectedApparel = signal<string>('tee180');
  selectedAccessories = signal<string[]>(['tumbler', 'pen_metal']);
  selectedPackaging = signal<string>('rigid');

  isAccessorySelected(id: string): boolean {
    return this.selectedAccessories().includes(id);
  }

  toggleAccessory(id: string): void {
    this.selectedAccessories.update(current => {
      if (current.includes(id)) {
        return current.filter(i => i !== id);
      } else {
        return [...current, id];
      }
    });
  }

  getSelectedApparelName(): string {
    return this.apparelOptions.find(a => a.id === this.selectedApparel())?.name || 'Round Neck Cotton Tee';
  }

  getSelectedApparelPrice(): string {
    return this.apparelOptions.find(a => a.id === this.selectedApparel())?.priceEst || '₹349';
  }

  getAccessoryName(id: string): string {
    return this.accessoryOptions.find(a => a.id === id)?.name || id;
  }

  getAccessoryPrice(id: string): string {
    const acc = this.accessoryOptions.find(a => a.id === id);
    return acc ? `₹${acc.price}` : '';
  }

  getSelectedPackagingName(): string {
    return this.packagingOptions.find(p => p.id === this.selectedPackaging())?.name || 'Magnetic Rigid Luxury Box';
  }

  calculateEstimatedKitTotal(): number {
    let base = 349;
    if (this.selectedApparel() === 'tee240') base = 489;
    if (this.selectedApparel() === 'polo220') base = 449;
    if (this.selectedApparel() === 'active160') base = 329;

    let accTotal = 0;
    for (const accId of this.selectedAccessories()) {
      const match = this.accessoryOptions.find(a => a.id === accId);
      if (match) accTotal += match.price;
    }

    let pkgCost = 150;
    if (this.selectedPackaging() === 'kraft') pkgCost = 80;
    if (this.selectedPackaging() === 'tote_pack') pkgCost = 90;

    return base + accTotal + pkgCost;
  }

  getWhatsAppUrl(bundle: EnrichedBundle): string {
    const text = encodeURIComponent(
      `Hello Brand Peoples Factory Team!\n\nI am interested in bulk ordering the *${bundle.name}* (${bundle.code}).\n\n• Target: ${bundle.target}\n• MOQ: ${bundle.moq}\n• Packaging: ${bundle.boxType}\n\nPlease share quantity discount tiers (25 / 100 / 500 pcs) and mock-up design process.`
    );
    return `https://wa.me/919629986444?text=${text}`;
  }

  getCustomKitWhatsAppUrl(): string {
    const apparel = this.getSelectedApparelName();
    const accessories = this.selectedAccessories().map(id => this.getAccessoryName(id)).join(', ');
    const packaging = this.getSelectedPackagingName();
    const total = this.calculateEstimatedKitTotal();

    const text = encodeURIComponent(
      `Hello Brand Peoples Factory Team!\n\nI built a Custom Gift Kit on your website:\n• Base Apparel: ${apparel}\n• Accessories: ${accessories || 'None'}\n• Packaging: ${packaging}\n• Estimated Unit Rate: ₹${total}\n\nPlease advise on bulk ordering, logo mockup generation, and sample dispatch.`
    );
    return `https://wa.me/919629986444?text=${text}`;
  }
}
