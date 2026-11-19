import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

export interface ProductOption {
  id: string;
  name: string;
  category: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <!-- ========================================================================= -->
    <!-- 1. TOP EDITORIAL HERO                                                     -->
    <!-- ========================================================================= -->
    <section class="bg-black text-white pt-16 pb-12 border-b border-zinc-900 relative overflow-hidden">
      <div class="absolute -top-32 -left-32 w-96 h-96 bg-white/[0.03] blur-[140px] pointer-events-none rounded-full"></div>
      <div class="absolute -bottom-24 right-1/4 w-96 h-96 bg-zinc-800/20 blur-[130px] pointer-events-none rounded-full"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div class="flex items-center gap-2 text-xs font-mono text-zinc-500">
            <a routerLink="/" class="text-zinc-400 hover:text-white transition">Home</a>
            <span>/</span>
            <span class="text-white font-bold">Contact &amp; Studio Desk</span>
          </div>

          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-950 border border-zinc-800 text-zinc-300 text-[11px] font-mono font-bold tracking-wider uppercase">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Tiruppur Factory Desk &bull; Live Queue Active (24h SLA)</span>
          </div>
        </div>

        <div class="max-w-3xl space-y-4">
          <h1 class="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase font-display leading-[1.08]">
            Direct Production Desk &amp; Quotes
          </h1>
          <p class="text-xs sm:text-sm lg:text-base text-zinc-400 leading-relaxed font-sans font-normal">
            Direct access to our Tiruppur garment technicians and print engineers. Zero brokers or middlemen. Request 1-pc sample prototypes, volume manufacturing quotes, or technical file pre-flight reviews.
          </p>
        </div>

        <!-- Live Operations Radar Bar -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          <div class="p-3.5 rounded-2xl bg-zinc-950/90 border border-zinc-800/80 space-y-1">
            <span class="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">Desk Response Time</span>
            <span class="text-sm sm:text-base font-black text-white font-mono block">&lt; 2 Hours SLA</span>
          </div>
          <div class="p-3.5 rounded-2xl bg-zinc-950/90 border border-zinc-800/80 space-y-1">
            <span class="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">Sampling Turnaround</span>
            <span class="text-sm sm:text-base font-black text-white font-mono block">24h – 48h Dispatch</span>
          </div>
          <div class="p-3.5 rounded-2xl bg-zinc-950/90 border border-zinc-800/80 space-y-1">
            <span class="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">Minimum Order (MOQ)</span>
            <span class="text-sm sm:text-base font-black text-white font-mono block">Zero MOQ (1 Pc)</span>
          </div>
          <div class="p-3.5 rounded-2xl bg-zinc-950/90 border border-zinc-800/80 space-y-1">
            <span class="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">Direct Factory Hotline</span>
            <span class="text-sm sm:text-base font-black text-white font-mono block">+91 96299 86444</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ========================================================================= -->
    <!-- 2. QUICK DIRECT-CONNECT CHANNELS                                         -->
    <!-- ========================================================================= -->
    <section class="py-8 bg-zinc-950 border-b border-zinc-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          <!-- Channel 1: WhatsApp Factory Desk -->
          <a href="https://wa.me/919629986444?text=Hi%20Brand%20Peoples%20Factory,%20I%20would%20like%20to%20request%20a%20production%20quote%20and%20sample%20pricing." 
             target="_blank" 
             rel="noopener noreferrer"
             class="group p-5 rounded-2xl bg-black border border-zinc-800 hover:border-zinc-500 transition-all duration-300 flex items-start gap-4 hover-lift-sm">
            <div class="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white shrink-0 group-hover:bg-white group-hover:text-black transition">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.288.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824z"/>
              </svg>
            </div>
            <div class="space-y-1">
              <span class="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">Priority Channel</span>
              <h4 class="text-sm font-bold text-white group-hover:text-zinc-200 font-display">WhatsApp Factory Desk</h4>
              <p class="text-xs text-zinc-400 font-mono">+91 96299 86444</p>
            </div>
          </a>

