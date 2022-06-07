import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/sales.interface';
import { sortType } from '../types/types';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(heroes: Hero[], sortBy: sortType = 'any'): Hero[] {
    if(sortBy === 'any'){
      return heroes;
    }
    if(sortBy === 'fly'){
      return heroes.sort((a, b) => (a[sortBy] > b[sortBy]) ? -1 : 1);
    }
    return heroes.sort((a, b) => (a[sortBy] > b[sortBy]) ? 1 : -1);
  }

}
