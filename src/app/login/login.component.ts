import { Component } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isSignedIn: boolean = false;
  constructor(public firebaseService: FirebaseService) {}

  async onSignin(email: string, password: string){
    console.log(email, password)
    console.log(JSON.parse(localStorage.getItem('user') || '{}'))
    await this.firebaseService.signin(email, password)
    if (this.firebaseService.isLogdegIn){
      this.isSignedIn = true
    }
  }
}
