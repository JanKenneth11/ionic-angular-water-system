import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginDeliveryManPageRoutingModule } from './login-delivery-man-routing.module';

import { LoginDeliveryManPage } from './login-delivery-man.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginDeliveryManPageRoutingModule
  ],
  declarations: [LoginDeliveryManPage]
})
export class LoginDeliveryManPageModule {}
