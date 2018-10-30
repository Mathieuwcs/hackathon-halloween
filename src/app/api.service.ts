import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bonbon } from './bonbon';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getTableauCandy(category) {
    const tableauBonbons: Bonbon[] = [];
    // this.http.get<any>(`https://fr.openfoodfacts.org/categorie/sucettes/${Math.floor((Math.random() * 3) + 1)}.json`)
    this.http.get<any>(`https://fr.openfoodfacts.org/categorie/${category}/1.json`)
    .subscribe((data) => {
      const obj = data.products;
      for (let element of obj) {
        const unBonbon = new Bonbon(element.product_name_fr, category );
        tableauBonbons.push(unBonbon);
      }
    });
    return tableauBonbons;
  }
}
