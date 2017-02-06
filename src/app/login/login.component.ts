import { Component, OnInit } from '@angular/core';
import { Auth0Service } from '../services/auth0/auth0.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(public auth: Auth0Service) { }

  ngOnInit() {
  }

}
