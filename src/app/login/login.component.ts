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

    // REMOVES BACKGROUND IMAGE AND SETS THE APPROPRIATE CLASS FOR THE COMPONENT
    var classList = document.body.classList;
    while (classList.length > 0) {
      classList.remove(classList.item(0));
    }
    document.body.classList.add('login-bg-image');

  }

  onLogin(): void {
    this.userService.getUserData();
  }





}
