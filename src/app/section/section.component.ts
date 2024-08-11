import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section',
  template: `
    <div class="section">
      <div class="content">
        <markdown [src]="'assets/markdown/' + filename"></markdown>
      </div>
      <app-image class="image" [image]="image"></app-image>
    </div>
  `,
  styles: [`
    .section {
      display: flex;
      height: 65vh;
      gap: 2rem;
    }
    .content, .image {
      flex: 1;
    }
    .content {
      padding: 2rem;
      overflow-y: auto;
    }
  `]
})
export class SectionComponent {
  @Input() filename: string = '';
  @Input() image: string = '';
}
