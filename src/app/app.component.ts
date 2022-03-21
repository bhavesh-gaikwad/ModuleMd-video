import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'module-md-dev';
  isTwilioView = false;

  onVisitTwilioVideo() {
    this.isTwilioView = !this.isTwilioView;
  }
}
