import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { ApiConsumerService } from '../core/api-consumer.service';

@Component({
  selector: 'app-historico-notas',
  templateUrl: './historico-notas.component.html',
  styleUrls: ['./historico-notas.component.css']
})
export class HistoricoNotasComponent {


  public pieChart!: Chart;
  public indexPieChart: number = 0;
  public infoLength: number = 0;
  public avg: number = 0;

  constructor(private apiConsumer: ApiConsumerService) {
    this.construirLineChart(this.indexPieChart);
  }
  
  construirLineChart(index: number) {

    this.apiConsumer.getNotasEstudiante().subscribe(data => {
      
      this.avg = data.reduce( (acc: number, notaInfo: {nota: number}) => {return acc+notaInfo.nota}, 0)/data.length;
      this.infoLength = data.length;
      let infoNota = data[index];
      let color = infoNota.nota >= 60 ? "green" : "red";
      let mensaje = infoNota.nota >= 60 ? "Aprobado" : "Reprobado";
        this.pieChart = new Chart({
          chart: {
            type: 'pie',
            plotBackgroundColor: undefined,
            plotBorderWidth: undefined,
            plotShadow: false
          },
          title: {
            text: ""
          },
          subtitle: {
            useHTML: false,
            text: `<span style="font-size: 75px; color: ${color}">${infoNota.nota}</span><br>
            <span style="font-size: 20px; color: ${color}">${mensaje}</span><br>
            <span style="font-size: 15px; color: ">promedio:${this.avg}</span>`,
            floating: true,
            verticalAlign: 'middle',
            y: 40
        },
          plotOptions: {
            pie: {
              innerSize: '80%', 
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                enabled: true, 
                format: '{point.percentage:.1f} %', 
                distance: -10 
              },
              showInLegend: true
            }
          },
          series: [{
            name: 'Puntos',
            colorByPoint: true,
            data: [{
              name: 'Aprobado',
              y: infoNota.nota
            }, {
              name: 'Desaprobado',
              y: 100-infoNota.nota
            }]
          } as any]
        });
      });
  }


  makePDF() {
    if (this.pieChart && this.pieChart.ref) {
      
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

  cambiarQuizz(dir: number){
    this.indexPieChart +=dir;
    
    if ( this.indexPieChart >= this.infoLength ) this.indexPieChart = this.infoLength - 2;
    if ( this.indexPieChart < 0 ) this.indexPieChart = 0;
    this.construirLineChart(this.indexPieChart);
  }
  
}
