import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import CartItem from './interfaces/cartItem';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private itemsInCartSubject: BehaviorSubject<CartItem[]> = new BehaviorSubject<
    CartItem[]
  >(this.getInitialCart());

  private itemsInCart: CartItem[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.itemsInCartSubject.subscribe((_) => (this.itemsInCart = _));
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
    return this.itemsInCart.find((item) => item.id === id);
  }

  private storeCart(items: CartItem[]): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('cart', JSON.stringify(items));
    }
  }

  public addToCart(item: CartItem) {
    const existingItem = this.itemsInCart.find((_) => _.id === item.id);
    if (existingItem) {
      existingItem.quantity = item.quantity;
    } else {
      this.itemsInCart.push(item);
    }
    this.itemsInCartSubject.next(this.itemsInCart);
    this.storeCart(this.itemsInCart);
  }

  public removeFromCart(item: CartItem) {
    const updatedCart = this.itemsInCart.filter((_) => _.id !== item.id);
    this.itemsInCartSubject.next(updatedCart);
    this.storeCart(updatedCart);
  }

  public getItems(): Observable<CartItem[]> {
    return this.itemsInCartSubject.asObservable();
  }
}
