import { Component } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h2>Hello from Hello Component!</h2>`,
  styles: [`
    h2 {
      color: #e74c3c;
    }
  `]
})
export class HelloComponent { }

