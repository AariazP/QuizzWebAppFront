import Swal from 'sweetalert2';
export class Alertas{

  public static mostrarAlertaError(titulo:string, mensaje:string):void{
    Swal.fire({
      title: "The Internet?",
      text: "That thing is still around?",
      icon: "question"
    }).then(r => {
        console.log(r);
    });
  }


}
