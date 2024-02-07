import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import jsPDF from 'jspdf';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Observable, mergeMap } from 'rxjs';
import { CommonService } from 'src/app/common.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})
export class LoansComponent implements OnInit {
  loanForm:FormGroup;
  brancheslst:any=[];
  bsdopConfig: Partial<BsDatepickerConfig>;
  public bsDatepicker1: Partial<BsDatepickerConfig> = new BsDatepickerConfig();
  constructor(private fb:FormBuilder,private http:HttpClient,private commonservice:CommonService) { 
    // this.bsdopConfig.containerClass = this.commonservice.setDatepickerProperties('containerClass');
    this.bsdopConfig=Object.assign({},{ containerClass:'theme-dark-blue'});
    this.bsdopConfig.dateInputFormat = this.commonservice.setDatepickerProperties('dateInputFormat');
    this.bsDatepicker1 = this.commonservice.setDatepickerProperties('dateInputFormat');
    // this.bsConfig = this.obj.containerClass
    this.bsdopConfig.showWeekNumbers = false;
    this.bsDatepicker1 = this.commonservice.setDatepickerProperties('dateInputFormat');
  }

  ngOnInit(): void {
    this.FormDetails();
    this.commonservice.gettdata().subscribe(res=>{
      this.brancheslst=res;
    })
  }
  FormDetails(){
    debugger
    this.loanForm=this.fb.group({
      fromdate:['']
    });
    // this.getdata();
  }
  getdata(): Observable<any> {
    debugger
    let baseUrl = "https://localhost:7070/";
    let urldata = environment.apiUrl;
    let baseapiUrl = this.http.get(urldata).pipe(mergeMap((json): any => {
      console.log(json)
    }));
    console.log("Base API url", baseapiUrl);
    return this.http.get<any>(baseUrl + 'GetAllBranchesDetails');
  }
  printorpdf(){
    let docc=new jsPDF();
    docc.text('GST Invoice',10,20);
    this.commonservice.setiFrameForPrint(docc);
  }
}
