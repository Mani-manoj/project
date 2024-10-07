import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { TvhomeComponent } from './tvhome/tvhome.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';
// import { HomepageComponent } from '../home/homepage/homepage.component';
// import { HomeModule } from '../home/home.module';
// import { TwoComponent } from './two/two.component';


@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    TvhomeComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    CardComponent,
    // SigninComponent
    // HomepageComponent
    
    
  
    // One1Component,
  // TwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
    

  ],
  providers: [],
  bootstrap:[AppComponent]

})
export class AppModule { }
