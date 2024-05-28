import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TenantManagementComponent } from './tenant-management.component';
import { LeaseAgreementsComponent } from './lease-agreements/lease-agreements.component';
import { TenantProfilesComponent } from './tenant-profiles/tenant-profiles.component';
import { MoveinMoveoutProceduresComponent } from './movein-moveout-procedures/movein-moveout-procedures.component';

const routes: Routes = [
  { path: '', component: TenantManagementComponent },
  { path: 'LeaseAgreements', component: LeaseAgreementsComponent},
  { path: 'TenantProfiles', component: TenantProfilesComponent},
  { path: 'MoveinMoveOut', component: MoveinMoveoutProceduresComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TenantManagementRoutingModule { }
