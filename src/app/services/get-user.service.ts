import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

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
    return this.http.get('http://localhost:5000/angular-532f5/us-central1/app/auth/login');
  }

  
}
