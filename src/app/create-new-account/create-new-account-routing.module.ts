import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateNewAccountPage } from './create-new-account.page';

const routes: Routes = [
  {
    path: '',
    component: CreateNewAccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateNewAccountPageRoutingModule {}
