import { User } from './../interfaces/user';
import { ConversationPage } from './../conversation/conversation';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  friends: User[];
  constructor(public navCtrl: NavController) {
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
    this.friends = [user1, user2];
    console.log(user1);
  }

  goToConversation(user){
    this.navCtrl.push(ConversationPage, {user: user});
  }

  goToLogin(){
    this.navCtrl.push(LoginPage);
  }

}
