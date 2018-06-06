import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  email: string;
  phone: string;
  name: string;
  password: string;
  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }
  proceed() {
    this._dataService.regEmail = this.email;
    this._dataService.regMobile = this.phone;
    this._dataService.regName = this.name;
    this._dataService.regPassword = this.password;
    this._dataService.registrationProgress = 100;
  }

}
