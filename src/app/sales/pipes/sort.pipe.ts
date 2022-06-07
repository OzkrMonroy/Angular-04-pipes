import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/sales.interface';
import { sortType } from '../types/types';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(heroes: Hero[], sortBy: sortType = 'any'): Hero[] {
    const newHeroes = [...heroes];

    if(sortBy === 'any'){
      return newHeroes;
    }
    if(sortBy === 'fly'){
      return newHeroes.sort((a, b) => (a[sortBy] > b[sortBy]) ? -1 : 1);
    }
    return newHeroes.sort((a, b) => (a[sortBy] > b[sortBy]) ? 1 : -1);
  }

}
