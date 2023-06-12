import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ReservationService} from "../../services/reservation.service";
import {Subscription} from "rxjs";
import {MatTableDataSource} from "@angular/material/table";
import {Reservation} from "../../models/reservation.model";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit, OnDestroy {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  reservation$: Subscription;
  reservationSource: MatTableDataSource<Reservation> = new MatTableDataSource<Reservation>();

  displayedColumns = ['id', 'username', 'status', 'date', 'origin', 'destination', 'more']

  constructor(private reservationService: ReservationService) {
  }

  ngOnInit(): void {
    this.fetchReservations();
  }

  ngOnDestroy(): void {
    this.reservation$.unsubscribe();
  }

  private fetchReservations() {
    this.reservation$ = this.reservationService.getReservations()
      .subscribe(data => {
        this.reservationSource = new MatTableDataSource<Reservation>(data);
        this.reservationSource.paginator = this.paginator;
      })
  }

  handleSearchQueryChange(query: string) {
    this.reservationSource.filter = query;
    this.reservationSource.paginator = this.paginator;
  }

  makePayment(reservationId: number) {
    this.reservationService.makePaymentForReservation(reservationId)
      .subscribe(() => this.fetchReservations())
  }

  cancelReservation(reservationId: number) {
    this.reservationService.cancelReservation(reservationId)
      .subscribe(() => this.fetchReservations());
  }
}
