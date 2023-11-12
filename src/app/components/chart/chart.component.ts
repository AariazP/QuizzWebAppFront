import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Chart } from 'angular-highcharts';
import {GenerateComponentService} from "../../core/generate-component.service";
import {ApiConsumerService} from "../../core/api-consumer.service";
import {Point} from "highcharts/dashboards/es-modules/Dashboards/Plugins/HighchartsTypes";



@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit{


  constructor(private generateComponentService: GenerateComponentService, private apiConsumer: ApiConsumerService) {

  }

  ngOnInit() {
    this.apiConsumer.getStudentsData().subscribe(data => {
      const seriesData = data.names.map((name, index) => ({ name, y: data.notes[index] }));

      this.lineChart.addSeries({
        name: 'Estudiantes',
        data: seriesData,
        type: 'line',
      } as any, true, true);

      
    }

    );


  }

  lineChart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Notas de estudiantes'
    },
    subtitle: {
      text: 'Source: ' +
        '<a href="https://es.wikipedia.org/wiki/Calificación_escolar#:~:text=En%20las%20escuelas%20primarias%20las,y' +
        '%20el%205%20la%20peor.&text=Para%20aprobar%20el%20curso%20y,volver%20a%20cursar%20el%20grado. ' +
        'target="_blank">Wikipedia.com</a>'
    },
    yAxis: {
      title: {
        text: 'Notas'
      }
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: true
        },
        enableMouseTracking: false
      }
    }
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
