import { Injectable } from '@angular/core';
import {environmentDevelopment} from "../../enviroments/enviroment.development";
import {HttpClient} from "@angular/common/http";
import {DtoLogin} from "../DTO/dtoLogin";
import {map, Observable} from "rxjs";
import {DtoLoginResponse} from "../DTO/dtoLoginResponse";

@Injectable({
  providedIn: 'root'
})
export class ApiConsumerService {

  private apiUrl:string = environmentDevelopment.apiUrl;
  constructor(private http:HttpClient) {
  }


  public getStudentsData(): Observable<{ names: string[], notes: number[] }> {
    return this.http.get(`${this.apiUrl}/administrador/presentacionQuizz`).pipe(
      map((data: any) => {
        const names = data.map((estudiante: any) => estudiante.nombre);
        const notes = data.map((estudiante: any) => estudiante.calificacion);
        return { names, notes };
      })
    );
  }
}
