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
      min-height: 65vh;
      gap: 2rem;
      align-items: flex-start;
    }
    .content, .image {
      flex: 1;
      min-width: 0;
    }
    .content {
      padding: 2rem;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
    markdown {
      max-width: 80%;
    }
    @media (max-width: 768px) {
      .section {
        flex-direction: column;
        gap: 1rem;
      }
      .content, .image {
        width: 100%;
      }
      .content {
        padding: 1rem;
        align-items: center;
      }
      .image {
        display: flex;
        justify-content: center;
      }
      markdown {
        max-width: 100%;
      }
    }
  `]
})
export class SectionComponent {
  @Input() filename: string = '';
  @Input() image: string = '';
}
