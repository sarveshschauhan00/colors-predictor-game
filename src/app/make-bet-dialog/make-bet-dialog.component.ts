import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

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

  selectOption(option: number): void {
    this.selectedOption = option;
  }
  value: number = 2;
  constructor(
    // public dialogRef: MatDialogRef<MakeBetDialogComponent>,
    private router: Router
  ) {}
}
