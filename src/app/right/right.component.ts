import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-right',
  template: `
    <div class="right-content">
      <div class="image-container">
        <img [src]="image" alt="Section image">
      </div>
    </div>
  `,
  styles: [`
    .right-content {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
      font-family: 'Dosis', sans-serif;
    }
    .image-container {
      width: 90%;
      height: 90%;
      position: relative;
      aspect-ratio: 1 / 1;
    }
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `]
})
export class RightComponent {
  @Input() image!: string;
}
