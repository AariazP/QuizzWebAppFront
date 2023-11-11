import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {VistaAdminComponent} from "./components/admin/vista-admin/vista-admin.component";
import {EstudianteComponent} from "./components/estudiante/estudiante.component";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path:'administrador',
    component: VistaAdminComponent
  },
  {
    path:'estudiante',
    component: EstudianteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

