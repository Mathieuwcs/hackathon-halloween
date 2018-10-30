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
    // this.http.get<any>(`https://fr.openfoodfacts.org/categorie/sucettes/${Math.floor((Math.random() * 3) + 1)}.json`)
    this.http.get<any>(`https://fr.openfoodfacts.org/categorie/${category}/1.json`)
    .subscribe((data) => {
      const obj = data.products;
      // Boucle pour instancier les quatre premiers objet du JSON en classe Bonbon
      for (let i = 0; i < 5; i++) {
        const unBonbon = new Bonbon(obj[i].product_name_fr, category );
        this.bonbonsDex.push(unBonbon);
      }
    });
    console.log(this.bonbonsDex);

  }
}
