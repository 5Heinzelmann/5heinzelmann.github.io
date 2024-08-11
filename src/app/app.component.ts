import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <app-section
        [filename]="'section1.md'"
        [image]="'https://loremflickr.com/600/600/computer'">
      </app-section>
    </div>
  `,
  styles: [`
    .container {
      font-family: 'Dosis', sans-serif;
    }
  `]
})
export class AppComponent {}
