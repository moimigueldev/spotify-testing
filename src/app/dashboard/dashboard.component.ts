import { Component, OnInit } from '@angular/core';
import { GetUserService } from '../services/get-user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  token:string;


  constructor(
    private userService: GetUserService
  ) { }

  ngOnInit() {
    let hashString = window.location.hash.toString()
    const start = hashString.indexOf('=') + 1;
    const end = hashString.indexOf('&');

    this.token = hashString.slice(start, end)
    this.userService.loginUser(this.token)
  }

  // saveUserData() {
  //   let hashString = window.location.hash.toString()
  //   const start = hashString.indexOf('=') + 1;
  //   const end = hashString.indexOf('&');

  //   const token = hashString.slice(start, end)
    
  //   this.userService.saveUserInfo(token);
  //   // console.log('in The dashboard Component', hashString.substr(start, end))
  // }

  saveUserData() {

    
    this.userService.saveUserInfo(this.token);
    // console.log('in The dashboard Component', hashString.substr(start, end))
  }

  getSavedUser() {
    this.userService.getSavedUser()
  }

}
