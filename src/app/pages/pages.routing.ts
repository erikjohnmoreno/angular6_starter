import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { PagesComponent } from './pages.component';

export const ROUTES: Routes = [
  {
    path: 'pages',
    component: PagesComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(ROUTES);