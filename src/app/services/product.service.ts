import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAll(): Promise<any> {
    return this.http.get('http://localhost:8085/v1/product/allactive')
              .toPromise()
              .then(response => response );
  }

}
