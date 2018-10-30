import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { TriviaClass } from '../TriviaClass';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.css']
})
export class TriviaComponent implements OnInit {

trivias:TriviaClass[];

  constructor (
    private ApiService: ApiService,
  ) { }

  ngOnInit() {
    this.trivias = this.ApiService.getTrivia();
    console.log(this.trivias);
  }
}
