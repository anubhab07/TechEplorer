import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {DataService} from './data.service';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Accept': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class WebCallingService {

  constructor(private _http: HttpClient, private _dataService: DataService) { }

  getPrefList() {
    const url = 'https://techadv.herokuapp.com/getAllPrefrences';
    return this._http.get(url);
  }

  getEvents() {
    const url = 'https://techadv.herokuapp.com/getEvents';
    // let requestBody = new HttpParams();
    const requestBody = {
      'userId' : this._dataService.userId,
      'location' : this._dataService.location
    };
    this._http.post(url, requestBody, httpOptions).subscribe(data => {
      this._dataService.eventsList = data.content;
    });
  }
  registerNewUser(userId, location) {

  }
  /* Created by Anubhab
  * Returns Observable of events
  */
  // getAllEvents(){

  // }

  getUserLocation(): Observable<any> {
    const url = 'https://ipapi.co/157.41.250.68/json/';
    const url2 = 'http://ip-api.com/json';
    const url3 = 'https://api.ipdata.co';
    return this._http.get(url3)
      .pipe(
        catchError(this.handleError('getUserLocation', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  private log(message: string) {
    // this.messageService.add('HeroService: ' + message);
  }
}
