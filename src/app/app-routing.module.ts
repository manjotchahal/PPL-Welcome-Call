import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeCallComponent } from './welcome-call/welcome-call.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome-call', pathMatch: 'full' },
  { path: 'welcome-call', component: WelcomeCallComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
