import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/sales.interface';
import { sortType } from '../../types/types';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {
  transformUppercase: boolean = true;
  sortBy: sortType = 'any';

  heroes: Hero[] = [
    {
      name: 'Superman',
      fly: true,
      color: Color.blue,
    },
    {
      name: 'Robbin',
      fly: false,
      color: Color.black
    },
    {
      name: 'Flash',
      fly: false,
      color: Color.red
    },
    {
      name: 'Green Lantern',
      fly: true,
      color: Color.green
    },
  ]

  get btnText():string{
    return this.transformUppercase ? 'To lowercase' : 'To Uppercase'
  }

  toggleUppercase():void{
    this.transformUppercase = !this.transformUppercase
  }

  changeSortValue(value: sortType):void {
    this.sortBy = value
  }

}
