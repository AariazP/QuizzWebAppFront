import {ElementRef, Injectable, ViewChild} from '@angular/core';
import jsPDF from "jspdf";
import * as html2canvas from "html2canvas";

@Injectable({
  providedIn: 'root'
})
export class GenerateComponentService {

  @ViewChild('chart', { static: false }) chartRef!: ElementRef;
  doc: jsPDF;
  constructor() {
    this.doc = new jsPDF();
  }

  public addChart( chart: any) {
    const chartElement = this.chartRef.nativeElement;
    // @ts-ignore
    html2canvas(chartElement).then(canvas => {
      const chartDataUrl = canvas.toDataURL('image/png');
      this.doc.addImage(chartDataUrl, 'PNG', 10, 10, 180, 100); // Adjust size and position as needed

    });
  }


  generatePDF() {
    this.doc.save('chart.pdf');


  }
}
