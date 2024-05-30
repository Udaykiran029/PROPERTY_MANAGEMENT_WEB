import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentManagementRoutingModule } from './payment-management-routing.module';
import { PaymentManagementComponent } from './payment-management.component';


@NgModule({
  declarations: [
    PaymentManagementComponent
  ],
  imports: [
    CommonModule,
    PaymentManagementRoutingModule
  ]
})
export class PaymentManagementModule { }
