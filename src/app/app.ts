import { Component, AfterViewInit, OnDestroy, inject, PLATFORM_ID, NgZone } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AiAssistantWidgetComponent } from './components/ai-assistant-widget/ai-assistant-widget.component';
import { CartDrawerComponent } from './components/cart-drawer/cart-drawer.component';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    AiAssistantWidgetComponent,
    CartDrawerComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);
  private router = inject(Router);
  private ngZone = inject(NgZone);
  private observer?: IntersectionObserver;
  private routerSub?: Subscription;

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId) || typeof window === 'undefined') return;

    this.initObserver();

    // Reset scroll on navigation cleanly
    this.routerSub = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
        setTimeout(() => {
          this.observeElements();
        }, 60);
      });
  }

  ngOnDestroy(): void {
    this.routerSub?.unsubscribe();
    this.observer?.disconnect();
  }

  private initObserver(): void {
    if (typeof window === 'undefined') return;

    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll(
        '.scroll-reveal, .scroll-reveal-scale, .scroll-reveal-left, .scroll-reveal-right, .image-reveal, .letter-reveal, .image-motion-card'
      ).forEach(el => el.classList.add('in-view'));
      return;
    }

    this.ngZone.runOutsideAngular(() => {
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            this.observer?.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.05,
        rootMargin: '0px 0px 50px 0px'
      });

      this.observeElements();
    });
  }

  private observeElements(): void {
    if (!this.observer) return;
    const elements = document.querySelectorAll(
      '.scroll-reveal:not(.in-view), .scroll-reveal-scale:not(.in-view), .scroll-reveal-left:not(.in-view), .scroll-reveal-right:not(.in-view), .image-reveal:not(.in-view), .letter-reveal:not(.in-view), .image-motion-card:not(.in-view)'
    );
    elements.forEach(el => this.observer?.observe(el));
  }
}
