import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Chart } from 'angular-highcharts';
import {GenerateComponentService} from "../../core/generate-component.service";
import {ApiConsumerService} from "../../core/api-consumer.service";



@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {

  public lineChart!: Chart;

  constructor(private generateComponentService: GenerateComponentService, private apiConsumer: ApiConsumerService) {
      this.inicializarLineChart();
  }


  public inicializarLineChart(): void {
    this.apiConsumer.getStudents().subscribe(data => {
      this.lineChart = new Chart({
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
          data: data
        } as any]
      });
    });
  }





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
