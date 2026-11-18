import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <footer class="footer-global bg-black text-zinc-400 pt-16 pb-12 relative overflow-hidden border-t border-zinc-900 font-sans">
      <!-- Ambient subtle background lighting -->
      <div class="footer-ambient-glow absolute top-0 right-1/4 w-96 h-96 bg-white/[0.03] blur-[140px] pointer-events-none rounded-full"></div>
      <div class="footer-ambient-glow absolute bottom-0 left-10 w-96 h-96 bg-zinc-800/10 blur-[140px] pointer-events-none rounded-full"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        <!-- ========================================================================= -->
        <!-- 1. TOP QUICK DIRECTORY JUMP BAR (FAST HORIZONTAL PILL NAVIGATION)        -->
        <!-- ========================================================================= -->
        <div class="p-4 sm:p-5 rounded-3xl bg-zinc-950 border border-zinc-800/90 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div class="flex items-center gap-2.5">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span class="text-xs font-mono font-bold text-white uppercase tracking-wider">Fast Navigation Directory</span>
            <span class="text-[11px] font-mono text-zinc-500 hidden sm:inline">&bull; Direct Hub Routing</span>
          </div>

          <div class="flex flex-wrap items-center gap-2">
            <a routerLink="/customize" class="btn-shimmer hover-lift-sm px-3.5 py-1.5 rounded-full bg-zinc-900 hover:bg-white hover:text-black border border-zinc-700/80 text-zinc-200 text-xs font-mono font-bold transition-all flex items-center gap-1.5 cursor-pointer">
              <span>✦</span>
              <span>3D Studio</span>
            </a>
            <a routerLink="/catalog" class="btn-shimmer hover-lift-sm px-3.5 py-1.5 rounded-full bg-zinc-900 hover:bg-white hover:text-black border border-zinc-700/80 text-zinc-200 text-xs font-mono font-bold transition-all flex items-center gap-1.5 cursor-pointer">
              <span>📦</span>
              <span>Catalogs</span>
            </a>
            <a routerLink="/capabilities" class="btn-shimmer hover-lift-sm px-3.5 py-1.5 rounded-full bg-zinc-900 hover:bg-white hover:text-black border border-zinc-700/80 text-zinc-200 text-xs font-mono font-bold transition-all flex items-center gap-1.5 cursor-pointer">
              <span>⚙️</span>
              <span>Capabilities</span>
            </a>
            <a routerLink="/quality" class="btn-shimmer hover-lift-sm px-3.5 py-1.5 rounded-full bg-zinc-900 hover:bg-white hover:text-black border border-zinc-700/80 text-zinc-200 text-xs font-mono font-bold transition-all flex items-center gap-1.5 cursor-pointer">
              <span>🛡️</span>
              <span>Quality Lab</span>
            </a>
            <a routerLink="/gift-kits" class="btn-shimmer hover-lift-sm px-3.5 py-1.5 rounded-full bg-zinc-900 hover:bg-white hover:text-black border border-zinc-700/80 text-zinc-200 text-xs font-mono font-bold transition-all flex items-center gap-1.5 cursor-pointer">
              <span>🎁</span>
              <span>Gift Kits</span>
            </a>
            <a routerLink="/contact-us" class="btn-shimmer hover-lift-sm px-3.5 py-1.5 rounded-full bg-white text-black font-black border border-white text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer hover:bg-zinc-200">
              <span>📞</span>
              <span>Contact</span>
            </a>
          </div>
        </div>

        <!-- ========================================================================= -->
        <!-- 2. MAIN RESPONSIVE MULTI-COLUMN NAVIGATION GRID                           -->
        <!-- ========================================================================= -->
        <div class="footer-nav-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10 pb-8 border-b border-zinc-900">
          
          <!-- Column 1: Company Profile (Spans 2 cols on mobile and desktop) -->
          <div class="footer-nav-col col-span-2 space-y-4">
            <div class="flex items-center gap-3.5">
              <img 
                src="images/brand/logo_white.png" 
                alt="Brand Peoples Logo" 
                class="w-9 h-9 object-contain shrink-0" />
              <div class="flex flex-col whitespace-nowrap">
                <span class="text-white font-bold text-2xl tracking-tight block lowercase font-sans">
                  brandpeoples
                </span>
                <span class="text-[8.5px] font-mono uppercase tracking-[0.18em] text-zinc-400 block -mt-0.5">
                  CUSTOM APPAREL &bull; PRINTING &bull; 3D STUDIO
                </span>
              </div>
            </div>

            <p class="text-xs sm:text-sm leading-relaxed text-zinc-400 max-w-sm">
              India's premier on-demand custom merchandise, corporate apparel, and specialized textile manufacturing platform. High-density 3D silicone heat transfers, DTF digital transfers, and bio-washed combed cotton engineered for durability and monochrome streetwear style.
            </p>

            <div class="space-y-2.5 pt-1 text-xs font-mono">
              <div class="flex items-start gap-2.5">
                <svg class="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span class="text-zinc-300">Anupparpalayam Pudur, Tiruppur, TN 641652, India</span>
              </div>
              <div class="flex items-center gap-2.5">
                <svg class="w-4 h-4 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <a href="tel:9944107633" class="text-zinc-300 hover:text-white transition">+91 99441 07633, +91 96268 76200</a>
              </div>
              <div class="flex items-center gap-2.5">
                <svg class="w-4 h-4 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <a href="mailto:support@brandpeoples.com" class="text-zinc-300 hover:text-white transition">support&#64;brandpeoples.com</a>
              </div>
            </div>

            <!-- Share & Quick Social Actions -->
            <div class="flex items-center gap-2 pt-2">
              <button 
                (click)="shareWebsite()" 
                title="Share Website"
                class="footer-social-btn h-8 px-3.5 rounded-xl border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer">
                <svg class="w-3.5 h-3.5 text-white shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
                <span>{{ websiteShared() ? 'Copied Link!' : 'Share Brand Peoples' }}</span>
              </button>

              <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-zinc-900/90 border border-zinc-800 text-[10px] font-mono text-zinc-400">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Tiruppur Hub
              </span>
            </div>
          </div>

          <!-- Column 2: Custom Apparel & Merch -->
          <div class="footer-nav-col space-y-3.5">
            <h4 class="text-white text-xs font-mono font-bold tracking-widest uppercase flex items-center gap-1.5">
              <span class="text-zinc-500 font-normal">01 /</span>
              Apparel Blanks
            </h4>
            <ul class="space-y-2.5 text-xs font-sans">
              <li>
                <a routerLink="/catalog" class="text-zinc-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1.5">
                  <span class="text-zinc-600">&rsaquo;</span>
                  <span>Custom Oversized Tees</span>
                </a>
              </li>
              <li>
                <a routerLink="/catalog" class="text-zinc-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1.5">
                  <span class="text-zinc-600">&rsaquo;</span>
                  <span>Heavyweight 380 GSM Hoodies</span>
                </a>
              </li>
              <li>
                <a routerLink="/catalog" class="text-zinc-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1.5">
                  <span class="text-zinc-600">&rsaquo;</span>
                  <span>Streetwear Fleece Joggers</span>
                </a>
              </li>
              <li>
                <a routerLink="/catalog" class="text-zinc-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1.5">
                  <span class="text-zinc-600">&rsaquo;</span>
                  <span>Pro-Fit Sportswear Polos</span>
                </a>
              </li>
              <li>
                <a routerLink="/catalog" class="text-zinc-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1.5">
                  <span class="text-zinc-600">&rsaquo;</span>
                  <span>Structured 6-Panel Caps</span>
                </a>
              </li>
              <li>
                <a routerLink="/catalog" class="text-zinc-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1.5">
                  <span class="text-zinc-600">&rsaquo;</span>
                  <span>304 Vacuum Steel Flasks</span>
                </a>
              </li>
              <li>
                <a routerLink="/gift-kits" class="text-zinc-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1.5">
                  <span class="text-zinc-600">&rsaquo;</span>
                  <span>Corporate Merch Packages</span>
                </a>
              </li>
            </ul>
          </div>

          <!-- Column 3: Printing Technologies -->
          <div class="footer-nav-col space-y-3.5">
            <h4 class="text-white text-xs font-mono font-bold tracking-widest uppercase flex items-center gap-1.5">
              <span class="text-zinc-500 font-normal">02 /</span>
              Print Engineering
            </h4>
            <ul class="space-y-2.5 text-xs font-sans">
              <li>
                <a routerLink="/capabilities" class="text-zinc-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1.5">
                  <span class="text-zinc-600">&rsaquo;</span>
                  <span>High-Density 3D Silicone</span>
                </a>
              </li>
              <li>
                <a routerLink="/capabilities" class="text-zinc-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1.5">
                  <span class="text-zinc-600">&rsaquo;</span>
                  <span>2400 DPI DTF Digital Transfers</span>
                </a>
              </li>
              <li>
                <a routerLink="/capabilities" class="text-zinc-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1.5">
                  <span class="text-zinc-600">&rsaquo;</span>
                  <span>Direct Thermo-Embossing</span>
                </a>
              </li>
              <li>
                <a routerLink="/capabilities" class="text-zinc-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1.5">
                  <span class="text-zinc-600">&rsaquo;</span>
                  <span>Ultrasonic Woven Damask</span>
                </a>
              </li>
              <li>
                <a routerLink="/capabilities" class="text-zinc-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1.5">
                  <span class="text-zinc-600">&rsaquo;</span>
                  <span>Reflective Optical Prints</span>
                </a>
              </li>
              <li>
                <a routerLink="/capabilities" class="text-zinc-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1.5">
                  <span class="text-zinc-600">&rsaquo;</span>
                  <span>Puff &amp; High-Build Inks</span>
                </a>
              </li>
              <li>
                <a routerLink="/capabilities" class="text-zinc-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1.5">
                  <span class="text-zinc-600">&rsaquo;</span>
                  <span>Laser-Etched Leather Patches</span>
                </a>
              </li>
            </ul>
          </div>

          <!-- Column 4: Factory Standards & Swatch Alerts -->
          <div class="footer-nav-col space-y-3.5">
            <h4 class="text-white text-xs font-mono font-bold tracking-widest uppercase flex items-center gap-1.5">
              <span class="text-zinc-500 font-normal">03 /</span>
              Accreditation
            </h4>
            <ul class="space-y-2.5 text-xs font-sans">
              <li>
                <a routerLink="/quality" class="text-zinc-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1.5">
                  <span class="text-zinc-600">&rsaquo;</span>
                  <span>OEKO-TEX Standard 100</span>
                </a>
              </li>
              <li>
                <a routerLink="/quality" class="text-zinc-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1.5">
                  <span class="text-zinc-600">&rsaquo;</span>
                  <span>ISO 9001:2015 Verified</span>
                </a>
              </li>
              <li>
                <a routerLink="/quality" class="text-zinc-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1.5">
                  <span class="text-zinc-600">&rsaquo;</span>
                  <span>50+ Commercial Washes Fastness</span>
                </a>
              </li>
              <li>
                <a routerLink="/quality" class="text-zinc-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1.5">
                  <span class="text-zinc-600">&rsaquo;</span>
                  <span>Color Match &Delta;E &lt; 0.8 Lab</span>
                </a>
              </li>
              <li>
                <a routerLink="/contact-us" class="text-zinc-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1.5">
                  <span class="text-zinc-600">&rsaquo;</span>
                  <span>Request Free Swatch Box</span>
                </a>
              </li>
              <li>
                <a routerLink="/contact-us" class="text-zinc-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1.5">
                  <span class="text-zinc-600">&rsaquo;</span>
                  <span>Bulk Corporate Inquiries</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        <!-- ========================================================================= -->
        <!-- 3. BOTTOM UTILITY BAR & ACCREDITATION FOOTER (ZERO OVERLAP CLEARANCE)     -->
        <!-- ========================================================================= -->
        <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-6 text-xs text-zinc-500 pt-6 pb-36 sm:pb-28 lg:pb-20 font-mono border-t border-zinc-900/90 pr-0 md:pr-64">
          
          <!-- Copyright & Factory Hub -->
          <div class="flex flex-wrap items-center gap-2">
            <span>&copy; 2026 <strong class="text-zinc-200 font-bold">Brand Peoples</strong>. All rights reserved.</span>
            <span class="text-zinc-700 hidden sm:inline">&bull;</span>
            <span class="text-zinc-500">Engineered in Tiruppur, India.</span>
            <span class="text-zinc-700 hidden sm:inline">&bull;</span>
            <span class="text-zinc-500 inline-flex items-center gap-1">
              <span>Developed by</span>
              <a 
                href="https://arivomtechnologies.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="text-zinc-300 hover:text-white underline underline-offset-2 transition-colors decoration-zinc-700 hover:decoration-white font-medium inline-flex items-center gap-1"
                title="Arivom Technologies">
                <span>Arivom Technologies</span>
                <svg class="w-2.5 h-2.5 text-zinc-500 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
              </a>
            </span>
          </div>

          <!-- Complete Utility Navigation Matrix & Back to Top -->
          <div class="flex flex-wrap items-center gap-x-4 sm:gap-x-5 gap-y-2.5 text-zinc-400">
            <a routerLink="/" class="hover:text-white transition">Home</a>
            <span class="text-zinc-800">&bull;</span>
            <a routerLink="/catalog" class="hover:text-white transition">Catalogs</a>
            <span class="text-zinc-800">&bull;</span>
            <a routerLink="/customize" class="hover:text-white transition flex items-center gap-1">
              <span>3D Studio</span>
              <span class="px-1.5 py-0.2 rounded bg-zinc-900 border border-zinc-700 text-[9px] text-emerald-400 font-bold">360°</span>
            </a>
            <span class="text-zinc-800">&bull;</span>
            <a routerLink="/capabilities" class="hover:text-white transition">Capabilities</a>
            <span class="text-zinc-800">&bull;</span>
            <a routerLink="/quality" class="hover:text-white transition">Quality Lab</a>
            <span class="text-zinc-800">&bull;</span>
            <a routerLink="/gift-kits" class="hover:text-white transition">Gift Kits</a>
            <span class="text-zinc-800">&bull;</span>
            <a routerLink="/contact-us" class="hover:text-white transition font-bold text-zinc-200">Contact &amp; Quotes</a>
            <span class="text-zinc-800">&bull;</span>
            
            <!-- Back to Top Button -->
            <button 
              (click)="scrollToTop()" 
              class="hover:text-white transition flex items-center gap-1 cursor-pointer text-zinc-400 hover:text-white group">
              <span>Top</span>
              <svg class="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/></svg>
            </button>
          </div>

        </div>

      </div>
    </footer>
  `
})
export class FooterComponent {
  websiteShared = signal<boolean>(false);

  shareWebsite(): void {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.origin);
      this.websiteShared.set(true);
      setTimeout(() => this.websiteShared.set(false), 2500);
    }
  }

  scrollToTop(): void {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
