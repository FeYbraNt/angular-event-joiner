import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, forkJoin } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

// Object types
import Event from '../models/event'
import City from '../models/city'

@Injectable({
  providedIn: 'root'
})
export class EventService {

  // Define DEV API
  apiURL = 'http://localhost:4200'

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  /**
   * Get all events from API
   */
  getAllEvents(): Observable<[Event[],City[]]> {
    const events = this.http.get<Event[]>(this.apiURL + '/events') 
      .pipe(retry(1), catchError(this.handleError))
    const cities = this.http.get<any[]>(this.apiURL + '/cities')
      .pipe(retry(1), catchError(this.handleError))

    return forkJoin([events, cities])
      .pipe(retry(1), catchError(this.handleError))
  }

  /**
   * Error handler
   * @param error 
   */
  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message; // Get client-side error
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`; // Get server-side error
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
