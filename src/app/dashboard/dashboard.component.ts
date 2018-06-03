import { Component, OnInit, DoCheck } from '@angular/core';
import {DataService} from '../data.service';
import {WebCallingService} from '../web-calling.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements DoCheck {
  searchTerm = '';
  constructor(private _dataService: DataService, private _webService: WebCallingService) { }
  eventsList = [];
  ngDoCheck() {
    if(this.eventsList != this._dataService.eventsList) {
      this.eventsList = this._dataService.eventsList;
    }
  }
  submitSearch() {
    console.log(this.searchTerm);
    if(this.searchTerm!=''){
      this._dataService.searchString = this.searchTerm;
    }
  }
}
