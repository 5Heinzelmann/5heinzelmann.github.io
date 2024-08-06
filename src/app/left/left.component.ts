import { Component } from '@angular/core';

@Component({
  selector: 'app-left',
  template: `
    <div class="left-content">
      <h1>Welcome</h1>
      <p>This is some text content for the left side of the page.</p>
    </div>
  `,
  styles: [`
    .left-content {
      padding: 20px;
    }
  `]
})
export class LeftComponent {}
