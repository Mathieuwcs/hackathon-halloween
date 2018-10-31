import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { TriviaClass } from '../TriviaClass';
import { Router } from "@angular/router";



@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.css']
})
export class TriviaComponent implements OnInit {

trivias:TriviaClass[];
i = 0;
timer;




  constructor (
    private service: ApiService,
    private router : Router,
  ) { }

  ngOnInit() {
    this.trivias = this.service.getTrivia();
    console.log(this.trivias);
  }
  
  

  winBonbons() {
    if (this.service.bonbonWinSwitch) {
      this.service.tableauSucettes.filter(bonbon => !bonbon.collected)[0].collected = true;
      this.service.tableauMarshmallows.filter(bonbon => !bonbon.collected)[0].collected = true;
      this.service.bonbonWinSwitch = false;
    } else {
      this.service.tableauBonbonsGelifies.filter(bonbon => !bonbon.collected)[0].collected = true;
      this.service.tableauMeringuesFantaisie.filter(bonbon => !bonbon.collected)[0].collected = true;
      this.service.bonbonWinSwitch = true;
    }
  }
  
  giveAnswer() {
    if(this.trivias[0].correct_answer) {
      
      this.winBonbons();
      console.log(this.service.tableauSucettes);
      console.log(this.service.tableauMarshmallows);
      console.log(this.service.tableauBonbonsGelifies);
      console.log(this.service.tableauMeringuesFantaisie);
    } else {
      console.log("Perdu");
    }
    this.router.navigate(['/map'])
  }
  
}



