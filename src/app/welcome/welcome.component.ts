import { Component, OnInit, ElementRef } from '@angular/core';
import { GetUserService } from '../services/get-user.service';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(2000, style({ opacity: 1 }))
      ])
    ])
  ]
})
export class WelcomeComponent implements OnInit {

  constructor(
    private elementRef: ElementRef,
    private userService: GetUserService
  ) { }

  ngOnInit() {
    document.body.classList.add('welcome-bg-image');

  }


  onLogin(): void {
    this.userService.getUserData();
  }

  ngOnDestroy() {

    var classList = document.body.classList;
    while (classList.length > 0) {
      classList.remove(classList.item(0));
    }
  }



}
