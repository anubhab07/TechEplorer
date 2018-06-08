import { AppService } from './app.service';

import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Router} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import {DataService} from './data.service';
import { WebCallingService } from './web-calling.service';
import {ViewEncapsulation } from '@angular/core';
import { MessagingService } from './messaging.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'app';
  screenWidth: number;
  searchParam = '';
  // tslint:disable-next-line:max-line-length
  constructor(public dialog: MatDialog, private _router: Router,
    private _dataService: DataService,
    private _webService: WebCallingService,
    private _appService: AppService,
    private msgService: MessagingService
  ) {
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
    this.msgService.getPermission();
    this.msgService.receiveMessage();
  }

  getLocation2() {
    this._appService.getUserLocation().subscribe(res => {
      console.log(res);
      // this._dataService.location = res.city;
      this._webService.getEvents();
    });
  }

  // getLocation1() {
  //   if (window.navigator && window.navigator.geolocation) {
  //     window.navigator.geolocation.getCurrentPosition(
  //         position => {
  //             this.geolocationPosition = position,
  //                 console.log(position);
  //         },
  //         error => {
  //             switch (error.code) {
  //                 case 1:
  //                     console.log('Permission Denied..');
  //                     break;
  //                 case 2:
  //                     console.log('Position Unavailable');
  //                     break;
  //                 case 3:
  //                     console.log('Timeout');
  //                     break;
  //             }
  //         }
  //     );
  //  }
  // }

  // userLocationSuccess(location) {
  //   console.log(location);
  // }

  openDialog() {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '50vw',
      height: '50vh'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  iconClick(value) {
    switch (value) {
      case 'login': this.openDialog();
                    break;
      case 'search': alert('search logic here');
    }
  }
}


@Component({
  selector: 'app-login-dialog',
  templateUrl: './login.dialog.html',
  styleUrls: ['./app.component.css']
})
export class LoginDialogComponent {
  email: string;
  password: string;
  constructor(
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _router: Router, private _webService: WebCallingService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  submit(key) {
    switch (key) {
      case 'login':
            this._webService.loginUser(this.email, this.password);
            break;
      case 'register': this._router.navigate(['register']);
    }


    }
    getHome() {
      this._router.navigate(['/dashboard']);
    }

  }

