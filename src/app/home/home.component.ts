import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  latitude;
  longitude;
  adress;

  constructor(private router: Router, private service: ApiService) { }

  laposition= (position) => {
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;
    console.log(this.latitude)
    this.service.getAdress(this.latitude, this.longitude)
    .subscribe(data =>{
      this.adress = data.results[0].formatted
      console.log(data)

    });
  }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition(this.laposition.bind(this));
  }
  onClick() {
  this.router.navigate(['/map']);
  }
}
