import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightDataService {

  constructor(private http: HttpClient) { }
  public getFlightData() {
    const url = `https://tw-frontenders.firebaseio.com/advFlightSearch.json`;
    return this.http.get(url);
  }
}
