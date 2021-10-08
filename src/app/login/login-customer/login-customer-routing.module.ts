import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginCustomerPage } from './login-customer.page';

const routes: Routes = [
  {
    path: '',
    component: LoginCustomerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginCustomerPageRoutingModule {}
