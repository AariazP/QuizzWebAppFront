import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Alertas} from "../utils/alertas";
import {LoginServiceService} from "../core/login-service.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public iniciarSesionForm!:FormGroup;
  public loginService!:LoginServiceService;

  constructor(fb:FormBuilder, loginService:LoginServiceService) {
    this.iniciarSesionForm = fb.group({
      correo: [''],
      contrasenia: ['']
    })
    this.loginService = loginService;
  }


  public iniciarSesion() :void{

    Alertas.mostrarAlertaError("Error", "Error");

    console.log(this.iniciarSesionForm.get('correo')?.value);

    console.log(this.iniciarSesionForm.get('contrasenia')?.value);

    let dtoLogin = {
      correo: this.iniciarSesionForm.get('correo')?.value,
      contrasenia: this.iniciarSesionForm.get('contrasenia')?.value
    }

    this.loginService.login(dtoLogin).subscribe(

      (response) => {
        console.log(response);
      },
      (error) => {
        Alertas.mostrarAlertaError(error.error.Error.toString(), "Error");
      }

    );
  }

}
