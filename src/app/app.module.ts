import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';
import es from '@angular/common/locales/es';
import fr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';


registerLocaleData(es);
registerLocaleData(fr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRouterModule,
    VentasModule

  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
