import { Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ProductService } from '../../product.service';
import Product from '../../interfaces/product';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-product-table',
  standalone: true,
  imports: [MatTableModule, HttpClientModule],
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css'],
  providers: [ProductService],
})
export class ProductTableComponent {
  displayedColumns: string[] = [
    'product_name',
    'category',
    'price',
    'unit',
    'description',
    'action',
  ];
  dataSource: Product[] = [];

  productService: ProductService = inject(ProductService);

  constructor() {
    this.productService.getProducts().subscribe((products) => {
      this.dataSource = products;
    });
  }
}
