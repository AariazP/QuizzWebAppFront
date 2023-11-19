import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ChartModule} from "angular-highcharts";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ChartComponent } from './components/chart-admin/chart.component';
import { VistaAdminComponent } from './components/admin/vista-admin/vista-admin.component';
import { NavComponent } from './components/nav/nav.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { EstudianteComponent } from './components/estudiante/estudiante.component';
import { PonderadoChartComponent } from './components/ponderado-chart/ponderado-chart.component';
import { TemasChartComponent } from './components/temas-chart/temas-chart.component';
import { NotasChartComponent } from './components/notas-chart/notas-chart.component';
import { DocenteComponent } from './components/docente/docente.component';
import { ExamenesPerdidosComponent } from './components/examenes-perdidos/examenes-perdidos.component';
import { HistoricoNotasComponent } from './historico-notas/historico-notas.component';
import { EstadoQuizzesComponent } from './components/estado-quizzes/estado-quizzes.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChartComponent,
    VistaAdminComponent,
    NavComponent,
    EstudianteComponent,
    PonderadoChartComponent,
    TemasChartComponent,
    NotasChartComponent,
    DocenteComponent,
    ExamenesPerdidosComponent,
    HistoricoNotasComponent,
    EstadoQuizzesComponent,
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
