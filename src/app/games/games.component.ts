import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent {

  constructor(private router: Router) {}
  // Method to reload the current route
  reloadRoute(): void {
    // Get the current route URL
    const currentRoute = this.router.url;

    // Navigate to the same route to trigger a reload
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentRoute]);
    });
  }
}
