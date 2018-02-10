import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class AppService {

  user: any;
  message: string = "";
  apiUrl: string = 'http://localhost:8080/api/'

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  routeTo(route){
    this.router.navigate(route);
  }

  getUser () { return this.user; }

  getSession() {
    return this.http.get(this.apiUrl + 'user/auth/session');
  }

  loginFacebook() {
    window.location.href = '/api/user/auth/facebook/login';
  }

  loginTwitter() {
    window.location.href = '/api/user/auth/twitter/login';
  }

  loginGoogle() {
    window.location.href = '/api/user/auth/google/login';
  }

  loginGithub() {
    window.location.href = '/api/user/auth/github/login';
  }

}
