import { Component } from '@angular/core';

export interface PeriodicElement {
  price: number;
  period: number;
  number: number;
  result: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {period: 20230918479, price: 60056, number: 0, result: 'red'},
  {period: 20230918478, price: 60056, number: 0, result: 'red'},
  {period: 20230918477, price: 60056, number: 0, result: 'green'},
  {period: 20230918476, price: 60056, number: 0, result: 'red'},
  {period: 20230918475, price: 60056, number: 0, result: 'green'},
  {period: 20230918474, price: 60056, number: 0, result: 'green'},
  {period: 20230918473, price: 60056, number: 0, result: 'red'},
  {period: 20230918472, price: 60056, number: 0, result: 'red'},
  {period: 20230918471, price: 60056, number: 0, result: 'red'},
  {period: 20230918470, price: 60056, number: 0, result: 'green'},
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'colors-predictor';
  loading: boolean = true;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}
