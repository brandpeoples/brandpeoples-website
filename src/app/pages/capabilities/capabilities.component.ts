import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface TechCapability {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  gallery: string[];
  specs: { label: string; value: string; desc: string }[];
  products: string[];
  advantages: string[];
  equipment: string;
  turnaround: string;
  moq: string;
}

@Component({
  selector: 'app-capabilities',
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
            <span class="text-white font-bold">Capabilities</span>
          </div>

          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-950 border border-zinc-800 text-zinc-300 text-[11px] font-mono font-bold tracking-wider uppercase">
            <span class="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
            <span>Tiruppur Hub &bull; 40,000 Sq. Ft. Integrated Manufacturing</span>
          </div>
        </div>

        <div class="max-w-3xl space-y-4">
          <h1 class="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase font-display leading-[1.08]">
            Manufacturing &amp; Decoration Capabilities
          </h1>
          <p class="text-xs sm:text-sm lg:text-base text-zinc-400 leading-relaxed font-sans font-normal">
            Precision garment engineering, 3D elastomeric silicone molding, industrial 2400 DPI DTF digital transfers, 360&deg; rotary cylindrical UV water bottle printing, and heavyweight 380+ GSM streetwear cut &amp; sew.
          </p>
        </div>

        <!-- Infrastructure Metrics Bar -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          <div class="p-4 rounded-2xl bg-zinc-950/90 border border-zinc-800/80 space-y-1">
            <span class="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">Daily Print Output</span>
            <span class="text-lg sm:text-xl font-black text-white font-mono block">100,000+ Units</span>
          </div>
          <div class="p-4 rounded-2xl bg-zinc-950/90 border border-zinc-800/80 space-y-1">
            <span class="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">Print Resolution</span>
            <span class="text-lg sm:text-xl font-black text-white font-mono block">Up to 2400 DPI</span>
          </div>
          <div class="p-4 rounded-2xl bg-zinc-950/90 border border-zinc-800/80 space-y-1">
            <span class="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">Minimum Order (MOQ)</span>
            <span class="text-lg sm:text-xl font-black text-white font-mono block">Zero MOQ (1 Pc)</span>
          </div>
          <div class="p-4 rounded-2xl bg-zinc-950/90 border border-zinc-800/80 space-y-1">
            <span class="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">Rapid Dispatch SLA</span>
            <span class="text-lg sm:text-xl font-black text-white font-mono block">24h &ndash; 48h Samples</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ========================================================================= -->
    <!-- 2. INTERACTIVE DECORATION & PRODUCT TECHNOLOGY EXPLORER                   -->
    <!-- ========================================================================= -->
    <section class="py-14 sm:py-20 bg-black text-white border-b border-zinc-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-900 pb-8">
          <div>
            <span class="text-xs font-mono uppercase text-zinc-500 tracking-widest block mb-2">Core Production Disciplines</span>
            <h2 class="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight font-display">
              Select Production Discipline
            </h2>
          </div>
          <p class="text-xs sm:text-sm text-zinc-400 max-w-md font-mono">
            Every embellishment technique is calibrated in-house to match our proprietary fabric blends, ensuring 50+ wash cycles without cracking or peeling.
          </p>
        </div>

        <!-- Capability Tabs Navigation -->
        <div class="flex flex-wrap items-center gap-2">
          @for (tech of capabilities; track tech.id) {
            <button 
              (click)="activeTechId.set(tech.id)"
              [class.bg-white]="activeTechId() === tech.id"
              [class.text-black]="activeTechId() === tech.id"
              [class.font-black]="activeTechId() === tech.id"
              [class.shadow-bw]="activeTechId() === tech.id"
              [class.bg-zinc-950]="activeTechId() !== tech.id"
              [class.text-zinc-400]="activeTechId() !== tech.id"
              [class.font-medium]="activeTechId() !== tech.id"
              class="btn-shimmer hover-lift-sm px-4 py-2.5 rounded-full text-xs font-mono transition-all border border-zinc-800 whitespace-nowrap cursor-pointer hover:border-zinc-500 shrink-0">
              <span>{{ tech.title }}</span>
            </button>
          }
        </div>

        <!-- Active Technology Deep Dive Showcase -->
        @if (selectedTech(); as current) {
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start bg-zinc-950 p-6 sm:p-10 rounded-3xl border border-zinc-800/90">
            
            <!-- Left Column: Photographic Evidence & Production Detail -->
            <div class="lg:col-span-6 space-y-6">
              <div class="rounded-2xl overflow-hidden border border-zinc-800 aspect-[4/3] bg-zinc-900 relative group">
                <img 
                  [src]="current.image" 
                  [alt]="current.title" 
                  class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                
                <div class="absolute top-4 left-4">
                  <span class="bg-black/90 backdrop-blur-md text-white text-[10px] font-mono font-bold px-3 py-1 rounded-full border border-zinc-700 uppercase tracking-wider">
                    {{ current.badge }}
                  </span>
                </div>

                <div class="absolute bottom-4 right-4 bg-black/90 backdrop-blur-md text-zinc-300 text-[10px] font-mono px-3 py-1 rounded-full border border-zinc-800">
                  Equipment: {{ current.equipment }}
                </div>
              </div>

              <!-- Product Compatibility Tags -->
              <div class="p-4 rounded-2xl bg-black/60 border border-zinc-800/80 space-y-2">
                <span class="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">Standard Production Applications:</span>
                <div class="flex flex-wrap gap-1.5">
                  @for (prod of current.products; track prod) {
                    <span class="px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono">
                      {{ prod }}
                    </span>
                  }
                </div>
              </div>
            </div>

            <!-- Right Column: Engineering Breakdown & Specs -->
            <div class="lg:col-span-6 space-y-6">
              <div class="space-y-3">
                <span class="text-[11px] font-mono text-zinc-500 uppercase tracking-widest block">{{ current.subtitle }}</span>
                <h3 class="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight font-display">
                  {{ current.title }}
                </h3>
                <p class="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans font-normal">
                  {{ current.description }}
                </p>
              </div>

              <!-- Technical Parameters 4-Grid -->
              <div class="grid grid-cols-2 gap-3 pt-2">
                @for (spec of current.specs; track spec.label) {
                  <div class="p-3.5 rounded-xl bg-black border border-zinc-800 space-y-1">
                    <span class="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">{{ spec.label }}</span>
                    <span class="text-sm font-black text-white font-mono block">{{ spec.value }}</span>
                    <span class="text-[10px] text-zinc-400 block">{{ spec.desc }}</span>
                  </div>
                }
              </div>

              <!-- Key Manufacturing Advantages List -->
              <div class="space-y-2 pt-2">
                <span class="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">Production Advantages:</span>
                <ul class="space-y-2">
                  @for (adv of current.advantages; track adv) {
                    <li class="flex items-center gap-2.5 text-xs text-zinc-300 font-mono">
                      <span class="w-1.5 h-1.5 rounded-full bg-white shrink-0"></span>
                      <span>{{ adv }}</span>
                    </li>
                  }
                </ul>
              </div>

              <!-- Call to Action Buttons -->
              <div class="flex flex-wrap items-center gap-3 pt-4 border-t border-zinc-900">
                <a routerLink="/customize" class="btn-shimmer hover-lift-sm px-6 py-3 bg-white text-black font-black text-xs font-mono uppercase tracking-wider rounded-xl hover:bg-zinc-200 transition">
                  Test In 3D Studio &rarr;
                </a>
                <a routerLink="/catalog" class="hover-lift-sm px-6 py-3 border border-zinc-800 bg-black text-zinc-300 font-mono text-xs uppercase rounded-xl hover:bg-zinc-900 transition">
                  View Matching Blanks &rarr;
                </a>
              </div>

            </div>

          </div>
        }

      </div>
    </section>

    <!-- ========================================================================= -->
    <!-- 3. SIDE-BY-SIDE DECORATION COMPARISON MATRIX                              -->
    <!-- ========================================================================= -->
    <section class="py-16 sm:py-24 bg-zinc-950 text-white border-b border-zinc-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div class="max-w-3xl space-y-3">
          <span class="text-xs font-mono uppercase text-zinc-500 tracking-widest block">Direct Comparison Guide</span>
          <h2 class="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight font-display">
            Print &amp; Embellishment Matrix
          </h2>
          <p class="text-xs sm:text-sm text-zinc-400 font-mono leading-relaxed">
            Choose the ideal decoration method based on your artwork complexity, substrate weight, order volume, and desired tactile finish.
          </p>
        </div>

        <!-- Responsive Comparison Table -->
        <div class="overflow-x-auto rounded-3xl border border-zinc-800 bg-black/60">
          <table class="w-full text-left text-xs font-mono border-collapse">
            <thead>
              <tr class="border-b border-zinc-800 bg-zinc-900/60 text-zinc-400 text-[10px] uppercase tracking-wider">
                <th class="p-4 sm:p-5">Branding Technology</th>
                <th class="p-4 sm:p-5">Hand-Feel / Texture</th>
                <th class="p-4 sm:p-5">Color Fidelity</th>
                <th class="p-4 sm:p-5">Wash Durability</th>
                <th class="p-4 sm:p-5">Ideal Substrates</th>
                <th class="p-4 sm:p-5">Turnaround</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-zinc-900 text-zinc-300">
              <tr class="hover:bg-zinc-900/30 transition">
                <td class="p-4 sm:p-5 font-bold text-white">
                  <span class="block">3D Silicone Relief</span>
                  <span class="text-[10px] text-zinc-500 font-normal">Liquid injection molding</span>
                </td>
                <td class="p-4 sm:p-5">Velvety matte, 1.5mm 3D relief</td>
                <td class="p-4 sm:p-5 text-white">Solid PMS spot colors</td>
                <td class="p-4 sm:p-5">50+ Washes &bull; 300% Stretch</td>
                <td class="p-4 sm:p-5 text-zinc-400">Heavy hoodies, fleece, activewear</td>
                <td class="p-4 sm:p-5 text-white font-bold">24h &ndash; 48h</td>
              </tr>
              <tr class="hover:bg-zinc-900/30 transition">
                <td class="p-4 sm:p-5 font-bold text-white">
                  <span class="block">Industrial DTF Transfers</span>
                  <span class="text-[10px] text-zinc-500 font-normal">2400 DPI multi-head digital</span>
                </td>
                <td class="p-4 sm:p-5">Ultra-thin soft hand (40&mu;m)</td>
                <td class="p-4 sm:p-5 text-white">Photorealistic CMYK+W</td>
                <td class="p-4 sm:p-5">50+ Washes &bull; Zero cracking</td>
                <td class="p-4 sm:p-5 text-zinc-400">180&ndash;240 GSM tees, hoodies, totes</td>
                <td class="p-4 sm:p-5 text-white font-bold">Same Day &ndash; 24h</td>
              </tr>
              <tr class="hover:bg-zinc-900/30 transition">
                <td class="p-4 sm:p-5 font-bold text-white">
                  <span class="block">Cylindrical UV &amp; Laser</span>
                  <span class="text-[10px] text-zinc-500 font-normal">360&deg; rotary printing &amp; fiber</span>
                </td>
                <td class="p-4 sm:p-5">Embossed gloss gloss or tactile etch</td>
                <td class="p-4 sm:p-5 text-white">Full-color UV or metal raw silver</td>
                <td class="p-4 sm:p-5">Dishwasher Safe &bull; Rust-Proof</td>
                <td class="p-4 sm:p-5 text-zinc-400">304 Stainless Steel Water Bottles</td>
                <td class="p-4 sm:p-5 text-white font-bold">24h &ndash; 48h</td>
              </tr>
              <tr class="hover:bg-zinc-900/30 transition">
                <td class="p-4 sm:p-5 font-bold text-white">
                  <span class="block">Fine-Art Textile Painting</span>
                  <span class="text-[10px] text-zinc-500 font-normal">Museum-grade pigment bonding</span>
                </td>
                <td class="p-4 sm:p-5">Breathable textured painterly finish</td>
                <td class="p-4 sm:p-5 text-white">High dynamic range micro-gradients</td>
                <td class="p-4 sm:p-5">50+ Washes &bull; Zero hand weight</td>
                <td class="p-4 sm:p-5 text-zinc-400">Oversized 240 GSM tees, canvas</td>
                <td class="p-4 sm:p-5 text-white font-bold">24h &ndash; 48h</td>
              </tr>
              <tr class="hover:bg-zinc-900/30 transition">
                <td class="p-4 sm:p-5 font-bold text-white">
                  <span class="block">3D Foam Puff Embroidery</span>
                  <span class="text-[10px] text-zinc-500 font-normal">12,000+ stitch Tajima heads</span>
                </td>
                <td class="p-4 sm:p-5">High-relief dimensional stitch</td>
                <td class="p-4 sm:p-5 text-white">Up to 15 Madeira thread tones</td>
                <td class="p-4 sm:p-5">Lifetime Fabric Wear</td>
                <td class="p-4 sm:p-5 text-zinc-400">Structured caps, 380 GSM hoodies</td>
                <td class="p-4 sm:p-5 text-white font-bold">48h &ndash; 72h</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </section>

    <!-- ========================================================================= -->
    <!-- 4. FACTORY FLOOR & HARDWARE INFRASTRUCTURE                                -->
    <!-- ========================================================================= -->
    <section class="py-16 sm:py-24 bg-black text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div class="text-center max-w-3xl mx-auto space-y-4">
          <span class="text-xs font-mono uppercase text-zinc-500 tracking-widest block">Tiruppur Manufacturing Facility</span>
          <h2 class="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight font-display">
            Industrial Equipment Roster
          </h2>
          <p class="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
            Our 40,000 sq. ft facility in Anupparpalayam Pudur houses precision imported machinery, pneumatic heat presses, and automated curing lines.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="p-6 rounded-3xl bg-zinc-950 border border-zinc-800 space-y-4 hover:border-zinc-700 transition">
            <div class="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white font-mono font-bold text-sm">
              01
            </div>
            <h3 class="text-lg font-black text-white uppercase font-display">Multi-Head Industrial DTF Line</h3>
            <p class="text-xs text-zinc-400 leading-relaxed font-mono">
              High-frequency piezoelectric print arrays with active negative pressure ink recirculation and automated TPU hot-melt powder applicators with infrared sintering tunnels.
            </p>
            <span class="text-[11px] font-mono text-zinc-500 block">&bull; Ricoh Gen6 &amp; Epson i3200 Heads</span>
          </div>

          <div class="p-6 rounded-3xl bg-zinc-950 border border-zinc-800 space-y-4 hover:border-zinc-700 transition">
            <div class="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white font-mono font-bold text-sm">
              02
            </div>
            <h3 class="text-lg font-black text-white uppercase font-display">Rotary UV &amp; Fiber Laser Station</h3>
            <p class="text-xs text-zinc-400 leading-relaxed font-mono">
              Dual-spindle synchronized rotary chucks with UV LED curing for seamless 360&deg; cylindrical drinkware branding, accompanied by 50W MOPA galvo fiber lasers.
            </p>
            <span class="text-[11px] font-mono text-zinc-500 block">&bull; Cylindrical 360&deg; Flask Automation</span>
          </div>

          <div class="p-6 rounded-3xl bg-zinc-950 border border-zinc-800 space-y-4 hover:border-zinc-700 transition">
            <div class="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white font-mono font-bold text-sm">
              03
            </div>
            <h3 class="text-lg font-black text-white uppercase font-display">Pneumatic Clamshell &amp; Shuttles</h3>
            <p class="text-xs text-zinc-400 leading-relaxed font-mono">
              Heavy-tonnage pneumatic presses delivering up to 8 bar consistent pressure across cast aluminum heat platens with &plusmn;1&deg;C digital temperature distribution.
            </p>
            <span class="text-[11px] font-mono text-zinc-500 block">&bull; 40 x 50cm &amp; Large-Format 60 x 80cm</span>
          </div>
        </div>

        <!-- Bottom Action Strip -->
        <div class="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 class="text-base font-bold text-white uppercase font-display">Need Custom Engineering Specifications?</h4>
            <p class="text-xs text-zinc-400 font-mono">Our pre-production engineers review artworks, Pantone formulas, and garment profiles daily.</p>
          </div>
          <div class="flex items-center gap-3">
            <a routerLink="/customize" class="btn-shimmer hover-lift-sm px-6 py-3 bg-white text-black font-black text-xs font-mono uppercase tracking-wider rounded-xl hover:bg-zinc-200 transition">
              Launch 3D Studio &rarr;
            </a>
            <a routerLink="/contact-us" class="hover-lift-sm px-6 py-3 border border-zinc-800 bg-zinc-950 text-zinc-300 font-mono text-xs uppercase rounded-xl hover:bg-zinc-900 transition">
              Talk to Production &rarr;
            </a>
          </div>
        </div>

      </div>
    </section>
  `
})
export class CapabilitiesComponent {
  activeTechId = signal<string>('silicone');

  capabilities: TechCapability[] = [
    {
      id: 'silicone',
      badge: 'TACTILE 3D RELIEF',
      title: 'High-Density 3D Silicone Transfers',
      subtitle: 'Liquid Elastomeric Silicone Polymer Technology',
      description: 'Engineered for luxury streetwear and performance sportswear. Injected liquid silicone is heat-molded onto specialized carrier films, producing an unmistakable 1.5mm dimensional pop with a velvety matte surface and 300% elasticity.',
      image: 'images/print/print_3d_silicone_macro.jpg',
      gallery: ['images/products/tactile_silicone_patches.jpg'],
      equipment: 'Pneumatic 6-Bar Liquid Injection Heat Press',
      turnaround: '24h – 48h SLA',
      moq: 'Zero MOQ (1 Pc Prototype)',
      specs: [
        { label: 'Relief Height', value: '0.8mm – 1.5mm', desc: 'True tactile elevation' },
        { label: 'Elasticity', value: '300% Stretch Recovery', desc: 'No micro-fissures' },
        { label: 'Heat Press Cycle', value: '155°C @ 5–6 Bar', desc: 'Cold-peel cure' },
        { label: 'Hand-Feel', value: 'Velvet Matte Rubber', desc: 'Non-tacky finish' }
      ],
      products: ['380 GSM Heavy Fleece Hoodies', '380 GSM Streetwear Fleece Pants', '240 GSM Oversized Tees', 'Structured Twill Caps'],
      advantages: [
        'Unmatched dimensional aesthetic favored by high-end streetwear labels',
        'Stretches seamlessly across ribbed hems, fleece, and 4-way spandex',
        'Zero fading, discoloration, or hardening after 50+ commercial washes',
        'Certified OEKO-TEX Standard 100 free of harmful phthalates'
      ]
    },
    {
      id: 'dtf',
      badge: '2400 DPI PHOTOREALISTIC',
      title: 'Industrial Direct-To-Film (DTF) Transfers',
      subtitle: 'Multi-Head Piezoelectric Digital Transfer Line',
      description: 'Our high-volume DTF division runs industrial multi-head roll printers capable of delivering 100,000+ prints daily. Featuring micro-drop print heads and automatic hot-melt TPU powder application, achieving photorealistic colors with zero weed lines.',
      image: 'images/print/print_dtf_gangsheet.jpg',
      gallery: ['images/products/dtf_gang_sheet_roll.jpg', 'images/print/print_dtf_streetwear.jpg'],
      equipment: 'Ricoh Gen6 & Epson i3200 Industrial DTF Shakers',
      turnaround: 'Same Day – 24h SLA',
      moq: 'Zero MOQ (1 Gang Sheet)',
      specs: [
        { label: 'Resolution', value: 'Up to 2400 x 1200 DPI', desc: 'Ultra-fine gradients' },
        { label: 'Film Thickness', value: '40 Microns', desc: 'Featherlight soft hand' },
        { label: 'Color Spectrum', value: 'CMYK + High-Density White', desc: 'Vibrant on black fabric' },
        { label: 'Wash Fastness', value: 'ISO 105-C06 Grade 4.5', desc: '50+ wash cycles' }
      ],
      products: ['240 GSM Heavyweight Streetwear Tees', '180 GSM Bio-Washed Combed Tees', 'Fleece Crewnecks', 'Cotton Canvas Totes'],
      advantages: [
        'Renders complex photographic gradients, micro-type down to 4pt, and halftone art',
        'Binds securely to 100% cotton, combed blends, heavy fleece, and nylon',
        'Gang-sheet optimization allows rapid batch sampling without setup costs',
        'Eco-friendly water-based inks cured with infrared sintering tunnels'
      ]
    },
    {
      id: 'drinkware',
      badge: '360° CYLINDRICAL & LASER',
      title: 'Cylindrical Rotary UV & Fiber Laser Branding',
      subtitle: 'Precision Drinkware & Hardware Customization',
      description: 'Dedicated to premium corporate gifts and merchandise hardware. We utilize synchronized rotary chuck UV printers for continuous 360° seamless graphic wraps, and high-precision MOPA fiber laser engravers to ablate powder coatings down to surgical bare 304 stainless steel.',
      image: 'images/products/water_bottle_branding.jpg',
      gallery: ['images/products/water_bottle_branding.jpg'],
      equipment: 'Rotary UV LED Chucks & 50W MOPA Fiber Laser',
      turnaround: '24h – 48h SLA',
      moq: 'Zero MOQ (1 Pc)',
      specs: [
        { label: 'Rotary Coverage', value: '360° Seamless Wrap', desc: 'No gap cylindrical print' },
        { label: 'Laser Spot', value: '0.01mm Precision', desc: 'Surgical micro-engraving' },
        { label: 'Substrate', value: '304 Pro-Grade Steel', desc: 'Double-wall vacuum flask' },
        { label: 'Durability', value: 'ASTM D3359 Class 5B', desc: 'Dishwasher safe & rust-free' }
      ],
      products: ['750ml Vacuum Insulated Flasks', 'Double-Wall Thermal Tumblers', 'Anodized Aluminum Keychains', 'Steel Zippers & Pulls'],
      advantages: [
        'Photorealistic 360° full-bleed graphics with gloss spot varnish embossing',
        'Permanent laser ablation that will never peel, rub off, or degrade with moisture',
        'Preserves full vacuum thermal retention (24h ice cold / 12h steaming hot)',
        'Food-grade FDA & LFGB compliant non-toxic finish'
      ]
    },
    {
      id: 'fine-art',
      badge: '2400 DPI ART CANVAS',
      title: 'Fine-Art Textile Painting & Direct Canvas',
      subtitle: 'Museum-Fidelity Graphic Textile Reproduction',
      description: 'Specifically engineered for artist collaborations, gallery merch, and high-impact streetwear backprints. Employs pigment formulations that preserve original brushwork, impasto texture, and tonal nuances directly onto export combed heavyweight cotton fabrics.',
      image: 'images/products/fine_art_canvas_painting.jpg',
      gallery: ['images/print/print_oversized_backprint.jpg'],
      equipment: 'Fine-Art Piezoelectric Textile Gantry',
      turnaround: '24h – 48h SLA',
      moq: 'Zero MOQ (1 Pc)',
      specs: [
        { label: 'Tonal Gamut', value: 'Expanded CMYK + Light K', desc: 'Museum color gamut' },
        { label: 'Line Fidelity', value: 'Down to 0.1mm Stroke', desc: 'Zero blur or bleeding' },
        { label: 'Substrate Weight', value: '240 – 450 GSM', desc: 'Heavy knits & canvas' },
        { label: 'Hand-Feel', value: 'Breathable Soft-Touch', desc: 'No heavy plastic shield' }
      ],
      products: ['240 GSM Oversized Streetwear Tees', 'Heavyweight Canvas Art Panels', 'Vintage Acid Wash Drops', 'Museum Gift Editions'],
      advantages: [
        'Captures fine oil, acrylic, and charcoal artistic stroke dynamics',
        'Soft-touch water-based chemistry lets the heavy cotton fabric breathe naturally',
        'Exceptional lightfastness resistant to sunlight fading and UV discoloration',
        'Zero cracking on washed vintage finishes and oversized back spans'
      ]
    },
    {
      id: 'fleece-cutsew',
      badge: '380 - 450 GSM HEAVYWEIGHT',
      title: 'Heavy Fleece & Streetwear Pattern Formulation',
      subtitle: 'Custom Apparel Cut & Sew Infrastructure',
      description: 'We knit, dye, cut, and assemble premium heavyweight streetwear garments from scratch. Our proprietary 380 GSM and 450 GSM diagonal-loop French terry and brushed fleece are engineered for boxy silhouettes, structured hoods, and tapered streetwear pants.',
      image: 'images/products/streetwear_fleece_joggers.jpg',
      gallery: ['images/products/french_terry_hoodie_380.jpg', 'images/products/ultra_heavy_hoodie_450.jpg'],
      equipment: 'Juki Industrial Flatlock & 4-Needle Overlockers',
      turnaround: '48h Sampling & Fast Bulk Run',
      moq: 'Zero MOQ (In-Stock Blanks)',
      specs: [
        { label: 'Fabric Weights', value: '380 GSM & 450 GSM', desc: 'Export French Terry' },
        { label: 'Yarn Construction', value: '32s/2 Compact Combed', desc: 'Zero surface pilling' },
        { label: 'Pre-Shrunk', value: '< 2.5% Dimensional Shift', desc: 'Bio-wash enzyme bath' },
        { label: 'Stitching', value: 'Reinforced Flatlock', desc: 'Heavy stress resilience' }
      ],
      products: ['380 GSM Heavy French Terry Pants', '380 GSM Streetwear Fleece Hoodies', '450 GSM Ultra-Heavy Pullovers', '340 GSM Crewnecks'],
      advantages: [
        'Substantial structured drape that holds its boxy silhouette without sagging',
        'Double-layered self-fabric hoods that stand up without drawstrings collapsing',
        'Deep functional zippered side pockets and ribbed crotch gussets on pants',
        'Custom pantone fabric piece-dyeing available for brand collections'
      ]
    },
    {
      id: 'embroidery',
      badge: '12,000+ STITCHES',
      title: 'Precision 3D Foam Puff & Headwear Embroidery',
      subtitle: 'Multi-Head High-Density Tajima Embroidery',
      description: 'High-speed computerized embroidery rigs equipped with high-density EVA foam underlays to generate bold, architectural 3D puff relief on structured caps, dad hats, heavy hoodies, and polo chest insignias.',
      image: 'images/products/twill_cap_structured.jpg',
      gallery: ['images/products/canvas_dad_cap.jpg'],
      equipment: '12-Needle Tajima Industrial Automated Heads',
      turnaround: '48h – 72h SLA',
      moq: '12 Pcs Bulk Run',
      specs: [
        { label: 'Stitch Density', value: '12,000+ Stitches/Design', desc: 'Tight zero-gap satin' },
        { label: '3D Elevation', value: '3mm EVA Foam Underlay', desc: 'Bold dimensional relief' },
        { label: 'Thread Type', value: '100% Rayon / Poly Madeira', desc: 'High luster & colorfast' },
        { label: 'Headwear Profile', value: 'Structured 6-Panel Buckram', desc: 'Holds form permanently' }
      ],
      products: ['6-Panel Structured Twill Caps', 'Unstructured Canvas Dad Caps', 'Pique Polo Chest Emblems', 'Heavy Fleece Hoodies'],
      advantages: [
        'Crisp, razor-sharp edge definition around letterforms and crests',
        'Extreme durability that outlasts the lifetime of the garment',
        'Capable of mixing flat tatami fill stitches with elevated 3D foam puff',
        'Custom woven damask labels and ultrasonic heat-cut edges'
      ]
    }
  ];

  selectedTech = () => this.capabilities.find(c => c.id === this.activeTechId()) || this.capabilities[0];
}
