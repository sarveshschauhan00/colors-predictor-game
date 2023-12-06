// countdown-timer.component.ts

import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedStateService } from '../services/shared-state.service';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
  countdown: number = 180; // 3 minutes in seconds
  timer: any;

  constructor(private http: HttpClient, public sharedState: SharedStateService) {}

  formatTime(seconds: number): string {
    const minutes: number = Math.floor(seconds / 60); // Use Math.floor to get the integer part
    const remainingSeconds: number = seconds % 60;
  
    // // Ensure that minutes is displayed as an integer
    // const formattedMinutes: string = this.padNumber(minutes, 2);
    // const formattedSeconds: string = this.padNumber(remainingSeconds, 2);
    var time_str: string = `${minutes}:${remainingSeconds}`;
    if (remainingSeconds < 10){
      time_str = `${minutes}:0${remainingSeconds}`
    }
    return time_str;
  }
  ngOnInit(): void {
    this.fetchTime();
    this.startCountdown();
  }

  ngOnDestroy(): void {
    this.stopCountdown();
  }

  startCountdown(): void {
    this.timer = setInterval(() => {
      this.countdown--;
      if (this.countdown <= 0) {
        this.countdown = 180; // Reset the countdown to 3 minutes
        this.fetchTime();
      }
      if (this.countdown <= 30 && 0 <= this.countdown) {
        this.sharedState.disableBetting = true;
      } else {
        this.sharedState.disableBetting = false;
      }
    }, 1000); // Update every second
  }

  // Make the GET request
  async fetchTime() {
    await this.http.get('http://127.0.0.1:5000/api/data').subscribe(
      (response) => {
        // console.log('Response from Flask API:', response);
        this.countdown = Number(response)
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
  stopCountdown(): void {
    clearInterval(this.timer);
  }
}
