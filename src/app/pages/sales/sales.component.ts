import { Component } from '@angular/core';
import { SaleTableComponent } from '../../components/sale-table/sale-table.component';
@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [SaleTableComponent],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.css',
})
export class SalesComponent {}
