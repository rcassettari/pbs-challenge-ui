import { Injectable } from '@angular/core';
import { ManualMovementInput } from 'src/app/interfaces/manualmovementinput.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ManualMovementService {

  constructor(private http: HttpClient) { }

  add(manualMovementInput:ManualMovementInput)
  {
    return this.http.post('http://localhost:8085/v1/manualmovement', manualMovementInput)
              .toPromise()
              .then(response => response);
  }

  getAll(): Promise<any> {
    return this.http.get('http://localhost:8085/v1/manualmovement')
              .toPromise()
              .then(response => response);
  }

}
