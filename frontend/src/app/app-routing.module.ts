import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./dashboard/home.component";
import {DresscodeComponent} from "./dresscode/dresscode.component";
import {DieetwensenComponent} from "./dieetwensen/dieetwensen.component";
import {RsvpComponent} from "./rsvp/rsvp.component";
import {LocatieComponent} from "./locatie/locatie.component";
import {ProgrammaDagComponent} from "./programma-dag/programma-dag.component";
import {OvernachtingFamilieComponent} from "./overnachting-familie/overnachting-familie.component";
import {ContactComponent} from "./contact/contact.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  // {path: 'gasten', component: GastenComponent},
  // {path: 'detail/:id', component: GastenDetailComponent},
  {path: 'programma-dag', component: ProgrammaDagComponent},
  {path: 'overnachting-fam', component: OvernachtingFamilieComponent},
  {path: 'dresscode', component: DresscodeComponent},
  {path: 'dieetwensen', component: DieetwensenComponent},
  // {path: 'rsvp', component: RsvpComponent},
  {path: 'locatie', component: LocatieComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