          <!-- Channel 2: Official RFQ Email -->
          <a href="mailto:hello@brandpeoples.com?subject=Production%20Inquiry%20-%20Custom%20Apparel"
             class="group p-5 rounded-2xl bg-black border border-zinc-800 hover:border-zinc-500 transition-all duration-300 flex items-start gap-4 hover-lift-sm">
            <div class="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white shrink-0 group-hover:bg-white group-hover:text-black transition">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>
            <div class="space-y-1">
              <span class="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">Artwork &amp; Tech Packs</span>
              <h4 class="text-sm font-bold text-white group-hover:text-zinc-200 font-display">Official Quotations Desk</h4>
              <p class="text-xs text-zinc-400 font-mono">hello&#64;brandpeoples.com</p>
            </div>
          </a>

          <!-- Channel 3: Physical Factory Hub -->
          <div class="p-5 rounded-2xl bg-black border border-zinc-800 flex items-start gap-4">
            <div class="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white shrink-0">
              <svg class="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
            <div class="space-y-1">
              <span class="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">Manufacturing Hub</span>
              <h4 class="text-sm font-bold text-white font-display">Tiruppur Textile Corridor</h4>
              <p class="text-xs text-zinc-400 font-mono">Anupparpalayam Pudur, TN 641652</p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ========================================================================= -->
    <!-- 3. MAIN INTERACTIVE STUDIO INQUIRY DESK                                  -->
    <!-- ========================================================================= -->
    <section class="py-14 sm:py-20 bg-black text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <!-- Left: Comprehensive Interactive Request Form -->
          <div class="lg:col-span-7 bg-zinc-950 p-6 sm:p-10 rounded-3xl border border-zinc-800/90 space-y-8">
            
            <div class="space-y-2">
              <span class="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">PRODUCTION SPECIFICATION FORM</span>
              <h2 class="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight font-display">
                Request Production Quote &amp; Samples
              </h2>
              <p class="text-xs sm:text-sm text-zinc-400 font-mono leading-relaxed">
                Configure your product discipline, order volume tier, and print specifications below. Our merchandising team will prepare a formal BOM cost estimate within 2–4 hours.
              </p>
            </div>

            <form (submit)="onSubmit($event)" class="space-y-6">
              
              <!-- Step 1: Select Product Discipline (Pill Buttons) -->
              <div class="space-y-2.5">
                <label class="block text-xs font-mono font-bold text-zinc-300 uppercase tracking-wider">
                  1. Select Target Garment / Merchandise *
                </label>
                <div class="flex flex-wrap gap-2">
                  @for (prod of productDisciplines; track prod.id) {
                    <button 
                      type="button"
                      (click)="selectedProduct.set(prod.id)"
                      [class.bg-white]="selectedProduct() === prod.id"
                      [class.text-black]="selectedProduct() === prod.id"
                      [class.font-black]="selectedProduct() === prod.id"
                      [class.bg-zinc-900]="selectedProduct() !== prod.id"
                      [class.text-zinc-400]="selectedProduct() !== prod.id"
                      class="px-3.5 py-2 rounded-xl text-xs font-mono border border-zinc-800 transition cursor-pointer hover:border-zinc-500">
                      {{ prod.name }}
                    </button>
                  }
                </div>
              </div>

              <!-- Step 2: Order Tier & Volume (Interactive Cards) -->
              <div class="space-y-2.5">
                <label class="block text-xs font-mono font-bold text-zinc-300 uppercase tracking-wider">
                  2. Select Order Volume Tier *
                </label>
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  @for (tier of orderTiers; track tier.id) {
                    <button 
                      type="button"
                      (click)="selectedTier.set(tier.id)"
                      [class.border-white]="selectedTier() === tier.id"
                      [class.bg-zinc-900]="selectedTier() === tier.id"
                      [class.border-zinc-800]="selectedTier() !== tier.id"
                      [class.bg-black]="selectedTier() !== tier.id"
                      class="p-3 rounded-xl border text-left transition cursor-pointer hover:border-zinc-600 flex flex-col justify-between">
                      <span class="text-xs font-bold text-white font-mono block">{{ tier.label }}</span>
                      <span class="text-[10px] text-zinc-400 font-mono block mt-1">{{ tier.sub }}</span>
                    </button>
                  }
                </div>
              </div>

