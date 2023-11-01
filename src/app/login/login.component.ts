import {Component, ElementRef, ViewChild} from '@angular/core';
import jsPDF from "jspdf";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @ViewChild('content', {static:false}) el!: ElementRef;
  makePDF() {
    let pdf = new jsPDF('p', 'pt', 'a4');
    pdf.html(this.el.nativeElement, {
      callback: (pdf) => {
        pdf.save("test.pdf");
      }
    });
  }
}
