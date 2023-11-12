import { Component } from '@angular/core';
import {UsuarioActivoService} from "../../core/usuario-activo.service";

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent {

  id: number;

    constructor(private usuarioActivo: UsuarioActivoService) {
      this.id = usuarioActivo.getId();
    }




}
