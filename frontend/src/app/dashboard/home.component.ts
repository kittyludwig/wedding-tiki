import {Component} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor() {}

  // gasten: Gast[] = [];
  //
  // constructor(private gastService: GastService) {
  // }
  //
  // ngOnInit(): void {
  //   this.getHeroes();
  // }
  //
  // getHeroes(): void {
  //   this.gastService.getGasten()
  //     .subscribe(heroes => this.gasten = heroes.slice(1, 5));
  // }
}
