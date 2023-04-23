import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { HomeBoxComponent } from './home/home-box/home-box.component';
import { FormsModule } from '@angular/forms';
import { PricefilterPipe } from './pipes/pricefilter.pipe';
import { TypefilterPipe } from './pipes/typefilter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeBoxComponent,
    PricefilterPipe,
    TypefilterPipe,
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }