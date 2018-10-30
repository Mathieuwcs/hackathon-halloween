import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bonbon } from './bonbon';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  bonbonsDex: Bonbon[] = [];

  tableauSucettes: Bonbon[] = [];
  tableauMarshmallows: Bonbon[] = [];
  tableauBonbonsGelifies: Bonbon[] = [];
  tableauMeringuesFantaisie: Bonbon[] = [];

  getBonbonsDex() {
    return this.bonbonsDex;
  }

  getTableauCandy(category): void {
    this.http.get<any>(`https://fr.openfoodfacts.org/categorie/${category}/1.json`)
    .subscribe((data) => {
      const obj = data.products;
      // Boucle pour instancier les cinq premiers objet du JSON en classe Bonbon
      for (let i = 0; i < 5; i++) {
        const unBonbon = new Bonbon(obj[i].product_name_fr, category );
        this.bonbonsDex.push(unBonbon);
        switch (category) {
          case 'sucettes':
            this.tableauSucettes.push(unBonbon);
          case 'marshmallows':
            this.tableauMarshmallows.push(unBonbon);
          case 'bonbons-gelifies':
            this.tableauBonbonsGelifies.push(unBonbon);
          case 'meringues-fantaisie':
            this.tableauMeringuesFantaisie.push(unBonbon);
        }   
      }
    });
    console.log(this.bonbonsDex);

  }
}
