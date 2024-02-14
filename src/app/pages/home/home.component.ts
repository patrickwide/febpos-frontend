import { Component } from '@angular/core';
import { ProductDialogComponent } from '../../components/product-dialog/product-dialog.component';
import { ProductTableComponent } from '../../components/product-table/product-table.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductDialogComponent, ProductTableComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
