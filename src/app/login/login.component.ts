import { Component, OnInit } from '@angular/core';
import { GetUserService } from '../services/get-user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(
    private userService: GetUserService
  ) { }

  ngOnInit() {
  }

  onLogin(): void {
    this.userService.getUserData();
    
  }




}
