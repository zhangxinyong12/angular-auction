import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
const routeConfig:Routes=[
  {path:'',component:HomeComponent},
  {path:'product/:prodId',component:ProductDetailComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routeConfig),

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
