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

  getUserData() {
    console.log('hello from the service')
    return this.http.get('https://us-central1-angular-532f5.cloudfunctions.net/app', {responseType: 'text'}).subscribe(data => {
      console.log('data', data)
    }) 
  }
}
