import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-left',
  template: `
    <div class="left-container">
      <div class="left-content">
        <h1>{{ title }}</h1>
        <p>{{ content }}</p>
      </div>
    </div>
  `,
  styles: [`
    .left-container {
      display: flex;
      justify-content: flex-end;
      width: 100%;
    }
    .left-content {
      padding: 20px;
      font-family: 'Dosis', sans-serif;
      text-align: left;
    }
  `]
})
export class LeftComponent {
  @Input() title: string = 'Welcome';
  @Input() content: string = 'This is some text content for the left side of the page.';
}
