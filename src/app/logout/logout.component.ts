import { Component, OnInit } from '@angular/core';
import { GetUserService } from '../services/get-user.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    private userService: GetUserService,
    private cookieService: CookieService
  ) { }

  ngOnInit() {
    // console.log('coockie service', this.cookieService.get('express:sess'))
  }

  logout() {
   this.userService.logoutUser()
  }

}
 