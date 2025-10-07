import { Routes } from '@angular/router';
import { Home } from '@screens/home/home';
import { Login } from '@screens/login/login';
import { PageNotFound } from '@screens/page-not-found/page-not-found';
import { SignIn } from '@screens/sign-in/sign-in';
import { HistoryDetails } from '@screens/history-details/history-details';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'login', component: Login },
  { path: 'sign-in', component: SignIn },
  { path: 'history-details/:id', component: HistoryDetails },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFound },
];
