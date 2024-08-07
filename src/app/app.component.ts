import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <app-section
        [title]="'Section 1'"
        [content]="'This is the content for section 1'"
        [image]="'https://loremflickr.com/300/300/dog'">
      </app-section>
      <app-section
        [title]="'Section 2'"
        [content]="'This is the content for section 2'"
        [image]="'https://loremflickr.com/300/300/dog'">
      </app-section>
      <app-section
        [title]="'Section 3'"
        [content]="'This is the content for section 3'"
        [image]="'https://loremflickr.com/300/300/dog'">
      </app-section>
    </div>
  `,
  styles: [`
    .container {
      font-family: 'Dosis', sans-serif;
    }
  `]
})
export class AppComponent {}
