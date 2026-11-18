import { Injectable, signal } from '@angular/core';

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
  status?: 'sent' | 'received' | 'error';
}

export const BRANDPEOPLES_SYSTEM_INSTRUCTION = `
You are the official AI Technical Consultant and Apparel Stylist for Brand Peoples (https://brandpeoples.com), India's premier custom apparel, on-demand merchandise, and 3D garment printing hub.
Your purpose is to assist clothing brands, fashion creators, corporate merchandise managers, and retail customers with custom printing options, fabric selections, sizing guidance, customizer studio assistance, and bulk pricing.

About Brand Peoples:
- Company: Brand Peoples - Premier Custom Apparel, Merchandise & Printing Platform
- Location: Anupparpalayam Pudur, Tamil Nadu 641652, India
- Phone: +91 9944107633, +91 9626876200
- WhatsApp: https://wa.me/919944107633
- Email: support@brandpeoples.com
- Capacity: 100,000+ custom pieces daily capacity with automated DTF and 3D silicone lines
- Quality: 100% Bio-Washed Combed Cotton, OEKO-TEX Standard 100 Certified Inks, 50+ wash durability

Core Offerings:
1. Custom T-Shirts:
   - Crew neck, oversized drop-shoulder, polo t-shirts. 180 to 240 GSM 100% combed cotton.
2. Custom Hoodies & Sweatshirts:
   - 340 to 380 GSM heavyweight French Terry and cotton-fleece with kangaroo pockets and ribbed cuffs.
3. 3D Silicone Printing:
   - High-density dimensional relief up to 1.5mm thickness, velvety tactile handfeel, extreme stretch recovery.
4. DTF (Direct-to-Film) Digital Transfers:
   - 2400 DPI photographic resolution, vibrant CMYK+White, micro-dot precision on light and dark fabrics.
5. Caps, Bags & Corporate Merch:
   - Custom trucker caps, canvas tote bags, employee welcome kits, custom stickers and labels.

Turnaround & MOQ:
- Sample Pieces: Available from 1 piece
- Standard Turnaround: 24 to 48 Hours for dispatch
- Bulk Corporate Orders: 3 to 5 business days

Tone: Energetic, friendly, knowledgeable in textile printing, modern fashion, and merchandising.
`;

@Injectable({
  providedIn: 'root'
})
export class AiAssistantService {
  private get apiKey(): string {
    try {
      return typeof atob !== 'undefined'
        ? atob('QVEuQWI4Uk42S29INWREbVRjYU85WGFEcm91andmamM4VWxWSERYdVhuSW1FM0ZxQUJtdVE=')
        : '';
    } catch {
      return '';
    }
  }

  private readonly GEMINI_MODELS = ['gemini-flash-lite-latest', 'gemini-3.8-flash'];

  readonly isTyping = signal<boolean>(false);
  readonly isOpen = signal<boolean>(false);

  readonly messages = signal<ChatMessage[]>([
    {
      id: 'msg-welcome',
      role: 'model',
      text: 'Hello! 👋 I am **Brand Peoples AI**, your personal custom merchandise & apparel consultant.\n\nAsk me about designing **custom t-shirts & hoodies**, our **3D silicone printing**, **DTF digital transfers**, **fabric GSM**, or **bulk corporate pricing**!',
      timestamp: new Date(),
      status: 'received'
    }
  ]);

  toggleChat(): void {
    this.isOpen.update(open => !open);
  }

  openChat(): void {
    this.isOpen.set(true);
  }

  closeChat(): void {
    this.isOpen.set(false);
  }

  clearChat(): void {
    this.messages.set([
      {
        id: 'msg-welcome-' + Date.now(),
        role: 'model',
        text: 'Chat history cleared. How can I help you customize your apparel or merchandise today?',
        timestamp: new Date(),
        status: 'received'
      }
    ]);
  }

  async sendMessage(userText: string): Promise<void> {
    const trimmed = userText.trim();
    if (!trimmed || this.isTyping()) return;

    const userMessage: ChatMessage = {
      id: 'user-' + Date.now(),
      role: 'user',
      text: trimmed,
      timestamp: new Date(),
      status: 'sent'
    };

    this.messages.update(list => [...list, userMessage]);
    this.isTyping.set(true);

    try {
      await this.callGeminiApi(trimmed);
    } catch (error: any) {
      console.error('Error in AiAssistantService:', error);
      await this.simulateLocalResponse(trimmed);
    } finally {
      this.isTyping.set(false);
    }
  }

  private async callGeminiApi(latestUserMessage: string): Promise<void> {
    const contents = this.messages()
      .filter(m => m.status !== 'error')
      .map(m => ({
        role: m.role === 'user' ? 'user' : 'model',
        parts: [{ text: m.text }]
      }));

    const payload = {
      system_instruction: {
        parts: [{ text: BRANDPEOPLES_SYSTEM_INSTRUCTION }]
      },
      contents: contents,
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 800
      }
    };

    let lastError: Error | null = null;

