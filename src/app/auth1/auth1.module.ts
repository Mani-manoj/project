import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Auth1RoutingModule } from './auth1-routing.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [],

  imports: [
    CommonModule,
    Auth1RoutingModule,
    LoginComponent
  ]
})
export class Auth1Module { }
