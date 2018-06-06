import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { DashboardRoutingModule } from './app.route';
import { AppComponent, LoginDialogComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TechListComponent } from './tech-list/tech-list.component';
// import { HttpClientModule } from '@angular/common/http';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { MatGridListModule, MatListModule } from '@angular/material';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import { RegistrationComponent } from './registration/registration.component';
import { FormComponent } from './form/form.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { DetailsComponent } from './details/details.component';


import { LayoutModule } from '@angular/cdk/layout';
import { MatInputModule } from '@angular/material/input';

import {DataService} from './data.service';
import {WebCallingService} from './web-calling.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from './../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginDialogComponent,
    TechListComponent,
    RegistrationComponent,
    FormComponent,
    PreferencesComponent,
    DetailsComponent,
    MyDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DashboardRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    NgbModule.forRoot(),
    MatMenuModule,
    MatIconModule,
    MatGridListModule,
    LayoutModule,
    MatListModule,
    MatInputModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MatAutocompleteModule
  ],
  entryComponents: [
    LoginDialogComponent
  ],
  providers: [DataService, WebCallingService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private _webService: WebCallingService) {
    this._webService.getAutofillSuggestions();
  }
}
