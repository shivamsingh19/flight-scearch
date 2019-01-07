import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DatePipe} from '@angular/common';
import {DataService} from '../service/data.service';

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.scss']
})
export class SearchFlightComponent implements OnInit {
  oneWayDetails: FormGroup;
  selected = '1';
  showHideReturnDate: boolean = true;
  cities: string[] = ['Pune (PNQ)', 'Delhi (DEL)', 'Mumbai (BOM)'];
  constructor(private fb: FormBuilder,
              private datePipe: DatePipe,
              private sendOne: DataService) { }

  ngOnInit() {
    this.oneWayDetails = this.fb.group({
      originCity: ['', Validators.required],
      destinationCity: ['', Validators.required],
      depDate: ['', Validators.required],
      returnDate: [],
      noOfPassenger: ['1'],
    });
  }


  onSearch(){
    this.sendOne.sendOneWayData(this.oneWayDetails.value);
    console.log(this.oneWayDetails.value);
  }
  enableReturn(){
    this.showHideReturnDate = false;

  }
  diableReturn(){
    this.showHideReturnDate = true;
    this.oneWayDetails.get('returnDate').setValue(null);
  }


}
