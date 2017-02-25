import { Component, OnInit } from '@angular/core';
import { Auth0Service } from '../services/auth0/auth0.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html'
})
export class FullLayoutComponent implements OnInit {

  public disabled = false;
  public status: {isopen: boolean} = {isopen: false};
  private avatarUrl: string;

  constructor(private auth0Service: Auth0Service) { }

  public toggled(open: boolean): void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  ngOnInit(): void {
    this.avatarUrl = 'https://s.gravatar.com/avatar/dc8d322724638f0fe2c923914788be20?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fpa.png'; //this.auth0Service.getProfile().picture;
  }
}