              <!-- Step 3: Artwork & Design Readiness -->
              <div class="space-y-2.5">
                <label class="block text-xs font-mono font-bold text-zinc-300 uppercase tracking-wider">
                  3. Artwork &amp; Design Readiness
                </label>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  @for (art of artworkOptions; track art.id) {
                    <button 
                      type="button"
                      (click)="selectedArtworkStatus.set(art.id)"
                      [class.bg-zinc-800]="selectedArtworkStatus() === art.id"
                      [class.text-white]="selectedArtworkStatus() === art.id"
                      [class.border-zinc-600]="selectedArtworkStatus() === art.id"
                      [class.bg-zinc-950]="selectedArtworkStatus() !== art.id"
                      [class.text-zinc-400]="selectedArtworkStatus() !== art.id"
                      [class.border-zinc-850]="selectedArtworkStatus() !== art.id"
                      class="p-2.5 rounded-xl border border-zinc-800 text-xs font-mono text-center transition cursor-pointer hover:border-zinc-600">
                      {{ art.name }}
                    </button>
                  }
                </div>
              </div>

              <!-- Step 4: Contact Information Grid -->
              <div class="space-y-4 pt-2 border-t border-zinc-900">
                <span class="block text-xs font-mono font-bold text-zinc-300 uppercase tracking-wider">
                  4. Contact &amp; Brand Identification
                </span>
                
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-[11px] font-mono text-zinc-400 mb-1">Your Full Name *</label>
                    <input type="text" 
                           [(ngModel)]="formData.name" 
                           name="name" 
                           placeholder="e.g. Liam Vance" 
                           required 
                           class="w-full px-4 py-3 rounded-xl bg-black border border-zinc-800 text-xs text-white placeholder-zinc-600 focus:outline-hidden focus:border-white transition font-mono" />
                  </div>

                  <div>
                    <label class="block text-[11px] font-mono text-zinc-400 mb-1">Brand or Organization</label>
                    <input type="text" 
                           [(ngModel)]="formData.brand" 
                           name="brand" 
                           placeholder="e.g. Studio Nine Apparel" 
                           class="w-full px-4 py-3 rounded-xl bg-black border border-zinc-800 text-xs text-white placeholder-zinc-600 focus:outline-hidden focus:border-white transition font-mono" />
                  </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-[11px] font-mono text-zinc-400 mb-1">Work Email Address *</label>
                    <input type="email" 
                           [(ngModel)]="formData.email" 
                           name="email" 
                           placeholder="name@label.com" 
                           required 
                           class="w-full px-4 py-3 rounded-xl bg-black border border-zinc-800 text-xs text-white placeholder-zinc-600 focus:outline-hidden focus:border-white transition font-mono" />
                  </div>

                  <div>
                    <label class="block text-[11px] font-mono text-zinc-400 mb-1">WhatsApp / Phone Number *</label>
                    <input type="tel" 
                           [(ngModel)]="formData.phone" 
                           name="phone" 
                           placeholder="+91 96299 86444" 
                           required 
                           class="w-full px-4 py-3 rounded-xl bg-black border border-zinc-800 text-xs text-white placeholder-zinc-600 focus:outline-hidden focus:border-white transition font-mono" />
                  </div>
                </div>
              </div>

