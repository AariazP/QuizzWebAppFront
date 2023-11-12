import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { ApiConsumerService } from "../../core/api-consumer.service";
import * as Highcharts from 'highcharts';
import * as highchartsExporting from 'highcharts/modules/exporting';

// @ts-ignore
highchartsExporting(Highcharts);

@Component({
  selector: 'app-chart-admin',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {

  public lineChart!: Chart;

  constructor(private apiConsumer: ApiConsumerService) {
    this.inicializarLineChart();
  }

  public inicializarLineChart(): void {
    this.apiConsumer.getStudents().subscribe(data => {
      let names: string[] = [];
      for (let i = 0; i < data.length; i++) {
        names.push(data[i].name);
      }

      this.lineChart = new Chart({
        chart: {
          type: 'line'
        },
        title: {
          text: ' Notas de los estudiantes en los quizzes'
        },
        credits: {
          enabled: false
        },
        series: [{
          name: 'Estudiantes',
          data: data
        } as any],
        xAxis: {
          categories: names
        },
        yAxis: {
          title: {
            text: 'Nota'
          }
        }
      });
    });
  }

  makePDF() {
    if (this.lineChart && this.lineChart.ref) {
      // @ts-ignore
      this.lineChart.ref.exportChart({
        type: 'application/pdf',
      }, {
        chart: {
          backgroundColor: '#FFFFFF'
        },
        title: {
          style: {
            color: '#000000',
            font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
          }
        },
        subtitle: {
          style: {
            color: '#666666',
            font: 'bold 12px "Trebuchet MS", Verdana, sans-serif'
          }
        },
        xAxis: {
          labels: {
            style: {
              color: '#000000'
            }
          }
        },
        yAxis: {
          title: {
            style: {
              color: '#000000'
            }
          },
          labels: {
            style: {
              color: '#000000'
            }
          }
        },
        legend: {
          itemStyle: {
            font: '9pt Trebuchet MS, Verdana, sans-serif',
            color: 'black'
          },
          itemHoverStyle: {
            color: 'gray'
          }
        }
      });
    }
  }
}
