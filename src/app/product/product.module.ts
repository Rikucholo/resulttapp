import {Routes,RouterModule, Router} from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';

const routes: Routes = [
  {
    path:"products",component:ProductComponent,
    children:[
      {path:'',component:ProductListComponent},
      {path:':productId',component:ProductDetailComponent},
    ]
  }
];

@NgModule({
  declarations: [
    ProductComponent,
   ProductDetailComponent,
   ProductListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  providers: [],
  bootstrap: []
})
export class ProductModule { }
