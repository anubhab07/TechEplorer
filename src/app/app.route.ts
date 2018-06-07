import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationComponent } from './registration/registration.component';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'details', component: MyDashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }

export const routedComponents = [DashboardComponent];
