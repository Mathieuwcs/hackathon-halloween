import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { TriviaComponent } from './trivia/trivia.component';
import { RecapComponent } from './recap/recap.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'map', component: MapComponent },
  { path: 'trivia', component: TriviaComponent },
  { path: 'recap', component: RecapComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MapComponent,
    TriviaComponent,
    RecapComponent, 
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    ),
  ],
  providers: [
    ApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
