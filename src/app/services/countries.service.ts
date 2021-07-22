import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private REST_API_SERVER = "https://covid-19-data.p.rapidapi.com/country/all";
  private defaultCountries = ['italy','ukraine','israel','germany','poland']

  constructor(private httpClient: HttpClient) { }

  public getCountries(){
    //return this.httpClient.get(this.REST_API_SERVER);
    let it = this.httpClient.get(this.REST_API_SERVER, {params: {name: this.defaultCountries[0]}}).pipe(delay(1000));
    let ukr = this.httpClient.get(this.REST_API_SERVER, {params: {name: this.defaultCountries[1]}}).pipe(delay(1200));
    let isr = this.httpClient.get(this.REST_API_SERVER, {params: {name: this.defaultCountries[2]}});  
    let gr = this.httpClient.get(this.REST_API_SERVER, {params: {name: this.defaultCountries[3]}}); 
    let pl = this.httpClient.get(this.REST_API_SERVER, {params: {name: this.defaultCountries[4]}});
    return forkJoin([it,ukr]);
  }
}
