import { Component, OnInit } from '@angular/core';
import { GetUserService } from '../services/get-user.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  token: string;

 
  constructor(
    private userService: GetUserService,

  ) { }

  ngOnInit() {

    this.userService.getSavedUser();

  }
}
