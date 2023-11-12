import { Component } from '@angular/core';
import {Chart} from "angular-highcharts";
import {ApiConsumerService} from "../../core/api-consumer.service";
import {TemasDTO} from "../../DTO/temasDTO";

@Component({
  selector: 'app-temas-chart',
  templateUrl: './temas-chart.component.html',
  styleUrls: ['./temas-chart.component.css']
})
export class TemasChartComponent {



  public pieChart!: Chart;


  constructor(private apiConsumer: ApiConsumerService) {
    this.inicializarLineChart();
  }

  public inicializarLineChart(): void {

    this.apiConsumer.getThemes().subscribe(data => {
      const totalTemas = data.length;
      const porcentaje = 100 / totalTemas;

      const pieChartData = data.map((tema:any) => ({
        name: tema.nombreTema,
        y: porcentaje,
        description: tema.descripcion
      }));

      this.pieChart = new Chart({
        chart: {
          type: 'pie'
        },
        title: {
          text: 'Temas del estudiante'
        },
        credits: {
          enabled: false
        },
        series: [{
          name: 'Tema',
          data: pieChartData
        } as any],
        plotOptions: {
          pie: {
            innerSize: 100,
            depth: 45
          }
        },
      });
    });
  }


  makePDF() {
    if (this.pieChart && this.pieChart.ref) {
      // @ts-ignore
      this.pieChart.ref.exportChart({
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
