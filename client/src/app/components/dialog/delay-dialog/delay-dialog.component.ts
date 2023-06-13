import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Flight, FlightDelay} from "../../../models/flight.model";

@Component({
  selector: 'app-delay-dialog',
  templateUrl: './delay-dialog.component.html',
  styleUrls: ['./delay-dialog.component.css']
})
export class DelayDialogComponent {

  delay: FlightDelay = new FlightDelay(0, 0, 0);

  constructor(
    public dialogRef: MatDialogRef<DelayDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Flight,
  ) {}

  onSubmit() {
    this.dialogRef.close({result: true, data: this.delay})
  }
}
