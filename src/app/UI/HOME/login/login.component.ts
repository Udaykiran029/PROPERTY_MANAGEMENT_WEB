import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, mergeMap } from 'rxjs';
import { CommonService } from 'src/app/common.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  loginFormValidation:any={};
  constructor(private fb:FormBuilder,private router:Router,private http:HttpClient,private commonservice:CommonService) {
    // this.commonservice.gettdata().subscribe(res=>{
    //   console.log('res',res);
    // })
    // this.commonservice.getsupermarketdetails().subscribe(res=>{
    //   console.log('ress',res)
    // })
    // this.commonservice
   }

  ngOnInit(){
    this.FormDetails();
    this.commonservice.showsuccessmsg('login successfully')
    }
  FormDetails(){
    this.loginForm=this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
    
  }
  register(value) {
    if (value == 'register') {
      this.router.navigate(['register']);
    }
    else {
      console.log("error")
    }
  }
  login() {
    debugger;
    let isValid = true;
    console.log('login')
    if (this.checkValidations(this.loginForm,true)){
      this.router.navigate(['navigation/Dashboard']);
    }
    // this.router.navigate(['navigation'])
}
getdata(): Observable<any> {
  debugger
  let baseUrl = "https://localhost:44358/";
  let urldata = environment.apiUrl;
  let baseapiUrl = this.http.get(urldata).pipe(mergeMap((json): any => {
    console.log(json)
  }));
  console.log("Base API url", baseapiUrl);
  return this.http.get<any>(baseUrl + 'GetAllBranchesDetails');
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
          this.loginFormValidation[key] = '';
          if (formcontrol.errors || formcontrol.invalid || formcontrol.touched || formcontrol.dirty) {

            let errormessage;
            for (const errorkey in formcontrol.errors) {
              if (errorkey) {
                let lablename;
                lablename = (document.getElementById(key) as HTMLInputElement).title;
                errormessage = this.commonservice.getValidationMessage(formcontrol, errorkey, lablename, key, '');
                this.loginFormValidation[key] += errormessage + ' ';
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
