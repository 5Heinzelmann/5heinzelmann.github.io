import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section',
  template: `
    <div class="section">
      <app-left class="left" [title]="title" [content]="content"></app-left>
      <app-right class="right" [image]="image"></app-right>
    </div>
  `,
  styles: [`
    .section {
      display: flex;
      height: 65vh;
    }
    .left, .right {
      flex: 1;
    }
  `]
})
export class SectionComponent {
  @Input() title: string = '';
  @Input() content: string = '';
  @Input() image: string = '';
}
