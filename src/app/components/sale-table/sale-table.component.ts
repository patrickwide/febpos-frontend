import { Component, inject } from '@angular/core';
import Sale from '../../interfaces/sale';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { SaleService } from '../../sale.service';
import { DatePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-sale-table',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, DatePipe, MatIconModule],
  templateUrl: './sale-table.component.html',
  styleUrl: './sale-table.component.css',
  providers: [SaleService, DatePipe],
})
export class SaleTableComponent {
  dataSource: Sale[] = [];

  saleService: SaleService = inject(SaleService);

  constructor() {
    this.saleService.getSales().subscribe((sales) => {
      this.dataSource = sales.map(
        (sale: {
          sub_total: number;
          sale_items: any[];
          vat_amount: number;
          vat: any;
          total_after_discount: number;
          discount: number;
          total: any;
        }) => {
          // Calculate sub_total
          sale.sub_total = sale.sale_items.reduce(
            (
              total: number,
              item: { product: { price: number }; quantity: number }
            ) => total + item.product.price * item.quantity,
            0
          );

          // Calculate vat_amount
          sale.vat_amount = sale.vat ? sale.sub_total * 0.15 : 0; // Assuming VAT is 15%

          // Calculate total_after_discount
          sale.total_after_discount = sale.sub_total - sale.discount;

          // Calculate total
          sale.total = sale.total_after_discount + sale.vat_amount;

          return sale;
        }
      );
    });
  }
}
