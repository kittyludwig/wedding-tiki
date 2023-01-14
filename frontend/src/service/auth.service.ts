import {Injectable} from '@angular/core';
import {AVONDGAST_LOGIN, DAGGAST_LOGIN, FAMILIE_LOGIN} from "../model/LoginGegevens";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  logout(): void {
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('token');
  }

  login(user: string, password: string): boolean {
    console.log("In login")
    // stop here if form is invalid
    if (user === FAMILIE_LOGIN.userid && password === FAMILIE_LOGIN.password) {
      console.log("Login familie successful");
      localStorage.setItem('isLoggedIn', "true");
      localStorage.setItem('token', "familie");
      return true;

    } else if (user === DAGGAST_LOGIN.userid && password === DAGGAST_LOGIN.password) {
      console.log("Login daggast successful");
      localStorage.setItem('isLoggedIn', "true");
      localStorage.setItem('token', "daggast");
      return true;

    } else if (user === AVONDGAST_LOGIN.userid && password === AVONDGAST_LOGIN.password) {
      console.log("Login avondgast successful");
      localStorage.setItem('isLoggedIn', "true");
      localStorage.setItem('token', "avondgast");
      return true;
    } else {
      return false;
    }
  }
}
