import { Component, OnInit, DoCheck } from '@angular/core';
import {DataService} from '../data.service';
import {WebCallingService} from '../web-calling.service';
import { AppService } from '../app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, DoCheck {
  searchTerm = '';
  constructor(private _dataService: DataService, private _webService: WebCallingService, private _appService: AppService) { }
  eventsList = [];

  ngOnInit() {
    this._appService.getUserLocation().subscribe(res => {
      this._dataService.location = res.city;
      // this._webService.getEvents().subscribe(events =>{
      // })
    });
  }

  ngDoCheck() {
    if (this.eventsList !== this._dataService.eventsList) {
      this.eventsList = this._dataService.eventsList;
      console.log(this.eventsList);
    }
  }
  submitSearch() {
    console.log(this.searchTerm);
    if (this.searchTerm !== '') {
      this._dataService.searchString = this.searchTerm;
    }
  }
}
