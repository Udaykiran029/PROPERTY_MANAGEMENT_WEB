import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { LeaseAgreementsComponent } from './lease-agreements/lease-agreements.component';
import { MoveinMoveoutProceduresComponent } from './movein-moveout-procedures/movein-moveout-procedures.component';
import { TenantManagementRoutingModule } from './tenant-management-routing.module';
import { TenantManagementComponent } from './tenant-management.component';
import { TenantProfilesComponent } from './tenant-profiles/tenant-profiles.component';


@NgModule({
  declarations: [
    TenantManagementComponent,
    TenantProfilesComponent,
    LeaseAgreementsComponent,
    MoveinMoveoutProceduresComponent,
    // ValidationMessageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    TenantManagementRoutingModule
  ]
})
export class TenantManagementModule { }
