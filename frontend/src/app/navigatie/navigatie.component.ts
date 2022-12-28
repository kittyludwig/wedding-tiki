import {Component, Input, OnInit} from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute, Router, RouterLinkWithHref} from "@angular/router";
import {Gast} from "../../model/Gast";
import {GastService} from "../../service/gast.service";
import {Location} from "@angular/common";

@Component({
  selector: 'ngbd-nav-basic',
  standalone: true,
  imports: [NgbNavModule, RouterLinkWithHref],
  templateUrl: './navigatie.component.html',
})
export class NavigatieComponent implements OnInit{
  @Input() gast?: Gast;

  constructor(private route: ActivatedRoute, private gastService: GastService, private router: Router) {
    console.log("Ik ben in de navigatiecomponent")
  }

  openDieetwensenPagina(gast?: Gast) {
    console.log(gast?.voornaam)
    this.router.navigate(['/dieetwensen', {gast: JSON.stringify(gast)}])
  }

  ngOnInit(): void {
    this.getGast();
  }

  getGast(): void {
    console.log(this.route.snapshot.paramMap)
    const id = Number(this.route.snapshot.paramMap.get('uniekeCode'));
    this.gastService.getGast(id)
      .subscribe(gast => this.gast = gast)
  }
}
