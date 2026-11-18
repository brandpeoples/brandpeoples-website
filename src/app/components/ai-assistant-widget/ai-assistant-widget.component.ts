import { 
  Component, 
  inject, 
  signal, 
  ViewChild, 
  ElementRef, 
  AfterViewChecked 
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AiAssistantService, ChatMessage } from '../../services/ai-assistant.service';

@Component({
  selector: 'app-ai-assistant-widget',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ai-assistant-widget.component.html',
  styleUrl: './ai-assistant-widget.component.css'
})
export class AiAssistantWidgetComponent implements AfterViewChecked {
  protected readonly aiService = inject(AiAssistantService);

  @ViewChild('chatScrollContainer') private chatScrollContainer?: ElementRef<HTMLDivElement>;

  protected userInput = signal<string>('');
  protected showTooltip = signal<boolean>(true);
  private shouldScrollToBottom = false;

  protected readonly quickChips = [
    { label: '👕 Custom T-Shirt Studio', query: 'How do I customize a t-shirt with my own design and logo?' },
    { label: '🧥 380 GSM Heavyweight Hoodies', query: 'Tell me about your custom hoodies, fabric GSM, and thermo-emboss.' },
    { label: '✨ 3D Silicone Printing', query: 'What are the specifications of your 3D silicone printing?' },
    { label: '⚡ DTF Digital Transfers', query: 'How does DTF digital transfer work and what fabrics does it support?' },
    { label: '📦 Free Swatch Pack', query: 'How can I get a free fabric and print swatch pack sent to my unit?' },
    { label: '💬 Bulk Corporate Quotes', query: 'What are your wholesale rates and turnaround for bulk corporate orders?' }
  ];

  ngAfterViewChecked(): void {
    if (this.shouldScrollToBottom) {
      this.scrollToBottom();
      this.shouldScrollToBottom = false;
    }
  }

  toggleChat(): void {
    this.aiService.toggleChat();
    this.showTooltip.set(false);
    if (this.aiService.isOpen()) {
      this.shouldScrollToBottom = true;
    }
  }

  dismissTooltip(event: MouseEvent): void {
    event.stopPropagation();
    this.showTooltip.set(false);
  }

  clearHistory(): void {
    this.aiService.clearChat();
  }

  async sendQuery(queryText?: string): Promise<void> {
    const textToSend = queryText || this.userInput();
    if (!textToSend.trim() || this.aiService.isTyping()) return;

    this.userInput.set('');
    this.shouldScrollToBottom = true;
    await this.aiService.sendMessage(textToSend);
    this.shouldScrollToBottom = true;
  }

  handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendQuery();
    }
  }

  private scrollToBottom(): void {
    try {
      if (this.chatScrollContainer?.nativeElement) {
        const el = this.chatScrollContainer.nativeElement;
        el.scrollTop = el.scrollHeight;
      }
    } catch {
      // Ignore scroll failures
    }
  }

  formatMessage(text: string): string {
    if (!text) return '';

    let safe = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    safe = safe.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-[#202024]">$1</strong>');
    safe = safe.replace(/\*(.*?)\*/g, '<em class="italic text-[#777780]">$1</em>');
    safe = safe.replace(
      /\[(.*?)\]\((https?:\/\/.*?)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-[#b45b3d] font-bold underline hover:text-[#9e4e33]">$1</a>'
    );
    safe = safe.replace(/\n/g, '<br/>');

    return safe;
  }
}
