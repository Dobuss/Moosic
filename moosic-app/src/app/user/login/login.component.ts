import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  loginHandler(form: NgForm): void {
    // this.authService.user = {
    //   username: 'testUser',
    //   email: 'testEmail',
    //   photo:
    //     'https://i.pinimg.com/564x/89/95/52/8995526e78420e73c181a220a8b2710d.jpg',
    //   songs: [],
    //   favSongs: [],
    // };
    // const returnUrl =
    //   this.activatedRoute.snapshot.queryParams['returnUrl'] || '/';

    // this.router.navigate([returnUrl]);
  }
}
