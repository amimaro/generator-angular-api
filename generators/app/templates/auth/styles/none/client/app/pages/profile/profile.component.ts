import { Component, OnInit } from '@angular/core';

import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any;

  constructor(private appService: AppService) {
    this.appService.getSession().subscribe(
      res => {
        console.log(res);
        this.user = res;
      },
      err => {
        console.log("Error occured");
        console.log(err);
        this.appService.routeTo(['/login'])
      });
  }

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
