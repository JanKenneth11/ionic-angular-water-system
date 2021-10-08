import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateNewAccountPageRoutingModule } from './create-new-account-routing.module';

import { CreateNewAccountPage } from './create-new-account.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateNewAccountPageRoutingModule
  ],
  declarations: [CreateNewAccountPage]
})
export class CreateNewAccountPageModule {}
