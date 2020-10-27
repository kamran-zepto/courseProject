import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements = [
    { type: 'server', name: 'Test', content: 'This is test content' },
    { type: 'blueprint', name: 'Test', content: 'This is test content' },
  ];
}
