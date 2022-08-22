import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public name = 'Ngx Mask';
  public value = '';

  public autofill(event: any) {
    let value = event.target.value;
    if (value.length < 5) {
      value = value.padEnd(5, '0');
      this.value = value;
    }
  }
}
