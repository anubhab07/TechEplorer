import { Component, OnInit, DoCheck, AfterViewInit } from '@angular/core';
import {DataService} from '../data.service';
import {WebCallingService} from '../web-calling.service';
import { AppService } from '../app.service';

import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, DoCheck, AfterViewInit {
  searchTerm = '';
  eventsList = [];
  suggestionsList = [];
  filteredSuggestions: any;
  stateControl: FormControl;

  constructor(private _dataService: DataService, private _webService: WebCallingService, private _appService: AppService,
  private _router: Router) {
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
  getURL() {
    const number = Math.floor(Math.random() * 20 + 1);
    const url = '../../assets/images/' + number + '.jpg';
    console.log(url);
    return url;
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
  seeDetails(event) {
    this._dataService.selectedEvent = event;
    this._router.navigate(['details']);
  }

}
