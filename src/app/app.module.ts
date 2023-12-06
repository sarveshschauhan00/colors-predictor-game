import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatPaginatorModule } from '@angular/material/paginator';

import { BottomNavbarComponent } from './bottom-navbar/bottom-navbar.component';
import { ParityComponent } from './games/parity/parity.component';
import { SapreComponent } from './games/sapre/sapre.component';
import { BconeComponent } from './games/bcone/bcone.component';
import { EmerdComponent } from './games/emerd/emerd.component';
import { HomeComponent } from './home/home.component';
import { GamesComponent } from './games/games.component';
import { ProfileComponent } from './profile/profile.component';

import { AngularFireModule } from '@angular/fire/compat'
import { AngularFireAuthModule } from '@angular/fire/compat/auth'
import { FirebaseService } from './services/firebase.service';
import { LogoutDialogComponent } from './logout-dialog/logout-dialog.component';
import { TempComponent } from './temp/temp.component';
import { MakeBetDialogComponent } from './make-bet-dialog/make-bet-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    BottomNavbarComponent,
    ParityComponent,
    SapreComponent,
    BconeComponent,
    EmerdComponent,
    HomeComponent,
    GamesComponent,
    ProfileComponent,
    TempComponent,
    CountdownTimerComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTableModule,
    MatTabsModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MatDialogModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyC7PpMUKotMMn-dR9PTIbatZqqaSqfLxhI",
      authDomain: "color-casino.firebaseapp.com",
      projectId: "color-casino",
      storageBucket: "color-casino.appspot.com",
      messagingSenderId: "906137242256",
      appId: "1:906137242256:web:f03bd1bbb4182378776615",
      measurementId: "G-DSEE59MPDF"
    }),
    AngularFireAuthModule,
    LogoutDialogComponent,
    MakeBetDialogComponent,
    HttpClientModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
