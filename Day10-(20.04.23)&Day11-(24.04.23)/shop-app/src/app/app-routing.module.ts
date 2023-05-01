import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { DetailsComponent } from './home/details/details.component';
import { CommonModule } from '@angular/common';
import { HomeBoxComponent } from './home/home-box/home-box.component';





const routes: Routes = [
  {path:"",component:HomeComponent },
  {path:"complaints", component: ComplaintsComponent},  
  {path:":id", component:DetailsComponent},
  {path:"products/:id",component:HomeBoxComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
    CommonModule]

})
export class AppRoutingModule { }
