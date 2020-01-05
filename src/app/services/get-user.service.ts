import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

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
    return this.http.get('http://localhost:5000/angular-532f5/us-central1/app/auth/login');
  }

 

  saveUserInfo(token) {
    this.http.post('http://localhost:5000/angular-532f5/us-central1/app/auth/user', {token}).subscribe(data => {
      if( data['statusCode'] === 401) {
        this.router.navigate(['/login'])
      } else {
        console.log('data', data)
      }
    })
  }   




  loginUser(token) {
    
   
  

    // 24 * 60 * 60 * 1000
    // this.cookieService.set('user', 'moisesmiguel')
    
    this.http.post('http://localhost:5000/angular-532f5/us-central1/app/auth/loginUser', {token}).subscribe(data => {
       
      
        this.cookieService.set('spotify-user', JSON.stringify(data), 24 * 60 * 60 * 1000)
        this.router.navigate(['/dashboard'])
      
    })
  }

 
  

getSavedUser() {
  let cookie = this.cookieService.get('spotify-user')
  
  if(cookie.length) {
    cookie = JSON.parse(cookie)
    this.http.post('http://localhost:5000/angular-532f5/us-central1/app/auth/savedUser', {cookie}).subscribe(data => {
    console.log("back with the data", data)
  })
  } else {
    this.router.navigate(['/login'])
  }
  
  
}


logoutUser() {
  console.log('login out', JSON.parse(this.cookieService.get('spotify-user')))
  // console.log('login out', this.cookieService.delete('spotify-user'))
  // console.log('login out', this.cookieService.get('spotify-user'))
  
}

  // ngOnDestroy(): void {
  //   console.log('destroing, logout')
  //   this.logoutObserabel ? this.logoutObserabel.unsubscribe(): null;
  // }

  
}
