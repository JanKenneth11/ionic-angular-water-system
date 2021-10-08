import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginCustomerPageRoutingModule } from './login-customer-routing.module';

import { LoginCustomerPage } from './login-customer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginCustomerPageRoutingModule
  ],
  declarations: [LoginCustomerPage]
})
export class LoginCustomerPageModule {}
