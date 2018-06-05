import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicPagesComponent } from '.';
import { routing } from './public-pages.routing';

const PAGES_COMPONENTS = [
]

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    PublicPagesComponent,
    ...PAGES_COMPONENTS
  ]
})

export class PublicPagesModule {}