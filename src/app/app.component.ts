import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <app-left class="left"></app-left>
      <app-right class="right"></app-right>
    </div>
  `,
  styles: [`
    .container {
      display: flex;
      height: 100vh;
      font-family: 'Dosis', sans-serif;
    }
    .left, .right {
      flex: 1;
    }
  `]
})
export class AppComponent {
}
