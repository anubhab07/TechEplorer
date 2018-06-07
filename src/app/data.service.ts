import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  registrationProgress = 50;
  regName: string;
  regEmail: string;
  regMobile: string;
  regPassword: string;
  regPreferences = [];

  userInfo: any;

  userId = '2';
  location = 'Hyderabad';

  searchString = '';
  eventsList = [];
  searchSuggestionKeywords: any;
  selectedEvent: any;
  constructor() { }
}
