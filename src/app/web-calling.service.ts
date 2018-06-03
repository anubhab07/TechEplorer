import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {DataService} from './data.service';

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
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': 'application/json'
      })
    };
    // let requestBody = new HttpParams();
    const requestBody = {
      'userId' : this._dataService.userId,
      'location' : this._dataService.location
    };
    this._http.post(url, requestBody, httpOptions).subscribe(data => {
      this._dataService.eventsList = data.content;
    });
  }
  registerNewUser() {

  }
}
