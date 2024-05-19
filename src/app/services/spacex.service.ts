import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpacexService {

  private apiUrl = 'https://api.spacexdata.com/v4';

  constructor(private http: HttpClient) { }

  getLaunchpads(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/launchpads`)
      .pipe(
        retry(2), // Retry failed requests up to 2 times
        catchError(error => {
          console.error('Error fetching launchpads:', error);
          return throwError(error); // Re-throw the error for handling in the component
        })
      );
  }

  getLandpads(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Landpads`)
      .pipe(
        retry(2), // Retry failed requests up to 2 times
        catchError(error => {
          console.error('Error fetching launchpads:', error);
          return throwError(error); // Re-throw the error for handling in the component
        })
      );
  }

  getLaunches(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/launches`)
      .pipe(
        retry(2), // Retry failed requests up to 2 times
        catchError(error => {
          console.error('Error fetching launches:', error);
          return throwError(error); // Re-throw the error for handling in the component
        })
      );
  }
}
