import {Component} from '@angular/core';
import {NgbNavModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterLinkWithHref} from "@angular/router";

@Component({
  selector: 'ngbd-nav-basic',
  standalone: true,
  imports: [NgbNavModule, RouterLinkWithHref],
  templateUrl: './navigatie.component.html',
})
export class NavigatieComponent {
}
