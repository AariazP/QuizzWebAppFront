import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ChartModule} from "angular-highcharts";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ChartComponent } from './chart/chart.component';
import { VistaAdminComponent } from './admin/vista-admin/vista-admin.component';
import { NavComponent } from './nav/nav.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChartComponent,
    VistaAdminComponent,
    NavComponent
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
