import { Observable, of, throwError } from 'rxjs'


export abstract class BaseService {  
    
    constructor() { }

    protected handleError(errorResponse: any) {
    var applicationError = errorResponse.headers.get('Application-Error');

    // either applicationError in header or model error in body
    if (applicationError) {
      return throwError(applicationError);
    }

    var modelStateErrors: string = '';
    debugger;

    var serverError = errorResponse.error;

    if (errorResponse.status != 200 && errorResponse.status != 201) {
      if(serverError){
        var keys = Object.keys(serverError);

        for (var key of keys) {
          var err = serverError[key];
          modelStateErrors += err[0] + '\n';
        }
      }
      else if(errorResponse.status == 401)
      {
        modelStateErrors+="You are not authorize to Book a reservation"
      }
    }
    

    modelStateErrors = modelStateErrors = '' ? null : modelStateErrors;
    return throwError(modelStateErrors || 'Server error');
  }
}