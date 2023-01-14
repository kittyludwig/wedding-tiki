import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Login} from "../../interface/login";
import {Router} from "@angular/router";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: Login = {userid: "admin", password: "admin@123"}
  loginForm: FormGroup;
  message?: string;
  returnUrl?: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.formBuilder.group({
      userid: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.returnUrl = '/home';
    this.authService.logout();
  }

  login() {
    if (this.authService.login(this.loginForm.value.userid, this.loginForm.value.password)) {
      this.router.navigate([this.returnUrl]);
    } else {
      this.message = "De inlognaam en wachtwoord komen niet overeen. Probeer het nogmaals.";
    }
  }
}
