import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./dashboard/home.component";
import {FaqComponent} from "./faq/faq.component";
import {LocatieComponent} from "./locatie/locatie.component";
import {ProgrammaComponent} from "./programma/programma.component";
import {OvernachtingComponent} from "./overnachting/overnachting.component";
import {ContactComponent} from "./contact/contact.component";
import {RsvpComponent} from "./rsvp/rsvp.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "../guards/auth.guard";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'programma-dag', component: ProgrammaComponent},
  {path: 'overnachting-fam', component: OvernachtingComponent},
  {path: 'dresscode', component: FaqComponent},
  {path: 'rsvp', component: RsvpComponent},
  {path: 'locatie', component: LocatieComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
