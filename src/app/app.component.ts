import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'portofolio';

  showValue: boolean = true;
  testarr = [
    {
      name: 'test1',
      value: 1,
    },
    {
      name: 'test2',
      value: 2,
    },
    {
      name: 'test3',
      value: 3,
    },
  ];
}
