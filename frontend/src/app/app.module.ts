import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {GastenComponent} from './gasten/gasten.component';
import {FormsModule} from "@angular/forms";
import {GastenDetailComponent} from './gasten-detail/gasten-detail.component';
import {MessagesComponent} from './messages/messages.component';
import {HomeComponent} from './dashboard/home.component';
import {HttpClientModule} from "@angular/common/http";
import {DresscodeComponent} from './dresscode/dresscode.component';
import {DieetwensenComponent} from './dieetwensen/dieetwensen.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatTabsModule} from "@angular/material/tabs";
import {NgbModule, NgbNavModule} from "@ng-bootstrap/ng-bootstrap";
import {NavigatieComponent} from './navigatie/navigatie.component';
import {RsvpComponent} from './rsvp/rsvp.component';
import {LocatieComponent} from './locatie/locatie.component';
import {ProgrammaDagComponent} from './programma-dag/programma-dag.component';
import {OvernachtingFamilieComponent} from './overnachting-familie/overnachting-familie.component';
import {ContactComponent} from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    GastenComponent,
    GastenDetailComponent,
    MessagesComponent,
    HomeComponent,
    DresscodeComponent,
    DieetwensenComponent,
    RsvpComponent,
    LocatieComponent,
    ProgrammaDagComponent,
    OvernachtingFamilieComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatTabsModule,
    NgbModule,
    NgbNavModule,
    NavigatieComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
