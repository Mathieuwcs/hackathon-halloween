import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TriviaClass } from './TriviaClass';

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






