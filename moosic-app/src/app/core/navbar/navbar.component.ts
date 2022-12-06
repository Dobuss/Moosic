import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/user/auth-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  get isLoggedIn(){
    return this.authService.isLoggedIn;
  }
  
  constructor(private authService: AuthService, router: Router) { }

}
