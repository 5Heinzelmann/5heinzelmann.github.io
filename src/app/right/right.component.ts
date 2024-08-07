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
      font-family: 'Dosis', sans-serif;
    }
    .image-container {
      width: calc(100% - 64px);
      height: 100%;
      position: relative;
      margin: 32px;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `]
})
export class RightComponent {
  @Input() image!: string;
}
