import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-drawer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="drawer-backdrop" [hidden]="!cart.isDrawerOpen()" (click)="cart.closeCart()">
      <aside class="drawer" (click)="$event.stopPropagation()">
        <button class="close" (click)="cart.closeCart()" aria-label="Close bag">×</button>
        <h2>Your bag</h2>

        <div id="cartItems" class="space-y-1">
          @if (cart.items().length > 0) {
            @for (item of cart.items(); track item.id; let i = $index) {
              <div class="cart-row">
                <div>
                  <b>{{ item.name }}</b>
                  <small>Qty: {{ item.qty }} &bull; {{ item.detail || 'Standard Specification' }}</small>
                </div>
                <div class="text-right">
                  <span>{{ item.price ? ('₹' + (item.price * item.qty)) : 'On request' }}</span>
                  <br>
                  <button (click)="cart.removeFromCart(i)">Remove</button>
                </div>
              </div>
            }
          } @else {
            <p class="muted py-8 text-center">Your bag is empty.</p>
          }
        </div>

        <div class="cart-total">
          <span>Estimated total</span>
          <b id="cartTotal">₹{{ cart.totalPrice() }}</b>
        </div>

        <button class="btn dark full" (click)="checkoutDemo()">
          Continue to Quote &amp; Dispatch
        </button>
        <p class="muted tiny text-center mt-3">
          Instant factory production spec generated. Dispatch SLA 24h &ndash; 48h.
        </p>
      </aside>
    </div>
  `
})
export class CartDrawerComponent {
  cart = inject(CartService);

  checkoutDemo(): void {
    const total = this.cart.totalPrice();
    const count = this.cart.cartCount();
    const itemsList = this.cart.items().map(it => `${it.qty}x ${it.name} (${it.detail || ''})`).join('%0A- ');
    const msg = `Hi Brand Peoples,%0A%0AI would like to place an order from your website:%0A- ${itemsList}%0A%0AEstimated Total: ₹${total}%0AItems: ${count}`;
    window.open(`https://wa.me/919944107633?text=${msg}`, '_blank');
  }
}
