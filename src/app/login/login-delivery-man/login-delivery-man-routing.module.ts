import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginDeliveryManPage } from './login-delivery-man.page';

const routes: Routes = [
  {
    path: '',
    component: LoginDeliveryManPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginDeliveryManPageRoutingModule {}
