import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { TestimonialComponent } from './pages/testimonial/testimonial.component';

const routes: Routes = [
    {path:"",component: HomeComponent},
    {path:"About", component: AboutComponent},
    {path: "Testimonial",component:TestimonialComponent},
    {path: "Contact", component:ContactComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }