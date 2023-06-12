import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FlightSearchComponent} from './components/flight-search/flight-search.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutComponent} from "./components/layout/layout.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {FlightListComponent} from './components/flight-list/flight-list.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ApiInterceptor} from "./utils/api.interceptor";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatMenuModule} from "@angular/material/menu";
import {MatChipsModule} from "@angular/material/chips";
import {StatusChipPipe} from './utils/pipes/status-chip.pipe';
import {ToLowerCasePipe} from './utils/pipes/to-lower-case.pipe';
import {MatTabsModule} from "@angular/material/tabs";
import {MatDialogModule} from "@angular/material/dialog";
import { ConvertDelayPipe } from './utils/pipes/convert-delay.pipe';
import { OperationListComponent } from './components/operation-list/operation-list.component';
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import { ReservationListComponent } from './components/reservation-list/reservation-list.component';
import { FlightDetailsComponent } from './components/flight-details/flight-details.component';


@NgModule({
  declarations: [
    AppComponent,
    FlightSearchComponent,
    LayoutComponent,
    FlightListComponent,
    StatusChipPipe,
    ToLowerCasePipe,
    ConvertDelayPipe,
    OperationListComponent,
    ReservationListComponent,
    FlightDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatMenuModule,
    MatChipsModule,
    MatTabsModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ApiInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
