import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import {  HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CoronaService {

  baseUrl='https://covid19.mathdro.id/api';
  constructor( private http:HttpClient) { }

  // getCountries():Observable<any> {
  //   const url ="https://api.covid19api.com/countries"
  //   return this.http.get<any>(url)
  // }

  // public getCoronaActiveData(selectedValue):Observable<any>{
  //   const url1 = "https://corona.lmao.ninja/v2/countries/"+selectedValue
  //   console.log(url1)
  //   return this.http.get<any>(url1)
  // }
 Covid19Reports():Observable<any>{
  const url1="https://api.covid19india.org/data.json"
    return  this.http.get<any>(url1)
}

fetchData(){
return this.http.get(this.baseUrl);
}

fetchDataByCountry(country:string){
   return this.http.get(this.baseUrl+'/countries/'+country);
  
}

fetchDailyData(){
  return this.http.get(this.baseUrl+'/daily');
}

fetchCountries(){
  return this.http.get(this.baseUrl+'/countries');
}



}
