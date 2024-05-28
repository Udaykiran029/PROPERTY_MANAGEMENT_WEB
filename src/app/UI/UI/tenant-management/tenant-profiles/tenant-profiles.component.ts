import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tenant-profiles',
  templateUrl: './tenant-profiles.component.html',
  styleUrls: ['./tenant-profiles.component.css']
})
export class TenantProfilesComponent implements OnInit {
  tenantProfileForm:FormGroup;
  tenantdetails:any=[];
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.FormDetails();
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
  }
}
