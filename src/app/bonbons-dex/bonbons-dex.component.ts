import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Bonbon } from '../bonbon';


@Component({
  selector: 'app-bonbons-dex',
  templateUrl: './bonbons-dex.component.html',
  styleUrls: ['./bonbons-dex.component.css']
})
export class BonbonsDexComponent implements OnInit {

  constructor(
    private service: ApiService
  ) { }

  tableauSucettes: Bonbon[];
  tableauMarshmallows: Bonbon[];
  tableauBonbonsGelifies: Bonbon[];
  tableauMeringuesFantaisie: Bonbon[];

  bonbonsDex: Bonbon[] = [];

  ngOnInit() {
    this.bonbonsDex = this.service.getBonbonsDex();
  }
}
