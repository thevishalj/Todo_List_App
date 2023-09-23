import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //we are calling this from index.html
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TODO List';
}
