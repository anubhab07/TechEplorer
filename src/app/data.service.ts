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

  userId = '';
  location = '';

  searchString = '';
  eventsList = [];
  searchSuggestionKeywords: any;
  constructor() { }
}
