import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../service/data.service';
import {DatePipe} from '@angular/common';
import * as moment from 'moment';

@Component({
  selector: 'app-return-flight',
  templateUrl: './return-flight.component.html',
  styleUrls: ['./return-flight.component.scss']
})
export class ReturnFlightComponent implements OnInit {
  @Input() data;
  finalFlightData: any [] = [];
  returnFormData;
  noOfPassenger;
  flightsArray: any [] =[];
  sumPrice: number = 0;
  flightData: any[] = [];
  constructor(private getOne: DataService,
              private datePipe: DatePipe) { }

  ngOnInit() {
    this.getOne.getOneWayData().subscribe(data => {
      data.returnDate = this.datePipe.transform(data.returnDate, 'yyyy/MM/dd');
      this.returnFormData = data;
      this.noOfPassenger = Number(this.returnFormData.noOfPassenger);
      this.finalFlightData = [];
      if (this.returnFormData && this.returnFormData.returnDate !== null) {
        this.finalFlightData = [];
        this.flightData = [];
        this.flightData = this.data.filter(flight => (flight.origin === this.returnFormData.destinationCity ||
          flight.destination === this.returnFormData.originCity) &&
          flight.date === this.returnFormData.returnDate
        );
        this.getOne.sendreturnDataL(this.flightData.length);

        for (let i = 0 ; i < this.flightData.length; i++) {
          if (this.flightData[i].destination === this.returnFormData.originCity && this.flightData[i].origin === this.returnFormData.destinationCity ) {
            this.flightData[i].marked = 'done';
            this.flightData[i].isdirect = true;
            let timeDiff = this.timeDifference(this.flightData[i].date,this.flightData[i].departureTime,this.flightData[i].arrivalTime);
            let totalTime = timeDiff.hours() + 'h' + ' ' + timeDiff.minutes() + 'm';
            this.flightData[i].totalTime = totalTime;
            this.finalFlightData.push(this.flightData[i]);
            console.log(this.finalFlightData);
          }
          if (this.flightData[i].destination !== this.returnFormData.originCity && this.flightData[i].origin === this.returnFormData.destinationCity ) {
            let arrivalT;
            let filterData = this.fliterConnectedFlight(this.flightData[i].destination, this.returnFormData.originCity);
            for (let j=0; j < filterData.length; j++) {
              let timeDiff = this.timeDifference(this.flightData[i].date, this.flightData[i].arrivalTime, filterData[j].departureTime , );
              if (timeDiff.minutes() > 30 || timeDiff.hours() > 0) {
                arrivalT = filterData[j].arrivalTime;
                this.flightsArray.push(this.flightData[i]);
                this.flightsArray.push(filterData[j]);
                this.sumPrice += filterData[j].price;
                let totalTime = timeDiff.hours() + 'h' + ' ' + timeDiff.minutes() + 'm';
                this.finalFlightData.push({
                  'isdirect': false,
                  'origin': this.returnFormData.destinationCity,
                  'departureTime': this.flightData[i].departureTime,
                  'destination': this.returnFormData.originCity,
                  'arrivalTime': arrivalT,
                  'totalTime': totalTime,
                  'price': this.sumPrice,
                  'flights': this.flightsArray
                });
                this.flightsArray = [];
                this.sumPrice = 0;
              }
            }
          }
        }
      }
    });

  }

  fliterConnectedFlight(destionation , searchDestination) {
    let fliterData = this.flightData.filter(data => (data.origin === destionation && data.destination === searchDestination));
    return fliterData;
  }

  show(data) {
    data.showHide = true;
  }

  hide(data) {
    data.showHide = false;
  }

  timeDifference(date, departureTime, arrivalTime) {
    // date = this.datePipe.transform(date, 'yyyy-MM-dd');
    let date1 = date + ' ' + departureTime;
    let date2 = date + ' ' + arrivalTime;
    console.log(date1);
    console.log(date2);

    let ms = moment(date2.toString(),"DD/MM/YYYY HH:mm").diff(moment(date1.toString(),"DD/MM/YYYY HH:mm"));

    let d = moment.duration(ms);
    console.log(d.hours() + 'h' + ' ' + d.minutes() + 'm');
    return d;
  }


}
