import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { PublicPagesModule } from './public-pages/public-pages.module';
import { routing } from './app.routing';

// VALIDATORS
import { EqualPasswordsValidator } from './validators';

const UTILITY_SERVICES = [

]

const API_SERVICES = [

]

const RESOLVERS = [

]

const THIRD_PARTY_APPS = [

]

const VALIDATORS = [
  EqualPasswordsValidator
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    PagesModule,
    PublicPagesModule,
    ...THIRD_PARTY_APPS
  ],
  providers: [
    ...UTILITY_SERVICES,
    ...API_SERVICES,
    ...RESOLVERS,
    ...VALIDATORS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
