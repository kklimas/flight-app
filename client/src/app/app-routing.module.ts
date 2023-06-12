import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FlightListComponent} from "./components/flight-list/flight-list.component";
import {OperationListComponent} from "./components/operation-list/operation-list.component";
import {ReservationListComponent} from "./components/reservation-list/reservation-list.component";
import {FlightDetailsComponent} from "./components/flight-details/flight-details.component";

const routes: Routes = [
  {path: '', redirectTo: 'flights', pathMatch: 'full'},
  {path: 'flights', component: FlightListComponent, pathMatch: 'full'},
  {path: 'flights/:id', component: FlightDetailsComponent, pathMatch: 'full'},
  {path: 'booking', component: ReservationListComponent, pathMatch: 'full'},
  {path: 'operations', component: OperationListComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
