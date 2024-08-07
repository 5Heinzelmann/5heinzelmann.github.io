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
    }
    img {
      width: 600px;
      height: 600px;
      object-fit: cover;
      border-radius: 8px;
    }
  `]
})
export class RightComponent {
  @Input() image!: string;
}
