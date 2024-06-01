import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-block-building-creation',
  templateUrl: './block-building-creation.component.html',
  styleUrls: ['./block-building-creation.component.css']
})
export class BlockBuildingCreationComponent implements OnInit {
  BlockCreation:FormGroup;
  BlockCreationValidation:any={};
  output:any=[];
  lstroomsforfloors:any=[];
  constructor(private commonservice:CommonService,private fb:FormBuilder) { }

  ngOnInit(): void {
    debugger
    this.FormDetails();

  }
  FormDetails(){
    this.BlockCreation=this.fb.group({
      pblockname:['',Validators.required],
      pNoofFloors:['',Validators.required],
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
    if(this.checkValidations(this.BlockCreation,true)){
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
  
  
  checkValidations(group: FormGroup, isValid: boolean): boolean {
    try {
      Object.keys(group.controls).forEach((key: string) => {
        isValid = this.GetValidationByControl(group, key, isValid);
      })
    }
    catch (e) {
      return false;
    }
    return isValid;
  }
  GetValidationByControl(formGroup: FormGroup, key: string, isValid: boolean): boolean {
    try {
      debugger
      let formcontrol;
      formcontrol = formGroup.get(key);
      if (formcontrol) {
        if (formcontrol instanceof FormGroup) {
          this.checkValidations(formcontrol, isValid)
        }
        else if (formcontrol.validator) {
          this.BlockCreationValidation[key] = '';
          if (formcontrol.errors || formcontrol.invalid || formcontrol.touched || formcontrol.dirty) {

            let errormessage;
            for (const errorkey in formcontrol.errors) {
              if (errorkey) {
                let lablename;
                lablename = (document.getElementById(key) as HTMLInputElement).title;
                errormessage = this.commonservice.getValidationMessage(formcontrol, errorkey, lablename, key, '');
                this.BlockCreationValidation[key] += errormessage + ' ';
                isValid = false;
              }
            }
          }
        }
      }
    }
    catch (e) {
      return false;
    }
    return isValid;
  }
  BlurEventAllControll(fromgroup: FormGroup) {
    try {
      Object.keys(fromgroup.controls).forEach((key: string) => {
        this.setBlurEvent(fromgroup, key);
      })
    }
    catch (e) {
      return false;
    }
  }
  setBlurEvent(fromgroup: FormGroup, key: string) {
    try {
      let formcontrol;
      formcontrol = fromgroup.get(key);
      if (formcontrol) {
        if (formcontrol instanceof FormGroup) {
          this.BlurEventAllControll(formcontrol)
        }
        else {
          if (formcontrol.validator)
            fromgroup.get(key).valueChanges.subscribe((data) => { this.GetValidationByControl(fromgroup, key, true) })
        }
      }
    }
    catch (e) {
      return false;
    }
  }
}
