import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, RecaptchaVerifier } from "firebase/auth";
import firebase from 'firebase/compat/app'; // Import the 'firebase' object


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  isLogdegIn: boolean = false;
  verId: string = '';
  
  constructor(public firebaseAuth: AngularFireAuth) { }

  async signin(email: string, password: string){
    await this.firebaseAuth.signInWithEmailAndPassword(email, password)
    .then(res => {
      this.isLogdegIn = true,
      localStorage.setItem('user', JSON.stringify(res.user))
    })
  }
  async signup(email: string, password: string){
    await this.firebaseAuth.createUserWithEmailAndPassword(email, password)
    .then(res => {
      this.isLogdegIn = true,
      localStorage.setItem('user', JSON.stringify(res.user))
    })
  }

  // // Sign up with phone number and password
  // signUpWithPhoneNumberAndPassword(phoneNumber: string, password: string) {
  //   return this.requestOTP(phoneNumber)
  //     .then(confirmationResult => {
  //       // Assuming you have a way to input the OTP from the user
  //       const otp = prompt('Enter OTP') || '';

  //       return this.verifyOTP(confirmationResult.verificationId, otp);
  //     })
  //     .then(userCredential => {
  //       // OTP successfully verified, now create the user account
  //       return this.firebaseAuth.createUserWithEmailAndPassword(`${userCredential.user?.phoneNumber}@example.com`, password);
  //     })
  //     .then(res => {
  //       this.isLogdegIn = true;
  //       console.log('User signed up successfully:', res.user);
  //     })
  //     .catch(error => {
  //       console.error('Sign up failed:', error);
  //     });
  //   }
  

  // // Request OTP
  // requestOTP(phoneNumber: string) {
  //   const appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
  //   // return this.firebaseAuth.signInWithPhoneNumber(phoneNumber, appVerifier);
  //   return this.firebaseAuth.signInWithPhoneNumber(phoneNumber, appVerifier)
  //   .then(confirmationResult => {
  //     // `confirmationResult` contains the `verificationId`
  //     const verificationId = confirmationResult.verificationId;
  //     // You can store this `verificationId` and use it during OTP verification
  //     return verificationId;
  //   });
  // }

  async signUpWithEmailandPassword(email: string, password: string) {
    try {
      // Create a new user
      const userCredential = await this.firebaseAuth.createUserWithEmailAndPassword(email, password)
  
      // Send email verification
      await userCredential.user?.sendEmailVerification();
  
      // Wait for email verification
      await this.waitForEmailVerification(userCredential.user);
      localStorage.setItem('user', JSON.stringify(userCredential.user));
  
      // Email is verified, you can proceed with additional actions if needed
      console.log('Email verified. User signed up successfully.');
  
    } catch (error) {
      console.error('Error signing up:', error);
    }
  }

  async waitForEmailVerification(user: firebase.User | null, maxAttempts: number = 30, delay: number = 3000) {
    let attempts = 0;
  
    while (attempts < maxAttempts) {
      // Refresh the user's data to get the latest email verification status
      await user?.reload();
      console.log(user, attempts)
  
      if (user?.emailVerified) {
        // Email is verified, break out of the loop
        this.isLogdegIn = true
        break;
      }
  
      // Wait for a short delay before the next attempt
      await new Promise(resolve => setTimeout(resolve, delay));
  
      attempts++;
    }

  
    if (!user?.emailVerified) {
      // Email verification did not happen within the given attempts
      throw new Error('Email verification timed out.');
    }
  }

  // Sign up with phone number and password
  signUpWithPhoneNumberAndPassword(phoneNumber: string, password: string, otp: string) {
    return this.verifyOTP(this.verId, otp)
      .then(userCredential => {
        // OTP successfully verified, now create the user account
        return this.firebaseAuth.createUserWithEmailAndPassword(`${phoneNumber}@example.com`, password);
      })
      .then(res => {
        this.isLogdegIn = true;
        localStorage.setItem('user', JSON.stringify(res.user))
        console.log('User signed up successfully:', res.user);
      })
      .catch(error => {
        console.error('Sign up failed:', error);
      });
    }
  
  // Request OTP
  requestOTP(phoneNumber: string) {
    const appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    // return this.firebaseAuth.signInWithPhoneNumber(phoneNumber, appVerifier);
    this.firebaseAuth.signInWithPhoneNumber(phoneNumber, appVerifier)
    .then(confirmationResult => {
      // `confirmationResult` contains the `verificationId`
      const verificationId = confirmationResult.verificationId;
      this.verId = verificationId;
      // You can store this `verificationId` and use it during OTP verification
      return verificationId;
    });
  }

  // Verify OTP
  verifyOTP(verificationId: string, otp: string) {
    const credential = firebase.auth.PhoneAuthProvider.credential(verificationId, otp);
    return this.firebaseAuth.signInWithCredential(credential);
  }

  logout(){
    this.firebaseAuth.signOut()
    localStorage.removeItem('user')
    console.log("signed out...")
  }
}
