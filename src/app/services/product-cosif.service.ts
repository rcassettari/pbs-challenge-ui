import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductCosifService {

  constructor(private http: HttpClient) { }

  getAllByProduct(productCode:string): Promise<any> {
    return this.http.get('http://localhost:8085/v1/productcosif/allactive/product/' + productCode)
              .toPromise()
              .then(response => response);
  }

}
