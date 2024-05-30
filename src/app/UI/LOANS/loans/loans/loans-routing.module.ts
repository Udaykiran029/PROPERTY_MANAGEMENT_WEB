import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoansComponent } from '../loans.component';
import { AgriculturalLoanComponent } from './agricultural-loan/agricultural-loan.component';
import { BusinessLoanComponent } from './business-loan/business-loan.component';
import { EducationalLoanComponent } from './educational-loan/educational-loan.component';
import { GoldLoanComponent } from './gold-loan/gold-loan.component';
import { HomeLoanComponent } from './home-loan/home-loan.component';
import { VehcileLoanComponent } from './vehcile-loan/vehcile-loan.component';

const routes: Routes = [
  { path: '', component: LoansComponent },
  {
    path:'Home',component:HomeLoanComponent
  },
  {
    path:'Gold',component:GoldLoanComponent
  },
  {
    path:'Vehicle',component:VehcileLoanComponent
  },
  {
    path:'Educational',component:EducationalLoanComponent
  },
  {
    path:'Business',component:BusinessLoanComponent
  },
  {
    path:'Agricultural',component:AgriculturalLoanComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoansRoutingModule { }
