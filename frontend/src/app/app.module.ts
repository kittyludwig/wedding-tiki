import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HomeComponent} from './dashboard/home.component';
import {HttpClientModule} from "@angular/common/http";
import {FaqComponent} from './faq/faq.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatTabsModule} from "@angular/material/tabs";
import {NgbModule, NgbNavModule} from "@ng-bootstrap/ng-bootstrap";
import {NavigatieComponent} from './navigatie/navigatie.component';
import {LocatieComponent} from './locatie/locatie.component';
import {ProgrammaComponent} from './programma/programma.component';
import {OvernachtingComponent} from './overnachting/overnachting.component';
import {ContactComponent} from './contact/contact.component';
import {RsvpComponent} from "./rsvp/rsvp.component";
import { LoginComponent } from './login/login.component';
import {AuthGuard} from "../guards/auth.guard";
import {MatRadioModule} from "@angular/material/radio";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FaqComponent,
    RsvpComponent,
    LocatieComponent,
    ProgrammaComponent,
    OvernachtingComponent,
    ContactComponent,
    LoginComponent,
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
        ReactiveFormsModule,
        MatRadioModule
    ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
