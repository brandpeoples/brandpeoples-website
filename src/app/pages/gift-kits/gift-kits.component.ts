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
    <!-- Top Breadcrumb & Hero Section -->
    <section class="bg-black text-white py-14 sm:py-20 border-b border-zinc-800 relative overflow-hidden">
      <!-- Decorative ambient gradient circles -->
      <div class="absolute -top-24 -right-24 w-96 h-96 bg-white text-black/5 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-[#b8dafa]/20 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Breadcrumbs -->
        <nav class="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-6">
          <a routerLink="/" class="hover:text-white transition">Home</a>
          <span>/</span>
          <span class="text-white font-semibold">Corporate Gift Kits &amp; Bundles</span>
        </nav>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <!-- Hero Text -->
          <div class="lg:col-span-7 space-y-6">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-950 text-zinc-400 border border-zinc-800 text-xs font-mono uppercase tracking-widest shadow-xs">
              <span class="w-2 h-2 rounded-full bg-white text-black animate-pulse"></span>
              CURATED MERCHANDISE PACKS &bull; ZERO PLASTIC
            </div>

            <h1 class="text-4xl sm:text-6xl font-extrabold tracking-tight font-display text-white leading-[1.08]">
              Good things, <br>
              <span class="text-white">beautifully bundled.</span>
            </h1>

            <p class="text-zinc-400 text-sm sm:text-lg max-w-xl font-normal leading-relaxed">
              Seven turnkey merchandise combinations for new hire onboarding, client appreciation, executive rewards, and annual summits. Engineered with export-grade combed cotton apparel, laser-etched drinkware, and premium presentation packaging.
            </p>

            <div class="flex flex-wrap items-center gap-4 pt-2">
              <a href="#bundles" 
                 class="btn-shimmer bg-white text-black font-black hover:bg-zinc-200 px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-bw cursor-pointer flex items-center gap-2">
                <span>Explore 7 Bundles</span>
                <span>&darr;</span>
              </a>

              <a href="https://wa.me/919944107633?text=Hi%20Brand%20Peoples,%20I%20want%20to%20curate%20a%20custom%20gift%20box%20for%20our%20company." 
                 target="_blank" 
                 rel="noopener"
                 class="bg-zinc-900 text-zinc-300 border border-zinc-700 hover:bg-zinc-800 px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all border border-zinc-800 cursor-pointer flex items-center gap-2 hover:border-zinc-500">
                <span>WhatsApp Specialist</span>
                <span>&rarr;</span>
              </a>
            </div>

            <!-- Value Highlights Bar -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-zinc-800">
              <div>
                <span class="block text-xl sm:text-2xl font-black text-white font-display">25 Kits</span>
                <span class="text-[11px] font-mono text-zinc-400 uppercase">Low Starter MOQ</span>
              </div>
              <div>
                <span class="block text-xl sm:text-2xl font-black text-white font-display">100%</span>
                <span class="text-[11px] font-mono text-zinc-400 uppercase">Custom Branded</span>
              </div>
              <div>
                <span class="block text-xl sm:text-2xl font-black text-white font-display">3–5 Days</span>
                <span class="text-[11px] font-mono text-zinc-400 uppercase">Fast Dispatch</span>
              </div>
              <div>
                <span class="block text-xl sm:text-2xl font-black text-white font-display">Eco-Safe</span>
                <span class="text-[11px] font-mono text-zinc-400 uppercase">Rigid Box / Kraft</span>
              </div>
            </div>
          </div>

          <!-- Hero Art / Visual Card -->
          <div class="lg:col-span-5 relative">
            <div class="relative bg-zinc-950 rounded-3xl p-6 sm:p-8 border border-zinc-800 shadow-xl space-y-6">
              
              <!-- Floating Pill Top Right -->
              <span class="absolute -top-3.5 -right-3.5 bg-white text-black text-white text-[10px] font-mono font-bold uppercase px-3 py-1 rounded-full shadow-md tracking-wider">
                FEATURED PACK
              </span>

              <!-- Bundle Visual Mockup -->
              <div class="aspect-4/3 rounded-2xl bg-black overflow-hidden relative border border-zinc-800 flex items-center justify-center group">
                <img 
                  src="images/bw/swatch_kit_bw.jpg" 
                  alt="Corporate Onboarding Kit" 
                  class="w-full h-full object-cover grayscale contrast-110 group-hover:scale-105 transition-transform duration-500" />
                <div class="absolute inset-0 bg-gradient-to-t from-[#202024]/70 via-transparent to-transparent flex items-end p-5">
                  <div class="text-white">
                    <span class="text-[10px] font-mono uppercase tracking-widest text-[#b8dafa] block">GIFT-V101</span>
                    <h3 class="font-bold text-lg leading-tight font-display">Welcome Onboard Kit</h3>
                  </div>
                </div>
              </div>

              <!-- Included item pills -->
              <div class="space-y-2.5">
                <span class="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block">Included inside:</span>
                <div class="flex flex-wrap gap-1.5">
                  <span class="px-2.5 py-1 rounded-lg bg-black text-white text-xs font-medium border border-zinc-800">
                    👕 180 GSM Bio-Washed Tee
                  </span>
                  <span class="px-2.5 py-1 rounded-lg bg-black text-white text-xs font-medium border border-zinc-800">
                    ☕ 350ml Ceramic Mug
                  </span>
                  <span class="px-2.5 py-1 rounded-lg bg-black text-white text-xs font-medium border border-zinc-800">
                    ✍️ Matte Click Pen
                  </span>
                  <span class="px-2.5 py-1 rounded-lg bg-black text-white text-xs font-medium border border-zinc-800">
                    📦 Custom Hardbound Box
                  </span>
                </div>
              </div>

              <!-- Quick CTA in card -->
              <div class="pt-2 flex items-center justify-between border-t border-zinc-800">
                <div>
                  <span class="text-[10px] font-mono text-zinc-400 block uppercase">Turnkey Unit Price</span>
                  <span class="text-sm font-bold text-white">From ₹799 <small class="text-zinc-400 font-normal">/ kit</small></span>
                </div>
                <button 
                  (click)="addFeaturedBundle()" 
                  class="bg-white text-black font-black hover:bg-zinc-200 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer hover:bg-white text-black">
                  Quick Add +
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- Packages Section -->
    <section id="bundles" class="py-16 sm:py-20 bg-zinc-950">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <!-- Section Header with Category Tabs -->
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-800 pb-6">
          <div class="space-y-2">
            <span class="text-xs font-mono text-white font-bold uppercase tracking-widest block">READY TO SHIP OR CUSTOMIZE</span>
            <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display">
              Curated Gift Packages
            </h2>
            <p class="text-xs sm:text-sm text-zinc-400 max-w-xl">
              Engineered for seamless corporate gifting. Add your logo, team member names, and brand colors to every kit.
            </p>
          </div>

          <!-- Category Filter Pills -->
          <div class="flex flex-wrap items-center gap-2">
            @for (tab of categories; track tab.key) {
              <button 
                (click)="activeCategory.set(tab.key)"
                [class.bg-white text-black]="activeCategory() === tab.key"
                [class.text-white]="activeCategory() === tab.key"
                [class.shadow-bw]="activeCategory() === tab.key"
                [class.bg-black]="activeCategory() !== tab.key"
                [class.text-zinc-400]="activeCategory() !== tab.key"
                class="px-3.5 py-1.5 rounded-full text-xs font-bold transition-all border border-zinc-800 cursor-pointer hover:border-zinc-500 whitespace-nowrap">
                {{ tab.label }}
              </button>
            }
          </div>
        </div>

        <!-- Bundles Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (b of filteredBundles(); track b.code) {
            <article class="bg-black rounded-3xl border border-zinc-800 overflow-hidden flex flex-col group hover-lift transition-all duration-300">
              
              <!-- Card Top Visual / Header -->
              <div class="relative h-48 bg-zinc-900 overflow-hidden">
                <img 
                  [src]="b.image" 
                  [alt]="b.name" 
                  class="w-full h-full object-cover grayscale contrast-110 transition-transform duration-500 group-hover:scale-105" />
                <div class="absolute inset-0 bg-gradient-to-t from-[#202024]/80 via-[#202024]/20 to-transparent"></div>

                <!-- Floating Code & Category Badge -->
                <div class="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                  <span class="px-2.5 py-1 rounded-full bg-zinc-950/95 backdrop-blur-md text-white text-[10px] font-mono font-bold tracking-wider uppercase border border-zinc-800 shadow-xs">
                    {{ b.code }}
                  </span>
                  @if (b.badge) {
                    <span class="px-2.5 py-1 rounded-full bg-white text-black text-white text-[10px] font-mono font-bold tracking-wider uppercase shadow-xs">
                      {{ b.badge }}
                    </span>
                  }
                </div>

                <!-- Bottom Header on visual -->
                <div class="absolute bottom-3.5 left-4 right-4 text-white">
                  <span class="text-[10px] font-mono uppercase tracking-widest text-[#b8dafa] block">{{ b.categoryBadge }}</span>
                  <h3 class="text-xl font-bold font-display leading-tight truncate">{{ b.name }}</h3>
                </div>
              </div>

              <!-- Card Body -->
              <div class="p-6 flex-1 flex flex-col justify-between space-y-6">
                
                <div class="space-y-4">
                  <!-- Tagline & Target -->
                  <div>
                    <p class="text-xs font-semibold text-white uppercase tracking-wide font-mono">{{ b.tagline }}</p>
                    <p class="text-xs text-zinc-400 mt-1">{{ b.target }}</p>
                  </div>

                  <!-- Included Items Checklist -->
                  <div class="space-y-2 pt-2 border-t border-zinc-800">
                    <span class="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block">Included inside bundle:</span>
                    <ul class="space-y-2">
                      @for (item of b.items; track item) {
                        <li class="flex items-start gap-2 text-xs text-white">
                          <span class="text-white font-bold text-sm shrink-0">&check;</span>
                          <span class="leading-relaxed">{{ item }}</span>
                        </li>
                      }
                    </ul>
                  </div>

                  <!-- Spec Metadata Pills -->
                  <div class="pt-3 border-t border-zinc-800 space-y-2">
                    <div class="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                      <span>Packaging:</span>
                      <strong class="text-white font-medium">{{ b.boxType }}</strong>
                    </div>
                    <div class="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                      <span>Custom Branding:</span>
                      <strong class="text-white font-medium">{{ b.branding }}</strong>
                    </div>
                    <div class="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                      <span>MOQ &amp; SLA:</span>
                      <strong class="text-white font-medium">{{ b.moq }} &bull; {{ b.turnaround }}</strong>
                    </div>
                  </div>
                </div>

                <!-- Footer with Action Buttons -->
                <div class="pt-4 border-t border-zinc-800 space-y-3">
                  <div class="flex items-center justify-between">
                    <div>
                      <span class="text-[10px] font-mono text-zinc-400 uppercase block">Starting at</span>
                      <span class="text-base font-extrabold text-white font-display">{{ b.estimatedPrice }}</span>
                    </div>
                    <span class="text-[10px] font-mono text-zinc-400">Volume tiered pricing</span>
                  </div>

                  <div class="grid grid-cols-2 gap-2">
                    <button 
                      (click)="addBundle(b)" 
                      class="bg-white text-black font-black hover:bg-zinc-200 py-2.5 px-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-1.5 hover:bg-white text-black">
                      <span>Add to Bag</span>
                      <span>+</span>
                    </button>

                    <a 
                      [href]="getWhatsAppUrl(b)" 
                      target="_blank" 
                      rel="noopener"
                      class="bg-zinc-900 text-zinc-300 border border-zinc-700 hover:bg-zinc-800 py-2.5 px-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors border border-zinc-800 cursor-pointer flex items-center justify-center gap-1 hover:border-zinc-500">
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

    <!-- Custom Kit Builder Interactive Section -->
    <section class="py-16 sm:py-20 bg-black border-t border-b border-zinc-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div class="text-center max-w-2xl mx-auto space-y-3">
          <span class="inline-block px-3.5 py-1.5 rounded-full bg-zinc-950 text-zinc-400 border border-zinc-800 text-xs font-mono uppercase tracking-widest shadow-xs">
            Interactive Configurator
          </span>
          <h2 class="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            Build Your Custom Kit
          </h2>
          <p class="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Need a unique combination? Pick your base garment, select essential merchandise accessories, and get an instant quote on WhatsApp with zero design hassle.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <!-- Configuration Options (8 cols) -->
          <div class="lg:col-span-8 space-y-8">
            
            <!-- Step 1: Base Garment -->
            <div class="bg-zinc-950 rounded-3xl p-6 sm:p-8 border border-zinc-800 shadow-xs space-y-4">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <span class="w-7 h-7 rounded-full bg-[#202024] text-white text-xs font-mono font-bold flex items-center justify-center">1</span>
                  <h3 class="font-bold text-base sm:text-lg text-white font-display">Select Core Apparel Blank</h3>
                </div>
                <span class="text-xs font-mono text-white font-semibold">100% Cotton &amp; Poly Blends</span>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                @for (app of apparelOptions; track app.id) {
                  <button 
                    (click)="selectedApparel.set(app.id)"
                    [class.border-[#b45b3d]]="selectedApparel() === app.id"
                    [class.bg-black]="selectedApparel() === app.id"
                    class="p-4 rounded-2xl border border-zinc-800 text-left transition-all cursor-pointer hover:border-zinc-500 flex flex-col justify-between">
                    <div class="flex items-start justify-between">
                      <span class="font-bold text-xs sm:text-sm text-white">{{ app.name }}</span>
                      <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-950 text-zinc-400 border border-zinc-800">{{ app.gsm }}</span>
                    </div>
                    <span class="text-[11px] text-zinc-400 mt-1">{{ app.desc }}</span>
                    <span class="text-xs font-bold text-white mt-2 block">{{ app.priceEst }}</span>
                  </button>
                }
              </div>
            </div>

            <!-- Step 2: Drinkware & Stationery Add-ons -->
            <div class="bg-zinc-950 rounded-3xl p-6 sm:p-8 border border-zinc-800 shadow-xs space-y-4">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <span class="w-7 h-7 rounded-full bg-[#202024] text-white text-xs font-mono font-bold flex items-center justify-center">2</span>
                  <h3 class="font-bold text-base sm:text-lg text-white font-display">Pick Drinkware &amp; Accessories</h3>
                </div>
                <span class="text-xs font-mono text-zinc-400">Select multiple</span>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                @for (acc of accessoryOptions; track acc.id) {
                  <button 
                    (click)="toggleAccessory(acc.id)"
                    [class.border-[#b45b3d]]="isAccessorySelected(acc.id)"
                    [class.bg-black]="isAccessorySelected(acc.id)"
                    class="p-4 rounded-2xl border border-zinc-800 text-left transition-all cursor-pointer hover:border-zinc-500 flex items-center justify-between">
                    <div>
                      <div class="flex items-center gap-2">
                        <span class="text-base">{{ acc.icon }}</span>
                        <span class="font-bold text-xs sm:text-sm text-white">{{ acc.name }}</span>
                      </div>
                      <span class="text-[11px] text-zinc-400 mt-0.5 block">{{ acc.detail }}</span>
                    </div>
                    <span class="text-xs font-bold text-white shrink-0 ml-2">
                      {{ isAccessorySelected(acc.id) ? '✓ Added' : '+ Add' }}
                    </span>
                  </button>
                }
              </div>
            </div>

            <!-- Step 3: Packaging Box -->
            <div class="bg-zinc-950 rounded-3xl p-6 sm:p-8 border border-zinc-800 shadow-xs space-y-4">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <span class="w-7 h-7 rounded-full bg-[#202024] text-white text-xs font-mono font-bold flex items-center justify-center">3</span>
                  <h3 class="font-bold text-base sm:text-lg text-white font-display">Select Packaging Presentation</h3>
                </div>
                <span class="text-xs font-mono text-white font-semibold">Custom Printed Sleeves</span>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                @for (pkg of packagingOptions; track pkg.id) {
                  <button 
                    (click)="selectedPackaging.set(pkg.id)"
                    [class.border-[#b45b3d]]="selectedPackaging() === pkg.id"
                    [class.bg-black]="selectedPackaging() === pkg.id"
                    class="p-4 rounded-2xl border border-zinc-800 text-left transition-all cursor-pointer hover:border-zinc-500">
                    <span class="text-xl block mb-1">{{ pkg.icon }}</span>
                    <span class="font-bold text-xs sm:text-sm text-white block">{{ pkg.name }}</span>
                    <span class="text-[10px] text-zinc-400 block mt-1 leading-snug">{{ pkg.desc }}</span>
                  </button>
                }
              </div>
            </div>

          </div>

          <!-- Configuration Live Summary (4 cols) -->
          <div class="lg:col-span-4 sticky top-28 space-y-6">
            <div class="bg-zinc-950 rounded-3xl p-6 sm:p-8 border border-zinc-800 shadow-lg space-y-6">
              
              <div class="border-b border-zinc-800 pb-4">
                <span class="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block">LIVE SPECIFICATION</span>
                <h3 class="text-xl font-bold font-display text-white">Custom Kit Summary</h3>
              </div>

              <div class="space-y-4 text-xs">
                
                <div>
                  <span class="text-zinc-400 font-mono uppercase text-[10px] block">Selected Apparel:</span>
                  <div class="flex items-center justify-between font-bold text-white mt-1">
                    <span>{{ getSelectedApparelName() }}</span>
                    <span class="text-white">{{ getSelectedApparelPrice() }}</span>
                  </div>
                </div>

                <div>
                  <span class="text-zinc-400 font-mono uppercase text-[10px] block">Accessories ({{ selectedAccessories().length }} items):</span>
                  @if (selectedAccessories().length === 0) {
                    <span class="text-zinc-400 italic">None selected yet</span>
                  } @else {
                    <ul class="space-y-1 mt-1">
                      @for (accId of selectedAccessories(); track accId) {
                        <li class="flex items-center justify-between text-white">
                          <span>&bull; {{ getAccessoryName(accId) }}</span>
                          <span class="text-xs font-medium text-zinc-400">{{ getAccessoryPrice(accId) }}</span>
                        </li>
                      }
                    </ul>
                  }
                </div>

                <div>
                  <span class="text-zinc-400 font-mono uppercase text-[10px] block">Packaging Box:</span>
                  <span class="font-bold text-white block mt-1">{{ getSelectedPackagingName() }}</span>
                </div>

                <div class="pt-4 border-t border-zinc-800 space-y-1">
                  <div class="flex items-center justify-between">
                    <span class="font-mono text-xs text-zinc-400">Estimated Unit Cost:</span>
                    <span class="text-lg font-black text-white font-display">₹{{ calculateEstimatedKitTotal() }} <small class="text-xs font-normal text-zinc-400">/ kit</small></span>
                  </div>
                  <span class="text-[10px] font-mono text-zinc-400 block leading-tight">
                    *Based on 50+ unit tier. Includes screen printing / laser engraving &amp; packaging.
                  </span>
                </div>

              </div>

              <div class="space-y-2 pt-2">
                <button 
                  (click)="addCustomKitToBag()" 
                  class="bg-white text-black font-black hover:bg-zinc-200 w-full py-3.5 rounded-2xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-2 hover:bg-white text-black">
                  <span>Add Custom Kit to Bag</span>
                  <span>&rarr;</span>
                </button>

                <a 
                  [href]="getCustomKitWhatsAppUrl()" 
                  target="_blank" 
                  rel="noopener"
                  class="bg-zinc-900 text-zinc-300 border border-zinc-700 hover:bg-zinc-800 w-full py-3.5 rounded-2xl text-xs font-bold uppercase tracking-wider transition-colors border border-zinc-800 cursor-pointer flex items-center justify-center gap-2 hover:border-zinc-500">
                  <span>Get WhatsApp Quotation</span>
                  <span>&nearr;</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- Printing & Embellishment Guide Panel -->
    <section class="py-16 sm:py-20 bg-zinc-950">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div class="text-center max-w-2xl mx-auto space-y-3">
          <span class="inline-block px-3.5 py-1.5 rounded-full bg-black text-zinc-400 border border-zinc-800 text-xs font-mono uppercase tracking-widest shadow-xs">
            Precision Branding Guide
          </span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            Embellishment Technologies For Gift Kits
          </h2>
          <p class="text-xs sm:text-sm text-zinc-400">
            Every product inside your kit is personalized with calibrated machinery for high durability and export-grade handfeel.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div class="p-6 rounded-3xl bg-black border border-zinc-800 space-y-3 hover-lift transition-all">
            <div class="w-10 h-10 rounded-2xl bg-zinc-950 flex items-center justify-center text-lg border border-zinc-800 shadow-xs">
              🎨
            </div>
            <h4 class="font-bold text-base text-white font-display">Screen &amp; Plastisol</h4>
            <p class="text-xs text-zinc-400 leading-relaxed">
              Cotton T-shirts (180–240 GSM), canvas tote bags, and drawstring bags. Ideal for crisp, high-volume pantone color matching.
            </p>
            <span class="text-[10px] font-mono text-white font-bold block uppercase">MOQ: 25 PCS &bull; 50+ WASHES</span>
          </div>

          <div class="p-6 rounded-3xl bg-black border border-zinc-800 space-y-3 hover-lift transition-all">
            <div class="w-10 h-10 rounded-2xl bg-zinc-950 flex items-center justify-center text-lg border border-zinc-800 shadow-xs">
              💎
            </div>
            <h4 class="font-bold text-base text-white font-display">High-Density 3D Silicone</h4>
            <p class="text-xs text-zinc-400 leading-relaxed">
              Premium polo shirts, heavyweight hoodies, and caps. Creates 1.5mm elevated tactile relief with velvety texture and stretch recovery.
            </p>
            <span class="text-[10px] font-mono text-white font-bold block uppercase">PREMIUM STREETWEAR GRADE</span>
          </div>

          <div class="p-6 rounded-3xl bg-black border border-zinc-800 space-y-3 hover-lift transition-all">
            <div class="w-10 h-10 rounded-2xl bg-zinc-950 flex items-center justify-center text-lg border border-zinc-800 shadow-xs">
              ⚡
            </div>
            <h4 class="font-bold text-base text-white font-display">Fiber Laser Engraving</h4>
            <p class="text-xs text-zinc-400 leading-relaxed">
              Stainless steel tumblers, vacuum flasks, brass pens, and bamboo notebooks. Permanent metallic finish that never fades or peels.
            </p>
            <span class="text-[10px] font-mono text-white font-bold block uppercase">PERMANENT &bull; INDIVIDUAL NAMES</span>
          </div>

          <div class="p-6 rounded-3xl bg-black border border-zinc-800 space-y-3 hover-lift transition-all">
            <div class="w-10 h-10 rounded-2xl bg-zinc-950 flex items-center justify-center text-lg border border-zinc-800 shadow-xs">
              🧵
            </div>
            <h4 class="font-bold text-base text-white font-display">Tajima Embroidery</h4>
            <p class="text-xs text-zinc-400 leading-relaxed">
              Cotton pique polos (220 GSM), baseball caps, and structured laptop bags. Multi-thread Japanese embroidery with crisp edge definition.
            </p>
            <span class="text-[10px] font-mono text-white font-bold block uppercase">HIGH-DENSITY EMBROIDERY</span>
          </div>

        </div>

      </div>
    </section>

    <!-- Corporate Gifting FAQ -->
    <section class="py-16 sm:py-20 bg-black border-t border-zinc-800">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div class="text-center space-y-3">
          <span class="text-xs font-mono text-white font-bold uppercase tracking-widest block">FREQUENTLY ASKED QUESTIONS</span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            Corporate Gifting &amp; Bulk Orders
          </h2>
        </div>

        <div class="space-y-4">
          <div class="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 shadow-xs">
            <h4 class="font-bold text-sm sm:text-base text-white font-display mb-2">
              Can we personalize each kit with individual employee names?
            </h4>
            <p class="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Yes! For executive desk packs, water bottles, and metal pens, our fiber laser engraving setup allows 1-to-1 individual recipient names alongside your corporate company emblem at a nominal per-unit personalization fee.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 shadow-xs">
            <h4 class="font-bold text-sm sm:text-base text-white font-display mb-2">
              What is the turnaround time for bulk gift boxes?
            </h4>
            <p class="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Standard pre-curated packages ship within 3 to 5 business days after digital mockup sign-off. For custom-designed packaging sleeves or bespoke color match orders, dispatch timeline is 7 to 10 business days with pan-India express logistics.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 shadow-xs">
            <h4 class="font-bold text-sm sm:text-base text-white font-display mb-2">
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
    { key: 'executive', label: 'Executive (2)' },
    { key: 'active', label: 'Active & Sports (1)' },
    { key: 'eco', label: 'Eco-Friendly (1)' },
    { key: 'events', label: 'Events & Expo (1)' },
  ];

  // Enriched Bundles with photography, technical metadata and packaging
  bundles: EnrichedBundle[] = [
    {
      code: 'GIFT-V101',
      name: 'Welcome Onboard Kit',
      tagline: 'First-Day Delight for New Team Joinees',
      category: 'onboarding',
      categoryBadge: 'Onboarding',
      target: 'New hire onboarding, developer welcomes & startup day-one packs',
      items: [
        '1× Standard Cotton Round Neck T-Shirt (180 GSM Bio-Washed)',
        '1× Matte Ceramic Coffee Mug (350ml with Logo)',
        '1× Classic Click Ballpoint Pen with Silver Trim',
        '1× Welcome Note Card & Custom Box Sleeve'
      ],
      moq: 'Min 25 Kits',
      estimatedPrice: '₹799 / kit',
      turnaround: '3–5 Days',
      boxType: 'Kraft Presentation Box',
      branding: 'DTF Color Print + Pad Print',
      badge: 'Best Seller',
      image: 'images/bw/swatch_kit_bw.jpg'
    },
    {
      code: 'GIFT-V102',
      name: 'Executive Desk Pack',
      tagline: 'High-Impact Client & Manager Appreciation',
      category: 'executive',
      categoryBadge: 'Executive & VIP',
      target: 'Client appreciation gifts, executive rewards & board member packs',
      items: [
        '1× Executive Metal Rollerball Pen (Precision Etched)',
        '1× Stainless Steel Double-Wall Vacuum Tumbler (500ml)',
        '1× Hardbound Leatherette A5 Ruled Journal',
        '1× Magnetic Luxury Keepsake Box'
      ],
      moq: 'Min 15 Kits',
      estimatedPrice: '₹1,299 / kit',
      turnaround: '4–6 Days',
      boxType: 'Magnetic Rigid Luxury Box',
      branding: 'Fiber Laser Engraving + Foil Stamping',
      badge: 'Premium VIP',
      image: 'images/bw/heavy_hoodie_bw.jpg'
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
      image: 'images/bw/activewear_bw.jpg'
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
      image: 'images/bw/canvas_tote_bw.jpg'
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
      image: 'images/bw/pique_polo_bw.jpg'
    },
    {
      code: 'GIFT-V106',
      name: 'Premium Leadership Box',
      tagline: 'Top Milestone Achievers & Founder Recognition',
      category: 'executive',
      categoryBadge: 'Leadership & Founder',
      target: 'Annual gala awards, leadership summits & 5-year loyalty recognition',
      items: [
        '1× Heavyweight Streetwear Oversized Tee (240 GSM French Terry)',
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
      image: 'images/bw/executive_hoodie_bw.jpg'
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
        '1× Recycled Wheat Straw Ballpoint Pen',
        '1× Gloss Ceramic Coffee Mug (300ml)',
        '1× Non-Woven Branded Tote Bag with Reinforced Handles'
      ],
      moq: 'Min 50 Kits',
      estimatedPrice: '₹499 / kit',
      turnaround: '3–5 Days',
      boxType: 'Lightweight Poly-Free Presentation Pack',
      branding: 'High-Speed Automated Screen Printing',
      badge: 'High Volume',
      image: 'images/bw/crewneck_tee_bw.jpg'
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
