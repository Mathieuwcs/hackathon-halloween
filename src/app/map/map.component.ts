import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
 timer;
  constructor(private service: ApiService, private router: Router) { }

  ngOnInit() {

    this.timer = this.service.getTimer();
    console.log(this.timer);
    if (this.timer === '22H30') {
      this.router.navigate(['/recap']);
      console.log('FIN DE LA PARTIE');
    }
  }

  changeRoute() {
    this.service.changeNumberAdress();
    this.router.navigate(['/trivia']);
  }
}
