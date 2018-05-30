import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Router} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  screenWidth: number;
  constructor(public dialog: MatDialog, private _router: Router) {
    // set screenWidth on page load
    this.screenWidth = window.innerWidth;
    window.onresize = () => {
      // set screenWidth on screen size change
      this.screenWidth = window.innerWidth;
    };
  }
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
  }
}


@Component({
  selector: 'app-login-dialog',
  templateUrl: './login.dialog.html',
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
}
