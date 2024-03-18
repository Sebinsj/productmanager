import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductslistComponent } from './productslist/productslist.component';
import { CreateproductComponent } from './createproduct/createproduct.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';

const routes: Routes = [
  {path:'',component:ProductslistComponent},
  {path:'productslist',component:ProductslistComponent},

  {path:'createproduct',component:CreateproductComponent},
  {path:'viewproduct',component:ViewproductComponent},
  {path:'editproduct/:id',component:EditproductComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
