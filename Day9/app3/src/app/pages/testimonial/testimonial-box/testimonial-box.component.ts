import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-testimonial-box',
  templateUrl: './testimonial-box.component.html',
  styleUrls: ['./testimonial-box.component.css']
})
export class TestimonialBoxComponent {
  @Input() feedback:any;
}
