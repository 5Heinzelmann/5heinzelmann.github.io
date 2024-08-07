import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-left',
  template: `
    <div class="left-content">
      <h1>{{ title }}</h1>
      <p>{{ content }}</p>
    </div>
  `,
  styles: [`
    .left-content {
      padding: 20px;
      font-family: 'Dosis', sans-serif;
    }
  `]
})
export class LeftComponent {
  @Input() title: string = 'Welcome';
  @Input() content: string = 'This is some text content for the left side of the page.';
}
