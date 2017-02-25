import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Auth0Service } from '../services/auth0/auth0.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: Auth0Service) {}

  canActivate() {
    if (this.authService.isAuthenticated()) {
      return true;
    }

    this.router.navigate(['/pages/login']);
    return false;
  }
}
