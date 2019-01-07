import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AirSearchPageComponent} from './air-search-page/air-search-page.component';

const routes: Routes = [
  {path: 'flightSearch', component: AirSearchPageComponent},
  { path: '', redirectTo: '/flightSearch', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
