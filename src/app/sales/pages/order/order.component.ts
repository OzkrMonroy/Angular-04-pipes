import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent implements OnInit {
  transformUppercase: boolean = true;

  constructor() { }
  
  ngOnInit(): void {
  }
  get btnText():string{
    return this.transformUppercase ? 'To lowercase' : 'To Uppercase'
  }

  toggleUppercase():void{
    this.transformUppercase = !this.transformUppercase
  }

}
