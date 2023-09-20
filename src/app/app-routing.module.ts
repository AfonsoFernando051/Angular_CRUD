import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './public-layout/componentes/create_account/sign-up/sign-up.component';
import { HomeComponent } from './public-layout/home/home.component';
import { LoginComponent } from './public-layout/componentes/login/login.component';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { DashboardHomeComponent } from './login-layout/dashboard/dashboard-views/dashboard-home/dashboard-home.component';
import { ProfessoresComponent } from './login-layout/dashboard/dashboard-views/professores/professores.component';

const routes: Routes = [
  {
    path: '',
    component:PublicLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'sign-up',
        component: SignUpComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
    ]
  },
  {
    path: 'dashboard/dashboard-home', component: LoginLayoutComponent,
    children: [
      {
        path: 'dashboard-home', component: DashboardHomeComponent
      },
      {
        path: 'professores', component: ProfessoresComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
