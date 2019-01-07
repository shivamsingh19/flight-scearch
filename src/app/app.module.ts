import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule, MatInputModule, MatDividerModule, MatTabsModule, MatDatepickerModule, MatNativeDateModule,
  MatSelectModule, MatCardModule, MatExpansionModule, MatButtonModule, MatAutocompleteModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AirSearchPageComponent } from './air-search-page/air-search-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DatePipe} from '@angular/common';
import {FlightDataService} from './service/flight-data.service';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { OnewayFlightComponent } from './oneway-flight/oneway-flight.component';
import { ReturnFlightComponent } from './return-flight/return-flight.component';

@NgModule({
  declarations: [
    AppComponent,
    AirSearchPageComponent,
    SearchFlightComponent,
    OnewayFlightComponent,
    ReturnFlightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, HttpClientModule, FormsModule, ReactiveFormsModule,
    MatFormFieldModule, MatInputModule, MatDividerModule, FlexLayoutModule, MatTabsModule, MatDatepickerModule, MatNativeDateModule,
    MatSelectModule, MatCardModule, MatExpansionModule, MatButtonModule, MatAutocompleteModule, MatIconModule, MatRadioModule
  ],
  providers: [DatePipe, FlightDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
