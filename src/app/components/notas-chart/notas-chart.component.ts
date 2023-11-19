import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { ApiConsumerService } from 'src/app/core/api-consumer.service';

@Component({
  selector: 'app-notas-chart',
  templateUrl: './notas-chart.component.html',
  styleUrls: ['./notas-chart.component.css']
})
export class NotasChartComponent {

  public barChart!: Chart;
  public indexBarChart: number = 10;
  public infoLength: number =100;

  constructor(private apiConsumer: ApiConsumerService) {
    this.construirLineChart(this.indexBarChart);
  }

  public construirLineChart(numeroBarChart: number): void {
    this.apiConsumer.getNotas().subscribe(info => {

      this.infoLength = info.length;

        if ( this.barChart ) {
            if (this.barChart.ref) {
            this.barChart.destroy();
          }
        }
        let data = info[numeroBarChart];
        if ( data.length ) {

          this.barChart = new Chart({
            chart: {
              type: 'column'
            },
            title: {
              text: data[0].nombreQuizz
            },
            xAxis: {
              categories: data.map((d: any) => d.id_estudiante)
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
              name: 'Nota',
              data: data.map((d: any) => d.nota)
            }] as any
          });

        }
      
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

  cambiarQuizz(dir: number){
    this.indexBarChart +=dir;
    
    if ( this.indexBarChart >= this.infoLength ) this.indexBarChart = this.infoLength - 2;
    if ( this.indexBarChart < 0 ) this.indexBarChart = 0;
    this.construirLineChart(this.indexBarChart);
  }

}
