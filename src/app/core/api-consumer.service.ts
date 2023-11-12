import { Injectable } from '@angular/core';
import {environmentDevelopment} from "../../enviroments/enviroment.development";
import {HttpClient} from "@angular/common/http";
import {DtoLogin} from "../DTO/dtoLogin";
import {Observable} from "rxjs";
import {DtoLoginResponse} from "../DTO/dtoLoginResponse";
import {UsuarioActivoService} from "./usuario-activo.service";

@Injectable({
  providedIn: 'root'
})
export class ApiConsumerService {

  private apiUrl:string = environmentDevelopment.apiUrl;
  constructor( private http:HttpClient, private usuarioActivo: UsuarioActivoService) {
  }
  public login(dtoLogin:DtoLogin):Observable<DtoLoginResponse>{
    return this.http.post<DtoLoginResponse>(`${this.apiUrl}/login`, dtoLogin);
  }


  getStudents(): Observable<any> {
    return this.http.get(`${this.apiUrl}/administrador/presentacionQuizz`);
  }

  getAverage(): Observable<any> {
    return this.http.get(`${this.apiUrl}/estudiante/ponderado/${this.usuarioActivo.getId()}`);
  }

  getThemes(): Observable<any> {
    return this.http.get(`${this.apiUrl}/estudiante/temas/${this.usuarioActivo.getId()}`);
  }
}
