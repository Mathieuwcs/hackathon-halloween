import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hackathon-halloween 2018';

  constructor(
    private service: ApiService
  ) { }

  ngOnInit() {
    // Remplissage des tableaux de catégories de bonbon
    this.service.getTableauCandy('sucettes');
    this.service.getTableauCandy('marshmallows');
    this.service.getTableauCandy('bonbons-gelifies');
    this.service.getTableauMerinques('meringues-fantaisie');
  }
}
