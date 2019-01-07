import { Component, OnInit } from '@angular/core';
import {FlightDataService} from '../service/flight-data.service';
import {DataService} from '../service/data.service';
import * as moment from 'moment';
@Component({
  selector: 'app-air-search-page',
  templateUrl: './air-search-page.component.html',
  styleUrls: ['./air-search-page.component.scss']
})
export class AirSearchPageComponent implements OnInit {
  flightData
  formData;
  oneWayLen: number;
  returnLen: number;
  depDate;
  returnDate;

  constructor(private flightSer: FlightDataService,
              private getOne: DataService) {
  }

  ngOnInit() {
    this.getOne.getOneWayData().subscribe(data => {
      this.formData = data;
      this.depDate = moment(this.formData.depDate).format('ddd, Do MMM');
      this.returnDate = moment(this.formData.returnDate).format('ddd, Do MMM');
    });



      this.flightSer.getFlightData().subscribe(flyData => {
        this.flightData = flyData;
      });

      this.getOne.getOneWayDataL().subscribe(data => this.oneWayLen = data);
    this.getOne.getreturnDataL().subscribe(data => this.returnLen = data)
  }
}
