import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoHeaderComponent } from './layouts/lo-header/lo-header.component';
import { LoFooterComponent } from './layouts/lo-footer/lo-footer.component';
import { CpHomeComponent } from './components/cp-home/cp-home.component';
import { CpBestSellerComponent } from './components/cp-best-seller/cp-best-seller.component';

@NgModule({
  declarations: [
    AppComponent,
    LoHeaderComponent,
    LoFooterComponent,
    CpHomeComponent,
    CpBestSellerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
