import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BodyComponent } from './body/body.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { AddHotelComponent } from './add-hotel/add-hotel.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/body'
  },
  {
    path: 'body',
    component: BodyComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:'detail',
    component: DetailComponent
  },
  {
    path: 'add-hotel',
    component: AddHotelComponent

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
