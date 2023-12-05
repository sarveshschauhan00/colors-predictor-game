import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


export interface PeriodicElement {
  price: number;
  period: number;
  num: number;
  result: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {period: 20230918479, price: 60056, num: 0, result: 'red'},
  {period: 20230918478, price: 60056, num: 0, result: 'red'},
  {period: 20230918477, price: 60056, num: 0, result: 'green'},
  {period: 20230918476, price: 60056, num: 0, result: 'red'},
  {period: 20230918475, price: 60056, num: 0, result: 'green'},
  {period: 20230918474, price: 60056, num: 0, result: 'green'},
  {period: 20230918473, price: 60056, num: 0, result: 'red'},
  {period: 20230918472, price: 60056, num: 0, result: 'red'},
  {period: 20230918471, price: 60056, num: 0, result: 'red'},
  {period: 20230918470, price: 60056, num: 0, result: 'green'},
];

@Component({
  selector: 'app-bcone',
  templateUrl: './bcone.component.html',
  styleUrls: ['./bcone.component.css']
})
export class BconeComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
