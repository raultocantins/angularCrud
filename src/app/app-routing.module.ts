import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteComponent } from './components/product/delete/delete.component';

import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductReadComponent } from './components/product/product-read/product-read.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';


const routes: Routes = [
 {path:"",component:HomeComponent},
 {path:"products",component:ProductCrudComponent},
 {path:"products/create",component:ProductCreateComponent},
 {path:"products/update/:id",component:ProductUpdateComponent},
 {path:"products/delete/:id",component:DeleteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
