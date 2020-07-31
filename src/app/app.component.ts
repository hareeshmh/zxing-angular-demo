import { Component, OnInit, ViewChild } from '@angular/core';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('scanner') scanner: ZXingScannerComponent;
  availableDevices: MediaDeviceInfo[] = [];
  title = 'zxing-angular-demo';
  barcode = '';

  ngOnInit(): void {

  }


  myFn(resultString: string): void {
    console.log(resultString);
    this.barcode = resultString;
  }

}
