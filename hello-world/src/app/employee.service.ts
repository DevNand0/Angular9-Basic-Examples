import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { IEmployee } from './employee';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http: HttpClient) { }
  private _url: string = '/assets/data/employees1.json';
  
  getEmployees(): Observable<IEmployee[]>{
    return this._http.get<IEmployee[]>(this._url).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || 'Server Error');
  }

}
