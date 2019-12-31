import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: '**', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
