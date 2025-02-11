import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TipDetailComponent } from './tip-detail/tip-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'tips/:slug',
    component: TipDetailComponent,
  },
];
