import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetUserService {

  logoutObserabel: Subscription;
  
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    
  }
  
  // https://us-central1-angular-532f5.cloudfunctions.net
  getUserData() {
    return this.http.get('https://us-central1-angular-532f5.cloudfunctions.net/app/auth/login');
  }

  logoutUser() {
    this.http.get('https://us-central1-angular-532f5.cloudfunctions.net/app/auth/logout', {responseType: 'text'}).subscribe(data => {
      console.log('loggin out', data)
    })
  }

  getUserInfo(token) {
    this.http.post('https://us-central1-angular-532f5.cloudfunctions.net/app/auth/user', {token}).subscribe(data => {
      console.log('loggin out', data)
    })
  }   

  // ngOnDestroy(): void {
  //   console.log('destroing, logout')
  //   this.logoutObserabel ? this.logoutObserabel.unsubscribe(): null;
  // }

  
}