              <!-- Step 5: Project Specifications & Timeline -->
              <div class="space-y-2">
                <label class="block text-xs font-mono font-bold text-zinc-300 uppercase tracking-wider">
                  5. Project Scope &amp; Target Delivery Timeline
                </label>
                <textarea rows="4" 
                          [(ngModel)]="formData.message" 
                          name="message" 
                          placeholder="Describe target silhouettes, print placements (chest, back, sleeve), Pantone PMS spot colors, fabric weights, or delivery deadline..." 
                          required 
                          class="w-full px-4 py-3 rounded-xl bg-black border border-zinc-800 text-xs text-white placeholder-zinc-600 focus:outline-hidden focus:border-white transition font-mono"></textarea>
              </div>

              <!-- Submit Button -->
              <button type="submit" 
                      class="btn-shimmer hover-lift-sm active:scale-95 w-full py-4 text-xs font-mono font-black uppercase text-black bg-white hover:bg-zinc-200 rounded-xl transition-all cursor-pointer shadow-lg">
                Submit Production Request &rarr;
              </button>

              @if (submitted()) {
                <div class="p-4 rounded-xl bg-zinc-900 border border-zinc-700 text-white text-xs font-mono flex items-center gap-3 animate-fadeIn">
                  <span class="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm shrink-0">&check;</span>
                  <div>
                    <strong class="block text-white">Inquiry Successfully Logged</strong>
                    <span class="text-zinc-400 text-[11px]">Assigned to Tiruppur Merchandising Desk. You will receive an initial BOM breakdown within 2–4 hours.</span>
                  </div>
                </div>
              }

            </form>
          </div>

          <!-- Right Column: Studio Hub Specifications & Production Transparency -->
          <div class="lg:col-span-5 space-y-6">
            
            <!-- Factory Identity & Direct Contact Details -->
            <div class="bg-zinc-950 p-6 sm:p-7 rounded-3xl border border-zinc-800/90 space-y-5">
              <div class="flex items-center gap-3.5 pb-4 border-b border-zinc-800/80">
                <div class="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center p-2.5 shrink-0 shadow-inner">
                  <img src="images/brand/logo_white.png" alt="Brand Peoples Logo" class="w-full h-full object-contain" />
                </div>
                <div class="flex flex-col whitespace-nowrap">
                  <span class="text-white font-bold text-xl tracking-tight block lowercase font-sans">brandpeoples</span>
                  <span class="text-[9px] font-mono uppercase tracking-[0.18em] text-zinc-400 block -mt-0.5">TIRUPPUR HUB &bull; ZERO BROKERS</span>
                </div>
              </div>
              
              <div class="space-y-4 text-xs font-mono">
                <div class="flex items-start gap-3">
                  <div class="w-8 h-8 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 mt-0.5">
                    <svg class="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <div class="space-y-0.5">
                    <span class="text-zinc-500 uppercase text-[10px] tracking-wider block">Integrated Facility:</span>
                    <span class="text-white font-medium">Anupparpalayam Pudur, Tamil Nadu 641652, India</span>
                  </div>
                </div>

                <div class="flex items-start gap-3">
                  <div class="w-8 h-8 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 mt-0.5">
                    <svg class="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  </div>
                  <div class="space-y-0.5">
                    <span class="text-zinc-500 uppercase text-[10px] tracking-wider block">Production Hotline:</span>
                    <a href="tel:9629986444" class="text-white hover:underline block font-medium">+91 96299 86444</a>
                  </div>
                </div>

                <div class="flex items-start gap-3">
                  <div class="w-8 h-8 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 mt-0.5">
                    <svg class="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div class="space-y-0.5">
                    <span class="text-zinc-500 uppercase text-[10px] tracking-wider block">Direct Email:</span>
                    <a href="mailto:hello@brandpeoples.com" class="text-white hover:underline block font-medium">hello&#64;brandpeoples.com</a>
                  </div>
                </div>

