import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { TvhomeComponent } from './tvhome/tvhome.component';
import { HomepageComponent } from '../home/homepage/homepage.component';
import { AuthGuard } from './guard1.guard';

const routes: Routes = [
  {
    path:'',
    component:AddComponent
  },
  {
    path:'tv-home',
    component:TvhomeComponent
  },
  {
    path: 'homepage',
    loadChildren: () => import('../home/home.module').then(m => m.HomeModule), 
    canActivate: [AuthGuard]
  },

  {
    path: 'auth',
    loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
