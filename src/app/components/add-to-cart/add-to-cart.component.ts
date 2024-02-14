import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../../cart.service';
import CartItem from '../../interfaces/cartItem';
import { FormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-add-to-cart',
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  templateUrl: './add-to-cart.component.html',
  styleUrl: './add-to-cart.component.css',
  providers: [CartService],
})
export class AddToCartComponent implements OnInit {
  @Input() item!: CartItem;
  inCart = false;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    const itemInCart = this.cartService.getItem(this.item.id);
    if (itemInCart) {
      this.item = itemInCart;
      this.inCart = true;
    }
  }

  addToCart() {
    this.item.quantity++;
    this.cartService.addToCart(this.item);
    this.inCart = true;
  }

  increaseQuantity() {
    this.item.quantity++;
  }

  decreaseQuantity() {
    this.item.quantity--;
    if (this.item.quantity === 0) {
      this.cartService.removeFromCart(this.item);
      this.inCart = false;
    }
  }
}
