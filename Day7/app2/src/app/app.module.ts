import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopboxComponent } from './topbox/topbox.component';
import { MidboxComponent } from './midbox/midbox.component';
import { BotboxComponent } from './botbox/botbox.component';

@NgModule({
  declarations: [
    AppComponent,
    TopboxComponent,
    MidboxComponent,
    BotboxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
