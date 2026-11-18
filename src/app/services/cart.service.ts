import { Injectable, signal, computed } from '@angular/core';

export interface CartItem {
  id: string;
  name: string;
  qty: number;
  price: number;
  detail?: string;
  shape?: string;
  color?: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private readonly STORAGE_KEY = 'brandpeoples-cart';

  items = signal<CartItem[]>(this.loadCart());
  isDrawerOpen = signal<boolean>(false);

  cartCount = computed(() => this.items().reduce((total, item) => total + item.qty, 0));
  totalPrice = computed(() => this.items().reduce((total, item) => total + (item.price * item.qty), 0));

  private loadCart(): CartItem[] {
    if (typeof localStorage !== 'undefined') {
      try {
        const saved = localStorage.getItem(this.STORAGE_KEY);
        if (saved) return JSON.parse(saved);
      } catch {
        // Fallback
      }
    }
    return [];
  }

  private saveCart(): void {
    if (typeof localStorage !== 'undefined') {
      try {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.items()));
      } catch {
        // Ignore storage errors
      }
    }
  }

  addToCart(item: CartItem): void {
    this.items.update(current => {
      const existing = current.find(i => i.id === item.id && i.detail === item.detail);
      if (existing) {
        return current.map(i => i === existing ? { ...i, qty: i.qty + item.qty } : i);
      }
      return [...current, item];
    });
    this.saveCart();
    this.openCart();
  }

  removeFromCart(index: number): void {
    this.items.update(current => current.filter((_, i) => i !== index));
    this.saveCart();
  }

  clearCart(): void {
    this.items.set([]);
    this.saveCart();
  }

  openCart(): void {
    this.isDrawerOpen.set(true);
  }

  closeCart(): void {
    this.isDrawerOpen.set(false);
  }

  toggleCart(): void {
    this.isDrawerOpen.update(v => !v);
  }
}
