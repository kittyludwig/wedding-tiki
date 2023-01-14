import {Component} from '@angular/core';
import {RsvpService} from "../../service/rsvp.service";
import {RsvpDto} from "../../model/RsvpDto";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-dieetwensen',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.css']
})
export class RsvpComponent {
  rsvp: RsvpDto
  rsvpForm: FormGroup;
  wilAanmelden: boolean;
  valideForm: boolean;

  constructor(private rsvpService: RsvpService, private formBuilder: FormBuilder) {
    this.rsvp = new RsvpDto();
    this.wilAanmelden = false;
    this.valideForm = true;
    this.rsvpForm = this.formBuilder.group({
      aanmelding: ['', Validators.required],
      naam: ['', Validators.required],
      vegetarisch: [''],
      allergie: [''],
      verzoekTitel: [''],
      verzoekArtiest: [''],
      logeren: ['']
    })
  }

  wijzigBijAanmelding(): void {
    if (this.rsvpForm.value.aanmelding === "ja") {
      this.wilAanmelden = true;
      this.rsvpForm.controls['vegetarisch'].setValidators(Validators.required)
      this.rsvpForm.controls['logeren'].setValidators(Validators.required)
    } else {
      this.wilAanmelden = false;
      this.rsvpForm.controls['vegetarisch'].removeValidators(Validators.required)
      this.rsvpForm.controls['logeren'].removeValidators(Validators.required)
    }
  }

  wijzigBijVerzoektitel(): void {
    if (this.rsvpForm.value.verzoekArtiest !== '') {
      this.rsvpForm.controls['verzoekTitel'].setValidators(Validators.required)
    } else {
      this.rsvpForm.controls['verzoekTitel'].removeValidators(Validators.required)
    }
  }

  wijzigBijVerzoekartiest(): void {
    console.log("ik kom in de wijzig verzoekartiest")
    console.log(this.rsvpForm.value.verzoekTitel)
    if (this.rsvpForm.value.verzoekTitel !== undefined) {
      this.rsvpForm.controls['verzoekArtiest'].setValidators(Validators.required)
    } else {
      this.rsvpForm.controls['verzoekArtiest'].removeValidators(Validators.required)
    }
  }

  onSubmit() {
    console.log(this.rsvpForm)
    if (this.rsvpForm.status === "VALID") {
      this.valideForm = true;
      this.rsvp.typeGast = localStorage.getItem('token')
      this.rsvpService.save(this.rsvp).subscribe(
        rsvp => {
          console.log(rsvp);
        });
      //TODOKL: weg navigeren/popup tonen
    } else {
      this.valideForm = false;
      // TODOKL: Hier nog een melding aan hangen?
    }
  }
}
