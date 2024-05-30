import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoansRoutingModule } from './loans-routing.module';
import { LoansComponent } from './loans.component';
import { HomeLoanComponent } from './home-loan/home-loan.component';
import { VehcileLoanComponent } from './vehcile-loan/vehcile-loan.component';
import { PersonalLoanComponent } from './personal-loan/personal-loan.component';
import { AgriculturalLoanComponent } from './agricultural-loan/agricultural-loan.component';
import { GoldLoanComponent } from './gold-loan/gold-loan.component';
import { EducationalLoanComponent } from './educational-loan/educational-loan.component';
import { BusinessLoanComponent } from './business-loan/business-loan.component';


@NgModule({
  declarations: [
    LoansComponent,
    HomeLoanComponent,
    VehcileLoanComponent,
    PersonalLoanComponent,
    AgriculturalLoanComponent,
    GoldLoanComponent,
    EducationalLoanComponent,
    BusinessLoanComponent
  ],
  imports: [
    CommonModule,
    LoansRoutingModule
  ]
})
export class LoansModule { }
