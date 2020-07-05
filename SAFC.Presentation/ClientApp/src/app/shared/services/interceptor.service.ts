import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import { Inject, Injectable, LOCALE_ID } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";

// import { AuthService } from '../auth/auth-service.service';
// import { BadRequestModel } from '../../models/bad-request.model';
// import { LanguageUpdateService } from '../language/language-update-service.service';
// import { OAuthService } from 'angular-oauth2-oidc';
import { Router } from '@angular/router';
// import { ToasterHelperService } from '../toaster/toaster-helper.service';
// import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: "root"
})
export class AppInterceptor implements HttpInterceptor {
  recaptchaToken: string = "";

  constructor(
    private _router: Router) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    const token: string = sessionStorage.getItem("access_token") || "Basic c2NlOnNjZQ==";

    if (!request.headers.has("Content-type")) {
      if (!(request.body instanceof FormData)) {
        request = request.clone({
          headers: request.headers.set("Content-type", "Application/json")
        });
      }
    }

    if (!request.headers.has("Authorization")) {
        request = request.clone({
          headers: request.headers.set("Authorization", `Bearer ${token}`)
        });
    }

    // if (!request.headers.has("Accept-Language")) {
    //   request = request.clone({
    //     headers: request.headers.set("Accept-Language", this._languageUpdateService.getCurrentLangSt())
    //   });
    // }

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        return event;
      }),

      // catchError((errorResponse: HttpErrorResponse) => {
      //   // if (errorResponse.status === 401 ||
      //   //   errorResponse.status === 403) {

      //   //   if (this._oauthService.hasValidAccessToken()) {
      //   //     this._toasterService.error(errorResponse.error.message);
      //   //   } else {
      //   //     this._authService.navigateToLogin();
      //   //   }
      //   // }

      //   if (errorResponse.status === 400 ||
      //     errorResponse.status === 409 ||
      //     errorResponse.status === 404 ||
      //     errorResponse.status > 500
      //   ) {
      //     // this._toasterService
      //     //   .error(errorResponse.error.message);
      //   }

      //   if (errorResponse.status === 422) {
      //     let validationResults: BadRequestModel[] = errorResponse.error.moreInfo as BadRequestModel[];

      //     validationResults.forEach(validationResult => {
      //       var id = validationResult.MemberNames[0];
      //       var error = validationResult.ErrorMessage;

      //       let item = document.getElementById(`${id}Error`);
      //       if (item && item != undefined) {
      //         item.textContent = error;
      //       }
      //     });
      //   }

      //   if (errorResponse.status == 500 || errorResponse.status == 0 && errorResponse.statusText == "Unknown Error") {
      //     this._translateService
      //       .get('general.general_exception_message')
      //       .subscribe(response => {
      //         this._toasterService
      //           .error(response);
      //       });
      //   }

      //   return throwError(errorResponse);
      // })
    );
  }
}
