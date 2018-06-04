import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {WebCallingService} from '../web-calling.service';
// import { element } from 'protractor';
@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css']
})
export class PreferencesComponent implements OnInit {
  preferences = [];
  constructor(private _webService: WebCallingService, private _dataService: DataService) {
    this._webService.getPrefList().subscribe(data => {
      if (data.status === 1) {
        console.log(data.content);
      this.preferences = this.customizeData(data.content);
      } else {
        alert("Server Down. Can't get preferences");
      }
    });
   }

  ngOnInit() {
  }

  customizeData(dataList) {
    dataList.forEach((element) => {
      element['isSelected'] = false;
    });
    return dataList;
  }

  select(value) {
    for (let i = 0; i < this.preferences.length ; i++) {
      if (this.preferences[i]['prefId'] === value.prefId) {
        this.preferences[i]['isSelected'] = !value.isSelected;
        break;
      }
    }
    console.log(value, this.preferences);
  }
  proceed() {
    this.preferences.forEach((element) =>{
      if (element.isSelected) {
        this._dataService.regPreferences.push(element.prefId.toString());
      }
    });
    setTimeout(() => {this._webService.registerNewUser(this._dataService.userId, location); }, 500);
  }

}
