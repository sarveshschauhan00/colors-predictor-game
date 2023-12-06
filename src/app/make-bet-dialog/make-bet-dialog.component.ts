import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-make-bet-dialog',
  templateUrl: './make-bet-dialog.component.html',
  styleUrls: ['./make-bet-dialog.component.css'],
  standalone: true,
  imports: [MatDialogModule, CommonModule],
})
export class MakeBetDialogComponent {
  options: number[] = [10, 50, 100, 500, 1000, 10000];
  selectedOption: number = 10;
  contract_count: number = 1;
  totalAmount: number = 10;

  selectOption(option: number): void {
    this.selectedOption = option;
    this.totalAmount = this.contract_count * this.selectedOption;
  }
  value: any = 2;
  constructor(
    public dialogRef: MatDialogRef<MakeBetDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { num: number, game: string }, // Inject the data
    private router: Router,
    private http: HttpClient,
  ) {
    if (this.data.num == 10){
      this.value = "GREEN";
    } else if (this.data.num == 11){
      this.value = "VIOLET";
    } else if (this.data.num == 12){
      this.value = "RED";
    } else {
      this.value = this.data.num;
    }
  }


  increaseCount() {
    this.contract_count += 1;
    this.totalAmount = this.contract_count * this.selectedOption;
  }
  decreaseCount() {
    this.contract_count -= 1;
    this.totalAmount = this.contract_count * this.selectedOption;
  }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  async confirmRequest(user: string, contract_count: number, contract_money: number, bet_on: number){
    const payload = {
      "user" : user,
      "contract_count" : contract_count,
      "contract_money" : contract_money,
      "bet_on": bet_on,
      "game": this.data.game
    };
    console.log("payload", payload)
    try {
      const response = await this.http
        .post<any>("http://127.0.0.1:5000/api/post_example", payload, this.httpOptions)
        .toPromise();
    } catch (error) {
      console.error(
        'Error occurred while making predict API request:',
        error
      );
    }
  }

}
