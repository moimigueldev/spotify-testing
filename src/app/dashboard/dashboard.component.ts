import { Component, OnInit } from '@angular/core';
import { GetUserService } from '../services/get-user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  constructor(
    private userService: GetUserService
  ) { }

  ngOnInit() {
    let hashString = window.location.hash.toString()
    const start = hashString.indexOf('=') + 1;
    const end = hashString.indexOf('&');

    const token = hashString.slice(start, end)
    
    this.userService.getUserInfo(token);
    // console.log('in The dashboard Component', hashString.substr(start, end))
    
  }

}
