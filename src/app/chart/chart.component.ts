import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {


  lineChart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Linechart'
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'Pacients admitted',
      data: [10, 2, 3, 6, 9, 17, 20, 10, 5, 2, 16]
    } as any]
  });
  pieChart = new Chart({});
}
