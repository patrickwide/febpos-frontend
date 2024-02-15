import { Component, inject, OnInit } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import { SaleService } from '../../sale.service';
import { MatDialogRef } from '@angular/material/dialog';
import { CartService } from '../../cart.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sale-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatCheckboxModule,
    FormsModule,
    MatButtonModule,
  ],
  providers: [provideNativeDateAdapter(), SaleService, CartService, DatePipe],
  templateUrl: './sale-form.component.html',
  styleUrl: './sale-form.component.css',
})
export class SaleFormComponent implements OnInit {
  today = new Date();

  saleService: SaleService = inject(SaleService);

  sale: any = {
    sale_date: '',
    vat: true,
    discount: 0,
    items: [],
  };

  constructor(
    private dialogRef: MatDialogRef<SaleFormComponent>,
    private cartService: CartService,
    private datePipe: DatePipe,
    private router: Router
  ) {}

  ngOnInit() {
    const items = this.cartService.getItems();
    if (items) {
      // console.log(items);
      this.sale.items = items;
    }
  }

  onSubmit(): void {
    // Format the sale_date before sending
    this.sale.sale_date = this.datePipe.transform(
      this.sale.sale_date,
      'yyyy-MM-dd HH:mm:ss'
    );

    // Remove properties with null or empty values
    this.sale = Object.fromEntries(
      Object.entries(this.sale).filter(
        ([key, value]) => value != null && value !== ''
      )
    );

    // console.log(this.sale);
    this.saleService.createSale(this.sale).subscribe(
      (response) => {
        console.log('Sale created: ', response);
        this.resetForm();
        this.dialogRef.close();
        this.cartService.resetCart();
        this.router.navigate(['/sales']);
      },
      (error) => {
        console.error('Error creating product: ', error);
      }
    );
  }

  resetForm(): void {
    this.sale = {
      sale_date: '',
      vat: true,
      discount: '',
      items: [],
    };
  }
}
