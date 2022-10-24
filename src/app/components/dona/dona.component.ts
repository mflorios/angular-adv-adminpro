import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ChartData, ChartDataset, ChartEvent, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    this.doughnutChartData = {
      labels: this.doughnutChartLabels,
      datasets: [{data: this.dataSets}]
    }
  }
  @Input() titulo!: string;
  // @Input() labels: string[] = [];
  @Input() dataSets!: number[];




  @Input('labels') doughnutChartLabels: string[] = ['label 1', 'label 2', 'label 3'] ;

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: [...this.doughnutChartLabels],
     datasets: [
      { data: this.dataSets, backgroundColor: ['#6857E6','#009FEE', '#F02059'] }

    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

}
