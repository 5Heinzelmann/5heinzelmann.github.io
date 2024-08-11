import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  template: `
    <div class="image-content">
      <div class="image-container">
        <img [src]="image" alt="Section image">
      </div>
    </div>
  `,
  styles: [`
    .image-content {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 100%;
      width: 100%;
      padding: 32px;
      box-sizing: border-box;
      font-family: 'Dosis', sans-serif;
    }
    .image-container {
      width: 100%;
      height: 100%;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    img {
      max-width: 100%;
      max-height: 100%;
      width: auto;
      height: auto;
      object-fit: contain;
      border-radius: 8px;
    }
    @media (max-width: 768px) {
      .image-content {
        padding: 16px;
      }
    }
  `]
})
export class ImageComponent {
  @Input() image!: string;
}
