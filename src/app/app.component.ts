import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Gtag } from 'angular-gtag';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router,
    gtag: Gtag
  ) {
  //   this.router.events.subscribe(event => {
  //    if (event instanceof NavigationEnd) {
  //      (<any>window).ga('set', 'page', event.urlAfterRedirects);
  //      (<any>window).ga('send', 'pageview');
  //    }
  //  });
 }

 sendEvent = () => {
  console.log('sending event to gtag');
}
}
