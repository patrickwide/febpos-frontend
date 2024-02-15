import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import CartItem from './interfaces/cartItem';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private itemsInCart: CartItem[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.itemsInCart = this.getInitialCart();
  }

  private getInitialCart(): CartItem[] {
    if (isPlatformBrowser(this.platformId)) {
      const storedCart = localStorage.getItem('cart');
      return storedCart ? JSON.parse(storedCart) : [];
    } else {
      // Return an empty array if running on the server
      return [];
    }
  }

  public getItem(id: string): CartItem | undefined {
    this.itemsInCart = this.getInitialCart();
    return this.itemsInCart.find((item) => item.product_id === id);
  }

  public getItems(): CartItem[] {
    return this.getInitialCart();
  }

  private storeCart(items: CartItem[]): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('cart', JSON.stringify(items));
    }
  }

  public addToCart(item: CartItem) {
    this.itemsInCart = this.getInitialCart();
    console.log('Adding item:', item);

    const existingItem = this.itemsInCart.find(
      (existingItem) => existingItem.product_id === item.product_id
    );

    if (existingItem) {
      console.log('Item exists in cart, updating quantity');
      existingItem.quantity = item.quantity;
    } else {
      console.log('Item not in cart, adding new item');
      this.itemsInCart.push(item);
    }

    console.log('Items in cart:', this.itemsInCart);
    this.storeCart(this.itemsInCart);
  }

  public removeFromCart(item: CartItem) {
    this.itemsInCart = this.getInitialCart();
    console.log('Removing item:', item);
    const updatedCart = this.itemsInCart.filter(
      (existingItem) => existingItem.product_id !== item.product_id
    );
    console.log('Updated cart:', updatedCart);
    this.storeCart(updatedCart);
  }

  public resetCart(): void {
    this.itemsInCart = [];
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('cart');
    }
  }
}