    for (const model of this.GEMINI_MODELS) {
      try {
        const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${this.apiKey}`;
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        });

        if (response.ok) {
          const data = await response.json();
          const replyText = data?.candidates?.[0]?.content?.parts?.[0]?.text;

          if (replyText) {
            this.messages.update(list => [
              ...list,
              {
                id: 'model-' + Date.now(),
                role: 'model',
                text: replyText,
                timestamp: new Date(),
                status: 'received'
              }
            ]);
            return;
          }
        } else {
          const errJson = await response.json().catch(() => null);
          const errMsg = errJson?.error?.message || `HTTP ${response.status}`;
          lastError = new Error(errMsg);
        }
      } catch (err: any) {
        lastError = err;
      }
    }

    console.warn('Live Gemini API unavailable, using local knowledge base fallback:', lastError);
    await this.simulateLocalResponse(latestUserMessage);
  }

  private async simulateLocalResponse(query: string): Promise<void> {
    await new Promise(r => setTimeout(r, 400));

    const q = query.toLowerCase();
    let reply = '';

    if (q.includes('customizer') || q.includes('custom') || q.includes('design') || q.includes('editor')) {
      reply = `Our **Brand Peoples Online Customizer Studio** makes designing personalized gear effortless:\n\n` +
        `• **Garment Selection**: Choose from 100% bio-washed cotton tees, heavyweight hoodies, active dry-poly tees, and trucker caps.\n` +
        `• **Front & Back Views**: Preview your artwork in real-time from both angles.\n` +
        `• **Upload Artwork**: Supports PNG, SVG, and high-res JPEG with instant background removal assistance.\n` +
        `• **Print Technologies**: Choose between 2400 DPI DTF digital transfers or tactile 3D silicone printing.\n\n` +
        `Head over to our **Custom Studio** tab or click "Customize Now" on any product to start creating!`;
    } else if (q.includes('silicone') || q.includes('3d')) {
      reply = `Our **3D Silicone Printing** is the premier choice for luxury streetwear and activewear:\n\n` +
        `• **Tactile 3D Relief**: Raised print up to 1.5mm with sharp chamfered edges.\n` +
        `• **Unmatched Stretch**: 300% elasticity with zero micro-cracking on poly-spandex and cotton.\n` +
        `• **Velvety Handfeel**: Smooth, non-sticky matte finish that feels exceptional against the skin.\n` +
        `• **Wash Durability**: Certified for 50+ industrial washes without fading or peel.`;
    } else if (q.includes('dtf') || q.includes('heat transfer') || q.includes('gang sheet')) {
      reply = `Brand Peoples operates automated **DTF (Direct-to-Film) Digital Transfer Lines**:\n\n` +
        `• **Print Resolution**: 2400 DPI micro-piezo photographic clarity with CMYK + high-opacity White ink.\n` +
        `• **Fabric Versatility**: Bonds seamlessly to cotton, fleece, poly blends, twill, and denim.\n` +
        `• **Gang Sheets**: Available in 58cm rolls for clothing brands with same-day factory dispatch.`;
    } else if (q.includes('fabric') || q.includes('gsm') || q.includes('material') || q.includes('cotton')) {
      reply = `We use only export-grade, ethically sourced fabrics:\n\n` +
        `• **180 GSM Bio-Washed Cotton**: Lightweight, breathable, and soft for everyday wear.\n` +
        `• **240 GSM Heavyweight Combed Cotton**: Luxury structure with a slight oversized drop.\n` +
        `• **380 GSM French Terry Fleece**: Premium winter warmth with brushed cotton interior.\n` +
        `• **Eco Certified**: Pre-shrunk with OEKO-TEX Standard 100 approved dyes.`;
    } else if (q.includes('price') || q.includes('cost') || q.includes('rate') || q.includes('quote') || q.includes('bulk')) {
      reply = `Brand Peoples offers transparent, factory-direct pricing with tiered volume discounts:\n\n` +
        `• **Custom Tees**: Starting from ₹299 (bulk) / ₹499 (single custom piece).\n` +
        `• **Custom Heavyweight Hoodies**: Starting from ₹799 (bulk) / ₹999 (single custom piece).\n` +
        `• **Bulk Corporate & Merch Orders**: Substantial discounts on orders of 25+ and 100+ units.\n\n` +
        `💬 WhatsApp our factory merchandising team directly at [+91 9944107633](https://wa.me/919944107633) for an instant wholesale quote!`;
    } else if (q.includes('sample') || q.includes('swatch')) {
      reply = `We provide **Free Swatch & Sample Packs** for verified brands, buying houses, and corporate buyers:\n\n` +
        `• Includes real fabric strike-offs (180, 240 & 380 GSM).\n` +
        `• Real 3D silicone and DTF print samples for wash testing.\n` +
        `• Heat-press application instructions and shore hardness cards.\n\n` +
        `Message us on WhatsApp at [+91 9944107633](https://wa.me/919944107633) to claim your swatch kit!`;
    } else if (q.includes('contact') || q.includes('phone') || q.includes('whatsapp') || q.includes('address')) {
      reply = `Connect with Brand Peoples directly:\n\n` +
        `• **Factory Hub**: Anupparpalayam Pudur, Tamil Nadu 641652, India\n` +
        `• **WhatsApp / Direct Line**: [+91 9944107633](https://wa.me/919944107633) / [+91 9626876200](tel:9626876200)\n` +
        `• **Email**: [support@brandpeoples.com](mailto:support@brandpeoples.com)\n` +
        `• **Support Hours**: 24/7 online support with live chat.`;
    } else {
      reply = `Welcome to **Brand Peoples**! 🌟\n\n` +
        `We are India's custom apparel and on-demand printing destination. I can assist you with:\n\n` +
        `• Designing custom t-shirts, hoodies, and caps\n` +
        `• Exploring 3D silicone and DTF digital transfers\n` +
        `• Sizing, fabric GSM, and wash durability specs\n` +
        `• Requesting bulk corporate order quotes\n\n` +
        `How can I help you today?`;
    }

    this.messages.update(list => [
      ...list,
      {
        id: 'model-' + Date.now(),
        role: 'model',
        text: reply,
        timestamp: new Date(),
        status: 'received'
      }
    ]);
  }
}
