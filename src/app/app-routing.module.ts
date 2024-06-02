import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',
    component:NavBarComponent,
    children:[
      {
        path:'',
        redirectTo:'report',
        pathMatch:'full'
      },
      {
        path:'report',
        component:HomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
