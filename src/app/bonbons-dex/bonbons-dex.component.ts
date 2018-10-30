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
  // tableauBonbonsAuMiel: Bonbon[];
  tableauMarshmallows: Bonbon[];
  tableauBonbonsGelifies: Bonbon[];
  tableauMeringuesFantaisie: Bonbon[];

  bonbonsDex: Bonbon[] = [];

  ngOnInit() {
    this.bonbonsDex = this.service.getBonbonsDex();
  }

  // onResponse() {
  //   // this.bonbonsDex = this.tableauMarshmallows.concat(this.tableauSucettes, this.tableauBonbonsGelifies, this.tableauMeringuesFantaisie);
  //   // const rnd = Math.floor(Math.random() * 5);
  //   console.log(this.bonbonsDex);
  //   // this.bonbonsDex.push(this.tableauBonbonsAuMiel[2]);
  // }

}
