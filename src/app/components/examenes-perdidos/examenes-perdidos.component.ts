import { Component, numberAttribute } from '@angular/core';
import { Chart } from 'angular-highcharts';
import * as Highcharts from 'highcharts';
import { ApiConsumerService } from 'src/app/core/api-consumer.service';



@Component({
  selector: 'app-examenes-perdidos',
  templateUrl: './examenes-perdidos.component.html',
  styleUrls: ['./examenes-perdidos.component.css']
})
export class ExamenesPerdidosComponent {

  public barChart!: Chart;
  public indexBarChart: number = 20;

  
  constructor(private apiConsumer: ApiConsumerService) {
    this.construirLineChart(this.indexBarChart);
    
  }

  public construirLineChart(numeroBarChart: number): void {

    this.apiConsumer.getNotas().subscribe(data => {
      

      let categorias: any = {};
      let cnt = 0;
      let indiceInferior = 10;
      for( let notas of data ) {
        
          
          if ( notas.length > 0 ){
            categorias[notas[0].id_quizz] = {perdidos: 0, total: 0, nombreQuizz: notas[0].nombreQuizz};
            for ( let nota of notas ){
              categorias[notas[0].id_quizz].perdidos += nota.nota < 60 ? 1:0;
              categorias[notas[0].id_quizz].total +=1;
            }
          }
        
        cnt++
      }


    this.barChart = new Chart({
      chart: {
          type: 'bar'
      },
      title: {
          text: 'Examenes perdidos por parcial'
      },
      xAxis: {
          categories: Object.keys(categorias).map(id => categorias[id].nombreQuizz)
      },
      yAxis: {
          min: 0,
          title: {
              text: 'Porcentaje'
          }
      },
      legend: {
          reversed: true
      },
      plotOptions: {
          series: {
              stacking: 'normal',
              dataLabels: {
                  enabled: true
              }
          }
      },
      series: [{
        name: 'Ganados',
        data: Object.keys(categorias).map( (id_quizz)=>{
          let examen =  categorias[id_quizz];
          return ( examen.total - examen.perdidos ) / examen.total *100;
        }),
        type: 'bar' 
      }, {
        name: 'Perdidos',
        data: Object.keys(categorias).map( (nombre_quizz)=>{
          let examen =  categorias[nombre_quizz];
          return examen.perdidos / examen.total * 100 ;
        }),
        type: 'bar'
      }]
  });
});
  
  }


  makePDF() {
    if (this.barChart && this.barChart.ref) {
      
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
    this.construirLineChart(this.indexBarChart);
  }

}
