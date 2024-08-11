import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <app-section
        [filename]="'section1.md'"
        [image]="'assets/mh_square.jpg'">
      </app-section>
    </div>
  `,
  styles: [`
    .container {
      font-family: 'Dosis', sans-serif;
      display: flex;
      flex-direction: column;
      justify-content: center;
      min-height: 100vh;
    }
  `]
})
export class AppComponent {}
