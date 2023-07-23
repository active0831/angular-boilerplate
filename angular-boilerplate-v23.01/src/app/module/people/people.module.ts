import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PeopleRoutingModule } from './people-routing.module';

import { AlertsComponent } from './component/alerts/alerts.component';

import { ListHeadComponent } from './list/head/head.component';
import { ListToolbarComponent } from './list/toolbar/toolbar.component';

import { ListComponent } from './list/list.component';
import { ListCartComponent } from './list/action/cart/cart.component';
import { ListShippingComponent } from './list/action/shipping/shipping.component';

import { DetailHeadComponent } from './detail/head/head.component';
import { DetailToolbarComponent } from './detail/toolbar/toolbar.component';

import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AlertsComponent,
    ListComponent,
    ListHeadComponent,
    ListToolbarComponent,
    ListComponent,
    ListCartComponent,
    ListShippingComponent,
    DetailComponent,
    DetailHeadComponent,
    DetailToolbarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    PeopleRoutingModule,
  ],
  providers: [],
  bootstrap: []
})
export class PeopleModule { }