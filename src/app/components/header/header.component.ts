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
    <header class="bg-black sticky top-0 z-40 border-b border-zinc-900 transition-all duration-200">
      <div class="max-w-[1600px] mx-auto px-3 sm:px-5 lg:px-6">
        <div class="flex items-center justify-between h-16 sm:h-[68px] gap-2 lg:gap-3 xl:gap-4">
          
          <!-- Brand Logo Lockup (Monochrome Matching Screenshot) -->
          <a routerLink="/" class="flex items-center gap-2 sm:gap-2.5 group shrink-0 select-none">
            <img 
              src="images/brand/logo_white.png" 
              alt="Brand Peoples Logo" 
              class="w-7 h-7 sm:w-8 sm:h-8 object-contain shrink-0 group-hover:scale-105 transition-transform duration-200" />

            <div class="flex flex-col whitespace-nowrap">
              <span class="font-bold text-base sm:text-lg xl:text-xl tracking-tight text-white group-hover:text-zinc-200 transition-colors lowercase font-sans leading-none">
                brandpeoples
              </span>
              <span class="text-[7px] sm:text-[7.5px] font-mono tracking-[0.16em] text-zinc-400 uppercase mt-0.5">
                STUDIO &bull; CUSTOM 3D &bull; MERCH
              </span>
            </div>
          </a>

          <!-- Centered Navigation Links (High Contrast Monochrome) -->
          <nav class="hidden lg:flex items-center gap-1 xl:gap-2 2xl:gap-3.5 h-full shrink-0">
            <!-- Home -->
            <a routerLink="/" 
               [routerLinkActiveOptions]="{exact: true}"
               routerLinkActive="text-white font-medium"
               #rlaHome="routerLinkActive"
               class="h-full flex items-center px-2 xl:px-2.5 2xl:px-3 text-xs 2xl:text-[13px] font-medium text-zinc-400 hover:text-white transition-colors whitespace-nowrap shrink-0">
              <span class="relative py-1">
                Home
                <span *ngIf="rlaHome.isActive" class="absolute -bottom-2 left-0 right-0 h-[2px] bg-white"></span>
              </span>
            </a>

            <!-- 3D Customizer -->
            <a routerLink="/customizer" 
               routerLinkActive="text-white font-medium"
               #rlaCustom="routerLinkActive"
               class="h-full flex items-center px-2 xl:px-2.5 2xl:px-3 text-xs 2xl:text-[13px] font-medium text-zinc-400 hover:text-white transition-colors whitespace-nowrap shrink-0">
              <span class="relative py-1 flex items-center gap-1.5">
                <span>3D Customizer</span>
                <span class="px-1.5 py-0.5 text-[8.5px] font-mono font-black tracking-wider uppercase rounded-[3px] bg-white text-black leading-none">
                  3D LIVE
                </span>
                <span *ngIf="rlaCustom.isActive" class="absolute -bottom-2 left-0 right-0 h-[2px] bg-white"></span>
              </span>
            </a>

            <!-- Catalogs Navigation -->
            <a routerLink="/catalog" 
               routerLinkActive="text-white font-medium"
               #rlaCat="routerLinkActive"
               class="h-full flex items-center px-2 xl:px-2.5 2xl:px-3 text-xs 2xl:text-[13px] font-medium text-zinc-400 hover:text-white transition-colors whitespace-nowrap shrink-0">
              <span class="relative py-1">
                Catalogs
                <span *ngIf="rlaCat.isActive" class="absolute -bottom-2 left-0 right-0 h-[2px] bg-white"></span>
              </span>
            </a>

            <!-- Printing Technologies -->
            <a routerLink="/capabilities" 
               routerLinkActive="text-white font-medium"
               #rlaCap="routerLinkActive"
               class="h-full flex items-center px-2 xl:px-2.5 2xl:px-3 text-xs 2xl:text-[13px] font-medium text-zinc-400 hover:text-white transition-colors whitespace-nowrap shrink-0">
              <span class="relative py-1">
                Technology
                <span *ngIf="rlaCap.isActive" class="absolute -bottom-2 left-0 right-0 h-[2px] bg-white"></span>
              </span>
            </a>

            <!-- Quality Standards -->
            <a routerLink="/quality" 
               routerLinkActive="text-white font-medium"
               #rlaQual="routerLinkActive"
               class="h-full flex items-center px-2 xl:px-2.5 2xl:px-3 text-xs 2xl:text-[13px] font-medium text-zinc-400 hover:text-white transition-colors whitespace-nowrap shrink-0">
              <span class="relative py-1">
                Quality &amp; Lab
                <span *ngIf="rlaQual.isActive" class="absolute -bottom-2 left-0 right-0 h-[2px] bg-white"></span>
              </span>
            </a>

            <!-- Gift Kits Navigation -->
            <a routerLink="/gift-kits" 
               routerLinkActive="text-white font-medium"
               #rlaGifts="routerLinkActive"
               class="h-full flex items-center px-2 xl:px-2.5 2xl:px-3 text-xs 2xl:text-[13px] font-medium text-zinc-400 hover:text-white transition-colors whitespace-nowrap shrink-0">
              <span class="relative py-1 flex items-center gap-1.5">
                <span>Gift Kits</span>
                <span class="px-1.5 py-0.5 text-[8.5px] font-mono font-bold tracking-wider uppercase rounded-[3px] bg-zinc-900 border border-zinc-700 text-zinc-300 leading-none">
                  7 PACKS
                </span>
                <span *ngIf="rlaGifts.isActive" class="absolute -bottom-2 left-0 right-0 h-[2px] bg-white"></span>
              </span>
            </a>

            <!-- Contact & Quotes -->
            <a routerLink="/contact-us" 
               routerLinkActive="text-white font-medium"
               #rlaContact="routerLinkActive"
               class="h-full flex items-center px-2 xl:px-2.5 2xl:px-3 text-xs 2xl:text-[13px] font-medium text-zinc-400 hover:text-white transition-colors whitespace-nowrap shrink-0">
              <span class="relative py-1">
                Contact &amp; Quotes
                <span *ngIf="rlaContact.isActive" class="absolute -bottom-2 left-0 right-0 h-[2px] bg-white"></span>
              </span>
            </a>
          </nav>

          <!-- Right Action Buttons (High-Contrast White on Black) -->
          <div class="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
            <!-- Phone Call Pill with Call Symbol -->
            <a href="tel:9629986444" 
               title="Call +91 96299 86444"
               class="hover-lift-sm active:scale-95 whitespace-nowrap px-3 py-1.5 xl:px-3.5 xl:py-2 text-xs font-mono font-medium text-white border border-zinc-800 rounded-full hover:bg-zinc-900 hover:border-zinc-700 transition-all inline-flex items-center gap-1.5 shrink-0">
              <svg class="w-3.5 h-3.5 text-zinc-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <span class="hidden xl:inline">+91 96299 86444</span>
              <span class="inline xl:hidden text-[11px] font-sans">Call</span>
            </a>

            <!-- Inverted Solid White Button -->
            <a routerLink="/customizer" 
               class="hover-lift-sm active:scale-95 whitespace-nowrap px-3.5 py-1.5 xl:px-4 xl:py-2 text-xs font-black text-black bg-white hover:bg-zinc-200 rounded-full transition-all inline-flex items-center shrink-0 cursor-pointer uppercase tracking-wider">
              <span>3D STUDIO</span>
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
        <a routerLink="/gift-kits" (click)="closeMobileMenu()" 
           routerLinkActive="bg-zinc-900 text-white font-bold"
           class="block px-3 py-2 rounded-lg text-base font-medium text-zinc-300 hover:bg-zinc-900 transition flex items-center justify-between">
          <span>Corporate Gift Kits</span>
          <span class="px-2 py-0.5 text-xs font-mono font-bold rounded bg-zinc-800 text-zinc-300 border border-zinc-700">7 PACKS</span>
        </a>
        <a routerLink="/contact-us" (click)="closeMobileMenu()" 
           routerLinkActive="bg-zinc-900 text-white font-bold"
           class="block px-3 py-2 rounded-lg text-base font-medium text-zinc-300 hover:bg-zinc-900 transition">
          Contact &amp; Quotes
        </a>

        <div class="pt-3 border-t border-zinc-800 flex flex-col gap-2">
          <a href="tel:9629986444" class="w-full text-center py-2.5 border border-zinc-800 rounded-xl font-mono text-zinc-300 text-sm flex items-center justify-center gap-2">
            <svg class="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            <span>Call: +91 96299 86444</span>
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
    <div class="bg-black text-zinc-400 text-xs py-2 border-b border-zinc-900 overflow-hidden relative shadow-sm font-mono">
      <div class="max-w-[1600px] mx-auto flex items-center">
        
        <!-- Pinned Static Label on Left -->
        <div class="shrink-0 bg-black z-20 px-4 sm:px-6 flex items-center gap-2 border-r border-zinc-900 shadow-[4px_0_12px_rgba(0,0,0,0.95)]">
          <span class="inline-block w-1.5 h-1.5 rounded-full bg-white"></span>
          <span class="font-black uppercase tracking-wider text-white text-[11px] whitespace-nowrap">
            STUDIO RADAR:
          </span>
        </div>

        <!-- Marquee Track (Infinite Seamless Loop) -->
        <div class="overflow-hidden flex-1 relative cursor-pointer" title="Hover to pause">
          <div class="animate-marquee flex items-center gap-8 whitespace-nowrap text-[11px]">
            
            <!-- MARQUEE SET 1 -->
            <div class="flex items-center gap-6 whitespace-nowrap">
              <div class="flex items-center gap-1.5 whitespace-nowrap">
                <span class="text-white font-bold">3.20 / Pc</span>
                <span class="text-zinc-400">&bull; 48h Batch Ready</span>
              </div>

              <span class="text-zinc-700">&bull;</span>

              <div class="flex items-center gap-2 whitespace-nowrap">
                <span class="text-zinc-400 uppercase tracking-wide">WEBGL 3D VIEWPORT:</span>
                <span class="text-white font-medium bg-zinc-900/80 px-2 py-0.5 rounded border border-zinc-700">1,240+ 3D Renders Generated Today</span>
              </div>

              <span class="text-zinc-700">&bull;</span>

              <div class="flex items-center gap-2 whitespace-nowrap">
                <span class="bg-zinc-900 text-zinc-200 border border-zinc-700 px-2.5 py-0.5 rounded-full font-bold">
                  ● 2400 DPI DTF GANG SHEETS
                </span>
                <span class="text-white font-bold">SAME-DAY DISPATCH</span>
              </div>

              <span class="text-zinc-700">&bull;</span>

              <div class="flex items-center gap-2 whitespace-nowrap">
                <span class="text-zinc-400 uppercase tracking-wide">BIO-WASHED COMBED COTTON:</span>
                <span class="text-white font-bold">180 &ndash; 240 GSM &bull; OEKO-TEX STD 100</span>
              </div>

              <span class="text-zinc-700">&bull;</span>

              <div class="flex items-center gap-2 whitespace-nowrap">
                <span class="text-zinc-400 uppercase tracking-wide">TIRUPPUR HUB:</span>
                <span class="text-white font-bold">EXPRESS DELIVERY TO COIMBATORE &amp; TAMIL NADU</span>
              </div>

              <span class="text-zinc-700">&bull;</span>
            </div>

            <!-- MARQUEE SET 2 (DUPLICATE FOR SEAMLESS LOOP) -->
            <div class="flex items-center gap-6 whitespace-nowrap" aria-hidden="true">
              <div class="flex items-center gap-1.5 whitespace-nowrap">
                <span class="text-white font-bold">3.20 / Pc</span>
                <span class="text-zinc-400">&bull; 48h Batch Ready</span>
              </div>

              <span class="text-zinc-700">&bull;</span>

              <div class="flex items-center gap-2 whitespace-nowrap">
                <span class="text-zinc-400 uppercase tracking-wide">WEBGL 3D VIEWPORT:</span>
                <span class="text-white font-medium bg-zinc-900/80 px-2 py-0.5 rounded border border-zinc-700">1,240+ 3D Renders Generated Today</span>
              </div>

              <span class="text-zinc-700">&bull;</span>

              <div class="flex items-center gap-2 whitespace-nowrap">
                <span class="bg-zinc-900 text-zinc-200 border border-zinc-700 px-2.5 py-0.5 rounded-full font-bold">
                  ● 2400 DPI DTF GANG SHEETS
                </span>
                <span class="text-white font-bold">SAME-DAY DISPATCH</span>
              </div>

              <span class="text-zinc-700">&bull;</span>

              <div class="flex items-center gap-2 whitespace-nowrap">
                <span class="text-zinc-400 uppercase tracking-wide">BIO-WASHED COMBED COTTON:</span>
                <span class="text-white font-bold">180 &ndash; 240 GSM &bull; OEKO-TEX STD 100</span>
              </div>

              <span class="text-zinc-700">&bull;</span>

              <div class="flex items-center gap-2 whitespace-nowrap">
                <span class="text-zinc-400 uppercase tracking-wide">TIRUPPUR HUB:</span>
                <span class="text-white font-bold">EXPRESS DELIVERY TO COIMBATORE &amp; TAMIL NADU</span>
              </div>

              <span class="text-zinc-700">&bull;</span>
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
