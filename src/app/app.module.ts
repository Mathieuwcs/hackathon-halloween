import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { TriviaComponent } from './trivia/trivia.component';
import { RecapComponent } from './recap/recap.component';
import { BonbonsDexComponent } from './bonbons-dex/bonbons-dex.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'map', component: MapComponent },
  { path: 'trivia', component: TriviaComponent },
  { path: 'recap', component: RecapComponent },
  { path: 'bonbonsdex', component: BonbonsDexComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MapComponent,
    TriviaComponent,
    RecapComponent,
    BonbonsDexComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    HttpClientModule,
  ],
  providers: [
    ApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
