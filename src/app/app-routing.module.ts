import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/UI/UI/HOME/login/login.component';
import { NavigationComponent } from 'src/app/UI/UI/HOME/navigation/navigation.component';
import { DashboardComponent } from './UI/UI/HOME/dashboard/dashboard.component';

const routes: Routes = [
  {
    path:'',component:LoginComponent
  },
  {
    path:'navigation',component:NavigationComponent,children:[
      {
        path:'Dashboard',component:DashboardComponent
      },
      {
        path:'loans',loadChildren: () => import('./UI/UI/LOANS/loans/loans/loans.module').then(m => m.LoansModule)
      },
      {
        path: 'chit', loadChildren: () => import('./UI/UI/CHIT/chit/chit.module').then(m => m.ChitModule)
      },
      {
        path: 'transactions', loadChildren: () => import('./UI/UI/TRANSACTIONS/transactions/transactions.module').then(m => m.TransactionsModule)
      },
      {
        path: 'reports', loadChildren: () => import('./UI/UI/REPORTS/reports/reports.module').then(m => m.ReportsModule)
      },
    ]
  },
  // { path: 'chit', loadChildren: () => import('./UI/UI/CHIT/chit/chit.module').then(m => m.ChitModule) },
  // { path: 'transactions', loadChildren: () => import('./UI/UI/TRANSACTIONS/transactions/transactions.module').then(m => m.TransactionsModule) },
  // { path: 'reports', loadChildren: () => import('./UI/UI/REPORTS/reports/reports.module').then(m => m.ReportsModule) },
  // { path: 'loans', loadChildren: () => import('./UI/UI/LOANS/loans/loans/loans.module').then(m => m.LoansModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
