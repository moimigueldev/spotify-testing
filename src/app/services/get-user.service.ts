import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { urlRoutes } from '../../assets/keys';

@Injectable({
  providedIn: 'root'
})





export class GetUserService {

  logoutObserabel: Subscription;
  topArtist = new Subject();
  genres = new Subject();

  constructor(
    private http: HttpClient,
    private router: Router,
    private cookieService: CookieService
  ) { }

  ngOnInit() {

  }


  getUserData() {
    const doesCookieExist = this.cookieService.check('spotify-user')
    if (doesCookieExist) {
      this.router.navigate(['/dashboard'])
    } else {
      this.http.get(urlRoutes['authLogin'])
        .subscribe(data => {
          window.location.href = data['url']
        })
    }
  }






  loginUser(token) {
    this.http.post(urlRoutes['authLoginUser'], { token }).subscribe(data => {
      this.cookieService.set('spotify-user', JSON.stringify(data), 24 * 60 * 60 * 1000)
      this.router.navigate(['/dashboard'])
    })
  }



  // this one
  getSavedUser() {
    let cookie = this.cookieService.get('spotify-user')

    if (cookie.length) {
      cookie = JSON.parse(cookie)
      this.http.post(urlRoutes['authSavedUser'], { cookie }).subscribe(data => {
        // console.log("back with the datas", data)
        this.topArtist.next(data['filteredData'].mostListenedArtist)
        this.genres.next(data['analytics'].topGenres)
      })
    } else {
      this.router.navigate(['/login'])
    }

  }


  logoutUser() {

    this.http.get(urlRoutes['authLogout'], { responseType: 'text' }).subscribe(data => {

      this.cookieService.delete('spotify-user')
      this.router.navigate(['/welcome'])
    })


  }

  // ngOnDestroy(): void {
  //   console.log('destroing, logout')
  //   this.logoutObserabel ? this.logoutObserabel.unsubscribe(): null;
  // }


}
