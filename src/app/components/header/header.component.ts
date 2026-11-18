import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLinkActive],
  template: `
    <!-- ========================================================================= -->
    <!-- 1. PURE BLACK & WHITE MINIMALIST NAVIGATION BAR                           -->
    <!-- ========================================================================= -->
    <header class="bg-black/95 backdrop-blur-md sticky top-0 z-40 border-b border-zinc-800 transition-all duration-200">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20 gap-4">
          
          <!-- Brand Logo Lockup (Monochrome Matching Screenshot) -->
          <a routerLink="/" class="flex items-center gap-3 group shrink-0 select-none">
            <img 
              src="images/brand/logo_white.png" 
              alt="Brand Peoples Logo" 
              class="w-8 h-8 object-contain shrink-0 group-hover:scale-105 transition-transform duration-300" />

            <div class="flex flex-col whitespace-nowrap">
              <span class="font-bold text-xl tracking-tight text-white group-hover:text-zinc-300 transition-colors lowercase font-sans">
                brandpeoples
              </span>
              <span class="text-[8px] font-mono tracking-[0.18em] text-zinc-400 uppercase">
                STUDIO &bull; CUSTOM 3D &bull; MERCH
              </span>
            </div>
          </a>

          <!-- Centered Navigation Links (High Contrast Monochrome) -->
          <nav class="hidden lg:flex items-center space-x-1 xl:space-x-2.5 h-full shrink-0">
            <!-- Home -->
            <a routerLink="/" 
               [routerLinkActiveOptions]="{exact: true}"
               routerLinkActive="text-white font-bold"
               #rlaHome="routerLinkActive"
               class="h-20 flex items-center px-3 text-xs xl:text-sm font-semibold text-zinc-400 hover:text-white transition-colors whitespace-nowrap shrink-0">
              <span class="relative py-1">
                Home
                <span *ngIf="rlaHome.isActive" class="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-white rounded-full"></span>
              </span>
            </a>

            <!-- 3D Customizer -->
            <a routerLink="/customizer" 
               routerLinkActive="text-white font-bold"
               #rlaCustom="routerLinkActive"
               class="h-20 flex items-center px-3 text-xs xl:text-sm font-semibold text-zinc-400 hover:text-white transition-colors whitespace-nowrap shrink-0">
              <span class="relative py-1 flex items-center gap-1.5">
                <span>3D Customizer</span>
                <span class="px-1.5 py-0.5 text-[8.5px] font-mono font-bold uppercase rounded bg-white text-black">
                  3D LIVE
                </span>
                <span *ngIf="rlaCustom.isActive" class="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-white rounded-full"></span>
              </span>
            </a>

            <!-- Catalogs Navigation -->
            <a routerLink="/catalog" 
               routerLinkActive="text-white font-bold"
               #rlaCat="routerLinkActive"
               class="h-20 flex items-center px-3 text-xs xl:text-sm font-semibold text-zinc-400 hover:text-white transition-colors whitespace-nowrap shrink-0">
              <span class="relative py-1">
                Catalogs
                <span *ngIf="rlaCat.isActive" class="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-white rounded-full"></span>
              </span>
            </a>

            <!-- Printing Technologies -->
            <a routerLink="/capabilities" 
               routerLinkActive="text-white font-bold"
               #rlaCap="routerLinkActive"
               class="h-20 flex items-center px-3 text-xs xl:text-sm font-semibold text-zinc-400 hover:text-white transition-colors whitespace-nowrap shrink-0">
              <span class="relative py-1">
                Technology
                <span *ngIf="rlaCap.isActive" class="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-white rounded-full"></span>
              </span>
            </a>

            <!-- Quality Standards -->
            <a routerLink="/quality" 
               routerLinkActive="text-white font-bold"
               #rlaQual="routerLinkActive"
               class="h-20 flex items-center px-3 text-xs xl:text-sm font-semibold text-zinc-400 hover:text-white transition-colors whitespace-nowrap shrink-0">
              <span class="relative py-1">
                Quality &amp; Lab
                <span *ngIf="rlaQual.isActive" class="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-white rounded-full"></span>
              </span>
            </a>

            <!-- Contact & Quotes -->
            <a routerLink="/contact-us" 
               routerLinkActive="text-white font-bold"
               #rlaContact="routerLinkActive"
               class="h-20 flex items-center px-3 text-xs xl:text-sm font-semibold text-zinc-400 hover:text-white transition-colors whitespace-nowrap shrink-0">
              <span class="relative py-1">
                Contact &amp; Quotes
                <span *ngIf="rlaContact.isActive" class="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-white rounded-full"></span>
              </span>
            </a>
          </nav>

          <!-- Right Action Buttons (High-Contrast White on Black) -->
          <div class="hidden lg:flex items-center gap-2.5 xl:gap-3 shrink-0">
            <a href="tel:9944107633" 
               class="hidden xl:inline-flex hover-lift-sm active:scale-95 whitespace-nowrap px-3.5 py-2 text-xs font-mono font-bold text-zinc-300 border border-zinc-800 rounded-full hover:bg-zinc-900 hover:border-zinc-700 transition-all items-center gap-1.5 shrink-0">
              <span>+91 99441 07633</span>
            </a>

            <!-- Inverted Solid White Button -->
            <a routerLink="/customizer" 
               class="btn-shimmer hover-lift-sm active:scale-95 whitespace-nowrap px-5 py-2.5 text-xs xl:text-sm font-black text-black bg-white hover:bg-zinc-200 rounded-full shadow-bw transition-all inline-flex items-center gap-2 shrink-0 group cursor-pointer uppercase tracking-wider">
              <span>3D Studio</span>
              <svg class="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </a>
          </div>

          <!-- Mobile Hamburger Toggle -->
          <div class="flex items-center lg:hidden shrink-0">
            <button (click)="toggleMobileMenu()" 
                    type="button" 
                    class="p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-900 transition-colors"
                    aria-label="Toggle Navigation">
              <svg *ngIf="!isMobileMenuOpen()" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
              <svg *ngIf="isMobileMenuOpen()" class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>

        </div>
      </div>

      <!-- Mobile Navigation Drawer -->
      <div *ngIf="isMobileMenuOpen()" class="lg:hidden border-t border-zinc-800 bg-black px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-fadeIn">
        <a routerLink="/" (click)="closeMobileMenu()" 
           routerLinkActive="bg-zinc-900 text-white font-bold"
           [routerLinkActiveOptions]="{exact: true}"
           class="block px-3 py-2 rounded-lg text-base font-medium text-zinc-300 hover:bg-zinc-900 transition">
          Home
        </a>
        <a routerLink="/customizer" (click)="closeMobileMenu()" 
           routerLinkActive="bg-zinc-900 text-white font-bold"
           class="block px-3 py-2 rounded-lg text-base font-medium text-zinc-300 hover:bg-zinc-900 transition flex items-center justify-between">
          <span>3D Customizer Studio</span>
          <span class="px-2 py-0.5 text-xs font-mono font-bold rounded bg-white text-black">3D LIVE</span>
        </a>
        <a routerLink="/catalog" (click)="closeMobileMenu()" 
           routerLinkActive="bg-zinc-900 text-white font-bold"
           class="block px-3 py-2 rounded-lg text-base font-medium text-zinc-300 hover:bg-zinc-900 transition">
          Catalogs
        </a>
        <a routerLink="/capabilities" (click)="closeMobileMenu()" 
           routerLinkActive="bg-zinc-900 text-white font-bold"
           class="block px-3 py-2 rounded-lg text-base font-medium text-zinc-300 hover:bg-zinc-900 transition">
          Printing Technology
        </a>
        <a routerLink="/quality" (click)="closeMobileMenu()" 
           routerLinkActive="bg-zinc-900 text-white font-bold"
           class="block px-3 py-2 rounded-lg text-base font-medium text-zinc-300 hover:bg-zinc-900 transition">
          Quality Standards
        </a>
        <a routerLink="/contact-us" (click)="closeMobileMenu()" 
           routerLinkActive="bg-zinc-900 text-white font-bold"
           class="block px-3 py-2 rounded-lg text-base font-medium text-zinc-300 hover:bg-zinc-900 transition">
          Contact &amp; Quotes
        </a>

        <div class="pt-3 border-t border-zinc-800 flex flex-col gap-2">
          <a href="tel:9944107633" class="w-full text-center py-2.5 border border-zinc-800 rounded-xl font-mono text-zinc-300 text-sm">
            Call: +91 99441 07633
          </a>
          <a routerLink="/customizer" (click)="closeMobileMenu()" class="w-full text-center py-3 bg-white text-black font-black uppercase text-sm rounded-xl shadow-md">
            Open 3D Studio &rarr;
          </a>
        </div>
      </div>
    </header>

    <!-- ========================================================================= -->
    <!-- 2. MONOCHROME PRODUCTION RADAR TICKER                                     -->
    <!-- ========================================================================= -->
    <div class="bg-zinc-950 text-zinc-400 text-xs py-2.5 border-b border-zinc-800/80 overflow-hidden relative shadow-sm font-mono">
      <div class="max-w-[1440px] mx-auto flex items-center">
        
        <!-- Pinned Static Label on Left -->
        <div class="shrink-0 bg-zinc-950 z-20 px-4 sm:px-6 flex items-center gap-2 border-r border-zinc-800 shadow-[4px_0_12px_rgba(0,0,0,0.9)]">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          <span class="font-black uppercase tracking-wider text-white text-[11px] whitespace-nowrap">
            STUDIO RADAR:
          </span>
        </div>

        <!-- Marquee Track (Infinite Seamless Loop) -->
        <div class="overflow-hidden flex-1 relative cursor-pointer" title="Hover to pause">
          <div class="animate-marquee flex items-center gap-8 whitespace-nowrap text-[11px]">
            
            <!-- MARQUEE SET 1 -->
            <div class="flex items-center gap-6 whitespace-nowrap">
              <div class="flex items-center gap-2 whitespace-nowrap">
                <span class="bg-zinc-900 text-white border border-zinc-700 px-2.5 py-0.5 rounded-full font-bold">
                  ● 3D SILICONE LINES ACTIVE
                </span>
                <span class="text-white font-bold">₹3.20 / Pc</span>
                <span class="text-zinc-400">• 48h Batch Ready</span>
              </div>

              <span class="text-zinc-600">&bull;</span>

              <div class="flex items-center gap-2 whitespace-nowrap">
                <span class="text-zinc-300">WEBGL 3D VIEWPORT:</span>
                <span class="text-white font-bold bg-zinc-900 px-2 py-0.5 rounded border border-zinc-700">1,240+ 3D Renders Generated Today</span>
              </div>

              <span class="text-zinc-600">&bull;</span>

              <div class="flex items-center gap-2 whitespace-nowrap">
                <span class="bg-zinc-900 text-zinc-200 border border-zinc-700 px-2.5 py-0.5 rounded-full font-bold">
                  ● 2400 DPI DTF GANG SHEETS
                </span>
                <span class="text-white font-bold">SAME-DAY DISPATCH</span>
              </div>

              <span class="text-zinc-600">&bull;</span>

              <div class="flex items-center gap-2 whitespace-nowrap">
                <span class="text-zinc-300">BIO-WASHED COMBED COTTON:</span>
                <span class="text-white font-bold">180 – 240 GSM &bull; OEKO-TEX STD 100</span>
              </div>

              <span class="text-zinc-600">&bull;</span>
            </div>

            <!-- MARQUEE SET 2 (DUPLICATE) -->
            <div class="flex items-center gap-6 whitespace-nowrap" aria-hidden="true">
              <div class="flex items-center gap-2 whitespace-nowrap">
                <span class="bg-zinc-900 text-white border border-zinc-700 px-2.5 py-0.5 rounded-full font-bold">
                  ● 3D SILICONE LINES ACTIVE
                </span>
                <span class="text-white font-bold">₹3.20 / Pc</span>
                <span class="text-zinc-400">• 48h Batch Ready</span>
              </div>

              <span class="text-zinc-600">&bull;</span>

              <div class="flex items-center gap-2 whitespace-nowrap">
                <span class="text-zinc-300">WEBGL 3D VIEWPORT:</span>
                <span class="text-white font-bold bg-zinc-900 px-2 py-0.5 rounded border border-zinc-700">1,240+ 3D Renders Generated Today</span>
              </div>

              <span class="text-zinc-600">&bull;</span>

              <div class="flex items-center gap-2 whitespace-nowrap">
                <span class="bg-zinc-900 text-zinc-200 border border-zinc-700 px-2.5 py-0.5 rounded-full font-bold">
                  ● 2400 DPI DTF GANG SHEETS
                </span>
                <span class="text-white font-bold">SAME-DAY DISPATCH</span>
              </div>

              <span class="text-zinc-600">&bull;</span>

              <div class="flex items-center gap-2 whitespace-nowrap">
                <span class="text-zinc-300">BIO-WASHED COMBED COTTON:</span>
                <span class="text-white font-bold">180 – 240 GSM &bull; OEKO-TEX STD 100</span>
              </div>

              <span class="text-zinc-600">&bull;</span>
            </div>

          </div>
        </div>

      </div>
    </div>
  `
})
export class HeaderComponent {
  isMobileMenuOpen = signal<boolean>(false);

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(val => !val);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }
}
