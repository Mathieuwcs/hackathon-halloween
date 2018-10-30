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
    private ApiService: ApiService,
    private router : Router,
  ) { }

  ngOnInit() {
    this.trivias = this.ApiService.getTrivia();
    console.log(this.trivias);
  }
  giveAnswer() {
    if(this.trivias[0].correct_answer) {
      console.log("Gagné");
    } else {
      console.log("Perdu");
    }
    this.router.navigate(['/map'])
  }
  
}
