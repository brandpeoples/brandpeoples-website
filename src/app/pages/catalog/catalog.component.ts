import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

export interface ProductColorway {
  name: string;
  hex: string;
}

export interface VolumeTier {
  range: string;
  price: number;
  discountBadge?: string;
}

export interface GarmentMeasurement {
  size: string;
  chest: string;
  length: string;
  sleeve: string;
  shoulder: string;
}

export interface CatalogItem {
  id: string;
  name: string;
  silhouette: string;
  category: 'tees' | 'hoodies' | 'pants' | 'drinkware' | 'activewear' | 'caps' | 'trims';
  categoryLabel: string;
  price: number; // single piece sample rate
  tieredPricing: VolumeTier[];
  gsm: string;
  gsmValue: number;
  yarnSpecs: string;
  composition: string;
  fitDescription: string;
  description: string;
  image: string;
  badge?: string;
  availableSizes: string[];
  colorways: ProductColorway[];
  printMethods: string[];
  features: string[];
  measurements?: GarmentMeasurement[];
  dispatchTime: string;
  stockStatus: string;
}

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <!-- ========================================================================= -->
    <!-- 1. TOP EDITORIAL HERO & PRODUCTION RADAR                                  -->
    <!-- ========================================================================= -->
    <section class="bg-black text-white pt-16 pb-12 border-b border-zinc-900 relative overflow-hidden">
      <!-- Ambient Studio Lighting Glows -->
      <div class="absolute -top-32 -left-32 w-96 h-96 bg-white/[0.03] blur-[140px] pointer-events-none rounded-full"></div>
      <div class="absolute -bottom-24 right-1/4 w-96 h-96 bg-zinc-800/20 blur-[130px] pointer-events-none rounded-full"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        
        <!-- Breadcrumb & Top Badges -->
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div class="flex items-center gap-2 text-xs font-mono text-zinc-500">
            <a routerLink="/" class="text-zinc-400 hover:text-white transition">Home</a>
            <span>/</span>
            <span class="text-white font-bold">Catalogs</span>
          </div>

          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-950 border border-zinc-800 text-zinc-300 text-[11px] font-mono font-bold tracking-wider uppercase">
            <span class="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
            <span>15 Production Profiles • Apparel, Pants, Drinkware &amp; Trims</span>
          </div>
        </div>

        <!-- Main Headline & Editorial Intro -->
        <div class="max-w-3xl space-y-4">
          <h1 class="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase font-display leading-[1.08]">
            Apparel &amp; Production Catalogs
          </h1>
          <p class="text-xs sm:text-sm lg:text-base text-zinc-400 leading-relaxed font-sans font-normal">
            Export-grade bio-washed combed cottons, heavyweight 380 GSM fleece pants, laser-engraved stainless steel water bottles, 2400 DPI fine-art textile painting, and high-stretch 3D silicone transfers.
          </p>
        </div>

        <!-- Quick Production Metrics Bar -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          <div class="p-3.5 rounded-2xl bg-zinc-950/90 border border-zinc-800/80 space-y-1">
            <span class="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">Sampling Turnaround</span>
            <span class="text-sm sm:text-base font-black text-white font-mono block">24h – 48h SLA</span>
          </div>
          <div class="p-3.5 rounded-2xl bg-zinc-950/90 border border-zinc-800/80 space-y-1">
            <span class="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">Minimum Order Qty</span>
            <span class="text-sm sm:text-base font-black text-white font-mono block">Zero MOQ (1 Pc)</span>
          </div>
          <div class="p-3.5 rounded-2xl bg-zinc-950/90 border border-zinc-800/80 space-y-1">
            <span class="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">Branding Technologies</span>
            <span class="text-sm sm:text-base font-black text-white font-mono block">Laser, UV &amp; 3D Silicone</span>
          </div>
          <div class="p-3.5 rounded-2xl bg-zinc-950/90 border border-zinc-800/80 space-y-1">
            <span class="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">Fastness Guarantee</span>
            <span class="text-sm sm:text-base font-black text-white font-mono block">50+ Washes &bull; Rust-Free</span>
          </div>
        </div>

      </div>
    </section>

    <!-- ========================================================================= -->
    <!-- 2. INTERACTIVE FILTER, SEARCH & VIEW TOOLBAR (NO CUTOFF / DUAL-ROW)       -->
    <!-- ========================================================================= -->
    <section class="sticky top-20 z-30 bg-black/95 backdrop-blur-xl border-b border-zinc-800/90 py-4 transition-all">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3.5">
        
        <!-- Row 1: Full-Width Wrapping Category Filter Pills (Never Clipped) -->
        <div class="flex flex-wrap items-center gap-2">
          @for (tab of filterTabs; track tab.key) {
            <button 
              (click)="setCategory(tab.key)"
              [class.bg-white]="activeCategory() === tab.key"
              [class.text-black]="activeCategory() === tab.key"
              [class.font-black]="activeCategory() === tab.key"
              [class.shadow-bw]="activeCategory() === tab.key"
              [class.bg-zinc-950]="activeCategory() !== tab.key"
              [class.text-zinc-400]="activeCategory() !== tab.key"
              [class.font-medium]="activeCategory() !== tab.key"
              class="btn-shimmer hover-lift-sm px-4 py-2 rounded-full text-xs transition-all border border-zinc-800 whitespace-nowrap cursor-pointer hover:border-zinc-500 shrink-0">
              <span>{{ tab.label }}</span>
              <span class="ml-1.5 text-[10px] font-mono opacity-70">({{ getCategoryCount(tab.key) }})</span>
            </button>
          }
        </div>

        <!-- Row 2: Search, GSM Filter, Sort & Layout Switcher (Spacious & Responsive) -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1 border-t border-zinc-900/80">
          
          <!-- Search Input Box -->
          <div class="relative w-full sm:w-80">
            <input 
              type="text" 
              [(ngModel)]="searchQuery" 
              placeholder="Search by title, GSM, bottles, pants..." 
              class="w-full bg-zinc-950 border border-zinc-800 rounded-full pl-9 pr-4 py-2 text-xs text-white placeholder-zinc-500 focus:outline-hidden focus:border-white transition font-mono" />
            <svg class="w-3.5 h-3.5 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </div>

          <!-- Secondary Filters: GSM Range, Sort, and View Mode -->
          <div class="flex flex-wrap items-center gap-2">
            
            <!-- Fabric GSM Filter -->
            <select 
              [(ngModel)]="selectedGsmRange" 
              class="bg-zinc-950 border border-zinc-800 rounded-full px-3.5 py-2 text-xs text-zinc-300 font-mono focus:outline-hidden focus:border-white transition cursor-pointer">
              <option value="all">All Fabric &amp; Material Weights</option>
              <option value="light">Lightweight (&lt; 200 GSM)</option>
              <option value="medium">Midweight (200 - 300 GSM)</option>
              <option value="heavy">Heavyweight (&gt; 350 GSM / Steel)</option>
            </select>

            <!-- Sort By Dropdown -->
            <select 
              [(ngModel)]="selectedSort" 
              class="bg-zinc-950 border border-zinc-800 rounded-full px-3.5 py-2 text-xs text-zinc-300 font-mono focus:outline-hidden focus:border-white transition cursor-pointer">
              <option value="featured">Sort: Featured Blanks</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="gsm-desc">Weight: Heaviest First</option>
            </select>

            <!-- View Layout Mode Toggle -->
            <div class="flex items-center bg-zinc-950 border border-zinc-800 rounded-full p-1">
              <button 
                (click)="viewMode.set('grid')"
                [class.bg-white]="viewMode() === 'grid'"
                [class.text-black]="viewMode() === 'grid'"
                [class.text-zinc-400]="viewMode() !== 'grid'"
                class="p-1.5 rounded-full transition cursor-pointer"
                title="Grid Card View">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
                </svg>
              </button>
              <button 
                (click)="viewMode.set('spec')"
                [class.bg-white]="viewMode() === 'spec'"
                [class.text-black]="viewMode() === 'spec'"
                [class.text-zinc-400]="viewMode() !== 'spec'"
                class="p-1.5 rounded-full transition cursor-pointer"
                title="Technical Spec Editorial View">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"/>
                </svg>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>

    <!-- ========================================================================= -->
    <!-- 3. COMPREHENSIVE PRODUCT CATALOG LISTING                                  -->
    <!-- ========================================================================= -->
    <section class="py-12 sm:py-16 bg-zinc-950 min-h-screen">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <!-- Active Filter Indicator / Results Count -->
        <div class="flex items-center justify-between text-xs font-mono text-zinc-400 border-b border-zinc-800/80 pb-4">
          <div>
            Showing <span class="text-white font-bold">{{ filteredCatalog().length }}</span> production-ready profiles
            @if (searchQuery) {
              for "<span class="text-white">{{ searchQuery }}</span>"
            }
          </div>
          @if (activeCategory() !== 'all' || searchQuery || selectedGsmRange !== 'all') {
            <button 
              (click)="resetFilters()" 
              class="text-zinc-400 hover:text-white underline underline-offset-4 cursor-pointer transition">
              Reset Filters &times;
            </button>
          }
        </div>

        <!-- Empty State -->
        @if (filteredCatalog().length === 0) {
          <div class="text-center py-24 space-y-4 bg-black/40 rounded-3xl border border-zinc-800/80">
            <span class="text-4xl block">🔍</span>
            <h3 class="text-xl font-bold text-white font-display">No matching items found</h3>
            <p class="text-zinc-400 text-xs sm:text-sm max-w-md mx-auto font-mono">
              Try adjusting your search terms, fabric GSM weight filter, or category selection.
            </p>
            <button 
              (click)="resetFilters()" 
              class="px-6 py-2.5 rounded-full bg-white text-black text-xs font-bold font-mono uppercase tracking-wider hover:bg-zinc-200 transition">
              View All Blanks
            </button>
          </div>
        }

        <!-- =================================================================== -->
        <!-- GRID VIEW (Sleek Modern 3-Column Luxury Cards with Details)         -->
        <!-- =================================================================== -->
        @if (viewMode() === 'grid') {
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            @for (item of filteredCatalog(); track item.id) {
              <article class="bg-black/80 rounded-3xl overflow-hidden border border-zinc-800/80 flex flex-col group hover:border-zinc-600 transition-all duration-300 hover:shadow-2xl">
                
                <!-- Image Header with Hover Scale & Badges -->
                <div class="relative aspect-square overflow-hidden bg-zinc-900 cursor-pointer" (click)="openQuickSpec(item)">
                  <img 
                    [src]="item.image" 
                    [alt]="item.name" 
                    loading="lazy"
                    class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                  
                  <!-- Top Badge Overlay (Responsive Flex, No Overlap) -->
                  <div class="absolute top-3 inset-x-3 flex items-start justify-between gap-2 z-10 pointer-events-none">
                    <div class="flex flex-col gap-1 items-start min-w-0">
                      <span class="bg-black/90 backdrop-blur-md text-white text-[9px] font-mono font-bold px-2.5 py-1 rounded-full border border-zinc-700 uppercase tracking-wider truncate max-w-[150px] sm:max-w-none shadow-md">
                        {{ item.silhouette }}
                      </span>
                      @if (item.badge) {
                        <span class="bg-white text-black text-[9px] font-mono font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-md">
                          {{ item.badge }}
                        </span>
                      }
                    </div>

                    <span class="bg-black/90 backdrop-blur-md text-white text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border border-zinc-700 shadow-md shrink-0">
                      {{ item.gsm }}
                    </span>
                  </div>

                  <!-- Quick View Hover Overlay Button -->
                  <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <span class="px-4 py-2 rounded-full bg-white text-black font-mono font-black text-xs uppercase tracking-wider shadow-lg">
                      View Full Details &rarr;
                    </span>
                  </div>
                </div>

                <!-- Product Body & Comprehensive Specs -->
                <div class="p-6 flex-1 flex flex-col justify-between space-y-5">
                  
                  <div class="space-y-3">
                    <div class="flex items-center justify-between text-[11px] font-mono">
                      <span class="text-zinc-500 uppercase tracking-widest">{{ item.categoryLabel }}</span>
                      <span class="text-zinc-400">⚡ {{ item.dispatchTime }}</span>
                    </div>

                    <h3 
                      (click)="openQuickSpec(item)"
                      class="text-lg font-black text-white font-display tracking-tight hover:text-zinc-300 transition cursor-pointer leading-snug">
                      {{ item.name }}
                    </h3>

                    <p class="text-xs text-zinc-400 leading-relaxed font-sans line-clamp-2">
                      {{ item.description }}
                    </p>

                    <!-- Fabric Composition Spec Pill -->
                    <div class="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800/80 text-[11px] font-mono text-zinc-300 space-y-1">
                      <div class="flex items-center justify-between">
                        <span class="text-zinc-500 uppercase text-[9px]">Material / Specs:</span>
                        <span class="text-white font-bold">{{ item.yarnSpecs }}</span>
                      </div>
                      <p class="text-[10px] text-zinc-400 truncate">{{ item.composition }}</p>
                    </div>

                    <!-- Available Colorways Swatches -->
                    <div class="space-y-1.5 pt-1">
                      <span class="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">Production Finishes &amp; Dyes:</span>
                      <div class="flex items-center gap-1.5">
                        @for (col of item.colorways; track col.name) {
                          <span 
                            class="w-4 h-4 rounded-full border border-zinc-700 block transition-transform hover:scale-125"
                            [style.backgroundColor]="col.hex"
                            [title]="col.name"></span>
                        }
                      </div>
                    </div>

                    <!-- Sizing Range Chips -->
                    <div class="space-y-1.5">
                      <span class="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">Sizes / Formats:</span>
                      <div class="flex flex-wrap gap-1">
                        @for (sz of item.availableSizes; track sz) {
                          <span class="px-2 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-[10px] font-mono font-bold text-zinc-300">
                            {{ sz }}
                          </span>
                        }
                      </div>
                    </div>

                    <!-- Compatible Print Techniques -->
                    <div class="space-y-1.5">
                      <span class="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">Branding &amp; Printing Compatible:</span>
                      <div class="flex flex-wrap gap-1.5">
                        @for (pm of item.printMethods; track pm) {
                          <span class="px-2.5 py-0.5 rounded-full bg-zinc-900/90 text-zinc-400 text-[9px] font-mono uppercase border border-zinc-800">
                            {{ pm }}
                          </span>
                        }
                      </div>
                    </div>

                  </div>

                  <!-- Tiered Volume Pricing & Actions (NO BAG BUTTONS) -->
                  <div class="pt-4 border-t border-zinc-800/80 space-y-4">
                    
                    <!-- Volume Pricing Table Row -->
                    <div class="grid grid-cols-3 gap-1.5 p-2 rounded-xl bg-zinc-950 border border-zinc-800 text-center font-mono">
                      <div>
                        <span class="text-[9px] text-zinc-500 uppercase block">1 Pc (Sample)</span>
                        <b class="text-xs text-white">₹{{ item.tieredPricing[0].price }}</b>
                      </div>
                      <div class="border-x border-zinc-800">
                        <span class="text-[9px] text-zinc-500 uppercase block">25+ Pcs</span>
                        <b class="text-xs text-white">₹{{ item.tieredPricing[1].price }}</b>
                      </div>
                      <div>
                        <span class="text-[9px] text-zinc-500 uppercase block">100+ Pcs</span>
                        <b class="text-xs text-white">₹{{ item.tieredPricing[2].price }}</b>
                      </div>
                    </div>

                    <!-- Action Buttons: Launch 3D Studio & Inspect Sizing/Specs -->
                    <div class="flex items-center gap-2.5">
                      <a [routerLink]="['/customizer']" 
                         [queryParams]="{product: item.id}"
                         class="btn-shimmer hover-lift-sm flex-1 py-3 rounded-full bg-white hover:bg-zinc-200 text-black font-black text-xs font-mono uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-bw">
                        <span>Launch 3D Studio</span>
                        <span class="btn-arrow">&rarr;</span>
                      </a>

                      <button 
                        (click)="openQuickSpec(item)"
                        class="hover-lift-sm px-4 py-3 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white font-mono font-bold text-xs uppercase border border-zinc-800 transition-all cursor-pointer flex items-center gap-1.5">
                        <svg class="w-3.5 h-3.5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <span>Specs</span>
                      </button>
                    </div>

                  </div>

                </div>

              </article>
            }
          </div>
        }

        <!-- =================================================================== -->
        <!-- TECHNICAL SPEC EDITORIAL VIEW (Expanded High-Detail Rows)           -->
        <!-- =================================================================== -->
        @if (viewMode() === 'spec') {
          <div class="space-y-6">
            @for (item of filteredCatalog(); track item.id) {
              <article class="bg-black/80 rounded-3xl p-6 sm:p-8 border border-zinc-800/80 flex flex-col lg:flex-row gap-8 group hover:border-zinc-600 transition-all">
                
                <!-- Left: Square Thumbnail with Silhouette -->
                <div class="lg:w-80 shrink-0 relative aspect-square rounded-2xl overflow-hidden bg-zinc-900 cursor-pointer" (click)="openQuickSpec(item)">
                  <img 
                    [src]="item.image" 
                    [alt]="item.name" 
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  
                  <span class="absolute top-3 left-3 bg-black/90 backdrop-blur-md text-white text-[10px] font-mono font-bold px-3 py-1 rounded-full border border-zinc-700">
                    {{ item.silhouette }}
                  </span>
                  <span class="absolute top-3 right-3 bg-black/90 backdrop-blur-md text-white text-[10px] font-mono font-bold px-3 py-1 rounded-full border border-zinc-700">
                    {{ item.gsm }}
                  </span>
                </div>

                <!-- Center: Technical Narrative & Spec Matrix -->
                <div class="flex-1 flex flex-col justify-between space-y-4">
                  <div class="space-y-2.5">
                    <div class="flex items-center gap-3 text-xs font-mono text-zinc-500">
                      <span class="uppercase tracking-widest">{{ item.categoryLabel }}</span>
                      <span>&bull;</span>
                      <span class="text-white">{{ item.yarnSpecs }}</span>
                      <span>&bull;</span>
                      <span>Dispatch: {{ item.dispatchTime }}</span>
                    </div>

                    <h3 class="text-2xl font-black text-white font-display uppercase tracking-tight">
                      {{ item.name }}
                    </h3>

                    <p class="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
                      {{ item.description }}
                    </p>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-mono text-xs">
                      <div class="p-3 rounded-xl bg-zinc-950 border border-zinc-800">
                        <span class="text-zinc-500 uppercase text-[9px] block">Composition &amp; Finish</span>
                        <span class="text-white font-bold block mt-0.5">{{ item.composition }}</span>
                        <span class="text-zinc-400 text-[10px] block mt-0.5">{{ item.fitDescription }}</span>
                      </div>
                      <div class="p-3 rounded-xl bg-zinc-950 border border-zinc-800">
                        <span class="text-zinc-500 uppercase text-[9px] block">Branding Methods &amp; Durability</span>
                        <div class="flex flex-wrap gap-1 mt-1">
                          @for (pm of item.printMethods; track pm) {
                            <span class="px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 text-[9px] border border-zinc-800">
                              {{ pm }}
                            </span>
                          }
                        </div>
                      </div>
                    </div>

                    <!-- Available Sizes & Colorways -->
                    <div class="flex flex-wrap items-center gap-6 pt-2 font-mono text-xs">
                      <div class="flex items-center gap-2">
                        <span class="text-zinc-500 text-[10px] uppercase">Sizes/Options:</span>
                        <div class="flex gap-1">
                          @for (sz of item.availableSizes; track sz) {
                            <span class="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] font-bold text-white">
                              {{ sz }}
                            </span>
                          }
                        </div>
                      </div>

                      <div class="flex items-center gap-2">
                        <span class="text-zinc-500 text-[10px] uppercase">Finishes:</span>
                        <div class="flex gap-1.5">
                          @for (col of item.colorways; track col.name) {
                            <span 
                              class="w-4 h-4 rounded-full border border-zinc-700" 
                              [style.backgroundColor]="col.hex" 
                              [title]="col.name"></span>
                          }
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Tiered Bulk Table & Buttons (NO BAG BUTTONS) -->
                  <div class="pt-4 border-t border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    
                    <div class="flex items-center gap-4 font-mono">
                      <div>
                        <span class="text-[9px] text-zinc-500 uppercase block">Sample (1 Pc)</span>
                        <b class="text-base text-white">₹{{ item.tieredPricing[0].price }}</b>
                      </div>
                      <div class="h-8 w-px bg-zinc-800"></div>
                      <div>
                        <span class="text-[9px] text-zinc-500 uppercase block">Creator (25+)</span>
                        <b class="text-base text-white">₹{{ item.tieredPricing[1].price }}</b>
                      </div>
                      <div class="h-8 w-px bg-zinc-800"></div>
                      <div>
                        <span class="text-[9px] text-zinc-500 uppercase block">Wholesale (100+)</span>
                        <b class="text-base text-white">₹{{ item.tieredPricing[2].price }}</b>
                      </div>
                    </div>

                    <div class="flex items-center gap-3">
                      <button 
                        (click)="openQuickSpec(item)"
                        class="px-5 py-3 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white text-xs font-mono font-bold uppercase border border-zinc-800 transition cursor-pointer">
                        Full Sizing &amp; Specs
                      </button>

                      <a [routerLink]="['/customizer']" 
                         [queryParams]="{product: item.id}"
                         class="btn-shimmer hover-lift-sm px-7 py-3 rounded-full bg-white hover:bg-zinc-200 text-black font-mono font-black text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-bw">
                        <span>Launch 3D Studio</span>
                        <span class="btn-arrow">&rarr;</span>
                      </a>
                    </div>

                  </div>

                </div>

              </article>
            }
          </div>
        }

      </div>
    </section>

    <!-- ========================================================================= -->
    <!-- 4. SLIDE-OVER SPECIFICATION & MEASUREMENTS DRAWER                         -->
    <!-- ========================================================================= -->
    @if (selectedItemForSpec()) {
      <div class="fixed inset-0 z-50 overflow-hidden">
        <!-- Backdrop -->
        <div 
          (click)="closeQuickSpec()" 
          class="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity"></div>

        <div class="fixed inset-y-0 right-0 max-w-full flex pl-10">
          <div class="w-screen max-w-2xl bg-zinc-950 border-l border-zinc-800 p-6 sm:p-10 overflow-y-auto space-y-8 text-white relative">
            
            <!-- Drawer Close Button -->
            <button 
              (click)="closeQuickSpec()" 
              class="absolute top-6 right-6 p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition cursor-pointer">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>

            <!-- Product Header -->
            <div class="space-y-2">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono">
                <span>{{ selectedItemForSpec()!.silhouette }}</span>
                <span>&bull;</span>
                <span class="text-white font-bold">{{ selectedItemForSpec()!.gsm }}</span>
              </div>
              <h2 class="text-2xl sm:text-3xl font-black font-display uppercase tracking-tight">
                {{ selectedItemForSpec()!.name }}
              </h2>
              <p class="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
                {{ selectedItemForSpec()!.description }}
              </p>
            </div>

            <!-- Big Image Preview -->
            <div class="aspect-video sm:aspect-16/10 rounded-2xl overflow-hidden bg-black border border-zinc-800">
              <img 
                [src]="selectedItemForSpec()!.image" 
                [alt]="selectedItemForSpec()!.name" 
                class="w-full h-full object-cover" />
            </div>

            <!-- Detailed Technical Breakdown Table -->
            <div class="space-y-4">
              <h4 class="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 border-b border-zinc-800 pb-2">
                Technical &amp; Production Specifications
              </h4>

              <div class="grid grid-cols-2 gap-3 text-xs font-mono">
                <div class="p-3 rounded-xl bg-black border border-zinc-800/80 space-y-1">
                  <span class="text-[10px] text-zinc-500 uppercase">Yarn / Construction</span>
                  <span class="text-white font-bold block">{{ selectedItemForSpec()!.yarnSpecs }}</span>
                </div>
                <div class="p-3 rounded-xl bg-black border border-zinc-800/80 space-y-1">
                  <span class="text-[10px] text-zinc-500 uppercase">Material Composition</span>
                  <span class="text-white font-bold block">{{ selectedItemForSpec()!.composition }}</span>
                </div>
                <div class="p-3 rounded-xl bg-black border border-zinc-800/80 space-y-1">
                  <span class="text-[10px] text-zinc-500 uppercase">Finish &amp; Coating</span>
                  <span class="text-white font-bold block">{{ selectedItemForSpec()!.fitDescription }}</span>
                </div>
                <div class="p-3 rounded-xl bg-black border border-zinc-800/80 space-y-1">
                  <span class="text-[10px] text-zinc-500 uppercase">Quality Benchmarks</span>
                  <span class="text-white font-bold block">OEKO-TEX / Food-Grade Safe</span>
                </div>
              </div>
            </div>

            <!-- Measurements Chart (If Garment) -->
            @if (selectedItemForSpec()!.measurements && selectedItemForSpec()!.measurements!.length > 0) {
              <div class="space-y-3 font-mono">
                <div class="flex items-center justify-between border-b border-zinc-800 pb-2">
                  <h4 class="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Measurement Matrix
                  </h4>
                  <span class="text-[10px] text-zinc-500">Tolerance: &plusmn; 0.5 in</span>
                </div>

                <div class="overflow-x-auto">
                  <table class="w-full text-xs text-left">
                    <thead>
                      <tr class="border-b border-zinc-800 text-zinc-500 text-[10px] uppercase">
                        <th class="py-2 px-3">Size</th>
                        <th class="py-2 px-3">Chest / Width</th>
                        <th class="py-2 px-3">Length</th>
                        <th class="py-2 px-3">Sleeve / Inseam</th>
                        <th class="py-2 px-3">Shoulder / Thigh</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-zinc-900">
                      @for (row of selectedItemForSpec()!.measurements; track row.size) {
                        <tr class="hover:bg-zinc-900/50 transition">
                          <td class="py-2 px-3 font-bold text-white">{{ row.size }}</td>
                          <td class="py-2 px-3 text-zinc-300">{{ row.chest }}</td>
                          <td class="py-2 px-3 text-zinc-300">{{ row.length }}</td>
                          <td class="py-2 px-3 text-zinc-300">{{ row.sleeve }}</td>
                          <td class="py-2 px-3 text-zinc-300">{{ row.shoulder }}</td>
                        </tr>
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            }

            <!-- Recommended Print & Branding Techniques -->
            <div class="space-y-3 font-mono">
              <h4 class="text-xs font-bold uppercase tracking-wider text-zinc-400 border-b border-zinc-800 pb-2">
                Certified Factory Branding Techniques
              </h4>
              <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
                @for (pm of selectedItemForSpec()!.printMethods; track pm) {
                  <div class="p-2.5 rounded-xl bg-black border border-zinc-800 text-center text-xs">
                    <span class="text-white font-bold block">{{ pm }}</span>
                    <span class="text-[9px] text-zinc-500 block">Factory Calibrated</span>
                  </div>
                }
              </div>
            </div>

            <!-- Drawer Bottom CTA Buttons -->
            <div class="pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a [routerLink]="['/customizer']" 
                 [queryParams]="{product: selectedItemForSpec()!.id}"
                 (click)="closeQuickSpec()"
                 class="btn-shimmer hover-lift-sm flex-1 py-3.5 rounded-full bg-white hover:bg-zinc-200 text-black font-black text-xs font-mono uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-bw">
                <span>Launch in 3D Customizer</span>
                <span class="btn-arrow">&rarr;</span>
              </a>

              <a href="https://wa.me/919944107633?text=Hi%20Brand%20Peoples,%20I%20would%20like%20to%20order%20samples%20or%20inquire%20about%20{{ selectedItemForSpec()!.name }}" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 class="px-6 py-3.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-200 font-mono font-bold text-xs uppercase border border-zinc-800 transition text-center">
                WhatsApp Factory Desk
              </a>
            </div>

          </div>
        </div>
      </div>
    }
  `
})
export class CatalogComponent implements OnInit {
  private route = inject(ActivatedRoute);

  activeCategory = signal<string>('all');
  searchQuery = '';
  selectedGsmRange = 'all';
  selectedSort = 'featured';
  viewMode = signal<'grid' | 'spec'>('grid');

  selectedItemForSpec = signal<CatalogItem | null>(null);

  filterTabs = [
    { key: 'all', label: 'All Profiles' },
    { key: 'tees', label: 'Oversized Tees' },
    { key: 'hoodies', label: 'Heavy Hoodies' },
    { key: 'pants', label: 'Pants & Joggers' },
    { key: 'drinkware', label: 'Water Bottles' },
    { key: 'caps', label: 'Caps & Headwear' },
    { key: 'activewear', label: 'Polos & Active' },
    { key: 'trims', label: 'DTF & Art Painting' }
  ];

  catalogItems: CatalogItem[] = [
    // 1. Water Bottle Branding & Rotary UV Painting
    {
      id: 'thermal-water-bottle-750',
      name: '750ml Vacuum Insulated Stainless Steel Water Bottle',
      silhouette: 'Matte Powder-Coated Flask',
      category: 'drinkware',
      categoryLabel: 'Custom Drinkware',
      price: 449,
      tieredPricing: [
        { range: '1 - 24 Pcs', price: 449, discountBadge: 'Sample' },
        { range: '25 - 99 Pcs', price: 349, discountBadge: '-22%' },
        { range: '100+ Pcs', price: 279, discountBadge: '-38%' }
      ],
      gsm: '304 Pro-Grade Steel',
      gsmValue: 304,
      yarnSpecs: 'Double-Wall Vacuum Insulation',
      composition: '18/8 Food-Grade Stainless Steel • BPA-Free',
      fitDescription: 'Laser-etched precision logo engraving with 360° cylindrical rotary UV painting and powder-coat finish',
      description: 'Engineered for executive corporate kits, creator merchandise, and fitness labels. Keeps drinks ice cold for 24 hours or piping hot for 12 hours. Supports personalized individual recipient name laser engraving alongside full-color UV painted brand logos.',
      image: 'images/products/water_bottle_branding.jpg',
      badge: 'Laser & UV Painting',
      availableSizes: ['750ml Standard', '500ml Flask Option'],
      colorways: [
        { name: 'Matte Stealth Black', hex: '#09090b' },
        { name: 'Brushed Steel', hex: '#d4d4d8' },
        { name: 'Alpine White', hex: '#f4f4f5' },
        { name: 'Military Olive', hex: '#333d29' }
      ],
      printMethods: ['Fiber Laser Engraving', '360° Cylindrical Rotary UV Painting', 'Pad Printing'],
      features: ['Double-wall vacuum insulation', 'Condensation-free powder coat', 'Leakproof insulated lid', 'Zero metallic taste'],
      dispatchTime: '24h Dispatch',
      stockStatus: 'In Stock'
    },
    // 2. Heavyweight Streetwear Pants & Joggers
    {
      id: 'heavy-fleece-joggers-380',
      name: '380 GSM Heavy French Terry Streetwear Fleece Pants',
      silhouette: 'Tapered Streetwear Fit',
      category: 'pants',
      categoryLabel: 'Streetwear Bottoms',
      price: 899,
      tieredPricing: [
        { range: '1 - 24 Pcs', price: 899, discountBadge: 'Sample' },
        { range: '25 - 99 Pcs', price: 719, discountBadge: '-20%' },
        { range: '100+ Pcs', price: 599, discountBadge: '-33%' }
      ],
      gsm: '380 GSM French Terry',
      gsmValue: 380,
      yarnSpecs: '100% Combed Cotton Unbrushed Loopback',
      composition: 'Heavyweight Loopback Fleece • 2x2 Lycra Ribbing',
      fitDescription: 'Elasticated waistband with chunky cotton drawcords, deep welt side pockets, and snug 2x2 ribbed ankle cuffs',
      description: 'Heavy-drape streetwear sweatpants engineered to pair with our oversized tees and boxy hoodies. Deep pockets designed to hold smartphones without bulging, pre-shrunk loopback interior, and calibrated thigh space for high-density 3D silicone heat transfer crests.',
      image: 'images/products/streetwear_fleece_joggers.jpg',
      badge: 'Heavy Fleece',
      availableSizes: ['S (30")', 'M (32")', 'L (34")', 'XL (36")', 'XXL (38")'],
      colorways: [
        { name: 'Carbon Black', hex: '#09090b' },
        { name: 'Heather Grey', hex: '#71717a' },
        { name: 'Washed Olive', hex: '#283618' }
      ],
      printMethods: ['3D Silicone Relief', '2400 DPI DTF Print', 'Direct Embroidery'],
      features: ['Chunky round drawcord', 'Matte metal aglets', 'Deep welt pockets', 'Pre-shrunk fabric'],
      measurements: [
        { size: 'S', chest: '30 Waist', length: '39 In', sleeve: '28 Inseam', shoulder: '24 Thigh' },
        { size: 'M', chest: '32 Waist', length: '40 In', sleeve: '29 Inseam', shoulder: '25 Thigh' },
        { size: 'L', chest: '34 Waist', length: '41 In', sleeve: '30 Inseam', shoulder: '26 Thigh' },
        { size: 'XL', chest: '36 Waist', length: '42 In', sleeve: '31 Inseam', shoulder: '27 Thigh' }
      ],
      dispatchTime: '24h Dispatch',
      stockStatus: 'In Stock'
    },
    // 3. Fine-Art Textile Painting & Photographic Prints
    {
      id: 'fine-art-canvas-painting',
      name: '2400 DPI Fine-Art Textile Painting & Graphic Canvas',
      silhouette: 'High-Fidelity Art Print',
      category: 'trims',
      categoryLabel: 'Artistic Printing',
      price: 199,
      tieredPricing: [
        { range: '1 - 24 Pcs', price: 199, discountBadge: 'Sample' },
        { range: '25 - 99 Pcs', price: 149, discountBadge: '-25%' },
        { range: '100+ Pcs', price: 110, discountBadge: '-45%' }
      ],
      gsm: '2400 DPI Photographic',
      gsmValue: 240,
      yarnSpecs: 'High-Density Micro-Pigment Ink Dispersion',
      composition: 'Museum-Grade Textile Pigments on Coated PET / 100% Heavy Cotton Canvas',
      fitDescription: 'Full-spectrum photo-realistic color reproduction with oil-painting brushstroke detail and zero color bleed',
      description: 'Calibrated for artists, creator merchandise, and high-fashion streetwear brands. Accurately reproduces intricate watercolor gradients, oil painting textures, and complex hyper-detailed illustrations onto cotton garments, heavy canvas totes, and banners with 50+ wash longevity.',
      image: 'images/products/fine_art_canvas_painting.jpg',
      badge: 'Fine-Art Painting',
      availableSizes: ['A4 Format', 'A3 Oversized Backprint', 'Custom Jumbo Canvas'],
      colorways: [
        { name: 'Full Photographic Spectrum', hex: '#ffffff' }
      ],
      printMethods: ['2400 DPI Photographic DTF', 'Direct-to-Garment Painting', 'Giclée Textile Print'],
      features: ['Museum-grade color fidelity', 'Continuous tone gradients', 'Zero handfeel stiffness', '50+ wash fastness'],
      dispatchTime: 'Same Day Dispatch',
      stockStatus: 'In Stock'
    },
    // 4. Luxury Oversized Heavyweight Tee
    {
      id: 'oversized-tee-240',
      name: '240 GSM Luxury Oversized Heavyweight Tee',
      silhouette: 'Boxy Drop Shoulder',
      category: 'tees',
      categoryLabel: 'Streetwear Blanks',
      price: 499,
      tieredPricing: [
        { range: '1 - 24 Pcs', price: 499, discountBadge: 'Sample' },
        { range: '25 - 99 Pcs', price: 399, discountBadge: '-20%' },
        { range: '100+ Pcs', price: 320, discountBadge: '-36%' }
      ],
      gsm: '240 GSM Combed',
      gsmValue: 240,
      yarnSpecs: '16s Super-Combed Ringspun',
      composition: '100% Cotton Bio-Washed Single Jersey',
      fitDescription: 'Drop shoulder relaxed fit with wide 1.25" spandex ribbed collar',
      description: 'The definitive heavyweight streetwear silhouette. Bio-washed for an ultra-smooth printable surface that holds sharp 2400 DPI DTF prints and thick 3D silicone heat transfers.',
      image: 'images/products/oversized_tee_240.jpg',
      badge: 'Bestseller',
      availableSizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'],
      colorways: [
        { name: 'Pitch Black', hex: '#09090b' },
        { name: 'Chalk White', hex: '#f4f4f5' },
        { name: 'Vintage Charcoal', hex: '#27272a' },
        { name: 'Espresso Brown', hex: '#3e2723' },
        { name: 'Drab Olive', hex: '#333d29' }
      ],
      printMethods: ['3D Silicone', '2400 DPI DTF', 'Screen Puff', 'Embroidery'],
      features: ['100% Combed Cotton', 'Pre-shrunk fabric', 'Spandex rib collar', 'Twin-needle hems'],
      measurements: [
        { size: 'S', chest: '42', length: '28', sleeve: '8.5', shoulder: '20' },
        { size: 'M', chest: '44', length: '29', sleeve: '9.0', shoulder: '21' },
        { size: 'L', chest: '46', length: '30', sleeve: '9.5', shoulder: '22' },
        { size: 'XL', chest: '48', length: '31', sleeve: '10.0', shoulder: '23' },
        { size: 'XXL', chest: '50', length: '32', sleeve: '10.5', shoulder: '24' }
      ],
      dispatchTime: '24h Dispatch',
      stockStatus: 'In Stock'
    },
    // 5. Vintage Acid-Washed Tee
    {
      id: 'vintage-acidwash-tee',
      name: '260 GSM Vintage Acid-Washed Heavy Streetwear Tee',
      silhouette: 'Washed Boxy Fit',
      category: 'tees',
      categoryLabel: 'Vintage Collection',
      price: 579,
      tieredPricing: [
        { range: '1 - 24 Pcs', price: 579, discountBadge: 'Sample' },
        { range: '25 - 99 Pcs', price: 469, discountBadge: '-19%' },
        { range: '100+ Pcs', price: 380, discountBadge: '-34%' }
      ],
      gsm: '260 GSM Mineral Wash',
      gsmValue: 260,
      yarnSpecs: '14s Heavy Gauge Ringspun',
      composition: '100% Cotton Stone & Acid Mineral Wash',
      fitDescription: 'Relaxed oversized fit with authentic distressed neck and faded dye patina',
      description: 'Artisan mineral-washed heavy cotton featuring subtle cloudy marbled textures and worn-in softness. Pre-shrunk and conditioned to prevent print discoloration.',
      image: 'images/products/vintage_acidwash_tee.jpg',
      badge: 'Artisan Wash',
      availableSizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colorways: [
        { name: 'Washed Charcoal', hex: '#3f3f46' },
        { name: 'Vintage Black', hex: '#18181b' },
        { name: 'Mineral Sand', hex: '#d4d4d8' }
      ],
      printMethods: ['2400 DPI DTF', '3D Silicone', 'Distressed Screen'],
      features: ['Acid wash patina', 'Heavy slub cotton', 'No shrinkage', 'Reinforced collar'],
      measurements: [
        { size: 'S', chest: '42', length: '28.5', sleeve: '8.5', shoulder: '20.5' },
        { size: 'M', chest: '44', length: '29.5', sleeve: '9.0', shoulder: '21.5' },
        { size: 'L', chest: '46', length: '30.5', sleeve: '9.5', shoulder: '22.5' },
        { size: 'XL', chest: '48', length: '31.5', sleeve: '10.0', shoulder: '23.5' }
      ],
      dispatchTime: '48h Dispatch',
      stockStatus: 'In Stock'
    },
    // 6. Essential Daily Crewneck Tee
    {
      id: 'crewneck-tee-180',
      name: '180 GSM Essential Daily Bio-Washed Crewneck Tee',
      silhouette: 'Tailored Regular Cut',
      category: 'tees',
      categoryLabel: 'Corporate & Core',
      price: 349,
      tieredPricing: [
        { range: '1 - 24 Pcs', price: 349, discountBadge: 'Sample' },
        { range: '25 - 99 Pcs', price: 269, discountBadge: '-23%' },
        { range: '100+ Pcs', price: 199, discountBadge: '-43%' }
      ],
      gsm: '180 GSM Bio-Wash',
      gsmValue: 180,
      yarnSpecs: '24s Combed Cotton Ringspun',
      composition: '100% Super-Combed Bio-Washed Cotton',
      fitDescription: 'Modern regular tailored crewneck for everyday wear and team merchandising',
      description: 'Silky smooth handfeel with zero surface fuzz. Ideal for corporate onboarding packs, event runs, and high-detail graphic screen prints.',
      image: 'images/products/crewneck_tee_180.jpg',
      availableSizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'],
      colorways: [
        { name: 'Chalk White', hex: '#ffffff' },
        { name: 'Pitch Black', hex: '#0a0a0a' },
        { name: 'Navy Blue', hex: '#1e293b' },
        { name: 'Heather Grey', hex: '#71717a' },
        { name: 'Forest Green', hex: '#14532d' }
      ],
      printMethods: ['2400 DPI DTF', 'Waterbased Screen', 'Embroidery'],
      features: ['Ultra-fine yarn', 'Anti-pilling enzyme wash', 'Twin-needle hem', 'Pre-shrunk'],
      measurements: [
        { size: 'S', chest: '38', length: '27', sleeve: '7.5', shoulder: '17' },
        { size: 'M', chest: '40', length: '28', sleeve: '8.0', shoulder: '18' },
        { size: 'L', chest: '42', length: '29', sleeve: '8.5', shoulder: '19' },
        { size: 'XL', chest: '44', length: '30', sleeve: '9.0', shoulder: '20' }
      ],
      dispatchTime: '24h Dispatch',
      stockStatus: 'In Stock'
    },
    // 7. Heavy French Terry Hoodie
    {
      id: 'french-terry-hoodie-380',
      name: '380 GSM Heavy French Terry Boxy Hoodie',
      silhouette: 'Boxy Drop-Shoulder Fleece',
      category: 'hoodies',
      categoryLabel: 'Streetwear Fleece',
      price: 999,
      tieredPricing: [
        { range: '1 - 24 Pcs', price: 999, discountBadge: 'Sample' },
        { range: '25 - 99 Pcs', price: 799, discountBadge: '-20%' },
        { range: '100+ Pcs', price: 680, discountBadge: '-32%' }
      ],
      gsm: '380 GSM French Terry',
      gsmValue: 380,
      yarnSpecs: '100% Cotton Unbrushed Loopback',
      composition: 'Heavyweight Loopback French Terry Cotton',
      fitDescription: 'Oversized boxy drop-shoulder cut with double-layer upright hood and kangaroo pocket',
      description: 'Luxury heavyweight feel without synthetic polyester blend. Engineered for direct thermo-embossing, oversized backprints, and thick tactile 3D silicone graphics.',
      image: 'images/products/french_terry_hoodie_380.jpg',
      badge: 'Heavyweight',
      availableSizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colorways: [
        { name: 'Pitch Black', hex: '#09090b' },
        { name: 'Bone White', hex: '#e4e4e7' },
        { name: 'Charcoal Grey', hex: '#27272a' },
        { name: 'Deep Olive', hex: '#283618' }
      ],
      printMethods: ['3D Silicone', 'Direct Thermo-Emboss', 'DTF Digital', 'Chenille Embroidery'],
      features: ['Double-layer self-fabric hood', 'Heavy 2x2 rib cuffs', 'Kangaroo pouch', 'Pre-shrunk'],
      measurements: [
        { size: 'S', chest: '44', length: '27.5', sleeve: '24', shoulder: '22' },
        { size: 'M', chest: '46', length: '28.5', sleeve: '24.5', shoulder: '23' },
        { size: 'L', chest: '48', length: '29.5', sleeve: '25', shoulder: '24' },
        { size: 'XL', chest: '50', length: '30.5', sleeve: '25.5', shoulder: '25' }
      ],
      dispatchTime: '24h Dispatch',
      stockStatus: 'In Stock'
    },
    // 8. Ultra-Heavyweight 450 GSM Loopback Hoodie
    {
      id: 'ultra-heavy-hoodie-450',
      name: '450 GSM Ultra-Heavy Diagonal Loopback Hoodie',
      silhouette: 'Pro Heavyweight Drop Shoulder',
      category: 'hoodies',
      categoryLabel: 'Luxury Fleece',
      price: 1299,
      tieredPricing: [
        { range: '1 - 24 Pcs', price: 1299, discountBadge: 'Sample' },
        { range: '25 - 99 Pcs', price: 1049, discountBadge: '-19%' },
        { range: '100+ Pcs', price: 890, discountBadge: '-31%' }
      ],
      gsm: '450 GSM Diagonal Terry',
      gsmValue: 450,
      yarnSpecs: 'Extra-Thick Diagonal Loopback Cotton',
      composition: '100% Combed Compact Cotton • Extra Heavy Gauge',
      fitDescription: 'Architectural heavy silhouette that stands upright with structural drape',
      description: 'Our most luxurious fleece blank. Constructed with heavy diagonal weave loopback for supreme thermal insulation, weight, and unmatched durability.',
      image: 'images/products/ultra_heavy_hoodie_450.jpg',
      badge: 'Ultra-Heavy',
      availableSizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colorways: [
        { name: 'Slate Heather', hex: '#52525b' },
        { name: 'Pitch Black', hex: '#09090b' },
        { name: 'Espresso', hex: '#271c19' }
      ],
      printMethods: ['High-Density 3D Silicone', 'Direct Thermo-Emboss', 'Chenille Embroidery'],
      features: ['450 GSM Diagonal Terry', 'No drawcords clean neck', 'Hidden side pockets', '100% Cotton'],
      measurements: [
        { size: 'S', chest: '45', length: '28', sleeve: '24.5', shoulder: '22.5' },
        { size: 'M', chest: '47', length: '29', sleeve: '25', shoulder: '23.5' },
        { size: 'L', chest: '49', length: '30', sleeve: '25.5', shoulder: '24.5' },
        { size: 'XL', chest: '51', length: '31', sleeve: '26', shoulder: '25.5' }
      ],
      dispatchTime: '48h Dispatch',
      stockStatus: 'In Stock'
    },
    // 9. Streetwear Crewneck Sweatshirt
    {
      id: 'fleece-crewneck-340',
      name: '340 GSM French Terry Streetwear Crewneck',
      silhouette: 'Boxy Casual Sweatshirt',
      category: 'hoodies',
      categoryLabel: 'Streetwear Fleece',
      price: 799,
      tieredPricing: [
        { range: '1 - 24 Pcs', price: 799, discountBadge: 'Sample' },
        { range: '25 - 99 Pcs', price: 639, discountBadge: '-20%' },
        { range: '100+ Pcs', price: 540, discountBadge: '-32%' }
      ],
      gsm: '340 GSM French Terry',
      gsmValue: 340,
      yarnSpecs: 'Compact Combed Cotton Loopback',
      composition: '100% Bio-Washed Combed Cotton',
      fitDescription: 'Minimalist boxy drop-shoulder cut with ribbed triangular collar insert',
      description: 'Clean silhouette designed for elevated corporate apparel lines and understated streetwear collections. Ribbed cuffs and hem retain form over 50+ wash cycles.',
      image: 'images/products/fleece_crewneck_340.jpg',
      availableSizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colorways: [
        { name: 'Pitch Black', hex: '#09090b' },
        { name: 'Heather Grey', hex: '#71717a' },
        { name: 'Dark Navy', hex: '#1e293b' }
      ],
      printMethods: ['3D Silicone', '2400 DPI DTF', 'Embroidery'],
      features: ['V-stitch collar gusset', '2x2 Lycra ribbing', 'Zero polyester', 'Colorfast Grade 4.5'],
      measurements: [
        { size: 'S', chest: '42', length: '27', sleeve: '24', shoulder: '20' },
        { size: 'M', chest: '44', length: '28', sleeve: '24.5', shoulder: '21' },
        { size: 'L', chest: '46', length: '29', sleeve: '25', shoulder: '22' },
        { size: 'XL', chest: '48', length: '30', sleeve: '25.5', shoulder: '23' }
      ],
      dispatchTime: '24h Dispatch',
      stockStatus: 'In Stock'
    },
    // 10. Structured 6-Panel Twill Cap
    {
      id: 'structured-twill-cap',
      name: '6-Panel Structured Cotton Twill Cap',
      silhouette: 'Rigid Crown 6-Panel',
      category: 'caps',
      categoryLabel: 'Headwear',
      price: 299,
      tieredPricing: [
        { range: '1 - 24 Pcs', price: 299, discountBadge: 'Sample' },
        { range: '25 - 99 Pcs', price: 229, discountBadge: '-23%' },
        { range: '100+ Pcs', price: 169, discountBadge: '-43%' }
      ],
      gsm: 'Heavy Cotton Twill',
      gsmValue: 280,
      yarnSpecs: '100% Brushed Cotton Chino Twill',
      composition: 'Rigid Buckram Crown with Pre-Curved Visor',
      fitDescription: 'Pro-style structured crown with adjustable antique brass buckle strap',
      description: 'Sturdy structured front panels calibrated for raised 3D rubber badges, metallic embroidery, and woven label applications.',
      image: 'images/products/twill_cap_structured.jpg',
      badge: 'Popular',
      availableSizes: ['One Size (Adjustable)'],
      colorways: [
        { name: 'Pitch Black', hex: '#09090b' },
        { name: 'Stone Grey', hex: '#a1a1aa' },
        { name: 'Navy', hex: '#1e293b' }
      ],
      printMethods: ['3D Rubber Badges', '3D Puff Embroidery', 'Laser Patches'],
      features: ['Rigid buckram front', 'Antique brass closure', 'Cotton sweatband', '6 embroidered eyelets'],
      dispatchTime: '24h Dispatch',
      stockStatus: 'In Stock'
    },
    // 11. Vintage-Washed Canvas Dad Cap
    {
      id: 'canvas-dad-cap',
      name: 'Vintage Washed Cotton Canvas Dad Cap',
      silhouette: 'Unstructured Relaxed 6-Panel',
      category: 'caps',
      categoryLabel: 'Headwear',
      price: 329,
      tieredPricing: [
        { range: '1 - 24 Pcs', price: 329, discountBadge: 'Sample' },
        { range: '25 - 99 Pcs', price: 249, discountBadge: '-24%' },
        { range: '100+ Pcs', price: 189, discountBadge: '-42%' }
      ],
      gsm: 'Washed Canvas',
      gsmValue: 260,
      yarnSpecs: '100% Bio-Washed Cotton Canvas',
      composition: 'Soft Unstructured Low-Profile Crown',
      fitDescription: 'Relaxed vintage silhouette that conforms naturally to the head',
      description: 'Soft-touch washed canvas finish with subtle tonal fade. Pre-curved bill with self-fabric tuck-in strap with brass slide buckle.',
      image: 'images/products/canvas_dad_cap.jpg',
      availableSizes: ['One Size (Adjustable)'],
      colorways: [
        { name: 'Washed Charcoal', hex: '#27272a' },
        { name: 'Vintage Olive', hex: '#333d29' },
        { name: 'Chalk White', hex: '#f4f4f5' }
      ],
      printMethods: ['Flat Embroidery', 'Woven Label Attachment', 'Vintage DTF'],
      features: ['Unstructured crown', 'Brass slide closure', 'Enzyme washed soft feel'],
      dispatchTime: '24h Dispatch',
      stockStatus: 'In Stock'
    },
    // 12. Honeycomb Pique Polo
    {
      id: 'pique-polo-240',
      name: '240 GSM Combed Cotton Honeycomb Pique Polo',
      silhouette: 'Executive Regular Fit',
      category: 'activewear',
      categoryLabel: 'Corporate Formal',
      price: 599,
      tieredPricing: [
        { range: '1 - 24 Pcs', price: 599, discountBadge: 'Sample' },
        { range: '25 - 99 Pcs', price: 469, discountBadge: '-21%' },
        { range: '100+ Pcs', price: 379, discountBadge: '-36%' }
      ],
      gsm: '240 GSM Pique',
      gsmValue: 240,
      yarnSpecs: 'Double Lacoste Knit Combed Cotton',
      composition: '100% Super-Combed Cotton Honeycomb Pique',
      fitDescription: '2-button placket with smoke mother-of-pearl buttons and knit ribbed collar',
      description: 'Breathable honeycomb knit engineered for corporate branding, tech startups, and executive events. Holds crisp chest embroidery and 3D silicone crests.',
      image: 'images/products/pique_polo_240.jpg',
      availableSizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL'],
      colorways: [
        { name: 'Jet Black', hex: '#09090b' },
        { name: 'Optic White', hex: '#ffffff' },
        { name: 'Navy', hex: '#1e293b' },
        { name: 'Charcoal', hex: '#27272a' }
      ],
      printMethods: ['Precision Embroidery', '3D Silicone Chest Crest', 'DTF Print'],
      features: ['Anti-roll flat knit collar', 'Mother-of-pearl buttons', 'Side seam vents'],
      measurements: [
        { size: 'S', chest: '39', length: '27.5', sleeve: '8', shoulder: '17.5' },
        { size: 'M', chest: '41', length: '28.5', sleeve: '8.5', shoulder: '18.5' },
        { size: 'L', chest: '43', length: '29.5', sleeve: '9', shoulder: '19.5' },
        { size: 'XL', chest: '45', length: '30.5', sleeve: '9.5', shoulder: '20.5' }
      ],
      dispatchTime: '24h Dispatch',
      stockStatus: 'In Stock'
    },
    // 13. Active Performance Tee
    {
      id: 'performance-tee-active',
      name: '220 GSM Anti-Microbial Interlock Performance Tee',
      silhouette: 'Athletic Fitted Cut',
      category: 'activewear',
      categoryLabel: 'Performance Merch',
      price: 449,
      tieredPricing: [
        { range: '1 - 24 Pcs', price: 449, discountBadge: 'Sample' },
        { range: '25 - 99 Pcs', price: 349, discountBadge: '-22%' },
        { range: '100+ Pcs', price: 279, discountBadge: '-38%' }
      ],
      gsm: '220 GSM Interlock',
      gsmValue: 220,
      yarnSpecs: 'Quick-Dry Micro-Poly with Cotton Handfeel',
      composition: 'Technical Poly-Spandex Interlock with Moisture Wicking',
      fitDescription: 'Ergonomic raglan shoulder seams with 4-way mechanical stretch',
      description: 'High-performance activewear engineered for marathon merch, sports academies, and fitness creator labels. Rapid moisture evaporation and UPF 30+ sun protection.',
      image: 'images/products/performance_tee_active.jpg',
      availableSizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colorways: [
        { name: 'Carbon Black', hex: '#18181b' },
        { name: 'Optic White', hex: '#f8fafc' },
        { name: 'Slate Grey', hex: '#475569' }
      ],
      printMethods: ['Reflective DTF', 'Sublimation', 'Silicone Relief'],
      features: ['Moisture-wicking dry fit', '4-way stretch', 'Flatlock anti-chafing seams'],
      measurements: [
        { size: 'S', chest: '38', length: '27', sleeve: '8', shoulder: '17' },
        { size: 'M', chest: '40', length: '28', sleeve: '8.5', shoulder: '18' },
        { size: 'L', chest: '42', length: '29', sleeve: '9', shoulder: '19' },
        { size: 'XL', chest: '44', length: '30', sleeve: '9.5', shoulder: '20' }
      ],
      dispatchTime: '24h Dispatch',
      stockStatus: 'In Stock'
    },
    // 14. DTF Digital Gang Sheet Roll
    {
      id: 'dtf-gang-sheet-1m',
      name: '2400 DPI DTF Digital PET Transfer Gang Sheet (1 Meter Roll)',
      silhouette: 'Continuous 58cm × 100cm Roll',
      category: 'trims',
      categoryLabel: 'Digital Transfers',
      price: 140,
      tieredPricing: [
        { range: '1 - 9 Meters', price: 140, discountBadge: 'Standard' },
        { range: '10 - 49 Meters', price: 110, discountBadge: '-21%' },
        { range: '50+ Meters', price: 85, discountBadge: '-39%' }
      ],
      gsm: '2400 DPI CMYK+W',
      gsmValue: 100,
      yarnSpecs: '75 Micron Matte Frosted Cold-Peel PET Film',
      composition: 'High-Pigment Eco Textile Inks with High-Stretch TPU Powder',
      fitDescription: 'Pack dozens of different designs, logos, and neck labels onto a 1-meter continuous gang sheet',
      description: 'Factory-direct DTF transfer rolls. Delivers vivid photographic clarity with an opaque high-density titanium white underbase. Presses onto 100% cotton, fleece, canvas, or poly in 12 seconds.',
      image: 'images/products/dtf_gang_sheet_roll.jpg',
      badge: 'Fast Dispatch',
      availableSizes: ['58cm × 100cm Roll', 'Continuous Gang Roll'],
      colorways: [
        { name: 'CMYK+White Full Spectrum', hex: '#ffffff' }
      ],
      printMethods: ['Heat Press Application (155°C, 12s)'],
      features: ['2400 DPI resolution', '50+ wash durability', 'Cold peel matte finish', 'Zero weeding needed'],
      dispatchTime: 'Same Day Dispatch',
      stockStatus: 'In Stock'
    },
    // 15. 3D Silicone Relief Heat Transfers
    {
      id: 'tactile-silicone-patches',
      name: 'High-Density 3D Tactile Silicone Relief Heat Transfers',
      silhouette: 'Multi-Level 3D Relief Badges',
      category: 'trims',
      categoryLabel: 'Custom Brand Trims',
      price: 4.50,
      tieredPricing: [
        { range: '100 - 499 Pcs', price: 4.50, discountBadge: 'Minimum' },
        { range: '500 - 1,999 Pcs', price: 3.20, discountBadge: '-28%' },
        { range: '2,000+ Pcs', price: 2.10, discountBadge: '-53%' }
      ],
      gsm: 'Shore 35A - 60A',
      gsmValue: 150,
      yarnSpecs: '100% Non-Toxic Liquid Silicone Rubber',
      composition: '3D Beveled Multi-Layer Silicone on Heat-Activated Adhesive Carrier',
      fitDescription: 'Raised dimensional rubber-like emblems with razor-sharp beveled edges',
      description: 'The luxury badge format used by high-end streetwear and sportswear labels. Flexible, washable, and completely waterproof. Adheres securely to cotton, fleece, and twill.',
      image: 'images/products/tactile_silicone_patches.jpg',
      badge: 'Luxury Trim',
      availableSizes: ['Custom Dimensions up to 10×10 cm'],
      colorways: [
        { name: 'Monochrome Black on Black', hex: '#000000' },
        { name: 'Optic White on Charcoal', hex: '#e4e4e7' },
        { name: 'Custom PMS Dye', hex: '#71717a' }
      ],
      printMethods: ['Direct Heat-Press Transfer (160°C, 15s)'],
      features: ['Beveled 3D profile', 'Super elastic elasticity', 'OEKO-TEX compliant', 'Industrial wash fast'],
      dispatchTime: '48h Sampling',
      stockStatus: 'Custom Batch'
    }
  ];

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['cat']) {
        const cat = params['cat'].toLowerCase();
        if (cat.includes('tee') || cat.includes('apparel')) this.activeCategory.set('tees');
        else if (cat.includes('hoodie') || cat.includes('fleece')) this.activeCategory.set('hoodies');
        else if (cat.includes('pant') || cat.includes('jogger')) this.activeCategory.set('pants');
        else if (cat.includes('bottle') || cat.includes('drink') || cat.includes('tumbler')) this.activeCategory.set('drinkware');
        else if (cat.includes('cap') || cat.includes('headwear')) this.activeCategory.set('caps');
        else if (cat.includes('polo') || cat.includes('active')) this.activeCategory.set('activewear');
        else if (cat.includes('dtf') || cat.includes('paint') || cat.includes('trim') || cat.includes('label')) this.activeCategory.set('trims');
      }
    });
  }

  setCategory(cat: string): void {
    this.activeCategory.set(cat);
  }

  getCategoryCount(catKey: string): number {
    if (catKey === 'all') return this.catalogItems.length;
    return this.catalogItems.filter(item => item.category === catKey).length;
  }

  resetFilters(): void {
    this.activeCategory.set('all');
    this.searchQuery = '';
    this.selectedGsmRange = 'all';
    this.selectedSort = 'featured';
  }

  filteredCatalog = computed(() => {
    let items = [...this.catalogItems];
    const cat = this.activeCategory();
    const query = this.searchQuery.trim().toLowerCase();
    const gsmRange = this.selectedGsmRange;
    const sort = this.selectedSort;

    // 1. Category Filter
    if (cat !== 'all') {
      items = items.filter(i => i.category === cat);
    }

    // 2. Search Query Filter
    if (query) {
      items = items.filter(i => 
        i.name.toLowerCase().includes(query) ||
        i.silhouette.toLowerCase().includes(query) ||
        i.description.toLowerCase().includes(query) ||
        i.gsm.toLowerCase().includes(query) ||
        i.composition.toLowerCase().includes(query) ||
        i.printMethods.some(pm => pm.toLowerCase().includes(query))
      );
    }

    // 3. GSM Range Filter
    if (gsmRange === 'light') {
      items = items.filter(i => i.gsmValue < 200);
    } else if (gsmRange === 'medium') {
      items = items.filter(i => i.gsmValue >= 200 && i.gsmValue <= 300);
    } else if (gsmRange === 'heavy') {
      items = items.filter(i => i.gsmValue > 300);
    }

    // 4. Sorting
    if (sort === 'price-asc') {
      items.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-desc') {
      items.sort((a, b) => b.price - a.price);
    } else if (sort === 'gsm-desc') {
      items.sort((a, b) => b.gsmValue - a.gsmValue);
    }

    return items;
  });

  openQuickSpec(item: CatalogItem): void {
    this.selectedItemForSpec.set(item);
  }

  closeQuickSpec(): void {
    this.selectedItemForSpec.set(null);
  }
}
