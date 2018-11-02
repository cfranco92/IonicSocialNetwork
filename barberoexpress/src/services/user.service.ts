import { User } from '../pages/interfaces/user';
import { Injectable } from '@angular/core';

/*
  Generated class for the ServicesUserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserServices {
  friends: User[];
  constructor() {
    console.log('Hello ServicesUserProvider Provider');
    let user1: User = {
      nick: 'Cristian',
      subnick: 'cfranc11',
      age: 26,
      email: 'cfrancobedoya@gmail.com',
      friend: true,
      uid: 1
    };
    let user2: User = {
      nick: 'Alejandra',
      subnick: 'alejbert',
      age: 26,
      email: 'alejbert@gmail.com',
      friend: false,
      uid: 2
    };
    let user3: User = {
      nick: 'Sebastián',
      subnick: 'alejbert',
      age: 26,
      email: 'alejbert@gmail.com',
      friend: true,
      uid: 3
    };
    this.friends = [user1, user2, user3];
  }

  getFriends() {
    return this.friends;
  }
}
