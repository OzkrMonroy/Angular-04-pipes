import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRouterModule } from './app-router.module';

import { AppComponent } from './app.component';
import { SalesModule } from './sales/sales.module';
import { SharedModule } from './shared/shared.module';

// Change our app's local
import es from '@angular/common/locales/es-GT';
import { registerLocaleData } from '@angular/common';

registerLocaleData(es)

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    SharedModule,
    SalesModule
  ],
  providers: [{
    provide: LOCALE_ID, useValue: 'es-GT'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
