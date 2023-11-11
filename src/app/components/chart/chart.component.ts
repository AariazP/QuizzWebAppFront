import {Component, ElementRef, ViewChild} from '@angular/core';
import { Chart } from 'angular-highcharts';
import {GenerateComponentService} from "../../generate-component.service";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {

  generateComponentService: GenerateComponentService;

  constructor(generateComponentService: GenerateComponentService) {
    this.generateComponentService = generateComponentService;
  }

  lineChart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Estudiantes por materia'
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'Pacients admitted',
      data: [
        { name: 'January', y: 10, x:'January' },
        { name: 'February', y: 2 },
        { name: 'March', y: 3 },
        { name: 'April', y: 6 },
        { name: 'May', y: 9 },
        { name: 'June', y: 17 },
        { name: 'July', y: 20 },
        { name: 'August', y: 10 },
        { name: 'September', y: 5 },
        { name: 'October', y: 2 },
        { name: 'November', y: 16 }
      ]
    } as any]
  });




  pieChart = new Chart({
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Piechart'
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'Pacients admitted',
      data: [10, 2, 3, 6, 9, 17, 20, 10, 5, 2, 16]
    } as any]
  });


  addPDF() {
    this.generateComponentService.addChart(this.lineChart);
  }
}
