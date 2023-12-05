import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParityComponent } from './games/parity/parity.component';
import { BconeComponent } from './games/bcone/bcone.component';
import { EmerdComponent } from './games/emerd/emerd.component';
import { SapreComponent } from './games/sapre/sapre.component';
import { HomeComponent } from './home/home.component';
import { GamesComponent } from './games/games.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'games', component: GamesComponent, children:[
    { path: 'sapre', component: SapreComponent },
    { path: 'bcone', component: BconeComponent },
    { path: 'emerd', component: EmerdComponent },
    { path: 'parity', component: ParityComponent },
  ]},
  { path: 'profile', component: ProfileComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
