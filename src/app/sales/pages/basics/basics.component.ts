import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent{
  lowerCaseName: string = 'oscar monroy';
  upperCaseName: string = 'OSCAR MONROY';
  randomCaseName: string = 'osCaR monRoY';

  date: Date = new Date();
}
