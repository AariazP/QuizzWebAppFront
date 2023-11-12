import { Injectable } from '@angular/core';
import {environmentDevelopment} from "../../enviroments/enviroment.development";
import {HttpClient} from "@angular/common/http";
import {DtoLogin} from "../DTO/dtoLogin";
import {Observable} from "rxjs";
import {DtoLoginResponse} from "../DTO/dtoLoginResponse";

@Injectable({
  providedIn: 'root'
})
export class ApiConsumerService {

  private apiUrl:string = environmentDevelopment.apiUrl;
  private http:HttpClient;
  constructor(http:HttpClient) {
    this.http = http;
  }
  public login(dtoLogin:DtoLogin):Observable<DtoLoginResponse>{
    return this.http.post<DtoLoginResponse>(`${this.apiUrl}/login`, dtoLogin);
  }


  getStudents(): Observable<any> {
    return this.http.get(`${this.apiUrl}/administrador/presentacionQuizz`);
  }

}
