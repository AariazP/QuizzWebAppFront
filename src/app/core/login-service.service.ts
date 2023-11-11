import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DtoLogin} from "../DTO/dtoLogin";
import {DtoLoginResponse} from "../DTO/dtoLoginResponse";
import {environmentDevelopment} from "../../enviroments/enviroment.development";

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private apiUrl:string = environmentDevelopment.apiUrl;
  private http:HttpClient;
  constructor(http:HttpClient) {
    this.http = http;
  }



  public login(dtoLogin:DtoLogin):Observable<DtoLoginResponse>{
    return this.http.post<DtoLoginResponse>(`${this.apiUrl}/login`, dtoLogin);
  }



}
