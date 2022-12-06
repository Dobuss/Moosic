import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router, private authService: AuthService) {
    this.authService.user = {
      username: 'testUser',
      email: 'testEmail',
      photo: 'https://i.pinimg.com/564x/89/95/52/8995526e78420e73c181a220a8b2710d.jpg',
      songs: [],
      favSongs: [],
    };
    this.router.navigate(['/']);
   };
}
