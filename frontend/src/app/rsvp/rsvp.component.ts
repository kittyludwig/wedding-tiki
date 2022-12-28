import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GastService} from "../../service/gast.service";
import {Location} from "@angular/common";
import {Gast} from "../../model/Gast";

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.css']
})
export class RsvpComponent implements OnInit {
  @Input() gast?: Gast;

  constructor(private route: ActivatedRoute, private gastService: GastService, private location: Location) {
  }

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap)

    this.getGast();
  }

  getGast(): void {
    const uniekeCode = String(this.route.snapshot.paramMap.get('uniekeCode'));
    this.gastService.getGastByUniekeCode(uniekeCode)
      .subscribe(gast => this.gast = gast)
    console.log(this.gast)
  }
}
