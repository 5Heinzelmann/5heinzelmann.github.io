import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-right',
  template: `
    <div class="right-content">
      <img [src]="image" alt="Section image">
    </div>
  `,
  styles: [`
    .right-content {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      font-family: 'Dosis', sans-serif;
    }
    img {
      max-width: 100%;
      height: auto;
    }
  `]
})
export class RightComponent {
  @Input() image!: string;
}
