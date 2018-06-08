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

  getPrefList(): Observable<any> {
    const url = 'https://techadv.herokuapp.com/getAllPrefrences';
    return this._http.get(url);
  }

  getAutofillSuggestions() {
    const url = 'https://techadv.herokuapp.com/getSearchKeyword';
    let a: any;
    this._http.get(url).subscribe((data) => {
      a = data;
      this._dataService.searchSuggestionKeywords = a.content;
    });
  }

  getEvents() {
    const url = 'https://techadv.herokuapp.com/getEvents';
    const requestBody = {
      // 'userId' : this._dataService.userId,
      'location' : this._dataService.location
    };
    let a: any;
    this._http.post(url, requestBody, httpOptions).subscribe(data => {
      a = data;
      this._dataService.eventsList = a.content;
    });
  }

  searchSubmit(searchText) {
    const requestBody = {
      'userId': this._dataService.userId,
      'location': this._dataService.location,
      'searchText': searchText
    };
    let a: any;
    const url = 'https://techadv.herokuapp.com/search';
    this._http.post(url, requestBody, httpOptions).subscribe(data => {
      a =  data;
      this._dataService.eventsList = a.content.recomended;
    });
  }

  registerNewUser() {
    const requestBody = {
      'name': this._dataService.regName,
      'email': this._dataService.regEmail,
      'mobile': this._dataService.regMobile,
      'password': this._dataService.regPassword,
      'prefrences': this._dataService.regPreferences
    };
    let a: any;
    const url = 'https://techadv.herokuapp.com/signUp';
    this._http.post(url, requestBody, httpOptions).subscribe(data => {
      a = data;
      if (a.status === 1) {
        console.log(a.message);
        alert(a.message);
      }
    });
  }
  loginUser(email, password) {
    const requestBody = {
      'email': email,
      'password': password
    };
    let a: any;
    const url = 'https://techadv.herokuapp.com/login';
    this._http.post(url, requestBody, httpOptions).subscribe(data => {
      a = data;
      if (a.status === 1) {
        console.log(a.message);
        alert(a.message);
        this._dataService.userInfo = a.content;
        this._dataService.userId = a.content.userId;
        this.getEvents();
      } else {
        alert(a.message);
      }
    });
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

  saveMessageId(userId, notificationId) {
    const url = 'https://localhost:8080/NotificationData';
    const requestBody = {
      'notificationId': notificationId,
      'userId': userId
    };
    this._http.post(url, requestBody, httpOptions);
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
