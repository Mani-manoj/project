import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard1.guard';
import { HeaderComponent } from './add/header/header.component';


const routes: Routes = [

  // {
  //   path:'',
  //   component:HeaderComponent
  // },
  // // lazy loading 
  // {
  //   path: '',
  //   loadChildren: () => import('./auth1/auth1.module').then(m => m.Auth1Module)
  // }

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
