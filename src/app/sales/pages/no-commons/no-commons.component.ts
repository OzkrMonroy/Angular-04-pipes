import { Component } from '@angular/core';
import { interval } from 'rxjs';
@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html',
  styles: [
  ]
})
export class NoCommonsComponent {
  // i18nSelect Pipe
  name: string = 'Susana';
  genre: string = 'f';

  invitationMap = {
    'm': 'invitarlo',
    'f': 'invitarla'
  }

  // i18nPlural Pipe
  clients = ['Maria', 'Oscar', 'Emely', 'Nancy', 'Maggy'];
  clientsMap = {
    '=0': "don't have any clients waiting",
    '=1': "have one client waiting",
    '=2': "have 2 clients waiting",
    'other': "have # clients waiting",
  }

  // Assignments
  changePerson(): void {
    if (this.genre === 'm') {
      this.name = 'Susana';
      this.genre = 'f';
    } else {
      this.name = 'Oscar';
      this.genre = 'm'
    }
  }

  deleteCustomer(): void {
    this.clients.pop();
  }

  // KeyValues Pipe
  person = {
    name: 'Oscar',
    age: 25,
    address: 'Guatemala, Guatemala'
  }

  // Json Pipe
  heroes = [
    {
      name: 'Superman',
      fly: true
    },
    {
      name: 'Robbin',
      fly: false
    },
    {
      name: 'Flash',
      fly: false
    },
  ]

  // Async pipe
  myObservable = interval(1000);
  myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('We have date from the promise');
    }, 3500);
  })
}
