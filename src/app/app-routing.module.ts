import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './component/auth/auth.component';
import { StudentdashbordComponent } from './component/studentdashbord/studentdashbord.component';
import { TeacherdashbordComponent } from './component/teacherdashbord/teacherdashbord.component';
import { AuthguardGuard } from './authguard.guard';

const routes: Routes = [
  {
    path:'', component:AuthComponent
  },
  {
    path:'studentdashbord', canActivate:[AuthguardGuard], component:StudentdashbordComponent
  },
  {
    path:'teacherdashbord', canActivate:[AuthguardGuard], component:TeacherdashbordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