                <div class="flex items-start gap-3">
                  <div class="w-8 h-8 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 mt-0.5">
                    <svg class="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div class="space-y-0.5">
                    <span class="text-zinc-500 uppercase text-[10px] tracking-wider block">Operating Shift Hours:</span>
                    <span class="text-white font-medium">Monday &ndash; Saturday: 09:00 &ndash; 20:30 IST</span>
                  </div>
                </div>

                <div class="flex items-start gap-3">
                  <div class="w-8 h-8 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 mt-0.5">
                    <svg class="w-4 h-4 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <div class="space-y-0.5">
                    <span class="text-zinc-500 uppercase text-[10px] tracking-wider block">Official Instagram:</span>
                    <a href="https://www.instagram.com/brandpeoples.com_/" target="_blank" rel="noopener noreferrer" class="text-white hover:text-pink-400 hover:underline block font-medium">
                      &#64;brandpeoples.com_
                    </a>
                  </div>
                </div>
              </div>

              <div class="pt-2">
                <a href="https://wa.me/919629986444?text=Hi%20Brand%20Peoples,%20I%20would%20like%20to%20request%20a%20quote%20for%20custom%20apparel." 
                   target="_blank" 
                   rel="noopener noreferrer"
                   class="btn-shimmer hover-lift-sm w-full py-3.5 rounded-xl bg-white text-black font-mono font-black text-xs uppercase flex items-center justify-center gap-2 hover:bg-zinc-200 transition-all duration-300 shadow-md">
                  <span>Chat on WhatsApp Directly &rarr;</span>
                </a>
              </div>
            </div>

            <!-- Priority Rush Orders SLA Card -->
            <div class="bg-black text-white p-6 rounded-3xl border border-zinc-800 space-y-3 font-mono">
              <div class="flex items-center justify-between">
                <span class="px-2.5 py-0.5 rounded bg-zinc-900 border border-zinc-700 text-zinc-300 text-[10px] uppercase tracking-wider">
                  RAPID SLA DISPATCH
                </span>
                <span class="text-emerald-400 text-xs font-bold">24h – 48h SLA</span>
              </div>
              <h4 class="text-sm font-bold text-white uppercase font-display">Priority Event &amp; Drop Deadlines?</h4>
              <p class="text-xs text-zinc-400 leading-relaxed font-sans">
                We accommodate priority rush sampling and emergency bulk print drops with guaranteed courier dispatch within 24 to 48 hours across India via Bluedart and Delhivery Air Express.
              </p>
            </div>

            <!-- 3D Studio Preview Banner -->
            <div class="p-6 rounded-3xl bg-zinc-950 border border-zinc-800 space-y-3">
              <span class="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">TRY OUR WEBGL STUDIO</span>
              <h4 class="text-sm font-bold text-white uppercase font-display">Prefer to Visualize in 3D First?</h4>
              <p class="text-xs text-zinc-400 font-sans leading-relaxed">
                Rotate 360°, change fabric colorways, and map your graphics onto oversized tees, heavy hoodies, and stainless steel flasks in real time.
              </p>
              <div class="pt-1">
                <a routerLink="/customize" class="hover-lift-sm text-xs font-mono text-white underline underline-offset-4 hover:text-zinc-300 transition">
                  Launch 3D Customizer Studio &rarr;
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>

    <!-- ========================================================================= -->
    <!-- 4. QUOTING & PRODUCTION FAQ                                              -->
    <!-- ========================================================================= -->
    <section class="py-16 sm:py-20 bg-zinc-950 text-white border-t border-zinc-900">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div class="text-center space-y-3">
          <span class="text-xs font-mono uppercase text-zinc-500 tracking-widest block">ORDER PROTOCOLS</span>
          <h2 class="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight font-display">
            Frequently Asked Questions
          </h2>
          <p class="text-xs sm:text-sm text-zinc-400 font-mono">
            Key details on sampling lead times, artwork formats, and bulk tiering.
          </p>
        </div>

