import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import {urlRoutes} from '../../assets/keys';

@Injectable({
  providedIn: 'root'
})





export class GetUserService {

  logoutObserabel: Subscription;
  
  constructor(
    private http: HttpClient,
    private router: Router,
    private cookieService: CookieService
  ) { }

  ngOnInit() {
   
  }
  
  // https://us-central1-angular-532f5.cloudfunctions.net
  getUserData() {
    const doesCookieExist = this.cookieService.check('spotify-user')
    if (doesCookieExist) {
      this.router.navigate(['/dashboard'])
    } else {
      this.http.get( urlRoutes['authLogin'])
      .subscribe(data => {
        window.location.href = data['url']
      })
    } 
  }

 




  loginUser(token) {
    this.http.post(urlRoutes['authLoginUser'], {token}).subscribe(data => {
        this.cookieService.set('spotify-user', JSON.stringify(data), 24 * 60 * 60 * 1000)
        this.router.navigate(['/dashboard'])
    })
  }

 
  

getSavedUser() {
  let cookie = this.cookieService.get('spotify-user')
  
  if(cookie.length) {
    cookie = JSON.parse(cookie)
    this.http.post(urlRoutes['authSavedUser'], {cookie}).subscribe(data => {
    console.log("back with the data", data)
  })
  } else {
    this.router.navigate(['/login'])
  }
  
  
}


logoutUser() {

  this.http.get(urlRoutes['authLogout'], {responseType: 'text'}).subscribe(data => {

    this.cookieService.delete('spotify-user')
    this.router.navigate(['/login'])
  })
  
  
}

  // ngOnDestroy(): void {
  //   console.log('destroing, logout')
  //   this.logoutObserabel ? this.logoutObserabel.unsubscribe(): null;
  // }

  
}
