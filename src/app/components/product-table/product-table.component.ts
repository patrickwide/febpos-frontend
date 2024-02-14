import { Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ProductService } from '../../product.service';
import Product from '../../interfaces/product';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { ProductCommunicationService } from '../../product-communication.service';

@Component({
  selector: 'app-product-table',
  standalone: true,
  imports: [MatTableModule, HttpClientModule, DatePipe],
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css'],
  providers: [ProductService, DatePipe],
})
export class ProductTableComponent {
  displayedColumns: string[] = [
    'created_at',
    'product_name',
    'category',
    'price',
    'unit',
    'description',
    'action',
  ];
  dataSource: Product[] = [];

  productService: ProductService = inject(ProductService);

  constructor(private communicationService: ProductCommunicationService) {
    this.productService.getProducts().subscribe((products) => {
      this.dataSource = products;
    });
  }

  // Add a method to update the table data
  updateTableData(): void {
    this.productService.getProducts().subscribe((products) => {
      this.dataSource = products;
    });
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.dataSource = products;
    });

    // Subscribe to the productCreated event
    this.communicationService.productCreated.subscribe(() => {
      this.updateTableData();
    });
  }
}
