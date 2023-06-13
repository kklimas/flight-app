import {Component, Inject, OnInit} from '@angular/core';
import {Flight, FlightDelay} from "../../../models/flight.model";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ReservationCreationDTO} from "../../../models/reservation.model";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-book-flight-dialog',
  templateUrl: './book-flight-dialog.component.html',
  styleUrls: ['./book-flight-dialog.component.css']
})
export class BookFlightDialogComponent implements OnInit{

  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<BookFlightDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: Flight,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      participants: this.fb.array([this.fb.group({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        isAdult: new FormControl(true, Validators.required)
      })])
    });
  }

  get participants(): FormArray {
    return this.form.get('participants') as FormArray;
  }

  addItem() {
    const itemFormGroup = this.fb.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      isAdult: new FormControl(true, Validators.required)
    });

    this.participants.push(itemFormGroup);
  }

  removeItem(index: number) {
    this.participants.removeAt(index);
  }

  submitForm() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }

  onSubmit() {
    this.dialogRef.close({
      result: true,
      data: {
        flight_id: this.data.id,
        booking_party_id: this.randomUserId(1, 50),
        participants: this.toParticipantsArray()
      }})
  }

  private randomUserId(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private toParticipantsArray() {
    return this.participants.controls.map(p => {
      return {
        first_name: p.get('firstName')?.value,
        last_name: p.get('lastName')?.value,
        is_adult: p.get('isAdult')?.value
      }
    })
  }
}
