import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import "firebase/auth"
import "firebase/firestore"


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  isSignedIn: boolean = false;
  email: string = '';
  password: string = '';

  phoneNumber: any;
  reCaptchaVerifier: any;

  constructor(public firebaseService : FirebaseService){}

  ngOnInit() {
    if (localStorage.getItem('user') !== null){
      this.isSignedIn = true
    } else {
      this.isSignedIn = false
    }
  }

  async onSignup(email: string, password: string){
    console.log(email, password)
    console.log(JSON.parse(localStorage.getItem('user') || '{}'))
    await this.firebaseService.signUpWithEmailandPassword(email, password)
    if (this.firebaseService.isLogdegIn){
      this.isSignedIn = true
    }
  }

  // async onSignup(number: string, password: string, otp: string){
  //   console.log(number, password)
  //   console.log(JSON.parse(localStorage.getItem('user') || '{}'))
  //   await this.firebaseService.signUpWithPhoneNumberAndPassword(number, password, otp)
  //   if (this.firebaseService.isLogdegIn){
  //     this.isSignedIn = true
  //   }
  // }

  handleLogout(){
    this.isSignedIn = false;
    this.firebaseService.logout();
  }
  
  async getOpt(countryCode: string, num: string) {
    console.log(countryCode, num)
    const verificationId = await this.firebaseService.requestOTP(countryCode + num)
    return verificationId
  }
}