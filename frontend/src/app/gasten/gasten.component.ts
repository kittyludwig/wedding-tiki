import {Component, OnInit} from '@angular/core';
import {GastService} from "../../service/gast.service";
import {MessageService} from "../../service/message.service";
import {Gast} from "../../model/Gast";

@Component({
  selector: 'app-gasten',
  templateUrl: './gasten.component.html',
  styleUrls: ['./gasten.component.css']
})
export class GastenComponent implements OnInit {

  constructor(private gastService: GastService, private messageService: MessageService) {
  }

  gasten: Gast[] = [];
  selectedGast?: Gast;

  onSelect(gast: Gast): void {
    this.selectedGast = gast;
    this.messageService.add(`HeroesComponent: Selected gast id=${gast.id}`);
  }

  getGasten(): void {
    this.gastService.getGasten()
      .subscribe(gasten => this.gasten = gasten)
  }

  // gast: Gast = {
  //   id: 1,
  //   name: 'Mama'
  // }

  ngOnInit(): void {
    this.getGasten()
  }

}
