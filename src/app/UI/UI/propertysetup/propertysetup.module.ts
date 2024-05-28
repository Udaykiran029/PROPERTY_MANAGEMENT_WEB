import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PROPERTYSETUPRoutingModule } from './propertysetup-routing.module';
import { PROPERTYSETUPComponent } from './propertysetup.component';
import { BlockBuildingCreationComponent } from './block-building-creation/block-building-creation.component';
import { RoomUnitAllocationComponent } from './room-unit-allocation/room-unit-allocation.component';
import { FloorPlansComponent } from './floor-plans/floor-plans.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@NgModule({
  declarations: [
    PROPERTYSETUPComponent,
    BlockBuildingCreationComponent,
    RoomUnitAllocationComponent,
    FloorPlansComponent
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
