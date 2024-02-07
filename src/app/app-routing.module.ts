import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/UI/UI/HOME/login/login.component';
import { NavigationComponent } from 'src/app/UI/UI/HOME/navigation/navigation.component';
import { LoansComponent } from 'src/app/UI/UI/LOANS/loans/loans.component';

const routes: Routes = [
  {
    path:'',component:LoginComponent
  },
  {
    path:'navigation',component:NavigationComponent,children:[
      {
        path:'loans',component:LoansComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
