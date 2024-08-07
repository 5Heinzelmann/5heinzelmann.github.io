import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <app-section></app-section>
    </div>
  `,
  styles: [`
    .container {
      font-family: 'Dosis', sans-serif;
    }
  `]
})
export class AppComponent {}