        <div class="space-y-3">
          @for (faq of faqs; track faq.q) {
            <div class="p-5 rounded-2xl bg-black border border-zinc-800/80 space-y-2">
              <h4 class="text-sm font-bold text-white font-mono flex items-center justify-between">
                <span>{{ faq.q }}</span>
              </h4>
              <p class="text-xs text-zinc-400 leading-relaxed font-sans">
                {{ faq.a }}
              </p>
            </div>
          }
        </div>

      </div>
    </section>
  `
})
export class ContactComponent {
  productDisciplines: ProductOption[] = [
    { id: 'tee-240', name: '240 GSM Oversized Tees', category: 'Apparel' },
    { id: 'tee-180', name: '180 GSM Combed Tees', category: 'Apparel' },
    { id: 'hoodie-380', name: '380 GSM Streetwear Hoodies', category: 'Fleece' },
    { id: 'pants-380', name: '380 GSM Heavy Fleece Pants', category: 'Bottoms' },
    { id: 'bottle-750', name: '750ml Vacuum Steel Flasks', category: 'Drinkware' },
    { id: 'art-fine', name: '2400 DPI Fine-Art Canvas', category: 'Printing' },
    { id: 'silicone-3d', name: '3D Silicone Transfers', category: 'Trims' },
    { id: 'dtf-gang', name: 'Industrial DTF Gang Sheets', category: 'Printing' },
    { id: 'cap-twill', name: 'Structured Twill Caps', category: 'Headwear' }
  ];

  orderTiers = [
    { id: 'sample', label: '1 Pc Sample', sub: '24h – 48h Prototype' },
    { id: 'batch', label: '25 – 100 Pcs', sub: 'Starter Batch' },
    { id: 'drop', label: '100 – 500 Pcs', sub: 'Brand Collection' },
    { id: 'enterprise', label: '1,000+ Pcs', sub: 'Tiered Wholesale' }
  ];

  artworkOptions = [
    { id: 'ready', name: 'Print-Ready Vector / PNG' },
    { id: 'customizer', name: 'Designed in 3D Studio' },
    { id: 'need-help', name: 'Need Design Assistance' }
  ];

  selectedProduct = signal<string>('tee-240');
  selectedTier = signal<string>('sample');
  selectedArtworkStatus = signal<string>('ready');

  formData = {
    name: '',
    brand: '',
    email: '',
    phone: '',
    message: ''
  };

  submitted = signal<boolean>(false);

  onSubmit(event: Event): void {
    event.preventDefault();
    this.submitted.set(true);
    setTimeout(() => {
      this.submitted.set(false);
      this.formData = {
        name: '',
        brand: '',
        email: '',
        phone: '',
        message: ''
      };
    }, 6000);
  }

  faqs = [
    {
      q: 'Can I order just 1 single prototype before committing to bulk production?',
      a: 'Yes, absolutely. We have a Zero MOQ policy on custom apparel, water bottles, and fine-art prints. You can test fabric drape, silhouette fit, and print adhesion with 1 prototype delivered to your doorstep in 24–48 hours.'
    },
    {
      q: 'What artwork formats do you recommend for 2400 DPI DTF and 3D silicone?',
      a: 'We accept Adobe Illustrator (.AI), vector PDF, EPS, or high-resolution PNG files at 300+ DPI with transparent backgrounds. Pantone Matching System (PMS) coated codes can be specified for exact color reproduction.'
    },
    {
      q: 'How fast can you dispatch priority rush event orders?',
      a: 'For urgent exhibition merchandise, creator drops, or corporate launch events, we provide emergency priority scheduling with courier dispatch within 24 to 48 hours across India.'
    },
    {
      q: 'Can we visit your manufacturing facility in Tiruppur?',
      a: 'Yes. Brand partners, label designers, and production directors are welcome to visit our 40,000 sq. ft facility in Anupparpalayam Pudur, Tiruppur, for live sampling audits and fabric inspections.'
    }
  ];
}
