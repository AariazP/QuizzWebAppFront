import { Component } from '@angular/core';
import { UsuarioActivoService } from 'src/app/core/usuario-activo.service';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.css']
})
export class DocenteComponent {

  id: number;

  constructor(private usuarioActivo: UsuarioActivoService) {
    this.id = usuarioActivo.getId();
  }

}
