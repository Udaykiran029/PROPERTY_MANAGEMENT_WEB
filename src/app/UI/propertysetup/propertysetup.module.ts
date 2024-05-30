import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { BlockBuildingCreationComponent } from './block-building-creation/block-building-creation.component';
import { FloorPlansComponent } from './floor-plans/floor-plans.component';
import { PROPERTYSETUPRoutingModule } from './propertysetup-routing.module';
import { PROPERTYSETUPComponent } from './propertysetup.component';
import { RoomUnitAllocationViewComponent } from './room-unit-allocation-view/room-unit-allocation-view.component';
import { RoomUnitAllocationComponent } from './room-unit-allocation/room-unit-allocation.component';


@NgModule({
  declarations: [
    PROPERTYSETUPComponent,
    BlockBuildingCreationComponent,
    RoomUnitAllocationComponent,
    FloorPlansComponent,
    RoomUnitAllocationViewComponent
  ],
  imports: [
    CommonModule,
    PROPERTYSETUPRoutingModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgxDatatableModule
  ]
})
export class PROPERTYSETUPModule { }
