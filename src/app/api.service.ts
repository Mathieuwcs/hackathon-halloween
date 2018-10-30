import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  lat: number;
  lng: number;

  setLatLng(lat, lng){
    this.lat = lat;
    this.lng = lng;
    console.log(this.lat, this.lng);
  }

  constructor(private http: HttpClient) { }

  getAdress(lat,long) {
    lat = this.lat;
    lng = this.lng;
    let adress = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${long}&key=4e73016747394b95922ddd5fa3df9fb5`;
    return this.http.get<any>(adress)
  }
}
