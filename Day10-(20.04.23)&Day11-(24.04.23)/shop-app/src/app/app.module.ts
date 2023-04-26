import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { HomeBoxComponent } from './home/home-box/home-box.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PricefilterPipe } from './pipes/pricefilter.pipe';
import { TypefilterPipe } from './pipes/typefilter.pipe';
import { RouterModule } from '@angular/router';
import { MenubarComponent } from './menubar/menubar.component';
import { ComplaintsComponent } from './complaints/complaints.component'
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeBoxComponent,
    PricefilterPipe,
    TypefilterPipe,
    MenubarComponent,
    ComplaintsComponent,
    
    

  
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }