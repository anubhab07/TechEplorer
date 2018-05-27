import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  animal: string;
  name: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}


@Component({
  selector: 'app-login-dialog',
  templateUrl: 'login.dialog.html',
})
export class LoginDialogComponent {
  email: string;
  password: string;
  constructor(
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private router: Router) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  login() {
      if (this.email === 'dhiraj@gmail.com' && this.password === 'password') {
        this.router.navigate(['user']);
      } else {
      alert('Invalid credentials.');
    }

  }
}
