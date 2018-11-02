import { User } from './../interfaces/user';
import { UserServices } from '../../services/user.service';
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
  query: string = '';
  constructor(public navCtrl: NavController, private userServices: UserServices) {
    this.friends = this.userServices.getFriends();
  }

  goToConversation(user){
    this.navCtrl.push(ConversationPage, {user: user, users: this.friends });
  }

  goToLogin(){
    this.navCtrl.push(LoginPage);
  }

}
