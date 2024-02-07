import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  constructor(private fb:FormBuilder,private router:Router,private http:HttpClient,private commonservice:CommonService) {
    // this.commonservice.gettdata().subscribe(res=>{
    //   console.log('res',res);
    // })
    this.commonservice.getsupermarketdetails().subscribe(res=>{
      console.log('ress',res)
    })
   }

  ngOnInit(){
    this.FormDetails();
  }
  FormDetails(){
    this.loginForm=this.fb.group({
      username:[''],
      password:['']
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
    this.router.navigate(['navigation'])
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
}
