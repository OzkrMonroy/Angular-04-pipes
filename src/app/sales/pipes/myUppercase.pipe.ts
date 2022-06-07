import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myUppercase'
})
export class MyUppercasePipe implements PipeTransform{
  transform(value: string, convertUppercase: boolean = true): string {
    return convertUppercase ? value.toUpperCase() : value.toLowerCase()
  }
}