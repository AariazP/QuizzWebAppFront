import Swal from 'sweetalert2';
export class Alertas{

  public static mostrarAlertaError(titulo:string, mensaje:string):void{
    Swal.fire({
      title: mensaje,
      text: titulo,
      icon: "question"
    }).then();
  }


}
