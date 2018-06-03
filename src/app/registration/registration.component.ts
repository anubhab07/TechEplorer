import { Component, OnInit, DoCheck } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  progress: number;
  constructor(private _dataService: DataService) {
    this.progress = this._dataService.registrationProgress;
  }
  ngDoCheck() {
    this.progress = this._dataService.registrationProgress;
  }


}
