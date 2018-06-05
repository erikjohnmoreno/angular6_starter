import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { PublicPagesComponent } from './public-pages.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: PublicPagesComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(ROUTES);