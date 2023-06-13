import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FlightService} from "../../services/flight.service";
import {ReservationService} from "../../services/reservation.service";
import {Subscription} from "rxjs";
import {Flight, FlightDelay} from "../../models/flight.model";
import {MatTableDataSource} from "@angular/material/table";
import {ReservationCreationDTO, ReservationParticipant} from "../../models/reservation.model";
import {MatPaginator} from "@angular/material/paginator";
import {MatDialog} from "@angular/material/dialog";
import {DelayDialogComponent} from "../dialog/delay-dialog/delay-dialog.component";
import {BookFlightDialogComponent} from "../dialog/book-flight-dialog/book-flight-dialog.component";

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayParticipants = false;

  flight: Flight;
  flightId: number;

  flight$: Subscription;
  flightId$: Subscription;

  participantColumns = ['id', 'first_name', 'last_name', 'is_adult'];

  participant$: Subscription;
  participantSource: MatTableDataSource<ReservationParticipant> = new MatTableDataSource<ReservationParticipant>();

  constructor(
    private route: ActivatedRoute,
    private flightService: FlightService,
    private reservationService: ReservationService,
    private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.extractFlightId();
    this.fetchFlightById();
    this.fetchParticipants()
  }

  ngAfterViewInit() {
    this.participantSource.paginator = this.paginator;
  }

  ngOnDestroy(): void {
    this.flight$.unsubscribe();
    this.flightId$.unsubscribe();
    this.participant$.unsubscribe();
  }

  private extractFlightId() {
    this.flightId$ = this.route.params.subscribe(params => {
      this.flightId = params['id'];
    })
  }

  private fetchFlightById() {
    this.flight$ = this.flightService.getFlightById(this.flightId)
      .subscribe(flights => {
        this.flight = flights[0]
      })
  }

  private fetchParticipants() {
    this.participant$ = this.flightService.getFlightParticipants(this.flightId)
      .subscribe(participants => {
        if (participants.length > 0) {
          this.displayParticipants = true;
        }
        this.participantSource = new MatTableDataSource<ReservationParticipant>(participants);
        this.participantSource.paginator = this.paginator;
      })
  }

  bookFlight() {
    this.dialog.open(BookFlightDialogComponent, {data: this.flight, minWidth: 1000})
      .afterClosed()
      .subscribe(res => {
        if (res !== undefined && res.result) {
          const dto: ReservationCreationDTO = res.data;
          this.reservationService.addReservation(dto)
            .subscribe(() => {
              this.fetchFlightById();
              this.fetchParticipants();
            })
        }
      })
  }

  delayFlight() {
    this.dialog.open(DelayDialogComponent, {data: this.flight})
      .afterClosed()
      .subscribe(res => {
        if (res.result) {
          const delay: FlightDelay = res.data;
          this.flightService.delayFlight(this.flightId, delay)
            .subscribe(() => this.fetchFlightById())
        }
      })
  }

  cancelFlight() {
    this.flightService.cancelFlight(this.flightId)
      .subscribe(() => {
        this.fetchFlightById();
        this.fetchParticipants();
      })
  }
}
