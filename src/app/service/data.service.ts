import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private oneWayData = new Subject<any>();
  private oneWayDataLenght = new Subject<any>();
  private returnDataLenght = new Subject<any>();

  constructor() { }

  sendOneWayData(data: any) {
    this.oneWayData.next(data);
  }

  getOneWayData(): Observable<any> {
    return this.oneWayData.asObservable();
  }

  sendOneWayDataL(data: any) {
    this.oneWayDataLenght.next(data);
  }

  getOneWayDataL(): Observable<any> {
    return this.oneWayDataLenght.asObservable();
  }

  sendreturnDataL(data: any) {
    this.returnDataLenght.next(data);
  }

  getreturnDataL(): Observable<any> {
    return this.returnDataLenght.asObservable();
  }
}
