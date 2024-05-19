import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Launchpad } from '../interfaces/launchpad';
import { Landpad } from '../interfaces/landpad';
import { Launch } from '../interfaces/launch';

@Injectable({
  providedIn: 'root'
})
export class SpacexService {

  private apiUrl = 'https://api.spacexdata.com/v4';

  constructor(private http: HttpClient) { }

  getLaunchpads(): Observable<Launchpad[]> {
    return this.http.get<Launchpad[]>(`${this.apiUrl}/launchpads`);
  }

  getLandpads(): Observable<Landpad[]> {
    return this.http.get<Landpad[]>(`${this.apiUrl}/Landpads`);
  }

  getLaunches(): Observable<Launch[]> {
    return this.http.get<Launch[]>(`${this.apiUrl}/launches`);
  }
}
