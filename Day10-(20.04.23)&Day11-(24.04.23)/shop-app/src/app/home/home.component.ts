import { Component } from '@angular/core';
import { ProductService } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  types=[
    "All",
    "Electronics",
    "Books",
    "Groceries",
    "Cosmetics"
  ]
  selected="All";
  productlist:any;
  min_v=100;
  max_v=10000;
  constructor(ps:ProductService){
    ps.getProducts().subscribe(
      {
        next: (data:any) => this.productlist = data,
        error:()=>this.productlist = []
      }
    )
  }
  

}
