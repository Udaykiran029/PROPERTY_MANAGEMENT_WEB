import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-tenant-profiles',
  templateUrl: './tenant-profiles.component.html',
  styleUrls: ['./tenant-profiles.component.css']
})
export class TenantProfilesComponent implements OnInit {
  tenantProfileForm:FormGroup;
  tenantdetails:any=[];
  tenantProfileFormValidation:any={};
  constructor(private fb:FormBuilder,private commonservice:CommonService) { }

  ngOnInit(): void {
    this.FormDetails();
    this.BlurEventAllControll(this.tenantProfileForm);
  }
  FormDetails(){
    this.tenantProfileForm=this.fb.group({
      name:[''],
      email:[''],
      contactno:[''],
      address:[''],
      passphoto:[''],
      age:[''],
      gender:[''],
      fathername:[''],
      addressproof:[''],
      signature:[''],
      dateofbirth:[''],
      occupation:[''],
      nooffamilymembers:['']
    })
  }
  addtenantdetails(){
    let values=this.tenantProfileForm.value;
      this.tenantdetails.push(values);
      if (this.checkValidations(this.tenantProfileForm,true)){
        this.commonservice.showsuccessmsg('Success!!');
      }
  }
  //Validation Checking Methods Start
  checkValidations(group: FormGroup, isValid: boolean): boolean {
    debugger;
    try {
      Object.keys(group.controls).forEach((key: string) => {
        isValid = this.GetValidationByControl(group, key, isValid);
      })
    }
    catch (e) {

      this.showErrorMessage(e);
      return false;
    }
    return isValid;

  }
  GetValidationByControl(formGroup: FormGroup, key: string, isValid: boolean): boolean {
    debugger;
    try {
      let formcontrol;
      formcontrol = formGroup.get(key);
      if (formcontrol) {
        if (formcontrol instanceof FormGroup) {
          this.checkValidations(formcontrol, isValid)
        }
        else if (formcontrol.validator) {
          this.tenantProfileFormValidation[key] = '';
          if (formcontrol.errors || formcontrol.invalid || formcontrol.touched || formcontrol.dirty) {
            let lablename;
            let errormessage;
            for (const errorkey in formcontrol.errors) {
              console.log(errorkey)
              if (errorkey) {
                lablename = (document.getElementById(key) as HTMLInputElement).title;
                errormessage = this.commonservice.getValidationMessage(formcontrol, errorkey, lablename, key, '');
                this.tenantProfileFormValidation[key] += errormessage + ' ';
                console.log(this.tenantProfileFormValidation)
                isValid = false;
              }
            }
          }
        }
      }
    }
    catch (e) {
      // this.showErrorMessage(e);
      return false;
    }
    return isValid;
  }
  showErrorMessage(errormsg: string) {
    debugger;
    this.commonservice.showErrorMessage(errormsg);
  }
  BlurEventAllControll(fromgroup: FormGroup) {
    debugger
    try {
      Object.keys(fromgroup.controls).forEach((key: string) => {
        this.setBlurEvent(fromgroup, key);
      })
    }
    catch (e) {
      this.showErrorMessage(e);
      return false;
    }
  }
  setBlurEvent(fromgroup: FormGroup, key: string) {
    debugger;
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
      this.showErrorMessage(e);
      return false;
    }
  }
  //Validation Checking Methods End

}
