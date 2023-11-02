import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ChartModule} from "angular-highcharts";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
