import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {VistaAdminComponent} from "./admin/vista-admin/vista-admin.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'admin',
    component: VistaAdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

