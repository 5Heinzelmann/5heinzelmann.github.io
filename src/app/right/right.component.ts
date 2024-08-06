import { Component } from '@angular/core';

@Component({
  selector: 'app-right',
  template: `
    <div class="right-content">
      <img src="https://via.placeholder.com/300" alt="Placeholder image">
    </div>
  `,
  styles: [`
    .right-content {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
    img {
      max-width: 100%;
      height: auto;
    }
  `]
})
export class RightComponent {}
