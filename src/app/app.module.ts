import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ChartModule} from "angular-highcharts";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ChartComponent } from './components/chart/chart.component';
import { VistaAdminComponent } from './components/admin/vista-admin/vista-admin.component';
import { NavComponent } from './components/nav/nav.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { EstudianteComponent } from './components/estudiante/estudiante.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChartComponent,
    VistaAdminComponent,
    NavComponent,
    EstudianteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
