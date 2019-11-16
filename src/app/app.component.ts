import { Component } from '@angular/core';
import { HelperService } from './_service/helper.service';
import {NSESYMBOL} from './models/symbol';
import {NSEEXPIRY} from './models/expiry';
import {NSE} from './models/nsedata';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[HelperService]
})
export class AppComponent {
  title = 'nseui';
  getNSEData : NSE[];
  getSymbolData : NSESYMBOL[];
  getExpiryData  : NSEEXPIRY[];
  getFilterExpiryData  = [];
  funGetNSECALCData: any;
  newAttribute: any = {};
  selectedOption1: string;
  selectedOption2: string;
  private data: any = [];
  public now: Date = new Date();
  constructor(public httpClient: HttpClient, private _helperService: HelperService){
  }
  ngOnInit(): void {
     this._helperService.getNSESYMBOL()
      .subscribe
      (
        data=> 
        {
           this.getSymbolData = data;
           // console.log(this.getSymbolData)
        }
      )

      this._helperService.getNSEEXPIRY()
      .subscribe
      (
        data=> 
        {
           this.getExpiryData = data;
           // console.log(this.getExpiryData)
        }
      )
    this.funGetNSECALCData = function getData(SymbolName,ExpiryDates){ this._helperService.getNSE(SymbolName,ExpiryDates)
      .subscribe
      (
        data=> 
        {
           this.getNSEData = data;
           // console.log(this.getNSEData)
        }
      )    
      }
    this.now = new Date();
  }
  getNSECALCData(){
    let SymbolName = this.selectedOption1;
    let ExpiryDates = this.selectedOption2;
    this.funGetNSECALCData(SymbolName,ExpiryDates);
  }
  onItemSelect(event){
    this.getFilterExpiryData = [];
    this.getFilterExpiryData = this.getExpiryData.filter(a => a.SymbolName == event)
    // console.log(this.getFilterExpiryData)
  }

}
