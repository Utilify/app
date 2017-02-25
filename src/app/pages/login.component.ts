import { Component } from '@angular/core';
import { Auth0Service } from '../services/auth0/auth0.service';

@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  private loginButtonEnabled = false;

  constructor(private auth0Service: Auth0Service) { }

  login(email: string, password: string) {
    this.loginButtonEnabled = true;
    this.auth0Service.login(email, password);
  }

}
