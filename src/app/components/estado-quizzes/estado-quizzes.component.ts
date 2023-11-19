import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { ApiConsumerService } from 'src/app/core/api-consumer.service';


@Component({
  selector: 'app-estado-quizzes',
  templateUrl: './estado-quizzes.component.html',
  styleUrls: ['./estado-quizzes.component.css']
})
export class EstadoQuizzesComponent {

  public pieChart!: Chart;
  public indexPieChart: number = 0;
  public infoLength: number = 0;
  public avg: number = 0;

  constructor(private apiConsumer: ApiConsumerService) {
    this.construirLineChart(this.indexPieChart);
  }
  
  construirLineChart(index: number) {
    
    this.apiConsumer.getQuizzesDocente().subscribe(data => {
      this.infoLength = data.length;
      console.log(data);
      let html: string = "";
      let estado = "Abierto";
      let hoy: Date = new Date();
      let color = "green";
      let entrega;
      for ( let i = index; i < index + 3; i++ ){
        entrega = data[i];
        estado = "Abierto";``
        color = "green";
        if ( entrega.fechaFin < hoy.toISOString().substring(0, 20) ) 
        {
          estado = "Cerrado";
          color = "red";
        }

        html += `<div style="margin: 2px">

        <span style="font-size: 20px; color: ${color}; margin-bottom: '7px';">Fecha Limite: ${entrega.fechaFin.split("T")[0]} - ${estado}</span><br>
                 <strong><span style="font-size: 18px; margin-bottom: '7px';">${entrega.Titulo}</span></strong><br>
                 <span style="font-size: 16px; margin-bottom: '7px';">entregas: ${entrega.estudiantesPresentados}</span><br><br><br>
                 </div>`;
      }
        this.pieChart = new Chart({
          title: {
            text: "Estado actual de los Quizzes"
          },
          subtitle: {
            useHTML: false,
            text: html,
            floating: true,
            verticalAlign: 'middle',
            y: 0,
            x: -80,
        }
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
    this.indexPieChart +=3*dir;
    
    if ( this.indexPieChart >= this.infoLength ) this.indexPieChart = this.infoLength - 1;
    if ( this.indexPieChart < 0 ) this.indexPieChart = 0;
    this.construirLineChart(this.indexPieChart);
  }
  
}
