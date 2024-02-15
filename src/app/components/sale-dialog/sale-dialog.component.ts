import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SaleFormComponent } from '../sale-form/sale-form.component';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'app-sale-dialog',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  template: `
    <div class="flex justify-end my-4">
      <button mat-fab extended color="accent" (click)="openDialog()">
        <mat-icon>shopping_cart_checkout</mat-icon>
        Checkout
      </button>
    </div>
  `,
  styleUrl: './sale-dialog.component.css',
})
export class SaleDialogComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogElement);
  }
}

@Component({
  selector: 'dialog-elements-example-dialog',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButtonModule,
    MatIconModule,
    SaleFormComponent,
  ],
  templateUrl: './sale-dialog.component.html',
  styleUrl: './sale-dialog.component.css',
})
export class DialogElement {}
