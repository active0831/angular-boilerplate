import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LandingPageComponent } from '../app/landing-page/landing-page.component';

import { LeftBarComponent } from './layout/left-bar/left-bar.component';
import { RightBarComponent } from './layout/right-bar/right-bar.component';
import { MainComponent } from './layout/main/main.component';
import { TopBarComponent } from './layout/top-bar/top-bar.component';
import { FooterComponent } from './layout/footer/footer.component';

import { AppRoutingModule } from './app-routing.module';
import { ProductModule } from './module/product/product.module';
import { PeopleModule } from './module/people/people.module';

@NgModule({
  declarations: [
    AppComponent,
    LeftBarComponent,
    RightBarComponent,
    MainComponent,
    LandingPageComponent,
    TopBarComponent,
    FooterComponent,
  ],
  imports: [
    ProductModule,
    PeopleModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }