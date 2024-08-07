import { Component } from '@angular/core';

@Component({
  selector: 'app-section',
  template: `
    <div class="section">
      <app-left class="left"></app-left>
      <app-right class="right"></app-right>
    </div>
  `,
  styles: [`
    .section {
      display: flex;
      height: 100vh;
    }
    .left, .right {
      flex: 1;
    }
  `]
})
export class SectionComponent {}
