import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  screenWidth: number;

  constructor(private _appService: AppService) {
    // set screenWidth on page load
      this.screenWidth = window.innerWidth;
      window.onresize = () => {
      // set screenWidth on screen size change
      this.screenWidth = window.innerWidth;
    };
  }
  geolocationPosition;
  ngOnInit() {
    this.getLocation2();
  }

  getLocation2() {
    this._appService.getUserLocation().subscribe(res => {
      console.log(res);
    });
  }

  getLocation1() {
    if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
          position => {
              this.geolocationPosition = position,
                  console.log(position);
          },
          error => {
              switch (error.code) {
                  case 1:
                      console.log('Permission Denied..');
                      break;
                  case 2:
                      console.log('Position Unavailable');
                      break;
                  case 3:
                      console.log('Timeout');
                      break;
              }
          }
      );
  }
  }

  userLocationSuccess(location) {
    console.log(location);
  }
}
