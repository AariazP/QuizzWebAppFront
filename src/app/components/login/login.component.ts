import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Alertas} from "../../utils/alertas";
import {LoginServiceService} from "../../core/login-service.service";
import {DtoLogin} from "../../DTO/dtoLogin";
import {DtoLoginResponse} from "../../DTO/dtoLoginResponse";
import {Router} from "@angular/router";
import {UsuarioActivoService} from "../../core/usuario-activo.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public iniciarSesionForm!:FormGroup;

  constructor(private fb:FormBuilder, private loginService:LoginServiceService, private router:Router,
              private usuarioActivo:UsuarioActivoService) {
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

      (response:DtoLoginResponse) => {

        this.usuarioActivo.setId(response.id);
        this.usuarioActivo.setRol(response.rol);

        if(response.rol == 'Estudiante'){
          this.router.navigate(['/estudiante'])
        }
        else if(response.rol == 'Administrador'){
          this.router.navigate(['/administrador'])
        }
        else if(response.rol == 'Docente'){
          this.router.navigate(['/docente'])
        }


      },
      (error) => {
        Alertas.mostrarAlertaError(error.error.Error, "Error");
      }

    );
  }

}
