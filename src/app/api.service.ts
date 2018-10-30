import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TriviaClass } from './TriviaClass';
import { Bonbon } from './bonbon';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  i=0;
  timerHours = [
    "17H00",
    "17H30",
    "18H00",
    "18H30",
    "19H00",
    "19H30",
    "20H00",
    "21H00",
    "21H30",
    "22H00",
    "22H30",
    "23H00",
    "23H30",
    "00H00"
  
  ];

  constructor(private http: HttpClient) { }

  bonbonsDex: Bonbon[] = [];

  tableauSucettes: Bonbon[] = [];
  tableauMarshmallows: Bonbon[] = [];
  tableauBonbonsGelifies: Bonbon[] = [];
  tableauMeringuesFantaisie: Bonbon[] = [];

  // getBonbonsDex() {
  //   return this.bonbonsDex;
  // }

  getTableauCandy(category) {
    this.http.get<any>(`https://fr.openfoodfacts.org/categorie/${category}/1.json`)
    .subscribe((data) => {
      const obj = data.products;
      // Boucle pour instancier les cinq premiers objet du JSON en classe Bonbon
      for (let i = 0; i < 5; i++) {
        const unBonbon = new Bonbon(obj[i].product_name_fr, category, false );
        // this.bonbonsDex.push(unBonbon);
        switch (category) {
          case 'sucettes':
            this.tableauSucettes.push(unBonbon);
            break;
          case 'marshmallows':
            this.tableauMarshmallows.push(unBonbon);
            break;
          case 'bonbons-gelifies':
            this.tableauBonbonsGelifies.push(unBonbon);
            break;
          case 'meringues-fantaisie':
            this.tableauMeringuesFantaisie.push(unBonbon);
            break;
        }
      }
      // while (this.bonbonsDex.length > 20) {
      //   this.bonbonsDex.splice(Math.floor(Math.random() * this.bonbonsDex.length), 1);
      // }
    });
  }


  getTimer(){
  this.i++;
  return this.timerHours[this.i];

}

getTrivia() {
  let trivias: TriviaClass[] = [];

  this.http.get<any>('https://opentdb.com/api.php?amount=1&category=9&difficulty=easy')
    .subscribe((reponse: any) => {
      let triviasTable = reponse.results;
        for (let trivia of triviasTable) {
          let unTrivia = new TriviaClass(
            trivia.category,
            trivia.type,
            trivia.difficulty,
            trivia.question,
            trivia.correct_answer,
            trivia.incorrect_answers[0],
            trivia.incorrect_answers[1],
            trivia.incorrect_answers[2],
          );
          trivias.push(unTrivia);
        }
    });
  return trivias;
}

}






