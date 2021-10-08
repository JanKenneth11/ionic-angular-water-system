import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  },
  {
    path: 'login-customer',
    loadChildren: () => import('./login-customer/login-customer.module').then( m => m.LoginCustomerPageModule)
  },
  {
    path: 'login-delivery-man',
    loadChildren: () => import('./login-delivery-man/login-delivery-man.module').then( m => m.LoginDeliveryManPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
