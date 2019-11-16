//helper.service.ts
import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';


 
@Injectable({providedIn: 'root'})
export class HelperService {
 
  url = environment.API_URL;
 
  constructor(private httpClient: HttpClient) {
    
  }
  getNSESYMBOL():Observable<any> {
    return this.httpClient.get(this.url+'/api/nse/symbol/')
  }
  getNSEEXPIRY():Observable<any> {
    return this.httpClient.get(this.url+'/api/nse/expiry/')
  }
  getNSE(SymbolName,ExpiryDates):Observable<any> {
    let jsonString = JSON.stringify({"SymbolName": "" + SymbolName + "","ExpiryDates": "" + ExpiryDates + ""})
    return this.httpClient.get(`${this.url}/api/nse/${jsonString}`)
  }
  
}