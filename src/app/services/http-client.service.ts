import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {


url : string = "http://localhost:8080/api"

  constructor(private http:HttpClient) { }

  recupererTousLesVehicules() {
    return this.http.get<any>(this.url + '/public/vehicules');
  }

  recupererTousLesVehiculesParDate(startDate:string, endDate:string){
    return this.http.get<any>(this.url + '/public/vehicules?page=0&startDate='+ startDate + '&endDate='+ endDate);
  }

}
