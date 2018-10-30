import { Component, OnInit } from '@angular/core';
// import { ApiService } from '../api.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  public lat: number;
  public lng: number;
  public geoloc;
  // public rue : string;

  constructor() { }
// private ApiService: ApiService
  ngOnInit() {
 

    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    
    function success(pos) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(x);
        }, 2000);
  });
      const crd = pos.coords;
    
      console.log('Votre position actuelle est :');
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`Plus ou moins ${crd.accuracy} mètres.`);
      // return this.geoloc = pos.coords;
    };
    
    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    };
    
    navigator.geolocation.getCurrentPosition(success, error, options);
    // console.log(this.geoloc);
  }
  
    // this.ApiService.getAdress(this.lat, this.lng)
    //   .subscribe(data=>{
    //     console.log(this.lat);
    //     this.rue = data.results[0].formatted;
    //     // console.log(data);
    //     // console.log(this.rue)
    //   });
    }
  }


// https://api.opencagedata.com/geocode/v1/json?q=45.75483270000001+4.841486499999999&key=4e73016747394b95922ddd5fa3df9fb5
