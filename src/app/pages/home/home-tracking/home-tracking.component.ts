import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'was-home-tracking',
  templateUrl: './home-tracking.component.html',
  styleUrls: ['./home-tracking.component.scss']
})
export class HomeTrackingComponent implements OnInit {
  data: any;

  constructor() { }

  ngOnInit() {
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Thu',
          data: [65, 59, 80, 81, 56, 55, 90],
          fill: false,
          borderColor: '#4bc0c0'
        },
        {
          label: 'chi phí',
          data: [28, 48, 40, 19, 86, 27, 50],
          fill: false,
          borderColor: '#565656'
        },
        {
          label: 'lợi nhuận',
          data: [37, 11, 40, 62, 30, 28, 50],
          fill: false,
          borderColor: '#000000'
        }
      ]
    };
  }

}
