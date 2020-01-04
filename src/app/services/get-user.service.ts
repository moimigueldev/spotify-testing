import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GetUserService {

  logoutObserabel: Subscription;
  
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
    
  }
  
  // https://us-central1-angular-532f5.cloudfunctions.net
  getUserData() {
    return this.http.get('http://localhost:5000/angular-532f5/us-central1/app/auth/login');
  }

  logoutUser() {
    this.http.get('http://localhost:5000/angular-532f5/us-central1/app/auth/logout', {responseType: 'text'}).subscribe(data => {
      console.log('loggin out', data)
    })
  }

  getUserInfo(token) {
    this.http.post('http://localhost:5000/angular-532f5/us-central1/app/auth/user', {token}).subscribe(data => {
      if( data['statusCode'] === 401) {
        this.router.navigate(['/login'])
      } else {
        console.log('data', data)
      }
    })
  }   

  // ngOnDestroy(): void {
  //   console.log('destroing, logout')
  //   this.logoutObserabel ? this.logoutObserabel.unsubscribe(): null;
  // }

  
}
