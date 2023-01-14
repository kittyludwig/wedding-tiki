import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {Router} from "@angular/router";
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tibor en Kitty gaan trouwen!';
  isPhonePortrait = false;

  constructor(private responsive: BreakpointObserver, private router: Router, private authService: AuthService) {
  }

  ngOnInit() {

    this.responsive.observe(Breakpoints.HandsetPortrait)
      .subscribe(result => {

        console.log("Matches: " + result.matches)
        this.isPhonePortrait = result.matches;

      });
  }

  logout() {
    console.log('logout');
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  getLoggedIn() {
    return localStorage.getItem('token') !== null;
  }
}
