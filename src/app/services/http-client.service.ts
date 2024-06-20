import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IClient } from '../interface/IClient';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {


url : string = "http://localhost:4200/api"

  constructor(private http:HttpClient) { }

  recupererTousLesVehicules() {
    return this.http.get<any>(this.url + '/public/vehicules');
  }

  recupererTousLesVehiculesParDate(startDate:string, endDate:string){
    return this.http.get<any>(this.url + '/public/vehicules?page=0&startDate='+ startDate + '&endDate='+ endDate);
  }

  recupererVehiculeParId(id:number){
    return this.http.get<any>(this.url + '/public/vehicules/{id}?idVehicle='+ id)
  }


  connexion(id: string, mdp: string) {
    let body = { "email" : id, "password" : mdp};
    return this.http.post<any>(this.url + "/auth/user/authenticate", body);
  }

  inscription(client : IClient){
    let body = client;

    return this.http.post<any>(this.url + "/public/register", body)
  }

}
