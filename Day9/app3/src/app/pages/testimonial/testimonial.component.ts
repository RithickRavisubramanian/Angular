import { Component } from '@angular/core';
import { TestimonialService } from 'src/app/services/testimonial.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent {
  testimoniallist:any;
   constructor(private ts:TestimonialService){
    this.ts.getTestimonials().subscribe(
      {
        next:(data:any)=> this.testimoniallist = data,
        error:()=> this.testimoniallist=[]
      }
    )
   }
}
