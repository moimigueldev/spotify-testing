import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetUserService {
  
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    
  }

  // https://us-central1-angular-532f5.cloudfunctions.net/app

  getUserData() {
    console.log('hello from the service')
    return this.http.get('https://us-central1-angular-532f5.cloudfunctions.net/app/auth/logout', {responseType: 'text'}).subscribe(data => {
      console.log('data', data)
    }) 
  }

  // getUserData() {
  //   console.log('hello from the service')
  //   return this.http.get('https://onsnip.com/#/app/auth/logout', {responseType: 'text', headers: {"Access-Control-Allow-Origin": "*"}}).subscribe(data => {
  //     console.log('data', data)
  //   }) 
  // }
}
