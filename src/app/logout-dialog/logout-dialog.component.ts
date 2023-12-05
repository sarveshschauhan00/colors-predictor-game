import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'logout-dialog',
  templateUrl: './logout-dialog.component.html',
  standalone: true,
  imports: [MatDialogModule],
  styleUrls: ['./logout-dialog.component.css'],
})
export class LogoutDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<LogoutDialogComponent>,
    private router: Router
  ) {}

  // logout(): void {
  //   // localStorage.clear();
  //   this.router.navigate(['/login']);
  // }
}
