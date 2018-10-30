import { Component, OnInit } from '@angular/core';
import { Bonbon } from '../bonbon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.css']
})
export class RecapComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  }

}
