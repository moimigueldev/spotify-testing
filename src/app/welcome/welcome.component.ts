import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(
    private elementRef: ElementRef
  ) { }

  ngOnInit() {

    // REMOVES BACKGROUND IMAGE AND SETS THE APPROPRIATE CLASS FOR THE COMPONENT
    var classList = document.body.classList;
    while (classList.length > 0) {
      console.log('classList', classList)
      classList.remove(classList.item(0));
    }

    document.body.classList.add('welcome-bg-image');

  }





}
