import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {OperationService} from "../../services/operation.service";
import {PaymentOperation, ReservationLog, ReservationTransaction} from "../../models/operation.model";
import {MatTableDataSource} from "@angular/material/table";
import {Flight} from "../../models/flight.model";
import {Subject, Subscription} from "rxjs";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-operation-list',
  templateUrl: './operation-list.component.html',
  styleUrls: ['./operation-list.component.css']
})
export class OperationListComponent implements OnInit, OnDestroy{
  @ViewChild('reservationPaginator') reservationPaginator: MatPaginator;
  @ViewChild('paymentsPaginator') paymentPaginator: MatPaginator;

  payment$: Subscription;
  reservationLogs$: Subscription;

  paymentSource: MatTableDataSource<PaymentOperation> = new MatTableDataSource<PaymentOperation>()
  reservationLogsSource: MatTableDataSource<ReservationTransaction> = new MatTableDataSource<ReservationTransaction>()

  reservationLogColumns = ['id', 'first_name', 'last_name', 'status', 'log_date']
  paymentColumns = ['id', 'reservation_id', 'username', 'type', 'amount', 'date', 'account_number']

  currentTab = 0;

  constructor(private operationService: OperationService) {
  }

  ngOnInit(): void {
    this.fetchReservationLogs();
  }

  ngOnDestroy(): void {
    this.reservationLogs$.unsubscribe();
    this.payment$?.unsubscribe();
  }

  handleTabChange(tab: number) {
    if (tab === 0) {
      this.fetchReservationLogs();
      return;
    }
    this.fetchPayments();
  }

  private fetchReservationLogs() {
    this.reservationLogs$ = this.operationService.getTransactions()
      .subscribe(data => {
        this.reservationLogsSource = new MatTableDataSource<ReservationTransaction>(data);
        this.reservationLogsSource.paginator = this.reservationPaginator;
      })
  }

  private fetchPayments() {
    this.payment$ = this.operationService.getPayments()
      .subscribe(data => {
        this.paymentSource = new MatTableDataSource<PaymentOperation>(data);
        this.paymentSource.paginator = this.paymentPaginator;
      })
  }

  handleSearchQueryChange(query: string) {
    if (this.currentTab === 0) {
      this.reservationLogsSource.filter = query;
      this.reservationLogsSource.paginator = this.reservationPaginator;
      return;
    }
    this.paymentSource.filter = query;
    this.paymentSource.paginator = this.paymentPaginator;
  }
}
