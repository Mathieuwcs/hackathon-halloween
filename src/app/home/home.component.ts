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
  address;

  constructor(private router: Router, private service: ApiService) { }

  laposition = (position) => {
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;
    this.service.getAddress(this.latitude, this.longitude)
    .subscribe(data => {
      this.address = data.results[0].formatted;
    });
  }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition(this.laposition.bind(this));
  }

  onClick() {
  this.router.navigate(['/map']);
  }
}
