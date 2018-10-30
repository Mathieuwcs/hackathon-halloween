import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bonbon } from './bonbon';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  bonbonsDex: Bonbon[] = [];

  getBonbonsDex() {
    return this.bonbonsDex;
  }

  getTableauCandy(category): void {
    this.http.get<any>(`https://fr.openfoodfacts.org/categorie/${category}/1.json`)
    .subscribe((data) => {
      const obj = data.products;
      // Boucle pour instancier les cinq premiers objet du JSON en classe Bonbon
      for (let i = 0; i < obj.length; i++) {
        const unBonbon = new Bonbon(obj[i].product_name_fr, category );
        this.bonbonsDex.push(unBonbon);
      }
      while (this.bonbonsDex.length > 20) {
        this.bonbonsDex.splice(Math.floor(Math.random() * this.bonbonsDex.length), 1);
      };
    });
    console.log(this.bonbonsDex);

  }
}
