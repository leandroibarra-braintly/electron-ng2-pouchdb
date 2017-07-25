import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: '<h1>¡{{name}} listo!</h1>'
})
export class AppComponent {
  name = 'Angular 2';
}
