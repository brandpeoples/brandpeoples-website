import { Component, signal, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface QualityLab {
  id: string;
  code: string;
  disciplineBadge: string;
  badge: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  description: string;
  image: string;
  equipment: string;
  standards: {
    code: string;
    name: string;
    criteria: string;
    result: string;
  }[];
  verifications: string[];
  keyMetric: {
    value: string;
    label: string;
    sublabel: string;
    status: string;
  };
  metrics: {
    name: string;
    brandValue: string;
    brandPercent: number;
    industryValue: string;
    industryPercent: number;
  }[];
  simulation: {
    name: string;
    duration: string;
    steps: string[];
    passVerdict: string;
  };
}

@Component({
  selector: 'app-quality',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- ========================================================================= -->
    <!-- 1. TOP EDITORIAL HERO                                                     -->
    <!-- ========================================================================= -->
    <section class="bg-black text-white pt-16 pb-14 border-b border-zinc-900 relative overflow-hidden">
      <div class="absolute -top-32 -left-32 w-96 h-96 bg-white/[0.03] blur-[140px] pointer-events-none rounded-full"></div>
      <div class="absolute -bottom-24 right-1/4 w-96 h-96 bg-zinc-800/20 blur-[130px] pointer-events-none rounded-full"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div class="flex items-center gap-2 text-xs font-mono text-zinc-500">
            <a routerLink="/" class="text-zinc-400 hover:text-white transition">Home</a>
            <span>/</span>
            <span class="text-white font-bold">Quality Lab</span>
          </div>

          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-950 border border-zinc-800 text-zinc-300 text-[11px] font-mono font-bold tracking-wider uppercase">
            <span class="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
            <span>AATCC &bull; ISO 105 &bull; ASTM Testing Protocols</span>
          </div>
        </div>

        <div class="max-w-3xl space-y-4">
          <h1 class="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase font-display leading-[1.08]">
            Quality Standards &amp; Testing Lab
          </h1>
          <p class="text-xs sm:text-sm lg:text-base text-zinc-400 leading-relaxed font-sans font-normal">
            Zero-compromise structural, chemical, and colorimetric validation. Every fabric batch, 3D silicone transfer, 2400 DPI print, and 304 stainless steel flask is audited against international export standards.
          </p>
        </div>

        <!-- Testing Metrics Bar -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          <div class="p-4 rounded-2xl bg-zinc-950/90 border border-zinc-800/80 space-y-1">
            <span class="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">Wash Fastness Standard</span>
            <span class="text-lg sm:text-xl font-black text-white font-mono block">50+ Commercial Cycles</span>
          </div>
          <div class="p-4 rounded-2xl bg-zinc-950/90 border border-zinc-800/80 space-y-1">
            <span class="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">Fabric Shrinkage</span>
            <span class="text-lg sm:text-xl font-black text-white font-mono block">&lt; 2.5% Pre-Shrunk</span>
          </div>
          <div class="p-4 rounded-2xl bg-zinc-950/90 border border-zinc-800/80 space-y-1">
            <span class="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">Pantone Delta-E</span>
            <span class="text-lg sm:text-xl font-black text-white font-mono block">&Delta;E &lt; 1.0 Match</span>
          </div>
          <div class="p-4 rounded-2xl bg-zinc-950/90 border border-zinc-800/80 space-y-1">
            <span class="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">Hardware Metal Safety</span>
            <span class="text-lg sm:text-xl font-black text-white font-mono block">100% Needle Detector Scan</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ========================================================================= -->
    <!-- 2. INTERACTIVE TESTING LAB EXPLORER & MOTION DISCIPLINE COCKPIT           -->
    <!-- ========================================================================= -->
    <section class="py-14 sm:py-20 bg-black text-white border-b border-zinc-900 relative overflow-hidden">
      
      <!-- Subtle Ambient Lighting Glows -->
      <div class="absolute top-1/4 -right-40 w-96 h-96 bg-white/[0.02] blur-[150px] pointer-events-none rounded-full"></div>
      <div class="absolute bottom-10 -left-40 w-96 h-96 bg-emerald-500/[0.03] blur-[160px] pointer-events-none rounded-full"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
        
        <!-- Section Header Bar & Auto-Cycle Motion Control -->
        <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-zinc-900/90 pb-8">
          <div class="space-y-2">
            <div class="flex items-center gap-2">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-950 border border-zinc-800 text-[11px] font-mono font-bold text-zinc-300 uppercase tracking-widest">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                In-House ISO/ASTM Laboratories
              </span>
              <span class="text-[11px] font-mono text-zinc-500 hidden sm:inline">&bull; 4 Certified Testing Disciplines</span>
            </div>
            <h2 class="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight font-display">
              Select Testing Discipline
            </h2>
            <p class="text-xs sm:text-sm text-zinc-400 max-w-2xl font-mono leading-relaxed">
              Engage our specialized testing chambers. Select any discipline to inspect live ASTM telemetry, compare factory tolerance meters, and trigger simulated mechanical stress cycles.
            </p>
          </div>

          <!-- Motion Telemetry & Auto-Cycle Controls -->
          <div class="flex flex-wrap items-center gap-3">
            <button 
              (click)="toggleAutoCycle()" 
              [class.bg-white]="autoCycleActive()"
              [class.text-black]="autoCycleActive()"
              [class.bg-zinc-950]="!autoCycleActive()"
              [class.text-zinc-300]="!autoCycleActive()"
              class="btn-shimmer hover-lift-sm flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 hover:border-zinc-500 font-mono text-xs cursor-pointer transition-all">
              <span class="relative flex h-2 w-2">
                @if (autoCycleActive()) {
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
                } @else {
                  <span class="relative inline-flex rounded-full h-2 w-2 bg-zinc-600"></span>
                }
              </span>
              <span class="font-bold">{{ autoCycleActive() ? 'Auto-Cycle: Active (6s)' : '✦ Auto-Cycle Motion' }}</span>
            </button>

            <span class="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-zinc-950 border border-zinc-800/90 text-xs font-mono text-zinc-400">
              <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
              All 4 Labs Operational
            </span>
          </div>
        </div>

        <!-- ========================================================================= -->
        <!-- 4 INTERACTIVE DISCIPLINE CARDS (COCKPIT SELECTOR DECK)                   -->
        <!-- ========================================================================= -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          @for (lab of labs; track lab.id) {
            <button 
              (click)="selectLab(lab.id)"
              [class.bg-white]="activeLabId() === lab.id"
              [class.text-black]="activeLabId() === lab.id"
              [class.shadow-active-discipline]="activeLabId() === lab.id"
              [class.-translate-y-1.5]="activeLabId() === lab.id"
              [class.bg-zinc-950/90]="activeLabId() !== lab.id"
              [class.text-zinc-400]="activeLabId() !== lab.id"
              [class.border-white/90]="activeLabId() === lab.id"
              [class.border-zinc-800/90]="activeLabId() !== lab.id"
              class="group relative text-left p-5 sm:p-6 rounded-3xl border transition-all duration-300 hover:border-zinc-500 cursor-pointer overflow-hidden flex flex-col justify-between min-h-[185px]">
              
              <!-- Card Top: Discipline Code & Live Status Radar -->
              <div class="flex items-center justify-between w-full">
                <span class="font-mono text-xs font-black tracking-widest uppercase flex items-center gap-1.5"
                      [class.text-zinc-900]="activeLabId() === lab.id"
                      [class.text-zinc-500]="activeLabId() !== lab.id">
                  <span>{{ lab.code }}</span>
                  <span class="opacity-50">/</span>
                  <span>{{ lab.shortTitle }}</span>
                </span>
                
                <span class="relative flex h-2.5 w-2.5 shrink-0">
                  @if (activeLabId() === lab.id) {
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  } @else {
                    <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-zinc-800 group-hover:bg-zinc-600 transition-colors"></span>
                  }
                </span>
              </div>

              <!-- Card Mid: Key Metric Display -->
              <div class="space-y-1 my-3">
                <div class="font-mono text-3xl font-black tracking-tight"
                     [class.text-black]="activeLabId() === lab.id"
                     [class.text-white]="activeLabId() !== lab.id">
                  {{ lab.keyMetric.value }}
                </div>
                <div class="text-xs font-mono font-medium line-clamp-1"
                     [class.text-zinc-700]="activeLabId() === lab.id"
                     [class.text-zinc-400]="activeLabId() !== lab.id">
                  {{ lab.keyMetric.label }}
                </div>
              </div>

              <!-- Card Bottom: Accreditation Tag & Interaction Prompt -->
              <div class="flex items-center justify-between text-[10px] font-mono border-t pt-3 w-full"
                   [class.border-zinc-200]="activeLabId() === lab.id"
                   [class.border-zinc-850]="activeLabId() !== lab.id">
                <span class="truncate max-w-[120px]"
                      [class.text-zinc-600]="activeLabId() === lab.id" 
                      [class.text-zinc-500]="activeLabId() !== lab.id">
                  {{ lab.badge }}
                </span>
                <span class="font-bold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform shrink-0"
                      [class.text-black]="activeLabId() === lab.id"
                      [class.text-zinc-300]="activeLabId() !== lab.id">
                  {{ activeLabId() === lab.id ? 'ENGAGED' : 'VIEW' }} &rarr;
                </span>
              </div>

              <!-- Active Highlight Bottom Line -->
              @if (activeLabId() === lab.id) {
                <div class="absolute bottom-0 left-0 right-0 h-1 bg-black"></div>
              }
            </button>
          }
        </div>

        <!-- ========================================================================= -->
        <!-- ACTIVE DISCIPLINE MAIN CHAMBER (STAGE WITH FLUID MOTION & SCANLINE)       -->
        <!-- ========================================================================= -->
        @if (selectedLab(); as current) {
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start bg-zinc-950 p-6 sm:p-10 lg:p-12 rounded-3xl border border-zinc-800/90 animate-fadeIn relative">
            
            <!-- Left Column: Testing Chamber Viewport, Scanline Laser & Stress Simulator -->
            <div class="lg:col-span-6 space-y-6">
              
              <!-- Chamber Photo Viewport with Laser Scanline and HUD -->
              <div class="rounded-3xl overflow-hidden border border-zinc-800 aspect-[16/11] bg-zinc-900 relative group shadow-2xl">
                
                <img 
                  [src]="current.image" 
                  [alt]="current.title" 
                  class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                
                <!-- Animated Laser Scanline Beam -->
                <div class="absolute inset-0 pointer-events-none overflow-hidden">
                  <div class="w-full h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_15px_rgba(52,211,153,0.9)] animate-scanline absolute"></div>
                </div>

                <!-- HUD Optical Reticle Brackets (4 Corners) -->
                <div class="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-emerald-400/80 pointer-events-none"></div>
                <div class="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-emerald-400/80 pointer-events-none"></div>
                <div class="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-emerald-400/80 pointer-events-none"></div>
                <div class="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-emerald-400/80 pointer-events-none"></div>

                <!-- Top HUD Telemetry Badges -->
                <div class="absolute top-4 left-4 flex flex-wrap items-center gap-2">
                  <span class="bg-black/90 backdrop-blur-md text-emerald-400 text-[10px] font-mono font-bold px-3 py-1 rounded-full border border-emerald-500/40 uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                    {{ current.disciplineBadge }}
                  </span>
                </div>

                <div class="absolute top-4 right-4">
                  <span class="bg-black/85 backdrop-blur-md text-white text-[10px] font-mono px-3 py-1 rounded-full border border-zinc-700 uppercase tracking-widest hidden sm:inline-block">
                    {{ current.keyMetric.status }}
                  </span>
                </div>

                <!-- Bottom HUD Equipment Bar -->
                <div class="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-black/90 backdrop-blur-md text-zinc-300 text-[10px] font-mono px-3.5 py-1.5 rounded-full border border-zinc-800">
                  <span class="truncate">Instrumentation: <strong class="text-white">{{ current.equipment }}</strong></span>
                  <span class="text-emerald-400 font-bold shrink-0 ml-2 hidden sm:inline">&bull; 100% Calibrated</span>
                </div>
              </div>

              <!-- Interactive ASTM Stress Simulation Motion Deck -->
              <div class="p-6 rounded-3xl bg-black border border-zinc-800 space-y-4">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div class="space-y-0.5">
                    <span class="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">Interactive Live Protocol</span>
                    <h4 class="text-sm font-bold text-white uppercase font-display flex items-center gap-2">
                      <span>{{ current.simulation.name }}</span>
                    </h4>
                  </div>
                  
                  <button 
                    (click)="runSimulation()"
                    [disabled]="isSimulating()"
                    class="btn-shimmer hover-lift-sm px-4 py-2 rounded-xl bg-white text-black font-black text-xs font-mono uppercase tracking-wider hover:bg-zinc-200 transition-all shrink-0 cursor-pointer disabled:opacity-50">
                    {{ isSimulating() ? 'Stress Test Running...' : '⚡ Trigger Stress Cycle' }}
                  </button>
                </div>

                <!-- Animated Simulation Progress Bar -->
                <div class="space-y-1.5">
                  <div class="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                    <span>{{ isSimulating() ? simulationStage() : (simulationVerdict() ? 'Verification Completed' : 'Chamber Standby') }}</span>
                    <span class="text-white font-bold">{{ simulationProgress() }}%</span>
                  </div>
                  <div class="w-full h-2 rounded-full bg-zinc-900 overflow-hidden border border-zinc-800">
                    <div 
                      class="h-full bg-gradient-to-r from-emerald-500 via-white to-emerald-400 transition-all duration-300 ease-out"
                      [style.width.%]="simulationProgress()">
                    </div>
                  </div>
                </div>

                <!-- Live Simulation Output Banner -->
                @if (simulationVerdict()) {
                  <div class="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 font-mono text-xs animate-fadeIn flex items-start gap-2.5">
                    <span class="text-emerald-400 font-bold text-sm shrink-0">&check;</span>
                    <div>
                      <strong class="text-white block uppercase text-[11px]">Accreditation Cleared:</strong>
                      <span>{{ simulationVerdict() }}</span>
                    </div>
                  </div>
                }

                <!-- Protocol Step Tickers -->
                <div class="grid grid-cols-2 gap-2 pt-1 border-t border-zinc-900 text-[10px] font-mono text-zinc-400">
                  @for (step of current.simulation.steps; track step; let idx = $index) {
                    <div class="flex items-center gap-1.5 truncate">
                      <span class="text-zinc-600 font-bold">#{{ idx + 1 }}</span>
                      <span class="truncate">{{ step }}</span>
                    </div>
                  }
                </div>
              </div>

              <!-- Physical Verifications Completed Checklist -->
              <div class="p-6 rounded-3xl bg-black/60 border border-zinc-800/80 space-y-3">
                <span class="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">Physical Verifications Completed:</span>
                <ul class="space-y-2.5">
                  @for (v of current.verifications; track v) {
                    <li class="flex items-start gap-2.5 text-xs text-zinc-300 font-mono group">
                      <span class="w-4 h-4 rounded-full bg-emerald-950/80 border border-emerald-500/50 flex items-center justify-center text-emerald-400 text-[10px] font-bold shrink-0 mt-0.5">
                        &check;
                      </span>
                      <span class="group-hover:text-white transition-colors">{{ v }}</span>
                    </li>
                  }
                </ul>
              </div>

            </div>

            <!-- Right Column: Standards List, Tolerance Comparator & Actions -->
            <div class="lg:col-span-6 space-y-8">
              
              <!-- Title & Laboratory Description -->
              <div class="space-y-3">
                <div class="flex items-center gap-2">
                  <span class="text-[11px] font-mono text-zinc-500 uppercase tracking-widest block">{{ current.subtitle }}</span>
                </div>
                <h3 class="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight font-display">
                  {{ current.title }}
                </h3>
                <p class="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans font-normal">
                  {{ current.description }}
                </p>
              </div>

              <!-- ========================================================================= -->
              <!-- FACTORY TOLERANCE COMPARISON METERS (ANIMATED MOTION BARS)                 -->
              <!-- ========================================================================= -->
              <div class="p-6 rounded-3xl bg-black border border-zinc-800 space-y-4">
                <div class="flex items-center justify-between">
                  <span class="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">
                    Benchmarked Tolerance Metrics vs Conventional Factory
                  </span>
                  <span class="text-[10px] font-mono text-emerald-400 font-bold hidden sm:inline">
                    Brand Peoples Standard
                  </span>
                </div>

                <div class="space-y-3.5">
                  @for (m of current.metrics; track m.name) {
                    <div class="space-y-1.5 font-mono text-xs">
                      <div class="flex items-center justify-between text-zinc-300">
                        <span class="font-bold text-white text-[11px]">{{ m.name }}</span>
                        <div class="flex items-center gap-3 text-[10px]">
                          <span class="text-emerald-400 font-black">{{ m.brandValue }}</span>
                          <span class="text-zinc-600">vs {{ m.industryValue }}</span>
                        </div>
                      </div>

                      <!-- Dual Progress Track -->
                      <div class="relative w-full h-2.5 rounded-full bg-zinc-900 border border-zinc-800 overflow-hidden flex items-center">
                        <!-- Industry Standard (Grey underlay) -->
                        <div 
                          class="absolute left-0 top-0 bottom-0 bg-zinc-700/60 rounded-full transition-all duration-700"
                          [style.width.%]="m.industryPercent">
                        </div>
                        <!-- Brand Peoples Standard (Bright High-Contrast overlay) -->
                        <div 
                          class="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-emerald-500 to-white rounded-full transition-all duration-1000 ease-out"
                          [style.width.%]="m.brandPercent">
                        </div>
                      </div>
                    </div>
                  }
                </div>
              </div>

              <!-- Accredited Testing Standards Cards -->
              <div class="space-y-3">
                <span class="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">Benchmark Testing Standards:</span>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  @for (std of current.standards; track std.code) {
                    <div class="p-4 rounded-2xl bg-black border border-zinc-800 hover:border-zinc-600 transition-all space-y-1.5">
                      <div class="flex items-center justify-between gap-1">
                        <span class="text-xs font-bold text-white font-mono">{{ std.code }}</span>
                        <span class="px-2 py-0.5 rounded-full bg-zinc-900 border border-zinc-700 text-emerald-400 text-[10px] font-mono font-bold shrink-0">
                          {{ std.result }}
                        </span>
                      </div>
                      <div class="text-[11px] font-bold text-zinc-300 font-sans line-clamp-1">{{ std.name }}</div>
                      <p class="text-[10px] text-zinc-500 font-mono line-clamp-2">{{ std.criteria }}</p>
                    </div>
                  }
                </div>
              </div>

              <!-- Interactive Action Buttons -->
              <div class="flex flex-wrap items-center gap-3 pt-4 border-t border-zinc-900">
                <a routerLink="/customize" class="btn-shimmer hover-lift-sm px-6 py-3.5 bg-white text-black font-black text-xs font-mono uppercase tracking-wider rounded-2xl hover:bg-zinc-200 transition">
                  Inspect in 3D Customizer &rarr;
                </a>
                <a routerLink="/catalog" class="hover-lift-sm px-6 py-3.5 border border-zinc-800 bg-black text-zinc-300 font-mono text-xs uppercase tracking-wider rounded-2xl hover:bg-zinc-900 transition">
                  Browse Certified Catalogs &rarr;
                </a>
                <a routerLink="/contact-us" class="hover-lift-sm px-5 py-3.5 border border-zinc-800 text-zinc-400 font-mono text-xs uppercase tracking-wider rounded-2xl hover:text-white transition">
                  Request Lab Certificate &rarr;
                </a>
              </div>

            </div>

          </div>
        }

      </div>
    </section>

    <!-- ========================================================================= -->
    <!-- 3. FIVE-STAGE ZERO-DEFECT QUALITY INSPECTION PIPELINE                      -->
    <!-- ========================================================================= -->
    <section class="py-16 sm:py-24 bg-zinc-950 text-white border-b border-zinc-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div class="text-center max-w-3xl mx-auto space-y-4">
          <span class="text-xs font-mono uppercase text-zinc-500 tracking-widest block">Continuous In-Line Surveillance</span>
          <h2 class="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight font-display">
            The 5-Stage Quality Gate
          </h2>
          <p class="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
            Every production order—from 1 sample prototype to 10,000 unit bulk drops—must pass through each gate before dispatch from our Tiruppur facility.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-5 gap-4">
          
          <div class="p-5 rounded-2xl bg-black border border-zinc-800 space-y-3 relative hover:border-zinc-600 transition">
            <span class="text-xs font-mono font-bold text-zinc-500">GATE 01</span>
            <h4 class="text-sm font-bold text-white uppercase font-display">Substrate Inbound</h4>
            <p class="text-[11px] text-zinc-400 font-mono leading-relaxed">
              Yarn twist verification, circular GSM cutter weight sampling (&plusmn;3% tolerance), and pre-shrinkage wash testing.
            </p>
            <span class="text-[9px] font-mono text-zinc-500 block">&bull; Compact Combed Cotton</span>
          </div>

          <div class="p-5 rounded-2xl bg-black border border-zinc-800 space-y-3 relative hover:border-zinc-600 transition">
            <span class="text-xs font-mono font-bold text-zinc-500">GATE 02</span>
            <h4 class="text-sm font-bold text-white uppercase font-display">Pre-Press Color RIP</h4>
            <p class="text-[11px] text-zinc-400 font-mono leading-relaxed">
              Artwork resolution check (&gt; 300 DPI vector), white ink choke, and X-Rite spectrophotometer calibration against Pantone PMS.
            </p>
            <span class="text-[9px] font-mono text-zinc-500 block">&bull; &Delta;E &lt; 1.0 Accuracy</span>
          </div>

          <div class="p-5 rounded-2xl bg-black border border-zinc-800 space-y-3 relative hover:border-zinc-600 transition">
            <span class="text-xs font-mono font-bold text-zinc-500">GATE 03</span>
            <h4 class="text-sm font-bold text-white uppercase font-display">In-Line Thermal Audit</h4>
            <p class="text-[11px] text-zinc-400 font-mono leading-relaxed">
              Infrared pyrometer monitoring across curing conveyor belts to verify complete 155&deg;C polymerization of TPU and silicone.
            </p>
            <span class="text-[9px] font-mono text-zinc-500 block">&bull; &plusmn;1&deg;C Heat Uniformity</span>
          </div>

          <div class="p-5 rounded-2xl bg-black border border-zinc-800 space-y-3 relative hover:border-zinc-600 transition">
            <span class="text-xs font-mono font-bold text-zinc-500">GATE 04</span>
            <h4 class="text-sm font-bold text-white uppercase font-display">Destructive Stretch</h4>
            <p class="text-[11px] text-zinc-400 font-mono leading-relaxed">
              Sacrificial 1-pc sample from each production lot undergoes mechanical 200% stretch and 180&deg; tape pull adhesion testing.
            </p>
            <span class="text-[9px] font-mono text-zinc-500 block">&bull; Zero Fissure Guarantee</span>
          </div>

          <div class="p-5 rounded-2xl bg-black border border-zinc-800 space-y-3 relative hover:border-zinc-600 transition">
            <span class="text-xs font-mono font-bold text-zinc-500">GATE 05</span>
            <h4 class="text-sm font-bold text-white uppercase font-display">Lock Needle Detector</h4>
            <p class="text-[11px] text-zinc-400 font-mono leading-relaxed">
              High-sensitivity metal conveyor scan for broken needle fragments, followed by retail anti-static poly-bagging and barcode indexing.
            </p>
            <span class="text-[9px] font-mono text-zinc-500 block">&bull; 100% Export Cleared</span>
          </div>

        </div>

      </div>
    </section>

    <!-- ========================================================================= -->
    <!-- 4. OFFICIAL CERTIFICATIONS & STANDARDS BADGES                             -->
    <!-- ========================================================================= -->
    <section class="py-16 sm:py-24 bg-black text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <span class="text-xs font-mono uppercase text-zinc-500 tracking-widest block">Accredited Compliance</span>
          <h2 class="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight font-display">
            Industry Certifications
          </h2>
          <p class="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
            Our chemical compounds, textile dyeing facilities, and factory practices meet the world's most stringent environmental and safety criteria.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div class="p-6 rounded-3xl bg-zinc-950 border border-zinc-800 space-y-3 text-center hover:border-zinc-700 transition">
            <span class="text-3xl block">&bull;</span>
            <h3 class="text-base font-bold text-white uppercase font-display">OEKO-TEX Standard 100</h3>
            <p class="text-xs text-zinc-400 font-mono leading-relaxed">
              Class 1 certification for baby-safe textiles. All DTF and silicone inks are free of formaldehyde, heavy metals, and allergen-inducing PVCs.
            </p>
          </div>

          <div class="p-6 rounded-3xl bg-zinc-950 border border-zinc-800 space-y-3 text-center hover:border-zinc-700 transition">
            <span class="text-3xl block">&bull;</span>
            <h3 class="text-base font-bold text-white uppercase font-display">ISO 9001:2015</h3>
            <p class="text-xs text-zinc-400 font-mono leading-relaxed">
              Certified Quality Management System covering fabric knitting, pattern grading, screen and digital printing, embroidery, and export dispatch.
            </p>
          </div>

          <div class="p-6 rounded-3xl bg-zinc-950 border border-zinc-800 space-y-3 text-center hover:border-zinc-700 transition">
            <span class="text-3xl block">&bull;</span>
            <h3 class="text-base font-bold text-white uppercase font-display">FDA &amp; LFGB Drinkware</h3>
            <p class="text-xs text-zinc-400 font-mono leading-relaxed">
              Food Contact Grade 304 (18/8) Stainless Steel certified non-leaching, BPA-free, and resistant to acid beverages and high-heat sterilization.
            </p>
          </div>

          <div class="p-6 rounded-3xl bg-zinc-950 border border-zinc-800 space-y-3 text-center hover:border-zinc-700 transition">
            <span class="text-3xl block">&bull;</span>
            <h3 class="text-base font-bold text-white uppercase font-display">Sedex SMETA Audited</h3>
            <p class="text-xs text-zinc-400 font-mono leading-relaxed">
              Rigorous 4-Pillar ethical manufacturing audit ensuring fair labor practices, worker safety, environmental stewardship, and zero child labor.
            </p>
          </div>
        </div>

        <!-- Bottom Action Strip -->
        <div class="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 class="text-base font-bold text-white uppercase font-display">Require Certified Test Reports for Your Brand?</h4>
            <p class="text-xs text-zinc-400 font-mono">We supply formal batch lab certificates, AATCC test data, and OEKO-TEX passports with export shipments.</p>
          </div>
          <div class="flex items-center gap-3">
            <a routerLink="/customize" class="btn-shimmer hover-lift-sm px-6 py-3 bg-white text-black font-black text-xs font-mono uppercase tracking-wider rounded-xl hover:bg-zinc-200 transition">
              Launch 3D Studio &rarr;
            </a>
            <a routerLink="/contact-us" class="hover-lift-sm px-6 py-3 border border-zinc-800 bg-zinc-950 text-zinc-300 font-mono text-xs uppercase rounded-xl hover:bg-zinc-900 transition">
              Request Lab Data Sheet &rarr;
            </a>
          </div>
        </div>

      </div>
    </section>
  `
})
export class QualityComponent implements OnDestroy {
  activeLabId = signal<string>('textile');

  // Interactive Stress Simulation States
  isSimulating = signal<boolean>(false);
  simulationProgress = signal<number>(0);
  simulationStage = signal<string>('');
  simulationVerdict = signal<string>('');
  private simulationInterval: any = null;

  // Auto-Cycle Motion State
  autoCycleActive = signal<boolean>(false);
  private autoCycleTimer: any = null;

  labs: QualityLab[] = [
    {
      id: 'textile',
      code: '01',
      disciplineBadge: 'DISCIPLINE 01 // YARN & WEAVE',
      badge: 'FABRIC & DIMENSIONS',
      title: 'Textile Stability & Durability Lab',
      shortTitle: 'Textile Stability',
      subtitle: 'Raw Fabric Structure & Combed Yarn Verification',
      description: 'Prior to cutting, all fabric rolls—from our 180 GSM single jersey to 380 GSM and 450 GSM French terry fleece—are pre-shrunk in bio-polishing enzyme baths and tested for shrinkage, pilling resistance, and tensile burst strength.',
      image: 'images/products/oversized_tee_240.jpg',
      equipment: 'James Heal Martindale Abrasion Tester & Circular GSM Balance',
      keyMetric: {
        value: '< 2.5%',
        label: 'Dimensional Wash Shrinkage',
        sublabel: 'Industry Avg: 7% - 10%',
        status: 'ASTM D3512 COMPLIANT'
      },
      metrics: [
        { name: 'Shrinkage After 50 Washes', brandValue: '< 2.5%', brandPercent: 94, industryValue: '7% - 10%', industryPercent: 40 },
        { name: 'Random Tumble Pilling Resistance', brandValue: 'Grade 5.0 (Zero Fuzz)', brandPercent: 98, industryValue: 'Grade 3.0', industryPercent: 55 },
        { name: 'Fabric Spirality & Torquing', brandValue: '< 1.2% Angle', brandPercent: 95, industryValue: '4% - 6%', industryPercent: 42 },
        { name: 'Diaphragm Bursting Strength', brandValue: '> 220 kPa', brandPercent: 92, industryValue: '140 kPa', industryPercent: 50 }
      ],
      simulation: {
        name: 'Simulate 50x Industrial Wash & Burst Cycle',
        duration: '3.2s accelerated cycle',
        steps: [
          'Enzyme pre-shrink wash bath (60°C)',
          'Centrifugal dehydration & high-heat tumble',
          'Hydraulic diaphragm burst load (220 kPa)',
          'Laser micrometer dimensional scan'
        ],
        passVerdict: 'PASS: Zero pilling, 1.8% shrinkage retained, fiber tensile integrity 100% verified.'
      },
      verifications: [
        'Shrinkage contained to < 2.5% lengthwise and widthwise after repeated 60°C washes',
        'Zero surface pilling or fuzzing after 60-minute accelerated tumbling',
        'Torquing and side-seam spirality held strictly under 1.5%',
        'Bio-washed combed cotton yarns preserve silky hand feel across 50+ wash cycles'
      ],
      standards: [
        { code: 'ISO 6330', name: 'Domestic Washing & Drying Shrinkage', criteria: '5 consecutive wash & tumble cycles', result: '< 2.5% Dimensional Shift' },
        { code: 'ASTM D3512', name: 'Random Tumble Pilling Resistance', criteria: '60 min imposter chamber evaluation', result: 'Grade 4.5 – 5.0 (Zero Pilling)' },
        { code: 'ISO 16322', name: 'Fabric Spirality & Torquing', criteria: 'Post-wash diagonal hem displacement', result: '< 1.5% Torquing Angle' },
        { code: 'ASTM D3786', name: 'Hydraulic Diaphragm Bursting Strength', criteria: 'Pressure limit before yarn rupture', result: '> 220 kPa Burst Resilience' }
      ]
    },
    {
      id: 'print-polymer',
      code: '02',
      disciplineBadge: 'DISCIPLINE 02 // 3D ELASTOMER',
      badge: 'PRINT & ELASTOMERS',
      title: 'Print Adhesion & Elastomer Stress Lab',
      shortTitle: 'Print & Elastomers',
      subtitle: '3D Silicone & DTF Polymer Molecular Bonding',
      description: 'We stress-test our 3D liquid silicone and industrial 2400 DPI DTF transfers to ensure the molecular bond between the TPU adhesive, elastomeric ink, and garment fibers withstands extreme mechanical elongation and commercial laundering.',
      image: 'images/print/print_3d_silicone_macro.jpg',
      equipment: 'Instron Universal Tensile Tester & AATCC Rotary Crockmeter',
      keyMetric: {
        value: '300%',
        label: 'Elastomer Tensile Stretch Recovery',
        sublabel: 'Industry Avg: 120%',
        status: 'ASTM D412 COMPLIANT'
      },
      metrics: [
        { name: 'Liquid Silicone Tensile Stretch', brandValue: '300% Recovery', brandPercent: 100, industryValue: '120% Limit', industryPercent: 42 },
        { name: 'Commercial Wash Color Fastness', brandValue: 'Grade 4.5 – 5.0', brandPercent: 96, industryValue: 'Grade 3.0', industryPercent: 55 },
        { name: 'Dry & Wet Friction Crocking', brandValue: 'Class 5.0 (Zero Transfer)', brandPercent: 98, industryValue: 'Class 3.5', industryPercent: 65 },
        { name: '180° Peel Adhesion Force', brandValue: '> 45 N/cm Bond', brandPercent: 94, industryValue: '22 N/cm', industryPercent: 48 }
      ],
      simulation: {
        name: 'Simulate 300% Tensile Elongation & Tape Peel Test',
        duration: '3.0s stress cycle',
        steps: [
          'Instron crosshead mechanical stretch to 300%',
          'AATCC rotary crock rubbing (100 cycles)',
          'Hot caustic detergent immersion (60°C)',
          '180° aggressive tape pull adhesion verify'
        ],
        passVerdict: 'PASS: Zero micro-fissures, zero ink transfer, TPU molecular adhesion intact.'
      },
      verifications: [
        '3D silicone transfers achieve 300% stretch recovery with zero micro-cracks',
        'Grade 4-5 color fastness to commercial laundering at 60°C (140°F)',
        'Zero dry or wet crocking rub-off onto adjacent white test swatches',
        'Cold-peel polymer backing leaves razor-sharp edges down to 0.15mm line weights'
      ],
      standards: [
        { code: 'ASTM D412', name: 'Vulcanized Rubber Tensile & Elongation', criteria: 'Dynamic elongation until rupture', result: '300% Stretch Recovery' },
        { code: 'ISO 105-C06', name: 'Color Fastness to Domestic & Commercial Laundering', criteria: 'Multiple 60°C detergent stress cycles', result: 'Grade 4.5 – 5.0 (Zero Fade)' },
        { code: 'AATCC 8', name: 'Colorfastness to Crocking (Rubbing)', criteria: '100 cycles wet & dry friction pad', result: 'Class 5 (Zero Transfer)' },
        { code: 'ASTM D903', name: '180° Peel Adhesion of Heat Transfers', criteria: 'Force required to strip transfer from knit', result: '> 45 N/cm Permanent Bond' }
      ]
    },
    {
      id: 'drinkware-metal',
      code: '03',
      disciplineBadge: 'DISCIPLINE 03 // 304 METALLURGY',
      badge: 'STAINLESS HARDWARE',
      title: 'Hardware Metallurgy & Coating Lab',
      shortTitle: 'Stainless Metallurgy',
      subtitle: '304 Stainless Steel & Cylindrical UV Adhesion',
      description: 'Engineered for premium drinkware and branded hardware accessories. We verify food-grade chemical inertness on 304 (18/8) stainless steel flasks, double-wall thermal retention, and cross-hatch paint adhesion of our 360° cylindrical UV and laser branding.',
      image: 'images/products/water_bottle_branding.jpg',
      equipment: 'Elcometer Cross-Hatch Adhesion Cutter & ASTM Salt Spray Chamber',
      keyMetric: {
        value: 'Class 5B',
        label: 'Cross-Hatch Lattice Adhesion',
        sublabel: 'Highest ASTM Standard',
        status: 'ASTM D3359 CERTIFIED'
      },
      metrics: [
        { name: 'Cross-Hatch Lattice Tape Pull', brandValue: 'Class 5B (100% Adhesion)', brandPercent: 100, industryValue: 'Class 3B', industryPercent: 58 },
        { name: '48-Hour Saline Fog Chamber', brandValue: 'Zero Rust / Pitting', brandPercent: 98, industryValue: 'Minor Corrosion', industryPercent: 50 },
        { name: 'Double-Wall Vacuum Cold Retention', brandValue: '24h Cold (< 4°C Rise)', brandPercent: 96, industryValue: '10h - 12h Cold', industryPercent: 45 },
        { name: 'Chemical Leaching & Food Safety', brandValue: '0.00 ppm (BPA-Free)', brandPercent: 100, industryValue: 'Food Standard Limit', industryPercent: 70 }
      ],
      simulation: {
        name: 'Simulate 48h Salt Fog & Cross-Hatch Razor Cut Test',
        duration: '3.5s stress cycle',
        steps: [
          'Elcometer cross-hatch 1mm lattice incision',
          'Pressure tape rapid 90° & 180° pull stripping',
          'Heated saline fog chamber immersion',
          'Laser optical surface profilometry'
        ],
        passVerdict: 'PASS: Zero flaking, zero pitting or rust, hermetic vacuum seal confirmed.'
      },
      verifications: [
        'Cross-hatch grid tape pull test achieves highest ASTM Class 5B rating (zero flaking)',
        'Certified non-toxic, BPA-free, and LFGB / FDA compliant for hot and cold beverages',
        '48-hour continuous salt spray fog produces zero rust or pitting on laser engravings',
        'Double-wall vacuum insulation verified to hold ice cold for 24h and hot for 12h'
      ],
      standards: [
        { code: 'ASTM D3359', name: 'Cross-Hatch Tape Adhesion Testing', criteria: 'Lattice incision tape pull on powder coat', result: 'Class 5B (100% Adhesion)' },
        { code: 'FDA 21 CFR', name: 'Food Contact Surface Migration Test', criteria: 'Acid & thermal solvent chemical leaching', result: 'Zero Detectable Leaching' },
        { code: 'ASTM B117', name: 'Salt Spray Corrosion Resistance', criteria: '48h continuous saline fog exposure', result: 'Zero Pitting / Rust-Proof' },
        { code: 'EN 12546-1', name: 'Thermal Retention of Insulated Flasks', criteria: '24h cold (< 4°C rise) & 12h hot (> 65°C)', result: 'Exceeds EN 12546-1 Class 1' }
      ]
    },
    {
      id: 'color-fineart',
      code: '04',
      disciplineBadge: 'DISCIPLINE 04 // SPECTRAL FIDELITY',
      badge: 'COLOR & SPECTRA',
      title: 'Colorimetric & Spectral Fidelity Lab',
      shortTitle: 'Spectral Color Match',
      subtitle: 'X-Rite Spectrophotometer & D65 Lighting Booth',
      description: 'Color accuracy is calibrated digitally using spectrophotometers and calibrated ICC profiles. We guarantee that your Pantone spot colors, corporate brand guidelines, and 2400 DPI fine-art graphic canvas prints match physical targets with delta-E variance under 1.0.',
      image: 'images/products/fine_art_canvas_painting.jpg',
      equipment: 'X-Rite eXact 2 Spectrophotometer & Judge QC D65/D50 Light Booth',
      keyMetric: {
        value: 'ΔE < 0.8',
        label: 'Spectral Color Deviation',
        sublabel: 'Imperceptible to Human Eye',
        status: 'CIE ΔE 2000 CERTIFIED'
      },
      metrics: [
        { name: 'Pantone PMS Spectral Deviation', brandValue: 'ΔE < 0.8 (Exact Match)', brandPercent: 96, industryValue: 'ΔE 2.5 - 3.5', industryPercent: 52 },
        { name: 'Xenon Arc UV Lightfastness', brandValue: 'Class 4.5 (Museum Grade)', brandPercent: 94, industryValue: 'Class 3.0', industryPercent: 58 },
        { name: 'Acid & Alkaline Sweat Fastness', brandValue: 'Grade 5.0 (Zero Staining)', brandPercent: 98, industryValue: 'Grade 3.5', industryPercent: 66 },
        { name: 'White Ink Underbase Density', brandValue: '100% Solid Dense White', brandPercent: 99, industryValue: '75% Milky White', industryPercent: 68 }
      ],
      simulation: {
        name: 'Simulate X-Rite Spectrophotometer & Xenon Fade Scan',
        duration: '2.8s spectral scan',
        steps: [
          'D65 standard daylight booth illuminance lock',
          'X-Rite eXact 2 spectral reflectance reading',
          'CIE L*a*b* coordinate deviation calculation',
          '40 AFU xenon radiation accelerated exposure'
        ],
        passVerdict: 'PASS: ΔE = 0.42 recorded. Pantone target perfectly matched with zero visible shift.'
      },
      verifications: [
        'Every production run calibrated to Pantone Matching System (PMS) formula guides',
        'Spectral Delta-E held strictly under 1.0 for imperceptible color deviation',
        'High-density white ink underbase ensures true-to-life vibrancy on jet-black cotton',
        'Certified OEKO-TEX Standard 100 Class 1 water-based pigments'
      ],
      standards: [
        { code: 'CIE &Delta;E 2000', name: 'Color Difference Spectrophotometry', criteria: 'Spectral variance against master swatch', result: '&Delta;E < 1.0 (Exact Match)' },
        { code: 'AATCC 16.3', name: 'Colorfastness to Light (Xenon Arc)', criteria: 'UV light chamber simulation 40 AFU', result: 'Class 4.5 (Museum Lightfast)' },
        { code: 'ISO 105-E04', name: 'Color Fastness to Perspiration', criteria: 'Acid & alkaline synthetic sweat immersion', result: 'Grade 5 (Zero Staining)' },
        { code: 'OEKO-TEX 100', name: 'Harmful Chemical & Allergen Screen', criteria: 'Formaldehyde, phthalates, heavy metals', result: 'Certified Class 1 Safe' }
      ]
    }
  ];

  selectedLab = () => this.labs.find(l => l.id === this.activeLabId()) || this.labs[0];

  selectLab(id: string): void {
    this.activeLabId.set(id);
    this.resetSimulation();
  }

  // Interactive Live Stress Simulation Engine
  runSimulation(): void {
    if (this.isSimulating()) return;
    
    this.isSimulating.set(true);
    this.simulationProgress.set(0);
    this.simulationVerdict.set('');

    const currentLab = this.selectedLab();
    const steps = currentLab.simulation.steps;
    this.simulationStage.set(steps[0]);

    let stepIdx = 0;
    this.simulationInterval = setInterval(() => {
      const current = this.simulationProgress();
      if (current < 100) {
        const next = Math.min(100, current + 5);
        this.simulationProgress.set(next);

        // Update step descriptions dynamically based on progress
        if (next >= 25 && stepIdx === 0 && steps[1]) {
          stepIdx = 1;
          this.simulationStage.set(steps[1]);
        } else if (next >= 50 && stepIdx === 1 && steps[2]) {
          stepIdx = 2;
          this.simulationStage.set(steps[2]);
        } else if (next >= 75 && stepIdx === 2 && steps[3]) {
          stepIdx = 3;
          this.simulationStage.set(steps[3]);
        }
      } else {
        clearInterval(this.simulationInterval);
        this.simulationInterval = null;
        this.isSimulating.set(false);
        this.simulationVerdict.set(currentLab.simulation.passVerdict);
      }
    }, 120);
  }

  private resetSimulation(): void {
    if (this.simulationInterval) {
      clearInterval(this.simulationInterval);
      this.simulationInterval = null;
    }
    this.isSimulating.set(false);
    this.simulationProgress.set(0);
    this.simulationStage.set('');
    this.simulationVerdict.set('');
  }

  // Auto-Cycle Motion Toggle
  toggleAutoCycle(): void {
    const nextState = !this.autoCycleActive();
    this.autoCycleActive.set(nextState);

    if (nextState) {
      this.autoCycleTimer = setInterval(() => {
        const ids = this.labs.map(l => l.id);
        const curIdx = ids.indexOf(this.activeLabId());
        const nextIdx = (curIdx + 1) % ids.length;
        this.selectLab(ids[nextIdx]);
      }, 6000);
    } else {
      if (this.autoCycleTimer) {
        clearInterval(this.autoCycleTimer);
        this.autoCycleTimer = null;
      }
    }
  }

  ngOnDestroy(): void {
    if (this.simulationInterval) {
      clearInterval(this.simulationInterval);
    }
    if (this.autoCycleTimer) {
      clearInterval(this.autoCycleTimer);
    }
  }
}
