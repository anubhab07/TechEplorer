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

  loginId: string;
  loginPassword: string;
  
  userId = '';
  location = '';

  searchString = '';
  eventsList = [];
  constructor() { }
}
