import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'zxing-angular-demo';
  barcode = '';
  

  myFn(resultString) {
    console.log(resultString);
    this.barcode = resultString;
  }

}
