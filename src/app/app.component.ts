import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-generic-component [programmingLanguage]="'JavaScript'"
                           [framework]="'Angular'"
                            [css]="'Pure Css'">

    </app-generic-component>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'untitled';
}
