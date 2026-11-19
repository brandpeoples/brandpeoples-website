import { 
  Component, 
  OnInit, 
  AfterViewInit, 
  OnDestroy, 
  ElementRef, 
  ViewChild, 
  signal, 
  computed, 
  PLATFORM_ID, 
  inject 
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import * as THREE from 'three';

export interface Garment3DOption {
  id: string;
  name: string;
  category: 'tees' | 'hoodies' | 'pants' | 'caps' | 'drinkware';
  type: string;
  basePrice: number;
  gsm: string;
  description: string;
  badge?: string;
}

export interface PresetGraphic {
  id: string;
  name: string;
  tag: string;
  svgDataUri: string;
}

@Component({
  selector: 'app-customizer',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <!-- Top Editorial Header (Pure Black & White) -->
    <section class="bg-black text-white pt-12 pb-8 border-b border-zinc-800 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div class="space-y-2">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-300 text-xs font-mono uppercase tracking-widest">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>WEBGL 3D REAL-TIME STUDIO &bull; 6 CURATED SILHOUETTES</span>
            </div>
            <h1 class="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase font-display">
              3D Customizer Studio
            </h1>
            <p class="text-zinc-400 text-xs sm:text-sm max-w-2xl font-normal leading-relaxed">
              Real-time 360&deg; parametric 3D simulation. Sculpted streetwear silhouettes, precision logo &amp; typography positioning with 3D silicone and 2400 DPI DTF rendering.
            </p>
          </div>

          <!-- 3D Viewport Controls & Angle Presets -->
          <div class="flex items-center gap-2 flex-wrap shrink-0">
            <button (click)="toggleAutoRotate()"
                    [class.bg-white]="isAutoRotating()"
                    [class.text-black]="isAutoRotating()"
                    [class.bg-zinc-900]="!isAutoRotating()"
                    [class.text-zinc-300]="!isAutoRotating()"
                    class="btn-shimmer px-3.5 py-1.5 rounded-xl border border-zinc-700 text-xs font-mono font-bold transition flex items-center gap-1.5 active:scale-95 cursor-pointer">
              <span>{{ isAutoRotating() ? '⏸ Pause Orbit' : '▶ 360° Orbit' }}</span>
            </button>
            <button (click)="setAngle('front')" 
                    class="px-3 py-1.5 rounded-xl border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 text-xs font-mono font-bold transition cursor-pointer">
              Front
            </button>
            <button (click)="setAngle('back')" 
                    class="px-3 py-1.5 rounded-xl border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 text-xs font-mono font-bold transition cursor-pointer">
              Back
            </button>
            <button (click)="setAngle('side')" 
                    class="px-3 py-1.5 rounded-xl border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 text-xs font-mono font-bold transition cursor-pointer">
              Side
            </button>
            <button (click)="setAngle('iso')" 
                    class="px-3 py-1.5 rounded-xl border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 text-xs font-mono font-bold transition cursor-pointer">
              3D Iso
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Main 3D Studio Workspace -->
    <section class="py-8 sm:py-12 bg-black min-h-screen text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <!-- LEFT / CENTER: WebGL 3D Canvas Viewport (lg:col-span-7 xl:col-span-8) -->
          <div class="lg:col-span-7 xl:col-span-8 space-y-4">
            
            <div [class.bg-zinc-950]="studioBackground() === 'black'"
                 [class.bg-white]="studioBackground() === 'white'"
                 [class.bg-zinc-900]="studioBackground() === 'grey'"
                 class="relative rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl flex flex-col items-center justify-center min-h-[540px] sm:min-h-[700px] select-none group transition-colors duration-500">
              
              <!-- Subtle Studio Grid Background -->
              <div [class.opacity-40]="studioBackground() === 'black'"
                   [class.opacity-15]="studioBackground() === 'white'"
                   [class.opacity-30]="studioBackground() === 'grey'"
                   class="absolute inset-0 bg-[radial-gradient(#71717a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none transition-opacity"></div>

              <!-- Top Overlay: Active Spec Heads-Up Display (HUD) -->
              <div class="absolute top-4 left-4 right-4 flex items-center justify-between text-xs pointer-events-none z-10">
                <div [class.bg-black/85]="studioBackground() !== 'white'"
                     [class.bg-white/90]="studioBackground() === 'white'"
                     [class.text-zinc-300]="studioBackground() !== 'white'"
                     [class.text-black]="studioBackground() === 'white'"
                     [class.border-zinc-800]="studioBackground() !== 'white'"
                     [class.border-zinc-300]="studioBackground() === 'white'"
                     class="flex items-center gap-2 backdrop-blur-md px-3.5 py-1.5 rounded-full border shadow-lg transition-colors">
                  <span class="w-2 h-2 rounded-full animate-pulse"
                        [class.bg-emerald-400]="studioBackground() !== 'white'"
                        [class.bg-black]="studioBackground() === 'white'"></span>
                  <span class="font-mono font-bold uppercase">{{ activeGarment().name }} &bull; {{ activeGarment().gsm }}</span>
                </div>

                <!-- Studio Background Switcher Options: Black vs White -->
                <div class="flex items-center gap-1.5 bg-black/85 backdrop-blur-md p-1 rounded-full border border-zinc-700/80 shadow-xl pointer-events-auto">
                  <span class="text-[10px] font-mono text-zinc-400 pl-2 pr-1 hidden sm:inline uppercase">Background:</span>
                  <button (click)="setStudioBackground('black')"
                          [class.bg-white]="studioBackground() === 'black'"
                          [class.text-black]="studioBackground() === 'black'"
                          [class.text-zinc-400]="studioBackground() !== 'black'"
                          class="px-2.5 py-1 rounded-full text-[11px] font-mono font-bold transition flex items-center gap-1 cursor-pointer">
                    <span>🌑 Black</span>
                  </button>
                  <button (click)="setStudioBackground('white')"
                          [class.bg-white]="studioBackground() === 'white'"
                          [class.text-black]="studioBackground() === 'white'"
                          [class.text-zinc-400]="studioBackground() !== 'white'"
                          class="px-2.5 py-1 rounded-full text-[11px] font-mono font-bold transition flex items-center gap-1 cursor-pointer">
                    <span>⚪ White</span>
                  </button>
                </div>
              </div>

              <!-- Three.js 3D WebGL Canvas Container -->
              <div #canvasContainer 
                   class="w-full h-[540px] sm:h-[700px] cursor-grab active:cursor-grabbing relative flex items-center justify-center z-0">
              </div>

              <!-- Center Helper Hint -->
              <div class="absolute top-16 left-1/2 -translate-x-1/2 pointer-events-none opacity-40 group-hover:opacity-80 transition-opacity">
                <span class="px-3 py-1 rounded-full bg-black/60 backdrop-blur-xs border border-white/10 text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                  Drag to Orbit 360° &bull; Scroll to Zoom
                </span>
              </div>

              <!-- Bottom Floating HUD: Zoom Controls & Color Selector -->
              <div class="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 flex-wrap pointer-events-auto z-10">
                
                <!-- Zoom Controls -->
                <div class="flex items-center gap-1 bg-black/90 backdrop-blur-md p-1.5 rounded-2xl border border-zinc-800 shadow-xl">
                  <button (click)="zoomIn()" 
                          class="w-8 h-8 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white flex items-center justify-center text-sm font-bold transition cursor-pointer"
                          title="Zoom In">
                    +
                  </button>
                  <button (click)="zoomOut()" 
                          class="w-8 h-8 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white flex items-center justify-center text-sm font-bold transition cursor-pointer"
                          title="Zoom Out">
                    &minus;
                  </button>
                  <button (click)="resetCamera()" 
                          class="px-3 h-8 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white text-xs font-mono transition cursor-pointer"
                          title="Reset View">
                    Reset
                  </button>
                </div>

                <!-- Black & White Fabric Palette -->
                <div class="flex items-center gap-2 bg-black/90 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-zinc-800 shadow-xl">
                  <span class="text-xs font-mono text-zinc-400 hidden sm:inline">Garment Tone:</span>
                  @for (col of bwColorPalette; track col.hex) {
                    <button (click)="changeGarmentColor(col.hex)"
                            [style.backgroundColor]="col.hex"
                            [title]="col.name"
                            [class.ring-2]="selectedColor() === col.hex"
                            [class.ring-white]="selectedColor() === col.hex"
                            [class.ring-offset-2]="selectedColor() === col.hex"
                            [class.ring-offset-black]="selectedColor() === col.hex"
                            class="w-6 h-6 rounded-full border border-zinc-700 shadow-sm transition hover:scale-110 active:scale-95 cursor-pointer">
                    </button>
                  }
                </div>

              </div>

            </div>

            <!-- 3D Category Switching Quick Bar -->
            <div class="p-4 rounded-2xl bg-zinc-950 border border-zinc-800/90 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <span class="text-zinc-500 uppercase tracking-wider text-[11px]">Curated Category Swap:</span>
              <div class="flex flex-wrap items-center gap-1.5">
                @for (g of garmentOptions; track g.id) {
                  <button 
                    (click)="selectGarment(g.id)"
                    [class.bg-white]="selectedGarmentId() === g.id"
                    [class.text-black]="selectedGarmentId() === g.id"
                    [class.font-black]="selectedGarmentId() === g.id"
                    [class.bg-zinc-900]="selectedGarmentId() !== g.id"
                    [class.text-zinc-400]="selectedGarmentId() !== g.id"
                    class="px-3 py-1.5 rounded-full border border-zinc-800 hover:border-zinc-500 transition cursor-pointer text-[11px]">
                    {{ g.name }}
                  </button>
                }
              </div>
            </div>

          </div>

          <!-- RIGHT: Customizer Parameter Controls (lg:col-span-5 xl:col-span-4) -->
          <div class="lg:col-span-5 xl:col-span-4 space-y-6">
            
            <div class="bg-zinc-950 rounded-3xl p-6 sm:p-7 border border-zinc-800 shadow-2xl space-y-6 max-h-[920px] overflow-y-auto">
              
              <!-- Mode Tabs: [Brand Upload & Text] vs [Interactive Sketch/Scratch Pad] -->
              <div class="flex items-center bg-black p-1 rounded-2xl border border-zinc-800">
                <button (click)="activeDesignMode.set('upload')"
                        [class.bg-zinc-900]="activeDesignMode() === 'upload'"
                        [class.text-white]="activeDesignMode() === 'upload'"
                        [class.text-zinc-400]="activeDesignMode() !== 'upload'"
                        class="flex-1 py-2 rounded-xl text-xs font-mono font-bold uppercase transition flex items-center justify-center gap-1.5 cursor-pointer">
                  <span>📁 Upload &amp; Text</span>
                </button>
                <button (click)="activeDesignMode.set('sketch')"
                        [class.bg-zinc-900]="activeDesignMode() === 'sketch'"
                        [class.text-white]="activeDesignMode() === 'sketch'"
                        [class.text-zinc-400]="activeDesignMode() !== 'sketch'"
                        class="flex-1 py-2 rounded-xl text-xs font-mono font-bold uppercase transition flex items-center justify-center gap-1.5 cursor-pointer">
                  <span>✏️ Sketch &amp; Scratch</span>
                </button>
              </div>

              <!-- ============================================================= -->
              <!-- TAB A: BRAND UPLOAD & FINE-GRAIN ADJUSTABILITY                -->
              <!-- ============================================================= -->
              @if (activeDesignMode() === 'upload') {
                <div class="space-y-6 animate-fadeIn">
                  
                  <!-- 1. Select Silhouette Base -->
                  <div class="space-y-2.5">
                    <div class="flex items-center justify-between">
                      <label class="block text-xs font-mono font-black uppercase tracking-wider text-zinc-300">
                        1. Target 3D Model Silhouette
                      </label>
                      <span class="text-[10px] font-mono text-zinc-500 uppercase">{{ activeGarment().gsm }}</span>
                    </div>
                    <div class="grid grid-cols-2 gap-2">
                      @for (g of garmentOptions; track g.id) {
                        <button (click)="selectGarment(g.id)"
                                [class.border-white]="selectedGarmentId() === g.id"
                                [class.bg-zinc-900]="selectedGarmentId() === g.id"
                                [class.border-zinc-800]="selectedGarmentId() !== g.id"
                                class="p-2.5 rounded-xl border text-left transition hover:border-zinc-600 cursor-pointer">
                          <span class="text-xs font-bold text-white block truncate">{{ g.name }}</span>
                          <span class="text-[10px] text-zinc-400 block">{{ g.gsm }}</span>
                        </button>
                      }
                    </div>
                  </div>

                  <!-- 2. Interactive Print Placement Map (Click to Position) -->
                  <div class="p-3.5 rounded-2xl bg-black border border-zinc-800/90 space-y-2.5">
                    <div class="flex items-center justify-between">
                      <span class="text-[11px] font-mono font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-1.5">
                        <span>🎯 Interactive Placement Map</span>
                      </span>
                      <div class="flex items-center gap-1 bg-zinc-900 p-0.5 rounded-lg border border-zinc-800">
                        <button (click)="activeTargetLayer.set('logo')"
                                [class.bg-white]="activeTargetLayer() === 'logo'"
                                [class.text-black]="activeTargetLayer() === 'logo'"
                                [class.text-zinc-400]="activeTargetLayer() !== 'logo'"
                                class="px-2 py-0.5 rounded text-[10px] font-mono font-bold transition cursor-pointer">
                          Logo
                        </button>
                        <button (click)="activeTargetLayer.set('text')"
                                [class.bg-white]="activeTargetLayer() === 'text'"
                                [class.text-black]="activeTargetLayer() === 'text'"
                                [class.text-zinc-400]="activeTargetLayer() !== 'text'"
                                class="px-2 py-0.5 rounded text-[10px] font-mono font-bold transition cursor-pointer">
                          Text
                        </button>
                      </div>
                    </div>

                    <!-- Mini 2D Interactive Target Zone -->
                    <div (click)="onPrintMapClick($event)" 
                         class="relative w-full h-32 rounded-xl bg-zinc-950 border border-dashed border-zinc-700/80 cursor-crosshair overflow-hidden group select-none">
                      <!-- Grid lines -->
                      <div class="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:25%_25%] opacity-30"></div>
                      
                      <!-- Subtle T-shirt Chest Outline Graphic -->
                      <div class="absolute inset-x-8 inset-y-2 border border-zinc-800 rounded-2xl pointer-events-none opacity-40"></div>
                      <div class="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-3 border-b border-zinc-700 rounded-b-full pointer-events-none opacity-50"></div>

                      <!-- Logo Target Crosshair -->
                      @if (uploadedImage()) {
                        <div [style.left.%]="(logoPosX() / 1024) * 100"
                             [style.top.%]="(logoPosY() / 1024) * 100"
                             class="absolute -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-2 border-cyan-400 bg-cyan-400/20 flex items-center justify-center pointer-events-none transition-all shadow-md z-10"
                             title="Logo Position">
                          <span class="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                        </div>
                      }

                      <!-- Text Target Crosshair -->
                      @if (customText().trim()) {
                        <div [style.left.%]="(textPosX() / 1024) * 100"
                             [style.top.%]="(textPosY() / 1024) * 100"
                             class="absolute -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-2 border-amber-400 bg-amber-400/20 flex items-center justify-center pointer-events-none transition-all shadow-md z-10"
                             title="Text Position">
                          <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                        </div>
                      }

                      <span class="absolute bottom-1 right-2 text-[9px] font-mono text-zinc-500 pointer-events-none">
                        Click anywhere to position {{ activeTargetLayer() === 'logo' ? 'Logo' : 'Text' }}
                      </span>
                    </div>
                  </div>

                  <!-- 3. Brand Graphic Upload & Sliders -->
                  <div class="space-y-3 pt-2 border-t border-zinc-800/80">
                    <div class="flex items-center justify-between">
                      <label class="block text-xs font-mono font-black uppercase tracking-wider text-zinc-300">
                        2. Brand Graphic / Logo
                      </label>
                      @if (uploadedImage()) {
                        <button (click)="removeUploadedImage()" class="text-[11px] font-mono text-zinc-400 hover:text-white underline cursor-pointer">
                          Remove &times;
                        </button>
                      }
                    </div>

                    <!-- File Upload Input Dropzone -->
                    <label class="border-2 border-dashed border-zinc-800 hover:border-zinc-500 rounded-2xl p-3.5 text-center cursor-pointer transition bg-zinc-900/60 hover:bg-zinc-900 block group">
                      <span class="text-xs font-mono font-bold text-zinc-300 group-hover:text-white flex items-center justify-center gap-2">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                        <span>{{ uploadedImage() ? 'Replace Brand Graphic' : 'Upload PNG / SVG / JPG' }}</span>
                      </span>
                      <span class="text-[10px] text-zinc-500 font-mono block mt-1">High-res transparent PNG recommended</span>
                      <input type="file" (change)="onFileSelected($event)" accept="image/*" class="hidden" />
                    </label>

                    <!-- Preset Streetwear Graphic Badges -->
                    <div class="space-y-1.5">
                      <span class="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">Or Select Curated Streetwear Emblem:</span>
                      <div class="grid grid-cols-2 gap-1.5">
                        @for (preset of presetGraphics; track preset.id) {
                          <button 
                            type="button"
                            (click)="applyPresetGraphic(preset)"
                            class="px-2.5 py-1.5 rounded-lg bg-black border border-zinc-800 hover:border-zinc-600 text-[11px] font-mono text-zinc-300 hover:text-white transition cursor-pointer text-left truncate">
                            {{ preset.name }}
                          </button>
                        }
                      </div>
                    </div>

                    <!-- Fine-Grained Logo Adjustability Controls -->
                    @if (uploadedImage()) {
                      <div class="p-4 rounded-2xl bg-black border border-zinc-800/90 space-y-3.5 font-mono text-xs">
                        
                        <!-- Quick Placement Buttons -->
                        <div class="space-y-1.5">
                          <span class="text-[10px] text-zinc-400 uppercase tracking-wider block">Quick Logo Presets:</span>
                          <div class="flex flex-wrap gap-1">
                            <button (click)="setLogoPlacement('center')" class="px-2 py-1 rounded-md bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-[10px] text-zinc-300 hover:text-white cursor-pointer">
                              🎯 Center Chest
                            </button>
                            <button (click)="setLogoPlacement('left-crest')" class="px-2 py-1 rounded-md bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-[10px] text-zinc-300 hover:text-white cursor-pointer">
                              👕 Left Crest
                            </button>
                            <button (click)="setLogoPlacement('right-chest')" class="px-2 py-1 rounded-md bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-[10px] text-zinc-300 hover:text-white cursor-pointer">
                              📐 Right Chest
                            </button>
                            <button (click)="setLogoPlacement('oversized')" class="px-2 py-1 rounded-md bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-[10px] text-zinc-300 hover:text-white cursor-pointer">
                              ⬛ Oversized
                            </button>
                            <button (click)="setLogoPlacement('lower-hem')" class="px-2 py-1 rounded-md bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-[10px] text-zinc-300 hover:text-white cursor-pointer">
                              🏷️ Lower Hem
                            </button>
                          </div>
                        </div>

                        <!-- Horizontal Position (X) -->
                        <div class="space-y-1">
                          <div class="flex items-center justify-between text-[11px] text-zinc-400">
                            <span>Horizontal (X-Axis):</span>
                            <span class="text-white font-bold">{{ logoPosX() }}px {{ logoPosX() === 512 ? '(Center)' : '' }}</span>
                          </div>
                          <input type="range" min="150" max="874" [ngModel]="logoPosX()" (ngModelChange)="logoPosX.set($event); updateTexture()" class="w-full accent-white cursor-pointer" />
                        </div>

                        <!-- Vertical Position (Y) -->
                        <div class="space-y-1">
                          <div class="flex items-center justify-between text-[11px] text-zinc-400">
                            <span>Vertical (Y-Axis):</span>
                            <span class="text-white font-bold">{{ logoPosY() }}px</span>
                          </div>
                          <input type="range" min="140" max="850" [ngModel]="logoPosY()" (ngModelChange)="logoPosY.set($event); updateTexture()" class="w-full accent-white cursor-pointer" />
                        </div>

                        <!-- Graphic Scale -->
                        <div class="space-y-1">
                          <div class="flex items-center justify-between text-[11px] text-zinc-400">
                            <span>Scale Dimension:</span>
                            <span class="text-white font-bold">{{ logoScale() }}%</span>
                          </div>
                          <input type="range" min="25" max="190" [ngModel]="logoScale()" (ngModelChange)="logoScale.set($event); updateTexture()" class="w-full accent-white cursor-pointer" />
                        </div>

                        <!-- Rotation -->
                        <div class="space-y-1">
                          <div class="flex items-center justify-between text-[11px] text-zinc-400">
                            <span>Rotation Angle:</span>
                            <div class="flex items-center gap-2">
                              <span class="text-white font-bold">{{ logoRotation() }}&deg;</span>
                              @if (logoRotation() !== 0) {
                                <button (click)="logoRotation.set(0); updateTexture()" class="text-[10px] text-zinc-500 hover:text-white underline cursor-pointer">0° Reset</button>
                              }
                            </div>
                          </div>
                          <input type="range" min="-180" max="180" [ngModel]="logoRotation()" (ngModelChange)="logoRotation.set($event); updateTexture()" class="w-full accent-white cursor-pointer" />
                        </div>

                      </div>
                    }
                  </div>

                  <!-- 4. Live Typography on 3D Model & Sliders -->
                  <div class="space-y-3.5 pt-2 border-t border-zinc-800/80">
                    <div class="flex items-center justify-between">
                      <label class="block text-xs font-mono font-black uppercase tracking-wider text-zinc-300">
                        3. Live Typography &amp; Name
                      </label>
                      @if (customText().trim()) {
                        <button (click)="customText.set(''); updateTexture()" class="text-[11px] font-mono text-zinc-400 hover:text-white underline cursor-pointer">
                          Clear Text
                        </button>
                      }
                    </div>

                    <!-- Text Input Box -->
                    <input type="text" 
                           [(ngModel)]="customText" 
                           (ngModelChange)="updateTexture()"
                           placeholder="Type custom text (e.g. BRAND PEOPLES)" 
                           class="w-full px-4 py-2.5 rounded-xl bg-black border border-zinc-800 text-xs text-white placeholder-zinc-500 focus:outline-hidden focus:border-white transition-all font-mono font-bold" />

                    @if (customText().trim()) {
                      <div class="p-4 rounded-2xl bg-black border border-zinc-800/90 space-y-3.5 font-mono text-xs">
                        
                        <!-- Quick Placement Buttons for Text -->
                        <div class="space-y-1.5">
                          <span class="text-[10px] text-zinc-400 uppercase tracking-wider block">Quick Text Presets:</span>
                          <div class="flex flex-wrap gap-1">
                            <button (click)="setTextPlacement('center')" class="px-2 py-1 rounded-md bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-[10px] text-zinc-300 hover:text-white cursor-pointer">
                              🎯 Center Chest
                            </button>
                            <button (click)="setTextPlacement('left-crest')" class="px-2 py-1 rounded-md bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-[10px] text-zinc-300 hover:text-white cursor-pointer">
                              👕 Pocket Crest
                            </button>
                            <button (click)="setTextPlacement('high-yoke')" class="px-2 py-1 rounded-md bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-[10px] text-zinc-300 hover:text-white cursor-pointer">
                              ⬆️ High Yoke
                            </button>
                            <button (click)="setTextPlacement('lower-hem')" class="px-2 py-1 rounded-md bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-[10px] text-zinc-300 hover:text-white cursor-pointer">
                              🏷️ Lower Hem
                            </button>
                          </div>
                        </div>

                        <!-- Font Size Slider -->
                        <div class="space-y-1">
                          <div class="flex items-center justify-between text-[11px] text-zinc-400">
                            <span>Font Size:</span>
                            <span class="text-white font-bold">{{ textFontSize() }}px</span>
                          </div>
                          <input type="range" min="16" max="110" [ngModel]="textFontSize()" (ngModelChange)="textFontSize.set($event); updateTexture()" class="w-full accent-white cursor-pointer" />
                        </div>

                        <!-- Horizontal Position (X) -->
                        <div class="space-y-1">
                          <div class="flex items-center justify-between text-[11px] text-zinc-400">
                            <span>Horizontal (X-Axis):</span>
                            <span class="text-white font-bold">{{ textPosX() }}px {{ textPosX() === 512 ? '(Center)' : '' }}</span>
                          </div>
                          <input type="range" min="150" max="874" [ngModel]="textPosX()" (ngModelChange)="textPosX.set($event); updateTexture()" class="w-full accent-white cursor-pointer" />
                        </div>

                        <!-- Vertical Position (Y) -->
                        <div class="space-y-1">
                          <div class="flex items-center justify-between text-[11px] text-zinc-400">
                            <span>Vertical (Y-Axis):</span>
                            <span class="text-white font-bold">{{ textPosY() }}px</span>
                          </div>
                          <input type="range" min="140" max="880" [ngModel]="textPosY()" (ngModelChange)="textPosY.set($event); updateTexture()" class="w-full accent-white cursor-pointer" />
                        </div>

                        <!-- Font Family Selection -->
                        <div class="space-y-1">
                          <span class="text-[11px] text-zinc-400 block">Streetwear Font Style:</span>
                          <select [ngModel]="textFontFamily()" 
                                  (ngModelChange)="textFontFamily.set($event); updateTexture()" 
                                  class="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-hidden focus:border-white">
                            <option value="Impact, sans-serif">Streetwear Heavy Impact</option>
                            <option value="'Plus Jakarta Sans', sans-serif">Clean Grotesk Sans</option>
                            <option value="ui-monospace, monospace">Technical Stencil Mono</option>
                            <option value="'Georgia', serif">Luxury High-End Serif</option>
                            <option value="'Brush Script MT', cursive">Signature Hand Script</option>
                          </select>
                        </div>

                        <!-- Letter Spacing & Arched Text -->
                        <div class="grid grid-cols-2 gap-3 pt-1">
                          <div class="space-y-1">
                            <div class="flex items-center justify-between text-[11px] text-zinc-400">
                              <span>Tracking:</span>
                              <span class="text-white font-bold">{{ textLetterSpacing() }}px</span>
                            </div>
                            <input type="range" min="0" max="24" [ngModel]="textLetterSpacing()" (ngModelChange)="textLetterSpacing.set($event); updateTexture()" class="w-full accent-white cursor-pointer" />
                          </div>

                          <div class="space-y-1">
                            <div class="flex items-center justify-between text-[11px] text-zinc-400">
                              <span>Arch Curve:</span>
                              <span class="text-white font-bold">{{ textArc() }}</span>
                            </div>
                            <input type="range" min="-40" max="40" [ngModel]="textArc()" (ngModelChange)="textArc.set($event); updateTexture()" class="w-full accent-white cursor-pointer" />
                          </div>
                        </div>

                        <!-- Text Color Swatches & Contrast -->
                        <div class="space-y-2 pt-1 border-t border-zinc-800">
                          <div class="flex items-center justify-between">
                            <span class="text-[11px] text-zinc-400">Text Contrast Color:</span>
                            <span class="text-[11px] font-bold text-white uppercase">{{ textColor() }}</span>
                          </div>
                          <div class="flex items-center gap-2 flex-wrap">
                            @for (c of textPalette; track c.hex) {
                              <button (click)="setTextColor(c.hex)"
                                      [style.backgroundColor]="c.hex"
                                      [title]="c.name"
                                      [class.ring-2]="textColor() === c.hex"
                                      [class.ring-white]="textColor() === c.hex"
                                      class="w-5 h-5 rounded-full border border-zinc-700 transition hover:scale-110 cursor-pointer">
                              </button>
                            }
                          </div>
                        </div>

                        <!-- Sub-Badge Toggle -->
                        <div class="flex items-center justify-between pt-1">
                          <label class="text-[11px] text-zinc-400 flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" [ngModel]="showSubBadge()" (ngModelChange)="showSubBadge.set($event); updateTexture()" class="accent-white cursor-pointer" />
                            <span>Include Studio 360 Tiruppur Stamp</span>
                          </label>
                        </div>

                      </div>
                    }
                  </div>

                </div>
              }

              <!-- ============================================================= -->
              <!-- TAB B: INTERACTIVE SKETCH & SCRATCH CANVAS                    -->
              <!-- ============================================================= -->
              @if (activeDesignMode() === 'sketch') {
                <div class="space-y-4 animate-fadeIn">
                  
                  <div class="space-y-1">
                    <span class="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">FREEHAND DRAWING / GRAFFITI TAGGING</span>
                    <h4 class="text-sm font-bold text-white uppercase font-display">Scratch &amp; Sketch Pad</h4>
                    <p class="text-[11px] text-zinc-400 font-mono">
                      Draw with your mouse or stylus below. Your freehand sketch instantaneously projects onto the 3D garment mesh in real time!
                    </p>
                  </div>

                  <!-- The Sketch Canvas Pad Container -->
                  <div class="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-inner">
                    <canvas #sketchCanvas 
                            (mousedown)="startDrawing($event)"
                            (mousemove)="draw($event)"
                            (mouseup)="stopDrawing()"
                            (mouseleave)="stopDrawing()"
                            (touchstart)="startTouchDrawing($event)"
                            (touchmove)="touchDraw($event)"
                            (touchend)="stopDrawing()"
                            class="w-full h-44 cursor-crosshair block bg-black touch-none">
                    </canvas>

                    <div class="absolute bottom-2 right-2 text-[9px] font-mono text-zinc-500 bg-black/80 px-2 py-0.5 rounded pointer-events-none">
                      Interactive 3D Transfer Active
                    </div>
                  </div>

                  <!-- Sketch Toolbar Controls: Color, Stroke & Clear -->
                  <div class="space-y-3 font-mono text-xs">
                    
                    <!-- Color Swatches -->
                    <div class="flex items-center justify-between">
                      <span class="text-[11px] text-zinc-400">Ink Color:</span>
                      <div class="flex items-center gap-1.5">
                        @for (col of sketchColors; track col) {
                          <button 
                            type="button"
                            (click)="currentBrushColor.set(col)"
                            [style.backgroundColor]="col"
                            [class.ring-2]="currentBrushColor() === col"
                            [class.ring-white]="currentBrushColor() === col"
                            class="w-5 h-5 rounded-full border border-zinc-700 transition hover:scale-110 cursor-pointer">
                          </button>
                        }
                      </div>
                    </div>

                    <!-- Brush Size Selection -->
                    <div class="flex items-center justify-between">
                      <span class="text-[11px] text-zinc-400">Stroke Weight:</span>
                      <div class="flex items-center gap-1">
                        <button (click)="currentBrushSize.set(2)" 
                                [class.bg-white]="currentBrushSize() === 2"
                                [class.text-black]="currentBrushSize() === 2"
                                [class.bg-black]="currentBrushSize() !== 2"
                                [class.text-zinc-400]="currentBrushSize() !== 2"
                                class="px-2 py-1 rounded border border-zinc-800 text-[10px] cursor-pointer">
                          Fine (2px)
                        </button>
                        <button (click)="currentBrushSize.set(6)" 
                                [class.bg-white]="currentBrushSize() === 6"
                                [class.text-black]="currentBrushSize() === 6"
                                [class.bg-black]="currentBrushSize() !== 6"
                                [class.text-zinc-400]="currentBrushSize() !== 6"
                                class="px-2 py-1 rounded border border-zinc-800 text-[10px] cursor-pointer">
                          Bold (6px)
                        </button>
                        <button (click)="currentBrushSize.set(16)" 
                                [class.bg-white]="currentBrushSize() === 16"
                                [class.text-black]="currentBrushSize() === 16"
                                [class.bg-black]="currentBrushSize() !== 16"
                                [class.text-zinc-400]="currentBrushSize() !== 16"
                                class="px-2 py-1 rounded border border-zinc-800 text-[10px] cursor-pointer">
                          Marker (16px)
                        </button>
                      </div>
                    </div>

                    <!-- Clear / Reset Sketch Button -->
                    <div class="flex items-center gap-2 pt-1">
                      <button 
                        type="button"
                        (click)="clearSketch()"
                        class="flex-1 py-2 rounded-xl border border-zinc-800 bg-black hover:bg-zinc-900 text-zinc-300 text-xs transition cursor-pointer">
                        Clear Sketch
                      </button>
                    </div>

                  </div>

                </div>
              }

              <!-- Printing Technique Selector -->
              <div class="space-y-2 pt-2 border-t border-zinc-800/80">
                <label class="block text-xs font-mono font-black uppercase tracking-wider text-zinc-300">
                  Select Production Technology
                </label>
                <div class="grid grid-cols-2 gap-2">
                  <button (click)="selectPrintMethod('silicone')"
                          [class.border-white]="selectedPrintMethod() === 'silicone'"
                          [class.bg-zinc-900]="selectedPrintMethod() === 'silicone'"
                          [class.border-zinc-800]="selectedPrintMethod() !== 'silicone'"
                          class="p-2.5 rounded-xl border text-left transition cursor-pointer">
                    <span class="text-xs font-bold text-white block">3D Silicone</span>
                    <span class="text-[10px] text-zinc-500 block">1.5mm high relief</span>
                  </button>

                  <button (click)="selectPrintMethod('dtf')"
                          [class.border-white]="selectedPrintMethod() === 'dtf'"
                          [class.bg-zinc-900]="selectedPrintMethod() === 'dtf'"
                          [class.border-zinc-800]="selectedPrintMethod() !== 'dtf'"
                          class="p-2.5 rounded-xl border text-left transition cursor-pointer">
                    <span class="text-xs font-bold text-white block">2400 DPI DTF</span>
                    <span class="text-[10px] text-zinc-500 block">Photorealistic soft hand</span>
                  </button>
                </div>
              </div>

              <!-- Price & Ordering Actions -->
              <div class="pt-4 border-t border-zinc-800 space-y-4">
                <div class="flex items-center justify-between">
                  <div>
                    <span class="text-[10px] font-mono text-zinc-400 block uppercase">Prototype Sample Price</span>
                    <span class="text-2xl font-black font-mono text-white">₹{{ calculatedPrice() }}</span>
                    <span class="text-[10px] text-zinc-500 block">Zero MOQ &bull; Tiered bulk from 25+ pcs</span>
                  </div>
                  <span class="px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-300 font-mono text-xs">
                    50+ Washes
                  </span>
                </div>

                <div class="grid grid-cols-1 gap-2.5">
                  <a routerLink="/contact-us" 
                     class="btn-shimmer w-full py-3.5 px-4 rounded-xl bg-white hover:bg-zinc-200 text-black font-black text-xs sm:text-sm text-center uppercase tracking-wider transition active:scale-95 cursor-pointer shadow-lg">
                    Request 3D Sample Production &rarr;
                  </a>

                  <a [href]="whatsAppQuoteUrl()"
                     target="_blank" 
                     rel="noopener noreferrer"
                     class="w-full py-3 px-4 rounded-xl border border-zinc-800 hover:bg-zinc-900 text-zinc-300 hover:text-white font-mono font-bold text-xs text-center transition flex items-center justify-center gap-2">
                    <span>Send 3D Spec to WhatsApp</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  `
})
export class CustomizerComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('canvasContainer') private containerRef!: ElementRef<HTMLDivElement>;
  @ViewChild('sketchCanvas') private sketchCanvasRef?: ElementRef<HTMLCanvasElement>;

  private platformId = inject(PLATFORM_ID);
  private route = inject(ActivatedRoute);

  // Three.js Core Objects
  private renderer?: THREE.WebGLRenderer;
  private scene?: THREE.Scene;
  private camera?: THREE.PerspectiveCamera;
  private garmentMesh?: THREE.Group;
  private groundShadow?: THREE.Mesh;
  private bodyMaterial?: THREE.MeshStandardMaterial;
  private dynamicTextureCanvas?: HTMLCanvasElement;
  private dynamicTexture?: THREE.CanvasTexture;
  private animationFrameId?: number;

  private ambientLight?: THREE.AmbientLight;
  private keyLight?: THREE.DirectionalLight;
  private fillLight?: THREE.DirectionalLight;
  private rimLight?: THREE.DirectionalLight;

  // Interaction State
  private isDragging = false;
  private previousMousePosition = { x: 0, y: 0 };
  private targetRotation = { x: 0, y: 0 };

  // Sketch State
  private isDrawing = false;
  private lastDrawPoint = { x: 0, y: 0 };
  private sketchImageCanvas?: HTMLCanvasElement;

  // Signals
  studioBackground = signal<'black' | 'white' | 'grey'>('black');
  activeDesignMode = signal<'upload' | 'sketch'>('upload');
  selectedGarmentId = signal<string>('oversized-tee');
  selectedColor = signal<string>('#0a0a0a');
  selectedPrintMethod = signal<'silicone' | 'dtf'>('silicone');
  
  // Placement & Transform Signals
  activeTargetLayer = signal<'logo' | 'text'>('logo');

  // Graphic / Logo Signals
  uploadedImage = signal<string | null>(null);
  logoPosX = signal<number>(512);
  logoPosY = signal<number>(320);
  logoScale = signal<number>(85);
  logoRotation = signal<number>(0);
  logoOpacity = signal<number>(100);

  // Typography Signals
  customText = signal<string>('BRAND PEOPLES');
  textPosX = signal<number>(512);
  textPosY = signal<number>(440);
  textFontSize = signal<number>(54);
  textFontFamily = signal<string>('Impact, sans-serif');
  textLetterSpacing = signal<number>(5);
  textRotation = signal<number>(0);
  textArc = signal<number>(0);
  textColor = signal<string>('#ffffff');
  showSubBadge = signal<boolean>(true);
  subBadgeText = signal<string>('STUDIO 360 • TIRUPPUR');

  isAutoRotating = signal<boolean>(true);

  currentBrushColor = signal<string>('#ffffff');
  currentBrushSize = signal<number>(6);

  sketchColors = ['#ffffff', '#000000', '#d4d4d8', '#ef4444', '#84cc16', '#06b6d4'];

  textPalette = [
    { name: 'Pure White', hex: '#ffffff' },
    { name: 'Pitch Black', hex: '#000000' },
    { name: 'Acid Lime', hex: '#a3e635' },
    { name: 'Cyber Orange', hex: '#ff5500' },
    { name: 'Cobalt Blue', hex: '#3b82f6' },
    { name: 'Warm Gold', hex: '#eab308' }
  ];

  garmentOptions: Garment3DOption[] = [
    {
      id: 'oversized-tee',
      name: 'Oversized Street Tee',
      category: 'tees',
      type: 'Tee',
      basePrice: 499,
      gsm: '240 GSM Combed Cotton',
      description: 'Boxy drop-shoulder streetwear cut with ribbed collar.'
    },
    {
      id: 'classic-tee',
      name: 'Classic Crewneck',
      category: 'tees',
      type: 'Tee',
      basePrice: 399,
      gsm: '180 GSM Bio-Washed',
      description: 'Tailored everyday breathable fit.'
    },
    {
      id: 'heavy-hoodie',
      name: 'French Terry Hoodie',
      category: 'hoodies',
      type: 'Hoodie',
      basePrice: 899,
      gsm: '380 GSM Heavy Terry',
      description: 'Sculpted hood, kangaroo pocket & thick ribs.'
    },
    {
      id: 'fleece-joggers',
      name: 'Streetwear Fleece Pants',
      category: 'pants',
      type: 'Pants',
      basePrice: 799,
      gsm: '380 GSM Diagonal Loop',
      description: 'Tapered legs, drawstring knot & ankle cuffs.'
    },
    {
      id: 'water-bottle',
      name: '750ml Vacuum Steel Bottle',
      category: 'drinkware',
      type: 'Flask',
      basePrice: 599,
      gsm: '304 Stainless Steel',
      description: '360° cylindrical laser & rotary UV flask.'
    },
    {
      id: 'trucker-cap',
      name: 'Structured Street Cap',
      category: 'caps',
      type: 'Cap',
      basePrice: 299,
      gsm: 'Rigid Cotton Twill',
      description: '6-panel structured buckram cap with curved brim.'
    }
  ];

  bwColorPalette = [
    { name: 'Pitch Black', hex: '#0a0a0a' },
    { name: 'Chalk White', hex: '#f5f5f5' },
    { name: 'Charcoal Heather', hex: '#262626' },
    { name: 'Graphite Grey', hex: '#404040' },
    { name: 'Raw Steel', hex: '#9ca3af' }
  ];

  presetGraphics: PresetGraphic[] = [
    {
      id: 'bp-crest',
      name: 'Brand Peoples Crest',
      tag: 'emblem',
      svgDataUri: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" viewBox="0 0 240 240"><circle cx="120" cy="120" r="105" fill="none" stroke="white" stroke-width="10"/><circle cx="120" cy="120" r="92" fill="none" stroke="white" stroke-width="2" stroke-dasharray="6,4"/><path d="M80 155 C80 95, 160 95, 160 155" fill="none" stroke="white" stroke-width="14" stroke-linecap="round"/><circle cx="120" cy="80" r="24" fill="white"/></svg>`
    },
    {
      id: 'box-logo',
      name: 'Minimalist Box Logo',
      tag: 'street',
      svgDataUri: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="340" height="110" viewBox="0 0 340 110"><rect width="340" height="110" fill="white"/><text x="170" y="70" font-family="sans-serif" font-size="36" font-weight="900" fill="black" text-anchor="middle" letter-spacing="2">BRAND PEOPLES</text></svg>`
    },
    {
      id: 'tokyo-studio',
      name: 'Studio Label 01',
      tag: 'typo',
      svgDataUri: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="280" height="130" viewBox="0 0 280 130"><rect width="280" height="130" fill="none" stroke="white" stroke-width="5"/><text x="140" y="58" font-family="sans-serif" font-size="30" font-weight="900" fill="white" text-anchor="middle" letter-spacing="3">BP // STUDIO</text><text x="140" y="92" font-family="monospace" font-size="13" font-weight="bold" fill="%23a1a1aa" text-anchor="middle" letter-spacing="4">2400 DPI SILICONE</text></svg>`
    },
    {
      id: 'gothic-star',
      name: 'Streetwear Compass Star',
      tag: 'symbol',
      svgDataUri: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="220" height="220" viewBox="0 0 220 220"><polygon points="110,15 132,88 205,110 132,132 110,205 88,132 15,110 88,88" fill="white"/><circle cx="110" cy="110" r="18" fill="black"/></svg>`
    }
  ];

  activeGarment = computed(() => {
    return this.garmentOptions.find(g => g.id === this.selectedGarmentId()) || this.garmentOptions[0];
  });

  calculatedPrice = computed(() => {
    const base = this.activeGarment().basePrice;
    const addon = this.selectedPrintMethod() === 'silicone' ? 70 : 45;
    return base + addon;
  });

  whatsAppQuoteUrl = computed(() => {
    const text = encodeURIComponent(
      `Hi Brand Peoples! I customized the 3D ${this.activeGarment().name} (${this.selectedColor()}) with ${this.selectedPrintMethod()} print: "${this.customText()}". Can you provide quotation?`
    );
    return `https://wa.me/919629986444?text=${text}`;
  });

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const cat = params['category'];
      if (cat) {
        if (cat === 'hoodies') this.selectGarment('heavy-hoodie');
        else if (cat === 't-shirts' || cat === 'tees') this.selectGarment('oversized-tee');
        else if (cat === 'headwear' || cat === 'caps') this.selectGarment('trucker-cap');
        else if (cat === 'pants' || cat === 'joggers') this.selectGarment('fleece-joggers');
        else if (cat === 'stickers' || cat === 'bottles' || cat === 'drinkware') this.selectGarment('water-bottle');
      }
      const item = params['item'];
      if (item) {
        const found = this.garmentOptions.find(g => g.id === item);
        if (found) this.selectGarment(found.id);
      }
    });
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId) || typeof window === 'undefined') return;
    this.initThreeScene();
    this.setupInteractionListeners();
    this.initSketchPad();
  }

  ngOnDestroy(): void {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    if (this.renderer) {
      this.renderer.dispose();
    }
  }

  // =========================================================================
  // 1. THREE.JS SCENE INITIALIZATION & LIGHTING
  // =========================================================================
  private initThreeScene(): void {
    const container = this.containerRef?.nativeElement;
    if (!container) return;

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 700;

    this.scene = new THREE.Scene();
    this.applyStudioBackground(this.studioBackground());

    this.camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    this.camera.position.set(0, 0, 5.8);

    try {
      this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      this.renderer.setSize(width, height);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
      this.renderer.toneMappingExposure = 1.25;
      container.appendChild(this.renderer.domElement);
    } catch (e) {
      console.warn('WebGL Renderer fallback initialization', e);
      return;
    }

    // Studio Lighting
    this.ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    this.scene.add(this.ambientLight);

    this.keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    this.keyLight.position.set(2.5, 3.5, 4.0);
    this.scene.add(this.keyLight);

    this.fillLight = new THREE.DirectionalLight(0xffffff, 1.0);
    this.fillLight.position.set(-3.5, -0.5, 3.0);
    this.scene.add(this.fillLight);

    this.rimLight = new THREE.DirectionalLight(0xffffff, 2.0);
    this.rimLight.position.set(0, 4.0, -3.5);
    this.scene.add(this.rimLight);

    this.setupGroundShadow();
    this.build3DGarment();
    this.animate();

    window.addEventListener('resize', this.onWindowResize.bind(this));
  }

  setStudioBackground(mode: 'black' | 'white' | 'grey'): void {
    this.studioBackground.set(mode);
    this.applyStudioBackground(mode);
  }

  private applyStudioBackground(mode: 'black' | 'white' | 'grey'): void {
    if (!this.scene) return;
    
    if (mode === 'white') {
      this.scene.background = new THREE.Color(0xfcfcfc);
      if (this.ambientLight) this.ambientLight.intensity = 1.1;
      if (this.keyLight) this.keyLight.intensity = 1.9;
      if (this.groundShadow) this.groundShadow.visible = true;
    } else if (mode === 'grey') {
      this.scene.background = new THREE.Color(0x18181b);
      if (this.ambientLight) this.ambientLight.intensity = 1.2;
      if (this.keyLight) this.keyLight.intensity = 2.2;
      if (this.groundShadow) this.groundShadow.visible = true;
    } else {
      this.scene.background = new THREE.Color(0x050505);
      if (this.ambientLight) this.ambientLight.intensity = 1.3;
      if (this.keyLight) this.keyLight.intensity = 2.4;
      if (this.groundShadow) this.groundShadow.visible = false;
    }
  }

  private setupGroundShadow(): void {
    if (!this.scene) return;
    const shadowGeo = new THREE.PlaneGeometry(5, 5);
    
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 256;
    shadowCanvas.height = 256;
    const sCtx = shadowCanvas.getContext('2d');
    if (sCtx) {
      const grad = sCtx.createRadialGradient(128, 128, 10, 128, 128, 120);
      grad.addColorStop(0, 'rgba(0, 0, 0, 0.4)');
      grad.addColorStop(0.5, 'rgba(0, 0, 0, 0.12)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      sCtx.fillStyle = grad;
      sCtx.fillRect(0, 0, 256, 256);
    }

    const shadowTex = new THREE.CanvasTexture(shadowCanvas);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTex,
      transparent: true,
      depthWrite: false
    });

    this.groundShadow = new THREE.Mesh(shadowGeo, shadowMat);
    this.groundShadow.rotation.x = -Math.PI / 2;
    this.groundShadow.position.y = -1.65;
    this.groundShadow.visible = this.studioBackground() === 'white';
    this.scene.add(this.groundShadow);
  }

  // =========================================================================
  // 2. PROCEDURAL REALISTIC 3D MESH GENERATION (SCULPTED SILHOUETTES)
  // =========================================================================
  private build3DGarment(): void {
    if (!this.scene) return;

    if (this.garmentMesh) {
      this.scene.remove(this.garmentMesh);
      this.garmentMesh.traverse(obj => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry?.dispose();
          if (Array.isArray(obj.material)) obj.material.forEach(m => m.dispose());
          else obj.material?.dispose();
        }
      });
    }

    this.garmentMesh = new THREE.Group();

    // Setup Dynamic Canvas Texture for live front prints
    if (!this.dynamicTextureCanvas) {
      this.dynamicTextureCanvas = document.createElement('canvas');
      this.dynamicTextureCanvas.width = 1024;
      this.dynamicTextureCanvas.height = 1024;
    }
    this.updateTextureCanvas();

    this.dynamicTexture = new THREE.CanvasTexture(this.dynamicTextureCanvas);
    this.dynamicTexture.wrapS = THREE.ClampToEdgeWrapping;
    this.dynamicTexture.wrapT = THREE.ClampToEdgeWrapping;

    const currentId = this.selectedGarmentId();
    const isMetal = currentId === 'water-bottle';

    // Primary Body Material (white base so texture colors & graphics render bright and unattenuated)
    this.bodyMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color(0xffffff),
      roughness: isMetal ? 0.22 : 0.82,
      metalness: isMetal ? 0.88 : 0.04,
      map: this.dynamicTexture
    });

    // Secondary Accent Material (collar, ribs, trim)
    const accentMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color(this.selectedColor()),
      roughness: isMetal ? 0.28 : 0.85,
      metalness: isMetal ? 0.8 : 0.04
    });

    // Steel highlight material for flask lid/rings
    const steelMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color(0xd1d5db),
      roughness: 0.15,
      metalness: 0.95
    });

    // -------------------------------------------------------------
    // BUILD SCULPTED GEOMETRY ACCORDING TO SILHOUETTE
    // -------------------------------------------------------------
    switch (currentId) {
      // -------------------------------------------------------------
      // 1. OVERSIZED BOXY STREET TEE (SCULPTED SHOULDERS & DRAPED SLEEVES)
      // -------------------------------------------------------------
      case 'oversized-tee': {
        const shape = new THREE.Shape();
        shape.moveTo(0, -1.15);
        shape.quadraticCurveTo(0.5, -1.17, 0.96, -1.13); // bottom right hem
        shape.bezierCurveTo(0.95, -0.4, 0.93, 0.1, 0.98, 0.38); // side torso
        shape.lineTo(1.58, 0.16); // sleeve bottom
        shape.lineTo(1.72, 0.48); // sleeve cuff outer
        shape.lineTo(1.22, 0.92); // dropped shoulder seam
        shape.bezierCurveTo(0.88, 1.08, 0.55, 1.16, 0.34, 1.18); // shoulder slope
        shape.bezierCurveTo(0.18, 0.94, -0.18, 0.94, -0.34, 1.18); // neck scoop
        shape.bezierCurveTo(-0.55, 1.16, -0.88, 1.08, -1.22, 0.92); // left shoulder slope
        shape.lineTo(-1.72, 0.48); // left sleeve cuff
        shape.lineTo(-1.58, 0.16); // left sleeve bottom
        shape.lineTo(-0.98, 0.38); // left underarm
        shape.bezierCurveTo(-0.93, 0.1, -0.95, -0.4, -0.96, -1.13); // left side seam
        shape.quadraticCurveTo(-0.5, -1.17, 0, -1.15); // bottom center

        const extrudeSettings = {
          steps: 2,
          depth: 0.28,
          bevelEnabled: true,
          bevelThickness: 0.13,
          bevelSize: 0.13,
          bevelOffset: 0,
          bevelSegments: 8
        };

        const geo = new THREE.ExtrudeGeometry(shape, extrudeSettings);
        geo.center();
        this.applyPlanarChestUVs(geo, -1.1, 1.1, -1.2, 1.2);

        const tee = new THREE.Mesh(geo, this.bodyMaterial);
        this.garmentMesh.add(tee);

        // Ribbed Crew Collar
        const collarCurve = new THREE.EllipseCurve(0, 1.0, 0.35, 0.18, 0, 2 * Math.PI, false, 0);
        const collarShape = new THREE.Shape(collarCurve.getPoints(36));
        const innerCurve = new THREE.EllipseCurve(0, 1.0, 0.28, 0.13, 0, 2 * Math.PI, false, 0);
        collarShape.holes.push(new THREE.Path(innerCurve.getPoints(36)));

        const collarGeo = new THREE.ExtrudeGeometry(collarShape, {
          depth: 0.08,
          bevelEnabled: true,
          bevelSegments: 4,
          bevelSize: 0.03,
          bevelThickness: 0.03
        });
        collarGeo.center();
        const collarMesh = new THREE.Mesh(collarGeo, accentMaterial);
        collarMesh.position.set(0, 1.02, 0.16);
        this.garmentMesh.add(collarMesh);
        break;
      }

      // -------------------------------------------------------------
      // 2. CLASSIC CREWNECK TEE (TAILORED ATHLETIC FIT)
      // -------------------------------------------------------------
      case 'classic-tee': {
        const shape = new THREE.Shape();
        shape.moveTo(0, -1.08);
        shape.quadraticCurveTo(0.42, -1.10, 0.85, -1.06);
        shape.bezierCurveTo(0.84, -0.35, 0.82, 0.15, 0.88, 0.42);
        shape.lineTo(1.42, 0.22);
        shape.lineTo(1.54, 0.52);
        shape.lineTo(1.08, 0.94);
        shape.bezierCurveTo(0.78, 1.08, 0.52, 1.16, 0.30, 1.18);
        shape.bezierCurveTo(0.16, 0.96, -0.16, 0.96, -0.30, 1.18);
        shape.bezierCurveTo(-0.52, 1.16, -0.78, 1.08, -1.08, 0.94);
        shape.lineTo(-1.54, 0.52);
        shape.lineTo(-1.42, 0.22);
        shape.lineTo(-0.88, 0.42);
        shape.bezierCurveTo(-0.82, 0.15, -0.84, -0.35, -0.85, -1.06);
        shape.quadraticCurveTo(-0.42, -1.10, 0, -1.08);

        const geo = new THREE.ExtrudeGeometry(shape, {
          steps: 2,
          depth: 0.24,
          bevelEnabled: true,
          bevelThickness: 0.11,
          bevelSize: 0.11,
          bevelSegments: 8
        });
        geo.center();
        this.applyPlanarChestUVs(geo, -1.0, 1.0, -1.1, 1.15);

        const tee = new THREE.Mesh(geo, this.bodyMaterial);
        this.garmentMesh.add(tee);

        // Collar Ring
        const collarGeo = new THREE.TorusGeometry(0.30, 0.05, 16, 36);
        const collar = new THREE.Mesh(collarGeo, accentMaterial);
        collar.position.set(0, 0.98, 0.15);
        collar.rotation.x = Math.PI / 2.3;
        this.garmentMesh.add(collar);
        break;
      }

      // -------------------------------------------------------------
      // 3. HEAVYWEIGHT FRENCH TERRY HOODIE (3D HOOD + KANGAROO POUCH)
      // -------------------------------------------------------------
      case 'heavy-hoodie': {
        const shape = new THREE.Shape();
        shape.moveTo(0, -1.18);
        shape.quadraticCurveTo(0.55, -1.20, 1.02, -1.16);
        shape.bezierCurveTo(1.0, -0.35, 0.98, 0.15, 1.04, 0.42);
        shape.lineTo(1.68, 0.14);
        shape.lineTo(1.82, 0.46);
        shape.lineTo(1.28, 0.94);
        shape.bezierCurveTo(0.92, 1.10, 0.58, 1.18, 0.36, 1.20);
        shape.bezierCurveTo(0.18, 1.0, -0.18, 1.0, -0.36, 1.20);
        shape.bezierCurveTo(-0.58, 1.18, -0.92, 1.10, -1.28, 0.94);
        shape.lineTo(-1.82, 0.46);
        shape.lineTo(-1.68, 0.14);
        shape.lineTo(-1.04, 0.42);
        shape.bezierCurveTo(-0.98, 0.15, -1.0, -0.35, -1.02, -1.16);
        shape.quadraticCurveTo(-0.55, -1.20, 0, -1.18);

        const geo = new THREE.ExtrudeGeometry(shape, {
          steps: 2,
          depth: 0.34,
          bevelEnabled: true,
          bevelThickness: 0.15,
          bevelSize: 0.15,
          bevelSegments: 8
        });
        geo.center();
        this.applyPlanarChestUVs(geo, -1.15, 1.15, -1.2, 1.25);

        const hoodie = new THREE.Mesh(geo, this.bodyMaterial);
        this.garmentMesh.add(hoodie);

        // 3D Kangaroo Pouch Pocket on Front
        const pocketShape = new THREE.Shape();
        pocketShape.moveTo(-0.55, -0.2);
        pocketShape.lineTo(0.55, -0.2);
        pocketShape.lineTo(0.72, -0.68);
        pocketShape.lineTo(-0.72, -0.68);
        pocketShape.closePath();

        const pocketGeo = new THREE.ExtrudeGeometry(pocketShape, {
          depth: 0.08,
          bevelEnabled: true,
          bevelSegments: 4,
          bevelSize: 0.04,
          bevelThickness: 0.04
        });
        pocketGeo.center();
        const pocketMesh = new THREE.Mesh(pocketGeo, accentMaterial);
        pocketMesh.position.set(0, -0.42, 0.24);
        this.garmentMesh.add(pocketMesh);

        // 3D Draped Hood Shell
        const hoodGeo = new THREE.SphereGeometry(0.68, 32, 20, 0, Math.PI * 2, 0, Math.PI * 0.75);
        const hoodMesh = new THREE.Mesh(hoodGeo, accentMaterial);
        hoodMesh.position.set(0, 1.25, -0.15);
        hoodMesh.rotation.x = Math.PI / 4.8;
        this.garmentMesh.add(hoodMesh);

        // Front Cowl Rim
        const hoodRimGeo = new THREE.TorusGeometry(0.52, 0.09, 16, 36);
        const hoodRim = new THREE.Mesh(hoodRimGeo, accentMaterial);
        hoodRim.position.set(0, 0.98, 0.08);
        hoodRim.rotation.x = Math.PI / 2.3;
        this.garmentMesh.add(hoodRim);

        // Draped Drawstring Cords
        const cordGeo = new THREE.CylinderGeometry(0.02, 0.02, 0.65, 12);
        const leftCord = new THREE.Mesh(cordGeo, steelMaterial);
        leftCord.position.set(-0.16, 0.62, 0.34);
        this.garmentMesh.add(leftCord);

        const rightCord = new THREE.Mesh(cordGeo, steelMaterial);
        rightCord.position.set(0.16, 0.62, 0.34);
        this.garmentMesh.add(rightCord);
        break;
      }

      // -------------------------------------------------------------
      // 4. STREETWEAR FLEECE JOGGERS (TAPERED LEGS & RIB CUFFS)
      // -------------------------------------------------------------
      case 'fleece-joggers': {
        const waistGeo = new THREE.CylinderGeometry(0.85, 0.88, 0.55, 36);
        const waist = new THREE.Mesh(waistGeo, this.bodyMaterial);
        waist.scale.set(1.08, 1, 0.68);
        waist.position.set(0, 0.75, 0);
        this.garmentMesh.add(waist);

        const knotGeo = new THREE.SphereGeometry(0.07, 14, 12);
        const knot = new THREE.Mesh(knotGeo, steelMaterial);
        knot.position.set(0, 0.96, 0.38);
        this.garmentMesh.add(knot);

        const legGeo = new THREE.CylinderGeometry(0.42, 0.24, 1.85, 28);
        const leftLeg = new THREE.Mesh(legGeo, accentMaterial);
        leftLeg.position.set(-0.40, -0.42, 0);
        leftLeg.rotation.z = -0.06;
        this.garmentMesh.add(leftLeg);

        const rightLeg = new THREE.Mesh(legGeo, accentMaterial);
        rightLeg.position.set(0.40, -0.42, 0);
        rightLeg.rotation.z = 0.06;
        this.garmentMesh.add(rightLeg);

        const cuffGeo = new THREE.CylinderGeometry(0.24, 0.22, 0.28, 24);
        const leftCuff = new THREE.Mesh(cuffGeo, accentMaterial);
        leftCuff.position.set(-0.50, -1.40, 0);
        this.garmentMesh.add(leftCuff);

        const rightCuff = new THREE.Mesh(cuffGeo, accentMaterial);
        rightCuff.position.set(0.50, -1.40, 0);
        this.garmentMesh.add(rightCuff);
        break;
      }

      // -------------------------------------------------------------
      // 5. 750ML VACUUM INSULATED STAINLESS STEEL WATER BOTTLE
      // -------------------------------------------------------------
      case 'water-bottle': {
        const bottleBodyGeo = new THREE.CylinderGeometry(0.68, 0.68, 2.2, 48);
        this.applyCylinderFrontUVs(bottleBodyGeo);

        const bottleBody = new THREE.Mesh(bottleBodyGeo, this.bodyMaterial);
        bottleBody.position.set(0, -0.2, 0);
        this.garmentMesh.add(bottleBody);

        const shoulderGeo = new THREE.CylinderGeometry(0.36, 0.68, 0.5, 48);
        const shoulder = new THREE.Mesh(shoulderGeo, accentMaterial);
        shoulder.position.set(0, 1.05, 0);
        this.garmentMesh.add(shoulder);

        const neckGeo = new THREE.CylinderGeometry(0.36, 0.36, 0.35, 48);
        const neck = new THREE.Mesh(neckGeo, steelMaterial);
        neck.position.set(0, 1.45, 0);
        this.garmentMesh.add(neck);

        const capGeo = new THREE.CylinderGeometry(0.44, 0.44, 0.45, 36);
        const cap = new THREE.Mesh(capGeo, accentMaterial);
        cap.position.set(0, 1.8, 0);
        this.garmentMesh.add(cap);

        const loopGeo = new THREE.TorusGeometry(0.24, 0.05, 16, 24);
        const loop = new THREE.Mesh(loopGeo, steelMaterial);
        loop.position.set(0, 2.15, 0);
        this.garmentMesh.add(loop);
        break;
      }

      // -------------------------------------------------------------
      // 6. STRUCTURED 6-PANEL STREETWEAR CAP
      // -------------------------------------------------------------
      case 'trucker-cap': {
        const crownGeo = new THREE.SphereGeometry(0.88, 36, 24, 0, Math.PI * 2, 0, Math.PI * 0.54);
        this.applyCrownFrontUVs(crownGeo);

        const crown = new THREE.Mesh(crownGeo, this.bodyMaterial);
        crown.scale.set(1.0, 0.88, 1.08);
        crown.position.set(0, 0.32, 0);
        this.garmentMesh.add(crown);

        const visorShape = new THREE.Shape();
        visorShape.moveTo(-0.82, 0);
        visorShape.quadraticCurveTo(0, 0.95, 0.82, 0);
        visorShape.quadraticCurveTo(0, 0.55, -0.82, 0);
        const visorGeo = new THREE.ExtrudeGeometry(visorShape, {
          depth: 0.05,
          bevelEnabled: true,
          bevelThickness: 0.02,
          bevelSize: 0.02,
          bevelSegments: 3
        });
        const visor = new THREE.Mesh(visorGeo, accentMaterial);
        visor.rotation.x = Math.PI / 2 + 0.18;
        visor.position.set(0, 0.34, 0.72);
        this.garmentMesh.add(visor);

        const buttonGeo = new THREE.SphereGeometry(0.08, 16, 12);
        const button = new THREE.Mesh(buttonGeo, steelMaterial);
        button.position.set(0, 1.10, 0);
        this.garmentMesh.add(button);

        const rimGeo = new THREE.TorusGeometry(0.88, 0.05, 16, 36);
        const rim = new THREE.Mesh(rimGeo, accentMaterial);
        rim.position.set(0, 0.32, 0);
        rim.rotation.x = Math.PI / 2;
        this.garmentMesh.add(rim);
        break;
      }
    }

    // Position and scale individually per silhouette for optimal framing
    switch (currentId) {
      case 'oversized-tee':
        this.garmentMesh.scale.set(0.80, 0.80, 0.80);
        this.garmentMesh.position.set(0, -0.02, 0);
        break;
      case 'classic-tee':
        this.garmentMesh.scale.set(0.80, 0.80, 0.80);
        this.garmentMesh.position.set(0, -0.02, 0);
        break;
      case 'heavy-hoodie':
        this.garmentMesh.scale.set(0.76, 0.76, 0.76);
        this.garmentMesh.position.set(0, -0.05, 0);
        break;
      case 'fleece-joggers':
        this.garmentMesh.scale.set(0.58, 0.58, 0.58);
        this.garmentMesh.position.set(0, 0.40, 0);
        break;
      case 'water-bottle':
        this.garmentMesh.scale.set(0.70, 0.70, 0.70);
        this.garmentMesh.position.set(0, -0.28, 0);
        break;
      case 'trucker-cap':
        this.garmentMesh.scale.set(1.35, 1.35, 1.35);
        this.garmentMesh.position.set(0, 0.42, 0);
        break;
      default:
        this.garmentMesh.scale.set(0.80, 0.80, 0.80);
        this.garmentMesh.position.set(0, -0.02, 0);
        break;
    }

    this.scene.add(this.garmentMesh);
  }

  // Helper: Apply planar projection UVs onto front chest surface
  private applyPlanarChestUVs(
    geo: THREE.BufferGeometry, 
    xMin = -1.1, 
    xMax = 1.1, 
    yMin = -1.2, 
    yMax = 1.2
  ): void {
    const pos = geo.attributes['position'];
    const uv = geo.attributes['uv'];
    if (!pos || !uv) return;

    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const z = pos.getZ(i);

      if (z > 0.02) {
        const u = Math.max(0, Math.min(1, (x - xMin) / (xMax - xMin)));
        const v = Math.max(0, Math.min(1, (y - yMin) / (yMax - yMin)));
        uv.setXY(i, u, v);
      } else {
        uv.setXY(i, 0.01, 0.01);
      }
    }
    uv.needsUpdate = true;
  }

  // Helper: Cylinder front projection for water bottle
  private applyCylinderFrontUVs(geo: THREE.BufferGeometry): void {
    const pos = geo.attributes['position'];
    const uv = geo.attributes['uv'];
    if (!pos || !uv) return;

    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const z = pos.getZ(i);

      if (z > 0.1) {
        const u = Math.max(0, Math.min(1, (x + 0.68) / 1.36));
        const v = Math.max(0, Math.min(1, (y + 1.1) / 2.2));
        uv.setXY(i, u, v);
      } else {
        uv.setXY(i, 0.01, 0.01);
      }
    }
    uv.needsUpdate = true;
  }

  // Helper: Crown front panel projection for cap
  private applyCrownFrontUVs(geo: THREE.BufferGeometry): void {
    const pos = geo.attributes['position'];
    const uv = geo.attributes['uv'];
    if (!pos || !uv) return;

    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const z = pos.getZ(i);

      if (z > 0.35 && y > 0.1) {
        const u = Math.max(0, Math.min(1, (x + 0.5) / 1.0));
        const v = Math.max(0, Math.min(1, (y - 0.1) / 0.8));
        uv.setXY(i, u, v);
      } else {
        uv.setXY(i, 0.01, 0.01);
      }
    }
    uv.needsUpdate = true;
  }

  // =========================================================================
  // 3. DYNAMIC TEXTURE CANVAS (FINE-GRAIN POSITION, SCALE, ROTATION, ARCH)
  // =========================================================================
  private updateTextureCanvas(): void {
    if (!this.dynamicTextureCanvas) return;
    const ctx = this.dynamicTextureCanvas.getContext('2d');
    if (!ctx) return;

    const currentId = this.selectedGarmentId();
    const isMetal = currentId === 'water-bottle';

    // 1. Solid Base Color Fill
    ctx.fillStyle = this.selectedColor();
    ctx.fillRect(0, 0, 1024, 1024);

    // 2. Micro Weave / Brushed Texture Lines
    if (isMetal) {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
      for (let y = 0; y < 1024; y += 4) {
        ctx.fillRect(0, y, 1024, 1.5);
      }
    } else {
      ctx.fillStyle = this.selectedColor() === '#f5f5f5' ? 'rgba(0, 0, 0, 0.012)' : 'rgba(255, 255, 255, 0.010)';
      for (let x = 0; x < 1024; x += 3) {
        ctx.fillRect(x, 0, 1, 1024);
      }
      for (let y = 0; y < 1024; y += 3) {
        ctx.fillRect(0, y, 1024, 1);
      }
    }

    // 3. Draw User Uploaded Graphic / Preset Emblem
    if (this.uploadedImage()) {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        ctx.save();
        ctx.translate(this.logoPosX(), this.logoPosY());
        ctx.rotate((this.logoRotation() * Math.PI) / 180);
        ctx.globalAlpha = this.logoOpacity() / 100;

        const scale = this.logoScale() / 100;
        const w = 320 * scale;
        const h = 280 * scale;

        if (this.selectedPrintMethod() === 'silicone') {
          ctx.shadowColor = 'rgba(0, 0, 0, 0.55)';
          ctx.shadowBlur = 12;
          ctx.shadowOffsetY = 6;
        }

        ctx.drawImage(img, -w / 2, -h / 2, w, h);
        ctx.restore();

        this.drawOverlayTextAndSketch(ctx);

        if (this.dynamicTexture) {
          this.dynamicTexture.needsUpdate = true;
        }
      };
      img.src = this.uploadedImage()!;
      return;
    }

    this.drawOverlayTextAndSketch(ctx);

    if (this.dynamicTexture) {
      this.dynamicTexture.needsUpdate = true;
    }
  }

  private drawOverlayTextAndSketch(ctx: CanvasRenderingContext2D): void {
    // 4. Merge Freehand Sketch Layer (if active)
    if (this.sketchImageCanvas) {
      ctx.drawImage(this.sketchImageCanvas, 0, 0, 1024, 1024);
    }

    // 5. Draw Live User Typography with Fine-Grain Controls
    const text = this.customText().trim();
    if (text) {
      ctx.save();
      ctx.translate(this.textPosX(), this.textPosY());
      ctx.rotate((this.textRotation() * Math.PI) / 180);

      ctx.fillStyle = this.textColor();
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      if (this.selectedPrintMethod() === 'silicone') {
        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
        ctx.shadowBlur = 10;
        ctx.shadowOffsetY = 4;
      }

      const fontFam = this.textFontFamily();
      const fontSize = this.textFontSize();
      ctx.font = `900 ${fontSize}px ${fontFam}`;
      ctx.letterSpacing = `${this.textLetterSpacing()}px`;

      // Handle Arched Text Curve (Variable Arc)
      const arc = this.textArc();
      if (arc !== 0) {
        const radius = (1000 / Math.abs(arc)) * 12;
        const dir = arc > 0 ? 1 : -1;
        const chars = text.split('');
        const stepAngle = (fontSize * 0.6 + this.textLetterSpacing()) / radius;
        const totalAngle = chars.length * stepAngle;
        let currentAngle = -totalAngle / 2;

        ctx.save();
        for (const ch of chars) {
          ctx.save();
          ctx.rotate(currentAngle * dir);
          ctx.translate(0, -radius * dir);
          ctx.fillText(ch, 0, 0);
          ctx.restore();
          currentAngle += stepAngle;
        }
        ctx.restore();
      } else {
        ctx.fillText(text, 0, 0);
      }

      // Studio Sub-Badge Stamp
      if (this.showSubBadge()) {
        ctx.font = '800 18px monospace';
        ctx.letterSpacing = '5px';
        ctx.fillStyle = this.textColor() === '#ffffff' ? '#a1a1aa' : '#52525b';
        ctx.fillText(this.subBadgeText(), 0, fontSize * 0.7 + 26);
      }

      ctx.restore();
    }
  }

  updateTexture(): void {
    this.updateTextureCanvas();
  }

  // =========================================================================
  // 4. INTERACTIVE PLACEMENT MAP & PRESETS
  // =========================================================================
  onPrintMapClick(e: MouseEvent): void {
    const target = e.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    const normX = Math.round((clickX / rect.width) * 1024);
    const normY = Math.round((clickY / rect.height) * 1024);

    if (this.activeTargetLayer() === 'logo') {
      this.logoPosX.set(Math.max(150, Math.min(874, normX)));
      this.logoPosY.set(Math.max(140, Math.min(850, normY)));
    } else {
      this.textPosX.set(Math.max(150, Math.min(874, normX)));
      this.textPosY.set(Math.max(140, Math.min(880, normY)));
    }
    this.updateTexture();
  }

  setLogoPlacement(preset: 'center' | 'left-crest' | 'right-chest' | 'oversized' | 'lower-hem'): void {
    switch (preset) {
      case 'center':
        this.logoPosX.set(512);
        this.logoPosY.set(380);
        this.logoScale.set(85);
        this.logoRotation.set(0);
        break;
      case 'left-crest':
        this.logoPosX.set(330);
        this.logoPosY.set(310);
        this.logoScale.set(48);
        this.logoRotation.set(0);
        break;
      case 'right-chest':
        this.logoPosX.set(694);
        this.logoPosY.set(310);
        this.logoScale.set(48);
        this.logoRotation.set(0);
        break;
      case 'oversized':
        this.logoPosX.set(512);
        this.logoPosY.set(510);
        this.logoScale.set(145);
        this.logoRotation.set(0);
        break;
      case 'lower-hem':
        this.logoPosX.set(280);
        this.logoPosY.set(820);
        this.logoScale.set(40);
        this.logoRotation.set(0);
        break;
    }
    this.updateTexture();
  }

  setTextPlacement(preset: 'center' | 'left-crest' | 'lower-hem' | 'high-yoke'): void {
    switch (preset) {
      case 'center':
        this.textPosX.set(512);
        this.textPosY.set(440);
        this.textFontSize.set(54);
        this.textRotation.set(0);
        break;
      case 'left-crest':
        this.textPosX.set(330);
        this.textPosY.set(330);
        this.textFontSize.set(28);
        this.textRotation.set(0);
        break;
      case 'lower-hem':
        this.textPosX.set(512);
        this.textPosY.set(780);
        this.textFontSize.set(28);
        this.textRotation.set(0);
        break;
      case 'high-yoke':
        this.textPosX.set(512);
        this.textPosY.set(240);
        this.textFontSize.set(36);
        this.textRotation.set(0);
        break;
    }
    this.updateTexture();
  }

  // =========================================================================
  // 5. SKETCH PAD & USER ACTIONS
  // =========================================================================
  private initSketchPad(): void {
    if (!this.sketchCanvasRef) return;
    const canvas = this.sketchCanvasRef.nativeElement;
    canvas.width = 1024;
    canvas.height = 512;

    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = '#0a0a0a';
      ctx.fillRect(0, 0, 1024, 512);

      ctx.strokeStyle = '#27272a';
      ctx.lineWidth = 2;
      ctx.setLineDash([6, 6]);
      ctx.strokeRect(20, 20, 984, 472);
      ctx.setLineDash([]);
    }

    this.sketchImageCanvas = document.createElement('canvas');
    this.sketchImageCanvas.width = 1024;
    this.sketchImageCanvas.height = 1024;
  }

  startDrawing(e: MouseEvent): void {
    this.isDrawing = true;
    const pos = this.getCanvasPos(e);
    this.lastDrawPoint = pos;
  }

  draw(e: MouseEvent): void {
    if (!this.isDrawing) return;
    const current = this.getCanvasPos(e);
    this.renderStroke(this.lastDrawPoint, current);
    this.lastDrawPoint = current;
    this.syncSketchTo3D();
  }

  stopDrawing(): void {
    this.isDrawing = false;
  }

  startTouchDrawing(e: TouchEvent): void {
    if (e.touches.length === 0) return;
    e.preventDefault();
    this.isDrawing = true;
    const touch = e.touches[0];
    const pos = this.getTouchPos(touch);
    this.lastDrawPoint = pos;
  }

  touchDraw(e: TouchEvent): void {
    if (!this.isDrawing || e.touches.length === 0) return;
    e.preventDefault();
    const touch = e.touches[0];
    const current = this.getTouchPos(touch);
    this.renderStroke(this.lastDrawPoint, current);
    this.lastDrawPoint = current;
    this.syncSketchTo3D();
  }

  private renderStroke(from: { x: number; y: number }, to: { x: number; y: number }): void {
    if (!this.sketchCanvasRef) return;
    const canvas = this.sketchCanvasRef.nativeElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.strokeStyle = this.currentBrushColor();
    ctx.lineWidth = this.currentBrushSize() * 2;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    ctx.beginPath();
    ctx.moveTo(from.x, from.y);
    ctx.lineTo(to.x, to.y);
    ctx.stroke();
  }

  private syncSketchTo3D(): void {
    if (!this.sketchCanvasRef || !this.sketchImageCanvas) return;
    const sCtx = this.sketchImageCanvas.getContext('2d');
    if (!sCtx) return;

    sCtx.clearRect(0, 0, 1024, 1024);

    const canvas = this.sketchCanvasRef.nativeElement;
    sCtx.drawImage(canvas, 162, 320, 700, 350);

    this.updateTextureCanvas();
  }

  clearSketch(): void {
    this.initSketchPad();
    if (this.sketchImageCanvas) {
      const sCtx = this.sketchImageCanvas.getContext('2d');
      sCtx?.clearRect(0, 0, 1024, 1024);
    }
    this.updateTextureCanvas();
  }

  private getCanvasPos(e: MouseEvent): { x: number; y: number } {
    if (!this.sketchCanvasRef) return { x: 0, y: 0 };
    const canvas = this.sketchCanvasRef.nativeElement;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY
    };
  }

  private getTouchPos(touch: Touch): { x: number; y: number } {
    if (!this.sketchCanvasRef) return { x: 0, y: 0 };
    const canvas = this.sketchCanvasRef.nativeElement;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    return {
      x: (touch.clientX - rect.left) * scaleX,
      y: (touch.clientY - rect.top) * scaleY
    };
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        this.uploadedImage.set(e.target?.result as string);
        this.updateTextureCanvas();
      };
      reader.readAsDataURL(file);
    }
  }

  applyPresetGraphic(preset: PresetGraphic): void {
    this.uploadedImage.set(preset.svgDataUri);
    this.updateTextureCanvas();
  }

  removeUploadedImage(): void {
    this.uploadedImage.set(null);
    this.updateTextureCanvas();
  }

  changeGarmentColor(hex: string): void {
    this.selectedColor.set(hex);
    
    // Auto-adjust text contrast if garment is white/light
    if (hex.toLowerCase() === '#f5f5f5' || hex.toLowerCase() === '#ffffff') {
      if (this.textColor() === '#ffffff') {
        this.textColor.set('#000000');
      }
    } else if (hex.toLowerCase() === '#0a0a0a' || hex.toLowerCase() === '#262626') {
      if (this.textColor() === '#000000') {
        this.textColor.set('#ffffff');
      }
    }

    if (this.bodyMaterial) {
      this.bodyMaterial.color.set(0xffffff);
    }
    if (this.garmentMesh) {
      this.garmentMesh.children.forEach(child => {
        if (child instanceof THREE.Mesh && child.material !== this.bodyMaterial) {
          if (child.material && child.material.color) {
            child.material.color.set(hex);
          }
        }
      });
    }
    this.updateTextureCanvas();
  }

  setTextColor(hex: string): void {
    this.textColor.set(hex);
    this.updateTextureCanvas();
  }

  selectGarment(id: string): void {
    this.selectedGarmentId.set(id);
    this.build3DGarment();
  }

  selectPrintMethod(method: 'silicone' | 'dtf'): void {
    this.selectedPrintMethod.set(method);
    this.updateTextureCanvas();
  }

  toggleAutoRotate(): void {
    this.isAutoRotating.update(val => !val);
  }

  setAngle(angle: 'front' | 'back' | 'side' | 'iso'): void {
    this.isAutoRotating.set(false);
    if (!this.garmentMesh) return;

    switch (angle) {
      case 'front':
        this.targetRotation.y = 0;
        this.targetRotation.x = 0;
        break;
      case 'back':
        this.targetRotation.y = Math.PI;
        this.targetRotation.x = 0;
        break;
      case 'side':
        this.targetRotation.y = Math.PI / 2;
        this.targetRotation.x = 0;
        break;
      case 'iso':
        this.targetRotation.y = Math.PI / 4;
        this.targetRotation.x = 0.2;
        break;
    }
  }

  zoomIn(): void {
    if (this.camera && this.camera.position.z > 2.2) {
      this.camera.position.z -= 0.45;
    }
  }

  zoomOut(): void {
    if (this.camera && this.camera.position.z < 8.0) {
      this.camera.position.z += 0.45;
    }
  }

  resetCamera(): void {
    if (this.camera) {
      this.camera.position.set(0, 0, 5.8);
    }
    this.targetRotation.x = 0;
    this.targetRotation.y = 0;
    this.isAutoRotating.set(true);
  }

  // =========================================================================
  // 6. 3D INTERACTION LISTENERS & ANIMATION LOOP
  // =========================================================================
  private setupInteractionListeners(): void {
    const container = this.containerRef?.nativeElement;
    if (!container) return;

    container.addEventListener('mousedown', (e) => {
      this.isDragging = true;
      this.isAutoRotating.set(false);
      this.previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener('mousemove', (e) => {
      if (!this.isDragging) return;
      const deltaX = e.clientX - this.previousMousePosition.x;
      const deltaY = e.clientY - this.previousMousePosition.y;

      this.targetRotation.y += deltaX * 0.008;
      this.targetRotation.x += deltaY * 0.008;

      this.targetRotation.x = Math.max(-0.5, Math.min(0.5, this.targetRotation.x));

      this.previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener('mouseup', () => {
      this.isDragging = false;
    });

    container.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        this.isDragging = true;
        this.isAutoRotating.set(false);
        this.previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (!this.isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - this.previousMousePosition.x;
      const deltaY = e.touches[0].clientY - this.previousMousePosition.y;

      this.targetRotation.y += deltaX * 0.008;
      this.targetRotation.x += deltaY * 0.008;
      this.targetRotation.x = Math.max(-0.5, Math.min(0.5, this.targetRotation.x));

      this.previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }, { passive: true });

    window.addEventListener('touchend', () => {
      this.isDragging = false;
    });

    container.addEventListener('wheel', (e) => {
      e.preventDefault();
      if (!this.camera) return;
      this.camera.position.z += e.deltaY * 0.003;
      this.camera.position.z = Math.max(2.2, Math.min(8.0, this.camera.position.z));
    }, { passive: false });
  }

  private animate(): void {
    this.animationFrameId = requestAnimationFrame(() => this.animate());

    if (this.garmentMesh) {
      if (this.isAutoRotating()) {
        this.targetRotation.y += 0.006;
      }

      this.garmentMesh.rotation.y += (this.targetRotation.y - this.garmentMesh.rotation.y) * 0.1;
      this.garmentMesh.rotation.x += (this.targetRotation.x - this.garmentMesh.rotation.x) * 0.1;
    }

    if (this.renderer && this.scene && this.camera) {
      this.renderer.render(this.scene, this.camera);
    }
  }

  private onWindowResize(): void {
    const container = this.containerRef?.nativeElement;
    if (!container || !this.renderer || !this.camera) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }
}
