import { Component } from '@angular/core';
import {Chart} from "angular-highcharts";
import {ApiConsumerService} from "../../core/api-consumer.service";

@Component({
  selector: 'app-ponderado-chart',
  templateUrl: './ponderado-chart.component.html',
  styleUrls: ['./ponderado-chart.component.css']
})
export class PonderadoChartComponent {


  public barChart!: Chart;


  constructor(private apiConsumer: ApiConsumerService) {
    this.inicializarLineChart();
  }

  public inicializarLineChart(): void {
    this.apiConsumer.getAverage().subscribe(data => {

      console.log(data);

      this.barChart = new Chart({
        chart: {
          type: 'column'
        },
        title: {
          text: 'Promedio de notas'
        },
        xAxis: {
          categories: data.map((d: any) => d.nombreMateria)
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Notas'
          }
        },
        legend: {
          reversed: true
        },
        plotOptions: {
          series: {
            stacking: 'normal'
          }
        },
        series: [{
          name: 'Promedio',
          data: data.map((d: any) => d.ponderado)
        }] as any
      });
    });
  }

  makePDF() {
    if (this.barChart && this.barChart.ref) {
      // @ts-ignore
      this.barChart.ref.exportChart({
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
