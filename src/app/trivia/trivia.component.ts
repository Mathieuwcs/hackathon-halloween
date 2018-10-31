import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { TriviaClass } from '../TriviaClass';
import { Router } from '@angular/router';
import { Bonbon } from '../bonbon';



@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.css']
})
export class TriviaComponent implements OnInit {

trivia: TriviaClass;
latitude;
longitude;
adress;
numberAdress;

  constructor (
    private service: ApiService,
    private router: Router,
  ) { }

  ngOnInit() {
    // tslint:disable-next-line:max-line-length
    // AU DÉBUT JE VOULAIS FAIRE UN NGFOR SUR LE TABLEAU ANSWERS MAIS C'ÉTAIT TROP HORRIBLE POUR METTRE TOUT ÇA EN PAGE ET C'ÉTAIT TROP 4H DU MATIN
    navigator.geolocation.getCurrentPosition(this.laposition.bind(this));

    this.numberAdress = this.service.getNumberAdress();
    
    this.service.getTrivia()
    .subscribe((reponse: any) => {
      const rawTrivia = reponse.results;
        const answerTable = [
          rawTrivia[0].correct_answer,
          rawTrivia[0].incorrect_answers[0],
        ];
        if (rawTrivia[0].incorrect_answers[1]) {
          answerTable.push(rawTrivia[0].incorrect_answers[1]);
        }
        if (rawTrivia[0].incorrect_answers[2]) {
          answerTable.push(rawTrivia[0].incorrect_answers[2]);
        }
        this.trivia = new TriviaClass(
          rawTrivia[0].category,
          rawTrivia[0].type,
          rawTrivia[0].difficulty,
          rawTrivia[0].question,
          answerTable
        );
    });
  }

  winBonbons() {
    this.service.bonbonCounter = this.service.bonbonCounter+ 2;
    const bonbonsWon: Bonbon[] = [];
    if (this.service.bonbonWinSwitch) {
      this.service.tableauSucettes.filter(bonbon => {
        if (!bonbon.collected) {
          bonbonsWon.push(bonbon);
        }
        return !bonbon.collected; })[0].collected = true;
      this.service.tableauMarshmallows.filter(bonbon => {
        if (!bonbon.collected) {
          bonbonsWon.push(bonbon);
        }
        return !bonbon.collected; })[0].collected = true;
      // bonbonsWon.push(this.service.tableauSucettes)

      this.service.bonbonWinSwitch = false;
    } else {
      this.service.tableauBonbonsGelifies.filter(bonbon => {
        if (!bonbon.collected) {
          bonbonsWon.push(bonbon);
        }
        return !bonbon.collected; })[0].collected = true;
      this.service.tableauMeringuesFantaisie.filter(bonbon => {
        if (!bonbon.collected) {
          bonbonsWon.push(bonbon);
        }
        return !bonbon.collected; })[0].collected = true;
      this.service.bonbonWinSwitch = true;
    }
    alert(`You're in for a treat! These are the candies you just won:\n - ${bonbonsWon[0].name} \n - ${bonbonsWon[1].name}`);
  }


  giveAnswer(param) {
    if (param === this.trivia.answers[0]) {
      console.log('Gagné');
      this.winBonbons();
    } else {
      alert(`You just won a candy apple filled with razor blades!`);
    }
    this.router.navigate(['/map']);
  }

  laposition= (position) => {
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;
    console.log(this.latitude)
    this.service.getAdress(this.latitude, this.longitude)
    .subscribe(data =>{
      this.adress = data.results[0].components.road
      console.log(data)

    });
  }
}



