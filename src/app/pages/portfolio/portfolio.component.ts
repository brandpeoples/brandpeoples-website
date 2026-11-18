import { Component, signal, computed, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FACTORY_PRODUCTION_SAMPLES, ProductionSample } from '../../data/samples.data';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Portfolio Header -->
    <section class="bg-black text-white py-16 sm:py-20 border-b border-zinc-900 font-sans">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span class="animate-fade-in-down px-3.5 py-1.5 rounded-full bg-zinc-900 text-white border border-zinc-800 text-xs font-mono font-bold uppercase tracking-widest inline-block">
          Authentic Production Archive
        </span>
        <h1 class="animate-fade-in-up delay-150 text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
          Factory Portfolio &amp; Swatch Gallery
        </h1>
        <p class="animate-fade-in-up delay-250 text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-normal">
          Explore 30 verified production samples manufactured at our specialized facility. Every item reflects real export order deliverables with calibrated wash-durability and tactile quality.
        </p>

        <!-- Category Filter Tabs -->
        <div class="animate-fade-in-up delay-300 pt-6 flex flex-wrap items-center justify-center gap-2">
          <button *ngFor="let tab of filterTabs"
                  (click)="activeCategory.set(tab.key)"
                  [class.bg-white]="activeCategory() === tab.key"
                  [class.text-black]="activeCategory() === tab.key"
                  [class.shadow-md]="activeCategory() === tab.key"
                  [class.bg-zinc-900]="activeCategory() !== tab.key"
                  [class.text-zinc-400]="activeCategory() !== tab.key"
                  class="hover-lift-sm active:scale-95 px-4 py-2 rounded-full text-xs font-mono font-bold transition-all border border-zinc-800 whitespace-nowrap cursor-pointer">
            {{ tab.label }} ({{ getCategoryCount(tab.key) }})
          </button>
        </div>
      </div>
    </section>

    <!-- Photo Grid -->
    <section class="py-16 bg-black min-h-screen">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div *ngFor="let item of filteredSamples(); let i = index"
               (click)="openLightbox(item)"
               class="scroll-reveal image-reveal group relative rounded-3xl overflow-hidden bg-zinc-950 border border-zinc-900 cursor-pointer aspect-square hover-lift hover:border-zinc-700 transition-all duration-300"
               [ngClass]="'stagger-' + ((i % 4) + 1)">
            
            <img [src]="'images/gallery/' + item.filename" 
                 [alt]="item.title" 
                 loading="lazy"
                 class="w-full h-full object-cover grayscale contrast-125 transition-transform duration-700 group-hover:scale-110" />

            <div class="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
              <span class="text-[10px] uppercase font-mono font-black text-zinc-400 tracking-wider">{{ item.categoryLabel }}</span>
              <h4 class="text-sm font-bold leading-snug mt-1 text-white">{{ item.title }}</h4>
              <p class="text-xs text-zinc-400 mt-1 line-clamp-1 font-medium">{{ item.technique }}</p>
              <span class="text-[11px] text-white mt-2 flex items-center gap-1 font-mono font-bold">
                <span>Inspect in high-res</span> &rarr;
              </span>
            </div>

            <span class="absolute top-3 right-3 bg-black/80 backdrop-blur-sm text-white text-[10px] font-mono font-bold px-3 py-1 rounded-full border border-zinc-800 transition-transform duration-300 group-hover:scale-105">
              {{ item.categoryLabel }}
            </span>
          </div>
        </div>

      </div>
    </section>

    <!-- Full-Screen Lightbox Modal -->
    <div *ngIf="activeLightboxItem()" 
         class="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-3 sm:p-6 select-none animate-fadeIn font-sans"
         (click)="closeLightbox()">
      
      <!-- Top Bar -->
      <div class="relative z-50 flex items-center justify-between w-full max-w-6xl mx-auto py-1 gap-4" (click)="$event.stopPropagation()">
        <div class="flex items-center gap-3 min-w-0">
          <span class="px-3.5 py-1.5 rounded-full bg-zinc-900 text-white font-mono font-extrabold text-xs border border-zinc-800 shadow-md whitespace-nowrap shrink-0">
            {{ activeLightboxItem()!.categoryLabel }}
          </span>
          <div class="flex flex-col min-w-0">
            <h3 class="text-sm sm:text-base font-extrabold text-white tracking-tight truncate">
              {{ activeLightboxItem()!.title }}
            </h3>
            <span class="text-[11px] font-medium text-zinc-400 hidden sm:inline truncate">
              {{ activeLightboxItem()!.technique }} &bull; {{ activeLightboxItem()!.application }}
            </span>
          </div>
        </div>

        <!-- Zoom Controls -->
        <div class="flex items-center gap-1.5 bg-zinc-900 px-3 py-1.5 rounded-full border border-zinc-800 shadow-xl text-white text-xs shrink-0 font-mono">
          <button (click)="zoomOut()" 
                  type="button"
                  [disabled]="zoomLevel() <= 1"
                  class="p-1 hover:text-white disabled:opacity-30 transition cursor-pointer" 
                  title="Zoom Out">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"/></svg>
          </button>
          
          <button (click)="toggleZoom()" 
                  type="button"
                  class="px-2 font-bold hover:text-white transition flex items-center gap-1 cursor-pointer" 
                  title="Click to Toggle Zoom">
            <span>{{ zoomLevel() }}x</span>
            <span class="text-[10px] text-zinc-500 hidden sm:inline">{{ isZoomed() ? '(Fit)' : '(Zoom)' }}</span>
          </button>

          <button (click)="zoomIn()" 
                  type="button"
                  [disabled]="zoomLevel() >= 3"
                  class="p-1 hover:text-white disabled:opacity-30 transition cursor-pointer" 
                  title="Zoom In">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
          </button>
        </div>

        <!-- Fixed Cancel Button -->
        <button (click)="closeLightbox()" 
                type="button"
                class="px-4 py-2 rounded-full bg-white hover:bg-zinc-200 text-black font-mono font-black text-xs shadow-2xl flex items-center gap-1.5 transition-transform hover:scale-105 cursor-pointer shrink-0"
                aria-label="Cancel and Close Modal">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/>
          </svg>
          <span>Close &times;</span>
        </button>
      </div>

      <!-- Center Stage -->
      <div class="relative flex-1 flex items-center justify-center overflow-hidden my-2 sm:my-4" (click)="$event.stopPropagation()">
        
        <!-- Prev Arrow -->
        <button (click)="prevLightbox($event)" 
                type="button"
                class="absolute left-2 sm:left-6 z-40 p-3 rounded-full bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-800 hover:scale-110 transition shadow-2xl cursor-pointer"
                aria-label="Previous Sample">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"/></svg>
        </button>

        <!-- Center Image with Click to Zoom -->
        <div class="relative max-h-[72vh] flex items-center justify-center transition-all duration-300"
             [class.cursor-zoom-in]="!isZoomed()"
             [class.cursor-zoom-out]="isZoomed()"
             (click)="toggleZoom()"
             title="Click directly to Zoom in / Zoom out">
          <img [src]="'images/gallery/' + activeLightboxItem()!.filename" 
               [alt]="activeLightboxItem()!.title" 
               class="max-h-[70vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl transition-transform duration-300 ease-out select-none border border-zinc-800 grayscale contrast-125"
               [style.transform]="'scale(' + zoomLevel() + ')'" />
        </div>

        <!-- Next Arrow -->
        <button (click)="nextLightbox($event)" 
                type="button"
                class="absolute right-2 sm:right-6 z-40 p-3 rounded-full bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-800 hover:scale-110 transition shadow-2xl cursor-pointer"
                aria-label="Next Sample">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/></svg>
        </button>

      </div>

      <!-- Bottom Bar -->
      <div class="relative z-50 flex items-center justify-between w-full max-w-4xl mx-auto px-4 py-2.5 bg-zinc-900 backdrop-blur-md rounded-2xl border border-zinc-800 text-white text-xs shadow-xl font-mono" (click)="$event.stopPropagation()">
        <div class="flex items-center gap-2 min-w-0">
          <span class="w-2 h-2 rounded-full bg-white animate-pulse shrink-0"></span>
          <span class="text-zinc-300 text-xs font-medium truncate">
            <strong class="text-white">{{ activeLightboxItem()!.title }}</strong> &bull; {{ activeLightboxItem()!.technique }}
          </span>
        </div>

        <div class="flex items-center gap-3 shrink-0">
          <span class="text-zinc-500 text-[11px] hidden sm:inline">ESC to Exit &bull; Click to Zoom</span>
          <button (click)="closeLightbox()" 
                  type="button"
                  class="px-3.5 py-1.5 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-xs font-bold text-white transition whitespace-nowrap cursor-pointer">
            Close &times;
          </button>
        </div>
      </div>

    </div>
  `
})
export class PortfolioComponent {
  activeCategory = signal<string>('all');
  activeLightboxItem = signal<ProductionSample | null>(null);
  zoomLevel = signal<number>(1);

  filterTabs = [
    { key: 'all', label: 'All Samples' },
    { key: 'silicone', label: '3D Silicone' },
    { key: 'dtf', label: 'DTF Transfers' },
    { key: 'emboss', label: 'Thermo-Emboss' },
    { key: 'labels', label: 'Woven Labels' },
    { key: 'specialty', label: 'Specialty Inks' }
  ];

  filteredSamples = computed(() => {
    const cat = this.activeCategory();
    if (cat === 'all') return FACTORY_PRODUCTION_SAMPLES;
    return FACTORY_PRODUCTION_SAMPLES.filter(s => s.category === cat);
  });

  isZoomed = computed(() => this.zoomLevel() > 1);

  getCategoryCount(category: string): number {
    if (category === 'all') return FACTORY_PRODUCTION_SAMPLES.length;
    return FACTORY_PRODUCTION_SAMPLES.filter(s => s.category === category).length;
  }

  openLightbox(item: ProductionSample): void {
    this.activeLightboxItem.set(item);
    this.zoomLevel.set(1);
    document.body.classList.add('overflow-hidden');
  }

  closeLightbox(): void {
    this.activeLightboxItem.set(null);
    this.zoomLevel.set(1);
    document.body.classList.remove('overflow-hidden');
  }

  toggleZoom(): void {
    this.zoomLevel.update(lvl => (lvl === 1 ? 2 : 1));
  }

  zoomIn(): void {
    this.zoomLevel.update(lvl => Math.min(3, +(lvl + 0.5).toFixed(1)));
  }

  zoomOut(): void {
    this.zoomLevel.update(lvl => Math.max(1, +(lvl - 0.5).toFixed(1)));
  }

  prevLightbox(event: Event): void {
    event.stopPropagation();
    const current = this.activeLightboxItem();
    if (!current) return;
    const samples = this.filteredSamples();
    const index = samples.findIndex(s => s.id === current.id);
    const prevIndex = (index - 1 + samples.length) % samples.length;
    this.activeLightboxItem.set(samples[prevIndex]);
    this.zoomLevel.set(1);
  }

  nextLightbox(event: Event): void {
    event.stopPropagation();
    const current = this.activeLightboxItem();
    if (!current) return;
    const samples = this.filteredSamples();
    const index = samples.findIndex(s => s.id === current.id);
    const nextIndex = (index + 1) % samples.length;
    this.activeLightboxItem.set(samples[nextIndex]);
    this.zoomLevel.set(1);
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardNav(event: KeyboardEvent): void {
    if (!this.activeLightboxItem()) return;

    if (event.key === 'Escape') {
      this.closeLightbox();
    } else if (event.key === 'ArrowRight') {
      this.nextLightbox(event);
    } else if (event.key === 'ArrowLeft') {
      this.prevLightbox(event);
    }
  }
}
