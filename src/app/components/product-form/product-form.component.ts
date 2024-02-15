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
import { ProductService } from '../../product.service';

import { MatDialogRef } from '@angular/material/dialog';
import { ProductCommunicationService } from '../../product-communication.service';

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
  providers: [CategoryService, UnitService, ProductService],
})
export class ProductFormComponent {
  categories: Category[] = [];

  categoryService: CategoryService = inject(CategoryService);

  units: Unit[] = [];

  unitService: UnitService = inject(UnitService);

  productService: ProductService = inject(ProductService);

  constructor(
    private dialogRef: MatDialogRef<ProductFormComponent>,
    private communicationService: ProductCommunicationService
  ) {
    this.categoryService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });

    this.units = this.unitService.getUnits();
  }

  // Define properties for form data
  product: any = {
    product_name: '',
    category_id: '',
    price: '',
    unit: '',
    description: '',
  };

  // Function to handle form submission
  onSubmit(): void {
    // console.log(this.product);

    if (
      this.product.product_name &&
      this.product.category_id &&
      this.product.price &&
      this.product.unit &&
      this.product.description
    ) {
      this.productService.createProduct(this.product).subscribe(
        (response) => {
          // console.log('Product created: ', response);
          this.resetForm();
          this.communicationService.productCreated.emit();
          this.dialogRef.close();
        },
        (error) => {
          console.error('Error creating product: ', error);
        }
      );
    } else {
      console.error('All fields must be filled!');
    }
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
