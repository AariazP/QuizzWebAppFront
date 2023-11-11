import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Alertas} from "../utils/alertas";
import {LoginServiceService} from "../core/login-service.service";
import {DtoLogin} from "../DTO/dtoLogin";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public iniciarSesionForm!:FormGroup;

  constructor(private fb:FormBuilder, private loginService:LoginServiceService) {
    this.iniciarSesionForm = fb.group({
      correo: [''],
      contrasenia: ['']
    })
  }


  public iniciarSesion() :void{

    let dtoLogin:DtoLogin = {
      correo: this.iniciarSesionForm.get('correo')?.value,
      password: this.iniciarSesionForm.get('contrasenia')?.value
    }

    this.loginService.login(dtoLogin).subscribe(

      (response) => {
        console.log(response);
      },
      (error) => {
        Alertas.mostrarAlertaError(error.error.Error, "Error");
      }

    );
  }

}
