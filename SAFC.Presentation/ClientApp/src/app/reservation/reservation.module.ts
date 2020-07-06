import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { SharedModule }       from '../shared/modules/shared.module';

// import { routing }  from './reservation.routing';
// import { ReservationService } from './services/reservation.service';

import { AuthGuard } from '../auth.guard';
import { ReservationComponent } from './addReservation/addReservation.component';
import { RouterModule } from '@angular/router';
import { ReservationService } from './services/reservation.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // routing,
    SharedModule,  RouterModule.forChild(
      [
        { path: "Reservation/addNew", component: ReservationComponent , canActivate:[AuthGuard] }
      ]),
  ],
  declarations: [ReservationComponent],
  exports:      [ ],
  providers:    [AuthGuard ,ReservationService]
})
export class ReservationModule { }
