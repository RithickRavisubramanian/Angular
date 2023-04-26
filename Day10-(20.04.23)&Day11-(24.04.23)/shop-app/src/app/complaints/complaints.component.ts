import { Component } from '@angular/core';
import { ComplaintService } from '../services/complaint.service';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
  

export interface Prod {
  flag: string;
  name: string;
}
@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent {
  stateCtrl = new FormControl('');
  filteredStates: Observable<Prod[]>;

  pproducts: Prod[] = [
    {      
      "name": "Agnisiraguggal",
      "flag": "http://localhost/agni.jpg"
    },
    {      
      "name": "Iphone 14",
      "flag": "http://localhost/iphone.jpg"
    },
    {      
      "name": "Samsumg galaxy S23",
      "flag": "http://localhost/samsung.jpg"
    },
    {      
      "name": "Concealer",
      "flag": "http://localhost/concealer.jpg"
    },
    {      
      "name": "Foundation",
      "flag": "http://localhost/foundation.jpg"
    },
    {      
      "name": "Olive oil",
      "flag": "http://localhost/oliveoil.jpg"
    },
    {      
      "name": "Tomato sauce",
      "flag": "http://localhost/sauce.jpg"
    },
    {      
      "name": "Harry potter",
      "flag": "http://localhost/harry.jpg"
    }
    
  ];

  fname:any;
  email:any;
  message:any;
  product:any;
  errors:string[] = [];
  _filterStates: any;

  constructor(private cs:ComplaintService){
    this.filteredStates = this.stateCtrl.valueChanges.pipe(
      startWith(''),
      map(prod => (prod ? this._filterStates(prod) : this.pproducts.slice())),
    );
  }
  ngOnInit(): void {
  }
  submit(){
    this.errors=[]
    if(this.errors.length==0){
      let obj={
        id:Math.round(Math.random()*100000),
        fname: this.fname,
        email: this.email,
        message: this.message,
        product:this.product
      }
      this.cs.postComplaint(obj).subscribe({
        next:()=>{
          console.log(obj)
          alert("Your complaint is raised")
            this.fname="",
            this.email="",
            this.message="",
            this.product=""
          },
          error: ()=>alert("your complaint is raised")
        }
        )
      }
    }
}
