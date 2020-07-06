import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReservationDetails } from '../models/reservation.details.interface';
import { ConfigService } from 'src/app/shared/utils/config.service';
import { BaseService } from 'src/app/shared/services/base.service';
import { map,catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ReservationService  extends BaseService{
 
  baseUrl: string = ''; 

  constructor(private httpclient: HttpClient, private configService: ConfigService) {
     super();
     this.baseUrl = configService.getApiURI();
  }
  AddNewReservation(reservation: ReservationDetails): Observable<ReservationDetails | boolean> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);

    //let body = JSON.stringify(reservation);

    return this.httpclient.post(this.baseUrl + "/Reservation", reservation)
      .pipe(  
      map(res => true),
      catchError(this.handleError));
  }  
}


