import { Component } from '@angular/core';
import { AuthService } from 'src/app/user/auth-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  get user () {
    return this.authService.user;
  }

  constructor(private authService: AuthService) { }


}
