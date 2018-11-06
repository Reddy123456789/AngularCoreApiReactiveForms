import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IEligibility } from '../model/eligibility';
import { catchError } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class EligibilityService {

constructor(private http: HttpClient) { }

// getAllEligibility(url: string): Observable<IEligibility[]> {
  getAllEligibility(url: string): Observable<IEligibility[]> {
  return this.http.get<IEligibility[]>('http://localhost:5000/api/ovrapp/getAllEligibility')
    .pipe(
      catchError(this.handleError)
    );
}

// Get Customer By Id
getOneEligibility(id: number): Observable<IEligibility[]> {
  const newurl = `${'http://localhost:5000/api/ovrapp/getCustomer'}?id=${id}`;
// const newurl = `${'http://localhost:5000/api/customer/getCustomer'}?id=${44}`;
 console.log(newurl);
 return this.http.get<IEligibility[]>(newurl)
 .pipe(
   catchError(this.handleError)
 );
}

// insert new contact details
addEligibility(ieligibility: IEligibility): Observable<any> {
  return this.http.post<IEligibility>('http://localhost:5000/api/ovrapp/addEligibility', ieligibility, httpOptions)
    .pipe(
      catchError(this.handleError)
    );
}


postEligibility(ieligibility: IEligibility): Observable<HttpResponse<IEligibility>> {
  const httpHeaders = new HttpHeaders({
       'Content-Type' : 'application/json'
  });
  return this.http.post<IEligibility>('http://localhost:5000/api/ovrapp/addEligibility', ieligibility,
      {
        headers: httpHeaders,
        observe: 'response'
      }
  );
}

// custom handler
private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  // return an observable with a user-facing error message
  return throwError('Something bad happened; please try again later.');
}

}
