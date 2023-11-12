import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioActivoService {

  private rol: string = '';
  private id: number = 0;

  constructor() { }


  public setRol(rol:string):void{
    this.rol = rol;
  }

  public getRol():string{
    return this.rol;
  }

  public setId(id:number):void{
    this.id = id;
  }

  public getId():number{
    return this.id;
  }
}
