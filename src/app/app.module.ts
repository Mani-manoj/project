import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { AddComponent } from './add/add.component';
import { TvhomeComponent } from './tvhome/tvhome.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';
import { BudgetComponent } from './budget/budget.component';
import { FormsModule } from '@angular/forms';
// import { HomepageComponent } from '../home/homepage/homepage.component';
// import { HomeModule } from '../home/home.module';
// import { TwoComponent } from './two/two.component';

=======
import { RouterModule } from '@angular/router'
>>>>>>> 329a48bb75a3b1f8eb7a822508db918eee32e7f0

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    AddComponent,
    TvhomeComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    CardComponent,
    BudgetComponent,

    // SigninComponent
    // HomepageComponent
    
    
  
    // One1Component,
  // TwoComponent
=======
>>>>>>> 329a48bb75a3b1f8eb7a822508db918eee32e7f0
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
    

  ],
  providers: [],
  bootstrap:[AppComponent]

})
export class AppModule { }
