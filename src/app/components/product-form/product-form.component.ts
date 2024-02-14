import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { CategoryService } from '../../category.service';
import { HttpClientModule } from '@angular/common/http';
import Category from '../../interfaces/category';
import Unit from '../../interfaces/unit';
import { UnitService } from '../../unit.service';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    HttpClientModule,
  ],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css',
  providers: [CategoryService],
})
export class ProductFormComponent {
  categories: Category[] = [];

  categoryService: CategoryService = inject(CategoryService);

  units: Unit[] = [];

  unitService: UnitService = inject(UnitService);

  constructor() {
    this.categoryService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });

    this.units = this.unitService.getUnits();
  }

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
