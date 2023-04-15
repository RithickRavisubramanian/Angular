import { Component } from '@angular/core';
import { datafields } from './appdata/appinfo';

 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  services:string[] = datafields.servicelist;

 descriptions:string[] =
 [ datafields.SEO,
   datafields.BRANDING,
   datafields.LOGO

]
dataitems=datafields;

}
