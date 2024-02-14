import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

interface Category {
  value: number;
  viewValue: string;
}

interface Unit {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
  ],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css',
})
export class ProductFormComponent {
  categories: Category[] = [
    { value: 0, viewValue: 'Cement' },
    { value: 1, viewValue: 'Nails' },
    { value: 2, viewValue: 'Sheets' },
  ];

  units: Unit[] = [
    { value: 0, viewValue: 'kg(s)' },
    { value: 1, viewValue: 'Pack' },
    { value: 2, viewValue: 'Piece' },
  ];

  // Define properties for form data
  product: any = {
    name: '',
    category: '',
    selling_price: '',
    unit: '',
    description: '',
  };

  // Function to handle form submission
  onSubmit(): void {
    console.log('product: ', this.product);
  }

  // Function to reset the form
  resetForm(): void {
    this.product = {
      name: '',
      category: '',
      selling_price: '',
      unit: '',
      description: '',
    };
  }
}
