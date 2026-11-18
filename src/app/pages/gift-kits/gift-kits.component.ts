import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';

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
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
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

              <a href="https://wa.me/919944107633?text=Hi%20Brand%20Peoples%20Factory,%20I%20want%20to%20curate%20a%20custom%20gift%20box%20for%20our%20company." 
                 target="_blank" 
                 rel="noopener noreferrer"
                 class="px-5 py-3.5 rounded-full border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 text-xs font-mono transition-all flex items-center gap-1.5">
                <span>Direct WhatsApp</span>
                <span class="text-emerald-400">&nearr;</span>
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

              <!-- Bundle Visual Mockup -->
              <div class="aspect-4/3 rounded-2xl bg-zinc-900 overflow-hidden relative border border-zinc-800 flex items-center justify-center group">
                <img 
                  src="images/bw/hero_unique_6_corporate.jpg" 
                  alt="Welcome Onboard Corporate Swag Box" 
                  class="w-full h-full object-cover grayscale contrast-115 group-hover:scale-105 transition-transform duration-500" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex items-end p-5">
                  <div class="text-white space-y-1">
                    <span class="text-[10px] font-mono uppercase tracking-widest text-emerald-400 block font-bold">BEST SELLER ONBOARDING</span>
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

              <!-- Quick CTA in card -->
              <div class="pt-3 flex items-center justify-between border-t border-zinc-800">
                <div>
                  <span class="text-[10px] font-mono text-zinc-500 block uppercase">Turnkey Unit Cost</span>
                  <span class="text-base sm:text-lg font-black text-white font-mono">From ₹799 <small class="text-zinc-400 font-normal text-xs">/ kit</small></span>
                </div>
                <button 
                  (click)="addFeaturedBundle()" 
                  class="btn-shimmer bg-white hover:bg-zinc-200 text-black font-black px-4 py-2 rounded-xl text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md active:scale-95 flex items-center gap-1.5">
                  <span>Add To Bag</span>
                  <span>+</span>
                </button>
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
            <span class="text-xs font-mono text-emerald-400 font-bold uppercase tracking-widest block flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>READY-TO-SHIP OR FULLY CUSTOMIZED</span>
            </span>
            <h2 class="text-3xl sm:text-4xl font-black tracking-tight text-white font-display uppercase">
              Curated Gift Packages
            </h2>
            <p class="text-xs sm:text-sm text-zinc-400 max-w-xl">
              Turnkey corporate gifting suites. Add your company emblem, team member names, and brand color palette to every piece.
            </p>
          </div>

          <!-- Category Filter Pills -->
          <div class="flex flex-wrap items-center gap-1.5 font-mono">
            @for (tab of categories; track tab.key) {
              <button 
                (click)="activeCategory.set(tab.key)"
                [class.bg-white]="activeCategory() === tab.key"
                [class.text-black]="activeCategory() === tab.key"
                [class.font-bold]="activeCategory() === tab.key"
                [class.bg-zinc-900]="activeCategory() !== tab.key"
                [class.text-zinc-400]="activeCategory() !== tab.key"
                class="px-3.5 py-1.5 rounded-full text-xs transition-all border border-zinc-800 hover:border-zinc-600 cursor-pointer whitespace-nowrap">
                {{ tab.label }}
              </button>
            }
          </div>
        </div>

        <!-- Bundles Grid (3-Col Luxury Industrial Cards) -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (b of filteredBundles(); track b.code) {
            <article class="bg-black rounded-3xl border border-zinc-800 overflow-hidden flex flex-col group hover:border-zinc-600 transition-all duration-300 shadow-xl">
              
              <!-- Card Top Visual / Header -->
              <div class="relative h-56 bg-zinc-900 overflow-hidden">
                <img 
                  [src]="b.image" 
                  [alt]="b.name" 
                  class="w-full h-full object-cover grayscale contrast-110 transition-transform duration-500 group-hover:scale-105" />
                <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                <!-- Floating Code & Category Badge -->
                <div class="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                  <span class="px-2.5 py-1 rounded-full bg-black/90 backdrop-blur-md text-white text-[10px] font-mono font-bold tracking-wider uppercase border border-zinc-700 shadow-md">
                    {{ b.code }}
                  </span>
                  @if (b.badge) {
                    <span class="px-2.5 py-1 rounded-full bg-white text-black text-[10px] font-mono font-bold tracking-wider uppercase shadow-md border border-white">
                      {{ b.badge }}
                    </span>
                  }
                </div>

                <!-- Bottom Header on visual -->
                <div class="absolute bottom-3.5 left-4 right-4 text-white z-10">
                  <span class="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block font-semibold">{{ b.categoryBadge }}</span>
                  <h3 class="text-xl font-bold font-display leading-tight truncate text-white">{{ b.name }}</h3>
                </div>
              </div>

              <!-- Card Body -->
              <div class="p-6 flex-1 flex flex-col justify-between space-y-6">
                
                <div class="space-y-4">
                  <!-- Tagline & Target -->
                  <div>
                    <p class="text-xs font-bold text-white uppercase tracking-wide font-mono">{{ b.tagline }}</p>
                    <p class="text-xs text-zinc-400 mt-1 leading-relaxed">{{ b.target }}</p>
                  </div>

                  <!-- Included Items Checklist -->
                  <div class="space-y-2 pt-2 border-t border-zinc-800/80">
                    <span class="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block font-bold">Package Contents:</span>
                    <ul class="space-y-2">
                      @for (item of b.items; track item) {
                        <li class="flex items-start gap-2 text-xs text-zinc-300">
                          <span class="text-emerald-400 font-bold shrink-0 mt-0.5">&check;</span>
                          <span class="leading-relaxed">{{ item }}</span>
                        </li>
                      }
                    </ul>
                  </div>

                  <!-- Spec Metadata Pills -->
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

                <!-- Footer with Action Buttons -->
                <div class="pt-4 border-t border-zinc-800/80 space-y-3 font-mono">
                  <div class="flex items-center justify-between">
                    <div>
                      <span class="text-[10px] text-zinc-500 uppercase block">Starting Tier</span>
                      <span class="text-lg font-black text-white font-display">{{ b.estimatedPrice }}</span>
                    </div>
                    <span class="text-[10px] text-zinc-500">Tiered bulk discounts</span>
                  </div>

                  <div class="grid grid-cols-2 gap-2">
                    <button 
                      (click)="addBundle(b)" 
                      class="btn-shimmer bg-white hover:bg-zinc-200 text-black font-black py-2.5 px-3 rounded-xl text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-sm active:scale-95">
                      <span>Add To Bag</span>
                      <span>+</span>
                    </button>

                    <a 
                      [href]="getWhatsAppUrl(b)" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      class="bg-zinc-900 text-zinc-300 border border-zinc-700 hover:bg-zinc-800 hover:text-white py-2.5 px-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-1 hover:border-zinc-500">
                      <span>WhatsApp Quote</span>
                      <span>&nearr;</span>
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
          <h2 class="text-3xl sm:text-5xl font-black text-white font-display tracking-tight uppercase">
            Build Your Custom Kit
          </h2>
          <p class="text-xs sm:text-sm text-zinc-400 leading-relaxed font-mono">
            Select your base apparel blank, choose curated accessories, and configure presentation packaging. Instant live cost calculator and 1-click WhatsApp BOM submission.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <!-- Configuration Options (8 cols) -->
          <div class="lg:col-span-8 space-y-6">
            
            <!-- Step 1: Base Apparel Blank -->
            <div class="bg-zinc-950 rounded-3xl p-6 sm:p-7 border border-zinc-800 shadow-xl space-y-4">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <span class="w-7 h-7 rounded-full bg-white text-black text-xs font-mono font-bold flex items-center justify-center">1</span>
                  <h3 class="font-bold text-base sm:text-lg text-white font-display uppercase">Select Base Garment</h3>
                </div>
                <span class="text-xs font-mono text-zinc-400">100% Bio-Washed Combed Cotton</span>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                @for (app of apparelOptions; track app.id) {
                  <button 
                    (click)="selectedApparel.set(app.id)"
                    [class.border-white]="selectedApparel() === app.id"
                    [class.bg-zinc-900]="selectedApparel() === app.id"
                    [class.border-zinc-800]="selectedApparel() !== app.id"
                    class="p-4 rounded-2xl border text-left transition-all cursor-pointer hover:border-zinc-600 flex flex-col justify-between">
                    <div class="flex items-start justify-between">
                      <span class="font-bold text-xs sm:text-sm text-white">{{ app.name }}</span>
                      <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-950 text-zinc-400 border border-zinc-800">{{ app.gsm }}</span>
                    </div>
                    <span class="text-[11px] text-zinc-400 mt-1 font-mono">{{ app.desc }}</span>
                    <span class="text-xs font-bold text-white mt-2 block font-mono">{{ app.priceEst }}</span>
                  </button>
                }
              </div>
            </div>

            <!-- Step 2: Drinkware & Desk Merchandise -->
            <div class="bg-zinc-950 rounded-3xl p-6 sm:p-7 border border-zinc-800 shadow-xl space-y-4">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <span class="w-7 h-7 rounded-full bg-white text-black text-xs font-mono font-bold flex items-center justify-center">2</span>
                  <h3 class="font-bold text-base sm:text-lg text-white font-display uppercase">Select Curated Accessories</h3>
                </div>
                <span class="text-xs font-mono text-zinc-400">Select multiple items</span>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                @for (acc of accessoryOptions; track acc.id) {
                  <button 
                    (click)="toggleAccessory(acc.id)"
                    [class.border-white]="isAccessorySelected(acc.id)"
                    [class.bg-zinc-900]="isAccessorySelected(acc.id)"
                    [class.border-zinc-800]="!isAccessorySelected(acc.id)"
                    class="p-4 rounded-2xl border text-left transition-all cursor-pointer hover:border-zinc-600 flex flex-col justify-between">
                    <div>
                      <div class="flex items-center justify-between mb-1">
                        <span class="text-xl">{{ acc.icon }}</span>
                        @if (isAccessorySelected(acc.id)) {
                          <span class="w-4 h-4 rounded-full bg-emerald-400 text-black text-[9px] font-bold flex items-center justify-center">&check;</span>
                        }
                      </div>
                      <span class="font-bold text-xs text-white block">{{ acc.name }}</span>
                      <span class="text-[10px] text-zinc-400 block mt-0.5 font-mono">{{ acc.detail }}</span>
                    </div>
                    <span class="text-xs font-bold text-white mt-2 block font-mono">+₹{{ acc.price }}</span>
                  </button>
                }
              </div>
            </div>

            <!-- Step 3: Custom Packaging Box -->
            <div class="bg-zinc-950 rounded-3xl p-6 sm:p-7 border border-zinc-800 shadow-xl space-y-4">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <span class="w-7 h-7 rounded-full bg-white text-black text-xs font-mono font-bold flex items-center justify-center">3</span>
                  <h3 class="font-bold text-base sm:text-lg text-white font-display uppercase">Select Packaging Style</h3>
                </div>
                <span class="text-xs font-mono text-zinc-400">Zero Plastic Options</span>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                @for (pkg of packagingOptions; track pkg.id) {
                  <button 
                    (click)="selectedPackaging.set(pkg.id)"
                    [class.border-white]="selectedPackaging() === pkg.id"
                    [class.bg-zinc-900]="selectedPackaging() === pkg.id"
                    [class.border-zinc-800]="selectedPackaging() !== pkg.id"
                    class="p-4 rounded-2xl border text-left transition-all cursor-pointer hover:border-zinc-600 flex flex-col justify-between">
                    <div>
                      <span class="text-xl block mb-1">{{ pkg.icon }}</span>
                      <span class="font-bold text-xs text-white block">{{ pkg.name }}</span>
                      <span class="text-[10px] text-zinc-400 block mt-0.5 font-mono">{{ pkg.desc }}</span>
                    </div>
                  </button>
                }
              </div>
            </div>

          </div>

          <!-- Configuration Summary & Instant BOM Order (4 cols sticky) -->
          <div class="lg:col-span-4 sticky top-28 space-y-4 font-mono">
            <div class="bg-zinc-950 rounded-3xl p-6 sm:p-7 border border-zinc-800 shadow-2xl space-y-6">
              
              <div class="space-y-1 pb-4 border-b border-zinc-800">
                <span class="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">LIVE ESTIMATE BILL OF MATERIALS</span>
                <h3 class="text-lg font-black text-white font-display uppercase">Kit Summary</h3>
              </div>

              <!-- Selected Items Manifest -->
              <div class="space-y-3 text-xs">
                <div>
                  <span class="text-zinc-500 uppercase text-[10px] block">Base Garment:</span>
                  <div class="flex items-center justify-between text-zinc-300 font-bold mt-0.5">
                    <span>{{ getSelectedApparelName() }}</span>
                    <span class="text-white">{{ getSelectedApparelPrice() }}</span>
                  </div>
                </div>

                <div class="pt-2 border-t border-zinc-900">
                  <span class="text-zinc-500 uppercase text-[10px] block">Accessories ({{ selectedAccessories().length }}):</span>
                  @if (selectedAccessories().length === 0) {
                    <span class="text-zinc-500 text-[11px] italic">No accessories selected</span>
                  }
                  @for (id of selectedAccessories(); track id) {
                    <div class="flex items-center justify-between text-zinc-300 mt-1">
                      <span class="truncate pr-2">{{ getAccessoryName(id) }}</span>
                      <span class="text-white shrink-0 font-bold">{{ getAccessoryPrice(id) }}</span>
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

              <!-- Action CTAs -->
              <div class="space-y-2.5 pt-2">
                <button 
                  (click)="addCustomKitToBag()" 
                  class="btn-shimmer bg-white hover:bg-zinc-200 text-black font-black w-full py-3.5 rounded-2xl text-xs uppercase tracking-wider transition-all cursor-pointer shadow-lg active:scale-95 flex items-center justify-center gap-2">
                  <span>Add 25-Kit Batch to Bag</span>
                  <span>+</span>
                </button>

                <a 
                  [href]="getCustomKitWhatsAppUrl()" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="w-full py-3 px-4 rounded-2xl border border-zinc-700 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2">
                  <span>WhatsApp BOM to Factory &rarr;</span>
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
          <span class="text-xs font-mono text-white font-bold uppercase tracking-widest block">FACTORY EMBELLISHMENT SUITE</span>
          <h2 class="text-3xl sm:text-4xl font-black text-white font-display uppercase tracking-tight">
            How We Brand Your Merchandise
          </h2>
          <p class="text-xs sm:text-sm text-zinc-400">
            Every product inside your kit is personalized with calibrated machinery for high durability and export-grade handfeel.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs">
          
          <div class="p-6 rounded-3xl bg-black border border-zinc-800 space-y-3 hover:border-zinc-600 transition-all shadow-md">
            <div class="w-10 h-10 rounded-2xl bg-zinc-900 flex items-center justify-center text-lg border border-zinc-700">
              💎
            </div>
            <h4 class="font-bold text-base text-white font-display">High-Density 3D Silicone</h4>
            <p class="text-zinc-400 leading-relaxed font-sans text-xs">
              Premium polo shirts, heavyweight hoodies, and caps. Creates 1.5mm elevated tactile relief with velvety texture and stretch recovery.
            </p>
            <span class="text-[10px] text-emerald-400 font-bold block uppercase">PREMIUM STREETWEAR GRADE</span>
          </div>

          <div class="p-6 rounded-3xl bg-black border border-zinc-800 space-y-3 hover:border-zinc-600 transition-all shadow-md">
            <div class="w-10 h-10 rounded-2xl bg-zinc-900 flex items-center justify-center text-lg border border-zinc-700">
              ⚡
            </div>
            <h4 class="font-bold text-base text-white font-display">Fiber Laser Engraving</h4>
            <p class="text-zinc-400 leading-relaxed font-sans text-xs">
              Stainless steel tumblers, vacuum flasks, brass pens, and bamboo notebooks. Permanent metallic finish that never fades or peels.
            </p>
            <span class="text-[10px] text-emerald-400 font-bold block uppercase">PERMANENT &bull; INDIVIDUAL NAMES</span>
          </div>

          <div class="p-6 rounded-3xl bg-black border border-zinc-800 space-y-3 hover:border-zinc-600 transition-all shadow-md">
            <div class="w-10 h-10 rounded-2xl bg-zinc-900 flex items-center justify-center text-lg border border-zinc-700">
              🎨
            </div>
            <h4 class="font-bold text-base text-white font-display">2400 DPI DTF Transfers</h4>
            <p class="text-zinc-400 leading-relaxed font-sans text-xs">
              Photorealistic full-color prints with ultra-soft hand feel. Exceptional vibrancy on both light and dark cotton textiles.
            </p>
            <span class="text-[10px] text-emerald-400 font-bold block uppercase">50+ WASH FASTNESS</span>
          </div>

          <div class="p-6 rounded-3xl bg-black border border-zinc-800 space-y-3 hover:border-zinc-600 transition-all shadow-md">
            <div class="w-10 h-10 rounded-2xl bg-zinc-900 flex items-center justify-center text-lg border border-zinc-700">
              🧵
            </div>
            <h4 class="font-bold text-base text-white font-display">Tajima Embroidery</h4>
            <p class="text-zinc-400 leading-relaxed font-sans text-xs">
              Cotton pique polos (220 GSM), baseball caps, and structured laptop bags. Multi-thread Japanese embroidery with crisp edge definition.
            </p>
            <span class="text-[10px] text-emerald-400 font-bold block uppercase">HIGH-DENSITY EMBROIDERY</span>
          </div>

        </div>

      </div>
    </section>

    <!-- ========================================================================= -->
    <!-- 5. CORPORATE GIFTING FAQ & PROTOTYPE ASSURANCE                             -->
    <!-- ========================================================================= -->
    <section class="py-16 sm:py-24 bg-black font-sans border-b border-zinc-900">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div class="text-center space-y-3">
          <span class="text-xs font-mono text-zinc-400 font-bold uppercase tracking-widest block">FREQUENTLY ASKED QUESTIONS</span>
          <h2 class="text-3xl sm:text-4xl font-black text-white font-display tracking-tight uppercase">
            Corporate Gifting &amp; Bulk Orders
          </h2>
        </div>

        <div class="space-y-4">
          <div class="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 shadow-xs space-y-2">
            <h4 class="font-bold text-base text-white font-display">
              Can we personalize each kit with individual employee names?
            </h4>
            <p class="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Yes. For executive desk packs, water bottles, and metal pens, our fiber laser engraving setup allows 1-to-1 individual recipient names alongside your corporate company emblem at a nominal per-unit personalization fee.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 shadow-xs space-y-2">
            <h4 class="font-bold text-base text-white font-display">
              What is the turnaround time for bulk gift boxes?
            </h4>
            <p class="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Standard pre-curated packages ship within 3 to 5 business days after digital mockup sign-off. For custom-designed packaging sleeves or bespoke color match orders, dispatch timeline is 7 to 10 business days with pan-India express logistics.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 shadow-xs space-y-2">
            <h4 class="font-bold text-base text-white font-display">
              Can we order a physical sample box before approving the whole batch?
            </h4>
            <p class="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Absolutely. We provide physical pre-production sample kits and fabric swatch packs for verified corporate buyers. Contact our merchandising desk on WhatsApp (+91 99441 07633) to request a prototype kit with your logo.
            </p>
          </div>
        </div>

      </div>
    </section>
  `
})
export class GiftKitsComponent {
  cart = inject(CartService);

  activeCategory = signal<'all' | 'onboarding' | 'executive' | 'active' | 'eco' | 'events'>('all');

  categories: { key: 'all' | 'onboarding' | 'executive' | 'active' | 'eco' | 'events'; label: string }[] = [
    { key: 'all', label: 'All Bundles (7)' },
    { key: 'onboarding', label: 'Onboarding (2)' },
    { key: 'executive', label: 'Executive VIP (2)' },
    { key: 'active', label: 'Active & Sports (1)' },
    { key: 'eco', label: 'Sustainable Eco (1)' },
    { key: 'events', label: 'Events & Expo (1)' },
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
      moq: 'Min 15 Kits',
      estimatedPrice: '₹1,299 / kit',
      turnaround: '4–6 Days',
      boxType: 'Magnetic Rigid Luxury Box',
      branding: 'Fiber Laser Engraving + Foil Stamping',
      badge: 'Premium VIP',
      image: 'images/products/water_bottle_branding.jpg'
    },
    {
      code: 'GIFT-V103',
      name: 'Active Lifestyle Set',
      tagline: 'Fitness, Team Marathons & Wellness Drives',
      category: 'active',
      categoryBadge: 'Active & Sports',
      target: 'Annual corporate sports days, wellness weeks & marathon runners',
      items: [
        '1× Quick-Dry Sports T-Shirt (160 GSM Dot Knit Wicking)',
        '1× Water-Resistant Sports Duffle Gym Bag',
        '1× Matte Aluminum Water Bottle (750ml)',
        '1× Soft-Touch Rubberized Gel Grip Pen'
      ],
      moq: 'Min 25 Kits',
      estimatedPrice: '₹1,149 / kit',
      turnaround: '4–6 Days',
      boxType: 'Water-Resistant Drawstring Kit Bag',
      branding: 'Breathable Sublimation + Laser Marking',
      image: 'images/bw/hero_unique_3_activewear.jpg'
    },
    {
      code: 'GIFT-V104',
      name: 'Eco-Friendly Green Pack',
      tagline: '100% Biodegradable & Sustainable Gifting',
      category: 'eco',
      categoryBadge: 'Sustainable & Green',
      target: 'ESG milestones, eco summits & environmentally conscious teams',
      items: [
        '1× Natural Bamboo Eco Stylus Twist Pen',
        '1× Heavyweight Organic Cotton Canvas Tote Bag',
        '1× Eco Wheat Straw Travel Coffee Mug (400ml)',
        '1× 100% Recycled Kraft Paper Wire-O Notebook'
      ],
      moq: 'Min 25 Kits',
      estimatedPrice: '₹849 / kit',
      turnaround: '3–5 Days',
      boxType: 'Recycled Kraft Carton + Soy Ink Print',
      branding: 'Eco Water-Based Inks + Laser Etch',
      badge: 'Eco Choice',
      image: 'images/products/fine_art_canvas_painting.jpg'
    },
    {
      code: 'GIFT-V105',
      name: 'Corporate Uniform Bundle',
      tagline: 'Sharp Retail Look for Sales & Field Executives',
      category: 'onboarding',
      categoryBadge: 'Field & Retail Teams',
      target: 'Sales summits, brand reps & retail operations uniform kits',
      items: [
        '2× Premium Combed Cotton Pique Polos (220 GSM)',
        '1× Structured Water-Resistant Laptop Backpack',
        '1× Carbon Fiber Weave Executive Pen'
      ],
      moq: 'Min 20 Kits',
      estimatedPrice: '₹1,599 / kit',
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
      moq: 'Min 10 Kits',
      estimatedPrice: '₹1,999 / kit',
      turnaround: '5–7 Days',
      boxType: 'Custom Velvet-Lined Rigid Box',
      branding: 'Gold Foil Stamping + 3D Silicone Relief',
      badge: 'Luxury Tier',
      image: 'images/bw/hero_unique_2_hoodie.jpg'
    },
    {
      code: 'GIFT-V107',
      name: 'Event & Expo Giveaway Pack',
      tagline: 'High Volume Trade Show & Conference Swag',
      category: 'events',
      categoryBadge: 'Events & Trade Shows',
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

  addBundle(bundle: EnrichedBundle): void {
    this.cart.addToCart({
      id: bundle.code,
      name: bundle.name,
      qty: 1,
      price: 0,
      detail: bundle.items.join(' · ') + ' — ' + bundle.estimatedPrice
    });
  }

  addFeaturedBundle(): void {
    const featured = this.bundles[0];
    this.addBundle(featured);
  }

  addCustomKitToBag(): void {
    const apparel = this.getSelectedApparelName();
    const accessories = this.selectedAccessories().map(id => this.getAccessoryName(id)).join(', ');
    const packaging = this.getSelectedPackagingName();
    const total = this.calculateEstimatedKitTotal();

    this.cart.addToCart({
      id: 'CUSTOM-KIT-' + Date.now().toString().slice(-4),
      name: `Custom Curated Kit (${apparel})`,
      qty: 25,
      price: total,
      detail: `Apparel: ${apparel} | Accessories: ${accessories || 'None'} | Packaging: ${packaging}`
    });
  }

  getWhatsAppUrl(bundle: EnrichedBundle): string {
    const text = encodeURIComponent(
      `Hello Brand Peoples Factory Team!\n\nI am interested in bulk ordering the *${bundle.name}* (${bundle.code}).\n\n• Target: ${bundle.target}\n• MOQ: ${bundle.moq}\n• Packaging: ${bundle.boxType}\n\nPlease share quantity discount tiers (25 / 100 / 500 pcs) and mock-up design process.`
    );
    return `https://wa.me/919944107633?text=${text}`;
  }

  getCustomKitWhatsAppUrl(): string {
    const apparel = this.getSelectedApparelName();
    const accessories = this.selectedAccessories().map(id => this.getAccessoryName(id)).join(', ');
    const packaging = this.getSelectedPackagingName();
    const total = this.calculateEstimatedKitTotal();

    const text = encodeURIComponent(
      `Hello Brand Peoples Factory Team!\n\nI built a Custom Gift Kit on your website:\n• Base Apparel: ${apparel}\n• Accessories: ${accessories || 'None'}\n• Packaging: ${packaging}\n• Estimated Unit Rate: ₹${total}\n\nPlease advise on bulk ordering, logo mockup generation, and sample dispatch.`
    );
    return `https://wa.me/919944107633?text=${text}`;
  }
}
