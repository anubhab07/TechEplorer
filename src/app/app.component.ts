<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

=======
import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Router} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import {DataService} from './data.service';
import { WebCallingService } from './web-calling.service';
>>>>>>> f31a9d97a32080c6c7c1b9b8fd5bfb11145e2ef2
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  screenWidth: number;
<<<<<<< HEAD

  constructor(private _appService: AppService) {
    // set screenWidth on page load
      this.screenWidth = window.innerWidth;
      window.onresize = () => {
=======
  searchParam = '';
  // tslint:disable-next-line:max-line-length
  constructor(public dialog: MatDialog, private _router: Router, private _dataService: DataService, private _webService: WebCallingService) {
    // set screenWidth on page load
    this._webService.getEvents();
    this.screenWidth = window.innerWidth;
    window.onresize = () => {
>>>>>>> f31a9d97a32080c6c7c1b9b8fd5bfb11145e2ef2
      // set screenWidth on screen size change
      this.screenWidth = window.innerWidth;
    };
  }
<<<<<<< HEAD
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
=======


  openDialog(): void {
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
>>>>>>> f31a9d97a32080c6c7c1b9b8fd5bfb11145e2ef2
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
    @Inject(MAT_DIALOG_DATA) public data: any, private _router: Router) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  submit(key) {
    switch (key) {
      case 'login':
            if (this.email === 'dhiraj@gmail.com' && this.password === 'password') {
              this._router.navigate(['user']);
            } else {
            alert('Invalid credentials.');
            }
            break;
      case 'register': this._router.navigate(['register']);
    }


    }

  }
