import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SalesComponent } from './pages/sales/sales.component';

export const routes: Routes = [
  { path: '', title: 'Home', component: HomeComponent },
  { path: 'sales', title: 'Sales', component: SalesComponent },
];
