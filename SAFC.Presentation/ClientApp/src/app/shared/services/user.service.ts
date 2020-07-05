import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { UserRegistration } from '../models/user.registration.interface';
import { ConfigService } from '../utils/config.service';

import {BaseService} from "./base.service";

import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs'; 
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })

export class UserService extends BaseService {

  baseUrl: string = '';

  // Observable navItem source
  private _authNavStatusSource = new BehaviorSubject<boolean>(false);
  // Observable navItem stream
  authNavStatus$ = this._authNavStatusSource.asObservable();

  private loggedIn = false;

  constructor(private http: HttpClient, private configService: ConfigService) {
    super();
    this.loggedIn = !!localStorage.getItem('auth_token');
    // ?? not sure if this the best way to broadcast the status but seems to resolve issue on page refresh where auth status is lost in
    // header component resulting in authed user nav links disappearing despite the fact user is still logged in
    this._authNavStatusSource.next(this.loggedIn);
    this.baseUrl = configService.getApiURI();
  }

    register(email: string, password: string, firstName: string, lastName: string): Observable<UserRegistration | boolean> {
    let body = JSON.stringify({ email, password, firstName, lastName });

    return this.http.post(this.baseUrl + "/accounts", body)
      .pipe(  
      map(res => true),
      catchError(this.handleError));
  }  

   login(userName, password) {

    return this.http
      .post(
      this.baseUrl + '/auth/login',
      JSON.stringify({ userName, password }))
      .pipe(
        map(res => res),
        map(res => {
          localStorage.setItem('auth_token', res["auth_token"]);
          this.loggedIn = true;
          this._authNavStatusSource.next(true);
          return true;
        }),
        catchError(this.handleError));
  }

  logout() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
    this._authNavStatusSource.next(false);
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  facebookLogin(accessToken:string) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let body = JSON.stringify({ accessToken });  
    return this.http
      .post(
      this.baseUrl + '/externalauth/facebook', body)
      .pipe(
        map(res => res),
        map(res => {
        localStorage.setItem('auth_token', res["auth_token"]);
        this.loggedIn = true;
        this._authNavStatusSource.next(true);
        return true;
        }),
        catchError(this.handleError));
  }
}

