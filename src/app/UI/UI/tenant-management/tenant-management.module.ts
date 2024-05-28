import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TenantManagementRoutingModule } from './tenant-management-routing.module';
import { TenantManagementComponent } from './tenant-management.component';
import { TenantProfilesComponent } from './tenant-profiles/tenant-profiles.component';
import { LeaseAgreementsComponent } from './lease-agreements/lease-agreements.component';
import { MoveinMoveoutProceduresComponent } from './movein-moveout-procedures/movein-moveout-procedures.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@NgModule({
  declarations: [
    TenantManagementComponent,
    TenantProfilesComponent,
    LeaseAgreementsComponent,
    MoveinMoveoutProceduresComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    TenantManagementRoutingModule
  ]
})
export class TenantManagementModule { }
