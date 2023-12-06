import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MakeBetDialogComponent } from 'src/app/make-bet-dialog/make-bet-dialog.component';
import { SharedStateService } from 'src/app/services/shared-state.service';

export interface PeriodicElement {
  price: number;
  period: number;
  num: number;
  result: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {period: 20230918479, price: 60056, num: 0, result: 'violet'},
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
  selector: 'app-sapre',
  templateUrl: './sapre.component.html',
  styleUrls: ['./sapre.component.css']
})

export class SapreComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(public dialog: MatDialog, public sharedState: SharedStateService){}

  showMakeBetDialog(value: number) {
    const dialogRef = this.dialog.open(MakeBetDialogComponent, {
      width: 'auto',
      data: { num: value, game: "sapre" }
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}