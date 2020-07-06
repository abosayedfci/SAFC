import { Component, OnInit } from '@angular/core';
// import { ReservationService } from '../services/reservation.service';
import { ReservationDetails } from '../models/reservation.details.interface';
import { Router } from '@angular/router';
import { ReservationService } from '../services/reservation.service';
import { finalize } from 'rxjs/operators';

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

  constructor(private reservationService: ReservationService, private router: Router) { }
  ngOnInit() {

    
  }
  AddReserVationRequest({ value, valid }: { value: ReservationDetails, valid: boolean }) {
    debugger;
    this.submitted = true;
    this.isRequesting = true;
    this.errors = '';
    if (valid) {
      this.reservationService.AddNewReservation(value)
        .pipe( finalize(()=> this.isRequesting = false))
        .subscribe(
          result => {
            if (result) {
              this.router.navigate(['/home'], { queryParams: { brandNew: true, email: value.guestsNumber } });
            }
          },
          errors => this.errors = errors);
    }
  }
}
