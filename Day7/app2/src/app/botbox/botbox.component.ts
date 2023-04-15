import { Component,Input } from '@angular/core';


@Component({
  selector: 'app-botbox',
  templateUrl: './botbox.component.html',
  styleUrls: ['./botbox.component.css']
})
export class BotboxComponent {
  @Input() title:string = ""
  @Input() description:string = "OUR PRODUCT"
  @Input() servicelist:string [] =[]
  

}
