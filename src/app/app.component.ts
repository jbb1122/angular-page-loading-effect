import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  showOverlay = true;
  constructor() {
    this.loading();
  }
  loading(): void {
    this.showOverlay = true;
    setTimeout(() => {
      this.showOverlay = false;
    }, 3000);
  }
}
