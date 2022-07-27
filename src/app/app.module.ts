import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { AppRouterModule } from './app-router.module';
import { PrimeNgModule } from './prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PrimeNgModule,
    SharedModule,
    AppRouterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
