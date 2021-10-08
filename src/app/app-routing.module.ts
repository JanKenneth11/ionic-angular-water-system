import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    children: [
      {
        path: '',
        loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
      },
      {
        path: 'login-customer',
        loadChildren: () => import('./login/login-customer/login-customer.module').then( m => m.LoginCustomerPageModule)
      },
      {
        path: 'login-delivery-man',
        loadChildren: () => import('./login/login-delivery-man/login-delivery-man.module').then( m => m.LoginDeliveryManPageModule)
      },
    ],
  },
  {
    path: 'create-new-account',
    loadChildren: () => import('./create-new-account/create-new-account.module').then( m => m.CreateNewAccountPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
