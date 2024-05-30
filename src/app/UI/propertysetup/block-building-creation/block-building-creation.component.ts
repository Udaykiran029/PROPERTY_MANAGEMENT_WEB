import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-block-building-creation',
  templateUrl: './block-building-creation.component.html',
  styleUrls: ['./block-building-creation.component.css']
})
export class BlockBuildingCreationComponent implements OnInit {
  BlockCreation:FormGroup;
  output:any=[];
  lstroomsforfloors:any=[];
  constructor(private commonservice:CommonService,private fb:FormBuilder) { }

  ngOnInit(): void {
    debugger
    this.FormDetails();

  }
  FormDetails(){
    this.BlockCreation=this.fb.group({
      pblockname:[''],
      pNoofFloors:[''],
      pis_vacancy:[false],
      pNoofRooms:[0],
      pstatusid:[true],
      // floors:this.fb.group([this.floordata(),])
      floors:this.floordata(),
      flooors:this.fb.array([])
    });
  }
  floordata(): FormGroup{
    return this.fb.group({
      pfloorid:[0],
      pfloorname:[''],
      pblock_id: [0],
      pNoofRooms: [null],
      pisvacancy: [true],
      statusid:[true]
    })
  }
  add(){
    debugger
    this.commonservice.showsuccessmsg('Done');
    let countoffloors=this.BlockCreation.get('pNoofFloors').value;
    if (this.lstroomsforfloors.length>parseInt(countoffloors)){
    const controlNames=<FormGroup>this.BlockCreation['controls']['floors']
    // controlNames.controls['pNoofRooms'].setValue(this.BlockCreation.controls['pNoofRooms'].value)
    controlNames['controls']['pNoofRooms'].setValue(this.BlockCreation.controls['pNoofRooms'].value);
    this.lstroomsforfloors.push(controlNames.value);
    }else{
      this.commonservice.showErrorMessage('Exceeded');
    }
  }
  SaveBlockandFloors(){
    debugger
    const controlNames=<FormArray>this.BlockCreation['controls']['flooors']
    // controlNames.controls['pNoofRooms'].setValue(this.BlockCreation.controls['pNoofRooms'].value)
    // controlNames.controls.push(this.BlockCreation.controls.flooors)
    //controlNames.push(this.BlockCreation['controls']['floors']['controls']);
    this.addFloorToBlock(this.BlockCreation);
    for (let k =0; k<this.lstroomsforfloors.length;k++){
      // controlNames['controls']['pNoofRooms'][k].push(this.lstroomsforfloors[k].pNoofRooms);
      // controlNames.push(this.BlockCreation['controls']['floors']);
      // controlNames[k]['controls']['pNoofRooms'].setValue(this.lstroomsforfloors[k].pNoofRooms);
      controlNames['controls'][k]['controls']['pNoofRooms'].setValue(this.lstroomsforfloors[k].pNoofRooms)
    }
    let data=JSON.stringify(this.BlockCreation.value);
    for (let u=0;u<this.lstroomsforfloors.length;u++){//controlNames
      controlNames.removeAt(u);
    }
    this.commonservice.SaveBlockandFloors(data).subscribe(res=>{
      this.output=res;
      this.commonservice.showErrorMessage('Done');
      this.lstroomsforfloors=[];
      this.BlockCreation.reset();
    });
  }
  addFloorToBlock(blockForm: FormGroup) {
    const floors = blockForm.get('flooors') as FormArray;
    floors.push(this.floordata());
  }
}
