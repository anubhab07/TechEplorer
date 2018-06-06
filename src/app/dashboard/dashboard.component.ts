import { Component, OnInit, DoCheck, AfterViewInit } from '@angular/core';
import {DataService} from '../data.service';
import {WebCallingService} from '../web-calling.service';
import { AppService } from '../app.service';

import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, DoCheck,AfterViewInit {
  searchTerm = '';
  eventsList = [];
  suggestionsList = [];
  filteredSuggestions: any;
  stateControl: FormControl;

  constructor(private _dataService: DataService, private _webService: WebCallingService, private _appService: AppService) {
    // this.suggestionsList = this._dataService.searchSuggestionKeywords;
    setTimeout(() => {
      this.suggestionsList = this._dataService.searchSuggestionKeywords;
      this.stateControl = new FormControl();
      this.filteredSuggestions = this.stateControl.valueChanges
        .pipe(
          startWith(''),
          map(state => state ? this.filterStates(state) : this.suggestionsList.slice())
        );
    }, 3000);
  }

  filterStates(name: string) {
    return this.suggestionsList.filter(element =>
      element.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  ngOnInit() {
    this._appService.getUserLocation().subscribe(res => {
      this._dataService.location = res.city;
      // this._webService.getEvents().subscribe(events =>{
      // })
    });
  }
  ngAfterViewInit() {

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
      this._webService.searchSubmit(this.searchTerm);
      window.scrollTo(0, window.outerHeight);
    }
  }
 
}
