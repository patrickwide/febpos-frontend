import { Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { SalesComponent } from './pages/sales/sales.component';

export const routes: Routes = [
  { path: '', title: 'Home', component: HomeComponent },
  { path: 'cart', title: 'Cart', component: CartComponent },
  { path: 'sales', title: 'Sales', component: SalesComponent },
];
