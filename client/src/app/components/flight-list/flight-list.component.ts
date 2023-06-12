import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FlightService} from "../../services/flight.service";
import {Flight} from "../../models/flight.model";
import {Subscription} from "rxjs";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;


  displayedColumns = ['id', 'airline', 'origin', 'destination', 'departure', 'status', 'more']
  dataSource: MatTableDataSource<Flight> = new MatTableDataSource<Flight>();

  flights: Flight[];
  flightsSubscription: Subscription;

  constructor(private flightService: FlightService) {
  }

  ngOnInit(): void {
    this.findFlights();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy(): void {
    this.flightsSubscription.unsubscribe();
  }

  private findFlights(request = this.flightService.getFlights()) {
    this.flightsSubscription = request
      .subscribe(data => {
        this.dataSource = new MatTableDataSource<Flight>(data);
        this.dataSource.paginator = this.paginator;
      });
  }

  handleTabChange(index: number) {
    console.log(index);
    if (index === 0) {
      this.findFlights();
      return;
    }
    this.findFlights(this.flightService.getAvailableFlights());
  }
}
