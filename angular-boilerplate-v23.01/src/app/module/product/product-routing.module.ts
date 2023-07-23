import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListHeadComponent } from './list/head/head.component';
import { ListToolbarComponent } from './list/toolbar/toolbar.component';

import { ListComponent } from './list/list.component';
import { ListCartComponent } from './list/action/cart/cart.component';
import { ListShippingComponent } from './list/action/shipping/shipping.component';

import { DetailHeadComponent } from './detail/head/head.component';
import { DetailToolbarComponent } from './detail/toolbar/toolbar.component';

import { DetailComponent } from './detail/detail.component';


const routes: Routes = [
  { path: 'product', component: ListComponent },
  { path: 'product/cart', component: ListCartComponent },
  { path: 'product/shipping', component: ListShippingComponent },
  { path: 'product/detail/:productId', component: DetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProductRoutingModule { }
