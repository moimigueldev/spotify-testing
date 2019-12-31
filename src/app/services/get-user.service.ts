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
  // https://angular-532f5.firebaseapp.com/login

  getUserData() {
    return this.http.get('https://us-central1-angular-532f5.cloudfunctions.net/app/auth/login');
  }

  logoutUser() {
    this.logoutObserabel = this.http.get('https://us-central1-angular-532f5.cloudfunctions.net/app/auth/logout', {responseType: 'text'}).subscribe(data => {
      console.log('loggin out', data)
    })
  }

  ngOnDestroy(): void {
    console.log('destroing, logout')
    this.logoutObserabel ? this.logoutObserabel.unsubscribe(): null;
  }

  
}
