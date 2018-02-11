import { Component, OnInit } from '@angular/core';

import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit() {
  }

  loginFacebook() {
    this.appService.loginFacebook();
  }

  loginTwitter() {
    this.appService.loginTwitter();
  }

  loginGoogle() {
    this.appService.loginGoogle();
  }

  loginGithub() {
    this.appService.loginGithub();
  }

}
