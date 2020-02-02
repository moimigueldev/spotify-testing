import { Component, OnInit } from '@angular/core';
import { GetUserService } from '../services/get-user.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login-redirect',
  templateUrl: './login-redirect.component.html',
  styleUrls: ['./login-redirect.component.scss']
})
export class LoginRedirectComponent implements OnInit {

  token

  constructor(
    private userService: GetUserService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {




    document.body.classList.add('redirect-page');


    // let hashString = window.location.hash.toString()
    // const start = hashString.indexOf('=') + 1;
    // const end = hashString.indexOf('&');

    // this.token = hashString.slice(start, end)
    // this.userService.loginUser(this.token)
  }

}
