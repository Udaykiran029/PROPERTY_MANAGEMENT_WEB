import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, catchError, map, mergeMap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
// import { map } from 'rxjs/operators';
// import { mergeMap, map } from 'rxjs/operators';
// Observable, throwError
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  msgtimeout = 1500;
  constructor(private http:HttpClient,private toastr:ToastrService) { }

  // getAPI(){
  //   return this.http.get("");
  // }

  // getAPI(apiPath, params, parameterStatus) {
  //   let urldata = environment.apiUrl;
  //   if (parameterStatus.toUpperCase() == 'YES')
  //     return this.http.get(urldata).pipe(
  //       mergeMap(json => this.http.get(json[0]['ApiHostUrl'] + apiPath, { params }).map(this.extractData).catch(this.handleError)));
  //   else
  //     return this.http.get(urldata).pipe(
  //       mergeMap(json => this.http.get(json[0]['ApiHostUrl'] + apiPath).map(this.extractData).catch(this.handleError)));
  // }
  // getdata(): Observable<any> {
  //   debugger
  //   let baseUrl = "https://localhost:7070/";
  //   let urldata = environment.apiUrl;
  //   let baseapiUrl = this.http.get(urldata).pipe(mergeMap((json): any => {
  //     console.log(json)
  //   }));
  //   console.log("Base API url", baseapiUrl);
  //   return this.http.get<any>(baseUrl + 'api/registration');
  // }
  gettdata(): Observable<any> {
    debugger
    // let baseUrl = "http://localhost:7070/api/"
    // let data = { name: 'ramakrishna', age: 23, id: 387, branch: 'Civil', gender: 'male' };
    // return this.http.post(baseUrl + 'Registration', data);
    let baseUrl = "https://localhost:44358/api/Student/";
    let urldata = environment.apiUrl;
    let baseapiUrl = this.http.get(urldata).pipe(mergeMap((json): any => {
      console.log("JSON is:", json);
    }));
    console.log(baseapiUrl);
    console.log("Base API url", baseapiUrl);
    return this.http.get<any>(baseUrl + 'GetAllBranchesDetails');
  }

  postAPI(apiPath, data) {
    let urldata = environment.apiUrl;
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });
    httpHeaders.append('Access-Control-Allow-Origin', '/*');
    let options = {
      headers: httpHeaders
    };
    return this.http.get(urldata).pipe(
      mergeMap(json => this.http.post(json[0]['ApiHostUrl'] + apiPath, data, options)));
  }
  // extractData(extractData: any) {
  //   throw new Error('Method not implemented.');
  // }

  // private handleError(error: HttpErrorResponse) {
  //   if (error.error instanceof ErrorEvent) {
  //     console.log(error.error.message)

  //   } else {
  //     console.log(error.status)
  //   }
  //   return throwError(
  //     console.log('Something has happened; Api is not working!'));
  // };

  getAPI(apiPath, params, parameterStatus) {
    debugger
    let urldata = environment.apiUrl;
    console.log(this.http.get(urldata).pipe(mergeMap(json => this.http.get(json[0]['ApiHostUrl'] + apiPath))));
    if (parameterStatus.toUpperCase() == 'YES')
      return this.http.get(urldata).pipe(mergeMap(json => this.http.get(json[0]['ApiHostUrl'] + apiPath)));
    else
      return this.http.get(urldata).pipe(mergeMap(json => this.http.get(json[0]['ApiHostUrl'] + apiPath)));
  }
  
  GetAllBranchesDetails(){
    // const params=new HttpParamsset('');
    debugger
    const params='';
    // https://localhost:44358/api/Student/GetAllBranchesDetails
    return this.getAPI('/Student/GetAllBranchesDetails',params,'YES');
  }
  setDatepickerProperties(property) {
    debugger;
    let data;
    if (property == 'containerClass') {
      data = "theme-dark-blue"
    }
    if (property == 'dateInputFormat') {
      // data = 'DD-MM-YYYY'
      data = 'DD-MMM-YYYY'
    }
    return data;
  }
  setiFrameForPrint(doc) {
    debugger;
    const iframe = document.createElement('iframe');
    iframe.id = "iprint"
    iframe.name = "iprint"
    iframe.src = doc.output('blobUrl');
    iframe.setAttribute('style', 'display');
    document.body.appendChild(iframe);
    iframe.contentWindow.print();
  }

  _getAPI(apiPath, params, parameterStatus) {
    debugger
    let urldata = environment.apiUrl;
    if (parameterStatus.toUpperCase() == 'YES')
      return this.http.get(urldata).pipe(
        mergeMap(json => this.http.get(json[0]['ApiHostUrl'] + apiPath, { params }).pipe(map(this.extractData)).pipe(catchError(this.handleError))));
    else
      return this.http.get(urldata).pipe(
        mergeMap(json => this.http.get(json[0]['ApiHostUrl'] + apiPath).pipe(map(this.extractData)).pipe(catchError(this.handleError))));
  }

  _postAPI(apiPath, data) {

    let urldata = environment.apiUrl;
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });
    httpHeaders.append('Access-Control-Allow-Origin', '/*');

    let options = {
      headers: httpHeaders
    };
    return this.http.get(urldata).pipe(
      mergeMap(json => this.http.post(json[0]['ApiHostUrl'] + apiPath, data, options).pipe(map(this.extractData)).pipe(catchError(this.handleError))));

  }

  public extractData(res: Response) {
    let body = res;
    return body;
  }

  // public handleError(error: Response | any) {
  //   debugger
  //   return Observable.throw(error.statusText);
  // }
  public handleError(error: Response | any) {
    debugger
    return throwError(error.statusText);
  }


// getAgentAdvanceInterest(fromdate,todate,globalSchema){
//     try{
//       const params = new HttpParams().set('fromdate',fromdate).set('todate',todate).set('globalSchema',globalSchema);
//       return this._commonService.getAPI('/ChitTransactions/ChitReports/getAgentAdvanceInterest', params, 'YES');
//     }
//     catch(errormssg){
//       this._commonService.showErrorMessage(errormssg);
//     }
//   }
getbranchdetails(){
  try{
    const params=new HttpParams()
    return this._getAPI('/SuperMarket/GetSuperMarketInvoiceDetails',params,'YES');
  }
  catch(errormssg){
          this.showErrorMessage(errormssg);
        }
  }
  showErrorMessage(msg){
    this.toastr.error(msg, "Error", { timeOut: this.msgtimeout })
  }
    getsupermarketdetails(){
      debugger
      try{
        const params=new HttpParams()
        return this._getAPI('/SuperMarket/GetSuperMarketInvoiceDetails',params,'YES');
      }
      catch(errormssg){
              this.showErrorMessage(errormssg);
            }
      }
}
// https://localhost:44358/api/Student/GetAllBranchesDetails