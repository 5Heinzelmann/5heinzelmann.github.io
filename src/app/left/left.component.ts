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
      align-items: center;
      width: 100%;
      height: 100%;
    }
    .left-content {
      padding: 20px;
      margin-left: 32px;
      margin-right: 32px;
      font-family: 'Dosis', sans-serif;
      text-align: left;
    }
  `]
})
export class LeftComponent {
  @Input() title!: string;
  @Input() content!: string;
}
