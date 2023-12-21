import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.css']
})
export class RechargeComponent {
  value: any = "";

  constructor(private router: Router, private http: HttpClient, private location: Location) {}
  
  goBack(): void {
    this.location.back();
  }
  
  changeAmount(amount: number) {
    this.value = amount;
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  async recharge(user: string, amount: string){
    const payload = {
      "user" : user,
      "amount" : amount
    };
    console.log("payload", payload)
    try {
      const response = await this.http
        .post<any>("http://127.0.0.1:5000/api/recharge", payload, this.httpOptions)
        .toPromise();
      console.log(response)
    } catch (error) {
      console.error(
        'Error occurred while making predict API request:',
        error
      );
    }
  }
}

