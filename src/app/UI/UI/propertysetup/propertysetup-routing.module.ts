import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PROPERTYSETUPComponent } from './propertysetup.component';
import { BlockBuildingCreationComponent } from './block-building-creation/block-building-creation.component';
import { FloorPlansComponent } from './floor-plans/floor-plans.component';
import { RoomUnitAllocationComponent } from './room-unit-allocation/room-unit-allocation.component';

const routes: Routes = [
  { path: '', component: PROPERTYSETUPComponent },
  { path: 'BlockBuildingCreation', component: BlockBuildingCreationComponent},
  { path: 'FloorPlans', component:FloorPlansComponent},
  { path: 'RoomUnitAllocation', component:RoomUnitAllocationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PROPERTYSETUPRoutingModule { }
