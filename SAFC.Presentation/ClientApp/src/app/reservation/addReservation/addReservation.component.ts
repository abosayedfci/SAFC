import { Component, OnInit } from '@angular/core';
// import { ReservationService } from '../services/reservation.service';
import { ReservationDetails } from '../models/reservation.details.interface';
import { Router } from '@angular/router';
import { ReservationService } from '../services/reservation.service';
import { finalize } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  templateUrl: './addReservation.component.html',
  styleUrls: ['./addReservation.component.scss']
})
export class ReservationComponent implements OnInit {

  homeDetails: ReservationDetails;
  errors: string;
  isRequesting: boolean;
  submitted: boolean = false;
  reservationAdded :boolean = false ; 
  constructor(private reservationService: ReservationService, private router: Router) { }
  ngOnInit() {

    
  }

  AddReserVationRequest(form: NgForm) {
    debugger;
    let value: ReservationDetails = form.value;
    let valid : boolean = form.valid;
    this.submitted = true;
    this.isRequesting = true;
    this.errors = '';
    if (valid) {
      this.reservationService.AddNewReservation(value)
        .pipe( finalize(()=> this.isRequesting = false))
        .subscribe(
          result => {
            if (result) {
              this.reservationAdded = true ; 
              form.reset();
            }
          },
          errors => this.errors = errors);
    }
  }
}
