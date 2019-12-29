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
    console.log('in The dashboard Component');
    
  }

}
