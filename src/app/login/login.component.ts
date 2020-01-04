import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GetUserService } from '../services/get-user.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userData:Subscription;

  constructor(
    private userService: GetUserService
  ) { }

  ngOnInit() {

    
  }

  onLogin(): void {
    this.userData = this.userService.getUserData().subscribe((data) => {
      window.location.href =  data['url']
    });
    
  }


  ngOnDestroy(): void {
    console.log('destroing')
    this.userData ? this.userData.unsubscribe(): null;
  }

}
