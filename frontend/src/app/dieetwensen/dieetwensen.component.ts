import {Component} from '@angular/core';
import {DieetwensService} from "../../service/dieetwens.service";
import {RsvpDto} from "../../model/RsvpDto";
import {ActivatedRoute} from "@angular/router";
import {Gast} from "../../model/Gast";

@Component({
  selector: 'app-dieetwensen',
  templateUrl: './dieetwensen.component.html',
  styleUrls: ['./dieetwensen.component.css']
})
export class DieetwensenComponent {
  gast?: Gast
  rsvp: RsvpDto

  constructor(private dieetwensService: DieetwensService) {
    this.rsvp = new RsvpDto();
    this.rsvp.vegetarisch = false;
  }

  onSubmit() {
    console.log(this.rsvp)
    this.dieetwensService.save(this.rsvp).subscribe(
      rsvp => {
        console.log(rsvp);
      });
  }
}
