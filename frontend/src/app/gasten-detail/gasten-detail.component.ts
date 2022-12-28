import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GastService} from "../../service/gast.service";
import {Location} from "@angular/common";
import {Gast} from "../../model/Gast";

@Component({
  selector: 'app-gasten-detail',
  templateUrl: './gasten-detail.component.html',
  styleUrls: ['./gasten-detail.component.css']
})
export class GastenDetailComponent implements OnInit {
  @Input() gast?: Gast;

  constructor(private route: ActivatedRoute, private gastService: GastService, private location: Location) {
  }

  ngOnInit(): void {
    this.getGast();
  }

  getGast(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.gastService.getGast(id)
      .subscribe(gast => this.gast = gast)
  }

  goBack(): void {
    this.location.back();
  }
}
