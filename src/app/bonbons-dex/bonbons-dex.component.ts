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
  tableauBonbonsAuMiel: Bonbon[];

  ngOnInit() {
    this.tableauSucettes = this.service.getTableauCandy('sucettes');
    this.tableauBonbonsAuMiel = this.service.getTableauCandy('bonbons-au-miel');
    
  }

}
