import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FlagService {

  constructor(private http:HttpClient) { }

  getcountries(){
    return this.http.get('https://restcountries.com/v3.1/all');
  }
  searchCountries(data:any){
    let url="https://restcountries.com/v3.1/name/"+ data;
  
     return this.http.get(url)
  }
}
